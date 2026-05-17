import Image from "next/image";
import { ReactNode } from "react";

type Feature = { text: ReactNode; highlight?: boolean; top: string; lineWidth?: string };
type MobileFeature = { text: ReactNode; highlight?: boolean; top: string; lineWidth?: string };

const RIGHT_FEATURES: Feature[] = [
  { text: "עד 1500 הדלקות", highlight: true, top: "20%", lineWidth: "290px" },
  { text: "אבן איכותית", top: "28%", lineWidth: "240px" },
  { text: "אחיזה נוחה", top: "58%", lineWidth: "200px" },
];

const LEFT_FEATURES: Feature[] = [
  { text: "להבה יציבה בכל הדלקה", top: "17%", lineWidth: "260px" },
  { text: "עמידה בחום", top: "35%", lineWidth: "200px" },
  {
    text: (
      <>
        תקן ISO 9994
        <br />
        באישור מכון התקנים
      </>
    ),
    top: "44%",
    lineWidth: "250px",
  },
  { text: "יושב מושלם בכיס", highlight: true, top: "70%", lineWidth: "300px" },
];

const MOBILE_FEATURES: MobileFeature[] = [
  { text: "להבה יציבה בכל הדלקה", top: "2%", lineWidth: "210%" },
  { text: "עד 1500 הדלקות", highlight: true, top: "15%", lineWidth: "140%" },
  { text: "אבן איכותית", top: "26%", lineWidth: "110%" },
  { text: "עמידה בחום", top: "40%", lineWidth: "95%" },
  {
    text: (
      <>
        תקן ISO 9994
        <br />
        באישור מכון התקנים
      </>
    ),
    top: "53%",
    lineWidth: "95%",
  },
  { text: "אחיזה נוחה", top: "70%", lineWidth: "95%" },
  { text: "יושב מושלם בכיס", highlight: true, top: "81%", lineWidth: "120%" },
];

export function Uniqueness() {
  return (
    <section
      id="uniqueness"
      className="relative bg-fls-black overflow-hidden pt-12 pb-0 lg:pt-8 lg:pb-12"
    >
      {/* Mobile background */}
      <div
        aria-hidden
        className="lg:hidden absolute inset-0 bg-[url('/figma/fbg.png')] bg-cover bg-right"
      />
      {/* Desktop background */}
      <div
        aria-hidden
        className="hidden lg:block absolute inset-0 bg-[url('/figma/fbg.png')] bg-cover bg-bottom"
      />
      <div className="absolute inset-x-0 top-0 h-[3px] bg-fls-yellow/80" aria-hidden />
      <div className="hidden lg:block absolute inset-0 opacity-25 fls-uniq-pattern" aria-hidden />

      <div className="relative mx-auto max-w-[1440px] px-12 lg:min-h-[650px]">
        <h2 className="absolute top-8 right-12 text-white font-black leading-[1.05] text-[clamp(40px,4.4vw,64px)] text-right z-10 hidden lg:block">
          הייחודיות
          <br />
          שלנו
        </h2>

        <div className="pt-12 flex flex-col items-center lg:flex-row lg:items-stretch justify-center gap-10 lg:gap-6">
          {/* ── MOBILE ONLY ── */}
          <div className="lg:hidden w-full pb-0">

            {/* Heading above, right-aligned */}
            <div className="text-right pr-[22px] -mr-10 mb-4 -mt-22">
              <p className="font-black text-white text-[clamp(32px,8.2vw,40px)] leading-tight">הייחודיות</p>
              <p className="font-black text-white text-[clamp(32px,8.2vw,40px)] leading-tight">שלנו</p>
            </div>

            <div className="relative w-full" dir="ltr">

              {/* Lighter in normal flow — drives container height, left side */}
              <div className="w-[130%]" style={{ marginLeft: "clamp(-180px, -32vw, -80px)" }}>
                <Image
                  src="/figma/two-lighters.png"
                  alt="FLS Lighters"
                  width={460}
                  height={680}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Features — right 42%, LTR flex [line][text]: line fills left toward lighter, text on right */}
              {MOBILE_FEATURES.map((f, idx) => (
                <div
                  key={idx}
                  className="absolute -right-10 w-[52%] flex flex-col items-end"
                  style={{ top: f.top, paddingRight: "22px" }}
                >
                  <p
                    className={`text-right text-[clamp(17px,5.4vw,21px)] font-regular whitespace-nowrap ${
                      f.highlight ? "text-fls-yellow" : "text-white"
                    }`}
                  >
                    {f.text}
                  </p>
                  <div className="h-px bg-white/40 mt-1" style={{ width: f.lineWidth ?? "100%" }} aria-hidden />
                </div>
              ))}

            </div>

            {/* Bottom wordmark */}
            <div className="-ml-16 pr-28 pb-12 flex justify-start">
              <Image
                src="/figma/fls-lighter-wordmark.svg"
                alt="FLS Lighter"
                width={220}
                height={36}
                className="h-auto w-[clamp(160px,45vw,220px)]"
              />
            </div>
          </div>

          {/* ── DESKTOP layout ── */}
          <div className="hidden lg:block relative w-full max-w-[900px] mx-auto min-h-[600px]">
            {/* Image centered */}
            <div className="flex justify-center">
              <Image
                src="/figma/two-lighters.png"
                alt="FLS Lighters"
                width={720}
                height={1040}
                className="h-auto w-[clamp(360px,42vw,600px)] object-contain"
                priority
              />
            </div>

            {/* Left labels — positioned over left side of image */}
            {LEFT_FEATURES.map((f, i) => (
              <div
                key={`dleft-${i}`}
                className="absolute flex flex-col items-end"
                style={{ top: f.top, left: '5%' }}
              >
                <p className={`text-end text-[clamp(22px,2vw,30px)] font-bold leading-tight whitespace-nowrap ${
                  f.highlight ? "text-fls-yellow" : "text-white"
                }`}>
                  {f.text}
                </p>
                <div className="h-px bg-fls-yellow/70 mt-1" style={{ width: f.lineWidth ?? "100px" }} />
              </div>
            ))}

            {/* Right labels — positioned over right side of image */}
            {RIGHT_FEATURES.map((f, i) => (
              <div
                key={`dright-${i}`}
                className="absolute flex flex-col items-start"
                style={{ top: f.top, right: '5%' }}
              >
                <p className={`text-left text-[clamp(22px,2vw,30px)] font-bold leading-tight whitespace-nowrap ${
                  f.highlight ? "text-fls-yellow" : "text-white"
                }`}>
                  {f.text}
                </p>
                <div className="h-px bg-fls-yellow/70 mt-1" style={{ width: f.lineWidth ?? "100px" }} />
              </div>
            ))}
          </div>

          </div>
      </div>
    </section>
  );
}
