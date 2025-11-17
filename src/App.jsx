import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import AlumniNewsCTA from './components/AlumniNewsCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Programs />
        <AlumniNewsCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
