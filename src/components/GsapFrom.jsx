import { useGSAP } from "@gsap/react"
import gsap from "gsap"


const GsapFrom = () => {

    useGSAP(() => {
        gsap.from("#green-box", {
            x: 250,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            duration: 2,
            ease: "power1.inOut"
        })
    })
  return (
    <div className='bg-gray-800 flex-col justify-center px-10 py-10'>
        <div>
            <h1 className='text-white text-3xl font-bold'>1. GsapFrom</h1>
        </div>
        <div className='mt-10'>
            <div id='green-box' className='w-20 h-20 bg-green-500 rounded-lg' />
        </div>
    </div>
  )
}

export default GsapFrom