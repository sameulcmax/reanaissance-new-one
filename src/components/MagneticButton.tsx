import * as React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants, type ButtonProps } from "@/components/ui/button";

export interface MagneticButtonProps extends ButtonProps {}

export const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ className, size, variant, asChild, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        buttonVariants({ variant: variant ?? "outline", size: size ?? "lg", className })
      )}
      {...props}
    />
  )
);

MagneticButton.displayName = "MagneticButton";
