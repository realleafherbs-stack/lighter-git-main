import Image from "next/image";
import { PillButton } from "./Button";
import heroImg from "../../public/figma/heroimg.png";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden fls-hero-bg min-h-[660px] pt-32 pb-24 md:min-h-[880px] md:pt-[140px] md:pb-24"
    >
      {/* Mobile bat background */}
      <div
        aria-hidden
        className="lg:hidden absolute inset-0 bg-[url('/figma/bat.png')] bg-no-repeat bg-size-[240%] bg-position-[center_top] opacity-60 brightness-110"
      />
      {/* Light-grey glow */}
      <div
        aria-hidden
        className="fls-hero-glow-grey absolute inset-y-0 left-0 w-[55%] pointer-events-none"
      />
      {/* Desktop bat watermark */}
      <Image
        src="/figma/bat.png"
        alt=""
        aria-hidden
        width={544}
        height={573}
        priority
        className="hidden lg:block absolute bottom-[-5%] left-[2%] w-[clamp(480px,56vw,860px)] h-auto opacity-25 mix-blend-screen pointer-events-none select-none"
      />

      {/* ── MOBILE layout (hidden on lg+) ── */}
      <div className="lg:hidden relative mx-auto max-w-[600px] px-6 pt-3 pb-4 flex flex-col gap-5">
        {/* FLS logo full width */}
        <div className="w-full flex justify-start">
          <Image
            src="/figma/fls_big.png"
            alt="FLS"
            width={624}
            height={230}
            priority
            className="w-[clamp(200px,55vw,300px)] h-auto select-none"
          />
        </div>
        {/* Heading full width */}
        <h1 className="text-[#fccd23] font-black leading-[1.05] text-[clamp(38px,12vw,56px)] text-right w-full">
          המצית שבא לעבוד!
        </h1>
        {/* Hero image absolute-left, text+buttons flow on the right */}
        <div className="relative w-full min-h-[360px]">
          <div className="absolute top-12 -left-20 w-[78%]">
            <Image
              src={heroImg}
              alt="FLS Lighter"
              width={heroImg.width}
              height={heroImg.height}
              priority
              className="w-full h-auto rotate-12 origin-bottom"
            />
          </div>
          <div className="ml-[50%] pl-2 flex flex-col gap-3 items-start text-right">
            <p className="text-white text-[clamp(26px,8vw,32px)] leading-snug text-right font-normal">
              טכנולוגיה חכמה ללהבה אחידה בכל הדלקה
            </p>
            <PillButton variant="filled" href="#products" className="mt-2 text-[20px]! h-[38px]! min-w-0! w-[122px]! px-4! pt-1! pb-1!">
              לכל המוצרים
            </PillButton>
            <PillButton variant="outline" href="#dual-cta" className="text-[20px]! h-[38px]! min-w-0! w-[122px]! px-4! pt-1! pb-1!">
              לקמעונאי
            </PillButton>
          </div>
        </div>
      </div>

      {/* ── DESKTOP layout (hidden below lg) ── */}
      <div className="hidden lg:grid relative mx-auto max-w-[1440px] px-12 grid-cols-12 gap-20 items-center min-h-[640px]">
        <div className="col-span-5 flex w-full flex-col items-start text-right gap-6">
          <div className="w-full flex justify-start">
            <Image
              src="/figma/fls_big.png"
              alt="FLS"
              width={624}
              height={230}
              priority
              className="w-[clamp(200px,42vw,320px)] h-auto select-none"
            />
          </div>
          <h1 className="text-[#fccd23] font-black leading-[1.05] text-[clamp(40px,9vw,72px)] max-w-[16ch] text-right">
            המצית שבא לעבוד!
          </h1>
          <p className="text-white/80 text-[clamp(18px,4vw,24px)] leading-[1.45] max-w-[320px] text-right">
            טכנולוגיה חכמה ללהבה אחידה בכל הדלקה
          </p>
          <div className="flex flex-row-reverse items-center gap-6 justify-start">
            <PillButton variant="outline" href="#dual-cta">
              לקמעונאי
            </PillButton>
            <PillButton variant="filled" href="#products">
              לכל המוצרים
            </PillButton>
          </div>
        </div>
        <div className="col-span-7 flex flex-col items-end justify-center relative">
          <div className="absolute inset-0 fls-hero-glow-grey opacity-80" aria-hidden />
          <div className="relative -ml-12 w-full max-w-[560px]">
            <Image
              src={heroImg}
              alt="FLS Lighter"
              width={heroImg.width}
              height={heroImg.height}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
