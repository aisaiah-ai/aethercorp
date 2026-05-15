import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-none font-mono text-[11px] font-medium uppercase tracking-[0.14em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-oxblood] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-paper] disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[--color-ink] text-[--color-paper] hover:bg-[--color-oxblood]",
        secondary:
          "bg-[--color-oxblood] text-[--color-paper] hover:bg-[--color-oxblood-deep]",
        ghost:
          "border border-[--color-ink] bg-transparent text-[--color-ink] hover:bg-[--color-ink] hover:text-[--color-paper]",
        link:
          "text-[--color-ink] underline decoration-[--color-border-strong] underline-offset-4 hover:decoration-[--color-oxblood] hover:text-[--color-oxblood]",
        cream: "bg-[--color-ink] text-[--color-paper] hover:bg-[--color-oxblood]",
        ghostCream:
          "border border-[--color-ink] bg-transparent text-[--color-ink] hover:bg-[--color-ink] hover:text-[--color-paper]",
        signal:
          "bg-[--color-signal] text-[--color-ink] hover:bg-[--color-signal-deep]",
      },
      size: {
        sm: "h-10 px-5",
        md: "h-12 px-7",
        lg: "h-14 px-8 text-[12px]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    href?: string;
    external?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  href,
  external,
  ...props
}: Props) {
  const cls = cn(button({ variant, size }), className);
  if (href) {
    if (external) {
      return (
        <a
          className={cls}
          href={href}
          target="_blank"
          rel="noreferrer"
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      );
    }
    return (
      <Link
        className={cls}
        href={href}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }
  return <button className={cls} {...props} />;
}
