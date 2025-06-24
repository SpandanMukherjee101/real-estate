'use client';
import { useState } from 'react';

export const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="cursor-pointer fixed w-[35vw] sm:w-[6vw] h-[10vw] sm:h-[2vw] rounded-xl hover:scale-110 duration-300 flex justify-start items-center text-white bg-amber-600 z-10"
    >
      <div className="sm:h-[1vw] overflow-hidden">
        <div
          className={`sm:h-[5vw] h-[5vw] ml-3 transition-all duration-300 ease-in-out ${
            open ? '-translate-y-6.5' : ''
          }`}
        >
          Menu
          <br />
          Close
        </div>
      </div>
      <div className="absolute top-1/2 left-5/11 transform translate-x-5 -translate-y-1/2 w-7.5 h-7.5">
        <div className={`absolute top-1/4 left-0 w-fit h-fit transition-all duration-300 transform ${open ? 'translate-y-1.5' : 'delay-300'}`}>
          <span
            className={`absolute w-8 h-0.5 bg-white transition-all duration-300 top-1/4 left-0 ${
              open ? 'rotate-[50deg] delay-300' : ''
            }`}
          ></span>
        </div>
        <div className={`absolute bottom-1/4 left-0 w-fit h-fit transition-all duration-300 transform ${open ? '-translate-y-1.5' : 'delay-300'}`}>
          <span
            className={`absolute w-8 h-0.5 bg-white transition-all duration-300 bottom-1/4 left-0 ${
              open ? '-rotate-[50deg] delay-300' : ''
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};
