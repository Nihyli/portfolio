"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiMove } from "react-icons/fi";

type PortraitTiltProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
};

const MAX_TILT = 11;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function PortraitTilt({ src, alt, sizes, priority }: PortraitTiltProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [showTiltHint, setShowTiltHint] = useState(true);
  const hintDismissed = useRef(false);

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (reducedMotion) return;
      if (!hintDismissed.current) {
        hintDismissed.current = true;
        setShowTiltHint(false);
      }
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const nx = (px - 0.5) * 2;
      const ny = (py - 0.5) * 2;
      setTilt({
        x: -ny * MAX_TILT,
        y: nx * MAX_TILT,
      });
    },
    [reducedMotion],
  );

  const resetTilt = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  const transform = reducedMotion
    ? undefined
    : `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`;

  return (
    <div className="relative z-10 w-full max-w-[20rem]">
      <div
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-to-tr from-[color-mix(in_oklch,var(--accent)_25%,transparent)] via-transparent to-[color-mix(in_oklch,var(--accent-alt)_22%,transparent)] opacity-90 blur-3xl"
        aria-hidden
      />
      <div
        className="portrait-tilt-scene"
        onPointerMove={onPointerMove}
        onPointerLeave={resetTilt}
        onPointerCancel={resetTilt}
      >
        <div
          className="portrait-tilt-inner relative aspect-[3/4] w-full"
          style={{ transform }}
        >
          {/* Border + shadow + clip only the photo — brackets sit outside overflow so they stay visible */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl border border-[--line] bg-[--surface-soft] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.55)]">
            <Image src={src} alt={alt} fill className="object-cover object-top" sizes={sizes} priority={priority} />
          </div>
          <span
            aria-hidden
            className="pointer-events-none absolute -left-1 -top-1 z-20 h-12 w-12 border-l-2 border-t-2 border-[--accent]"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-1 -right-1 z-20 h-12 w-12 border-b-2 border-r-2 border-[--accent]"
          />
        </div>
        {!reducedMotion ? (
          <p
            className={`pointer-events-none absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5 rounded border border-[--line] bg-[color-mix(in_oklch,var(--background)_82%,var(--surface))] px-2.5 py-1.5 font-[family-name:var(--font-geist-mono)] text-[9px] font-semibold uppercase tracking-[0.18em] text-[--foreground-soft] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-opacity duration-500 ease-out ${
              showTiltHint ? "opacity-100" : "opacity-0"
            }`}
          >
            <FiMove className="h-3.5 w-3.5 shrink-0 text-[--accent]" aria-hidden />
            hover for motion
          </p>
        ) : null}
      </div>
    </div>
  );
}
