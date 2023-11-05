import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const tagVariants = cva(
  "uppercase font-extrabold tracking-tight focus:outline-none hover:underline",
  {
    variants: {
      variant: {
        default:
          "text-primary-700",
        secondary:
          "text-secondary-700",
        warning:
          "text-warning-700",
        danger: 
          "text-danger-700",
        success:
          "text-success-700",
        black:
          "text-black",
        destructive:
          "text-neutral-600",
      },
      size: {
        xs: "text-xs",
        ms: "text-sm",
        nm: "text-base",
        md: "text-md",
        lg: "text-lg",
        xl: "text-xl"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "xs"
    },
  }
)

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {}

function Tag({ children, className, variant, size, ...props }: TagProps) {
  return (
    <div className={cn(tagVariants({ variant, size }), className)} {...props}>
        #{children}
    </div>
  )
}

export { Tag, tagVariants }
