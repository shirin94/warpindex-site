'use client';
import {
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
  type TextareaHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@radix-ui/react-dialog';
import { Loader2, RefreshCw, Send, X } from 'lucide-react';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { cn } from '@/lib/cn';
import { buttonVariants } from '@/components/ui/button';
import type { Processor } from '@/components/markdown-processor';
import Link from 'fumadocs-core/link';

export interface Engine {
  prompt: (
    text: string,
    onUpdate?: (full: string) => void,
    onEnd?: (full: string) => void,
  ) => Promise<void>;

  abortAnswer: () => void;
  getHistory: () => MessageRecord[];
  clearHistory: () => void;
  regenerateLast: (
    onUpdate?: (full: string) => void,
    onEnd?: (full: string) => void,
  ) => Promise<void>;
}

export interface MessageRecord {
  role: 'user' | 'assistant';
  content: string;

  suggestions?: string[];
  references?: MessageReference[];
}

export interface MessageReference {
  breadcrumbs?: string[];
  title: string;
  description?: string;
  url: string;
}

type EngineType = 'orama';

const engines = new Map<EngineType, Engine>();

function AIDialog({ type }: { type: EngineType }) {
  const [engine, setEngine] = useState(engines.get(type));
  const [loading, setLoading] = useState(false);
  const [, update] = useState(0);
  const shouldFocus = useRef(false);

  useEffect(() => {
    void import('@/components/markdown-processor');

    void import('./engines/orama').then(async (res) => {
      const instance = engines.get(type) ?? (await res.createOramaEngine());
      engines.set(type, instance);
      setEngine(instance);
    });
  }, [type, engine]);

  const onTry = useCallback(() => {
    if (!engine) return;

    setLoading(true);
    void engine
      .regenerateLast(() => {
        update((prev) => prev + 1);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [engine]);

  const onClear = useCallback(() => {
    engine?.clearHistory();
    update((prev) => prev + 1);
  }, [engine]);

  const onSubmit = useCallback(
    (message: string) => {
      if (!engine || message.length === 0) return;

      setLoading(true);
      void engine
        .prompt(message, () => {
          update((prev) => prev + 1);
        })
        .finally(() => {
          setLoading(false);
          shouldFocus.current = true;
        });
    },
    [engine],
  );

  useEffect(() => {
    if (shouldFocus.current) {
      document.getElementById('nd-ai-input')?.focus();
      shouldFocus.current = false;
    }
  });

  const messages = engine?.getHistory() ?? [];
  const activeBar = (
    <div className="mt-2 flex flex-row items-center gap-2 border-t pt-1">
      <button
        type="button"
        className={cn(
          buttonVariants({
            variant: 'secondary',
            className: 'gap-1.5',
          }),
        )}
        onClick={onTry}
      >
        <RefreshCw className="size-4" />
        Retry
      </button>
      <button
        type="button"
        className={cn(
          buttonVariants({
            variant: 'ghost',
          }),
        )}
        onClick={onClear}
      >
        Clear Messages
      </button>
    </div>
  );

  return (
    <>
      <List className={cn(messages.length === 0 && 'hidden')}>
        {messages.map((item, i) => (
          <Message key={i} message={item} onSuggestionSelected={onSubmit}>
            {!loading && item.role === 'assistant' && i === messages.length - 1
              ? activeBar
              : null}
          </Message>
        ))}
      </List>
      {loading ? (
        <button
          type="button"
          className={cn(
            buttonVariants({
              variant: 'secondary',
              className: 'rounded-full mx-auto my-1',
            }),
          )}
          onClick={() => {
            engine?.abortAnswer();
          }}
        >
          Abort Answer
        </button>
      ) : null}
      <AIInput loading={loading} onSubmit={onSubmit} />
    </>
  );
}

function AIInput({
  loading,
  onSubmit,
}: {
  loading: boolean;
  onSubmit: (message: string) => void;
}) {
  const [message, setMessage] = useState('');

  const onStart = (e?: React.FormEvent) => {
    e?.preventDefault();
    setMessage('');
    onSubmit(message);
  };

  return (
    <form
      className={cn(
        'flex flex-col rounded-b-lg border-t transition-colors',
        loading && 'bg-fd-muted',
      )}
      onSubmit={onStart}
    >
      <div className="flex flex-row pe-2">
        <Input
          value={message}
          placeholder={loading ? 'AI is answering...' : 'Ask AI something'}
          disabled={loading}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onKeyDown={(event) => {
            if (!event.shiftKey && event.key === 'Enter') {
              onStart();
              event.preventDefault();
            }
          }}
        />
        {loading ? (
          <Loader2 className="mt-2 size-5 animate-spin text-fd-muted-foreground" />
        ) : (
          <button
            type="submit"
            className={cn(
              buttonVariants({
                size: 'sm',
                variant: 'ghost',
                className: 'rounded-full p-1',
              }),
            )}
            disabled={message.length === 0}
          >
            <Send className="size-4" />
          </button>
        )}
      </div>
      <div className="flex justify-end px-3 py-1">
        <a
          href="https://oramasearch.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-fd-muted-foreground hover:text-fd-foreground"
        >
          Powered by Orama
        </a>
      </div>
    </form>
  );
}

function List(props: HTMLAttributes<HTMLDivElement>) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(() => {
      const container = containerRef.current;
      if (!container) return;

      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'instant',
      });
    });

    containerRef.current.scrollTop =
      containerRef.current.scrollHeight - containerRef.current.clientHeight;

    // after animation
    setTimeout(() => {
      const element = containerRef.current?.firstElementChild;

      if (element) {
        observer.observe(element);
      }
    }, 2000);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      {...props}
      ref={containerRef}
      className={cn('min-h-0 flex-1 overflow-auto p-2', props.className)}
    >
      <div className="flex flex-col gap-1">{props.children}</div>
    </div>
  );
}

function Input(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const shared = cn('col-start-1 row-start-1 max-h-60 min-h-12 px-3 py-1.5');

  return (
    <div className="grid flex-1">
      <textarea
        id="nd-ai-input"
        className={cn(
          shared,
          'resize-none bg-transparent placeholder:text-fd-muted-foreground focus-visible:outline-none',
        )}
        {...props}
      />
      <div ref={ref} className={cn(shared, 'invisible whitespace-pre-wrap')}>
        {`${props.value?.toString() ?? ''}\n`}
      </div>
    </div>
  );
}

let processor: Processor | undefined;
const map = new Map<string, ReactNode>();

const roleName: Record<string, string> = {
  user: 'you',
  assistant: 'Warpindex',
};

function Message({
  children,
  onSuggestionSelected,
  message,
}: {
  message: MessageRecord;
  onSuggestionSelected: (suggestion: string) => void;
  children: ReactNode;
}) {
  const { suggestions = [], references = [] } = message;
  const [rendered, setRendered] = useState<ReactNode>(
    map.get(message.content) ?? message.content,
  );

  useEffect(() => {
    const run = async () => {
      const { createProcessor } = await import('@/components/markdown-processor');

      processor ??= createProcessor();
      let result = map.get(message.content);

      if (!result) {
        result = await processor
          .process(message.content, {
            ...defaultMdxComponents,
            img: undefined, // use JSX
          })
          .catch(() => undefined);
      }

      if (result) {
        map.set(message.content, result);
        setRendered(result);
      }
    };

    void run();
  }, [message.content]);

  return (
    <div
      className={cn(
        'rounded-lg border bg-fd-card px-2 py-1.5 text-fd-card-foreground',
        message.role === 'user' &&
          'bg-fd-secondary text-fd-secondary-foreground',
      )}
    >
      <p
        className={cn(
          'mb-1 text-xs font-medium text-fd-muted-foreground',
          message.role === 'assistant' && 'text-fd-primary',
        )}
      >
        {roleName[message.role] ?? 'unknown'}
      </p>
      <div className="prose text-sm">{rendered}</div>
      {references.length > 0 ? (
        <div className="mt-2 flex flex-row flex-wrap items-center gap-1">
          {references.map((item, i) => (
            <Link
              key={i}
              href={item.url}
              className="block rounded-lg border bg-fd-secondary p-2 text-fd-secondary-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
            >
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-xs text-fd-muted-foreground">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      ) : null}
      {suggestions.length > 0 ? (
        <div className="flex flex-row items-center gap-1 overflow-x-auto p-2">
          {suggestions.map((item) => (
            <button
              key={item}
              type="button"
              className={cn(
                buttonVariants({
                  variant: 'secondary',
                  className: 'py-1 text-nowrap',
                }),
              )}
              onClick={() => {
                onSuggestionSelected(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      ) : null}
      {children}
    </div>
  );
}

export function Trigger(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Dialog>
      <DialogTrigger {...props} />
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-50 bg-fd-background/50 backdrop-blur-sm data-[state=closed]:animate-fd-fade-out data-[state=open]:animate-fd-fade-in" />
        <DialogContent
          onOpenAutoFocus={(e) => {
            document.getElementById('nd-ai-input')?.focus();
            e.preventDefault();
          }}
          aria-describedby={undefined}
          className="fixed left-1/2 z-50 my-[5vh] flex max-h-[90dvh] w-[98vw] max-w-[860px] origin-left -translate-x-1/2 flex-col rounded-lg border bg-fd-popover text-fd-popover-foreground shadow-lg focus-visible:outline-none data-[state=closed]:animate-fd-dialog-out data-[state=open]:animate-fd-dialog-in"
        >
          <DialogTitle className="sr-only">Search AI</DialogTitle>
          <DialogClose
            aria-label="Close Dialog"
            tabIndex={-1}
            className="absolute right-1 top-1 rounded-full p-1.5 text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            <X className="size-4" />
          </DialogClose>
          <div className="bg-fd-muted px-2.5 py-2">
            <p className="text-xs text-fd-muted-foreground">
              Answers from AI may be inaccurate, please verify the information.
            </p>
          </div>
          <AIDialog type="orama" />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
