import React from 'react'
import { ShoppingCart, ChevronRight } from 'lucide-react'
import './PopularProducts.css'

const PopularProducts = () => {
    // Static data matching the screenshot
    const products = [
        {
            id: 1,
            name: 'Battery 6CT - 100 Titan Asia Silver - Direct pol. (Titan, ...',
            image: 'https://img.freepik.com/free-photo/car-battery-isolated-white-background_1232-2083.jpg',
            specs: {
                'Part number': '043453',
                'Manufacturer': 'TITAN',
                'Length': '304',
                'Width': '171'
            },
            price: '7 401.00 €',
            action: 'cart'
        },
        {
            id: 2,
            name: 'Battery 6CT - 100 Titan Asia Silver - Direct pol. (Titan, ...',
            image: 'https://img.freepik.com/free-photo/car-battery-isolated_1303-14188.jpg',
            specs: {
                'Part number': '033142',
                'Manufacturer': 'BARS',
                'Length': '524',
                'Width': '239'
            },
            price: '9 424.00 €',
            action: 'cart'
        },
        {
            id: 3,
            name: 'CENTRA CA770',
            image: 'https://img.freepik.com/free-photo/car-battery-cutout_1303-14194.jpg',
            specs: {
                'Part number': 'CA770',
                'Manufacturer': 'CENTRA',
                'Length': '278',
                'Width': '175'
            },
            price: null,
            action: 'learn'
        },
        {
            id: 4,
            name: 'Exide _EB705',
            image: 'https://img.freepik.com/free-vector/car-battery-realistic-composition_1284-26618.jpg',
            specs: {
                'Part number': 'EB705',
                'Manufacturer': 'EXIDE',
                'Length': '270',
                'Width': '173'
            },
            price: null,
            action: 'learn'
        }
    ]

    return (
        <section className="popular-products-section">
            <h2 className="section-title">POPULAR GOODS</h2>
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="product-image-container">
                            <img src={product.image} alt={product.name} className="product-image" />
                        </div>

                        <h3 className="product-name" title={product.name}>{product.name}</h3>

                        <div className="product-specs">
                            {Object.entries(product.specs).map(([key, value]) => (
                                <div key={key} className="spec-row">
                                    <span className="spec-label">{key}</span>
                                    <span className="spec-value">{value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="product-footer">
                            {product.price && <div className="product-price">{product.price}</div>}

                            {product.action === 'cart' ? (
                                <button className="btn-cart">
                                    <ShoppingCart size={16} className="mr-2" />
                                    TO THE CART
                                </button>
                            ) : (
                                <button className="btn-learn">
                                    LEARN THE PRICE
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <button className="view-all-bar">
                View all
            </button>
        </section>
    )
}

export default PopularProducts
