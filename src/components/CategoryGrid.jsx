import React from 'react'
import './CategoryGrid.css'
import { ArrowRight } from 'lucide-react'
import { apiSlice } from '../features/api/apiSlice'

const CategoryGrid = () => {
    const { data: categories = [], error, isLoading } = apiSlice.useGetCategoriesQuery()

    // Fallback/Demo data if API is not ready or returns empty
    const demoCategories = [
        { id: 'oils', name: 'Oils', count: '7687 of goods', image: 'https://cdn-icons-png.flaticon.com/512/2362/2362141.png', span: 1 },
        { id: 'glass', name: 'Car glass', count: '9105 of goods', image: 'https://cdn-icons-png.flaticon.com/512/3063/3063085.png', span: 1 },
        { id: 'tyres', name: 'Tyres and wheels', count: '', image: '', span: 1 },
        { id: 'battery', name: 'Car batteries', count: '3555 of goods', image: 'https://cdn-icons-png.flaticon.com/512/2555/2555173.png', span: 1 },
        { id: 'maint', name: 'Maintenance parts', count: '16434 of goods', image: 'https://cdn-icons-png.flaticon.com/512/3209/3209968.png', span: 2 },
        { id: 'acc', name: 'Accessories', count: '52682 of goods', image: '', span: 1 },
        { id: 'audio', name: 'Car audio system', count: 'Car stereo', isList: true, span: 1 },
    ]

    // Use API data if available, otherwise use demo
    if (isLoading) return <div className="p-10 text-center">Loading categories...</div>
    if (error) {
        console.error("Failed to load categories", error)
        // Fallback to demo data on error for now
    }

    const displayCategories = categories.length > 0 ? categories : demoCategories

    // Safety check for displayCategories length to avoid index errors if empty
    const getCat = (idx) => displayCategories[idx] || demoCategories[idx] || {}

    return (
        <section className="category-section">
            <div className="mosaic-grid">
                <div className="mosaic-item white-bg">
                    <div className="hero-content-inline">
                        <h1 className="hero-title">PARTS.RESOURCE: DEMO-VERSION</h1>
                        <a href="#" className="hero-link">
                            More about the store <ArrowRight size={14} />
                        </a>
                    </div>
                </div>

                <div className="mosaic-item">
                    <div className="cat-info">
                        <div className="cat-name">{getCat(0).name}</div>
                        <div className="cat-count">{getCat(0).count}</div>
                    </div>
                    <img src={getCat(0).image || "https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?w=500&auto=format&fit=crop&q=60"} alt="Oils" className="cat-image" />
                </div>

                <div className="mosaic-item">
                    <div className="cat-info">
                        <div className="cat-name">{getCat(1).name}</div>
                        <div className="cat-count">{getCat(1).count}</div>
                    </div>
                    <img src={getCat(1).image || "https://images.unsplash.com/photo-1552176625-e47ff529b595?w=500&auto=format&fit=crop&q=60"} alt="Glass" className="cat-image" />
                </div>

                <div className="mosaic-item">
                    <div className="cat-info">
                        <div className="cat-name">{getCat(2).name}</div>
                    </div>
                </div>

                <div className="mosaic-item">
                    <div className="cat-info">
                        <div className="cat-name">{getCat(3).name}</div>
                        <div className="cat-count">{getCat(3).count}</div>
                    </div>
                    <img src={getCat(3).image || "https://images.unsplash.com/photo-1619641219800-4cb50c9509ee?w=500&auto=format&fit=crop&q=60"} alt="Battery" className="cat-image" />
                </div>

                <div className="mosaic-item span-2">
                    <div className="cat-info">
                        <div className="cat-name">{getCat(4).name}</div>
                        <div className="cat-count">{getCat(4).count}</div>
                    </div>
                    <img src={getCat(4).image || "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=500&auto=format&fit=crop&q=60"} alt="Maintenance" className="cat-image" />
                </div>

                <div className="mosaic-item">
                    <div className="cat-info">
                        <div className="cat-name">{getCat(5).name}</div>
                        <div className="cat-count">{getCat(5).count}</div>
                    </div>
                </div>

                <div className="mosaic-item span-1" style={{ backgroundColor: '#f8f9fa', color: '#2563eb' }}>
                    <ul style={{ padding: '20px', fontSize: '14px' }}>
                        <li style={{ marginBottom: '10px', cursor: 'pointer' }}>Car audio system</li>
                        <li style={{ cursor: 'pointer' }}>Car stereo</li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default CategoryGrid
