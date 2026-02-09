import React from 'react'
import { ArrowRight } from 'lucide-react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">PARTS.RESOURCE: DEMO-VERSION</h1>
                <a href="#" className="hero-link">
                    More about the store <ArrowRight size={14} />
                </a>
            </div>
        </section>
    )
}

export default Hero
