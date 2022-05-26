import * as React from 'react';


import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css";

import 'swiper/css';

export default function Slider({ }) {

    // const images = ["../../static/img/2022-05-09-03-30-09.png"]
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    // const imagesMap = images.map(image => <img src={"../../static/img/2022-05-25-21-18-45.png".imgPath} width="100%" />)

    return (
        <>
            <ImageGallery items={images} />
        </>
    )

}


