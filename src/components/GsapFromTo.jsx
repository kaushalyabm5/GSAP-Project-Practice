import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const GsapFromTo = () => {

    useGSAP(() => {
        gsap.fromTo('#purple-box',{
            x: 0,
            rotation: 0,
            borderRadius: '0%'
        },
        {
            x: 250,
            repeat: -1,
            yoyo: true,
            borderRadius: '100%',
            rotation: 360,
            duration: 2,
            ease: 'bounce-out'
        })
    }, []);
  return (
    <div className='bg-gray-700 flex-col justify-center px-10 py-10'>
        <div>
            <h1 className='text-white text-3xl font-bold'>3. GsapFromTo</h1>
        </div>
        <div className='mt-10'>
            <div id='purple-box' className='w-20 h-20 bg-purple-500 rounded-lg' />
        </div>
    </div>
  )
}

export default GsapFromTo