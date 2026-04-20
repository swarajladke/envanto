"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CircleAlert, CircleCheck, Info, X } from "lucide-react";
import { useToastStore } from "@/store/toast-store";
import { cn } from "@/lib/utils";

export function ToastRegion() {
  const { toasts, dismiss } = useToastStore();

  return (
    <div className="fixed bottom-5 right-5 z-[85] flex w-full max-w-sm flex-col gap-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            className={cn(
              "flex items-center gap-3 rounded-xl border px-4 py-3 shadow-card",
              toast.tone === "success" && "border-success/40 bg-success/10",
              toast.tone === "danger" && "border-danger/40 bg-danger/10",
              toast.tone === "neutral" && "border-border bg-surface-elevated"
            )}
          >
            {toast.tone === "success" ? (
              <CircleCheck className="size-5 text-success" />
            ) : toast.tone === "danger" ? (
              <CircleAlert className="size-5 text-danger" />
            ) : (
              <Info className="size-5 text-info" />
            )}
            <p className="flex-1 text-sm text-text-primary">{toast.message}</p>
            <button
              type="button"
              aria-label="Dismiss notification"
              onClick={() => dismiss(toast.id)}
              className="focus-ring inline-flex h-8 w-8 items-center justify-center rounded-md text-text-secondary transition hover:text-text-primary"
            >
              <X className="size-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
