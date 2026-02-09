import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-copyright">
                        &copy; 2024 Parts.Resource Demo. All rights reserved.
                    </div>
                    <div className="footer-links">
                        <span className="footer-link">Privacy Policy</span>
                        <span className="footer-link">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
