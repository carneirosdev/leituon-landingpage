import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  /** Centrado nas secções largas, alinhado à esquerda nas de duas colunas. */
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-display mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-pretty mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
