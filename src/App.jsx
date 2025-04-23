
import './App.css'
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
     </main>
    </>
  )
}

export default App
