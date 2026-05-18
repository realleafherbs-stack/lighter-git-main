import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingButtons } from "../components/FloatingButtons";

export const metadata: Metadata = {
  title: "הצהרת נגישות | FLS Lighter",
};

export default function AccessibilityPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-fls-black text-white">
      <Header />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden border-y border-white/5">
          <div className="absolute inset-0 bg-linear-to-r from-[#050505] via-[#111] to-[#050505]" aria-hidden />
          <div className="relative h-[220px] sm:h-[280px] lg:h-[360px] w-full">
            <Image
              src="/figma/heror.png"
              alt="Accessibility hero"
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
              <h1 className="text-[clamp(36px,7vw,56px)] font-black text-white">הצהרת נגישות</h1>
              <p className="text-[clamp(18px,4vw,24px)] font-semibold tracking-[0.08em] text-fls-yellow uppercase">ביטובי מרקט לעסקים</p>
            </div>
            <div className="space-y-8 text-[clamp(17px,3.4vw,20px)] leading-[1.9]">
              <div>
                <p>
                  רואה בחשיבות עליונה את מתן השירות השוויוני לכלל לקוחותיה, ובכלל זה לאנשים עם מוגבלויות. אנו פועלים מתוך אמונה כי לכל אדם מגיעה הזכות לחיות בעצמאות, בכבוד ובשוויון.
                </p>
                <p>
                  מטרתנו בהצהרה זו היא לייעל את השימוש באתר ולשפר את חוויית הגלישה עבור כלל האוכלוסייה, תוך עמידה בדרישות החוק.
                </p>
              </div>

              <div>
                <p className="font-bold">התאמות הנגישות באתר</p>
                <p>
                  התאמת הנגישות באתר בוצעה בהתאם לתקנה 35 בתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע&quot;ג 2013, לרמה AA,
                  ובכפוף לשינויים והתאמות שבוצעו במסמך התקן הישראלי (ת&quot;י 5568).
                </p>
                <p>האתר נבדק ונמצא תואם לדפדפנים המובילים: כרום, פיירפוקס, ספארי, אדג&apos; ומוזילה.</p>
              </div>

              <div>
                <p className="font-bold">אמצעי הנגישות הקיימים באתר</p>
                <ul className="list-disc pr-6 space-y-1 text-white/85">
                  <li>תאימות דפדפנים: תמיכה מלאה בכל הדפדפנים התקניים המקובלים.</li>
                  <li>שפה ותוכן: תכני האתר נכתבו בשפה ברורה ופשוטה תוך שימוש בפונטים קריאים.</li>
                  <li>מבניות: האתר בנוי בצורה היררכית הכוללת כותרות, פסקאות ורשימות להתמצאות קלה.</li>
                  <li>ניווט פשוט: התפריטים זמינים, ברורים וקבועים.</li>
                  <li>קישורים: כל הקישורים באתר מוגדרים בצורה ברורה ומסבירים לאן הגולש מועבר.</li>
                  <li>דילוג לתוכן: קיימים קישורים בתחילת הדף המאפשרים דילוג ישיר לתוכן המרכזי עבור משתמשי מקלדת.</li>
                  <li>תמיכה בטכנולוגיות מסייעות: הוספת תיאור טקסטואלי (Alt Text) לתמונות ואייקונים והטמעת חוקי ARIA לשיפור הדיוק בקוראי מסך.</li>
                  <li>רספונסיביות: התאמה מלאה לרזולוציות שונות (מחשב, טאבלט וסמארטפון).</li>
                  <li>שליטה במדיה: הוספת כפתורי עצירה והפעלה לגלריות סרטונים ותכנים נעים.</li>
                </ul>
              </div>

              <div>
                <p className="font-bold">הנחיות להפעלה ושימוש</p>
                <ul className="list-disc pr-6 space-y-1 text-white/85">
                  <li>שינוי תצוגה: ניתן להגדיל או להקטין את תצוגת האתר באמצעות מקשי CTRL יחד עם גלגלת העכבר או מקשי + ו- -.</li>
                  <li>גודל גופן: ניתן לשנות את גודל הגופן דרך תפריט הנגישות המוטמע באתר.</li>
                  <li>ניווט מקלדת: ניתן לנווט באתר באמצעות מקש TAB למעבר בין רכיבים ומקש Enter להפעלת קישורים.</li>
                  <li>מניעת הבהובים: האתר אינו כולל תכנים מהבהבים או רוטטים העלולים לגרום לאי-נוחות.</li>
                </ul>
              </div>

              <div>
                <p className="font-bold">התאמה למוגבלי ראייה ושמיעה</p>
                <p>
                  האתר מותאם לעבודה עם מגדילי ראות בסיסיים, תוכנות זיהוי קולי וחבילות הנגישות המובנות של מערכות ההפעלה (Windows/Mac/Android/iOS).
                </p>
              </div>

              <div>
                <p className="font-bold">סייגים לנגישות</p>
                <p>
                  אנו עושים מאמצים כבירים להנגיש את כלל דפי האתר. עם זאת, ייתכן שקיימים דפים או חלקים שטרם הונגשו במלואם או שטרם נמצא עבורם פתרון טכנולוגי מתאים. תכנים שמוזנים ע&quot;י צד ג&apos; עשויים שלא להיות מונגשים.
                </p>
              </div>

              <div>
                <p className="font-bold">נתקלתם בבעיה? אנחנו כאן לסייע!</p>
                <p>
                  אם במהלך הגלישה נתקלתם בקושי בנושא נגישות, נשמח לקבל משוב כדי שנוכל לתקן ולשפר.
                </p>
                <p className="mt-4">
                  <span className="font-bold">פרטי אחראי נגישות בחברה:</span>
                  <br />
                  שם: רועי מזרחי
                  <br />
                  אימייל: realleafherbs@gmail.com
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
