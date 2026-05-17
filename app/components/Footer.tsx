import Image from "next/image";


const COLS: { title: string; items: { label: string; href: string }[] }[] = [
  {
    title: "אודות",
    items: [
      { label: "היתרונות שלנו", href: "#uniqueness" },
      { label: "הסיפור שלנו", href: "#about" },
    ],
  },
  {
    title: "בית",
    items: [
      { label: "מוצרים", href: "#products" },
      { label: "קמעונאים", href: "#dual-cta" },
    ],
  },
  {
    title: "צור קשר",
    items: [
      { label: "058-799-1094", href: "tel:0587991094" },
      { label: "info@fls.co.il", href: "mailto:info@fls.co.il" },
      { label: "ווטצאפ", href: "https://wa.me/972587991094" },
    ],
  },
];

const LEGAL = [
  { label: "מדיניות פרטיות", href: "#" },
  { label: "תנאי שירות", href: "#" },
  { label: "הצהרת נגישות", href: "#" },
  { label: "תקנון האתר", href: "#" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-fls-black">
 
      {/* ── MOBILE ── */}
      <div className="md:hidden border-t border-fls-yellow/30 px-5 pt-8 pb-6 text-right">
        <div className="grid gap-4 items-start" style={{ gridTemplateColumns: "65% 35%" }}>
          {/* Col 1 (right in RTL): logo + B2B */}
          <div className="flex flex-col items-start gap-2">
            <Image src="/figma/fls-lighter.png" alt="FLS" width={520} height={120} className="h-auto w-[220px]" priority />
            <p className="text-fls-yellow font-bold text-[15px]">המצית שבא לעבוד!</p>
            <div className="flex items-center gap-2 mt-1">
              <Image src="/figma/mblogo.png" alt="B2B" width={100} height={100} className="h-auto w-[80px]" />
              <div>
                <p className="text-white text-[12px]">יבואנית בלעדית של</p>
                <p className="text-white text-[12px]">מציתי FLS בישראל</p>
              </div>
            </div>
          </div>
          {/* Col 2 (left in RTL): contact */}
          <div className="text-right">
            <p className="text-white font-extrabold text-[18px] tracking-[0.08em] mb-3">צור קשר</p>
            <ul className="grid gap-2">
              {COLS[2].items.map((it) => (
                <li key={it.label}>
                  <a href={it.href} className="text-white/80 text-[16px] tracking-wide">{it.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-white/15">
          <ul className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-white/70 text-[12px]">
            {LEGAL.map((l, i) => (
              <li key={l.label} className="flex items-center">
                <a href={l.href}>{l.label}</a>
                {i < LEGAL.length - 1 && <span className="mr-3 text-white/30" aria-hidden>|</span>}
              </li>
            ))}
          </ul>
          <p className="text-white/50 text-[11px] text-center mt-2">© כל הזכויות שמורות FLS ISRAEL</p>
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block relative border-t border-fls-yellow/30 pt-20 pb-8 overflow-hidden">
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-6 order-1 md:order-1 text-right">
              <Image
                src="/figma/fls-lighter.png"
                alt="FLS"
                width={520}
                height={120}
                className="ml-auto h-auto w-[clamp(220px,22vw,360px)]"
                style={{ width: "100%", height: "auto" }}
                priority
              />
              <p className="text-white text-[clamp(14px,1.1vw,16px)] font-bold mt-10 tracking-wide">
                B2B MARKT LTD
              </p>
              <p className="text-white text-[clamp(14px,1.1vw,16px)] mt-1">
                יבואנית בלעדית של מציתי FLS בישראל
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 text-right order-2 md:order-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {COLS.map((col) => (
                  <nav key={col.title} aria-label={col.title}>
                    <p className="text-white text-[clamp(16px,1.4vw,20px)] font-extrabold mb-5">
                      {col.title}
                    </p>
                    <ul className="grid gap-3">
                      {col.items.map((it) => (
                        <li key={it.label}>
                          <a
                            href={it.href}
                            className="text-white/75 hover:text-fls-yellow transition-colors text-[clamp(14px,1.1vw,16px)]"
                          >
                            {it.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 pt-6 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-4">
            <ul className="flex flex-wrap items-center text-white/70 text-[clamp(13px,1vw,15px)]">
              {LEGAL.map((l, i) => (
                <li key={l.label} className="flex items-center">
                  <a href={l.href} className="hover:text-fls-yellow transition-colors">
                    {l.label}
                  </a>
                  {i < LEGAL.length - 1 && (
                    <span className="mx-3 text-white/30" aria-hidden>
                      |
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <p className="text-white/50 text-[clamp(12px,0.9vw,14px)] tracking-wide">
              © כל הזכויות שמורות
              <br className="md:hidden" />
              <span className="md:mr-1">FLS ISRAEL</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
