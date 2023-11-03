import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
  "inline-flex",
  "items-center",
  "justify-center",
  "whitespace-nowrap",
  "rounded-md",
  "text-sm",
  "font-medium",
  "transition-colors",
  "disabled:pointer-events-none",
  "disabled:opacity-50",
  "active:scale-[98%] transition",
  "focus:outline-none",
  "focus:ring-2",
  "focus:ring-offset-2",
  "focus-visible:outline-none",
  "focus-visible:ring-2",
  "focus-visible:ring-offset-2",
  "focus:ring-primary-200",
  "ring-offset-primary-200",
  "focus-visible:ring-primary-200",
], {
    variants: {
      
      variant: {
        default: "bg-primary-700 text-white hover:bg-primary-700/90",
        destructive:
          "bg-red-500 text-white hover:bg-red-500/90",
        outline:
          "border border-primary-700 bg-white text-primary-700 hover:border-primary-700 hover:border-primary-500",
        secondary: [
          "focus:ring-secondary-200",
          "ring-offset-secondary-200",
          "focus-visible:ring-secondary-200",
          "bg-secondary-700 text-white hover:bg-secondary-700/80",
        ],
        ghost: "hover:bg-stone-100 hover:text-primary-700",
        link: "underline-offset-4 hover:underline decoration-primary-700",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
