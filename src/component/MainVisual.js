import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const MAIN = [
    { id: 1, link: "/" },
    { id: 2, link: "/" },
    { id: 3, link: "/" }
]

const MainVisual = () => {
    return (
        <section className='MainVisual'>
            <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    MAIN.map((mv, idx) => {
                        return (

                            <SwiperSlide>
                                <figure key={mv.id}>
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/mainvisual0${idx + 1}.png`} alt="" />
                                </figure>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default MainVisual;