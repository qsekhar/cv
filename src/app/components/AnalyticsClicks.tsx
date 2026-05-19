"use client";
import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

export default function AnalyticsClicks() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      try {
        const target = e.target as Element | null;
        const el = target?.closest<HTMLElement>("[data-ga-event]");
        if (!el) return;
        const { gaEvent, gaCta, gaLocation, gaKind } = el.dataset;
        if (!gaEvent) return;
        sendGAEvent({
          event: gaEvent,
          cta: gaCta,
          location: gaLocation,
          kind: gaKind,
        });
      } catch {
        /* never let analytics break navigation */
      }
    }
    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
