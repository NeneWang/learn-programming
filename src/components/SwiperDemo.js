import * as React from 'react';


import { Swiper, SwiperSlide, Block, BlockTitle } from 'swiper/react';
// import { Page, Navbar, BlockTitle, Swiper, SwiperSlide, Block } from 'framework7-react';

import 'swiper/css';

export default function SwiperDemo({ }) {

    const images = [{ image: require("../../static/img/2022-05-09-03-30-09.png") },
    { image: require("../../static/img/2022-05-26-18-57-55.png") }

    ]

    // const imagesMap = images.map(image => <img src={"../../static/img/2022-05-25-21-18-45.png".imgPath} width="100%" />)

    // const images = [
    //     { image: require("./img/1.jpg") },
    //     { image: require("./img/2.jpg") },
    //     { image: require("./img/3.jpg") },
    // ];


    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    {/* <img className="swiper-image" src="../../static/img/2022-05-09-03-30-09.png" alt="" /> */}
                    <img className="swiper-image" src={images[1].image} />
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>

            <Swiper pagination navigation scrollbar>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>

        </>
    )

}


