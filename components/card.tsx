import Button from "./button";
import Button2 from "./orangeButton";
import '../styles/marquee.css';
import { slide } from '@/hooks/background_slide';
import { FadeIn } from "@/hooks/fade_in";
import { HrExp } from "@/hooks/hr_expand";

type cardsProps = {
    images: {
        title: string;
        type: string;
        address: string;
        path: string;
    }[];
};
const Card = ({ images }: cardsProps) => {
    const [setRef]= slide();
    const fadeInRef = FadeIn();
    const hrRef = HrExp();
    return (
        <>
            {[...images].map((img, index) => (
                <div
                    key={index}
                    className="relative cursor-pointer group sm:h-[65vh] sm:w-[25vw] w-[80vw] shadow-2xl rounded-lg overflow-hidden flex flex-col items-center justify-between"
                >
                    <img
                        src={img.path}
                        alt={`Card image ${index + 1}`}
                        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 delay-150 ease-in-out group-hover:scale-115"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b z-0 pointer-events-none"
                        style={{
                            backgroundImage:
                                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.7) 100%)',
                        }} />

                    <div ref={setRef}
                        className="absolute top-0 left-0 w-full h-[120vh] sm:h-full bg-blue-950"
                    />

                    <div className="w-max lg:w-[25vw] flex justify-around mt-8 gap-13">
                        <div ref={fadeInRef} className="text-white text-[1rem] sm:text-[1.1rem] z-10">
                            {img.type}
                        </div>
                        <div ref={fadeInRef} className="text-white text-[1rem] sm:text-[1.1rem] z-10">
                            {img.address}
                        </div>
                    </div>

                    <div ref={hrRef} className="h-[2vh] w-[72.5vw] sm:w-[24vw] flex items-center justify-start z-10">
                        <hr className="w-full border-white" />
                    </div>

                    <div ref={fadeInRef} className="text-white text-[1.5rem] sm:text-[2rem] z-10 h-[50vh] flex items-start justify-start w-[80vw] sm:w-[25vw] mt-2 ml-20">
                        {img.title}
                    </div>

                    <div ref={hrRef} className="h-[2vh] w-[72.5vw] sm:w-[24vw] flex items-center justify-start z-10">
                        <hr className="w-full border-white" />
                    </div>

                    <div className="z-10 w-[80vw] sm:w-[25vw] flex items-center justify-center text-white space-x-15 sm:space-x-2 m-5">
                        <div ref={fadeInRef} className="sm:w-[50%] text-center">
                            <Button textColor="white" fill={false}>Sq. ft Available</Button>
                        </div>
                        <div ref={fadeInRef} className="sm:w-[50%] text-center mt-2.5 group">
                            <Button2 fill={true}>
                                <div className="flex items-center justify-center">View</div>
                            </Button2>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card