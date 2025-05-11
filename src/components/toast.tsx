"use client";

import { useEffect } from "react";
import { AlertCircle, CheckCircle, X, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToastProps {
  type: "success" | "error" | "warning";
  message: string;
  onClose: () => void;
}

export function Toast({ type, message, onClose }: ToastProps) {
  // Close toast when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [onClose]);

  // Define styles based on toast type
  const styles = {
    success: {
      bg: "bg-emerald-500",
      border: "border-emerald-600",
      text: "text-white",
      icon: <CheckCircle className="h-5 w-5 text-white" />,
      shadow: "shadow-emerald-500/20",
    },
    error: {
      bg: "bg-rose-500",
      border: "border-rose-600",
      text: "text-white",
      icon: <AlertCircle className="h-5 w-5 text-white" />,
      shadow: "shadow-rose-500/20",
    },
    warning: {
      bg: "bg-amber-500",
      border: "border-amber-600",
      text: "text-white",
      icon: <AlertTriangle className="h-5 w-5 text-white" />,
      shadow: "shadow-amber-500/20",
    },
  };

  const currentStyle = styles[type];

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-3 duration-300">
      <div
        className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg",
          currentStyle.bg,
          currentStyle.border,
          currentStyle.text,
          currentStyle.shadow
        )}
      >
        <div className="shrink-0">{currentStyle.icon}</div>
        <p className="text-sm font-medium">{message}</p>
        <button
          onClick={onClose}
          className="ml-auto p-1 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Close toast"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
