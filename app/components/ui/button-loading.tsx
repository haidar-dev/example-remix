import React from "react";
import type { VariantProps } from "class-variance-authority";

import { buttonVariants } from "~/components";
import { cn } from "~/utils";
import { Loader2 } from "lucide-react";
import { useNavigation } from "@remix-run/react";

// https://reactrouter.com/en/6.14.2/hooks/use-navigation
export interface ButtonLoadingProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isSubmitting?: boolean;
  submittingText?: React.ReactNode;
  isLoading?: boolean;
  loadingText?: React.ReactNode;
  isDisabledWhenLoading?: boolean;
}

const ButtonLoading = React.forwardRef<HTMLButtonElement, ButtonLoadingProps>(
  (
    {
      type = "submit",
      variant = "default",
      size = "default",
      className,
      name,
      value,
      submittingText = "Submitting...",
      loadingText = "Loading...",
      isDisabledWhenLoading = true,
      children,
      ...props
    },
    ref,
  ) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
    const isLoading = navigation.state === "loading";

    const isActive = isDisabledWhenLoading
      ? isSubmitting || isLoading
      : isDisabledWhenLoading;

    return (
      <button
        className={cn(
          buttonVariants({ variant, size, className }),
          "flex gap-2",
        )}
        type={type}
        ref={ref}
        name={name}
        value={value}
        disabled={isActive}
        {...props}
      >
        {isActive && <Loader2 className="h-4 w-4 animate-spin" />}
        {isSubmitting ? submittingText : isLoading ? loadingText : children}
      </button>
    );
  },
);
ButtonLoading.displayName = "ButtonLoading";

export { ButtonLoading };
