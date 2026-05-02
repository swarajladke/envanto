"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/shared/button";

const KEY = "pixelforge-cookies";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem(KEY);
    if (!value) setVisible(true);
  }, []);

  function respond(value: "accept" | "preferences" | "decline") {
    localStorage.setItem(KEY, value);
    setVisible(false);
  }

  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const isAuthPage = pathname === "/signin" || pathname === "/signup";

  if (!visible || isAuthPage) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-[75] rounded-2xl border border-border bg-surface-elevated p-4 shadow-modal sm:inset-x-auto sm:right-4 sm:max-w-xl">
      <p className="text-sm text-text-secondary">
        We use cookies to improve your experience.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Button size="sm" onClick={() => respond("accept")}>
          Accept
        </Button>
        <Button size="sm" variant="secondary" onClick={() => respond("preferences")}>
          Preferences
        </Button>
        <Button size="sm" variant="ghost" onClick={() => respond("decline")}>
          Decline
        </Button>
      </div>
    </div>
  );
}
