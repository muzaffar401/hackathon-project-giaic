import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaMapMarkerAlt } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-8">
            <div className="w-10/12 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <ul className="space-y-2">
                            <li className="font-medium text-white">FIND A STORE</li>
                            <li><a href="/fourcompo/member">BECOME A MEMBER</a></li>
                            <li><a href="/fourcompo/member">SIGN UP FOR EMAIL</a></li>
                            <li><a href="/fourcompo/first">SEND US FEEDBACK</a></li>
                            <li>STUDENT DISCOUNTS</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-2">
                            <li className="font-medium text-white">GET HELP</li>
                            <li>Order Status</li>
                            <li>Delivery</li>
                            <li>Returns</li>
                            <li>Payment Options</li>
                            <li>Contact Us On Nike.com Inquiries</li>
                            <li>Contact Us On All Other Inquiries</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-2">
                            <li className="font-medium text-white">ABOUT NIKE</li>
                            <li>News</li>
                            <li>Careers</li>
                            <li>Investors</li>
                            <li>Sustainability</li>
                        </ul>
                    </div>
                    <div className="flex space-x-4 text-xl text-gray-400">
                        <img src="/twitter.png" className='w-[30px] h-[30px]' alt="" />
                        <img src="/facebook.png" className='w-[30px] h-[30px]' alt="" />
                        <img src="/youtube.png" className='w-[30px] h-[30px]' />
                        <img src="/instagram.png" className='w-[30px] h-[30px]' />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 pt-4">
                    <div className='sm:flex block sm:ml-[0px] ml-[-50px]'>
                        <p className="text-sm mt-4 items-center sm:mt-0 flex text-white font-semibold mr-5"><span className='items-center mr-2'><FaMapMarkerAlt /></span> India</p>
                        <p className="text-sm text-gray-500">© 2023 Nike, Inc. All Rights Reserved</p>
                    </div>
                    <div className="hidden sm:flex text-sm space-x-6">
                        <a href="#" className="hover:text-white">Guides</a>
                        <a href="#" className="hover:text-white">Terms of Sale</a>
                        <a href="#" className="hover:text-white">Terms of Use</a>
                        <a href="#" className="hover:text-white">Nike Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
