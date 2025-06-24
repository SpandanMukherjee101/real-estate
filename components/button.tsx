import { ReactNode } from "react";
import React from "react";

type ButtonProps = {
    fill: boolean;
    textColor: string;
    children: ReactNode;
};

const Button = (props: ButtonProps) => {
    return (
        <div className="relative mt-2 sm:inline-block group w-full sm:w-56 h-[10vw] sm:h-[2vw] rounded-xl hover:scale-105 transition-transform duration-600 hover:delay-150 overflow-hidden">
            <span className={`absolute inset-0 bg-${props.textColor} scale-x-0 origin-left rounded-xl transition-transform duration-500 delay-200 group-hover:scale-x-100 ${props.fill ? '': 'hidden'}`}></span>
            <button className={`cursor-pointer relative z-10 w-full h-full border border-${props.textColor} rounded-xl text-xl text-${props.textColor} ${ props.textColor==='white' && props.fill ? 'group-hover:text-black' : 'group-hover:text-white'} bg-transparent transition hover:delay-200 ease-in-out duration-500`}>
                {props.children}
            </button>
        </div>
    )
}

export default Button;