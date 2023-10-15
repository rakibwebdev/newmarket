import { useGetProductQuery } from "@/api/api";
import Banner from "@/component/banner";
import Breadcrumb from "@/component/breadcrumb";
import Sidebar from "@/component/shop/sidebar";
import ProductCard from "@/component/shop/product";
import Topnav from "@/component/shop/topnav";

export default function Shop(){
    // const {data} = useGetProductQuery();
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

    return(
        <main className="main">
            <Banner pageTitle="Shop" bannerTitle="This is a default shop page" url="/images/page-header-bg.jpg"/>
            <Breadcrumb breadcrumbList={["Home","Shop"]}/>
            <div className="page-content">
                <div className="container">
                	<div className="row">
                		<div className="col-lg-9">
                			
                            <Topnav totalProduct={dummyProduct.length.toString()}/>

                            <div className="products mb-3">
                                <div className="row justify-content-center">
                                    {dummyProduct.map((product, index) => {
                                        return (
                                            <ProductCard key={index} product={product} slider={false}/>
                                        )
                                    })}
                                </div>
                            </div>
                		</div>
                		<Sidebar />
                	</div>
                </div>
            </div>
        </main>
    )
}