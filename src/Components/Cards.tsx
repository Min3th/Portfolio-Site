import React, { ReactNode } from "react";

type CardProps = {
  imageUrl: string;
  title: string;
  description: string | ReactNode;
  symbols: string[];
  link: string; // Add this prop to pass the GitHub repo link
};

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  symbols,
  link, // Destructure the link prop
}) => {
  return (
    <a
      href={link} // Set the href to the link prop
      target="_blank"
      rel="noopener noreferrer"
      className="relative block h-[600px] w-[300px] cursor-pointer overflow-hidden rounded-lg border bg-[#fffcfe] shadow-lg transition duration-[250ms] ease-in-out hover:scale-[1.05] dark:border-none dark:bg-gray-900 dark:shadow-md dark:shadow-black sm:h-[400px] sm:w-[590px]"
    >
      <img src={imageUrl} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4 dark:text-blue-100">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <div className="absolute bottom-0 right-0 flex h-[65px] w-[300px] justify-end space-x-2 p-4">
        {symbols.map((symbol, index) => (
          <img key={index} src={symbol} alt={`symbol-${index}`} />
        ))}
      </div>
    </a>
  );
};

export default Card;
