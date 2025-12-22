"use client";

import { useState } from "react";
import type { Project } from "@/lib/projects";
import type { Language } from "@/lib/translations";

interface StoneTabletProps {
  project: Project;
  language: Language;
  theme: "light" | "dark";
}

export function StoneTablet({ project, language, theme }: StoneTabletProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(project.link, "_blank", "noopener,noreferrer");
  };

  // Stone colors
  const stoneColor = theme === "dark" 
    ? "linear-gradient(135deg, #5a5a5a 0%, #3a3a3a 50%, #2a2a2a 100%)"
    : "linear-gradient(135deg, #c9c9c9 0%, #a8a8a8 50%, #8a8a8a 100%)";
  
  const stoneBorder = theme === "dark" ? "#555" : "#999";
  const textColor = theme === "dark" ? "#e0e0e0" : "#1a1a1a";
  const engravedColor = theme === "dark" ? "rgba(200, 200, 200, 0.3)" : "rgba(0, 0, 0, 0.4)";
  const shadowColor = theme === "dark" 
    ? "0 8px 32px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(0, 0, 0, 0.4)" 
    : "0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2)";

  return (
    <div
      className="stone-tablet-wrapper"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: "pointer",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
        transform: isHovered ? "translateY(-12px)" : "translateY(0)",
        boxShadow: isHovered ? shadowColor : "0 4px 16px rgba(0, 0, 0, 0.3)"
      }}
    >
      <div
        className="stone-tablet"
        style={{
          position: "relative",
          width: "280px",
          height: "360px",
          margin: "0 auto",
          background: stoneColor,
          border: `3px solid ${stoneBorder}`,
          borderRadius: "8px",
          padding: "2rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          boxShadow: shadowColor,
          // Stone texture effect
          backgroundImage: `
            ${stoneColor},
            repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.1) 0px,
              transparent 1px,
              transparent 2px,
              rgba(255, 255, 255, 0.05) 3px
            )
          `,
          overflow: "hidden"
        }}
      >
        {/* Stone texture overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(0, 0, 0, 0.1) 0%, transparent 50%)
            `,
            pointerEvents: "none"
          }}
        />

        {/* Carved title */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            paddingBottom: "1rem",
            borderBottom: `2px solid ${engravedColor}`,
            position: "relative",
            zIndex: 1
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: textColor,
              fontFamily: "var(--font-cinzel), serif",
              letterSpacing: "0.1em",
              textShadow: `
                2px 2px 0px ${theme === "dark" ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)"},
                1px 1px 0px ${engravedColor}
              `,
              margin: 0
            }}
          >
            {project.name[language]}
          </h3>
        </div>

        {/* Carved year */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            position: "relative",
            zIndex: 1
          }}
        >
          <span
            style={{
              fontSize: "0.9rem",
              color: engravedColor,
              fontFamily: "var(--font-medieval), serif",
              letterSpacing: "0.2em",
              fontWeight: "400"
            }}
          >
            {project.year || new Date().getFullYear()}
          </span>
        </div>

        {/* Carved description */}
        {project.description && (
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
              padding: "1rem 0"
            }}
          >
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: "1.6",
                color: textColor,
                fontFamily: "var(--font-medieval), serif",
                letterSpacing: "0.05em",
                textShadow: `
                  1px 1px 0px ${theme === "dark" ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.4)"},
                  0.5px 0.5px 0px ${engravedColor}
                `,
                margin: 0,
                opacity: 0.9
              }}
            >
              {project.description[language]}
            </p>
          </div>
        )}

        {/* Decorative border */}
        <div
          style={{
            position: "absolute",
            top: "8px",
            left: "8px",
            right: "8px",
            bottom: "8px",
            border: `1px solid ${engravedColor}`,
            borderRadius: "4px",
            pointerEvents: "none",
            opacity: 0.3
          }}
        />
      </div>
    </div>
  );
}

