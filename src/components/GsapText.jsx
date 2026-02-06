import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const GsapText = () => {

    useGSAP(() => {
        gsap.to('#text', {
            ease: 'power1.inOut',
            opacity: 1,
            y: 0,
        });

        gsap.fromTo('.para', {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            delay: 1,
            stagger: 0.1
        })
    })
  return (
    <div className='bg-gray-900 pt-10 pl-10 pb-40'>
        <div>
            <h1 className='text-white text-3xl font-bold'>7. GsapText</h1>

            <h1 id='text' className='opacity-0 translate-y-10 mt-10 text-white font-bold text-6xl'>Gsap Text Animation</h1>

            <p className='text-neutral-400 mt-5 para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolor quasi maxime autem dolorem sint voluptate expedita, commodi odio quod praesentium quos quis velit, eveniet nam rem. Sint, quam vitae!</p>
        </div>
    </div>
  )
}

export default GsapText