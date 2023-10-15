'use client'

import { getTimeAgo } from "@/helper/helper";
import { Review } from "@/helper/type";
import { useState } from "react";
type productDetailsTabProps = {
    description: string,
    information: string,
    shippingInfo: string,
    reviews: Review[],
}

const ProductDetailTab = ({description,information,shippingInfo,reviews}:productDetailsTabProps) => {
    const [activeTab, setActiveTab] = useState('product-desc-tab');
    const handleTabClick = (tabId:string) => {
        setActiveTab(tabId);
    };
    return(
        <div className="product-details-tab product-details-extended">
            
            <div className="container">
                <ul className="nav nav-pills justify-content-center" role="tablist">
                    <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === 'product-desc-tab' ? 'active' : ''}`}
                        onClick={() => handleTabClick('product-desc-tab')}
                    >
                        Description
                    </a>
                    </li>
                    <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === 'product-info-tab' ? 'active' : ''}`}
                        onClick={() => handleTabClick('product-info-tab')}
                    >
                        Additional information
                    </a>
                    </li>
                    <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === 'product-shipping-tab' ? 'active' : ''}`}
                        onClick={() => handleTabClick('product-shipping-tab')}
                    >
                        Shipping & Returns
                    </a>
                    </li>
                    <li className="nav-item">
                    <a
                        className={`nav-link ${activeTab === 'product-review-tab' ? 'active' : ''}`}
                        onClick={() => handleTabClick('product-review-tab')}
                    >
                        Reviews (2)
                    </a>
                    </li>
                </ul>
            </div>

            <div className="tab-content">
                <div className={`tab-pane fade ${activeTab === 'product-desc-tab' ? 'show active' : ''}`} id="product-desc-tab" role="tabpanel" aria-labelledby="product-desc-link">
                    <div className="product-desc-content">
                        <div className="product-desc-row bg-image">
                            <div className="container">
                                <div className="row justify-content-end">
                                    <div className="col-sm-12 col-lg-12">
                                        <h2>Product Information</h2>
                                        {description}
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
                <div className={`tab-pane fade ${activeTab === 'product-info-tab' ? 'show active' : ''}`} id="product-info-tab" role="tabpanel" aria-labelledby="product-info-link">
                    <div className="product-desc-content">
                        <div className="container">
                            <h3>Information</h3>
                            {information}
                        </div>
                    </div>
                </div>
                <div className={`tab-pane fade ${activeTab === 'product-shipping-tab' ? 'show active' : ''}`} id="product-shipping-tab" role="tabpanel" aria-labelledby="product-shipping-link">
                    <div className="product-desc-content">
                        <div className="container">
                            <h3>Delivery & returns</h3>
                            {shippingInfo}
                        </div>
                    </div>
                </div>
                <div className={`tab-pane fade ${activeTab === 'product-review-tab' ? 'show active' : ''}`} id="product-review-tab" role="tabpanel" aria-labelledby="product-review-link">
                    <div className="reviews">
                        <div className="container">
                            <h3>Reviews ({reviews.length.toString()})</h3>
                            {reviews.map((review) => (
                                <div className="review">
                                    <div className="row no-gutters">
                                        <div className="col-auto">
                                            <h4><a href="#">{review.name}</a></h4>
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={{ width: `${review.rating * 20}%` }}></div>
                                                </div>
                                            </div>
                                            <span className="review-date">{getTimeAgo(review.date)}</span>
                                        </div>
                                        <div className="col">
                                            <h4>{review.title}</h4>

                                            <div className="review-content">
                                                <p>{review.content}</p>
                                            </div>

                                            <div className="review-action">
                                                <a href="#"><i className="icon-thumbs-up"></i>Helpful (2)</a>
                                                <a href="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailTab;