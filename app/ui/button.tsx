import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "link"; // optional, defaults to 'primary'
}

export function Button({
  children,
  variant = "primary",
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex h-10 items-center rounded-lg px-4 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        {
          "bg-primary text-white hover:bg-primary/80": variant === "primary",

          "bg-bgColors-black text-primary border border-primary hover:bg-bgColors-black/80":
            variant === "secondary",

          "bg-transparent text-primary hover:underline": variant === "link",
        },
        className,
      )}
    >
      {children}
    </button>
  );
}
