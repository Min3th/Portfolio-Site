import React from "react";

type CardProps = {
  imageUrl: string;
  title: string;
  description: string;
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
      target="_blank" // Open the link in a new tab
      rel="noopener noreferrer" // Improve security
      className="block border w-[390px] h-[450px] rounded-lg overflow-hidden shadow-lg hover:scale-[1.05] transition duration-[250ms] ease-in-out cursor-pointer relative bg-[#FCFCFF] dark:bg-gray-900 p-2 dark:border-none dark:shadow-gray-800 dark:shadow-md"
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-contain" />
      <div className="p-4 dark:text-blue-100">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <div className="p-4 flex justify-end space-x-2 w-[300px] h-[65px] absolute bottom-0 right-0">
        {symbols.map((symbol, index) => (
          <img key={index} src={symbol} alt={`symbol-${index}`} />
        ))}
      </div>
    </a>
  );
};

export default Card;
