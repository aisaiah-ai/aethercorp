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
        "inline-flex items-center gap-2 rounded-full border border-[--color-border-strong] bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/80 backdrop-blur",
        className
      )}
    >
      <span className="size-1.5 rounded-full bg-[--color-brand] shadow-[0_0_10px_2px_rgba(124,92,255,0.7)]" />
      {children}
    </span>
  );
}
