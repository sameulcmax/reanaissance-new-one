
import { useRef, useState, useEffect } from "react";
export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(false);

  function toggleMute() {
    const next = !muted;
    setMuted(next);
    if (videoRef.current) videoRef.current.muted = next;
  }

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = muted;

    const tryPlay = async () => {
      try {
        await v.play();
      } catch (e) {
        console.debug("Unmuted play prevented, falling back to muted:", e);
        setMuted(true);
        try {
          v.muted = true;
          await v.play();
        } catch (err) {
          console.debug("Muted play also prevented:", err);
        }
      }
    };

    tryPlay();
  }, [muted]);

  return (
    <section className="relative bg-background">
      {/* Fullscreen visual (background video) */}
      <div className="relative h-[100vh] min-h-[600px] w-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={muted}
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/vid2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30" />

        {/* Mute / Unmute control (bottom-right) */}
        <div className="absolute bottom-6 right-6">
          <button
            aria-label={muted ? "Unmute video" : "Mute video"}
            onClick={toggleMute}
            className="inline-flex items-center justify-center rounded-full bg-background/60 backdrop-blur-sm p-2 text-white/90 hover:bg-background/80 transition-colors"
          >
            {muted ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H3v6h3l5 4V5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9a4 4 0 010 6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H3v6h3l5 4V5z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.54 8.46a5 5 0 010 7.07M19.07 5.93a9 9 0 010 12.73"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
