'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Background = () => {
  const refs = useRef<HTMLElement[]>([]);

  const setRef = (el: HTMLElement | null) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  useEffect(() => {
    refs.current.forEach((el) => {
      gsap.fromTo(
        el,
        {  x: 0 },
        {
          x: '100%',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="overflow-x-hidden group h-[120vh] sm:h-screen absolute inset-0 -z-10">
      <div className="relative w-full sm:h-screen">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-[120vh] sm:h-full object-cover -z-10"
        />

        <div className="absolute top-0 left-0 w-full h-[120vh] sm:h-full bg-blue-950/70 -z-10" />

        <div ref={setRef}
          className={`absolute top-0 left-0 w-full h-[120vh] sm:h-full bg-blue-950 -z-10
            }`}
        />
      </div>
    </div>
  );
}