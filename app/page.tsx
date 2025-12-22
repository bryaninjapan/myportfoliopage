"use client";

import { useState, useEffect } from "react";
import { StoneTablet } from "@/components/ui/StoneTablet";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { projects } from "@/lib/projects";
import { translations, type Language } from "@/lib/translations";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [language, setLanguage] = useState<Language>("en");
  const [category, setCategory] = useState<string>("all");

  // Load theme and language from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const savedLanguage = localStorage.getItem("language") as Language | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Default to dark theme
      document.documentElement.classList.add("dark");
    }
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Apply theme class to document
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Save language preference
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "zh" ? "en" : "zh"));
  };

  const t = translations[language];

  // Filter projects by category
  const filteredProjects =
    category === "all"
      ? projects
      : projects.filter((p) => p.category === category);

  // Ensure even distribution for small number of projects
  const projectCount = filteredProjects.length;

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-[#0a0a0a] text-[#f4f4f4]"
          : "bg-[#f4f4f4] text-[#1a1a1a]"
      }`}
      style={{ fontFamily: "var(--font-medieval), var(--font-cinzel), serif" }}
    >
      {/* Header with controls */}
      <header className="sticky top-0 z-50 border-b backdrop-blur-sm bg-opacity-90"
        style={{
          borderColor: theme === "dark" ? "#333" : "#ddd",
          backgroundColor: theme === "dark" ? "rgba(10, 10, 10, 0.9)" : "rgba(244, 244, 244, 0.9)"
        }}
      >
        <div className="max-w-1400px mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-widest letter-spacing-0.2em" style={{ fontFamily: "var(--font-cinzel), serif" }}>
            {t.siteTitle}
          </h1>
          
          <div className="flex gap-3 items-center">
            <LanguageToggle language={language} onToggle={handleLanguageToggle} />
            <ThemeToggle theme={theme} onToggle={handleThemeToggle} language={language} />
          </div>
        </div>

        {/* Category filter */}
        <div className="max-w-1400px mx-auto px-6 pb-4 flex justify-center gap-2">
          <button
            onClick={() => setCategory("all")}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              category === "all"
                ? theme === "dark"
                  ? "bg-[#f4f4f4] text-[#0a0a0a]"
                  : "bg-[#0a0a0a] text-[#f4f4f4]"
                : theme === "dark"
                ? "border border-[#444] text-[#888] hover:text-[#f4f4f4]"
                : "border border-[#888] text-[#666] hover:text-[#1a1a1a]"
            }`}
            style={{ fontFamily: "var(--font-medieval), serif" }}
          >
            {t.categories.all}
          </button>
          <button
            onClick={() => setCategory("tools")}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              category === "tools"
                ? theme === "dark"
                  ? "bg-[#f4f4f4] text-[#0a0a0a]"
                  : "bg-[#0a0a0a] text-[#f4f4f4]"
                : theme === "dark"
                ? "border border-[#444] text-[#888] hover:text-[#f4f4f4]"
                : "border border-[#888] text-[#666] hover:text-[#1a1a1a]"
            }`}
            style={{ fontFamily: "var(--font-medieval), serif" }}
          >
            {t.categories.tools}
          </button>
          <button
            onClick={() => setCategory("archive")}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              category === "archive"
                ? theme === "dark"
                  ? "bg-[#f4f4f4] text-[#0a0a0a]"
                  : "bg-[#0a0a0a] text-[#f4f4f4]"
                : theme === "dark"
                ? "border border-[#444] text-[#888] hover:text-[#f4f4f4]"
                : "border border-[#888] text-[#666] hover:text-[#1a1a1a]"
            }`}
            style={{ fontFamily: "var(--font-medieval), serif" }}
          >
            {t.categories.archive}
          </button>
        </div>
      </header>

      {/* Main content - Stone Tablet Gallery */}
      <main className="container mx-auto px-6 py-12 min-h-[60vh]">
        <div
          className={`stone-tablet-gallery ${
            projectCount === 1
              ? "centered-1"
              : projectCount === 2
              ? "centered-2"
              : projectCount === 3
              ? "centered-3"
              : projectCount === 4
              ? "centered-4"
              : "auto-fit"
          }`}
          style={{
            // Adjust max-width for better spacing with few projects
            maxWidth: projectCount <= 4 ? "1200px" : "1600px",
            // Add more vertical padding for few projects
            paddingTop: projectCount <= 4 ? "4rem" : "2rem",
            paddingBottom: projectCount <= 4 ? "4rem" : "2rem"
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              style={{
                opacity: 1,
                transition: "opacity 0.3s ease"
              }}
            >
              <StoneTablet
                project={project}
                language={language}
                theme={theme}
              />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-lg opacity-60" style={{ fontFamily: "var(--font-medieval), serif" }}>
              {language === "zh" ? "暂无项目" : "No projects found"}
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer
        className="py-8 text-center text-sm opacity-60 border-t"
        style={{
          fontFamily: "var(--font-medieval), serif",
          borderColor: theme === "dark" ? "#333" : "#ddd"
        }}
      >
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
