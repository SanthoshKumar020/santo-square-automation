import "./globals.css";

const SITE_URL = "https://santo-square-automation.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Santo Square Automation — Websites, Web Apps & Automations",
    template: "%s · Santo Square Automation",
  },
  description:
    "Santo Square Automation is a one-person studio run by Santhoshkumar Karthikeyan, building business websites, web applications and WhatsApp automations from Chennai, India. Direct-booking websites for hotels and homestays, custom web apps, and AI-powered features.",
  keywords: [
    "freelance web developer Chennai",
    "one-person web studio India",
    "direct booking website hotel homestay",
    "WhatsApp automation",
    "React Next.js developer",
    "business website India",
    "Santo Square Automation",
    "Santhoshkumar Karthikeyan",
  ],
  authors: [{ name: "Santhoshkumar Karthikeyan" }],
  creator: "Santhoshkumar Karthikeyan",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Santo Square Automation",
    title: "Santo Square Automation — Websites, Web Apps & Automations",
    description:
      "One developer, the whole job: business websites, web apps and automations from Chennai, India.",
    images: [{ url: "/logo.png", width: 1200, height: 480, alt: "Santo Square Automation logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santo Square Automation — Websites, Web Apps & Automations",
    description:
      "One developer, the whole job: business websites, web apps and automations from Chennai, India.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/logo.svg", apple: "/logo.png" },
};

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "Santo Square Automation",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/logo.png`,
      description:
        "One-person studio run by Santhoshkumar Karthikeyan, building business websites, web applications, WhatsApp automations and AI-powered features from Chennai, India.",
      email: "kumarsanthosh2743@gmail.com",
      founder: { "@id": `${SITE_URL}/#founder` },
      areaServed: ["India", "United States", "Canada", "United Kingdom", "Ireland", "Australia", "New Zealand", "United Arab Emirates", "Singapore"],
      address: { "@type": "PostalAddress", addressLocality: "Chennai", addressCountry: "IN" },
      sameAs: [
        "https://github.com/SanthoshKumar020",
        "https://www.linkedin.com/in/santhoshkumar-karthikeyan/",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business websites", description: "Fast, mobile-friendly websites for hotels, homestays, clinics, salons and small businesses, including direct-booking sites." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web applications", description: "Custom web apps built with React, Next.js and Node.js: dashboards, booking flows, customer portals and internal tools." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "WhatsApp automation", description: "Enquiry auto-replies, booking handling and review-request flows." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-powered features", description: "LLM API integration, AI-assisted tools and smart search inside products." } },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#founder`,
      name: "Santhoshkumar Karthikeyan",
      jobTitle: "Full-Stack Developer",
      description: "Founder and sole developer at Santo Square Automation, with 2.3 years of experience in React, Next.js, Angular, Node.js, TypeScript, PostgreSQL, MongoDB, AWS, Docker and Stripe.",
      address: { "@type": "PostalAddress", addressLocality: "Chennai", addressCountry: "IN" },
      sameAs: [
        "https://github.com/SanthoshKumar020",
        "https://www.linkedin.com/in/santhoshkumar-karthikeyan/",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        { "@type": "Question", name: "Who runs Santo Square Automation?", acceptedAnswer: { "@type": "Answer", text: "One person: Santhoshkumar Karthikeyan, a full-stack developer based in Chennai, India. He designs, builds and supports every project himself." } },
        { "@type": "Question", name: "What services does Santo Square Automation offer?", acceptedAnswer: { "@type": "Answer", text: "Business websites (including direct-booking sites for hotels and homestays), custom web applications in React, Next.js and Node.js, WhatsApp automation, and AI-powered features such as LLM API integration." } },
        { "@type": "Question", name: "How much does a website cost?", acceptedAnswer: { "@type": "Answer", text: "Business websites start from ₹15,000 in India and from $500 for international clients. WhatsApp automation setup starts at around ₹8,000. Exact quotes depend on scope." } },
        { "@type": "Question", name: "How long does a project take?", acceptedAnswer: { "@type": "Answer", text: "Most projects take 1 to 3 weeks from design to launch, depending on scope." } },
        { "@type": "Question", name: "Where is Santo Square Automation based, and who does it work with?", acceptedAnswer: { "@type": "Answer", text: "Based in Chennai, India, working with small businesses across India and in English-speaking countries including the USA, Canada, UK, Ireland, Australia, New Zealand, UAE and Singapore." } },
        { "@type": "Question", name: "Is there support after launch?", acceptedAnswer: { "@type": "Answer", text: "Yes. Small updates, fixes and improvements continue after launch, not a handover and goodbye." } },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body>
        <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/85 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <a href="#top" className="flex items-center gap-3 text-lg font-bold tracking-tight">
              <img src="/logo.svg" alt="Santo Square Automation logo" width="36" height="36" />
              Santo Square <span className="text-amber">Automation</span>
            </a>
            <nav className="hidden items-center gap-6 text-sm text-muted sm:flex">
              {NAV.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-cream">
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              className="rounded-full bg-amber px-4 py-2 text-sm font-semibold text-ink"
            >
              Start a project
            </a>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-line">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2">
              <img src="/logo.svg" alt="" width="24" height="24" />
              Santo Square Automation — founded and run by Santhoshkumar
              Karthikeyan.
            </p>
            <a href="mailto:kumarsanthosh2743@gmail.com" className="hover:text-cream">
              kumarsanthosh2743@gmail.com
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
