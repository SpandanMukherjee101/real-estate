import { ReactNode } from "react";

type ButtonProps = {
    fill: boolean;
    children: ReactNode;
};

const Button2 = (props: ButtonProps) => {
    return (
        <div className="relative sm:inline-block group w-20 sm:w-56 h-[10vw] sm:h-[2vw] rounded-xl group-hover:scale-105 transition-transform duration-600 group-hover:delay-150 overflow-hidden">
            <span className={`absolute inset-0 bg-orange-600/80 z-10 scale-x-0 origin-left rounded-xl transition-transform duration-500 delay-200 group-hover:scale-x-100 ${props.fill ? '': 'hidden'}`}></span>
            <button className={`cursor-pointer relative w-full h-full border border-orange-700 rounded-xl text-xl text-white bg-orange-500 transition hover:delay-200 ease-in-out duration-500`}>
                <div className="flex items-center justify-center h-full">
                    <div className="absolute z-20">{props.children}</div>
                </div>
            </button>
        </div>
    )
}

export default Button2;