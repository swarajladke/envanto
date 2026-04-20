"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function setTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("pixelforge-theme", theme);
}

export function ThemeToggle() {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const saved = localStorage.getItem("pixelforge-theme") as Theme | null;
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      setThemeState(saved);
      return;
    }
    setTheme("light");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setThemeState(next);
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="focus-ring h-11 w-11 rounded-full border border-border bg-surface text-text-primary transition hover:border-border-hover"
    >
      {theme === "dark" ? <Sun className="mx-auto size-5" /> : <Moon className="mx-auto size-5" />}
    </button>
  );
}
