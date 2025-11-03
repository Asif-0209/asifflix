function Hero() {
  return (
    <section
      className="relative h-[85vh] w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center px-12 text-white"
      style={{
        backgroundImage:
          "url('https://praxie.com/wp-content/uploads/2025/01/1736285778188x602261657773534500-feature-1792x896.png')",
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

      {/* Hero Text */}
      <div className="relative z-10 max-w-2xl space-y-4 fade-up">
        <h1 className="text-5xl font-bold text-red-500 drop-shadow-lg">
          Asif’s Netflix-Inspired Portfolio
        </h1>

        <p className="text-lg text-gray-200 leading-relaxed">
          A showcase of machine learning, AI, and cloud-driven innovations — 
          blending creativity and technology into every project.
        </p>

        <div className="pt-2">
          <a
            href="#projects"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold transition"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
