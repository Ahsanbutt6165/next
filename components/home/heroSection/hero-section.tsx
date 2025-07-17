import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 px-6 lg:px-20 ">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Discover Insightful <span className="text-blue-400">Articles</span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Read expert-written guides, tutorials, and opinions across various
          topics in web development, design, and technology.
        </p>
        <div className="mb-8">
          <button className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium">
            Explore Now
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 text-gray-200 text-sm sm:text-base">
          <div>
            <span className="text-2xl font-bold text-white">1K+</span>
            <br />
            Published Articles
          </div>
          <div className="border-l border-gray-500 h-12 hidden sm:block"></div>

          <div>
            <span className="text-2xl font-bold text-white">8,500+</span>
            <br />
            Monthly Readers
          </div>
        </div>
      </div>
      <div className="mt-12 flex justify-center md:mt-12">
        <div className="w-48 h-64 rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
          <img
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIeNSoyrrpsLOc1_hmEoARtDWfnabqc12qfQ&s"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
