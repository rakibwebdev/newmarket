'use client'

import { useState } from "react";

type ProductDetailTopProps = {id:number,name:string,price:number,quantity:number,category:string[], shortDescription:string,image:string,reviewCount: number, reviewRatings: number[], thumbnailImages: string[]}
const ProductDetailTop = ({id,name,price,quantity,category, shortDescription,image,reviewCount,reviewRatings,thumbnailImages}:ProductDetailTopProps) => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const handleQuantity = (e:any) => {
        setSelectedQuantity(parseInt(e.target.value));
    }
    const totalRatings = reviewRatings.length;
    const totalRatingValue = reviewRatings.reduce((acc, rating) => acc + rating, 0);
    const averageRating = totalRatingValue / totalRatings;
    return (
        <div className="product-details-top mb-2">
            <div className="row">
                <div className="col-md-6">
                    <div className="product-gallery">
                        <figure className="product-main-image">
                            <img id="product-zoom" src={image} data-zoom-image="assets/images/products/single/extended/3-big.jpg" alt="product image"/>

                            <a href="#" id="btn-product-gallery" className="btn-product-gallery">
                                <i className="icon-arrows"></i>
                            </a>
                        </figure>

                        <div id="product-zoom-gallery" className="product-image-gallery">
                            
                            {thumbnailImages.map((image, index) =>
                                <a className="product-gallery-item" href="#" data-image={image} data-zoom-image={image} key={index}>
                                    <img src={image} alt="product side"/>
                                </a>
                            )}

                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="product-details">
                        <h1 className="product-title">{name}</h1>

                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={{ width: `${averageRating * 20}%` }}></div>
                            </div>
                            <a className="ratings-text" href="#product-review-link" id="review-link">( {reviewCount} Reviews )</a>
                        </div>

                        <div className="product-price">
                            ${price}
                        </div>

                        <div className="product-content">
                            <p>{shortDescription}</p>
                        </div>

                        <div className="details-filter-row details-row-size">
                            <label>Color:</label>

                            <div className="product-nav product-nav-dots">
                                <a href="#" className="active" style={{background: "#eab656"}}><span className="sr-only">Color name</span></a>
                                <a href="#" style={{background: "#333333"}}><span className="sr-only">Color name</span></a>
                                <a href="#" style={{background: "#3a588b"}}><span className="sr-only">Color name</span></a>
                                <a href="#" style={{background: "#caab97"}}><span className="sr-only">Color name</span></a>
                            </div>
                        </div>

                        <div className="details-filter-row details-row-size">
                            <label htmlFor="size">Size:</label>
                            <div className="select-custom">
                                <select name="size" id="size" className="form-control">
                                    <option value="#" selected>Select a size</option>
                                    <option value="s">Small</option>
                                    <option value="m">Medium</option>
                                    <option value="l">Large</option>
                                    <option value="xl">Extra Large</option>
                                </select>
                            </div>

                            <a href="#" className="size-guide"><i className="icon-th-list"></i>size guide</a>
                        </div>

                        <div className="details-filter-row details-row-size">
                            <label htmlFor="qty">Qty:</label>
                            <div className="product-details-quantity">
                                <input type="number" id="qty" className="form-control" value={selectedQuantity} min="1" max={quantity} step="1" onChange={handleQuantity} required/>
                            </div>
                        </div>

                        <div className="product-details-action">
                            <a href={`/cart/${id}`} className="btn-product btn-cart"><span>add to cart</span></a>

                            <div className="details-action-wrapper">
                                <a href="#" className="btn-product btn-wishlist" title="Wishlist"><span>Add to Wishlist</span></a>
                                <a href="#" className="btn-product btn-compare" title="Compare"><span>Add to Compare</span></a>
                            </div>
                        </div>

                        <div className="product-details-footer">
                            <div className="product-cat">
                                <span>Category:</span>
                                {category.map((cat, index) => {
                                    if (index === category.length - 1) {
                                        return <a href="#" key={index}>{cat}</a>
                                    } else {
                                        return <a href="#" key={index}>{cat}, </a>
                                    }
                                })}
                                
                            </div>

                            <div className="social-icons social-icons-sm">
                                <span className="social-label">Share:</span>
                                <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                <a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetailTop;