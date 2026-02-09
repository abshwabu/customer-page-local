import React from 'react'
import { MapPin, ShoppingCart, User, ChevronRight, Menu } from 'lucide-react'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="logo-container">
                    <div className="logo-icon">F</div>
                    <span className="logo-text">parts.resource</span>
                </div>
            </div>

            <div className="sidebar-location">
                <MapPin size={16} className="location-icon" />
                <span className="location-text">London, Baker Street 221B...</span>
                <ChevronRight size={14} className="location-arrow" />
            </div>

            <div className="sidebar-actions">
                <div className="sidebar-action-item">
                    <ShoppingCart size={18} />
                    <span>CART</span>
                </div>
                <div className="sidebar-action-item">
                    <User size={18} />
                    <span>LOG IN</span>
                </div>
            </div>

            <nav className="sidebar-nav">
                <ul>
                    <li className="nav-item">
                        <span>Catalogs</span>
                        <ChevronRight size={14} />
                    </li>
                    <li className="nav-item">
                        <span>For new clients</span>
                        <ChevronRight size={14} />
                    </li>
                    <li className="nav-item">
                        <span>Payment</span>
                    </li>
                    <li className="nav-item">
                        <span>Delivery</span>
                    </li>
                    <li className="nav-item">
                        <span>Contact data</span>
                    </li>
                    <li className="nav-item">
                        <span>News</span>
                    </li>
                    <li className="nav-item">
                        <span>Question-answer</span>
                    </li>
                    <li className="nav-item">
                        <span>Feedback</span>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar
