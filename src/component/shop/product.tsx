import { Product } from "@/helper/type";

type productProps = {
    product: Product;
    slider: boolean;

}

const ProductCard = ({ product,slider }: productProps) => {
    return(
        <div className={slider ? '' : "col-6 col-md-4 col-lg-4 col-xl-3"}>
            <div className="product product-7 text-center">
                <figure className="product-media">
                    <span className="product-label label-new">{product.tag.toUpperCase()}</span>
                    <a href={`/product/${product.id}`}>
                        <img src={product.image} alt="Product image" className="product-image"/>
                    </a>

                    <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                    </div>

                    <div className="product-action">
                        <a href={`/cart/${product.id}`} className="btn-product btn-cart"><span>add to cart</span></a>
                    </div>
                </figure>

                <div className="product-body">
                    <div className="product-cat">
                        {product.category.map((cat, index) => {
                            if (index === product.category.length - 1) {
                                return <a href="#" key={index}>{cat}</a>
                            } else {
                                return <a href="#" key={index}>{cat}, </a>
                            }
                        })}
                        
                    </div>
                    <h3 className="product-title"><a href={`/product/${product.id}`}>{product.name}</a></h3>
                    <div className="product-price">
                        ${product.price}
                    </div>
                    <div className="ratings-container">
                        <div className="ratings">
                            <div className="ratings-val" style={{width:'20%'}}></div>
                        </div>
                        <span className="ratings-text">( 2 Reviews )</span>
                    </div>

                    <div className="product-nav product-nav-thumbs">
                        <a href="#" className="active">
                            <img src="assets/images/products/product-4-thumb.jpg" alt="product desc"/>
                        </a>
                        <a href="#">
                            <img src="assets/images/products/product-4-2-thumb.jpg" alt="product desc"/>
                        </a>

                        <a href="#">
                            <img src="assets/images/products/product-4-3-thumb.jpg" alt="product desc"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;