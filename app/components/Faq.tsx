"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "מה המינימום להזמנה?",
    a: "מינימום ההזמנה הוא קרטון אחד. צרו קשר לקבלת פרטים מלאים ותנאי הזמנה.",
  },
  {
    q: "מה כמות היחידות באריזה?",
    a: "כל קרטון מכיל מספר אריזות פנימיות, סה\"כ עד אלפי יחידות לקרטון בהתאם לדגם.",
  },
  {
    q: "תוך כמה זמן המשלוח מגיע?",
    a: "אספקה למרבית האזורים בארץ תוך 3–5 ימי עסקים מרגע אישור ההזמנה.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="relative bg-fls-black py-24 md:py-36 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/figma/questions-back.png")' }}
      />
      <div className="absolute inset-0 fls-grid-bg opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-[1100px] px-6 md:px-12">
        <div className="text-center mb-12">
         
          <h2 className="text-fls-yellow font-black leading-[1.05] text-[clamp(36px,4.8vw,56px)]">
            שאלות נפוצות
          </h2>
        </div>

        <ul className="grid">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="border-b border-fls-yellow/70">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 md:gap-6 py-6 md:py-10 text-right"
                  aria-expanded={isOpen}
                >
                  <span className="text-white text-[clamp(22px,2vw,30px)] font-semibold flex-1">
                    {f.q}
                  </span>
                  <span
                    className="shrink-0 text-fls-yellow text-[clamp(28px,3vw,44px)] font-black leading-none"
                    aria-hidden
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  
                  <div className="overflow-hidden">
                    <p className="text-white/75 leading-relaxed text-right text-[clamp(18px,1.6vw,24px)]">
                      {f.a}
                    </p>
                  </div>
                  
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
