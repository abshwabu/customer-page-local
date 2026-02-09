import React from 'react'
import { MapPin, ShoppingCart, User, ChevronRight, Menu } from 'lucide-react'
import './Sidebar.css'

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-header">
                <div className="logo-container" onClick={toggleSidebar}>
                    <div className="logo-icon">F</div>
                    {isOpen && <span className="logo-text">parts.resource</span>}
                </div>
            </div>

            

            {isOpen && (
                <div className="sidebar-location">
                    <MapPin size={16} className="location-icon" />
                    <span className="location-text">London, Baker Street 221B...</span>
                    <ChevronRight size={14} className="location-arrow" />
                </div>
            )}

            <div className="sidebar-actions">
                <div className="sidebar-action-item">
                    <ShoppingCart size={20} />
                    {isOpen && <span>CART</span>}
                </div>
                <div className="sidebar-action-item">
                    <User size={20} />
                    {isOpen && <span>LOG IN</span>}
                </div>
            </div>

            <nav className="sidebar-nav">
                <ul>
                    <ul>
                        <li className="nav-item">
                            {isOpen ? <span>Catalogs</span> : ""}
                            {isOpen && <ChevronRight size={14} />}
                        </li>
                        {isOpen && (
                            <>
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
                            </>
                        )}
                        {!isOpen && (
                            <div className="sidebar-vertical-text" onClick={toggleSidebar}>
                                <Menu size={24} className="menu-icon" />
                                <span>Menu</span>
                            </div>
                        )}
                    </ul>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar
