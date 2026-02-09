import React from 'react'
import { MapPin, Phone, Settings, Search, User, ShoppingCart, Menu, Box } from 'lucide-react'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="header-location">
                        <MapPin size={14} />
                        <span>London, Baker Street, 221b</span>
                    </div>
                    <div className="header-contact">
                        <span style={{ marginRight: '20px' }}><Phone size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} /> 1 111 111-11-11</span>
                        <span>$ USD</span>
                    </div>
                </div>
            </div>

            <div className="header-main">
                <div className="container">
                    <div className="logo">
                        <Box size={28} className="logo-highlight" />
                        <span>Parts<span className="logo-highlight">.</span>Resource</span>
                    </div>

                    <div className="search-bar">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search by part number, brand, or name"
                        />
                        <div className="search-actions">
                            <label className="interchanges-label">
                                <input type="checkbox" /> Interchanges
                            </label>
                            <button className="search-button">
                                <Search size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="header-actions">
                        <div className="action-item">
                            <User size={24} />
                            <span>Log in</span>
                        </div>
                        <div className="action-item">
                            <ShoppingCart size={24} />
                            <span className="cart-count">0</span>
                            <span>Cart</span>
                        </div>
                        <div className="menu-trigger">
                            <Menu size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
