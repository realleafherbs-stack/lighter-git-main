const PILLARS = [
  "טכנולוגיה מתקדמת",
  "איכות בינלאומית",
  "ביצועים גבוהים",
];

export function About() {
  return (
    <section className="relative overflow-hidden bg-fls-black">
      <div className="absolute inset-0 fls-about-bg" aria-hidden />
      <div className="absolute inset-0 fls-about-halftone" aria-hidden />
      <div className="absolute inset-0 bg-black/55" aria-hidden />

      <div className="relative mx-auto max-w-[1440px] px-12 pt-28 pb-10 md:py-36">
        <div className="text-center max-w-[760px] mx-auto">
          <h2 className="text-fls-yellow font-black leading-[1.05] text-[clamp(40px,5vw,64px)] mb-6">
            אודות FLS
          </h2>
          <p className="text-white text-[clamp(24px,1.8vw,22px)] leading-relaxed">
            מצתי FLS מיוצרים בטכנולוגיה אירופאית
            <br />
            מתקדמת תחת תקני איכות בינלאומיים
          </p>
        </div>

        <div className="mt-8 md:mt-28 flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-10 text-center">
          {PILLARS.map((title) => (
            <p
              key={title}
              className="text-fls-yellow font-semibold text-[clamp(28px,2.2vw,30px)] leading-tight"
            >
              <span className="block text-fls-yellow font-bold text-[clamp(36px,3vw,48px)]">+</span>
              {title}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
