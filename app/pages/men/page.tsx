import React from 'react';

interface Product {
    name: string;
    description: any;
    price: string;
    imageUrl: string;
}

const products: Product[] = [
    {
        name: 'Nike Dri-FIT ADV TechKnit Ultra',
        description: (
            <>
                Mens Short-Sleeve Running Top <br />
                Ashen Slate/Cobalt Bliss <br />
                Size: L Quantity: 1
            </>
        ),
        price: '₹3,895.00',
        imageUrl: '/img21.webp',
    },
    {
        name: 'Nike Air Max 97 SE',
        description: (
            <>
                Mens Shoes <br />
                Flat Pewter/Light Bone/Black/White <br />
                Size: L Quantity: 1 <br />
            </>
        ),
        price: '₹16,995.00',
        imageUrl: '/img22.webp',
    },
];

const Page: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <div className="bg-gray-100 p-4 rounded-md text-sm text-gray-600 mb-6">
                        Free Delivery on orders of ₹14,000.00 or more.{' '}
                        <span className="text-black font-medium underline cursor-pointer">View details</span>
                    </div>
                    <div className="space-y-6">
                        {products.map((product, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-start bg-white p-4 rounded-lg shadow-md">
                                <img
                                    alt={product.name}
                                    loading="lazy"
                                    width="200"
                                    height="200"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-24 h-24 object-cover rounded-md mx-auto md:mx-0"
                                    src={product.imageUrl}
                                    style={{ color: 'transparent' }}
                                />
                                <div className="flex-grow ml-0 md:ml-4 mt-4 md:mt-0">
                                    <h3 className="text-lg font-medium">{product.name}</h3>
                                    <p className="text-gray-500 text-sm">{product.description}</p>
                                    <div className="flex items-center space-x-4 mt-2 text-gray-500">
                                        <button>
                                            <i className="fa fa-heart"></i>
                                        </button>
                                        <button>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                                <p className="text-right font-medium mt-4 md:mt-0">MRP: {product.price}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-gray-500 text-center">
                        <p>Favourites</p>
                        <p className="text-sm">There are no items saved to your favourites.</p>
                    </div>
                </div>
                <div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-medium mb-4">Summary</h3>
                        <div className="space-y-4 text-sm text-gray-600">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>₹20,890.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Estimated Delivery &amp; Handling</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between font-medium text-black">
                                <span>Total</span>
                                <span>₹20,890.00</span>
                            </div>
                        </div>
                        <button className="w-full mt-6 bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                            Member Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
