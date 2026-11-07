"use client";

import { useEffect, useState } from "react";
import { MediaImage } from "@/components/ui/MediaImage";
import { outlineButtonClass } from "@/components/ui/styles";
import { useMotionEnabled } from "@/hooks/use-motion";
import { cn } from "@/lib/cn";
import type { DialogMediaInfo } from "@/lib/dialog-media";
import type { Project } from "@/types/project";

const VIDEO_TIMEOUT_MS = 14000;

interface DialogMediaProps {
  project: Project;
  info: DialogMediaInfo;
}

export function DialogMedia({ project, info }: DialogMediaProps) {
  const enabled = useMotionEnabled();
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [retried, setRetried] = useState(0);
  const { isVideo, embedType, embedMedia, rendered } = info;

  // `retried` restarts the timeout after "Try again".
  // biome-ignore lint/correctness/useExhaustiveDependencies: retried is a restart trigger
  useEffect(() => {
    if (!isVideo) return;
    const timer = setTimeout(() => {
      if (!loaded) setFailed(true);
    }, VIDEO_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, [loaded, retried, isVideo]);

  return (
    <div
      className={cn(
        "relative isolate aspect-video min-w-0 bg-[#050505] phone:aspect-[4/3]",
        !isVideo && "max-h-[60dvh]",
      )}
    >
      {isVideo ? (
        <>
          {!loaded && (
            <output className="absolute inset-0 z-[1] flex flex-col items-center justify-center gap-[14px] p-[25px] text-center text-[12px] text-muted">
              {failed ? (
                <>
                  <p>
                    The preview couldn’t be loaded. Open the original source to
                    view it.
                  </p>
                  <button
                    type="button"
                    className={outlineButtonClass}
                    onClick={() => {
                      setFailed(false);
                      setLoaded(false);
                      setRetried((v) => v + 1);
                    }}
                  >
                    Try again
                  </button>
                </>
              ) : (
                <>
                  <span
                    className={cn(
                      "block size-[25px] rounded-full border border-[#4c222a] border-t-accent",
                      enabled ? "animate-spin" : "animate-none",
                    )}
                  />
                  <p>Loading video…</p>
                </>
              )}
            </output>
          )}
          <iframe
            key={`${embedMedia}-${retried}`}
            className="absolute inset-0 z-[2] size-full border-0"
            src={
              embedType === "youtube"
                ? `https://www.youtube-nocookie.com/embed/${embedMedia}?autoplay=1&rel=0`
                : `https://drive.google.com/file/d/${embedMedia}/preview`
            }
            title={project.title}
            width="1280"
            height="720"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            onLoad={() => {
              setLoaded(true);
              setFailed(false);
            }}
            onError={() => setFailed(true)}
          />
        </>
      ) : (
        <MediaImage
          src={rendered}
          alt={project.title}
          className="size-full"
          fit="contain"
          sizes="(min-width: 1040px) 1040px, 100vw"
          priority
        />
      )}
    </div>
  );
}
