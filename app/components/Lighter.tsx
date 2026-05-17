import Image from "next/image";
import lighterPng from "../../public/figma/lighter.png";

type LighterColor = "yellow" | "silver" | "blue" | "gold" | "black";

type Props = {
  color?: LighterColor;
  size?: number;
  withFlame?: boolean;
  className?: string;
};

const ASPECT = lighterPng.width / lighterPng.height;

export function Lighter({ size = 320, className }: Props) {
  const h = size;
  const w = Math.round(h * ASPECT);
  return (
    <Image
      src={lighterPng}
      alt="FLS Lighter"
      width={w}
      height={h}
      className={className}
      priority={size >= 480}
    />
  );
}

export type { LighterColor };
