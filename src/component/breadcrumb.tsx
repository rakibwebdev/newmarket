import React from 'react'
interface BannerProps {
    breadcrumbList: string[];
}
const Breadcrumb: React.FC<BannerProps> = ({ breadcrumbList }) => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
        <div className="container">
            <ol className="breadcrumb">
                {breadcrumbList.map((item, index) => (
                    <li className={`breadcrumb-item ${index === breadcrumbList.length - 1 ? 'active' : ''}`} key={index}>
                        {index === breadcrumbList.length - 1 ? (
                            <span>{item}</span>
                        ) : (
                            <a href="/">{item}</a>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    </nav>
  )
}
export default Breadcrumb