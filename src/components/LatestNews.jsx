import React from 'react'
import { ArrowRight } from 'lucide-react'
import './LatestNews.css'
import { apiSlice } from '../features/api/apiSlice'

const LatestNews = () => {
    const { data: newsData = [], error, isLoading } = apiSlice.useGetNewsQuery()

    const demoNews = [
        {
            date: '04.02.2026',
            title: 'Parts.Resource 6.69. New level of online sales',
            excerpt: 'New Parts.Resource 6.69 is on the go!'
        },
        {
            date: '04.02.2026',
            title: 'Tradesoft Rebranding: Ready-Set-Go!',
            excerpt: 'HOT NEWS! Tradesoft launches a rebranding campaign: a new unique ecosystem...'
        },
        {
            date: '04.02.2026',
            title: 'New Release: AutoResource 6.65! What\'s new in this release?',
            excerpt: 'New Release: AutoResource 6.65! What\'s new in this release?'
        }
    ]

    const displayNews = newsData.length > 0 ? newsData : demoNews

    return (
        <section className="news-section">
            <h2 className="section-title">LATEST NEWS</h2>
            <div className="news-grid">
                {displayNews.map((item, index) => (
                    <div key={index} className="news-item">
                        <div className="news-date">{item.date}</div>
                        <h3 className="news-title">{item.title}</h3>
                        <p className="news-excerpt">{item.excerpt}</p>
                    </div>
                ))}
            </div>
            <a href="#" className="all-news-link">All news</a>
        </section>
    )
}

export default LatestNews
