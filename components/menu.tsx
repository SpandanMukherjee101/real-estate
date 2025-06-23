export const Menu = () => {
  return (
    <div className="cursor-pointer w-[35vw] sm:w-[6vw] h-[10vw] sm:h-[2vw] rounded-xl flex justify-start items-center text-white group bg-amber-600 relative z-1">
      <div className="sm:h-[1vw] overflow-hidden">
        <div className="sm:h-[5vw] h-[5vw] ml-3 group-hover:-translate-y-6.5 transition-all duration-300 ease-in-out">
          Menu
          <br />
          Close
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform translate-x-5 -translate-y-1/2 w-7.5 h-7.5 ">
        <span className="absolute top-1/4 left-0 w-7.5 h-0.5 bg-white transition-all duration-300 transform group-hover:rotate-[38deg] group-hover:top-7/15"></span>
        <span className="absolute bottom-1/4 left-0 w-7.5 h-0.5 bg-white transition-all duration-300 transform group-hover:-rotate-[38deg] group-hover:bottom-7/15"></span>
      </div>
    </div>
  )
};