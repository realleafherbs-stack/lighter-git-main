import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingButtons } from "../components/FloatingButtons";

export const metadata: Metadata = {
  title: "מדיניות פרטיות | FLS Lighter",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-fls-black text-white">
      <Header />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden border-y border-white/5">
          <div className="absolute inset-0 bg-linear-to-r from-[#050505] via-[#111] to-[#050505]" aria-hidden />
          <div className="relative h-[220px] sm:h-[280px] lg:h-[360px] w-full">
            <Image
              src="/figma/heror.png"
              alt="Privacy hero"
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
              <h1 className="text-[clamp(36px,7vw,56px)] font-black text-white">מדיניות פרטיות</h1>
              <p className="text-[clamp(18px,4vw,24px)] font-semibold tracking-[0.08em] text-fls-yellow uppercase">ביטובי מרקט לעסקים</p>
            </div>
            <div className="space-y-8 text-[clamp(17px,3.4vw,20px)] leading-[1.9]">
              <div>
                <p className="font-bold">א. הקדמה</p>
                <p>
                  הפרטיות של המבקרים באתר FLSisrael.co.il חשובה לנו מאוד, ואנחנו מחויבים לשמירה עליה. המדיניות זו מסבירה מה נעשה עם הפרטים האישיים שלכם.
                  ההסכמה לשימוש שלנו בעוגיות (Cookies) בהתאם לתנאים של מדיניות זו בזמן הביקור הראשון באתר, מאפשרת לנו להשתמש בעוגיות בכל פעם שאתם מבקרים באתר.
                </p>
              </div>
              <div>
                <p className="font-bold">ב. איסוף פרטים אישיים</p>
                <p>ייתכן שהסוגים הבאים של פרטים אישיים ייאספו, יאוחסנו, ויעשה בהם שימוש:</p>
                <ol className="list-decimal pr-6 space-y-1 text-white/85">
                  <li>מידע על המחשב שלכם, כולל כתובת ה-IP, מיקומכם הגאוגרפי, סוג הדפדפן ומערכת ההפעלה.</li>
                  <li>מידע על הביקורים והשימוש שלכם באתר, כולל מקור ההפניה, אורך הביקור, צפיות בעמודים, ונתיבי המעבר באתר.</li>
                  <li>מידע שהזנתם בזמן ההרשמה או יצירת פרופיל (שם, דוא&quot;ל, כתובת, טלפון, ופרטי תעסוקה).</li>
                  <li>מידע הקשור לרכישות: שם, כתובת, מספר טלפון, כתובת דואר אלקטרוני, ופרטי כרטיס אשראי.</li>
                  <li>מידע שאתם מפרסמים באתר בכוונה לפרסמו באינטרנט (תגובות, חוות דעת).</li>
                  <li>כל סוג אחר של פרטים אישיים שאתם שולחים אלינו מרצונכם.</li>
                </ol>
              </div>
              <div>
                <p className="font-bold">ג. שימוש בפרטים האישיים שלכם</p>
                <p>בפרטים אישיים שנמסרו לנו ייעשה שימוש למטרות הבאות:</p>
                <ul className="list-disc pr-6 space-y-1 text-white/85">
                  <li>ניהול האתר והעסק, והתאמה אישית של האתר עבורכם.</li>
                  <li>אספקת סחורות ושירותים שרכשתם באתר.</li>
                  <li>שליחת חשבוניות, הצהרות, ותזכורות תשלום.</li>
                  <li>שליחת הודעות מסחריות שאינן שיווקיות (כגון עדכוני הזמנה).</li>
                  <li>שליחת ניוזלטרים ומסרים שיווקיים (בכפוף להסכמתכם, ועם אפשרות הסרה בכל עת).</li>
                  <li>שמירה על האתר מאובטח ומניעת הונאות.</li>
                  <li>אימות היענות לתנאי השירות של האתר.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold">ד. חשיפת פרטים אישיים</p>
                <p>
                  אנחנו עשויים למסור את הפרטים האישיים שלכם לעובדים, מנהלים, ספקים או קבלני משנה שלנו במידה סבירה וכנדרש למטרות המצוינות במדיניות זו. כמו כן, נמסור מידע:
                </p>
                <ol className="list-decimal pr-6 space-y-1 text-white/85">
                  <li>לפי מה שנדרש מאתנו על פי חוק או בהקשר של הליך משפטי.</li>
                  <li>על מנת לבסס, להפעיל, או להגן על זכויותינו המשפטיות.</li>
                  <li>לרוכש פוטנציאלי של העסק שלנו.</li>
                </ol>
                <p>אנו מתחייבים לא למסור את הפרטים האישיים שלכם לצד ג&apos; לצורך השיווק הישיר שלו ללא הסכמתכם המפורשת.</p>
              </div>
              <div>
                <p className="font-bold">ה. העברות נתונים בינלאומיות</p>
                <p>
                  מידע שאנחנו אוספים עשוי להיות מאוחסן ומעובד במדינות בהן אנו או ספקי השירות שלנו פועלים (לדוגמה: שרתי ענן בארה&quot;ב או אירופה). אתם מביעים הסכמה להעברות אלו.
                </p>
                <ol className="list-decimal pr-5 space-y-1">
                  <li>פרטים אישיים שאנחנו מעבדים לא יישמרו יותר מכמה שנדרש עבור המטרה שלשמה נאספו.</li>
                  <li>אנו נשמור מסמכים המכילים נתונים אישיים לפי הנדרש על פי חוק, או אם לדעתנו המסמכים רלוונטיים להליך משפטי קיים או פוטנציאלי.</li>
                </ol>
              </div>
              <div>
                <p className="font-bold">ז. אבטחת הפרטים האישיים שלכם</p>
                <ol className="list-decimal pr-5 space-y-1">
                  <li>אנחנו ננקוט משנה זהירות ארגוני וטכני סביר על מנת למנוע אובדן או שימוש לרעה במידע.</li>
                  <li>המידע יאוחסן בשרתים מאובטחים המוגנים בסיסמה ובחומת אש.</li>
                  <li>העברות כספיות באתר מוגנות באמצעות טכנולוגיית הצפנה (SSL).</li>
                  <li>אתם אחראים על שמירת הסיסמה שלכם חסויה.</li>
                </ol>
              </div>
              <div>
                <p className="font-bold">ח. תיקונים</p>
                <p>
                  אנחנו עשויים לעדכן מדיניות זו מעת לעת. עליכם לבדוק את העמוד מדי פעם כדי לוודא שאתם מבינים כל שינוי.
                </p>
              </div>
              <div>
                <p className="font-bold">ט. הזכויות שלכם</p>
                <p>
                  אתם יכולים להורות לנו לספק לכם כל פרט מפרטיכם האישיים שאנו מחזיקים. אספקת פרטים אלה תהיה כפופה להצגת ראיות הולמות לזהותכם (כגון צילום תעודת זהות). ניתן להורות לנו בכל עת לא לעבד את המידע לצורכי שיווק.
                </p>
              </div>
              <div>
                <p className="font-bold">י. אתרי צד ג&apos;</p>
                <p>
                  האתר כולל קישורים לאתרי צד ג&apos;. אין לנו שליטה על מדיניות הפרטיות של אתרים אלו ואיננו אחראים עליהם.
                </p>
              </div>
              <div>
                <p className="font-bold">יא. עוגיות (Cookies)</p>
                <p>
                  האתר שלנו משתמש בעוגיות &quot;עיקשות&quot; ובעוגיות &quot;פעולה&quot;. אנו משתמשים ב-Google Analytics וב-Google Adwords כדי לזהות מחשב בעת ביקור, לעקוב אחר המשתמשים, לשפר את נוחות השימוש ולנתח את ביצועי האתר.
                </p>
                <ul className="list-disc pr-6 space-y-1 text-white/85">
                  <li>בבאפשרותכם לחסום או למחוק עוגיות דרך הגדרות הדפדפן שלכם (כרום, פיירפוקס, אקספלורר וכו&apos;).</li>
                  <li>לתשומת לבכם: חסימת עוגיות עלולה לפגוע בחוויית הגלישה וביכולת לבצע רכישות באתר.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold">ליצירת קשר בנושאי פרטיות:</p>
                <p>
                  ניתן לפנות אלינו בכתובת המרכבה 25, חולון, או דרך אמצעי ההתקשרות המופיעים באתר.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ── B2B Banner ── */}
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
              {/* Icon 1 */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image src="/figma/icons8-audio-64.png" alt="אחריות מלאה" width={80} height={80} className="w-full h-auto" />
                </div>
                <p className="font-black text-[clamp(22px,3.5vw,30px)]">אחריות מלאה</p>
                <p className="text-[clamp(17px,2.5vw,22px)] font-bold opacity-90">אחריות החלפה ורכישה מאובטחת</p>
              </div>
              {/* Icon 2 */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image src="/figma/icons8-delivery-50.png" alt="משלוח מהיר" width={80} height={80} className="w-full h-auto" />
                </div>
                <p className="font-black text-[clamp(22px,3.5vw,30px)]">משלוח מהיר</p>
                <p className="text-[clamp(17px,2.5vw,22px)] font-bold opacity-90">עד 3 ימי עסקים</p>
              </div>
              {/* Icon 3 */}
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
