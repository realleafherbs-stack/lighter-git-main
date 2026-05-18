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
  { label: "מדיניות פרטיות", href: "/privacy-policy" },
  { label: "תנאי שירות", href: "/terms" },
  { label: "הצהרת נגישות", href: "/accessibility" },
  { label: "תקנון האתר", href: "/shipping" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-fls-black overflow-x-hidden">
 
      {/* ── MOBILE ── */}
      <div className="md:hidden border-t border-fls-yellow/30 px-5 pt-8 pb-6 text-right">
        <div className="grid gap-4 items-start" style={{ gridTemplateColumns: "65% 35%" }}>
          {/* Col 1 (right in RTL): logo + B2B */}
          <div className="flex flex-col items-start gap-2">
            <Image src="/figma/fls-lighter.png" alt="FLS" width={520} height={120} className="h-auto w-full max-w-[220px]" priority />
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
      <div className="hidden md:block relative border-t border-fls-yellow/30 pt-14 pb-8 overflow-hidden">
        <div className="relative mx-auto max-w-[1440px] px-12">
          <div className="grid grid-cols-12 gap-8 items-start">
            {/* RIGHT: Logo + tagline + B2B */}
            <div className="col-span-5 col-start-1 row-start-1 text-right">
              <div className="flex justify-start">
                <Image
                  src="/figma/fls-lighter.png"
                  alt="FLS"
                  width={520}
                  height={120}
                  className="h-auto w-[clamp(240px,24vw,380px)]"
                  priority
                />
              </div>
              <p className="text-fls-yellow font-black text-[clamp(20px,1.8vw,28px)] mt-3">
                המצית שבא לעבוד!
              </p>
              <p className="text-white text-[clamp(16px,1.3vw,20px)] font-bold mt-6">
                B2B MARKT LTD
              </p>
              <p className="text-white/70 text-[clamp(15px,1.2vw,18px)] mt-1">
                יבואנית בלעדית של מציתי FLS בישראל
              </p>
            </div>
            {/* LEFT: Nav columns */}
            <div className="col-span-4 col-start-9 row-start-1 text-right">
              <div className="grid grid-cols-3 gap-2">
                {COLS.map((col) => (
                  <nav key={col.title} aria-label={col.title} className="text-left">
                    <p className="text-white text-[clamp(20px,1.8vw,26px)] font-extrabold mb-4 text-left">
                      {col.title}
                    </p>
                    <ul className="grid gap-3">
                      {col.items.map((it) => (
                        <li key={it.label} className="text-left">
                          <a href={it.href} className="text-white/70 hover:text-fls-yellow transition-colors text-[clamp(17px,1.5vw,22px)]">
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

          <div className="mt-10 pt-5 border-t border-white flex justify-between items-center">
            <p className="text-white text-[clamp(14px,1.1vw,17px)]">
              © כל הזכויות שמורות FLS ISRAEL
            </p>
            <ul className="flex flex-wrap items-center gap-x-1 text-white text-[clamp(14px,1.1vw,17px)]">
              {LEGAL.map((l, i) => (
                <li key={l.label} className="flex items-center">
                  <a href={l.href} className="hover:text-fls-yellow transition-colors">{l.label}</a>
                  {i < LEGAL.length - 1 && <span className="mx-2 text-white/50" aria-hidden>|</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
