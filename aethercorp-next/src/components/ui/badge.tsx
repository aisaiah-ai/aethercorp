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
        "label inline-flex items-center gap-2 border border-[--color-ink] bg-transparent px-3 py-1.5 text-[--color-ink]",
        className
      )}
    >
      <span className="size-1 rounded-full bg-[--color-oxblood]" />
      {children}
    </span>
  );
}
