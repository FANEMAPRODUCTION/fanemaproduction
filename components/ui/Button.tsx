"use client";

import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export default function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500",
        variant === "primary" &&
          "bg-indigo-500 text-white hover:bg-indigo-400",
        variant === "ghost" &&
          "bg-white/5 text-slate-100 hover:bg-white/10",
        className
      )}
      {...props}
    />
  );
}
