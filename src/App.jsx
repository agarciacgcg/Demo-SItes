import { useState } from 'react'
import ElegantHeroSection from '/public/components/hero'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  // Simulate loading state
  setTimeout(() => {
    setIsLoaded(true)
  }, 1000) // Adjust the delay as needed

  return (
    <div className="min-h-screen flex flex-col">
      <ElegantHeroSection isLoaded={isLoaded} />
    </div>
  )
}
export default App