import React from 'react';

const JoinUs: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-full my-10 bg-white">
            <div className="w-full max-w-sm p-6">
                <div className="flex justify-center mb-6">
                    <img
                        alt="Nike Logo"
                        loading="lazy"
                        width="100"
                        height="100"
                        decoding="async"
                        className="h-8"
                        src="/img2.png"
                        style={{ color: 'transparent' }}
                    />
                </div>
                <h1 className="text-center text-lg font-bold mb-6">
                    BECOME A NIKE MEMBER
                </h1>
                <p className="text-center text-sm text-gray-600 mb-6">
                    Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
                </p>
                <form className="space-y-4">
                    <div>
                        <input
                            placeholder="Email address"
                            className="w-full border border-gray-300 rounded-md p-3 text-sm"
                            type="email"
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Password"
                            className="w-full border border-gray-300 rounded-md p-3 text-sm"
                            type="password"
                        />
                    </div>
                    <div>
                        <input
                            placeholder="First Name"
                            className="w-full border border-gray-300 rounded-md p-3 text-sm"
                            type="text"
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Last Name"
                            className="w-full border border-gray-300 rounded-md p-3 text-sm"
                            type="text"
                        />
                    </div>
                    <div>
                        <input
                            placeholder="Date of Birth"
                            className="w-full border border-gray-300 rounded-md p-3 text-sm"
                            type="date"
                        />
                    </div>
                    <div className="flex items-center">
                        <label className="text-sm text-gray-600">Get a Nike Member Reward every year on your Birthday</label>
                    </div>
                    <div>
                        <select className="w-full border border-gray-300 rounded-md p-3 text-sm">
                            <option value="India">India</option>
                            {/* Add other countries here */}
                        </select>
                    </div>
                    <div className="flex items-center space-x-4">
                        <label className="text-sm text-gray-600">Male</label>
                        <input className="w-4 h-4 border-gray-300 rounded focus:ring-0" type="radio" name="gender" value="male" />
                        <label className="text-sm text-gray-600">Female</label>
                        <input className="w-4 h-4 border-gray-300 rounded focus:ring-0" type="radio" name="gender" value="female" />
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                        <input className="w-4 h-4 border-gray-300 rounded focus:ring-0" type="checkbox" />
                        <span className="ml-2">Sign up for emails to get updates from Nike on products, offers, and your Member benefits</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                        <p>
                            By creating an account, you agree to Nike's{' '}
                            <a href="#" className="underline">
                                Privacy Policy
                            </a>{' '}
                            and{' '}
                            <a href="#" className="underline">
                                Terms of Use
                            </a>.
                        </p>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-md font-bold text-sm tracking-wide"
                    >
                        JOIN US
                    </button>
                </form>
                <p className="text-center text-sm mt-4">
                    Already a Member?{' '}
                    <a href="login" className="text-black underline font-semibold">
                        Sign In.
                    </a>
                </p>
            </div>
        </div>
    );
};

export default JoinUs;
