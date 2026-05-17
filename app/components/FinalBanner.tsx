import Image from "next/image";
import { PillButton } from "./Button";

export function FinalBanner() {
  return (
    <div>
           {/* ── MOBILE ── */}
           <section className="md:hidden relative bg-[#d8d8d8] overflow-hidden">
             <div className="absolute inset-0" style={{ backgroundImage: 'url("/figma/mfc.png")', backgroundSize: '115%', backgroundPosition: '65% center', backgroundRepeat: 'no-repeat' }} aria-hidden />
             <div className="relative flex flex-col items-center text-center gap-3 px-6 pt-0 pb-6">
               <Image src="/figma/fls.png" alt="FLS" width={520} height={220} className="h-auto w-[clamp(90px,25vw,140px)] mt-8" priority />
               <p className="text-fls-yellow text-[20px] font-semibold">המצית שבא לעבוד!</p>
               <div className="w-full min-h-[500px]" aria-hidden />
               <PillButton variant="filled" href="#dual-cta">הזמינו עכשיו</PillButton>
             </div>
           </section>

           {/* ── DESKTOP ── */}
           <section className="hidden md:block relative bg-white overflow-hidden py-20">
              <Image aria-hidden src="/figma/mfc.png" alt="" fill sizes="100vw" className="object-cover object-bottom pointer-events-none z-0" priority />
              <div className="relative mx-auto max-w-[1440px] px-12 flex flex-col items-center text-center gap-8">
                <Image src="/figma/fls.png" alt="FLS" width={520} height={220} className="h-auto w-[clamp(180px,18vw,280px)]" priority />
                <p className="text-fls-yellow text-[clamp(20px,1.8vw,26px)] font-semibold">המצית שבא לעבוד!</p>
                <div className="w-full min-h-[420px]" aria-hidden />
                <PillButton variant="filled" href="#dual-cta">הזמינו עכשיו</PillButton>
              </div>
            </section>
    </div>
  );
}
