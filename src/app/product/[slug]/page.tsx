import Breadcrumb from "@/component/breadcrumb"
import ProductDetailTab from "@/component/productsingle/productdetailtab"
import ProductDetailTop from "@/component/productsingle/producttop"
import RelatedProduct from "@/component/productsingle/relatedproduct"
import ProductCard from "@/component/shop/product"
import { ProductDetails } from "@/helper/type"

type ProductDetailProps = {
    params: {
        slug: number
    }
}
const ProductDetail = ({ params }: ProductDetailProps) => {
    const dummyProduct = [
        {
            id: 1,
            name: 'Iphone 12 Pro Max',
            price: 1000,
            image: '/images/product-1.jpg',
            amount: 1,
            tag: 'new',
            category: ['Electronics', 'Furniture'],
        },
        {
            id: 2,
            name: 'Galaxy s21 Ultra',
            price: 1300,
            image: '/images/product-2.jpg',
            amount: 2,
            tag: 'new',
            category: ['Electronics', 'Furniture'],
        },
        {
            id: 3,
            name: 'Macbook Pro 2021',
            price: 2000,
            image: '/images/product-3.jpg',
            amount: 3,
            tag: 'new',
            category: ['Electronics', 'Furniture'],
        },
        {
            id: 4,
            name: 'Macbook Pro 2021',
            price: 2000,
            image: '/images/product-4.jpg',
            amount: 3,
            tag: 'new',
            category: ['Electronics', 'Furniture'],
        },
        {
            id: 5,
            name: 'Macbook Pro 2021',
            price: 2000,
            image: '/images/product-5.jpg',
            amount: 3,
            tag: 'new',
            category: ['Electronics', 'Furniture'],
        },
        {
            id: 6,
            name: 'Macbook Pro 2021',
            price: 2000,
            image: '/images/product-6.jpg',
            amount: 3,
            tag: 'new',
            category: ['Electronics', 'Furniture'],
        },
        {
            id: 7,
            name: 'Macbook Pro 2021',
            price: 2000,
            image: '/images/product-7.jpg',
            amount: 3,
            tag: 'new',
            category: ['Electronics', 'Furniture'],
        },
        {
            id: 8,
            name: 'Macbook Pro 2021',
            price: 2000,
            image: '/images/product-8.jpg',
            amount: 3,
            tag: 'new',
            category: ['Electronics', 'Furniture'],
        },
        
    ]
    const productInfo: ProductDetails = {
        id: 1,
        name: 'iPhone 12 Pro Max',
        price: 100,
        image: '/images/product-1.jpg',
        thumbnailImages: ['/images/product-1.jpg', '/images/product-2.jpg', '/images/product-3.jpg', '/images/product-4.jpg'],
        quantity: 10,
        category: ['Apple', 'Samsung'],
        shortDescription: 'This is short description',
        description: 'This is description',
        information: 'This is information',
        shippingInfo: 'This is shiping info',
        reviews: [
            {
                id: 1,
                name: 'John Doe',
                date: '2021-05-20',
                rating: 4,
                content: 'This is comment',
                title: 'This is title',
            },
            {
                id: 2,
                name: 'Samantha',
                date: '2023-10-12',
                rating: 3,
                content: 'This is comment',
                title: 'This is title',
            },
        ],
    }
    
    return (
        
        <main className="main">
            
            <Breadcrumb breadcrumbList={['Home', 'Shop', 'Product Details']}/>

            <div className="page-content">
                <div className="container">
                    <ProductDetailTop id={productInfo.id} name={productInfo.name} price={productInfo.price} image={productInfo.image} quantity={productInfo.quantity} category={productInfo.category} shortDescription={productInfo.shortDescription} reviewCount={Number(productInfo.reviews.length)} reviewRatings={productInfo.reviews.map((review) => review.rating)} thumbnailImages={productInfo.thumbnailImages}/>
                </div>

                <ProductDetailTab description={productInfo.description} information={productInfo.information} shippingInfo={productInfo.shippingInfo} reviews={productInfo.reviews}/>
                <RelatedProduct relatedProduct={dummyProduct} />
            </div>
        </main>
    )
}

export default ProductDetail