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

  // Enhanced stone colors with more depth
  const stoneColor = theme === "dark" 
    ? "linear-gradient(145deg, #4a4a4a 0%, #3a3a3a 30%, #2a2a2a 60%, #1a1a1a 100%)"
    : "linear-gradient(145deg, #d0d0d0 0%, #b8b8b8 30%, #a0a0a0 60%, #888888 100%)";
  
  const stoneBorder = theme === "dark" ? "#666" : "#aaa";
  const textColor = theme === "dark" ? "#e8e8e8" : "#0a0a0a";
  const engravedColor = theme === "dark" ? "rgba(150, 150, 150, 0.4)" : "rgba(0, 0, 0, 0.5)";
  
  // Enhanced 3D shadow
  const shadowColor = theme === "dark" 
    ? "0 12px 40px rgba(0, 0, 0, 0.8), 0 6px 20px rgba(0, 0, 0, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.1)" 
    : "0 12px 40px rgba(0, 0, 0, 0.4), 0 6px 20px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.3)";
  
  const hoverShadowColor = theme === "dark"
    ? "0 20px 60px rgba(0, 0, 0, 0.9), 0 10px 30px rgba(0, 0, 0, 0.7), 0 0 30px rgba(200, 150, 100, 0.3)"
    : "0 20px 60px rgba(0, 0, 0, 0.5), 0 10px 30px rgba(0, 0, 0, 0.4), 0 0 30px rgba(200, 150, 100, 0.4)";

  // Glowing text effect when hovered
  const textGlow = isHovered 
    ? theme === "dark"
      ? "0 0 10px rgba(255, 220, 150, 0.8), 0 0 20px rgba(255, 200, 100, 0.6), 0 0 30px rgba(255, 180, 80, 0.4)"
      : "0 0 10px rgba(200, 150, 80, 0.9), 0 0 20px rgba(180, 120, 60, 0.7), 0 0 30px rgba(160, 100, 40, 0.5)"
    : "none";

  return (
    <div
      className="stone-tablet-wrapper"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: "pointer",
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s ease",
        transform: isHovered ? "translateY(-16px) perspective(1000px) rotateX(5deg)" : "translateY(0) perspective(1000px) rotateX(0deg)",
        transformStyle: "preserve-3d",
        boxShadow: isHovered ? hoverShadowColor : shadowColor
      }}
    >
      <div
        className="stone-tablet"
        style={{
          position: "relative",
          width: "300px",
          height: "380px",
          margin: "0 auto",
          background: stoneColor,
          border: `4px solid ${stoneBorder}`,
          borderRadius: "12px",
          padding: "2rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          boxShadow: shadowColor,
          // Enhanced stone texture effect
          backgroundImage: `
            ${stoneColor},
            repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.15) 0px,
              transparent 1px,
              transparent 3px,
              rgba(255, 255, 255, 0.08) 4px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.1) 0px,
              transparent 2px,
              transparent 4px,
              rgba(255, 255, 255, 0.05) 5px
            )
          `,
          overflow: "hidden",
          // 3D perspective
          transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
          transition: "transform 0.5s ease, filter 0.5s ease",
          filter: isHovered ? "brightness(1.1)" : "brightness(1)"
        }}
      >
        {/* Enhanced stone texture overlay with depth */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(ellipse at 25% 25%, rgba(255, 255, 255, 0.08) 0%, transparent 60%),
              radial-gradient(ellipse at 75% 75%, rgba(0, 0, 0, 0.15) 0%, transparent 60%),
              linear-gradient(135deg, transparent 0%, rgba(0, 0, 0, 0.05) 50%, transparent 100%)
            `,
            pointerEvents: "none",
            zIndex: 1
          }}
        />

        {/* 3D border inset effect */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            right: "12px",
            bottom: "12px",
            border: `2px solid ${engravedColor}`,
            borderRadius: "6px",
            pointerEvents: "none",
            opacity: 0.4,
            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.3), inset 0 -2px 4px rgba(255, 255, 255, 0.1)",
            zIndex: 2
          }}
        />

        {/* Carved title with rune-style font and glow */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            paddingBottom: "1rem",
            borderBottom: `3px solid ${engravedColor}`,
            position: "relative",
            zIndex: 3
          }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              fontWeight: "600",
              color: textColor,
              fontFamily: "var(--font-rune), var(--font-cinzel), serif",
              letterSpacing: "0.15em",
              textShadow: `
                3px 3px 0px ${theme === "dark" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.6)"},
                2px 2px 0px ${engravedColor},
                ${textGlow}
              `,
              margin: 0,
              transition: "text-shadow 0.5s ease, transform 0.5s ease",
              transform: isHovered ? "scale(1.05)" : "scale(1)"
            }}
          >
            {project.name[language]}
          </h3>
        </div>

        {/* Carved year with glow */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            position: "relative",
            zIndex: 3
          }}
        >
          <span
            style={{
              fontSize: "1rem",
              color: isHovered ? (theme === "dark" ? "#ffd4a0" : "#d4a060") : engravedColor,
              fontFamily: "var(--font-rune), var(--font-medieval), serif",
              letterSpacing: "0.3em",
              fontWeight: "400",
              textShadow: `
                2px 2px 0px ${theme === "dark" ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)"},
                ${textGlow}
              `,
              transition: "color 0.5s ease, text-shadow 0.5s ease"
            }}
          >
            {project.year || 2025}
          </span>
        </div>

        {/* Carved description with rune-style and glow */}
        {project.description && (
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              position: "relative",
              zIndex: 3,
              padding: "1rem 0"
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.7",
                color: isHovered ? (theme === "dark" ? "#f0e0c0" : "#2a1a0a") : textColor,
                fontFamily: "var(--font-rune), var(--font-medieval), serif",
                letterSpacing: "0.1em",
                textShadow: `
                  2px 2px 0px ${theme === "dark" ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)"},
                  1px 1px 0px ${engravedColor},
                  ${textGlow}
                `,
                margin: 0,
                opacity: isHovered ? 1 : 0.85,
                transition: "opacity 0.5s ease, color 0.5s ease, text-shadow 0.5s ease, transform 0.5s ease",
                transform: isHovered ? "scale(1.03)" : "scale(1)"
              }}
            >
              {project.description[language]}
            </p>
          </div>
        )}

        {/* Enhanced inner glow when hovered */}
        {isHovered && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: theme === "dark"
                ? "radial-gradient(ellipse at center, rgba(255, 200, 100, 0.15) 0%, transparent 70%)"
                : "radial-gradient(ellipse at center, rgba(255, 220, 150, 0.2) 0%, transparent 70%)",
              pointerEvents: "none",
              borderRadius: "8px",
              zIndex: 2,
              animation: "pulse 2s ease-in-out infinite"
            }}
          />
        )}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
}
