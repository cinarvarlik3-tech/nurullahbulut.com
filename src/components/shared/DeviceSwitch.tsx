"use client";

import { useState, useEffect, type ReactNode } from "react";

interface DeviceSwitchProps {
  desktop: ReactNode;
  mobile: ReactNode;
  breakpointPx?: number;
}

/**
 * Viewport-based device switcher. Renders desktop or mobile shell based on
 * (max-width: breakpointPx - 1). Renders nothing until mounted to avoid
 * hydration mismatch. Listens to media query changes on resize.
 */
export default function DeviceSwitch({
  desktop,
  mobile,
  breakpointPx = 768,
}: DeviceSwitchProps) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const query = `(max-width: ${breakpointPx - 1}px)`;
    const media = window.matchMedia(query);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    setIsMobile(media.matches);
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [mounted, breakpointPx]);

  if (!mounted) {
    return null;
  }

  return isMobile ? <>{mobile}</> : <>{desktop}</>;
}
