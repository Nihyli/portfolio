"use client";

import { useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }
    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  });

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <HiOutlineSun aria-hidden className="theme-toggle__icon" />
      ) : (
        <HiOutlineMoon aria-hidden className="theme-toggle__icon" />
      )}
    </button>
  );
}
