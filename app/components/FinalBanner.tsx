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
           <section className="hidden md:block relative bg-[#e8e8e8] overflow-hidden">
              {/* Background image covering full width */}
              <Image 
                src="/figma/four-shelf.png" 
                alt="" 
                fill
                sizes="100vw"
                className="object-cover pointer-events-none z-0" style={{ objectPosition: 'center 70%' }}
                priority 
                aria-hidden
              />
              {/* Content overlay */}
              <div className="relative z-10 pt-14 pb-10 flex flex-col items-center text-center">
                <Image src="/figma/fls.png" alt="FLS" width={520} height={220} className="h-auto w-[clamp(220px,22vw,340px)]" priority />
                <p className="text-fls-yellow text-[clamp(30px,3.4vw,50px)] font-black mt-3 mb-8">המצית שבא לעבוד!</p>
                <div className="min-h-[700px]" aria-hidden />
                <PillButton variant="filled" href="#dual-cta" className="px-16! py-6! text-[34px]!">הזמינו עכשיו</PillButton>
              </div>
            </section>
    </div>
  );
}
