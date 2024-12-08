import React from 'react';

const Page: React.FC = () => {
    return (
        <div className="bg-white text-black min-h-screen">
            <div className="text-center py-10 px-4">
                <h1 className="text-3xl md:text-5xl font-bold">A YEAR OF YOU</h1>
                <p className="mt-4 text-gray-600 text-sm md:text-base">
                    This is your year. Unlock Member-only benefits that bring out your best self and keep you moving forward.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
                <div className="flex flex-col items-center text-center">
                    <img
                        alt="Benefit 1"
                        width="200"
                        height="200"
                        className="rounded-lg w-full"
                        src="/img23.webp"
                        style={{ color: 'transparent' }}
                    />
                    <h3 className="mt-4 font-medium text-lg">Nike Master Benefits bring out your best</h3>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img
                        alt="Benefit 2"
                        width="200"
                        height="200"
                        className="rounded-lg w-full"
                        src="/img24.webp"
                        style={{ color: 'transparent' }}
                    />
                    <h3 className="mt-4 font-medium text-lg">Exclusive performance products to unleash your potential</h3>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img
                        alt="Benefit 3"
                        width="200"
                        height="200"
                        className="rounded-lg w-full"
                        src="/img25.webp"
                        style={{ color: 'transparent' }}
                    />
                    <h3 className="mt-4 font-medium text-lg">Guided workouts and plans to keep you motivated</h3>
                </div>
            </div>

            <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 text-center">
                <div>
                    <div className="w-16 h-16 mx-auto flex items-center justify-center border-2 border-gray-300 rounded-full">
                        <span className="text-lg font-bold">📦</span>
                    </div>
                    <h4 className="mt-4 text-lg font-medium">Shopping Perks</h4>
                    <p className="mt-2 text-gray-600 text-sm">Special discounts for members only.</p>
                </div>
                <div>
                    <div className="w-16 h-16 mx-auto flex items-center justify-center border-2 border-gray-300 rounded-full">
                        <span className="text-lg font-bold">🌟</span>
                    </div>
                    <h4 className="mt-4 text-lg font-medium">Member Exclusives</h4>
                    <p className="mt-2 text-gray-600 text-sm">Access to limited edition items.</p>
                </div>
                <div>
                    <div className="w-16 h-16 mx-auto flex items-center justify-center border-2 border-gray-300 rounded-full">
                        <span className="text-lg font-bold">🎽</span>
                    </div>
                    <h4 className="mt-4 text-lg font-medium">Workout Guides</h4>
                    <p className="mt-2 text-gray-600 text-sm">Personalized workout plans.</p>
                </div>
            </div>

            <div className="mt-16 bg-gray-100 py-10 px-4">
                <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold">Download our App</h3>
                    <p className="mt-2 text-gray-600 text-sm md:text-base">Your key to accessing benefits</p>
                </div>

                <div className="mt-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center">
                        <img
                            alt="App 1"
                            width="200"
                            height="200"
                            className="w-full rounded-lg"
                            src="/img26.webp"
                            style={{ color: 'transparent' }}
                        />
                        <h4 className="mt-4 text-lg font-medium">Discover your personal goals</h4>
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            alt="App 2"
                            width="200"
                            height="200"
                            className="w-full rounded-lg"
                            src="/img27.webp"
                            style={{ color: 'transparent' }}
                        />
                        <h4 className="mt-4 text-lg font-medium">Reach your health goals with ease</h4>
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            alt="App 3"
                            width="200"
                            height="200"
                            className="w-full rounded-lg"
                            src="/img28.webp"
                            style={{ color: 'transparent' }}
                        />
                        <h4 className="mt-4 text-lg font-medium">Track your progress and stay on track</h4>
                    </div>
                </div>
            </div>

            <div className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
                <h3 className="text-center text-2xl md:text-3xl font-bold">Frequently Asked Questions</h3>
                <div className="mt-6 space-y-6">
                    <div>
                        <h4 className="text-lg font-medium">What is Nike Membership?</h4>
                        <p className="mt-2 text-gray-600 text-sm">Nike Membership is a free program that gives you access to Member-only benefits and events.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium">How do I sign up?</h4>
                        <p className="mt-2 text-gray-600 text-sm">Signing up is easy and free. Click here to join and start enjoying the benefits.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium">What are Member Rewards?</h4>
                        <p className="mt-2 text-gray-600 text-sm">Member Rewards include exclusive discounts, early access to products, and more.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
