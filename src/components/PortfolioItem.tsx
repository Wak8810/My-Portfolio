import React from 'react';

interface PortfolioItemProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ imageSrc, title, description, link }) => {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <img src={imageSrc} alt={title} className="rounded-lg shadow-lg" />
      <div>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-blue-600 hover:underline font-medium">
          ▶ 作品を見る
        </a>
      </div>
    </section>
  );
}

export default PortfolioItem;