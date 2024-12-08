import React from 'react';

type Category = {
    title: string;
    items: string[];
};

const categories: Category[] = [
    {
        title: 'Icons',
        items: ['Air Force 1', 'Huarache', 'Air Max 90', 'Air Max 95'],
    },
    {
        title: 'Shoes',
        items: ['All Shoes', 'Custom Shoes', 'Jordan Shoes', 'Running Shoes'],
    },
    {
        title: 'Clothing',
        items: ['All Clothing', 'Modest Wear', 'Hoodies & Pullovers', 'Shirts & Tops'],
    },
    {
        title: 'Kids',
        items: ['Infant & Toddler Shoes', 'Kids Shoes', 'Kids Jordan Shoes', 'Kids Basketball Shoes'],
    },
];

const CategoriesGrid: React.FC = () => {
    return (
        <div className="w-full flex justify-center py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-10/12">
                {categories.map((category, index) => (
                    <div key={index}>
                        <h3 className="text-lg font-medium mb-4">{category.title}</h3>
                        <ul className="space-y-2 text-gray-600">
                            {category.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesGrid;
