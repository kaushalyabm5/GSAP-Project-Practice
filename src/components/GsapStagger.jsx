import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const GsapStagger = () => {

    useGSAP (() => {
        gsap.to('.stagger-box',{
            y: 250,
            rotation: 360,
            borderRadius: '100%',
            repeat: -1,
            yoyo: true,
            //stagger: 0.5,
            stagger : {
                amount: 1.5,
                grid: [2, 1],
                axis: 'y',
                ease: 'circ.inOut',
                from: 'center'
            }
        })
    }, []);
  return (
    <div className='bg-gray-700'>
        <div>
            <h1 className='text-white text-3xl font-bold pt-10 pl-10'>3. GsapFromTo</h1>
        </div>
        <div className='py-20 px-20'>
            <div className='flex gap-5'>
                <div className='w-20 h-20 bg-indigo-200 rounded-lg stagger-box' />
                <div className='w-20 h-20 bg-indigo-300 rounded-lg stagger-box' />
                <div className='w-20 h-20 bg-indigo-400 rounded-lg stagger-box' />
                <div className='w-20 h-20 bg-indigo-500 rounded-lg stagger-box' />
                <div className='w-20 h-20 bg-indigo-600 rounded-lg stagger-box' />
                <div className='w-20 h-20 bg-indigo-700 rounded-lg stagger-box' />
            </div>
        </div>
    </div>
  )
}

export default GsapStagger