import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
    distance?: "sm" | "base" | "lg"
  }
>(
  (
    { className, orientation = "horizontal", decorative = true, distance="base", ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-neutral-200",
        {
          "h-px w-full": orientation === "horizontal",
          "w-px h-full": orientation === "vertical",
          "my-2": orientation === "horizontal" && distance === "base",
          "my-3": orientation === "horizontal" && distance === "lg",
          "my-1": orientation === "horizontal" && distance === "sm",
          "mx-2": orientation !== "horizontal" && distance === "base",
          "mx-3": orientation !== "horizontal" && distance === "lg",
          "mx-1": orientation !== "horizontal" && distance === "sm",
        },
        className
      )}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
