import React from "react";
import "./topBrands.css";
import Slider from "react-slick";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";

const topBrandsList = [
    {
        id: 1,
        time: "25 min",
        cover:
           "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188142.png?output-format=webp",
    },
    {
        id: 2,
        time: "30 min",
        cover:
           "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604387296.png?output-format=webp",
    },
    {
        id: 3,
        time: "28 min",
        cover:
           "https://b.zmtcdn.com/data/brand_creatives/logos/370c304771298718e899edd29be3d4b4_1605095053.png?output-format=webp",
    },
    {
        id: 4,
        time: "30 min",
        cover:
           "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png?output-format=webp",
    },
    {
        id: 5,
        time: "40 min",
        cover:
           "https://b.zmtcdn.com/data/brand_creatives/logos/f6f779024f5f34469381413bbbddbcbc_1617920260.png?output-format=webp",
    },
    {
        id: 6,
        time: "52 min",
        cover:
           "https://b.zmtcdn.com/data/brand_creatives/logos/bf3a000fa1554839d5e1a415bf85d083_1598856266.png?output-format=webp",
    },
    {
        id: 7,
        time: "29 min",
        cover:
           "https://b.zmtcdn.com/data/brand_creatives/logos/1c69c696c67a0791937fab960a9bdf0a_1611298398.png?output-format=webp",
    },
    {
        id: 8,
        time: "26 min",
        cover:
           "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433322.png?output-format=webp",
    },
    {
        id: 9,
        time: "31 min",
        cover:
           "https://b.zmtcdn.com/data/brand_creatives/logos/c62c886c7d28bbb895407f4a3a4a4e5f_1676961058.png?output-format=webp",
    },
    {
        id: 10,
        time: "37 min",
        cover:
           "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",
    },
];
const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

const TopBrands = () => {
    return (
    <div className="top-brands max-width">
        <div className="collection-title">Top brands for you</div>
        <Slider {...settings}>
            {topBrandsList.map((brand) => {
                return (
                <div>
                    <div className="top-brands-cover">
                        <img
                        src={brand.cover}
                        className="top-brands-image"
                        alt={brand.time}
                        />
                    </div>
                </div>
                );
            })}
        </Slider>
    </div>
    );
};

export default TopBrands;