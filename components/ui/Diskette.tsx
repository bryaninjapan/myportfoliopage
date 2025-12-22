"use client";

import { useState } from "react";
import type { Project } from "@/lib/projects";
import type { Language } from "@/lib/translations";

interface DisketteProps {
  project: Project;
  language: Language;
  theme: "light" | "dark";
}

export function Diskette({ project, language, theme }: DisketteProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(project.link, "_blank", "noopener,noreferrer");
  };

  const bgColor = theme === "dark" 
    ? "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)"
    : "linear-gradient(135deg, #e0e0e0 0%, #d0d0d0 100%)";
  
  const borderColor = theme === "dark" ? "#444" : "#888";
  const textColor = theme === "dark" ? "#f4f4f4" : "#1a1a1a";
  const labelBg = theme === "dark" ? "#0a0a0a" : "#f0f0f0";
  const metalGradient = theme === "dark"
    ? "linear-gradient(to bottom, #4a4a4a 0%, #2a2a2a 100%)"
    : "linear-gradient(to bottom, #c0c0c0 0%, #a0a0a0 100%)";
  const readWindow = theme === "dark" ? "#0a0a0a" : "#1a1a1a";

  return (
    <div
      className="diskette-wrapper"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: "pointer",
        transition: "transform 0.3s ease",
        transform: isHovered ? "translateY(-10px) rotate(5deg)" : "translateY(0) rotate(0)"
      }}
    >
      <div
        className="diskette"
        style={{
          position: "relative",
          width: "200px",
          height: "200px",
          margin: "0 auto"
        }}
      >
        {/* 软盘主体 */}
        <div
          className="diskette-label"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: bgColor,
            border: `3px solid ${borderColor}`,
            borderRadius: "2px",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            boxShadow: theme === "dark"
              ? "0 4px 20px rgba(0, 0, 0, 0.5)"
              : "0 4px 20px rgba(0, 0, 0, 0.2)"
          }}
        >
          {/* 标签顶部 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "0.5rem"
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: "bold",
                letterSpacing: "0.05em",
                color: textColor,
                fontFamily: "monospace"
              }}
            >
              {project.name[language]}
            </span>
            <span
              style={{
                fontSize: "0.6rem",
                background: labelBg,
                padding: "0.2rem 0.4rem",
                borderRadius: "2px",
                color: textColor,
                fontFamily: "monospace"
              }}
            >
              3.5"
            </span>
          </div>

          {/* 标签主体（模拟文字行） */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              padding: "0.5rem 0"
            }}
          >
            <div style={{ width: "100%" }}>
              <div
                style={{
                  height: "2px",
                  background: theme === "dark" ? "rgba(244, 244, 244, 0.3)" : "rgba(26, 26, 26, 0.3)",
                  marginBottom: "0.3rem",
                  borderRadius: "1px",
                  width: "80%"
                }}
              />
              <div
                style={{
                  height: "2px",
                  background: theme === "dark" ? "rgba(244, 244, 244, 0.3)" : "rgba(26, 26, 26, 0.3)",
                  marginBottom: "0.3rem",
                  borderRadius: "1px",
                  width: "60%"
                }}
              />
              <div
                style={{
                  height: "2px",
                  background: theme === "dark" ? "rgba(244, 244, 244, 0.3)" : "rgba(26, 26, 26, 0.3)",
                  borderRadius: "1px",
                  width: "70%"
                }}
              />
            </div>
          </div>

          {/* 标签底部 */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              fontSize: "0.65rem",
              opacity: 0.6,
              color: textColor,
              fontFamily: "monospace"
            }}
          >
            {project.year || new Date().getFullYear()}
          </div>
        </div>

        {/* 金属滑动片 */}
        <div
          className="diskette-metal"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "30%",
            background: metalGradient,
            border: `3px solid ${borderColor}`,
            borderBottom: "none",
            borderRadius: "2px 2px 0 0",
            transition: "transform 0.3s ease",
            transform: isHovered ? "translateY(-5px)" : "translateY(0)"
          }}
        >
          {/* 读写窗口 */}
          <div
            style={{
              position: "absolute",
              bottom: "8px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "50%",
              height: "60%",
              background: readWindow,
              border: `1px solid ${theme === "dark" ? "#666" : "#444"}`,
              borderRadius: "1px"
            }}
          />

          {/* 写保护标签 */}
          <div
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              width: "12px",
              height: "12px",
              background: "#ff4444",
              borderRadius: "50%",
              boxShadow: "inset 0 0 3px rgba(0, 0, 0, 0.5)"
            }}
          />
        </div>
      </div>
    </div>
  );
}

