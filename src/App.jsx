import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Hero from './components/Hero'
import CategoryGrid from './components/CategoryGrid'
import Features from './components/Features'
import LatestNews from './components/LatestNews'
import BrandGrid from './components/BrandGrid'
import Footer from './components/Footer'
import PopularProducts from './components/PopularProducts'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <TopBar />
        <main>
          <Hero />
          <CategoryGrid />
          <BrandGrid />
          <Features />
          <PopularProducts />
          <LatestNews />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
