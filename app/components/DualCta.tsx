import { PillButton } from "./Button";

const CARDS = [
  {
    title: "לקוח פרטי",
    body: "רוצה לדעת איפה נקודת המכירה הקרובה אליך?",
    cta: "צור קשר",
    href: "/contact",
  },
  {
    title: "לקמעונאי",
    body: "רוצה סוכן מכירות שיגיע אליך?",
    cta: "צור קשר",
    href: "/contact",
  },
];

export function DualCta() {
  return (
    <section id="dual-cta" className="relative bg-fls-yellow py-20 md:py-24">
      <div className="mx-auto max-w-[1440px] px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="relative rounded-[36px] px-10 py-8 md:py-14 min-h-0 md:min-h-[320px] flex flex-col items-center justify-center text-center bg-white/15 border border-white/40 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]"
            >
              <h3 className="text-black text-[clamp(32px,3.6vw,48px)] font-black leading-[1.05]">
                {c.title}
              </h3>
              <p className="mt-4 text-black text-[clamp(16px,1.5vw,20px)] font-medium leading-snug max-w-[420px]">
                {c.body}
              </p>
              <div className="mt-8">
                <PillButton
                  variant="filled"
                  href={c.href}
                  className="!bg-white !text-black hover:!bg-white/90 border border-fls-yellow-deep"
                >
                  {c.cta}
                </PillButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
