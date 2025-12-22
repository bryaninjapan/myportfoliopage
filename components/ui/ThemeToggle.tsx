"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "./button";

interface ThemeToggleProps {
  theme: "light" | "dark";
  onToggle: () => void;
  language: "zh" | "en";
}

export function ThemeToggle({ theme, onToggle, language }: ThemeToggleProps) {
  const translations = {
    zh: {
      light: "浅色",
      dark: "深色"
    },
    en: {
      light: "Light",
      dark: "Dark"
    }
  };

  const t = translations[language];

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onToggle}
      className="rounded-full gap-2"
      aria-label={theme === "dark" ? t.light : t.dark}
    >
      {theme === "dark" ? (
        <>
          <Sun className="w-4 h-4" />
          <span className="text-xs font-mono">{t.light}</span>
        </>
      ) : (
        <>
          <Moon className="w-4 h-4" />
          <span className="text-xs font-mono">{t.dark}</span>
        </>
      )}
    </Button>
  );
}

