import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base: editorial — sem rounded pesado, sem gradiente
  "inline-flex items-center justify-center whitespace-nowrap font-sans font-semibold uppercase tracking-[0.12em] text-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rouge disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        // Vermelho sólido — CTA participação
        default:
          "bg-rouge text-white hover:bg-rouge-deep border border-rouge hover:border-rouge-deep",
        // Outline escuro — CTA apoio / secundário
        outline:
          "border border-ink text-ink bg-transparent hover:bg-ink hover:text-editorial",
        // Outline claro — para seções escuras
        "outline-light":
          "border border-editorial text-editorial bg-transparent hover:bg-editorial hover:text-ink",
        // Ghost — navegação interna
        ghost:
          "text-stone hover:text-ink bg-transparent",
        // Link
        link:
          "text-ink underline-offset-4 hover:underline bg-transparent",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-[10px]",
        lg: "px-8 py-4 text-sm",
        icon: "h-9 w-9",
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
    const Comp = asChild ? Slot : "button";
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
