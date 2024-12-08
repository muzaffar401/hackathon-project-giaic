"use client"
import React from 'react';

const ProductList: React.FC = () => {
    const products = [
        { id: 155, name: "Nike Air Force 1 Mid '07", category: "Men's Shoes", colors: '1 Colour', price: '₹ 10,795.00' },
        { id: 156, name: 'Nike Court Vision Low Next Nature', category: "Men's Shoes", colors: '1 Colour', price: '₹ 4,995.00' },
        { id: 157, name: 'Nike Air Force 1 PLT.AF.ORM', category: "Women's Shoes", colors: '1 Colour', price: '₹ 8,695.00' },
        { id: 158, name: 'Nike Air Force 1 React', category: "Men's Shoes", colors: '1 Colour', price: '₹ 13,295.00' },
        { id: 159, name: 'Air Jordan 1 Elevate Low', category: "Women's Shoes", colors: '1 Colour', price: '₹ 11,895.00' },
        { id: 160, name: 'Nike Standard Issue', category: "Women's Basketball Jersey", colors: '1 Colour', price: '₹ 2,895.00' },
        { id: 161, name: 'Nike Pegasus Trail 4', category: "Men's Trail Running Shoes", colors: '4 Colours', price: '₹ 12,995.00' },
        { id: 162, name: 'Nike Revolution 6', category: "Women's Running Shoes", colors: '3 Colours', price: '₹ 3,695.00' },
        { id: 163, name: 'Nike Renew Ride 3', category: "Men's Running Shoes", colors: '2 Colours', price: '₹ 6,495.00' },
        { id: 164, name: 'Air Max 90', category: "Men's Shoes", colors: '2 Colours', price: '₹ 13,495.00' },
        { id: 165, name: 'Nike Blazer Mid Vintage 77', category: "Unisex Shoes", colors: '3 Colours', price: '₹ 8,295.00' },
        { id: 166, name: 'Nike Air Zoom Vomero 16', category: "Men's Road Running Shoes", colors: '1 Colour', price: '₹ 14,995.00' },
        { id: 167, name: 'Nike Dri-FIT ADV', category: "Women's T-Shirt", colors: '2 Colours', price: '₹ 1,995.00' },
        { id: 168, name: 'Nike Air Monarch IV', category: "Men's Training Shoes", colors: '1 Colour', price: '₹ 4,495.00' },
        { id: 169, name: 'Nike Sportswear Club Fleece', category: "Men's Joggers", colors: '5 Colours', price: '₹ 3,995.00' },
        { id: 170, name: 'Nike Metcon 8', category: "Men's Training Shoes", colors: '3 Colours', price: '₹ 13,295.00' },
        { id: 171, name: 'Nike Air Max Plus', category: "Women's Shoes", colors: '1 Colour', price: '₹ 16,495.00' },
        { id: 172, name: 'Nike ZoomX Invincible Run Flyknit', category: "Men's Running Shoes", colors: '2 Colours', price: '₹ 17,495.00' },
        { id: 173, name: 'Nike Renew Element 55', category: "Unisex Shoes", colors: '1 Colour', price: '₹ 6,795.00' },
        { id: 174, name: 'Nike Flex Experience Run 11', category: "Men's Running Shoes", colors: '3 Colours', price: '₹ 4,295.00' },
        { id: 175, name: 'Nike Legend Essential 2', category: "Women's Training Shoes", colors: '4 Colours', price: '₹ 4,995.00' },
        { id: 176, name: 'Nike Court Legacy', category: "Men's Shoes", colors: '1 Colour', price: '₹ 3,495.00' },
        { id: 177, name: 'Nike Everyday Max Cushioned Socks', category: "Unisex Socks", colors: '2 Colours', price: '₹ 995.00' },
        { id: 178, name: 'Nike Air Max 270', category: "Men's Shoes", colors: '2 Colours', price: '₹ 14,495.00' },
        { id: 179, name: 'Nike Air Presto', category: "Unisex Shoes", colors: '1 Colour', price: '₹ 10,995.00' },
        { id: 180, name: 'Nike Sportswear Club Hoodie', category: "Men's Hoodie", colors: '6 Colours', price: '₹ 4,795.00' },
        { id: 181, name: 'Nike Therma-FIT ADV', category: "Women's Jacket", colors: '1 Colour', price: '₹ 12,495.00' },
        { id: 182, name: 'Nike Renew Run 2', category: "Men's Running Shoes", colors: '3 Colours', price: '₹ 7,995.00' },
        { id: 183, name: 'Nike Air Force 1 Shadow', category: "Women's Shoes", colors: '2 Colours', price: '₹ 12,295.00' },
        { id: 184, name: 'Nike Air Huarache', category: "Unisex Shoes", colors: '3 Colours', price: '₹ 13,995.00' },
        { id: 185, name: 'Nike Epic Fast Leggings', category: "Women's Leggings", colors: '1 Colour', price: '₹ 3,895.00' },
        { id: 186, name: 'Nike Air Max 97', category: "Men's Shoes", colors: '1 Colour', price: '₹ 17,995.00' },
        { id: 187, name: 'Nike Flex Control TR4', category: "Men's Training Shoes", colors: '1 Colour', price: '₹ 5,295.00' },
        { id: 188, name: 'Nike Sportswear Swoosh Shorts', category: "Men's Shorts", colors: '4 Colours', price: '₹ 2,495.00' },
        { id: 189, name: 'Nike Phantom GT2 Academy', category: "Men's Football Shoes", colors: '1 Colour', price: '₹ 6,495.00' },
        { id: 190, name: 'Nike SuperRep Go 3', category: "Men's Training Shoes", colors: '2 Colours', price: '₹ 10,495.00' },
        { id: 191, name: 'Nike Dunk Low', category: "Women's Shoes", colors: '1 Colour', price: '₹ 11,995.00' },
        { id: 192, name: 'Nike LeBron 19', category: "Men's Basketball Shoes", colors: '2 Colours', price: '₹ 18,495.00' },
        { id: 193, name: 'Nike Zoom Rival Sprint 9', category: "Unisex Track Shoes", colors: '3 Colours', price: '₹ 5,995.00' },
        { id: 194, name: 'Nike Renew Fusion', category: "Men's Training Shoes", colors: '1 Colour', price: '₹ 7,495.00' },
        { id: 195, name: 'Nike Wildhorse 8', category: "Men's Trail Running Shoes", colors: '1 Colour', price: '₹ 9,495.00' },
        { id: 196, name: 'Nike Free RN 5.0', category: "Women's Running Shoes", colors: '1 Colour', price: '₹ 8,495.00' },
        { id: 197, name: 'Nike React Infinity Run Flyknit', category: "Men's Shoes", colors: '2 Colours', price: '₹ 15,995.00' },
        { id: 198, name: 'Nike Free Metcon 4', category: "Women's Training Shoes", colors: '1 Colour', price: '₹ 9,995.00' },
        { id: 199, name: 'Nike Phantom Vision Academy', category: "Men's Football Shoes", colors: '1 Colour', price: '₹ 9,295.00' },
        { id: 200, name: 'Nike Vapor Edge Pro', category: "Men's Football Shoes", colors: '3 Colours', price: '₹ 11,995.00' },
        { id: 201, name: 'Nike SB Chron Solarsoft', category: "Men's Skateboarding Shoes", colors: '2 Colours', price: '₹ 4,995.00' },
        { id: 202, name: 'Nike Zoom Fly 4', category: "Unisex Running Shoes", colors: '1 Colour', price: '₹ 13,495.00' },
        { id: 203, name: 'Nike Spark Lightweight Crew', category: "Unisex Socks", colors: '1 Colour', price: '₹ 1,295.00' },
        { id: 204, name: 'Nike Dri-FIT Training T-Shirt', category: "Men's T-Shirt", colors: '2 Colours', price: '₹ 2,495.00' },
        { id: 205, name: 'Nike Swoosh Icon Clash Bra', category: "Women's Sports Bra", colors: '1 Colour', price: '₹ 2,795.00' },
        { id: 206, name: 'Nike Mercurial Vapor', category: "Men's Football Shoes", colors: '2 Colours', price: '₹ 12,495.00' },
        { id: 207, name: 'Nike Hyperdunk X', category: "Unisex Basketball Shoes", colors: '1 Colour', price: '₹ 9,995.00' },
        { id: 208, name: 'Nike Phantom GT Elite', category: "Men's Football Shoes", colors: '1 Colour', price: '₹ 19,495.00' },
        { id: 209, name: 'Nike Pro Therma Long Sleeve', category: "Men's T-Shirt", colors: '1 Colour', price: '₹ 3,995.00' },
        { id: 210, name: 'Nike Metcon DSX Flyknit 3', category: "Men's Training Shoes", colors: '1 Colour', price: '₹ 12,495.00' },
        { id: 211, name: 'Nike ACG Air Mowabb', category: "Unisex Shoes", colors: '2 Colours', price: '₹ 15,495.00' },
        { id: 212, name: 'Nike Air More Uptempo', category: "Men's Shoes", colors: '2 Colours', price: '₹ 14,995.00' },
        { id: 213, name: 'Nike Sportswear Swoosh Hoodie', category: "Men's Hoodie", colors: '4 Colours', price: '₹ 5,295.00' },
    ];

    return (
        <div className="bg-white min-h-screen p-4">
            <div className="container mx-auto flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/4 bg-gray-50 p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4">New (500)</h2>
                    <ul className="space-y-2">
                        <li className="text-gray-700 font-medium">Shoes</li>
                        <li className="text-gray-700 font-medium">Sports Bras</li>
                        <li className="text-gray-700 font-medium">Tops &amp; T-Shirts</li>
                        <li className="text-gray-700 font-medium">Hoodies &amp; Sweatshirts</li>
                        <li className="text-gray-700 font-medium">Jackets</li>
                        <li className="text-gray-700 font-medium">Trousers &amp; Tights</li>
                        <li className="text-gray-700 font-medium">Shorts</li>
                        <li className="text-gray-700 font-medium">Tracksuits</li>
                        <li className="text-gray-700 font-medium">Jumpsuits &amp; Rompers</li>
                        <li className="text-gray-700 font-medium">Socks</li>
                    </ul>
                    <h3 className="text-lg font-bold mt-6">Gender</h3>
                    <ul className="space-y-2">
                        <li className="text-gray-700">Men</li>
                        <li className="text-gray-700">Women</li>
                        <li className="text-gray-700">Unisex</li>
                    </ul>
                    <h3 className="text-lg font-bold mt-6">Kids</h3>
                    <ul className="space-y-2">
                        <li className="text-gray-700">Boys</li>
                        <li className="text-gray-700">Girls</li>
                    </ul>
                    <h3 className="text-lg font-bold mt-6">Shop by Price</h3>
                    <ul className="space-y-2">
                        <li className="text-gray-700">Under ₹ 2,500.00</li>
                        <li className="text-gray-700">₹ 2,501.00 - ₹ 5,000.00</li>
                    </ul>
                </div>

                <div className="w-full md:w-3/4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {products.map((product) => (
                            <div key={product.id} className="border rounded-lg p-4 bg-white shadow-md">
                                <div className="w-full h-40 relative mb-4">
                                    <img
                                        alt={product.name}
                                        className="rounded-lg"
                                        src={`/card${product.id}.webp`} // Use the correct path for the product image
                                        style={{ position: 'absolute', height: '100%', width: '100%', inset: 0, objectFit: 'contain' }}
                                    />
                                </div>
                                <div className="text-sm text-red-500 font-semibold mb-1">Just In</div>
                                <div className="font-medium text-gray-800">{product.name}</div>
                                <div className="text-sm text-gray-500">{product.category}</div>
                                <div className="text-sm text-gray-500">{product.colors}</div>
                                <div className="font-semibold text-gray-800 mt-2">MRP: {product.price}</div>

                                {/* Link to Product Detail Page */}
                                <a href={`productdetail`} className="mt-4 text-blue-600 hover:underline">
                                    View Details
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
