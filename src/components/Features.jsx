import React from 'react'
import { Truck, ShieldCheck, Percent } from 'lucide-react'
import './Features.css'

const Features = () => {
    return (
        <section className="features-section">
            <div className="features-grid">
                <div className="feature-item">
                    <Truck size={32} className="feature-icon" />
                    <div className="feature-content">
                        <h3>Fast delivery</h3>
                        <p>We will deliver the goods within 5 days in any convenient way.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <ShieldCheck size={32} className="feature-icon" />
                    <div className="feature-content">
                        <h3>Guarantee</h3>
                        <p>All the goods are only from reliable suppliers.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <Percent size={32} className="feature-icon" />
                    <div className="feature-content">
                        <h3>Discounts</h3>
                        <p>After buying any product, you will get a 5% discount card!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
