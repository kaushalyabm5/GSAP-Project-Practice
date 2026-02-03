import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const GsapTo = () => {

    useGSAP(() => {
        gsap.to('#blue-box', {
            x: 250,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            duration: 2,
            ease: 'elastic'
        })
    }, []);
    
  return (
    <div className='bg-gray-600 flex-col justify-center px-10 py-10'>
        <div>
            <h1 className='text-white text-3xl font-bold'>1. GsapTo</h1>
        </div>
        <div className='mt-10'>
            <div id='blue-box' className='w-20 h-20 bg-blue-500 rounded-lg' />
        </div>
    </div>
  )
}

export default GsapTo