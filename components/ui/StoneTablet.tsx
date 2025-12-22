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

  // Rough stone colors - darker grey for authentic stone look
  const stoneColor = theme === "dark" 
    ? "linear-gradient(145deg, #3a3a3a 0%, #2d2d2d 25%, #252525 50%, #1f1f1f 75%, #1a1a1a 100%)"
    : "linear-gradient(145deg, #9a9a9a 0%, #8a8a8a 25%, #7a7a7a 50%, #6a6a6a 75%, #5a5a5a 100%)";
  
  const stoneBorder = theme === "dark" ? "#2a2a2a" : "#555";
  const textColor = theme === "dark" ? "#2a2a2a" : "#1a1a1a"; // Dark engraved text
  const engravedColor = theme === "dark" ? "#1a1a1a" : "#0a0a0a"; // Deep carved look
  
  // Enhanced 3D shadow for irregular stone
  const shadowColor = theme === "dark" 
    ? "0 15px 50px rgba(0, 0, 0, 0.9), 0 8px 25px rgba(0, 0, 0, 0.7), inset 0 2px 4px rgba(255, 255, 255, 0.05)" 
    : "0 15px 50px rgba(0, 0, 0, 0.5), 0 8px 25px rgba(0, 0, 0, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.2)";
  
  // Blue/cyan glow effect (like the runestone image)
  const hoverShadowColor = theme === "dark"
    ? "0 25px 70px rgba(0, 0, 0, 0.95), 0 12px 35px rgba(0, 0, 0, 0.8), 0 0 40px rgba(64, 224, 255, 0.5), 0 0 60px rgba(64, 224, 255, 0.3)"
    : "0 25px 70px rgba(0, 0, 0, 0.6), 0 12px 35px rgba(0, 0, 0, 0.5), 0 0 40px rgba(64, 224, 255, 0.6), 0 0 60px rgba(64, 224, 255, 0.4)";

  // Blue/cyan glowing text effect when hovered (like the runestone)
  const textGlow = isHovered 
    ? theme === "dark"
      ? "0 0 8px rgba(100, 240, 255, 1), 0 0 16px rgba(64, 224, 255, 0.9), 0 0 24px rgba(64, 224, 255, 0.7), 0 0 32px rgba(0, 191, 255, 0.5)"
      : "0 0 8px rgba(64, 224, 255, 1), 0 0 16px rgba(64, 224, 255, 0.9), 0 0 24px rgba(0, 191, 255, 0.8), 0 0 32px rgba(0, 191, 255, 0.6)"
    : "none";

  // Irregular polygon clip-path for rough stone shape
  const irregularShape = "polygon(0% 5%, 8% 0%, 25% 3%, 45% 0%, 62% 4%, 78% 1%, 92% 5%, 100% 10%, 98% 25%, 100% 40%, 97% 55%, 100% 70%, 98% 85%, 100% 95%, 92% 100%, 75% 98%, 58% 100%, 42% 97%, 25% 100%, 8% 98%, 0% 95%, 2% 80%, 0% 65%, 3% 50%, 0% 35%, 2% 20%)";

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
          border: `5px solid ${stoneBorder}`,
          borderRadius: "4px",
          padding: "2rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          boxShadow: shadowColor,
          // Irregular rough stone shape
          clipPath: irregularShape,
          WebkitClipPath: irregularShape,
          // Enhanced stone texture effect - rough, weathered
          backgroundImage: `
            ${stoneColor},
            repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.2) 0px,
              transparent 1px,
              transparent 2px,
              rgba(255, 255, 255, 0.03) 3px,
              transparent 4px,
              rgba(0, 0, 0, 0.15) 5px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.15) 0px,
              transparent 2px,
              transparent 3px,
              rgba(255, 255, 255, 0.02) 4px,
              transparent 5px,
              rgba(0, 0, 0, 0.1) 6px
            ),
            radial-gradient(ellipse at 30% 20%, rgba(0, 0, 0, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(0, 0, 0, 0.25) 0%, transparent 50%)
          `,
          overflow: "hidden",
          // 3D perspective
          transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
          transition: "transform 0.5s ease, filter 0.5s ease, clip-path 0.5s ease",
          filter: isHovered ? "brightness(1.15) contrast(1.1)" : "brightness(1) contrast(1)"
        }}
      >
        {/* Enhanced stone texture overlay with depth and roughness */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(ellipse at 20% 25%, rgba(0, 0, 0, 0.2) 0%, transparent 40%),
              radial-gradient(ellipse at 80% 75%, rgba(0, 0, 0, 0.25) 0%, transparent 50%),
              linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, transparent 30%, rgba(0, 0, 0, 0.1) 70%, transparent 100%),
              linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.02) 50%, transparent 100%)
            `,
            pointerEvents: "none",
            zIndex: 1
          }}
        />

        {/* Rough stone edge highlight */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            height: "30%",
            background: theme === "dark" 
              ? "linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 0%, transparent 100%)"
              : "linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 2
          }}
        />

        {/* Carved title with modern font and blue glow */}
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
              fontWeight: "700",
              fontFamily: "var(--font-cinzel), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              letterSpacing: "0.05em",
              textShadow: `
                2px 2px 0px ${theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.3)"},
                1px 1px 2px ${engravedColor},
                ${textGlow}
              `,
              margin: 0,
              transition: "text-shadow 0.5s ease, transform 0.5s ease, color 0.5s ease",
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              color: isHovered ? (theme === "dark" ? "#6ef" : "#08f") : textColor
            }}
          >
            {project.name[language]}
          </h3>
        </div>

        {/* Carved year with blue glow */}
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
              color: isHovered ? (theme === "dark" ? "#6ef" : "#08f") : engravedColor,
              fontFamily: "var(--font-cinzel), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              letterSpacing: "0.2em",
              fontWeight: "600",
              textShadow: `
                1px 1px 1px ${theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)"},
                ${textGlow}
              `,
              transition: "color 0.5s ease, text-shadow 0.5s ease"
            }}
          >
            {project.year || 2025}
          </span>
        </div>

        {/* Carved description with modern font and blue glow */}
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
                fontSize: "0.95rem",
                lineHeight: "1.7",
                color: isHovered ? (theme === "dark" ? "#8ff" : "#06f") : textColor,
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.03em",
                textShadow: `
                  1px 1px 1px ${theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.2)"},
                  0.5px 0.5px 1px ${engravedColor},
                  ${textGlow}
                `,
                margin: 0,
                opacity: isHovered ? 1 : 0.9,
                transition: "opacity 0.5s ease, color 0.5s ease, text-shadow 0.5s ease, transform 0.5s ease",
                transform: isHovered ? "scale(1.03)" : "scale(1)",
                fontWeight: "400"
              }}
            >
              {project.description[language]}
            </p>
          </div>
        )}

        {/* Blue/cyan inner glow when hovered */}
        {isHovered && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: theme === "dark"
                ? "radial-gradient(ellipse at center, rgba(64, 224, 255, 0.2) 0%, rgba(0, 191, 255, 0.1) 40%, transparent 70%)"
                : "radial-gradient(ellipse at center, rgba(64, 224, 255, 0.25) 0%, rgba(0, 191, 255, 0.15) 40%, transparent 70%)",
              pointerEvents: "none",
              borderRadius: "4px",
              zIndex: 2,
              animation: "cyanPulse 2s ease-in-out infinite"
            }}
          />
        )}

        {/* Carved line details for depth */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "10%",
            right: "10%",
            height: "1px",
            background: `linear-gradient(to right, transparent, ${engravedColor}, transparent)`,
            opacity: 0.3,
            pointerEvents: "none",
            zIndex: 2
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: "10%",
            right: "10%",
            height: "1px",
            background: `linear-gradient(to right, transparent, ${engravedColor}, transparent)`,
            opacity: 0.3,
            pointerEvents: "none",
            zIndex: 2
          }}
        />
      </div>

      <style jsx>{`
        @keyframes cyanPulse {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
