import React from 'react';
import { FaHome, FaPhone } from 'react-icons/fa';

const Page = () => {
    const articles = [
        {
            title: "KOREA - DISTRIBUTION CENTER (CUSTOMER SERVICE CENTER) OPERATIONS ASSOCIATE (ICHEON)",
            category: "SUPPLY CHAIN, DISTRIBUTION & LOGISTICS",
            location: "Icheon, South Korea",
            image: "/img8.webp",
        },
        {
            title: "KOREA - DISTRIBUTION CENTER (CUSTOMER SERVICE CENTER) OPERATIONS ASSOCIATE (ICHEON)",
            category: "SUPPLY CHAIN, DISTRIBUTION & LOGISTICS",
            location: "Icheon, South Korea",
            image: "/img9.webp",
        },
        {
            title: "INFRASTRUCTURE AND END USER SUPPORT SPECIALIST",
            category: "TECHNOLOGY",
            location: "Melbourne, Victoria",
            image: "/img10.webp",
        },
        {
            title: 'NIKE MEMPHIS EMPLOYEE STORE RETAIL SALES ASSOCIATE FULL-TIME ("ATHLETE")',
            category: "RETAIL STORES",
            location: "Memphis, Tennessee",
            image: "/img11.webp",
        },
        {
            title: "FINANCE MANAGER - MEMBERSHIP AND PLATFORMS",
            category: "FINANCE & ACCOUNTING",
            location: "Remote",
            image: "/img12.webp",
        },
    ];

    const benefits = [
        {
            title: "GET MOVING",
            description: "Access to Nike facilities and resources to stay active and energized.",
            imgSrc: "/img13.webp",
            imgAlt: "GET MOVING",
        },
        {
            title: "FITNESS FIT FOR ALL",
            description: "Tailored fitness programs to match your style and goals.",
            imgSrc: "/img14.webp",
            imgAlt: "FITNESS FIT FOR ALL",
        },
        {
            title: "FINANCIAL HEALTH",
            description: "Learn about financial tools and resources available.",
            imgSrc: "/img15.webp",
            imgAlt: "FINANCIAL HEALTH",
        },
        {
            title: "REST & RECOVERY",
            description: "Well-being tips to keep you refreshed and balanced.",
            imgSrc: "/img16.webp",
            imgAlt: "REST & RECOVERY",
        },
        {
            title: "NIKE GROUP INSURANCE PLAN",
            description: "Comprehensive health plans for you and your family.",
            imgSrc: "/img17.webp",
            imgAlt: "NIKE GROUP INSURANCE PLAN",
        },
        {
            title: "EMPLOYEE DISCOUNT",
            description: "Special discounts on Nike products.",
            imgSrc: "/img19.webp",
            imgAlt: "EMPLOYEE DISCOUNT",
        },
        {
            title: "CONTINUOUS LEARNING",
            description: "Opportunities to grow and enhance your skills.",
            imgSrc: "/img18.webp",
            imgAlt: "CONTINUOUS LEARNING",
        },
        {
            title: "HEALTH & WELLNESS",
            description: "Promoting a healthy lifestyle for all employees.",
            imgSrc: "/img20.webp",
            imgAlt: "HEALTH & WELLNESS",
        },
    ];
    return (
        <>
            <div className="bg-gray-100">
                <header className="bg-white shadow">
                    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                        <h1 className="text-xl font-bold">THERE ARE SO MANY WAYS</h1>
                        <nav>
                            <ul className="flex space-x-4">
                                <li className="flex items-center">
                                    <FaHome className="mr-2 text-gray-600" />
                                    <a href="#" className="text-gray-600 hover:text-gray-800">
                                        Home
                                    </a>
                                </li>
                                <li className="flex items-center">
                                    <FaPhone className="mr-2 text-gray-600" />
                                    <a href="#" className="text-gray-600 hover:text-gray-800">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <section className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-2xl font-semibold">Latest Articles</h2>
                        <div className="mt-4 space-y-4">
                            {articles.map((article, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <img
                                        alt={article.title}
                                        className="w-24 h-24 object-cover rounded"
                                        src={article.image}
                                    />
                                    <div>
                                        <h3 className="text-lg font-medium">{article.title}</h3>
                                        <p className="text-gray-500 text-sm">{article.category}</p>
                                        <p className="text-gray-400 text-xs">{article.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <form className="bg-white shadow-md rounded p-6">
                            <h2 className="text-xl font-bold mb-4">Subscribe</h2>
                            <input
                                placeholder="Your Email"
                                className="w-full border-gray-300 rounded p-2 mb-4"
                                type="email"
                            />
                            <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>

                <section className="container mx-auto px-4 py-8 space-y-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-center bg-gray-50 p-8 rounded shadow"
                        >
                            <img
                                alt={benefit.imgAlt}
                                loading="lazy"
                                width={200}
                                height={200}
                                decoding="async"
                                className="w-full md:w-1/3 h-48 object-cover rounded mb-4 md:mb-0 md:mr-6"
                                src={benefit.imgSrc}
                                style={{ color: "transparent" }}
                            />
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl font-bold">{benefit.title}</h2>
                                <p className="text-gray-600 mt-2">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
            <footer className="bg-gray-800 text-white py-6"><div className="container mx-auto px-4 text-center"><p>© 2024 Nike Benefits</p></div></footer>
        </>
    );
};

export default Page;
