import React from "react";

const Publications: React.FC = () => {
  return (
    <section
      id="publications"
      className="relative flex w-full scroll-mt-[60px] flex-col items-center justify-center px-5 py-24 text-center sm:px-10"
    >
      <h2 className="font-[sans-serif] text-[50px] font-semibold dark:text-white">Publications</h2>
      <p className="mt-2 max-w-3xl text-[20px] dark:text-white">
        Research I have contributed to in software architecture and system modernization.
      </p>

      <article className="mt-10 w-full max-w-4xl rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-950 dark:text-white dark:shadow-gray-900 sm:p-8">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-gray-900 px-3 py-1 font-medium text-white dark:bg-white dark:text-black">
            Conference Paper
          </span>
          <span className="font-medium text-gray-600 dark:text-gray-300">WorldCIST 2026</span>
        </div>

        <h3 className="font-[sans-serif] text-2xl font-semibold leading-tight sm:text-3xl">
          From Monolith to Microservices: A Comparative Evaluation of Decomposition Frameworks
        </h3>

        <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
          Mineth Weerasinghe, Himindu Kularathne, Methmini Madhushika, Danuka Lakshan, Nisansa de Silva,
          Adeesha Wijayasiri, and Srinath Perera
        </p>

        <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
          A comparative evaluation of static, dynamic, and hybrid frameworks for decomposing monolithic applications
          into microservices, using a consistent metric pipeline across widely used benchmark systems.
        </p>

        <a
          href="https://link.springer.com/chapter/10.1007/978-3-032-32032-2_29"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 font-medium text-white transition duration-200 hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          aria-label="Read From Monolith to Microservices on Springer"
        >
          Read on Springer
          <span aria-hidden="true">&rarr;</span>
        </a>
      </article>
    </section>
  );
};

export default Publications;
