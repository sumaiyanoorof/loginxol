import React, { useEffect, useRef, useState } from "react";
import sLogo1 from "../assets/s-logo1.png";
import sLogo2 from "../assets/s-logo2.png";
import sLogo3 from "../assets/s-logo3.png";
import sLogo4 from "../assets/s-logo4.png";
import sLogo5 from "../assets/s-logo5.png";
import sLogo6 from "../assets/s-logo6.png";
import sLogo7 from "../assets/s-logo7.png";
import sLogo8 from "../assets/s-logo8.png";

const logos = [sLogo1, sLogo2, sLogo3, sLogo4, sLogo5, sLogo6, sLogo7, sLogo8];

const LogoImageCarosel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Small per-tick step for smooth movement. Tune `step` and `intervalMs` as needed.
    const step = 0.8; // pixels per tick
    const intervalMs = 20; // ms per tick (~50fps)

    const tick = () => {
      if (isPaused) return;
      if (!el) return;

      el.scrollBy({ left: step, behavior: "auto" });

      // When we've scrolled past half (because items are duplicated), wrap back
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) {
        // Jump back by half so the effect is seamless
        el.scrollTo({ left: el.scrollLeft - half, behavior: "auto" });
      }
    };

    const id = setInterval(tick, intervalMs);
    return () => clearInterval(id);
  }, [isPaused]);

  return (
    <section className="relative w-full overflow-hidden py-16 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-10">
          OUR <span className="text-red-600">CLIENTS</span>
        </h2>

        <div
          ref={ref}
          className="relative flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-8 sm:gap-10 md:gap-14"
          onPointerDown={() => setIsPaused(true)}
          onPointerUp={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          style={{ scrollBehavior: "auto", WebkitOverflowScrolling: "touch", touchAction: "pan-x" }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="snap-start flex-shrink-0 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-8 flex items-center justify-center w-40 sm:w-48 md:w-56 hover:bg-white/20 transition-all"
            >
              <img src={logo} alt={`client-${idx}`} className="h-16 sm:h-20 md:h-24 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoImageCarosel;

