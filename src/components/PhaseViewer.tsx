"use client";

import { useEffect, useRef } from "react";
import PhaseFooter from "./PhaseFooter";

interface PhaseViewerProps {
  phaseNumber: number;
  htmlContent: string;
  scriptContent: string;
  initializers?: string[];
}

export default function PhaseViewer({
  phaseNumber,
  htmlContent,
  scriptContent,
  initializers = [],
}: PhaseViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Inject script tag into document body
    const scriptEl = document.createElement("script");
    scriptEl.type = "text/javascript";
    scriptEl.textContent = scriptContent;
    document.body.appendChild(scriptEl);

    // 2. Call initializers once DOM elements and canvases are ready
    const timer = setTimeout(() => {
      initializers.forEach((expr) => {
        try {
          if (expr.includes("(")) {
            // Evaluates function call with parameters like setReadStep(1)
            new Function(expr)();
          } else {
            const fn = (window as any)[expr];
            if (typeof fn === "function") {
              fn();
            }
          }
        } catch (e) {
          console.warn(`Initial draw failed for ${expr}:`, e);
        }
      });
    }, 70);

    return () => {
      clearTimeout(timer);
      try {
        scriptEl.remove();
      } catch {}
    };
  }, [phaseNumber, scriptContent, initializers]);

  return (
    <div className={`phase-${phaseNumber}-page page-transition`}>
      <div
        ref={containerRef}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      <PhaseFooter currentPhase={phaseNumber} />
    </div>
  );
}
