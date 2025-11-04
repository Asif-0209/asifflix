import React from "react";

function Skills() {
  const skills = [
    {
      category: "Languages",
      items: [
        "Python (Advanced)",
        "Java",
        "MySQL",
        "C",
        "HTML/CSS",
        "Scala",
        "MongoDB",
        "React/TailwindCSS",
      ],
    },
    {
      category: "Frameworks & Technologies",
      items: [
        "TensorFlow",
        "PyTorch",
        "scikit-learn",
        "OpenAI",
        "Keras",
        "OpenCV",
        "AWS",
        "Google Cloud Platform (GCP)",
        "Hadoop",
        "Apache Spark",
      ],
    },
    {
      category: "Developer Tools",
      items: [
        "Git",
        "VS Code",
        "Eclipse",
        "Jupyter Notebook",
        "Google Colab",
        "Vercel",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Teamwork",
        "Leadership",
        "Decision-Making",
        "Problem-Solving",
        "Adaptability",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-black text-white px-10 py-16 border-t border-gray-800"
    >
      <h2 className="text-3xl font-semibold mb-8">🧠 Technical Skills</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {skills.map((skillGroup, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300 border border-gray-800"
          >
            <h3 className="text-xl font-bold text-red-500 mb-3">
              {skillGroup.category}
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {skillGroup.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
