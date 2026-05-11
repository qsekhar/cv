"use client";
import { useEffect, useRef, useState } from "react";

const fmt = (s: number) => {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2, "0")}`;
};

/**
 * Editorial inline audio player. Designed to sit inside the navy Hero —
 * paper-on-navy treatment, square corners, mono labels.
 */
export default function AudioIntro({
  src,
  label = "Audio intro",
}: {
  src: string;
  label?: string;
}) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = ref.current;
    if (!audio) return;
    const onMeta = () => setDuration(audio.duration);
    const onTime = () => setCurrent(audio.currentTime);
    const onEnd = () => {
      setPlaying(false);
      setCurrent(0);
    };
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const audio = ref.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      void audio.play();
      setPlaying(true);
    }
  };

  const pct = duration > 0 ? Math.min(100, (current / duration) * 100) : 0;

  return (
    <div className="inline-flex items-center gap-4 max-w-full">
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause audio introduction" : "Play audio introduction"}
        className="w-11 h-11 flex-shrink-0 border border-paper text-paper hover:bg-paper hover:text-navy focus:outline-none focus-visible:focus-ring transition-colors flex items-center justify-center"
      >
        {playing ? (
          <span className="flex gap-[3px]" aria-hidden>
            <span className="block w-[3px] h-[14px] bg-current" />
            <span className="block w-[3px] h-[14px] bg-current" />
          </span>
        ) : (
          <span
            aria-hidden
            className="block w-0 h-0 border-y-[7px] border-y-transparent border-l-[10px] border-l-current ml-[2px]"
          />
        )}
      </button>

      <div className="flex flex-col min-w-0">
        <span className="font-mono uppercase text-[10px] tracking-label text-paper/70">
          {label} · {fmt(duration)}
        </span>
        <span className="font-mono text-[11px] tracking-label text-paper mt-1">
          {fmt(current)} <span className="text-paper/50">/ {fmt(duration)}</span>
        </span>
        <span
          className="mt-2 block h-px w-[180px] max-w-full bg-paper/20 relative overflow-hidden"
          aria-hidden
        >
          <span
            className="block h-full bg-accent transition-[width] duration-100"
            style={{ width: `${pct}%` }}
          />
        </span>
      </div>

      <audio ref={ref} src={src} preload="metadata" />
    </div>
  );
}
