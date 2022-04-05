import React, { useRef, useEffect, useCallback } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { ccLogoWhite } from '../images/index';

const Slideshow = ({
    children,
    navigation = false,
    autoplay = false,
    speed = '500',
    interval = '5000',
}) => {
    const slideshow = useRef(undefined);
    const slideshowIntervals = useRef(undefined);

    const next = useCallback(() => {
        // CHECK IF THE SLIDESHOW HAS SLIDES
        if (slideshow.current?.children.length > 0) {
            // GET FIRST SLIDE OF SLIDER
            const firstSlide = slideshow.current.children[0];
            // SLIDESHOW TRANSITION - HANDLED BY PROPS
            slideshow.current.style.transition = `${speed}ms ease-out all`;
            // GET SLIDE UNIT SIZE
            const slideSize = slideshow.current.children[0].offsetWidth;
            // SLIDE MOVEMENT
            slideshow.current.style.transform = `translateX(-${slideSize}px)`;
            const transition = () => {
                // RESTART SLIDESHOW POSITION
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;
                // SEND FIRST SLIDE AND SEND TO THE END
                slideshow.current.appendChild(firstSlide);
                slideshow.current.removeEventListener(
                    'transitionend',
                    transition
                );
            };
            // LISTERNER WHEN ANIMATION ENDS
            slideshow.current.addEventListener('transitionend', transition);
        }
    }, [speed]);

    const previous = () => {
        // CHECK IF THE SLIDESHOW HAS SLIDES
        if (slideshow.current.children.length > 0) {
            // GET LAST ELEMENT FROM SLIDESHOW
            const index = slideshow.current.children.length - 1;
            // GET LAST SLIDE
            const lastSlide = slideshow.current.children[index];
            slideshow.current.insertBefore(
                lastSlide,
                slideshow.current.firstChild
            );
            // GET SLIDE SIZE
            const slideSize = slideshow.current.children[0].offsetWidth;

            // SLIDESHOW TRANSITION
            slideshow.current.style.transition = 'none';
            // SLIDE MOVEMENT
            // slideshow.current.style.transform = `translateX(-${slideSize}px)`;
            slideshow.current.style.transform = `translateX(-${slideSize}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = `${speed}ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    };

    useEffect(() => {
        // AUTOPLAY
        if (autoplay) {
            slideshowIntervals.current = setInterval(() => {
                next();
            }, interval);

            // DELETE INTERVALS
            slideshow.current.addEventListener('mouseenter', () => {
                clearInterval(slideshowIntervals.current);
            });

            // PUT BACK INTERVALS WHEN MOUSE LEAVE
            slideshow.current.addEventListener('mouseleave', () => {
                slideshowIntervals.current = setInterval(() => {
                    next();
                }, interval);
            });
        }
    }, [autoplay, interval, next]);

    const arrows = 'text-4xl self-center';
    const arrowsContainer = 'h-full flex';
    const sliderContainer = 'flex flex-nowrap';
    const mainContainer = 'relative overflow-hidden flex md:rounded-xl';

    return (
        <div className="bg-slate-200 pb-12 relative">
            <div className={mainContainer}>
                <div ref={slideshow} className={sliderContainer}>
                    {children}
                </div>
                {navigation && (
                    <div className="absolute z-20 w-full h-full pointer-events-none flex my-auto box-content">
                        <div
                            onClick={previous}
                            className="pointer-events-auto cursor-pointer w-8 h-full text-center absolute transition-all hover:bg-slate-900 hover:bg-opacity-40"
                        >
                            <div className={arrowsContainer}>
                                <FiArrowLeft className={arrows} />
                            </div>
                        </div>
                        <div
                            right
                            onClick={next}
                            className="pointer-events-auto cursor-pointer w-8 h-full text-center absolute transition-all hover:bg-slate-900 hover:bg-opacity-40 right-0"
                        >
                            <div className={arrowsContainer}>
                                <FiArrowRight className={arrows} />
                            </div>
                        </div>
                    </div>
                )}
                {/* FROST & HERO */}
                <div className="absolute z-12 pointer-events-none bg-slate-100 bg-opacity-20 min-h-[60vh] w-full flex items-center backdrop-blur-lg">
                    <div className="text-slate-900 w-full flex flex-col justify-center items-center">
                        <h1 className="font-light tracking-widest text-xl uppercase text-white pb-2">
                            The Art of
                        </h1>

                        <img
                            src={ccLogoWhite}
                            alt="Chris Logo"
                            className="lg:w-1/3 md:w-1/2 w-2/3"
                        />

                        <a
                            href="/artworks"
                            className="bg-slate-900 py-2 px-4 rounded-full text-slate-100 uppercase tracking-widest font-ligh bg-opacity-50 hover:bg-opacity-100 hover:scale-110 ease-in-out duration-300 transform-gpu text-xs"
                        >
                            Explore
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slideshow;
