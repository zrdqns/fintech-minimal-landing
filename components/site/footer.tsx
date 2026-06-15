const columns = [
  {
    title: "Product",
    links: ["Payouts", "Reconciliation", "Ledger", "Reporting", "Pricing"],
  },
  {
    title: "Developers",
    links: ["API reference", "SDKs", "Webhooks", "Status", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Customers", "Careers", "Security", "Contact"],
  },
  {
    title: "Legal",
    links: ["Terms", "Privacy", "Compliance", "Sub-processors"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-mist/60 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M4 16 L9 6 L13 14 L16 8 L20 16"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-[17px] font-semibold tracking-tight">
                Numera
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Programmable payments infrastructure for finance and platform teams.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted transition-colors duration-200 hover:text-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-7 text-sm text-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Numera, Inc. All rights reserved.</p>
          <p className="font-mono text-xs">
            Demo · frontend only · no real payments processed
          </p>
        </div>
      </div>
    </footer>
  );
}
