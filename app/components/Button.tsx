import type { ReactNode } from "react";

type Variant = "filled" | "outline";

type Props = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function PillButton({
  children,
  variant = "filled",
  className = "",
  href,
  onClick,
  type = "button",
}: Props) {
  const base =
    "inline-flex items-center justify-center font-extrabold text-[clamp(18px,1.6vw,26px)] tracking-tight rounded-full whitespace-nowrap transition-transform hover:-translate-y-0.5 active:translate-y-0 px-7 pt-2 pb-1 h-[42px] min-w-[165px]";
  const styles =
    variant === "filled"
      ? "bg-fls-yellow text-black hover:bg-fls-yellow-deep"
      : "border border-fls-yellow-deep text-fls-yellow-deep hover:bg-fls-yellow-deep/10";

  const cls = `${base} ${styles} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
