'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './button';

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
    const refs = useRef<HTMLElement[]>([]);

    const setRef = (el: HTMLElement | null) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    const refsHr = useRef<HTMLElement[]>([]);

    const setRefHr = (el: HTMLElement | null) => {
        if (el && !refsHr.current.includes(el)) {
            refsHr.current.push(el);
        }
    };

    useEffect(() => {
        refs.current.forEach((el) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 50, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    delay: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });

        refsHr.current.forEach((el) => {
            gsap.fromTo(
                el,
                { width: '0%' },
                {
                    width: '100%',
                    duration: 1,
                    delay: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <>
            <div className='overflow-x-hidden'>
                <div className="h-[100vh] sm:h-[92vh] text-white mx-4 sm:mx-6 md:mx-8 flex flex-col justify-center">
                    <div ref={setRef} className={`h-[40vh] sm:h-[30vw] flex text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[6rem] items-end leading-tight`}>
                        Modern property<br />management firm
                    </div>

                    <div ref={setRefHr} className={`h-[10vh] sm:h-[30vh] flex items-center justify-center`}>
                        <hr className="w-full border-white" />
                    </div>
                    <div ref={setRef} className="h-[40vh] w-full flex sm:flex-wrap lg:flex-nowrap flex-col sm:flex-row justify-between gap-4">
                        <div className={`h-[16vh] sm:hidden text-[0.8rem] w-full lg:w-6/12 leading-tight`}>
                            Propelo is a clean and modern Webflow template built for property management companies. It’s perfect for showcasing your available spaces, service offerings, and trusted clients — all in one seamless experience. With easy CMS integration and sleek design, Propelo helps you present your firm with professionalism and clarity.
                        </div>
                        <iframe
                            ref={setRef}
                            className={`h-[50vw] sm:h-[40vw] w-[90vw] lg:h-[22.5vh] lg:w-[18vw] rounded-2xl`}
                            src="https://www.youtube.com/embed/jLZVo3cpGN4"
                            title="The Webflow Dashboard  – Webflow Tutorial"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        <div ref={setRef} className={`hidden sm:inline-block w-full lg:w-6/12`}>
                            Propelo is a clean and modern Webflow template built for property management companies. It's perfect for showcasing your available spaces, service offerings, and trusted clients — all in one seamless experience. With easy CMS integration and sleek design, Propelo helps you present your firm with professionalism and clarity.
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-black flex flex-col sm:flex-row justify-center gap-4 py-8 h-[60vh] sm:h-[30vh]'>
                <div className={`flex sm:flex-row flex-col items-start sm:items-center justify-between w-[98vw] h-[20vh] sm:h-[15vh] overflow-x-hidden`}>
                    <h1 ref={setRef} className={`w-[98vw] sm:w-5/12 text-5xl`}>Featured properties</h1>
                    <div ref={setRefHr} className={`hidden sm:inline-flex`}>
                        <hr className={`w-full h-0.5 -translate-x-2 bg-black border-none`} />
                    </div>
                    <div ref={setRef} className='w-[30vw] sm:w-[15vw]'><Button textColor='black'>View all</Button></div>
                </div>
            </div>
        </>
    );
};

export default Main;
