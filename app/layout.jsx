import "./globals.css";

export const metadata = {
  title: "Santo Square Automation — Websites, Web Apps & Automations",
  description:
    "Santo Square Automation is a one-person studio run by Santhoshkumar Karthikeyan, building business websites, web applications and automations from Chennai, India.",
};

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/85 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
            <a href="#top" className="text-lg font-bold tracking-tight">
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
            <p>
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
