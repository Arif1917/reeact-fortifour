
import './App.css'
import MarkChart from './components/Chart/MarkChart'
import DaisyPricing from './components/DaisyPricingCard/DaisyPricing'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing'

function App() {


  return (
    <>
     <header>
     <Navbar></Navbar>
     </header>

     <main>
      <Pricing></Pricing>
      <DaisyPricing></DaisyPricing>

      <MarkChart></MarkChart>
     </main>
    </>
  )
}

export default App
