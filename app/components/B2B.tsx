import Image from "next/image";

const PILLARS = [
  {
    title: "שירות לקוחות",
    body: "זמינות ומענה מקצועי",
    icon: "/figma/headphones.png",
  },
  {
    title: "משלוח מהיר",
    body: "עד 3 ימי עסקים",
    icon: "/figma/box.png",
  },
  {
    title: "אחריות מלאה",
    body: "אחריות החלפה ורכישה מאובטחת",
    icon: "/figma/shield.png",
  },
];

export function B2B() {
  return (
    <section
      id="about"
      className="relative fls-factory-bg py-20 md:py-28 overflow-hidden"
    >
      <Image
        aria-hidden
        src="/figma/b2b-back.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center pointer-events-none z-0"
      />
      <div className="absolute inset-0 fls-grid-bg opacity-30" aria-hidden />
      <div
        aria-hidden
        className="absolute inset-0 fls-gold-glow opacity-50 pointer-events-none"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 text-center">
        <Image
          src="/figma/b2b.png"
          alt="B2B מרקט לעסקים"
          width={260}
          height={180}
          className="mx-auto h-auto w-[clamp(100px,18vw,240px)]"
          priority
        />

        <h2 className="mt-10 text-white md:text-fls-yellow font-black leading-[1.15] text-[clamp(32px,3.4vw,46px)]">
          יבואנית בלעדית של
          <br />
          מצתי FLS בישראל
        </h2>

        <p className="mt-6 text-white/85 text-[clamp(20px,1.4vw,20px)] font-semibold max-w-[720px] mx-auto leading-relaxed">
          עם 10 שנות ניסיון בעולם ההפצה ומערכת הפצה ישירה לבעלי עסקים
          <br />
          נשמח להעניק לכם שירות אישי ומקצועי
        </p>

        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-10 max-w-[1080px] mx-auto">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="flex flex-col items-center text-center rounded-3xl md:border md:border-fls-yellow/30 md:bg-white/5 md:backdrop-blur-sm px-2 py-4 md:px-6 md:py-8"
            >
              <div className="mb-5" style={{ width: 56, height: 56 }}>
                <Image
                  src={p.icon}
                  alt=""
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <p className="text-white md:text-fls-yellow text-[clamp(16px,1.8vw,24px)] font-bold">
                {p.title}
              </p>
              <p className="text-white/70 text-[clamp(16px,1.1vw,16px)] font-semibold mt-2">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
