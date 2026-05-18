import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingButtons } from "../components/FloatingButtons";

export const metadata: Metadata = {
  title: "מדיניות משלוחים ואספקה | FLS Lighter",
};

export default function ShippingPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-fls-black text-white">
      <Header />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden border-y border-white/5">
          <div className="absolute inset-0 bg-linear-to-r from-[#050505] via-[#111] to-[#050505]" aria-hidden />
          <div className="relative h-[220px] sm:h-[280px] lg:h-[360px] w-full">
            <Image
              src="/figma/heror.png"
              alt="Shipping hero"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="relative overflow-hidden py-16 lg:py-24">
          <div
            aria-hidden
            className="absolute inset-0 bg-[url('/figma/fbg.png')] bg-cover bg-center opacity-20"
          />
          <div className="relative mx-auto max-w-[900px] px-4 sm:px-8 lg:px-6 text-right text-white/90">
            <div className="flex flex-col gap-3 mb-10">
              <h1 className="text-[clamp(36px,7vw,56px)] font-black text-white">מדיניות משלוחים ואספקה</h1>
              <p className="text-[clamp(18px,4vw,24px)] font-semibold tracking-[0.08em] text-fls-yellow uppercase">ביטובי מרקט לעסקים</p>
            </div>
            <div className="space-y-8 text-[clamp(17px,3.4vw,20px)] leading-[1.9]">
              <div>
                <p>
                  אנו ב-CLICK2PARTY.CO.IL עושים את מירב המאמצים כדי שההזמנה שלכם תגיע אליכם במהירות המרבית. להלן פירוט תהליך השילוח שלנו:
                </p>
              </div>

              <div>
                <p className="font-bold">מהירות הטיפול בהזמנה 🚀</p>
                <ul className="list-disc pr-6 space-y-1 text-white/85">
                  <li>
                    <span className="font-bold">הזמנות עד השעה 14:00:</span> כל הזמנה שתתקבל עד השעה 14:00 ביום עסקים רגיל (א&apos;-ה&apos;), תארז ותימסר באותו היום לחברת השליחויות
                    ותיקלט במחסן ההפצה שלה.
                  </li>
                  <li>
                    <span className="font-bold">מעקב אחר משלוח:</span> ברגע שהחבילה נקלטת אצל חברת השליחויות, תקבלו הודעת SMS למספר הטלפון שהזנתם, עם קישור למעקב בזמן אמת אחר
                    מיקום המשלוח.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold">זמני אספקה 🚛</p>
                <ul className="list-disc pr-6 space-y-1 text-white/85">
                  <li>
                    <span className="font-bold">השאיפה שלנו:</span> ברוב המקרים, המשלוח ייצא עוד באותו הערב לאזור החלוקה הקרוב אליכם ויימסר כבר ביום העסקים למחרת.
                  </li>
                  <li>
                    <span className="font-bold">התחייבות:</span> אנו מתחייבים לאספקת המוצרים עד 3 ימי עסקים (ימי עסקים אינם כוללים את יום ההזמנה, ימי שישי, שבת, ערבי חג וחג).
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold">שירות ובירורים 📞</p>
                <p>
                  במידה וההזמנה לא הגיעה אליכם בתוך 3 ימי עסקים, או אם יש לכם שאלה בנוגע למשלוח, צוות שירות הלקוחות שלנו זמין עבורכם:
                </p>
                <ul className="list-disc pr-6 space-y-1 text-white/85">
                  <li>
                    <span className="font-bold">טלפון/וואטסאפ:</span> 054-719-9390
                  </li>
                  <li>
                    <span className="font-bold">שעות פעילות:</span> א&apos;-ה&apos; בין השעות 9:00-15:00
                  </li>
                </ul>
                <p className="text-white/80 mt-4">
                  לישובים מרוחקים (רמת הגולן, אילת, יישובי הערבה ומעבר לקו הירוק), ייתכנו עיכובים קלים מעבר ל-3 ימי עסקים.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative overflow-hidden"
          style={{ backgroundImage: "url('/figma/ybs.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="relative mx-auto max-w-[1440px] px-6 py-12 lg:py-16 text-center text-[#1a1a00]">
            <p className="text-[clamp(13px,2vw,16px)] font-bold tracking-[0.18em] uppercase mb-1">B2B MARKT LTD</p>
            <h2 className="text-[clamp(26px,5vw,44px)] font-black leading-tight mb-10">
              יבואנית בלעדית של
              <br />
              מציתי <span className="font-black">FLS</span> בישראל
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 max-w-[860px] mx-auto">
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image src="/figma/icons8-audio-64.png" alt="אחריות מלאה" width={80} height={80} className="w-full h-auto" />
                </div>
                <p className="font-black text-[clamp(22px,3.5vw,30px)]">אחריות מלאה</p>
                <p className="text-[clamp(17px,2.5vw,22px)] font-bold opacity-90">אחריות החלפה ורכישה מאובטחת</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image src="/figma/icons8-delivery-50.png" alt="משלוח מהיר" width={80} height={80} className="w-full h-auto" />
                </div>
                <p className="font-black text-[clamp(22px,3.5vw,30px)]">משלוח מהיר</p>
                <p className="text-[clamp(17px,2.5vw,22px)] font-bold opacity-90">עד 3 ימי עסקים</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image src="/figma/icons8-shield.png" alt="שירות לקוחות" width={80} height={80} className="w-full h-auto" />
                </div>
                <p className="font-black text-[clamp(22px,3.5vw,30px)]">שירות לקוחות</p>
                <p className="text-[clamp(17px,2.5vw,22px)] font-bold opacity-90">זמינות ומענה מקצועי</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
