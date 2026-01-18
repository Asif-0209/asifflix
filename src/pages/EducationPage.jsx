import React from "react";

function EducationPage() {
  const education = [
    {
      degree: "Master’s in Computer Science",
      school: "Northern Arizona University, United States",
      period: "2024 – 2025",
      cgpa: "CGPA: 3.91 / 4.0",
    },
    {
      degree: "B.Tech in Computer Science",
      school: "Amrita School of Engineering, Chennai, India",
      period: "2020 – 2024",
      cgpa: "CGPA: 7.8 / 10",
    },
    {
      degree: "Mathematics, Physics and Chemistry",
      school: "Sri Chaitanya Junior College, Kurnool, India",
      period: "2018 – 2020",
      cgpa: "Marks: 976 / 1000",
    },
    {
      degree: "Andhra Pradesh Secondary School Certificate",
      school: "Montessori Indus Residential School, Kurnool, India",
      period: "2017 – 2018",
      cgpa: "CGPA: 10 / 10",
    },
  ];

  
  

  return (
    <div className="bg-black min-h-screen text-white pt-24">
      {/* Header */}
      <header className="p-8 border-b border-gray-700 text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-2">
          🎓 Education
        </h1>
        <p className="text-gray-400">
          A journey of continuous learning, leadership, and excellence.
        </p>
      </header>

      {/* Education Section */}
      <section className="p-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-red-600/20"
          >
            <h2 className="text-xl font-bold text-red-500 mb-2">{edu.degree}</h2>
            <p className="text-gray-300">{edu.school}</p>
            <p className="text-gray-400 text-sm mb-1">{edu.period}</p>
            <p className="text-gray-400">{edu.cgpa}</p>
          </div>
        ))}
      </section>

     

      {/* Footer */}
      <footer className="text-center py-10 text-gray-400 border-t border-gray-800 mt-10">
        <p>©Asif P • AI/ML Engineer Portfolio • React × Tailwind × OpenAI</p>
      </footer>
    </div>
  );
}

export default EducationPage;
