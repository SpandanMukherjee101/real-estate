'use client';
import { useEffect, useState } from 'react';

export const Background = () => {
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
    return (
    <div className="overflow-x-hidden group h-[130vh] sm:h-screen absolute inset-0 -z-10">
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

        <div
          className={`absolute top-0 left-0 w-full h-[120vh] sm:h-full bg-blue-950 -z-10 transition-transform duration-1000 ease-in-out ${
            loaded ? 'translate-x-full' : 'translate-x-0'
          }`}
        />
        </div>
    </div>
    );
}