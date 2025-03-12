import { Badge } from "@/components/ui/badge";


const faqs = [
  {
    id: "faq-1",
    question: "Why do I need an SEO URL indexing tool?",
    answer:
      "An SEO URL indexing tool helps you get your web pages indexed by Google faster, which is crucial for SEO. Without proper indexing, your pages won't appear in search results, no matter how well-optimized they are. WarpIndex automates this process, saving you time and improving your site's visibility.",
  },
  {
    id: "faq-2",
    question: "What does 'Checking Pending' actually mean?",
    answer:
      "When a URL shows 'Checking Pending' status, it means WarpIndex has submitted the URL to Google for indexing and is waiting for Google to process the request. This typically takes a few hours to a few days, depending on various factors.",
  },
  {
    id: "faq-3",
    question: "How to check if a URL is indexed on Google?",
    answer:
      "You can check if a URL is indexed on Google by using the 'site:' operator followed by your URL in Google search, or by using WarpIndex's dashboard which provides real-time indexing status for all your submitted URLs.",
  },
  {
    id: "faq-4",
    question: "Why 'Owner' permissions is needed when inviting Service Account(s) to Google Search Console?",
    answer:
      "Owner permissions are required because WarpIndex needs full access to submit URLs for indexing and manage your site's presence in Google Search results. This level of permission is necessary to perform automated indexing operations on your behalf.",
  },
  {
    id: "faq-5",
    question: "How does WarpIndex work?",
    answer:
      "WarpIndex uses Google's APIs and advanced automation to submit your URLs for indexing. It continuously scans your site, detects new or updated pages, and automatically submits them to Google's index. It also provides real-time tracking of indexing status and automated sitemap synchronization.",
  },
  {
    id: "faq-6",
    question: "What's your refund policy?",
    answer:
      "We offer a satisfaction guarantee on our services. If you're not satisfied with WarpIndex, contact our support team within the first 30 days of your subscription for a full refund.",
  },
  {
    id: "faq-7",
    question: "How long does it take to index pages?",
    answer:
      "Indexing time varies depending on several factors including your site's authority and Google's crawling priorities. With WarpIndex, most pages get indexed within a few hours to a few days, significantly faster than natural indexing.",
  },
  {
    id: "faq-8",
    question: "How do I confirm my account upgrade after payment?",
    answer:
      "After successful payment, your account is automatically upgraded and you'll receive a confirmation email. You can also check your current plan and features in your WarpIndex dashboard under Account Settings.",
  },
  {
    id: "faq-9",
    question: "Is my data secure?",
    answer:
      "Yes, we use Google OAuth protocol with restricted permissions to handle indexing securely. Your data is encrypted and stored securely on AWS servers in the USA, following enterprise-class security and privacy protocols.",
  },
  {
    id: "faq-10",
    question: "What's included in the different plans?",
    answer:
      "Our plans vary by number of websites (2-25), indexing frequency (daily to hourly), request limits (200-1000/day), and number of users (1-20). All plans include unlimited URLs, Google auto URL indexing/de-indexing, and sitemap sync. Higher tiers also include priority support.",
  },
  {
    id: "faq-11",
    question: "What are the benefits document tracking?",
    answer:
      "Document tracking allows you to track who accesses your documents and track how they interact with your content including page visits, time spent on each page along with visitor insights like their email, IPs, locations and more.",
  },
  {
    id: "faq-12",
    question: "Is the free plan really free forever?",
    answer:
      "Yes, our free plan is completely free forever with no hidden charges. You can use all the essential features including document tracking and protection features without any cost.",
  },
  {
    id: "faq-13",
    question: "How does Warpindex make document sharing secure?",
    answer:
      "In addition to view analytics, Warpindex allows you to protect access to your documents using email verification, passwords, domain whitelisting, access expiry and watermarking so that your dcouments is accessible only to the people you want to share it with.",
  },
  {
    id: "faq-14",
    question: "What file types does Warpindex support",
    answer:
      "Warpindex supports all of the common document file types like pdf, word, ppt, png, jpeg, excel and more. Very soon we will be launching suppprot for video formats as well.",
  },
  {
    id: "faq-15",
    question: "Why is Warpindex a better alternative to Docsend?",
    answer:
      "Warpindex provides not only better features but is also free to use with all file protection features from passwords to email verification. On paid plans it is over 80% cheaper to use without any compromise.",
  },
  {
    id: "faq-16",
    question: "Is my data secure?",
    answer:
      "We operate on secure AWS infrastructure in North America, ensuring the encryption of all your data at rest and employing TLS/HTTPS for communication. Our vigilant system monitoring ensures continuous security, earning the trust of large businesses with their data.",
  },
  {
    id: "faq-17",
    question: "Can I cancel anytime or is there a lock-in period?",
    answer:
      "On monthly plans, you can cancel at any time without any commitment. Annual plans are locked in for a year.",
  },
  {
    id: "faq-18",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major international credit cards for payment.",
  },
  {
    id: "faq-19",
    question: "Is payment processing secure?",
    answer:
      "Yes, we use Stripe as our payment processor, ensuring your payment information is handled with the highest level of security and compliance.",
  },
  {
    id: "faq-20",
    question: "Do you offer any discounts?",
    answer:
      "Yes, we provide generous discounts for non-profits and startups. Contact us at contact@warpindex.com to apply.",
  },
  {
    id: "faq-21",
    question: "What discounts are available for startups?",
    answer:
      "We offer 50% off on all annual plans and 25% off on all monthly plans to qualifying startups. Contact us at contact@warpindex.com to apply.",
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
