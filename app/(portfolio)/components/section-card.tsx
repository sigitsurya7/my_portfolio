import type { ReactNode } from "react";

type AccentPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const accentPositionMap: Record<AccentPosition, string> = {
  "top-left": "-top-10 -left-6",
  "top-right": "-top-8 -right-6",
  "bottom-left": "-bottom-8 -left-8",
  "bottom-right": "-bottom-10 -right-10",
};

export function SectionCard({
  accent,
  backgroundClass,
  title,
  lead,
  children,
}: {
  accent: AccentPosition;
  backgroundClass: string;
  title: string;
  lead: string;
  children: ReactNode;
}) {
  return (
    <section
      className={[
        "relative overflow-hidden rounded-3xl border-4 border-[var(--color-border)] p-8 shadow-[12px_12px_0_0_var(--color-shadow)] sm:p-10",
        backgroundClass,
      ].join(" ")}
    >
      <AccentStar position={accent} />
      <SectionHeader title={title} lead={lead} />
      {children}
    </section>
  );
}

export function SectionHeader({ title, lead }: { title: string; lead: string }) {
  return (
    <div className="space-y-4">
      <p className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em]">
        <span className="rounded-full border-2 border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1">{title}</span>
        <span className="animate-bounce text-lg">✨</span>
      </p>
      <h2 className="text-3xl font-bold sm:text-4xl">{lead}</h2>
    </div>
  );
}

function AccentStar({ position }: { position: AccentPosition }) {
  return (
    <></>
  );
}
