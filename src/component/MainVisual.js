import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";

const MAIN = [
    { id: 1, link: "/" },
    { id: 2, link: "/" },
    { id: 3, link: "/" }
]

const MainVisual = () => {
    const [num, setNum] = useState();
    const MS = useRef(null);
    return (
        <section className='MainVisual'>
            <Swiper className='Mainslide'
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                onSlideChange={it => setNum(it.realIndex)}
                ref={MS}
            >
                {
                    MAIN.map((mv, idx) => {
                        return (
                            <SwiperSlide>
                                <li key={mv.id}>
                                    <a>
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/mainvisual0${idx + 1}.png`} alt="" />
                                    </a>
                                </li>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className='dots'>
                {
                    MAIN.map((dot, idx) => {
                        return (
                            <li className={num === idx && 'on'} onClick={() => { MS.current.swiper.slideTo(idx + 1) }}></li>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default MainVisual;