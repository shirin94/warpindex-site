import React from "react";

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: string;
  children: React.ReactNode;
}

export function PulsatingButton({ children, ...props }: PulsatingButtonProps) {
  return (
    <button
      className="relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500 to-green-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 dark:text-white dark:focus:ring-green-800"
      {...props}
    >
      <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
        {children}
      </span>
    </button>
  );
}

export default PulsatingButton;

PulsatingButton.displayName = "PulsatingButton";
