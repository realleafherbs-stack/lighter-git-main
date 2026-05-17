export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 md:left-6 md:right-auto z-40 flex flex-col gap-3 print:hidden">
      <a
        href="https://wa.me/972587991094"
        aria-label="WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-lg hover:scale-105 transition-transform"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
          <path d="M20.4 3.5C18.2 1.3 15.2 0 12 0 5.4 0 0 5.3 0 11.9c0 2.1.6 4.2 1.6 6L0 24l6.3-1.6c1.7.9 3.7 1.5 5.7 1.5 6.6 0 12-5.3 12-11.9 0-3.2-1.3-6.2-3.6-8.5zM12 21.9c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.6-3.4-1.6-5.4C2 6.4 6.5 1.9 12 1.9s10 4.5 10 10-4.5 10-10 10zm5.5-7.5c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-1.6-.8-2.7-1.5-3.8-3.4-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5 0-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4z" />
        </svg>
      </a>
      <a
        href="tel:0587991094"
        aria-label="חייגו אלינו"
        className="w-14 h-14 rounded-full bg-fls-yellow text-black grid place-items-center shadow-lg hover:scale-105 transition-transform"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M6.6 10.8c1.4 2.8 3.7 5.1 6.5 6.5l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .7-.3 1l-2.2 2.2z" />
        </svg>
      </a>
    </div>
  );
}
