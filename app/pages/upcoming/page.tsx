import Link from 'next/link';
import React from 'react';

const page = () => {
    // Image data stored in an array of objects
    const imageData = [
        { src: '/card147.webp', alt: 'Frame 147' },
        { src: '/card148.webp', alt: 'Frame 148' },
        { src: '/card149.webp', alt: 'Frame 149' },
        { src: '/card150.webp', alt: 'Frame 150' },
        { src: '/card151.webp', alt: 'Frame 151' },
        { src: '/card152.webp', alt: 'Frame 152' },
        { src: '/card153.webp', alt: 'Frame 153' },
        { src: '/card154.webp', alt: 'Frame 154' }
    ];




    return (
        <div className="bg-white min-h-screen font-sans p-4 sm:p-8 md:p-16">
            <header className="border-b">
                <div className="flex justify-between items-center px-4 py-2 sm:px-8 sm:py-4">
                    <a href="#" className="text-gray-500 text-sm sm:text-base">
                        &lt; Visit Nike.com
                    </a>
                    <div className="flex items-center gap-4">
                        <a href="/seccompo/first" className="text-gray-500">
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            <span className="sr-only">Cart</span>
                        </a>
                        <a href="/seccompo/map" className="text-gray-500">
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                ></path>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                ></path>
                            </svg>
                            <span className="sr-only">Location</span>
                        </a>
                        <a href="#" className="text-gray-500">
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect x="3" y="3" width="7" height="7"></rect>
                                <rect x="14" y="3" width="7" height="7"></rect>
                                <rect x="14" y="14" width="7" height="7"></rect>
                                <rect x="3" y="14" width="7" height="7"></rect>
                            </svg>
                            <span className="sr-only">Grid</span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center text-red-500">
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        role="img"
                        viewBox="0 0 24 24"
                        height="50"
                        width="50"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z"></path>
                    </svg>
                    <div className="text-red-500 font-bold text-2xl sm:text-3xl">SNKERS</div>
                </div>
                <nav className="flex justify-center gap-8 text-sm font-medium border-t pt-2">
                    <a href="feed" className="hover:text-black text-gray-500">
                        Feed
                    </a>
                    <a href="kid" className="hover:text-black text-gray-500 md:underline">
                        In Stock
                    </a>
                    <a href="#" className="hover:text-black text-gray-500">
                        Upcoming
                    </a>
                </nav>
            </header>

            <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 sm:p-6 md:p-8">
                {imageData.map((image, index) => (
                    <Link href={'items'}>
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-md h-full  w-full">
                            <img
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                src={image.src}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-white text-red-500 font-bold py-2 px-4 rounded">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </Link>
                ))}
            </main>
            <footer className="text-center py-4 border-t">
                <p className="text-sm text-gray-500">© 2024 SNKRS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default page;
