import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border border-[--color-border-strong] bg-transparent px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[--color-fg]/80",
        className
      )}
    >
      <span className="size-1 rounded-full bg-[--color-accent]" />
      {children}
    </span>
  );
}
