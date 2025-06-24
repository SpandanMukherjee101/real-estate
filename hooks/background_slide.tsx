import { useEffect, useRef, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const slide = (): [
    (el: HTMLElement | null) => void,
    RefObject<HTMLElement[]>
] => {
    const refs = useRef<HTMLElement[]>([]);

    const setRef = (el: HTMLElement | null) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    useEffect(() => {
        refs.current.forEach((el) => {
            gsap.fromTo(
                el,
                { x: 0 },
                {
                    x: '100%',
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 95%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return [setRef, refs];
};
