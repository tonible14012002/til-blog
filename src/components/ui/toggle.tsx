import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-md',
    'text-sm',
    'font-medium',
    'ring-offset-primary-200',
    'transition-colors',
    'hover:bg-primary-100/50',
    'hover:text-primary-800',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-primary-200',
    'focus-visible:ring-offset-2',
    'disabled:pointer-events-none',
    'disabled:opacity-50',
    'data-[state=on]:bg-primary-100',
    'data-[state=on]:ring-2',
    'data-[state=on]:ring-primary-100',
    'data-[state=on]:text-primary-900',
],
{
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-stone-200 bg-transparent hover:bg-stone-100 hover:text-stone-900 dark:border-stone-800 dark:hover:bg-stone-800 dark:hover:text-stone-50",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
