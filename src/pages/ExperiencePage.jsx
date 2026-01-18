import React from "react";

function ExperiencePage() {
  const experiences = [
    {
      title: "AI/ML Engineer",
      company: "Northern Arizona University",
      location: "Arizona, United States",
      period: "Oct 2024 – Dec 2025",
      description: [
        "Designed and deployed end-to-end machine learning pipelines for campus research datasets using Python, Scikit-learn, and TensorFlow, improving model accuracy by up to 30% across multiple prediction tasks." , 
        "Built Retrieval-Augmented Generation (RAG) systems using Hugging Face models and FAISS vector databases to enable semantic search and document-based question answering for academic workflows.",
        "Developed automated data preprocessing and feature engineering pipelines with Pandas, NumPy, and SQL, reducing data preparation time by 40% and improving dataset consistency.",
        "Implemented and containerized FastAPI-based ML inference services using Docker, enabling scalable model deployment across AWS and GCP environments.",
        "Integrated LLM-powered analytics and AI-driven dashboards with existing campus systems, supporting data-driven decision-making for 200+ faculty and administrators.",
        "Collaborated with faculty researchers and IT teams to iterate on model design, evaluation metrics, and deployment strategies, ensuring reproducibility and production readiness.",
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
      period: "Aug 2024 – Dec 2025",
      description: [
        "Mentored 120+ students in Python programming, data structures, and algorithmic problem-solving, strengthening foundations required for machine learning and data engineering workflows.",
        "Guided students in building data processing pipelines using Pandas, NumPy, and API-based data ingestion, connecting coursework to real-world ML data preparation tasks.",
        "Conducted code reviews and one-on-one debugging sessions, improving project performance and reducing logic and implementation errors in ML-style programming assignments",
        
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
        "Developed intelligent automation systems integrating machine learning models with IoT-enabled devices, enabling adaptive responses to human behavior and"
         "environmental conditions.",
        "Implemented context-aware ML models that dynamically adjusted lighting, temperature, and energy usage, increasing overall automation efficiency by 40%.",
        "Optimized model inference using TensorFlow Lite and deployed models on edge devices, achieving real-time performance with less than 50ms latency.",
        "Collaborated with embedded systems and hardware engineering teams to ensure stable ML integration across 10+ smart home products, improving system reliability and user experience. ",
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
    "PyPI Open-Source Package Author",
    "AWS Certified AI Practitioner" ,
    "AWS Certified Machine Learning Engineer - Associate",
    "IEEE InC4 2024 Publication",
    "Google Cloud Computing Foundations: 12 Badges",
    "Served as President of the College House for two consecutive years",
    "Merit certifications in Machine Learning, Data Structures & Algorithms, and Python from Udemy"
    ,
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
        <p>©Asif P • AI/ML Engineer Portfolio • React × Tailwind × OpenAI</p>
      </footer>
    </div>
  );
}

export default ExperiencePage;
