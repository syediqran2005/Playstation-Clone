import { useState } from 'react'
import './App.css'
import { DatePicker } from 'antd';
import GameSlider from './components/sliders/gamesSlider/GameSlider';
import ProductSlider from './components/sliders/productSlider/ProductSlider.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <GameSlider />
      </div>
      <div>
        <ProductSlider />
      </div>
    </>
  )
}

export default App
