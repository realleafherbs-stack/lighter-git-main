import Image from "next/image";
import { PillButton } from "./Button";

export function CtaBanner() {
  return (
    <section className="relative bg-fls-yellow overflow-hidden py-4 md:py-24">
      <Image
        aria-hidden
        src="/figma/yellow-bg-square.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover pointer-events-none z-0"
      />

      <div className="relative mx-auto max-w-[1440px] px-4 md:px-12">

        {/* ── MOBILE ONLY ── */}
        <div className="md:hidden">
          {/* Title — untouched */}
          <div className="text-right pt-8 pb-2">
            <h2 className="text-black leading-[1.05] text-[clamp(34px,7.6vw,56px)] text-right">
              <span className="block font-normal">המצית שהלקוחות שלך</span>
              <span className="block font-black">ישמחו לחזור לקנות שוב!</span>
            </h2>
          </div>

          {/* Shelves + h3/button */}
          <div className="relative" style={{ paddingBottom: "110%" }}>
            {/* Shelf 2 — behind, offset right+down */}
            <div className="absolute left-[16] top-[10%] w-[85%] z-10">
              <Image
                src="/figma/shelf.png"
                alt=""
                width={520}
                height={760}
                className="w-full h-auto"
                sizes="60vw"
                priority
              />
            </div>
            {/* Shelf 1 — front-left */}
            <div className="absolute left-[-26%] top-[2%] w-[85%] z-5">
              <Image
                src="/figma/shelf.png"
                alt=""
                width={520}
                height={760}
                className="w-full h-auto"
                sizes="60vw"
                priority
              />
            </div>
            {/* Text + button — right */}
            <div className="absolute right-0 top-[10%] w-[36%] flex flex-col items-center gap-2 text-center z-20">
              <h3 className="text-black font-black text-[clamp(20px,6.5vw,28px)] leading-snug text-center w-full">
                רוצה שסוכן יחזור אליך?
              </h3>
              <PillButton
                variant="filled"
                href="#dual-cta"
                className="bg-white! text-black! hover:bg-white/90! h-[32px]! min-w-0! w-full! px-5! text-[16px]! justify-center!"
              >
                לחץ כאן
              </PillButton>
            </div>
          </div>
        </div>

        {/* ── DESKTOP ONLY ── */}
        <div className="hidden md:grid grid-cols-12 gap-10 items-center">
          <div className="col-span-6 text-right">
            <h2 className="text-black leading-[1.05] text-[clamp(34px,7.6vw,56px)] text-right">
              <span className="block font-normal">המצית שהלקוחות שלך</span>
              <span className="block font-black">ישמחו לחזור לקנות שוב!</span>
            </h2>

            <h3 className="mt-12 text-black font-black text-[clamp(24px,2.8vw,34px)] text-right">
              רוצה שסוכן יחזור אליך?
            </h3>

            <div className="mt-6 flex justify-end">
              <PillButton
                variant="filled"
                href="#dual-cta"
                className="bg-white! text-black! hover:bg-white/90!"
              >
                לחץ כאן
              </PillButton>
            </div>
          </div>
          <div className="col-span-6 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-6">
            <Image
              src="/figma/shelf.png"
              alt=""
              width={520}
              height={760}
              className="h-auto w-[clamp(200px,42vw,320px)]"
              priority
            />
            <Image
              src="/figma/shelf.png"
              alt=""
              width={520}
              height={760}
              className="h-auto w-[clamp(200px,42vw,320px)]"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
