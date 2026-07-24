import React from "react";

const Publications: React.FC = () => {
  return (
    <section
      id="publications"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[100px] dark:bg-purple-600/5 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-6 sm:px-12 md:px-24 text-center">
        <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-4xl sm:text-[50px] font-bold tracking-tight dark:from-blue-400 dark:to-purple-400">
          Publications
        </h2>
        <p className="max-w-2xl text-lg sm:text-[20px] text-gray-600 dark:text-gray-300">
          Research I have contributed to in software architecture and system modernization.
        </p>
      </div>

      <div className="relative z-10 mt-16 w-full max-w-4xl px-6">
        <article className="group relative w-full rounded-3xl bg-white/40 border border-white/60 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/60 dark:bg-gray-900/40 dark:border-gray-700/50 dark:hover:bg-gray-800/60 sm:p-12">
          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm font-semibold">
            <span className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1 text-white shadow-md">
              Conference Paper
            </span>
            <span className="text-gray-600 dark:text-gray-400">WorldCIST 2026</span>
          </div>

          <h3 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl">
            From Monolith to Microservices: A Comparative Evaluation of Decomposition Frameworks
          </h3>

          <p className="mt-6 text-lg font-medium text-gray-700 dark:text-gray-300">
            Mineth Weerasinghe, Himindu Kularathne, Methmini Madhushika, Danuka Lakshan, Nisansa de Silva,
            Adeesha Wijayasiri, and Srinath Perera
          </p>

          <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            A comparative evaluation of static, dynamic, and hybrid frameworks for decomposing monolithic applications
            into microservices, using a consistent metric pipeline across widely used benchmark systems.
          </p>

          <a
            href="https://link.springer.com/chapter/10.1007/978-3-032-32032-2_29"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 font-semibold text-white shadow-md transition-all hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
            aria-label="Read From Monolith to Microservices on Springer"
          >
            Read on Springer
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </article>
      </div>
    </section>
  );
};

export default Publications;
