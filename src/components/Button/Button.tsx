import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../utils/lib";
import { ButtonOpacity } from "../../utils/tags";

// const buttonVariants = cva(
//   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
//   {
//     variants: {
//       variant: {
//         default:
//           "bg-primary text-primary-foreground shadow hover:bg-primary/90",
//         destructive:
//           "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
//         outline:
//           "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
//         secondary:
//           "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-9 px-4 py-2",
//         sm: "h-8 rounded-md px-3 text-xs",
//         lg: "h-10 rounded-md px-8",
//         icon: "h-9 w-9",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// );

const buttonVariants = cva(
  "group flex items-center justify-center rounded-md web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground web:hover:opacity-90  active:opacity-90",
        destructive:
          "bg-destructive text-destructive-foreground web:hover:opacity-90 active:opacity-90",
        outline:
          "border border-input bg-background web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent",
        secondary: "bg-secondary web:hover:opacity-80 active:opacity-80",
        ghost:
          "web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent",
        link: "web:underline-offset-4 web:hover:underline web:focus:underline",
      },
      size: {
        default: "h-10 px-4 py-2 native:h-12 native:px-5 native:py-3",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8 native:h-14",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : ButtonOpacity;
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
