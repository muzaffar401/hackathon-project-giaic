import React from 'react';

type CardProps = {
  imgSrc: string;
  imgAlt: string;
  buttonText: string;
  link: string;
};

const Card: React.FC<CardProps> = ({ imgSrc, imgAlt, buttonText, link }) => {
  return (
    <div className="relative group">
      <img
        alt={imgAlt}
        loading="lazy"
        width="200"
        height="200"
        decoding="async"
        className="w-full h-full object-cover rounded-lg shadow-md"
        style={{ color: 'transparent' }}
        srcSet={`${imgSrc}?w=256&q=75 1x, ${imgSrc}?w=640&q=75 2x`}
        src={`${imgSrc}?w=640&q=75`}
      />
      <button className="absolute bottom-4 left-4 bg-white text-black font-semibold py-2 px-4 rounded-full shadow-md group-hover:scale-105 transition-transform">
        <a href={link}>{buttonText}</a>
      </button>
    </div>
  );
};

const FeaturedSection3: React.FC = () => {
  return (
    <div className="bg-white py-10 px-4">
      <h2 className="text-xl font-bold mb-8">The Essentials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          imgSrc="/img5.png"
          imgAlt="Men's Essentials"
          buttonText="Mens"
          link="/fourcompo/shoes"
        />
        <Card
          imgSrc="/img6.png"
          imgAlt="Women's Essentials"
          buttonText="Womens"
          link="/components/women"
        />
        <Card
          imgSrc="/img7.png"
          imgAlt="Kids' Essentials"
          buttonText="Kids"
          link="/thirdcompo/second"
        />
      </div>
    </div>
  );
};

export default FeaturedSection3;
