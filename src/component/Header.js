import React from 'react'
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import 'swiper/css';

const BANNER = [
    { id: 1, des: "[EVENT] 향수 50ml 구매 시, 파우치 선착순 증정" },
    { id: 2, des: "SW19 카카오 채널 추가 시, 5% 추가 할인" },
]

const Header = () => {
    return (
        <header className='Header'>
            <div className='banner'>
                <ul>
                    <Swiper
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >
                        {
                            BANNER.map((index, idx) => {
                                return (
                                    <SwiperSlide>
                                        <li className='des'>{index.des}</li>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </ul>
            </div>
            <div className='menu'>
                <h1>
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" />
                    </Link>
                </h1>
                <nav>
                    <NavMenu />
                </nav>
            </div>
        </header>
    )
}

export default Header