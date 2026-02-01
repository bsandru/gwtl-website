import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        secondary:
          "shadow-lg hover:shadow-xl hover:-translate-y-0.5",
        outline:
          "border-2 hover:-translate-y-0.5",
        ghost: "hover:bg-gray-100",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg rounded-2xl",
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
  ({ className, variant, size, style, ...props }, ref) => {
    // Default styles based on variant
    const defaultStyles: React.CSSProperties = {
      ...(variant === 'default' || !variant ? { backgroundColor: '#00A3A3', color: '#ffffff' } : {}),
      ...(variant === 'secondary' ? { backgroundColor: '#1C2541', color: '#ffffff' } : {}),
      ...(variant === 'outline' ? { borderColor: '#1C2541', color: '#1C2541', backgroundColor: 'transparent' } : {}),
      ...(variant === 'ghost' ? { color: '#1C2541' } : {}),
      ...(variant === 'link' ? { color: '#00A3A3' } : {}),
      ...style,
    };

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        style={defaultStyles}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
