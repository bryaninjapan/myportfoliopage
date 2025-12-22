"use client";

import { Button } from "./button";
import { Languages } from "lucide-react";

interface LanguageToggleProps {
  language: "zh" | "en";
  onToggle: () => void;
}

export function LanguageToggle({ language, onToggle }: LanguageToggleProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onToggle}
      className="rounded-full gap-2"
      aria-label="Toggle language"
    >
      <Languages className="w-4 h-4" />
      <span className="text-xs font-mono">
        {language === "zh" ? "中文" : "English"}
      </span>
    </Button>
  );
}

