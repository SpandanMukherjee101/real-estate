import { Navbar } from "@/components/navbar";
import { Background } from "@/components/background";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <div className="h-[85vh] text-white mx-4 sm:mx-6 md:mx-8 flex flex-col justify-end">
        <div className="h-[45vh] text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[6rem] flex items-end leading-tight">
          Modern property<br />management firm
        </div>

        <div className=" h-[15vh] flex items-center justify-center w-full">
          <hr className="w-full border-white" />
        </div>
        <div className="h-[40vh] flex sm:flex-wrap lg:flex-nowrap justify-between flex-col sm:flex-row gap-4">
          <div className="h-[16vh] sm:hidden w-full lg:w-6/12 text-[0.8rem] sm:text-base leading-tight">
            Propelo is a clean and modern Webflow template built for property management companies. It’s perfect for showcasing your available spaces, service offerings, and trusted clients — all in one seamless experience. With easy CMS integration and sleek design, Propelo helps you present your firm with professionalism and clarity.
          </div>
          <iframe
            className="h-[50vw] sm:h-[30vw] w-full lg:h-[10vw] lg:w-1/5 rounded-2xl"
            src="https://www.youtube.com/embed/jLZVo3cpGN4"
            title="The Webflow Dashboard  – Webflow Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="hidden sm:inline-block w-full lg:w-6/12 text-sm sm:text-base">
            Propelo is a clean and modern Webflow template built for property management companies. It’s perfect for showcasing your available spaces, service offerings, and trusted clients — all in one seamless experience. With easy CMS integration and sleek design, Propelo helps you present your firm with professionalism and clarity.
          </div>

        </div>
      </div>
    </>
  );
}