'use client';

import { slide } from '@/hooks/background_slide';

export const Background = () => {

  const [setRef] = slide();

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
          className={`absolute top-0 left-0 w-full h-[120vh] sm:h-full bg-blue-950 -z-10`}
        />
      </div>
    </div>
  );
}