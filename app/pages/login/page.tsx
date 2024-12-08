import React from 'react';

const SignIn: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-white">
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
                    YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
                </h1>
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
                    <div className="flex items-center justify-between text-sm text-gray-600">
                        <label className="flex items-center">
                            <input className="w-4 h-4 border-gray-300 rounded focus:ring-0" type="checkbox" />
                            <span className="ml-2">Keep me signed in</span>
                        </label>
                        <a href="#" className="hover:underline">
                            Forgotten your password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-md font-bold text-sm tracking-wide"
                    >
                        SIGN IN
                    </button>
                </form>
                <p className="text-xs text-center text-gray-600 mt-4">
                    By logging in, you agree to Nike's{' '}
                    <a href="#" className="underline">
                        Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="#" className="underline">
                        Terms of Use
                    </a>.
                </p>
                <p className="text-center text-sm mt-4">
                    Not a Member?{' '}
                    <a href="signup" className="text-black underline font-semibold">
                        Join Us.
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
