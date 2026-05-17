import Image from "next/image";

export function YellowRibbon() {
  return (
    <section
      aria-hidden="true"
      className="relative w-full overflow-hidden leading-none"
    >
      <Image
        src="/figma/yellow-ribbon.png"
        alt=""
        width={2880}
        height={208}
        className="block w-full h-auto"
        priority
      />
    </section>
  );
}
