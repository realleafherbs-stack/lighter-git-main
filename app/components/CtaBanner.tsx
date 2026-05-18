import Image from "next/image";
import { PillButton } from "./Button";

export function CtaBanner() {
  return (
    <section className="relative bg-fls-yellow overflow-visible py-4 md:py-8">
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
           
            {/* Shelf 1 — front-left */}
            <div className="absolute left-[-10%] top-[2%] w-[85%] z-5">
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
        <div className="hidden md:flex items-center justify-between overflow-visible">
          {/* Text — right side in RTL (first in DOM) */}
          <div className="text-right shrink-0">
            <h2 className="text-black leading-[1.05] text-[clamp(44px,5vw,64px)] text-right mb-8">
              <span className="block font-normal">המצית שהלקוחות שלך</span>
              <span className="block font-black">ישמחו לחזור לקנות שוב!</span>
            </h2>

            <h3 className="mt-12 text-black font-black text-[clamp(28px,3vw,42px)] text-right">
              רוצה שסוכן יחזור אליך?
            </h3>

            <div className="mt-4 flex justify-start">
              <PillButton
                variant="filled"
                href="#dual-cta"
                className="bg-white! text-black! hover:bg-white/90!"
              >
                לחץ כאן
              </PillButton>
            </div>
          </div>
          {/* Images — left side in RTL (second in DOM) */}
          <div className="flex items-end -mb-10" dir="ltr" style={{ gap: 0 }}>
            <div className="shrink-0" style={{ width: 'clamp(300px,32vw,480px)' }}>
              <Image
                src="/figma/shelf.png"
                alt=""
                width={520}
                height={760}
                className="w-full h-auto block"
                priority
              />
            </div>
            <div className="shrink-0 -ml-64" style={{ width: 'clamp(300px,32vw,480px)' }}>
              <Image
                src="/figma/shelf.png"
                alt=""
                width={520}
                height={760}
                className="w-full h-auto block"
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
