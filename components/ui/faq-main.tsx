import { Badge } from "@/components/ui/badge";


const faqs = [
  {
    id: "faq-1",
    question: "What are the benefits document tracking?",
    answer:
      "Document tracking allows you to track who accesses your documents and track how they interact with your content including page visits, time spent on each page along with visitor insights like their email, IPs, locations and more.",
  },
  {
    id: "faq-2",
    question: "Do you offer free trials?",
    answer:
      "Yes! You can signup for any plan and get a 14 day free trial without the need for putting in a payment method.",
  },
  {
    id: "faq-3",
    question: "How does Warpindex make document sharing secure?",
    answer:
      "In addition to view analytics, Warpindex allows you to protect access to your documents using email verification, passwords, domain whitelisting, access expiry and watermarking so that your dcouments is accessible only to the people you want to share it with.",
  },
  {
    id: "faq-4",
    question: "What file types does Warpindex support",
    answer:
      "Warpindex supports all of the common document file types like pdf, word, ppt, png, jpeg, excel and more. Very soon we will be launching suppprot for video formats as well.",
  },
  {
    id: "faq-5",
    question: "Why is Warpindex a better alternative to Docsend?",
    answer:
      "Warpindex provides not only better features but is also free to use with all file protection features from passwords to email verification. On paid plans it is over 80% cheaper to use without any compromise.",
  },
  {
    id: "faq-6",
    question: "Is my data secure?",
    answer:
      "We operate on secure AWS infrastructure in North America, ensuring the encryption of all your data at rest and employing TLS/HTTPS for communication. Our vigilant system monitoring ensures continuous security, earning the trust of large businesses with their data.",
  },
];

const FAQMain = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="text-center">
          <Badge className="text-xs font-medium">FAQ</Badge>
          <h1 className="mt-4 text-4xl font-semibold">
            Common Questions & Answers
          </h1>
          <p className="mt-6 font-medium text-muted-foreground">
            Find out all the essential details about our platform and how it can
            serve your needs.
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-screen-sm">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 flex gap-4">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-xs text-primary">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">{faq.question}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQMain;
