import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HrExp = () => {
    const hrRefs = useRef<HTMLElement[]>([]);

    const setRef = (el: HTMLElement | null) => {
        if (el && !hrRefs.current.includes(el)) {
            hrRefs.current.push(el);
        }
    };

    useEffect(() => {
        hrRefs.current.forEach((el) => {
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

    return setRef;
};
