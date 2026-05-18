"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "דף הבית", href: "/" },
  { label: "היחודיות שלנו", href: "/#uniqueness" },
  { label: "מוצרים", href: "/#products" },
  { label: "אודות", href: "/#about" },
];

const MOBILE_LEGAL_ROWS = [
  [
    { label: "מדיניות פרטיות", href: "/privacy-policy" },
    { label: "מדיניות משלוחים", href: "/shipping" },
  ],
  [
    { label: "תנאי שימוש", href: "/terms" },
    { label: "הצהרת נגישות", href: "/accessibility" },
  ],
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
    <header className={`fixed top-0 inset-x-0 z-30 h-[122px] transition-colors duration-300 ${scrolled ? "bg-fls-black/95 shadow-md" : "bg-transparent"}`}>
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

        <Link
          href="/"
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
        </Link>

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
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-fls-yellow-deep rounded-full px-6 h-[42px] text-black font-extrabold text-[20px] leading-none whitespace-nowrap hover:bg-fls-yellow transition-colors"
          >
            צור קשר
          </Link>
        </div>
      </div>

    </header>

    {mobileOpen && (
      <div className="md:hidden fixed inset-0 z-50 bg-fls-black/98">
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

            <nav aria-label="ניווט נייד">
              <ul className="flex flex-col gap-5 text-right text-white text-2xl font-bold tracking-tight">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-[#fccd23] transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#fccd23] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    צור קשר
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="mt-32 flex flex-col gap-6 text-right text-white text-sm">
              <div className="grid grid-cols-1 gap-3 text-base font-bold tracking-wide text-center">
                {MOBILE_LEGAL_ROWS.map((row, idx) => (
                  <div key={idx} className="flex flex-row-reverse items-center justify-center gap-4">
                    <Link href={row[0].href} className="hover:text-[#fccd23]" onClick={() => setMobileOpen(false)}>
                      {row[0].label}
                    </Link>
                    <span className="text-white/30 px-1">|</span>
                    <Link href={row[1].href} className="hover:text-[#fccd23]" onClick={() => setMobileOpen(false)}>
                      {row[1].label}
                    </Link>
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
    </>
  );
}
