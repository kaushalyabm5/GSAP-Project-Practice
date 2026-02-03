import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const GsapTimeLine = () => {

    const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
    });

    useGSAP(() => {
        timeline.to('#yellow-box', {
            x: 250,
            rotation: 360,
            borderRadius: '100%',
            duration: 2,
            ease: 'bacl.inOut',
        })

        timeline.to('#yellow-box', {
            y: 250,
            scale: 2,
            rotation: 360,
            borderRadius: '100%',
            duration: 2,
            ease: 'back.inOut',
        })

        timeline.to('#yellow-box', {
            x: 500,
            scale: 1,
            rotation: 360,
            borderRadius: '8px',
            duration: 2,
            ease: 'back.inOut'
        })
    }, []);
   
  return (
    <div className='bg-gray-800 flex-col justify-center px-10 py-10'>
        <div>
            <h1 className='text-white text-3xl font-bold'>4. GsapTimeline</h1>
        </div>
        <div className='mt-10 space-y-10'>
            <button className='bg-neutral-600 py-1 px-3 text-cyan-50 font-bold rounded-md cursor-pointer' onClick={() => {
                if(timeline.paused()){
                    timeline.play()
                } else {
                    timeline.pause();
                }
            }}>Play/Pause</button>
        </div>
        <div className='mt-10'>
            <div id='yellow-box' className='w-20 h-20 bg-yellow-500 rounded-lg' />
        </div>
    </div>
  )
}

export default GsapTimeLine