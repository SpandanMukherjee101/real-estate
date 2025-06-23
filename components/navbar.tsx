import { Menu } from "./menu";


export const Navbar = () => {
    return (
        <nav className="bg-transparent lg:p-4 w-full flex justify-between">
            <div className="flex justify-between items-center w-full">
                <div className="text-white w-[15vw] lg:mx-8 text-4xl font-medium">Propelo</div>
                <div className="space-x-4 sm:space-x-6 w-full flex justify-end items-center mt-4 sm:mt-0">
                    <div className="relative hidden sm:inline-block group w-full sm:w-56 h-12 sm:h-[2vw] rounded-xl hover:scale-105 transition-transform duration-500 hover:delay-200 overflow-hidden">
                        <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-500 delay-200 group-hover:scale-x-100"></span>
                        <button className="cursor-pointer relative z-10 w-full h-full border border-white rounded-xl text-xl text-white group-hover:text-black bg-transparent transition hover:delay-200 ease-in-out duration-300">
                            Explore Properties
                        </button>
                    </div>

                    <Menu></Menu>
                </div>
            </div>
        </nav>
    );
}