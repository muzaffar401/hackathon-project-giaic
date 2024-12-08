import React from 'react';

const NikeMembership: React.FC = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6 text-center md:text-3xl text-white">Nike Membership</h1>
        <div className="text-center max-w-3xl w-full bg-white p-8 rounded-xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-3xl">
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
                Where All Athletes Belong
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg md:text-xl">
                When you're with us, you're part of something bigger: a global community dedicated to bringing out the best in one another,
                with access to the most effective tools for the job, including Member-exclusive products, Nike By You customization, and special offers.
                And it's all free.
            </p>
            <div className="flex justify-center">
                <button className="bg-gradient-to-r from-yellow-400 to-red-500 text-white text-lg font-medium py-3 px-8 rounded-full transform transition-all hover:scale-105 hover:from-yellow-500 hover:to-red-600 focus:ring focus:ring-yellow-300 focus:ring-opacity-50 shadow-lg">
                    <a href="signup">Join Us</a>
                </button>
            </div>
        </div>
        <div className="mt-6 text-center text-white">
            <p className="text-sm">Already a member? <a href="login" className="text-yellow-300 font-semibold underline">Log In</a></p>
        </div>
    </div>
);

export default NikeMembership;
