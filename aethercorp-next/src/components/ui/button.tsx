import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-[13px] font-medium uppercase tracking-[0.12em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg] disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[--color-fg] text-[--color-bg] hover:bg-[--color-accent] hover:text-[--color-bg]",
        secondary:
          "bg-[--color-accent] text-[--color-bg] hover:bg-[--color-accent-deep] hover:text-[--color-bg]",
        ghost:
          "border border-[--color-border-strong] bg-transparent text-[--color-fg] hover:border-[--color-fg] hover:bg-[--color-fg]/[0.04]",
        link: "text-[--color-fg] underline underline-offset-4 decoration-[--color-border-strong] hover:decoration-[--color-fg]",
        cream:
          "bg-[--color-fg-on-cream] text-[--color-cream] hover:bg-[--color-accent-deep] hover:text-[--color-bg]",
        ghostCream:
          "border border-[--color-border-on-cream-strong] bg-transparent text-[--color-fg-on-cream] hover:border-[--color-fg-on-cream] hover:bg-[--color-fg-on-cream]/[0.04]",
      },
      size: {
        sm: "h-10 px-5",
        md: "h-12 px-7",
        lg: "h-14 px-8 text-[13px]",
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
