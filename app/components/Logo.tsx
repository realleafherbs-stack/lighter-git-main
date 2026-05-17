type Props = { className?: string; tone?: "yellow" | "white" | "black" };

export function Logo({ className, tone = "yellow" }: Props) {
  const fill =
    tone === "yellow"
      ? "var(--fls-yellow)"
      : tone === "white"
        ? "#ffffff"
        : "#000000";
  return (
    <svg
      viewBox="0 0 122 31"
      className={className}
      aria-label="FLS"
      role="img"
    >
      <text
        x="0"
        y="25"
        fontFamily="Heebo, system-ui, sans-serif"
        fontWeight={900}
        fontSize={31}
        letterSpacing={2}
        fill={fill}
      >
        FLS
      </text>
    </svg>
  );
}
