'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../shop/product';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Product } from '@/helper/type';

const RelatedProduct = ({relatedProduct}:any) => {
    return (
        <div className="container">
            <h2 className="title text-center mb-4">You May Also Like</h2>
            <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    pagination={{ clickable: false }}
                    scrollbar={{ draggable: false }}
                >
                    {relatedProduct.map((product:Product, index:number) => {
                        return (
                            <SwiperSlide key={index}>
                                <ProductCard product={product} slider={true}/>
                            </SwiperSlide>  
                        )
                    })}
                </Swiper>
        </div>
    )
}

export default RelatedProduct