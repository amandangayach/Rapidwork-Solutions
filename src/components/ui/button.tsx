import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_4px_12px_rgba(65,105,225,0.25)] hover:bg-primary/90 hover:shadow-[0_6px_16px_rgba(65,105,225,0.35)]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-2 border-primary/20 bg-background/50 backdrop-blur-sm shadow-sm hover:border-primary/40 hover:bg-primary/10",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[0_4px_12px_rgba(255,69,0,0.25)] hover:bg-secondary/90 hover:shadow-[0_6px_16px_rgba(255,69,0,0.35)]",
        ghost: "hover:bg-primary/10 hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-primary via-primary/80 to-secondary text-white shadow-[0_4px_12px_rgba(65,105,225,0.25)] hover:shadow-[0_6px_16px_rgba(65,105,225,0.35)] hover:opacity-90",
        'gradient-secondary': "bg-gradient-to-r from-secondary via-secondary/80 to-primary text-white shadow-[0_4px_12px_rgba(255,69,0,0.25)] hover:shadow-[0_6px_16px_rgba(255,69,0,0.35)] hover:opacity-90",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-11 px-8 text-base",
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
