import React from 'react'
import './BrandGrid.css'
import { apiSlice } from '../features/api/apiSlice'

const BrandGrid = () => {
    const { data: brands = [], error, isLoading } = apiSlice.useGetBrandsQuery()

    // Fallback demo data - restored to strings to match original design if API fails or returns complex objects we want to simplify
    const demoBrands = [
        { name: 'Audi' },
        { name: 'BMW' },
        { name: 'Chevrolet' },
        { name: 'Citroen' },
        { name: 'Ford' },
        { name: 'Honda' },
        { name: 'Hyundai' },
        { name: 'Kia' },
        { name: 'Lexus' },
        { name: 'Mazda' },
        { name: 'Mercedes-Benz' },
        { name: 'Mitsubishi' },
        { name: 'Nissan' },
        { name: 'Renault' },
        { name: 'Skoda' },
        { name: 'Toyota' },
        { name: 'Volkswagen' }
    ]

    // If API returns objects with name, use them. If strings, use them.
    const getBrandName = (brand) => typeof brand === 'string' ? brand : brand.name || brand.title;

    const displayBrands = brands.length > 0 ? brands : demoBrands

    return (
        <section className="brand-section">
            <h2 className="section-title">Catalogs by brand</h2>
            <div className="brand-grid">
                {displayBrands.map((brand, index) => (
                    <div key={index} className="brand-item">
                        <span className="brand-name">{getBrandName(brand)}</span>
                    </div>
                ))}
            </div>
            <a href="#" className="all-brands-link">All brands</a>
        </section>
    )
}

export default BrandGrid
