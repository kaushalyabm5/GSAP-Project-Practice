import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {

    const scrollRef = useRef();


    useGSAP(() => {
        const boxes = gsap.utils.toArray(scrollRef.current.children);

        boxes.forEach((box) => {
            gsap.to(box, {
                x: 150 * (boxes.indexOf(box) + 5),
                rotate: 360,
                borderRadius: '100%',
                scale: 1.5,
                scrollTrigger: {
                    trigger: box,
                    start: 'bottom, bottom',
                    end: 'top 20%',
                    scrub: 'ture',
                },
                ease: 'power1.inOut'
            }, {scope: scrollRef})
        })
    }, []);


  return (
    <div className="bg-gray-800 mt-50 py-10 px-10">
        <div>
            <h1 className='text-white text-3xl font-bold'>6. GsapScrollTrigger</h1>
        </div>
        <div className="mt-20 w-full h-screen" ref={scrollRef}>
            <div id="scroll-pink" className="scroll-box w-20 h-20 rounded-lg bg-pink-500" />
            <div id="sroll-orange" className="scroll-box w-20 h-20 rounded-lg bg-orange-500" />
        </div>
    </div>
  )
}

export default GsapScrollTrigger