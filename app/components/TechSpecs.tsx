import Image from "next/image";

const SPECS: ReadonlyArray<{ label: string; value: string }> = [
  { label: "מידות", value: "82.4 × 23.4 × 13.4 mm" },
  { label: "חומר גוף", value: "POM תעשייתי" },
  { label: "הצתה", value: "גלגל חצץ" },
  { label: "שסתום", value: "להבה קבועה" },
  { label: "הדלקות", value: "1500+" },
  { label: "עמידות חום", value: "עד 65°C" },
  { label: "מאושר מכון תקנים", value: "ISO 9994" },
];

export function TechSpecs() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-fls-black pt-20 pb-6 md:py-28"
    >
      <Image
        aria-hidden
        src="/figma/tech-spec.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover pointer-events-none z-0"
      />
      <div
        aria-hidden
        className="fls-watermark pointer-events-none absolute -top-4 right-[-3vw] select-none text-[22vw] leading-none"
      >
        FLS
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-12">

          {/* Specs — top on mobile, right 7 cols on desktop */}
          <div className="col-span-1 md:col-span-7 text-right order-1">
            <h2 className="mb-1 text-[clamp(32px,3.6vw,44px)] font-black leading-[1.05] text-white">
              טכנולוגיה חכמה<br className="md:hidden" /> ללהבה אחידה
            </h2>
            <p className="mb-8 text-[clamp(18px,2.08vw,30px)] text-white/70 md:mb-10">
              מפרט טכני
            </p>

            <ul className="m-0 list-none border-y border-fls-yellow/80 p-0 divide-y divide-fls-yellow/80">
              {SPECS.map((s) => (
                <li
                  key={s.label}
                  data-spec={s.label}
                  className="grid cursor-pointer grid-cols-2 items-center gap-4 px-2 py-3 transition-colors hover:bg-fls-yellow/10"
                >
                  <span className="text-right text-[clamp(15px,1.6vw,22px)] font-bold text-white">
                    {s.label}
                  </span>
                  <span
                    dir="ltr"
                    className="text-[clamp(15px,1.6vw,22px)] font-medium text-white"
                  >
                    {s.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dimensional image — bottom on mobile, left 5 cols on desktop */}
          <div className="col-span-1 md:hidden order-2 flex justify-center">
            <Image
              src="/figma/MIFRAT3.png"
              alt="FLS lighter dimensions"
              width={420}
              height={600}
              sizes="100vw"
              quality={100}
              className="md:hidden w-full max-w-[420px] h-auto"
            />
            <Image
              src="/figma/tech-spec.svg"
              alt="FLS lighter dimensions"
              width={420}
              height={600}
              className="hidden md:block w-full max-w-[420px] h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
