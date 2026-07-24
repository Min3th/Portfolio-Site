import React, { ReactNode } from "react";

type CardProps = {
  imageUrl: string;
  title: string;
  description: string | ReactNode;
  symbols: string[];
  link: string; 
};

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  symbols,
  link, 
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-auto min-h-[450px] w-full max-w-[500px] flex-col overflow-hidden rounded-2xl bg-white/40 border border-white/60 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/60 dark:bg-gray-900/40 dark:border-gray-700/50 dark:hover:bg-gray-800/60"
    >
      <div className="overflow-hidden">
        <img src={imageUrl} alt={title} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-3 flex-1 text-base text-gray-600 dark:text-gray-300">{description}</p>
        <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
          {symbols.map((symbol, index) => (
            <img key={index} src={symbol} alt={`symbol-${index}`} className="h-8 w-8 object-contain" />
          ))}
        </div>
      </div>
    </a>
  );
};

export default Card;
