import React from 'react'
import GsapTo from './components/GsapTo'
import GsapFrom from './components/GsapFrom'
import GsapFromTo from './components/GsapFromTo'
import GsapTimeLine from './components/GsapTimeLine'
import GsapStagger from './components/GsapStagger'

const App = () => {
  return (
    <div>
      <GsapTo />
      <GsapFrom />
      <GsapFromTo />
      <GsapTimeLine />
      <GsapStagger />
    </div>
  )
}

export default App