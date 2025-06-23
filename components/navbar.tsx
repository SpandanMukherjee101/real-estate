import { Menu } from "./menu";
import Button from "./button";

export const Navbar = () => {
    return (
        <nav className="bg-transparent p-4 lg:p-4 w-full flex justify-between">
            <div className="flex justify-between items-center w-full">
                <div className="text-white w-[15vw] lg:mx-8 text-4xl font-medium">Propelo</div>
                <div className="sm:space-x-6 w-full flex justify-end items-center mt-0">
                    <div className=" hidden sm:inline-block">
                        <Button textColor="white">Explore Properties</Button>
                    </div>
                    <Menu></Menu>
                </div>
            </div>
        </nav>
    );
}