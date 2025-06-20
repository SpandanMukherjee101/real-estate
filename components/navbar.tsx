import { Menu } from "./menu";


export const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 ">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white mx-8 text-4xl font-medium">Propelo</div>
                <div className="space-x-6 flex items-center">
                    <div className="relative inline-block group w-50 h-10 rounded-xl hover:scale-105 transition-transform duration-500 hover:delay-200 overflow-hidden">
                        <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-500 delay-200 group-hover:scale-x-100"></span>
                        <button className="relative z-1 w-full h-full border border-white rounded-xl text-xl text-white group-hover:text-black bg-transparent transition hover:delay-200 ease-in-out duration-300">
                            Explore Properties
                        </button>
                    </div>

                    <Menu></Menu>
                </div>
            </div>
        </nav>
    );
}