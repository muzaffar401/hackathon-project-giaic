import Link from 'next/link';
import React from 'react';

const page = () => {
    // Image data stored in an array of objects
    const imageData = [
        { src: '/card1.webp', alt: 'Frame 1' },
        { src: '/card2.webp', alt: 'Frame 2' },
        { src: '/card3.webp', alt: 'Frame 3' },
        { src: '/card4.webp', alt: 'Frame 4' },
        { src: '/card5.webp', alt: 'Frame 5' },
        { src: '/card6.webp', alt: 'Frame 6' },
        { src: '/card7.webp', alt: 'Frame 7' },
        { src: '/card8.webp', alt: 'Frame 8' },
        { src: '/card9.webp', alt: 'Frame 9' },
        { src: '/card10.webp', alt: 'Frame 10' },
        { src: '/card11.webp', alt: 'Frame 11' },
        { src: '/card12.webp', alt: 'Frame 12' },
        { src: '/card13.webp', alt: 'Frame 13' },
        { src: '/card14.webp', alt: 'Frame 14' },
        { src: '/card15.webp', alt: 'Frame 15' },
        { src: '/card16.webp', alt: 'Frame 16' },
        { src: '/card17.webp', alt: 'Frame 17' },
        { src: '/card18.webp', alt: 'Frame 18' },
        { src: '/card19.webp', alt: 'Frame 19' },
        { src: '/card20.webp', alt: 'Frame 20' },
        { src: '/card21.webp', alt: 'Frame 21' },
        { src: '/card22.webp', alt: 'Frame 22' },
        { src: '/card23.webp', alt: 'Frame 23' },
        { src: '/card24.webp', alt: 'Frame 24' },
        { src: '/card25.webp', alt: 'Frame 25' },
        { src: '/card26.webp', alt: 'Frame 26' },
        { src: '/card27.webp', alt: 'Frame 27' },
        { src: '/card28.webp', alt: 'Frame 28' },
        { src: '/card29.webp', alt: 'Frame 29' },
        { src: '/card30.webp', alt: 'Frame 30' },
        { src: '/card31.webp', alt: 'Frame 31' },
        { src: '/card32.webp', alt: 'Frame 32' },
        { src: '/card33.webp', alt: 'Frame 33' },
        { src: '/card34.webp', alt: 'Frame 34' },
        { src: '/card35.webp', alt: 'Frame 35' },
        { src: '/card36.webp', alt: 'Frame 36' },
        { src: '/card37.webp', alt: 'Frame 37' },
        { src: '/card38.webp', alt: 'Frame 38' },
        { src: '/card39.webp', alt: 'Frame 39' },
        { src: '/card40.webp', alt: 'Frame 40' },
        { src: '/card41.webp', alt: 'Frame 41' },
        { src: '/card42.webp', alt: 'Frame 42' },
        { src: '/card43.webp', alt: 'Frame 43' },
        { src: '/card44.webp', alt: 'Frame 44' },
        { src: '/card45.webp', alt: 'Frame 45' },
        { src: '/card46.webp', alt: 'Frame 46' },
        { src: '/card47.webp', alt: 'Frame 47' },
        { src: '/card48.webp', alt: 'Frame 48' },
        { src: '/card49.webp', alt: 'Frame 49' },
        { src: '/card50.webp', alt: 'Frame 50' },
        { src: '/card51.webp', alt: 'Frame 51' },
        { src: '/card52.webp', alt: 'Frame 52' },
        { src: '/card53.webp', alt: 'Frame 53' },
        { src: '/card54.webp', alt: 'Frame 54' },
        { src: '/card55.webp', alt: 'Frame 55' },
        { src: '/card56.webp', alt: 'Frame 56' },
        { src: '/card57.webp', alt: 'Frame 57' },
        { src: '/card58.webp', alt: 'Frame 58' },
        { src: '/card59.webp', alt: 'Frame 59' },
        { src: '/card60.webp', alt: 'Frame 60' },
        { src: '/card61.webp', alt: 'Frame 61' },
        { src: '/card62.webp', alt: 'Frame 62' },
        { src: '/card63.webp', alt: 'Frame 63' },
        { src: '/card64.webp', alt: 'Frame 64' },
        { src: '/card65.webp', alt: 'Frame 65' },
        { src: '/card66.webp', alt: 'Frame 66' },
        { src: '/card67.webp', alt: 'Frame 67' },
        { src: '/card68.webp', alt: 'Frame 68' },
        { src: '/card69.webp', alt: 'Frame 69' },
        { src: '/card70.webp', alt: 'Frame 70' },
        { src: '/card71.webp', alt: 'Frame 71' },
        { src: '/card72.webp', alt: 'Frame 72' },
        { src: '/card73.webp', alt: 'Frame 73' },
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
                    <a href="#" className="hover:text-black text-gray-500 md:underline">
                        In Stock
                    </a>
                    <a href="upcoming" className="hover:text-black text-gray-500">
                        Upcoming
                    </a>
                </nav>
            </header>

            <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4 sm:p-6 md:p-8">
                {imageData.map((image, index) => (
                    <Link href={'items'}>
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-md h-[180px] sm:h-[200px] md:h-[220px] w-full">
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
