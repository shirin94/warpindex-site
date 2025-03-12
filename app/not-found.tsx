import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">404</h1>
      <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
        Page not found
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        Sorry, we couldn&apos;t find what you were looking for. It may have been moved or deleted.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      >
        Return Home
      </Link>
    </main>
  );
}