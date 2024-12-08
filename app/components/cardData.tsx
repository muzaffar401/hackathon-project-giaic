"use client";

import React, { useState } from "react";

const SHOES = () => {
    const shoes = [
        {
            id: 1,
            name: "Nike Air Max Pulse",
            category: "Women's Shoes",
            price: "₹13,995",
            image: "/shoe1.png",
        },
        {
            id: 2,
            name: "Nike Air Max Pulse",
            category: "Men's Shoes",
            price: "₹13,995",
            image: "/shoe2.png",
        },
        {
            id: 3,
            name: "Nike Air Max 97 SE",
            category: "Men's Shoes",
            price: "₹16,995",
            image: "/shoe3.png",
        },
        {
            id: 4,
            name: "Nike Air Zoom Pegasus 40",
            category: "Women's Shoes",
            price: "₹12,495",
            image: "/shoe4.png",
        },
        {
            id: 5,
            name: "Nike React Infinity Run Flyknit 3",
            category: "Men's Shoes",
            price: "₹14,495",
            image: "/shoe5.png",
        },
        {
            id: 6,
            name: "Nike Revolution 6 Next Nature",
            category: "Men's Shoes",
            price: "₹7,995",
            image: "/shoe6.png",
        },
        {
            id: 7,
            name: "Nike Air Force 1 '07",
            category: "Women's Shoes",
            price: "₹11,495",
            image: "/shoe7.png",
        },
        {
            id: 8,
            name: "Nike Dunk Low Retro",
            category: "Unisex Shoes",
            price: "₹11,995",
            image: "/shoe8.png",
        },
        {
            id: 9,
            name: "Nike Air Max 270",
            category: "Women's Shoes",
            price: "₹15,495",
            image: "/shoe9.png",
        },
        {
            id: 10,
            name: "Nike ZoomX Vaporfly NEXT% 2",
            category: "Men's Shoes",
            price: "₹22,995",
            image: "/shoe10.png",
        },
        {
            id: 11,
            name: "Nike Air VaporMax 2023 Flyknit",
            category: "Women's Shoes",
            price: "₹19,995",
            image: "/shoe11.png",
        },
        {
            id: 12,
            name: "Nike Free Run 5.0 Next Nature",
            category: "Men's Shoes",
            price: "₹10,495",
            image: "/shoe12.png",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % shoes.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? shoes.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="w-full px-2 md:px-[48px] py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Best of Air Max</h2>
                <div className="flex space-x-2">
                    <p className="font-semibold sm:flex items-center justify-center hidden">Shop</p>
                    <button
                        onClick={handlePrev}
                        className="bg-gray-200 text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300 transition duration-200"
                    >
                        &#8592;
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-gray-200 text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300 transition duration-200"
                    >
                        &#8594;
                    </button>
                </div>
            </div>

            <div className="flex overflow-hidden space-x-4">
                {shoes.slice(currentIndex, currentIndex + 3).map((shoe) => (
                    <div key={shoe.id} className="flex-shrink-0 w-full md:w-1/3">
                        <div className="bg-gray-100 rounded-lg p-4">
                            <img
                                src={shoe.image} // Fixed image property
                                alt={shoe.name}
                                className="w-full h-40 object-contain mb-4"
                            />
                            <div className="flex justify-between">
                                <div><h3 className="text-sm font-semibold">{shoe.name}</h3>
                                    <p className="text-sm text-gray-500">{shoe.category}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium">{shoe.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SHOES;
