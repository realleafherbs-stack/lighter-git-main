"use client";

import Image from "next/image";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "דף הבית", href: "#hero" },
  { label: "היחודיות שלנו", href: "#uniqueness" },
  { label: "מוצרים", href: "#products" },
  { label: "אודות", href: "#about" },
];

const MOBILE_LEGAL_ROWS = [
  [
    { label: "מדיניות פרטיות", href: "#" },
    { label: "מדיניות משלוחים", href: "#" },
  ],
  [
    { label: "תנאי שימוש", href: "#" },
    { label: "הצהרת נגישות", href: "#" },
  ],
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 inset-x-0 z-30 h-[122px]">
      <div className="mx-auto max-w-[1440px] h-full px-6 md:px-12 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="order-2 md:hidden inline-flex flex-col items-center justify-center gap-1.5 px-1 py-1 text-[#fccd23]"
          aria-label="פתח תפריט"
          aria-expanded={mobileOpen}
        >
          <span className="block h-[2px] w-6 bg-current" />
          <span className="block h-[2px] w-6 bg-current" />
          <span className="block h-[2px] w-6 bg-current" />
        </button>

        <a
          href="#hero"
          className="order-1 md:order-0 flex items-center ml-auto md:ml-0"
          aria-label="FLS"
        >
          <Image
            src="/figma/fls.png"
            alt="FLS"
            width={122}
            height={31}
            priority
            className="h-9 w-auto"
          />
        </a>

        <nav
          aria-label="ראשי"
          className="hidden md:flex items-center bg-fls-yellow-deep rounded-full px-2 py-1 h-[42px] min-w-[595px] justify-center md:ml-[20vw]"
        >
          <ul className="flex items-center gap-6 px-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="px-4 py-2 text-black font-extrabold text-[20px] leading-none whitespace-nowrap hover:text-black/70 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-3 order-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-fls-yellow-deep rounded-full px-6 h-[42px] text-black font-extrabold text-[20px] leading-none whitespace-nowrap hover:bg-fls-yellow transition-colors"
          >
            צור קשר
          </a>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-fls-black/98 backdrop-blur-sm">
          <div className="flex h-full flex-col px-6 py-6 overflow-y-auto pb-8" dir="rtl">
            <div className="flex items-center justify-end mb-8">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="סגור תפריט"
                className="text-white text-3xl"
              >
                ×
              </button>
            </div>

            <nav aria-label="ניווט נייד" className="flex-1">
              <ul className="flex flex-col gap-5 text-right text-white text-2xl font-bold tracking-tight">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="hover:text-[#fccd23] transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#contact"
                    className="hover:text-[#fccd23] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    צור קשר
                  </a>
                </li>
              </ul>
            </nav>

            <div className="mt-20 flex flex-col gap-6 text-right text-white text-sm">
              <div className="grid grid-cols-1 gap-3 text-sm font-bold tracking-wide text-center">
                {MOBILE_LEGAL_ROWS.map((row, idx) => (
                  <div key={idx} className="flex flex-row-reverse items-center justify-center gap-4">
                    <a href={row[0].href} className="hover:text-[#fccd23]">
                      {row[0].label}
                    </a>
                    <span className="text-white/30 px-1">|</span>
                    <a href={row[1].href} className="hover:text-[#fccd23]">
                      {row[1].label}
                    </a>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="w-[clamp(200px,70vw,260px)] mb-4">
                  <Image
                    src="/figma/fls-lighter.png"
                    alt="FLS Lighter"
                    width={260}
                    height={70}
                    className="w-full h-auto"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="flex flex-row-reverse items-center justify-center gap-3 text-white w-full">
                  <div className="text-right leading-tight text-[15px] font-normal tracking-wide">
                    <p>יבואנית בלעדית</p>
                    <p>של מציתי FLS בישראל</p>
                  </div>
                  <div className="w-[clamp(80px,26vw,110px)]">
                    <Image
                      src="/figma/mblogo.png"
                      alt="B2B Market"
                      width={110}
                      height={55}
                      className="w-full h-auto"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
                <p className="text-white/90 text-xs leading-relaxed text-center mt-4">
                  © כל הזכויות שמורות FLS ISRAEL
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}
