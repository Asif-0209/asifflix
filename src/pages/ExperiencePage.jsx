import React from "react";

function ExperiencePage() {
  const experiences = [
    {
      title: "AI/ML Engineer",
      company: "Northern Arizona University",
      location: "Arizona, United States",
      period: "Oct 2024 – Present",
      description: [
        "Designed and implemented deep learning and predictive analytics models using PyTorch, OpenCV, and NumPy to analyze institutional datasets and forecast staff performance metrics.",
        "Developed and automated end-to-end AI pipelines integrating university databases for continuous learning and model retraining, improving forecasting precision by 25%.",
        "Collaborated with data engineering teams to build secure data access layers and deploy AI microservices on cloud infrastructure for real-time inference.",
        "Generated actionable insights that supported administrative decision-making, optimizing departmental efficiency by 35%.",
      ],
      skills: [
        "PyTorch",
        "OpenCV",
        "NumPy",
        "Predictive Analytics",
        "Cloud Deployment",
      ],
    },
    {
      title: "Teaching Assistant — Advanced Python",
      company: "Northern Arizona University",
      location: "Arizona, United States",
      period: "Dec 2024 – Present",
      description: [
        "Supported graduate, thesis, and undergraduate students in understanding Python programming, algorithm optimization, and data structures.",
        "Assisted in developing course materials, assignments, and lab demonstrations to enhance conceptual clarity and problem-solving efficiency.",
        "Provided one-on-one mentorship and conducted review sessions, improving student assessment outcomes by 20%.",
        "Collaborated with the course instructor to integrate AI, machine learning, and data science examples into the curriculum.",
      ],
      skills: [
        "Python",
        "Teaching",
        "Mentorship",
        "Data Structures",
        "Machine Learning",
      ],
    },
    {
      title: "Smart Automation ML Engineer",
      company: "Vincon Reality Pvt. Ltd.",
      location: "Hyderabad, India",
      period: "Sep 2022 – May 2024",
      description: [
        "Developed intelligent automation systems integrating machine learning models with IoT-enabled devices to adapt to human behavior and environmental inputs.",
        "Implemented context-aware models that adjusted lighting, temperature, and energy usage, increasing automation efficiency by 40%.",
        "Optimized model inference using TensorFlow Lite and deployed models on edge devices with <50ms latency.",
        "Collaborated with embedded systems teams to ensure system stability across 10+ smart home products.",
      ],
      skills: [
        "TensorFlow Lite",
        "IoT",
        "Edge AI",
        "Model Optimization",
        "Automation Systems",
      ],
    },
  ];

  const certifications = [
    "AI-900: Microsoft Azure AI Fundamentals Certification",
    "Google Cloud Computing Foundations: 12 Badges",
    "Served as President of the College House for two consecutive years",
    "Merit certifications in Machine Learning, Data Structures & Algorithms, and Python from Udemy",
  ];

  return (
    <div className="bg-black min-h-screen text-white pt-24">
      {/* Header */}
      <header className="p-8 border-b border-gray-700 text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-2">
          💼 Professional Experience
        </h1>
        <p className="text-gray-400">
          A journey of AI innovation, teaching, and intelligent automation.
        </p>
      </header>

      {/* Experience Grid */}
      <section className="p-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-red-600/20"
          >
            <h2 className="text-xl font-bold text-red-500 mb-1">
              {exp.title}
            </h2>
            <p className="text-gray-300">{exp.company}</p>
            <p className="text-gray-400 text-sm mb-1">{exp.location}</p>
            <p className="text-gray-500 text-sm mb-3">{exp.period}</p>

            <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-2">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Certifications Section */}
      <section className="p-10 border-t border-gray-800">
        <h2 className="text-2xl font-semibold text-red-500 mb-6">
          🏅 Certifications & Achievements
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-400 border-t border-gray-800 mt-10">
        <p>© 2025 Asif • Built with ❤️ using React + TailwindCSS</p>
      </footer>
    </div>
  );
}

export default ExperiencePage;
