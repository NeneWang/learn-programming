import * as React from 'react';


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default function Slider({ }) {

    const images = ["../../static/img/2022-05-09-03-30-09.png"]

    // const imagesMap = images.map(image => <img src={"../../static/img/2022-05-25-21-18-45.png".imgPath} width="100%" />)

    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1
                    <img src="../../static/img/2022-05-09-03-30-09.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>
        </>
    )

}


