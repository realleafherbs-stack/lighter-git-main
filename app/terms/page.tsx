import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingButtons } from "../components/FloatingButtons";

export const metadata: Metadata = {
  title: "תקנון ותנאי שימוש | FLS Lighter",
};

export default function TermsPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-fls-black text-white">
      <Header />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden border-y border-white/5">
          <div className="absolute inset-0 bg-linear-to-r from-[#050505] via-[#111] to-[#050505]" aria-hidden />
          <div className="relative h-[220px] sm:h-[280px] lg:h-[360px] w-full">
            <Image
              src="/figma/heror.png"
              alt="Terms hero"
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
              <h1 className="text-[clamp(36px,7vw,56px)] font-black text-white">תקנון ותנאי שימוש</h1>
              <p className="text-[clamp(18px,4vw,24px)] font-semibold tracking-[0.08em] text-fls-yellow uppercase">ביטובי מרקט לעסקים</p>
            </div>
            <div className="space-y-8 text-[clamp(17px,3.4vw,20px)] leading-[1.9]">
              <div>
                <p className="font-bold">1. כללי ומדיניות שימוש</p>
                <p>
                  אתר האינטרנט מופעל ע&quot;י חברת ביטובי מרקט לעסקים (להלן: &quot;החברה&quot;). השימוש והקנייה באתר כפופים לתנאי תקנון זה.
                  כל רכישה באתר מהווה הסכמה מלאה ובלתי מסויגת לתנאי התקנון וכן הסכמה להתקשרות משפטית בין הצדדים.
                </p>
                <p>כתובת משרדי החברה: המרכבה 25, חולון, ישראל.</p>
                <p>
                  המבצע רכישה באתר מצהיר כי הוא מכיר את כללי התקנון ומסכים לתחולתם. לא תהיה לו או למי מטעמו כל טענה או תביעה כנגד החברה,
                  למעט טענות הנוגעות להפרת התחייבויות החברה המפורטות בתקנון זה.
                </p>
              </div>

              <div>
                <p className="font-bold">2. תנאי סף לרכישה</p>
                <p>
                  רשאי לרכוש באתר כל אדם שמלאו לו 18 שנים (או חברה הרשומה כדין בישראל), המחזיק בכתובת דואר אלקטרוני פעילה ובכרטיס אשראי תקף
                  של אחת מחברות האשראי הפועלות בישראל.
                </p>
              </div>

              <div>
                <p className="font-bold">3. מחירים, מע&quot;מ ותשלום</p>
                <ul className="list-disc pr-6 space-y-1 text-white/85">
                  <li>כל המחירים באתר מופיעים בשקלים חדשים.</li>
                  <li>אלא אם צוין אחרת במפורש, המחירים באתר כוללים מע&quot;מ כחוק.</li>
                  <li>החברה רשאית לעדכן את מחירי המוצרים ותעריפי המשלוחים מעת לעת ללא צורך בהודעה מוקדמת.</li>
                </ul>
              </div>

              <div>
                <p className="font-bold">4. אספקה, בדיקת משלוח ושירות לקוחות</p>
                <ul className="list-disc pr-6 space-y-1 text-white/85">
                  <li>על הלקוח לבדוק את תכולת המשלוח עם קבלתו ולבצע השוואה להזמנה ולחשבונית.</li>
                  <li>במקרה של אי-התאמה או חוסר שביעות רצון, על הלקוח להודיע למוקד השירות בתוך 24 שעות מרגע האספקה.</li>
                  <li>מוקד השירות יתאם השלמה, החלפה, החזרה או זיכוי כספי בהתאם לדין ולמדיניות החברה.</li>
                  <li>תמונות המוצרים באתר להמחשה בלבד וייתכנו שינויים קלים בין המוצר המצולם למוצר בפועל.</li>
                </ul>
              </div>

              <div>
                <p className="font-bold">5. ביטול עסקה והחזרת מוצרים</p>
                <ul className="list-disc pr-6 space-y-1 text-white/85">
                  <li>הלקוח רשאי לבטל הזמנה בהתאם לחוק הגנת הצרכן, התשמ&quot;א – 1981.</li>
                  <li>ניתן לבטל עסקה עד 14 יום ממועד קבלת המוצר, בתנאי שהמוצר הוחזר באריזתו המקורית ושלא נעשה בו שימוש.</li>
                  <li>ביטול הזמנה ייעשה בכתב בלבד: באתר, בוואטסאפ או בפנייה טלפונית למוקד השירות.</li>
                  <li>החזרת המוצר תתבצע למשרדי החברה על חשבון הלקוח. איסוף ע&quot;י החברה יחויב בעלות משלוח.</li>
                </ul>
              </div>

              <div>
                <p className="font-bold">6. זכות החברה לבטל הזמנה</p>
                <p>
                  החברה רשאית לבטל הזמנה מכל סיבה שהיא (לרבות חוסר במלאי, טעות במחיר או תקלה טכנית) תוך עדכון הלקוח. החברה לא תהיה אחראית לכל
                  נזק ישיר או עקיף שייגרם ללקוח כתוצאה מביטול זה.
                </p>
              </div>

              <div>
                <p className="font-bold">7. פרטיות, מאגר מידע ודיוור ישיר</p>
                <ul className="list-disc pr-6 space-y-1 text-white/85">
                  <li>בעת הרישום או ביצוע רכישה, הלקוח מאשר לחברה לשמור את פרטיו במאגר המידע לצורך תפעול ההזמנות.</li>
                  <li>הלקוח נותן את הסכמתו לקבל דברי פרסומת, עדכונים ומידע שיווקי באמצעות דוא&quot;ל, SMS או כל אמצעי תקשורת אחר.</li>
                  <li>הלקוח רשאי להסיר עצמו מרשימת התפוצה בכל עת באמצעות כפתור ההסרה או פנייה לשירות הלקוחות.</li>
                </ul>
              </div>

              <div>
                <p className="font-bold">8. הגבלת אחריות</p>
                <ul className="list-disc pr-6 space-y-1 text-white/85">
                  <li>החברה לא תהיה אחראית לאיחורים באספקה הנובעים מכוח עליון או מאירועים שאינם בשליטתה.</li>
                  <li>החברה אינה אחראית לנזקים הנובעים מתקלות טכניות בחומרה, תוכנה או רשת האינטרנט.</li>
                  <li>בכל מקרה, אחריות החברה לא תעלה על סכום המוצרים שהוזמנו ושולמו בפועל.</li>
                </ul>
              </div>

              <div>
                <p className="font-bold">9. הצהרה בריאותית</p>
                <p>
                  התכנים באתר אינם מהווים ייעוץ רפואי או תחליף להתייעצות עם איש מקצוע. השימוש במוצרים הינו על אחריות הלקוח בלבד ומומלץ להיוועץ
                  ברופא לפני שימוש בתוספים או מוצרים ייעודיים.
                </p>
              </div>

              <div>
                <p className="font-bold">10. קניין רוחני</p>
                <p>
                  כל זכויות היוצרים והקניין הרוחני באתר, לרבות מבנה האתר, העיצוב הגרפי, הטקסטים, התמונות, הווידאו והסימנים המסחריים, שייכים בלעדית
                  לחברה. חל איסור להעתיק, להפיץ או להשתמש בתכנים ללא אישור בכתב.
                </p>
              </div>

              <div>
                <p className="font-bold">11. סמכות שיפוט</p>
                <p>
                  התקנון כפוף לחוקי מדינת ישראל בלבד. סמכות השיפוט הבלעדית תהיה נתונה לבתי המשפט המוסמכים במחוז תל אביב-יפו או במחוז המרכז.
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
