import React from "react";

type CardProps = {
  variant?: "dark" | "gray" | "ice";
  children: React.ReactNode;
  className?: string;
};

const Card = ({ variant = "dark", className = "", children }: CardProps) => {
  const bgColor = {
    dark: "!bg-dark",
    gray: "!bg-bgColors-gray",
    ice: "!bg-bgColors-ice",
  }[variant];

  const textColor =
    variant === "dark" || variant === "gray" ? "!text-white" : "";

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <div
        className={`flex grow flex-col justify-between rounded-xl p-6 ${bgColor} ${textColor} ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
