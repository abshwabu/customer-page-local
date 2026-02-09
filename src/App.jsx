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
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
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
