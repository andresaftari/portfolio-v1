"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";

interface MediaImageProps {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
  sizes?: string;
}

const DEFAULT_SIZES =
  "(min-width: 1100px) 33vw, (min-width: 600px) 50vw, 100vw";

function MediaImageContent({
  src,
  alt,
  className,
  priority = false,
  fit = "cover",
  sizes = DEFAULT_SIZES,
}: MediaImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(!src);
  const remote = currentSrc?.startsWith("http") ?? false;

  const handleError = (): void => {
    // YouTube thumbnails: fall back from the max-resolution still to a stock one.
    if (currentSrc?.includes("maxresdefault.jpg")) {
      setCurrentSrc(currentSrc.replace("maxresdefault.jpg", "hqdefault.jpg"));
      return;
    }
    setFailed(true);
  };

  return (
    <span
      className={cn(
        "relative isolate block overflow-hidden bg-[#151212]",
        className,
      )}
    >
      {failed && (
        <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#171111] text-[11px] text-muted">
          <span className="font-display font-normal text-[64px] leading-[1.02] text-accent">
            A.
          </span>
          <span>Preview not available</span>
        </span>
      )}
      {currentSrc && (
        <Image
          src={currentSrc}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          unoptimized={remote}
          onError={handleError}
          className={cn(
            fit === "cover" ? "object-cover" : "object-contain",
            failed && "invisible",
          )}
        />
      )}
    </span>
  );
}

export function MediaImage(props: MediaImageProps) {
  // Remounting on src change resets the load/error state.
  return <MediaImageContent key={props.src} {...props} />;
}
