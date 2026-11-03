import Hero3D from "../components/Hero3D";
import ScrollAnimations from "../components/ScrollAnimations";
import ContactForm from "../components/ContactForm";

const SERVICES = [
  {
    title: "Business websites",
    body: "Fast, mobile-friendly websites for hotels, homestays, clinics, salons and small businesses — including direct-booking sites that cut out commission on every booking.",
    tags: ["Direct booking", "SEO basics", "Mobile-first"],
  },
  {
    title: "Web applications",
    body: "Custom web apps built with React, Next.js and Node.js — dashboards, booking flows, customer portals and internal tools, built around how your business actually runs.",
    tags: ["React", "Next.js", "Node.js"],
  },
  {
    title: "WhatsApp automation",
    body: "Enquiry auto-replies, booking handling and review-request flows, so no customer message ever goes unanswered — even outside working hours.",
    tags: ["Auto-replies", "Booking handling", "Follow-ups"],
  },
  {
    title: "AI-powered features",
    body: "Practical AI inside your product: LLM API integration, AI-assisted tools and smart search — features that save time, not demos that collect dust.",
    tags: ["LLM APIs", "AI tools", "Smart search"],
  },
];

const WORK = [
  {
    name: "HYRISE",
    kind: "Independent build · AI platform",
    desc: "An AI career platform with AI-powered career tools, built by Santhoshkumar himself in Next.js.",
    link: null,
    linkLabel: null,
    coverClass: "cover-hyrise",
    coverText: "HY",
  },
  {
    name: "Cozy Glick",
    kind: "Client website · Homestay booking",
    desc: "A homestay booking website where guests can explore rooms and book their stay direct.",
    link: "https://cozyglick.com",
    linkLabel: "Visit cozyglick.com",
    coverClass: "cover-fallback",
    coverText: "CG",
  },
  {
    name: "Nila Ayurveda Wellness",
    kind: "Client website · Wellness retreat, Varkala",
    desc: "A website for an Ayurveda wellness retreat in Varkala, presenting treatments and retreat stays.",
    link: "https://nilaayurvedawellness.com",
    linkLabel: "Visit nilaayurvedawellness.com",
    coverClass: "cover-fallback",
    coverText: "NA",
  },
  {
    name: "Rishikul Online",
    kind: "Client website · Yoga teacher training",
    desc: "A large Next.js website for online yoga teacher-training courses, built for scale.",
    link: "https://rishikulonline.com",
    linkLabel: "Visit rishikulonline.com",
    coverClass: "cover-fallback",
    coverText: "RO",
  },
  {
    name: "ai-code-checker",
    kind: "Open source · Developer tool",
    desc: "An open-source AI code-review CLI published on npm, built for developers who want fast, honest code feedback.",
    link: "https://github.com/SanthoshKumar020",
    linkLabel: "See it on GitHub",
    coverClass: "cover-code",
    coverText: "$_",
  },
  {
    name: "GD Thiru & Co.",
    kind: "Design concepts · Law firm website",
    desc: "Website design concepts for a UK immigration law firm — five distinct directions in one demo hub. Concepts only, not the firm's live site.",
    link: "https://gdthiru-designs.vercel.app",
    linkLabel: "View the design concepts",
    coverClass: "cover-gdthiru",
    coverText: "GT",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discover",
    body: "A short conversation about your business, your customers, and what the website or automation needs to do for you.",
  },
  {
    step: "02",
    title: "Design",
    body: "A clear layout and flow first — you see the direction before a line of production code is written.",
  },
  {
    step: "03",
    title: "Build",
    body: "The site or app is built, tested on phone and desktop, and connected to the tools you already use.",
  },
  {
    step: "04",
    title: "Launch & support",
    body: "Goes live, and stays supported — small updates, fixes and improvements after launch, not a handover and goodbye.",
  },
];

const STACK = [
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Stripe",
];

export default function Home() {
  return (
    <>
      <ScrollAnimations />

      {/* HERO — video layer over a gradient; the gradient carries the hero
          if the video fails to load */}
      <section id="top" className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#182233_0%,#0a0e13_65%)]" />
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p data-reveal className="text-sm font-semibold uppercase tracking-widest text-amber">
                One-person studio · Chennai, India
              </p>
              <h1
                data-reveal
                className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-6xl"
              >
                Websites, web apps &amp; automations that bring you direct
                business.
              </h1>
              <p data-reveal className="mt-5 max-w-xl text-lg text-muted">
                Santo Square Automation is run by one developer —
                Santhoshkumar Karthikeyan. No account managers, no handoffs:
                the person you talk to is the person who builds it.
              </p>
              <div data-reveal className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#work"
                  className="rounded-full bg-amber px-6 py-3 font-semibold text-ink"
                >
                  See the work
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-line px-6 py-3 font-semibold hover:border-amber"
                >
                  Start a project
                </a>
              </div>
            </div>
            <div data-parallax className="relative h-80 sm:h-96">
              <Hero3D />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES — abstract video background (gradient behind it carries
          the section if the video fails to load) */}
      <section id="services" className="relative scroll-mt-24 overflow-hidden py-20">
        <div className="absolute inset-0 bg-ink" />
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          src="/videos/abstract.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
        <div className="relative mx-auto max-w-6xl px-5">
        <h2 data-reveal className="text-3xl font-bold tracking-tight sm:text-4xl">
          What I build
        </h2>
        <p data-reveal className="mt-3 max-w-2xl text-muted">
          Four services, each scoped to what a small business actually needs —
          and nothing you don&apos;t.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              data-reveal
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-muted">{s.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        </div>
      </section>

      {/* SELECTED WORK — sticky stacking cards that slide over each other */}
      <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
        <h2 data-reveal className="text-3xl font-bold tracking-tight sm:text-4xl">
          Selected work
        </h2>
        <p data-reveal className="mt-3 max-w-2xl text-muted">
          Scroll through — each project slides over the last. Every item here
          is real work, described honestly.
        </p>
        <div className="mt-10 space-y-6 pb-10">
          {WORK.map((w) => (
            <article
              key={w.name}
              className="stack-card overflow-hidden rounded-3xl border border-line bg-surface shadow-2xl shadow-black/40"
            >
              <div className="grid md:grid-cols-2">
                <div
                  className={`flex min-h-56 items-center justify-center ${w.coverClass}`}
                  aria-hidden="true"
                >
                  <span className="text-6xl font-bold tracking-tight text-cream/90">
                    {w.coverText}
                  </span>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber">
                    {w.kind}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">{w.name}</h3>
                  <p className="mt-3 text-muted">{w.desc}</p>
                  {w.link && (
                    <a
                      href={w.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-block rounded-full border border-amber px-5 py-2 text-sm font-semibold text-amber hover:bg-amber hover:text-ink"
                    >
                      {w.linkLabel} →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
        <h2 data-reveal className="text-3xl font-bold tracking-tight sm:text-4xl">
          How a project runs
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p) => (
            <article
              key={p.step}
              data-reveal
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <p className="text-3xl font-bold text-amber">{p.step}</p>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 data-reveal className="text-3xl font-bold tracking-tight sm:text-4xl">
              One person. The whole job.
            </h2>
            <p data-reveal className="mt-4 text-muted">
              I&apos;m Santhoshkumar Karthikeyan, a full-stack developer based
              in Chennai with 2.3 years of experience. Santo Square Automation
              is my one-person company: I design, build and support every
              project myself, so nothing gets lost between sales and delivery.
            </p>
            <p data-reveal className="mt-4 text-muted">
              If you work with me, you talk to the developer — not a team you
              never meet.
            </p>
          </div>
          <div data-reveal>
            <h3 className="text-lg font-semibold">Stack I work with</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {STACK.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line bg-surface px-4 py-2 text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 data-reveal className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tell me about your project
            </h2>
            <p data-reveal className="mt-4 text-muted">
              A website, a web app, or an automation — a short message is
              enough to start. I reply personally.
            </p>
            <p data-reveal className="mt-6">
              Email directly:{" "}
              <a
                href="mailto:kumarsanthosh2743@gmail.com"
                className="font-semibold text-amber hover:underline"
              >
                kumarsanthosh2743@gmail.com
              </a>
            </p>
          </div>
          <div data-reveal>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
