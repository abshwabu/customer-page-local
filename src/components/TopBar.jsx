import React from 'react'
import { Search, ChevronDown } from 'lucide-react'
import './TopBar.css'

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for auto parts"
                    className="top-search-input"
                />
            </div>

            <div className="top-actions">
                <label className="interchanges-check">
                    <input type="checkbox" defaultChecked />
                    <span style={{ color: '#2563eb' }}>✓</span>
                    <span>Interchanges</span>
                </label>
                <Search size={20} className="top-search-icon" />

                <div className="top-contact">
                    +372 698 21 77 <ChevronDown size={14} />
                </div>

                <div className="top-lang">
                    English <ChevronDown size={14} />
                </div>
            </div>
        </div>
    )
}

export default TopBar
