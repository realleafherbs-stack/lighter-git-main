import Image from "next/image";

export function Products() {
  return (
    <section
      style={{
        backgroundImage: 'url(/figma/our-products-bg.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      id="products"
      className="relative bg-white overflow-hidden py-14"
    >
      <Image
        src="/figma/our-products-bg.png"
        alt=""
        fill
        priority
        aria-hidden
        className="object-cover object-center opacity-200 -z-10"
      />
      <div
        aria-hidden
        className="fls-watermark absolute -bottom-8 left-[-2vw] text-[18vw] leading-none pointer-events-none select-none"
      >
        FLS
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="text-center mb-8">
          
          <h2 className="text-black font-black leading-[1.05] text-[clamp(36px,4.8vw,60px)] mb-1">
            המוצרים <span className="text-fls-black">שלנו</span>
          </h2>
          <p className="text-black/75 text-[clamp(20px,2vw,28px)] font-medium">
            ארבעה צבעים שכולם אוהבים
          </p>
        </div>

        <div className="mx-auto w-full max-w-[1100px]">
          <Image
            src="/figma/lighter-colors.png"
            alt="FLS lighter colors"
            width={1363}
            height={1064}
            className="w-full h-auto"
          />
          <div className="grid grid-cols-4 gap-3 sm:gap-8 md:gap-14 mt-1 text-center">
            <p className="text-black text-[clamp(18px,4.6vw,29px)] font-medium leading-snug">שחור</p>
            <p className="text-black text-[clamp(18px,4.6vw,29px)] font-medium leading-snug">זהב</p>
            <p className="text-black text-[clamp(18px,4.6vw,29px)] font-medium leading-snug">כחול מטאלי</p>
            <p className="text-black text-[clamp(18px,4.6vw,29px)] font-medium leading-snug">כסוף</p>
          </div>
        </div>
      </div>
    </section>
  );
}
