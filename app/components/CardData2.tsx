"use client";

import React, { useState } from "react";

const GearUp = () => {
    const mens = [
        {
            id: 201,
            name: "Nike Dri-FIT ADV TechKnit Ultra",
            category: "Men's Short-Sleeve Running Top",
            price: "₹3895",
            image: "/men1.png",
        },
        {
            id: 202,
            name: "Nike Dri-FIT Challenger",
            category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
            price: "₹2495",
            image: "/men2.png",
        },
        {
            id: 203,
            name: "Nike Dri-FIT ADV TechKnit Ultra",
            category: "Men's Short-Sleeve Running Top",
            price: "₹3895",
            image: "/men3.png",
        },
        {
            id: 204,
            name: "Nike Dri-FIT Challenger",
            category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
            price: "₹2495",
            image: "/men4.png",
        },
        {
            id: 205,
            name: "Nike Dri-FIT ADV TechKnit Ultra",
            category: "Men's Short-Sleeve Running Top",
            price: "₹3895",
            image: "/men5.png",
        },
        {
            id: 206,
            name: "Nike Dri-FIT Challenger",
            category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
            price: "₹2495",
            image: "/men6.png",
        },
        {
            id: 207,
            name: "Nike Dri-FIT ADV TechKnit Ultra",
            category: "Men's Short-Sleeve Running Top",
            price: "₹3895",
            image: "/men7.png",
        },
        {
            id: 208,
            name: "Nike Dri-FIT Challenger",
            category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
            price: "₹2495",
            image: "/men8.png",
        },
        {
            id: 209,
            name: "Nike Dri-FIT ADV TechKnit Ultra",
            category: "Men's Short-Sleeve Running Top",
            price: "₹3895",
            image: "/men1.png",
        },
        {
            id: 210,
            name: "Nike Dri-FIT Challenger",
            category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
            price: "₹2495",
            image: "/men2.png",
        },
        {
            id: 211,
            name: "Nike Dri-FIT ADV TechKnit Ultra",
            category: "Men's Short-Sleeve Running Top",
            price: "₹3895",
            image: "/men3.png",
        },
        {
            id: 212,
            name: "Nike Dri-FIT Challenger",
            category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
            price: "₹2495",
            image: "/men4.png",
        },
        {
            id: 213,
            name: "Nike Dri-FIT ADV TechKnit Ultra",
            category: "Men's Short-Sleeve Running Top",
            price: "₹3895",
            image: "/men5.png",
        },
        {
            id: 214,
            name: "Nike Dri-FIT Challenger",
            category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
            price: "₹2495",
            image: "/men6.png",
        },
        {
            id: 215,
            name: "Nike Dri-FIT ADV TechKnit Ultra",
            category: "Men's Short-Sleeve Running Top",
            price: "₹3895",
            image: "/men7.png",
        },
        {
            id: 216,
            name: "Nike Dri-FIT Challenger",
            category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
            price: "₹2495",
            image: "/men8.png",
        },
        {
            id: 217,
            name: "Nike Dri-FIT ADV TechKnit Ultra",
            category: "Men's Short-Sleeve Running Top",
            price: "₹3895",
            image: "/men1.png",
        },
        {
            id: 218,
            name: "Nike Dri-FIT Challenger",
            category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
            price: "₹2495",
            image: "/men2.png",
        },
        {
            id: 219,
            name: "Nike Dri-FIT ADV TechKnit Ultra",
            category: "Men's Short-Sleeve Running Top",
            price: "₹3895",
            image: "/men3.png",
        },
        {
            id: 220,
            name: "Nike Dri-FIT Challenger",
            category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
            price: "₹2495",
            image: "/men4.png",
        },
        {
            id: 221,
            name: "Nike Dri-FIT ADV TechKnit Ultra",
            category: "Men's Short-Sleeve Running Top",
            price: "₹3895",
            image: "/men5.png",
        },
        {
            id: 222,
            name: "Nike Dri-FIT Challenger",
            category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
            price: "₹2495",
            image: "/men6.png",
        },
        {
            id: 223,
            name: "Nike Dri-FIT ADV TechKnit Ultra",
            category: "Men's Short-Sleeve Running Top",
            price: "₹3895",
            image: "/men7.png",
        },
        {
            id: 224,
            name: "Nike Dri-FIT Challenger",
            category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
            price: "₹2495",
            image: "/men8.png",
        },
    ];

    const womens = [
        {
            id: 101,
            name: "Nike Dri-FIT ADV Run Division",
            category: "Women's Long-Sleeve Running Top",
            price: "₹5295",
            image: "/women1.png",
        },
        {
            id: 102,
            name: "Nike Fast",
            category: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
            price: "₹3795",
            image: "/women2.png",
        },
        {
            id: 103,
            name: "Nike Dri-FIT ADV Run Division",
            category: "Women's Long-Sleeve Running Top",
            price: "₹5295",
            image: "/women3.png",
        },
        {
            id: 104,
            name: "Nike Fast",
            category: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
            price: "₹3795",
            image: "/women4.png",
        },
        {
            id: 105,
            name: "Nike Dri-FIT ADV Run Division",
            category: "Women's Long-Sleeve Running Top",
            price: "₹5295",
            image: "/women5.png",
        },
        {
            id: 106,
            name: "Nike Fast",
            category: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
            price: "₹3795",
            image: "/women6.png",
        },
        {
            id: 107,
            name: "Nike Dri-FIT ADV Run Division",
            category: "Women's Long-Sleeve Running Top",
            price: "₹5295",
            image: "/women7.png",
        },
        {
            id: 108,
            name: "Nike Fast",
            category: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
            price: "₹3795",
            image: "/women1.png",
        },
        {
            id: 109,
            name: "Nike Dri-FIT ADV Run Division",
            category: "Women's Long-Sleeve Running Top",
            price: "₹5295",
            image: "/women1.png",
        },
        {
            id: 110,
            name: "Nike Fast",
            category: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
            price: "₹3795",
            image: "/women2.png",
        },
        {
            id: 111,
            name: "Nike Dri-FIT ADV Run Division",
            category: "Women's Long-Sleeve Running Top",
            price: "₹5295",
            image: "/women3.png",
        },
        {
            id: 112,
            name: "Nike Fast",
            category: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
            price: "₹3795",
            image: "/women4.png",
        },
        {
            id: 113,
            name: "Nike Dri-FIT ADV Run Division",
            category: "Women's Long-Sleeve Running Top",
            price: "₹5295",
            image: "/women5.png",
        },
        {
            id: 114,
            name: "Nike Fast",
            category: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
            price: "₹3795",
            image: "/women6.png",
        },
        {
            id: 115,
            name: "Nike Dri-FIT ADV Run Division",
            category: "Women's Long-Sleeve Running Top",
            price: "₹5295",
            image: "/women7.png",
        },
        {
            id: 116,
            name: "Nike Fast",
            category: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
            price: "₹3795",
            image: "/women1.png",
        },
        {
            id: 117,
            name: "Nike Dri-FIT ADV Run Division",
            category: "Women's Long-Sleeve Running Top",
            price: "₹5295",
            image: "/women1.png",
        },
        {
            id: 118,
            name: "Nike Fast",
            category: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
            price: "₹3795",
            image: "/women2.png",
        },
        {
            id: 119,
            name: "Nike Dri-FIT ADV Run Division",
            category: "Women's Long-Sleeve Running Top",
            price: "₹5295",
            image: "/women3.png",
        },
        {
            id: 120,
            name: "Nike Fast",
            category: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
            price: "₹3795",
            image: "/women4.png",
        },
        {
            id: 121,
            name: "Nike Dri-FIT ADV Run Division",
            category: "Women's Long-Sleeve Running Top",
            price: "₹5295",
            image: "/women5.png",
        },
        {
            id: 122,
            name: "Nike Fast",
            category: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
            price: "₹3795",
            image: "/women6.png",
        },
        {
            id: 123,
            name: "Nike Dri-FIT ADV Run Division",
            category: "Women's Long-Sleeve Running Top",
            price: "₹5295",
            image: "/women7.png",
        },
        {
            id: 124,
            name: "Nike Fast",
            category: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
            price: "₹3795",
            image: "/women1.png",
        },
    ];

    const [currentIndex1, setCurrentIndex1] = useState(0);

    const [currentIndex2, setCurrentIndex2] = useState(0);


    const MenhandleNext = () => {
        setCurrentIndex1((prevIndex1) => (prevIndex1 + 1) % mens.length);
    };

    const MenhandlePrev = () => {
        setCurrentIndex1((prevIndex1) =>
            prevIndex1 === 0 ? mens.length - 1 : prevIndex1 - 1
        );
    };

    const WomenhandleNext = () => {
        setCurrentIndex2((prevIndex2) => (prevIndex2 + 1) % womens.length);
    };

    const WomenhandlePrev = () => {
        setCurrentIndex2((prevIndex2) =>
            prevIndex2 === 0 ? womens.length - 1 : prevIndex2 - 1
        );
    };

    return (
        <>
            <div className="px-2 md:px-[48px]">
                <h1 className='text-start font-semibold py-3 text-[23px]'>Gear Up</h1>

            </div>
            <div className="w-full block lg:flex justify-between px-2 md:px-[80px] py-8 space-x-0 lg:space-x-10">

                <div>
                    <div className="flex items-center justify-center lg:items-end lg:justify-end mb-6">
                        <div className="flex space-x-2">
                            <p className="font-semibold sm:flex items-center justify-center hidden">Shop Men`s</p>
                            <button
                                onClick={MenhandlePrev}
                                className="bg-gray-200 text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300 transition duration-200"
                            >
                                &#8592;
                            </button>
                            <button
                                onClick={MenhandleNext}
                                className="bg-gray-200 text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300 transition duration-200"
                            >
                                &#8594;
                            </button>
                        </div>
                    </div>

                    <div className="flex overflow-hidden space-x-4">
                        {mens.slice(currentIndex1, currentIndex1 + 2).map((men) => (
                            <div key={men.id} className="flex-shrink-0 w-full sm:w-1/2">
                                <div className="bg-gray-100 rounded-lg p-4 h-[280px]">
                                    <img
                                        src={men.image} // Fixed image property
                                        alt={men.name}
                                        className="w-full h-40 object-contain mb-4"
                                    />
                                    <div className="flex justify-between">
                                        <div><h3 className="text-sm font-semibold">{men.name}</h3>
                                            <p className="text-sm text-gray-500">{men.category}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">{men.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-center lg:items-end lg:justify-end mb-6 mt-10 lg:mt-0">
                        <div className="flex space-x-2">
                            <p className="font-semibold sm:flex items-center justify-center hidden">Shop Women`s</p>
                            <button
                                onClick={WomenhandlePrev}
                                className="bg-gray-200 text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300 transition duration-200"
                            >
                                &#8592;
                            </button>
                            <button
                                onClick={WomenhandleNext}
                                className="bg-gray-200 text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300 transition duration-200"
                            >
                                &#8594;
                            </button>
                        </div>
                    </div>

                    <div className="flex overflow-hidden space-x-4">
                        {womens.slice(currentIndex2, currentIndex2 + 2).map((women) => (
                            <div key={women.id} className="flex-shrink-0 w-full sm:w-1/2">
                                <div className="bg-gray-100 rounded-lg p-4 h-[280px]">
                                    <img
                                        src={women.image} // Fixed image property
                                        alt={women.name}
                                        className="w-full h-40 object-contain mb-4"
                                    />
                                    <div className="flex justify-between">
                                        <div><h3 className="text-sm font-semibold">{women.name}</h3>
                                            <p className="text-sm text-gray-500">{women.category}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">{women.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default GearUp;
