import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fbTamlil = localFont({
  variable: "--font-heebo",
  display: "swap",
  src: [
    { path: "../public/fonts/FbTamlilCondensed-Light.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/FbTamlilCondensed-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/FbTamlilCondensed-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/FbTamlilCondensed-Bold.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/FbTamlilCondensed-Black.otf", weight: "900", style: "normal" },
  ],
});

export const metadata: Metadata = {
  title: "FLS Lighter — המצית שבא לעבוד",
  description:
    "FLS Lighter — טכנולוגיה וחכמה ללהבה אחידה ובלתי מבל הדלקה. יבואנים בלעדיים בישראל.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${fbTamlil.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
