import React from 'react';

const HelpPage: React.FC = () => (
    <div className="min-h-screen bg-white text-gray-900 px-4 sm:px-8 lg:px-16 py-8">
        <header className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-4">GET HELP</h1>
            <input
                placeholder="What can we help you with?"
                className="w-full max-w-md mx-auto border border-gray-300 rounded-full px-4 py-2 focus:ring-2 focus:ring-gray-400 outline-none"
                type="text"
            />
        </header>
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
                <h2 className="text-xl font-semibold mb-4">
                    WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    We want to make buying your favorite Nike shoes and gear online fast and easy, and we accept the following payment options:
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                    <li>Visa, Mastercard, Diners Club, Discover, American Express</li>
                    <li>Visa Electron, Maestro</li>
                    <li>Apple Pay</li>
                </ul>
                <p className="text-gray-600 mb-4">
                    If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.
                </p>
                <p className="text-gray-600 mb-6">
                    Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, <a href="/fourcompo/joinus" className="text-blue-500 underline">join us</a> today.
                </p>
                <div className="flex gap-4 mb-8">
                    <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800">
                        <a href="joinus"> JOIN US </a>
                    </button>
                    <button className="border border-black py-2 px-6 rounded-full hover:bg-gray-100">
                        <a href="items">SHOP NIKE</a>
                    </button>
                </div>
                <h3 className="text-lg font-semibold mb-4">FAQs</h3>
                <div className="space-y-4">
                    <div>
                        <h4 className="font-medium">Does my card need international purchases enabled?</h4>
                        <p className="text-gray-600">
                            Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-medium">Can I pay for my order with multiple methods?</h4>
                        <p className="text-gray-600">
                            No, payment for Nike orders can't be split between multiple payment methods.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-medium">What payment method is accepted for SNKRS orders?</h4>
                        <p className="text-gray-600">
                            You can use any accepted credit card to pay for your SNKRS order.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-medium">Why don't I see Apple Pay as an option?</h4>
                        <p className="text-gray-600">
                            To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account, and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-6">CONTACT US</h3>
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-500"
                            height="24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <div>
                            <p className="font-medium">000 800 919 0566</p>
                            <p className="text-sm text-gray-600">Products & Orders: 24 hours a day, 7 days a week</p>
                            <p className="text-sm text-gray-600">Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-500"
                            height="24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        <p className="text-sm text-gray-600">24 hours a day, 7 days a week</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            role="img"
                            viewBox="0 0 24 24"
                            className="text-gray-500"
                            height="24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z"></path>
                        </svg>
                        <p className="text-sm text-gray-600">STORE LOCATOR Find Nike retail stores near you</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HelpPage;
