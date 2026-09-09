import * as React from "react"
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
      default: "bg-primary text-white shadow-[0_4px_14px_rgba(124,110,230,0.35)] hover:shadow-[0_6px_20px_rgba(124,110,230,0.45)] hover:bg-[#6b5cd3] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 rounded-none font-semibold",
      destructive: "bg-destructive text-white hover:bg-destructive/90 transition-all duration-300 rounded-none font-semibold",
      outline:
        "border border-gray-200/90 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 rounded-none font-semibold shadow-xs",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-300 rounded-none font-semibold",
      ghost:
        "hover:bg-primary/10 hover:text-primary transition-colors duration-200 rounded-none font-semibold",
      link: "text-primary underline-offset-4 hover:underline font-semibold",
      },
      size: {
        default: "h-9 px-4 py-3 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
