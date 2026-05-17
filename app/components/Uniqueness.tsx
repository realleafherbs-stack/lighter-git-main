import Image from "next/image";
import { ReactNode } from "react";

type Side = "left" | "right";
type Feature = { text: ReactNode; highlight?: boolean; top: string };
type MobileFeature = { text: ReactNode; highlight?: boolean; top: string; lineWidth?: string };

const RIGHT_FEATURES: Feature[] = [
  { text: "עד 1500 הדלקות", highlight: true, top: "22%" },
  { text: "אבן איכותית", top: "38%" },
  { text: "אחיזה נוחה", top: "60%" },
];

const LEFT_FEATURES: Feature[] = [
  { text: "להבה יציבה בכל הדלקה", top: "12%" },
  { text: "עמידה בחום", top: "30%" },
  {
    text: (
      <>
        תקן ISO 9994
        <br />
        באישור מכון התקנים
      </>
    ),
    top: "48%",
  },

  { text: "יושב מושלם בכיס", highlight: true, top: "68%" },
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

function FeatureLabel({
  text,
  highlight,
  side,
}: Pick<Feature, "text" | "highlight"> & { side: Side }) {
  // Text sits on the far edge, line extends toward the center image
  const align = side === "left" ? "text-left" : "text-right";
  return (
    <div className={align}>
      <p
        className={`text-[clamp(18px,1.6vw,22px)] font-bold leading-tight pb-2 ${
          highlight ? "text-fls-yellow" : "text-white"
        }`}
      >
        {text}
      </p>
      <div className="h-px bg-fls-yellow/70 w-full" />
    </div>
  );
}

export function Uniqueness() {
  return (
    <section
      id="uniqueness"
      className="relative bg-fls-black overflow-hidden pt-24 pb-0 lg:pb-24"
    >
      {/* Mobile background */}
      <div
        aria-hidden
        className="lg:hidden absolute inset-0 bg-[url('/figma/fbg.png')] bg-cover bg-right"
      />
      {/* Desktop background */}
      <div
        aria-hidden
        className="hidden lg:block absolute inset-0 bg-[url('/figma/fbg.png')] bg-cover bg-center"
      />
      <div className="absolute inset-x-0 top-0 h-[3px] bg-fls-yellow/80" aria-hidden />
      <div className="hidden lg:block absolute inset-0 opacity-25 fls-uniq-pattern" aria-hidden />

      <div className="relative mx-auto max-w-[1440px] px-12 lg:min-h-[820px]">
        <h2 className="absolute top-8 right-12 text-fls-yellow font-black leading-[1.05] text-[clamp(40px,4.4vw,64px)] text-right z-10 hidden lg:block">
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

          {/* Desktop dotted columns */}
          <div className="hidden w-full max-w-[120px] lg:flex shrink-0 relative">
            <div className="relative w-full">
              {RIGHT_FEATURES.map((f, i) => (
                <div
                  key={`right-${i}`}
                  className="absolute inset-x-0"
                  style={{ top: f.top }}
                >
                  <FeatureLabel text={f.text} highlight={f.highlight} side="right" />
                </div>
              ))}
            </div>
          </div>

          <Image
            src="/figma/two-lighters.png"
            alt="FLS Lighter"
            width={720}
            height={1040}
            className="hidden lg:block h-auto w-[clamp(320px,70vw,520px)]"
            priority
          />

          <div className="hidden w-full max-w-[120px] lg:flex shrink-0 relative">
            <div className="relative w-full">
              {LEFT_FEATURES.map((f, i) => (
                <div
                  key={`left-${i}`}
                  className="absolute inset-x-0"
                  style={{ top: f.top }}
                >
                  <FeatureLabel text={f.text} highlight={f.highlight} side="left" />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Desktop bottom wordmark */}
        <div className="hidden lg:flex absolute left-6 right-6 mx-auto bottom-6 text-white justify-start">
          <Image
            src="/figma/fls-lighter-wordmark.svg"
            alt="FLS Lighter"
            width={250}
            height={40}
            className="h-auto w-[clamp(180px,40vw,250px)]"
          />
        </div>
      </div>
    </section>
  );
}
