import React from 'react';

interface PortfolioItemProps {
  imageSrc: string;
  title: string;
  description: string;
  link?: string;
  github?: string;
  frontend?: string[];
  backend?: string[];
  database?: string[];
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ 
  imageSrc, 
  title, 
  description, 
  link, 
  github,
  frontend,
  backend,
  database 
}) => {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <img src={imageSrc} alt={title} className="rounded-lg shadow-lg" />
      <div>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="mb-4">
          {frontend && frontend.length > 0 && (
            <div>
              <span className="font-medium">フロントエンド: </span>
              <span className="text-gray-700">{frontend.join(', ')}</span>
            </div>
          )}
          {backend && backend.length > 0 && (
            <div>
              <span className="font-medium">バックエンド: </span>
              <span className="text-gray-700">{backend.join(', ')}</span>
            </div>
          )}
          {database && database.length > 0 && (
            <div>
              <span className="font-medium">データベース: </span>
              <span className="text-gray-700">{database.join(', ')}</span>
            </div>
          )}
        </div>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-600 hover:underline font-medium"
          >
            ▶ 作品を見る
          </a>
        ) : (
          <span className="inline-block mt-2 text-black font-medium">▶ 作品を見る</span>
        )}
        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-600 hover:underline font-medium ml-4"
          >
            ▶ GitHubを見る
          </a>
        ) : (
          <span className="inline-block mt-2 text-black font-medium ml-4">▶ GitHubを見る</span>
        )}
      </div>
    </section>
  );
}

export default PortfolioItem;