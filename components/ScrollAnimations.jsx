"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Scroll animation driver. Anything marked data-reveal fades/slides in when
 * it enters the viewport; anything marked data-parallax drifts at a slower
 * rate than the scroll. Elements are never hidden in CSS, so content stays
 * readable if JavaScript fails.
 */
export default function ScrollAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reveals = gsap.utils.toArray("[data-reveal]");
    const triggers = reveals.map((el) =>
      gsap.fromTo(
        el,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        }
      )
    );

    const parallaxes = gsap.utils.toArray("[data-parallax]");
    const parallaxTriggers = parallaxes.map((el) =>
      gsap.to(el, {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    );

    return () => {
      triggers.forEach((t) => t.scrollTrigger?.kill());
      parallaxTriggers.forEach((t) => t.scrollTrigger?.kill());
    };
  }, []);

  return null;
}
