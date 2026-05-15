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
        "relative mx-auto w-full max-w-[1600px] px-6 py-24 md:px-12 md:py-32 lg:px-16 lg:py-40",
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
}: {
  num?: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  onCream?: boolean;
}) {
  return (
    <div
      className={cn(
        "mb-16 flex flex-col gap-6",
        align === "center" ? "items-center text-center" : "items-start"
      )}
    >
      {(num || eyebrow) ? (
        <div className="flex items-center gap-6">
          {num ? <span className="label">{num}</span> : null}
          {eyebrow ? <span className="label">{eyebrow}</span> : null}
        </div>
      ) : null}
      <h2 className="display max-w-[18ch] text-balance text-5xl md:text-7xl lg:text-8xl">
        {title}
      </h2>
      {description ? (
        <p className="serif-body max-w-[55ch] text-pretty text-lg md:text-xl text-[--color-ink-soft]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
