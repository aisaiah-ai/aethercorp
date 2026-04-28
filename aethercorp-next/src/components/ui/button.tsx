import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg] disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[--color-brand] text-white shadow-[0_10px_30px_-10px_rgba(124,92,255,0.6)] hover:bg-[#8d72ff] hover:-translate-y-0.5",
        secondary:
          "bg-white text-black hover:bg-white/90 hover:-translate-y-0.5",
        ghost:
          "border border-[--color-border-strong] bg-white/[0.02] text-white hover:bg-white/[0.06]",
        link: "text-white/80 hover:text-white underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-12 px-7 text-[15px]",
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
