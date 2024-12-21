import Link from 'next/link';
import React from 'react';

const page = () => {
    // Image data stored in an array of objects
    const imageData = [
        { src: '/card74.webp', alt: 'Frame 74' },
        { src: '/card75.webp', alt: 'Frame 75' },
        { src: '/card76.webp', alt: 'Frame 76' },
        { src: '/card77.webp', alt: 'Frame 77' },
        { src: '/card78.webp', alt: 'Frame 78' },
        { src: '/card79.webp', alt: 'Frame 79' },
        { src: '/card80.webp', alt: 'Frame 80' },
        { src: '/card81.webp', alt: 'Frame 81' },
        { src: '/card82.webp', alt: 'Frame 82' },
        { src: '/card83.webp', alt: 'Frame 83' },
        { src: '/card84.webp', alt: 'Frame 84' },
        { src: '/card85.webp', alt: 'Frame 85' },
        { src: '/card86.webp', alt: 'Frame 86' },
        { src: '/card87.webp', alt: 'Frame 87' },
        { src: '/card88.webp', alt: 'Frame 88' },
        { src: '/card89.webp', alt: 'Frame 89' },
        { src: '/card90.webp', alt: 'Frame 90' },
        { src: '/card91.webp', alt: 'Frame 91' },
        { src: '/card92.webp', alt: 'Frame 92' },
        { src: '/card93.webp', alt: 'Frame 93' },
        { src: '/card94.webp', alt: 'Frame 94' },
        { src: '/card95.webp', alt: 'Frame 95' },
        { src: '/card96.webp', alt: 'Frame 96' },
        { src: '/card97.webp', alt: 'Frame 97' },
        { src: '/card98.webp', alt: 'Frame 98' },
        { src: '/card99.webp', alt: 'Frame 99' },
        { src: '/card100.webp', alt: 'Frame 100' },
        { src: '/card101.webp', alt: 'Frame 101' },
        { src: '/card102.webp', alt: 'Frame 102' },
        { src: '/card103.webp', alt: 'Frame 103' },
        { src: '/card104.webp', alt: 'Frame 104' },
        { src: '/card105.webp', alt: 'Frame 105' },
        { src: '/card106.webp', alt: 'Frame 106' },
        { src: '/card107.webp', alt: 'Frame 107' },
        { src: '/card108.webp', alt: 'Frame 108' },
        { src: '/card109.webp', alt: 'Frame 109' },
        { src: '/card110.webp', alt: 'Frame 110' },
        { src: '/card111.webp', alt: 'Frame 111' },
        { src: '/card112.webp', alt: 'Frame 112' },
        { src: '/card113.webp', alt: 'Frame 113' },
        { src: '/card114.webp', alt: 'Frame 114' },
        { src: '/card115.webp', alt: 'Frame 115' },
        { src: '/card116.webp', alt: 'Frame 116' },
        { src: '/card117.webp', alt: 'Frame 117' },
        { src: '/card118.webp', alt: 'Frame 118' },
        { src: '/card119.webp', alt: 'Frame 119' },
        { src: '/card120.webp', alt: 'Frame 120' },
        { src: '/card121.webp', alt: 'Frame 121' },
        { src: '/card122.webp', alt: 'Frame 122' },
        { src: '/card123.webp', alt: 'Frame 123' },
        { src: '/card124.webp', alt: 'Frame 124' },
        { src: '/card125.webp', alt: 'Frame 125' },
        { src: '/card126.webp', alt: 'Frame 126' },
        { src: '/card127.webp', alt: 'Frame 127' },
        { src: '/card128.webp', alt: 'Frame 128' },
        { src: '/card129.webp', alt: 'Frame 129' },
        { src: '/card130.webp', alt: 'Frame 130' },
        { src: '/card131.webp', alt: 'Frame 131' },
        { src: '/card132.webp', alt: 'Frame 132' },
        { src: '/card133.webp', alt: 'Frame 133' },
        { src: '/card134.webp', alt: 'Frame 134' },
        { src: '/card135.webp', alt: 'Frame 135' },
        { src: '/card136.webp', alt: 'Frame 136' },
        { src: '/card137.webp', alt: 'Frame 137' },
        { src: '/card138.webp', alt: 'Frame 138' },
        { src: '/card139.webp', alt: 'Frame 139' },
        { src: '/card140.webp', alt: 'Frame 140' },
        { src: '/card141.webp', alt: 'Frame 141' },
        { src: '/card142.webp', alt: 'Frame 142' },
        { src: '/card143.webp', alt: 'Frame 143' },
        { src: '/card144.webp', alt: 'Frame 144' },
        { src: '/card145.webp', alt: 'Frame 145' },
        { src: '/card146.webp', alt: 'Frame 146' }
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
                    <a href="#" className="hover:text-black text-gray-500">
                        Feed
                    </a>
                    <a href="kid" className="hover:text-black text-gray-500 md:underline">
                        In Stock
                    </a>
                    <a href="upcoming" className="hover:text-black text-gray-500">
                        Upcoming
                    </a>
                </nav>
            </header>

            <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 sm:p-6 md:p-8">
                {imageData.map((image, index) => (
                    <Link href={'items'}>
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-md h-full w-full">
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
