"use client";

import Image from "next/image";
import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingButtons } from "../components/FloatingButtons";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-lg bg-fls-yellow text-[#1a1a00] placeholder-[#5a4a00]/60 font-semibold px-4 py-3 outline-none focus:ring-2 focus:ring-[#1a1a00]/30 text-right";

  return (
    <div className="relative flex min-h-screen flex-col bg-fls-black text-white">
      <Header />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden border-y border-white/5">
          <div className="absolute inset-0 bg-linear-to-r from-[#050505] via-[#111] to-[#050505]" aria-hidden />
          <div className="relative h-[220px] sm:h-[280px] lg:h-[360px] w-full">
            <Image
              src="/figma/heror.png"
              alt="Contact hero"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="relative overflow-hidden py-12 lg:py-20 bg-white">
          <div
            aria-hidden
            className="absolute inset-0 bg-[url('/figma/fbg.png')] bg-cover bg-center opacity-5"
          />
          <div className="relative mx-auto max-w-[900px] px-4 sm:px-8 lg:px-6 text-right text-[#1a1a00]">
            <div className="flex flex-col gap-3 mb-8">
              <h1 className="text-[clamp(36px,7vw,56px)] font-black text-[#1a1a00]">צור קשר</h1>
              <p className="text-[clamp(16px,3vw,22px)] font-semibold tracking-[0.08em] text-fls-yellow uppercase">ביטובי מרקט לעסקים</p>
            </div>

            {/* ── Contact Card ── */}
            <div className="text-right text-[#1a1a00]">
              <h2 className="text-[clamp(26px,5vw,40px)] font-black text-center mb-1 text-black">יצירת קשר</h2>
              <p className="text-[clamp(13px,2vw,16px)] text-center mb-8 opacity-70">השאירו פרטים ונציג יחזור אליכם בהקדם</p>

              {status === "sent" ? (
                <p className="text-center text-xl font-black text-green-700 py-10">תודה! פנייתך התקבלה, נחזור אליך בהקדם.</p>
              ) : (
                <form className="flex flex-col gap-4 max-w-[520px] mx-auto w-full" dir="rtl" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-bold">שם פרטי/ עסק</label>
                    <input type="text" placeholder="שם פרטי/ עסק" required value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-bold">טלפון</label>
                    <input type="tel" placeholder="טלפון" required value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-bold">אימייל</label>
                    <input type="email" placeholder="אימייל" required value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-bold">הודעה</label>
                    <textarea placeholder="הודעה" rows={4} value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className={`${inputClass} resize-none`} />
                  </div>
                  {status === "error" && (
                    <p className="text-center text-red-600 font-bold text-sm">שגיאה בשליחה, נסה שוב מאוחר יותר.</p>
                  )}
                  <div className="flex justify-center mt-2">
                    <button type="submit" disabled={status === "sending"}
                      className="bg-fls-yellow text-[#1a1a00] font-black text-lg px-12 py-3 rounded-full hover:brightness-110 transition disabled:opacity-60">
                      {status === "sending" ? "שולח..." : "שליחה"}
                    </button>
                  </div>
                </form>
              )}

              {/* ── Lighters + Logo row ── */}
              <div className="mt-10 flex flex-row items-center justify-between gap-4 w-full max-w-[680px] mx-auto">
                <div className="flex flex-col items-start gap-3 w-[48%]">
                  <Image src="/figma/Frame91.png" alt="FLS Lighter logo" width={220} height={100} className="w-[180px] sm:w-[220px] h-auto" />
                </div>
                <div className="w-[48%]">
                  <Image src="/figma/heroimg.png" alt="FLS Lighters" width={500} height={500} className="w-full h-auto" />
                </div>
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
