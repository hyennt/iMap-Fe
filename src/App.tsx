import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Ticker from './components/sections/Ticker'
import Ecosystem from './components/sections/Ecosystem'
import Pipeline from './components/sections/Pipeline'
import Features from './components/sections/Features'
import Certification from './components/sections/Certification'
import CTA from './components/sections/CTA'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <Ecosystem />
      <Pipeline />
      <Features />
      <Certification />
      <CTA />
      <Footer />
    </>
  )
}

export default App