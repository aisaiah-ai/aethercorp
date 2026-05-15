import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40",
        className
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  num,
  eyebrow,
  title,
  description,
  align = "left",
  onCream = false,
}: {
  num?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  onCream?: boolean;
}) {
  const mutedColor = onCream
    ? "text-[--color-fg-on-cream-muted]"
    : "text-[--color-fg-muted]";

  return (
    <div
      className={cn(
        "mb-16 flex flex-col gap-6",
        align === "center" ? "items-center text-center" : "items-start"
      )}
    >
      {(num || eyebrow) ? (
        <div className="flex items-center gap-6">
          {num ? (
            <span className={cn("section-num", mutedColor)}>{num}</span>
          ) : null}
          {eyebrow ? (
            <span className={cn("section-num", mutedColor)}>{eyebrow}</span>
          ) : null}
        </div>
      ) : null}
      <h2 className="editorial-display max-w-[18ch] text-balance text-4xl md:text-6xl lg:text-7xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-[52ch] text-pretty text-base md:text-lg",
            mutedColor
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
