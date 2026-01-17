import React from "react";

function Skills() {
  const skills = [
    {
      category: "Programming & Databases",
      items: [
        "Python (Advanced), C",
        "SQL / MySQL, MongoDB",
        "Data modeling, query optimization, schema design",
      ],
    },
    {
      category: "AI & Machine Learning",
      items: [
        "TensorFlow, PyTorch, Scikit-learn, XGBoost",
        "Deep Learning: CNNs, LSTMs, Transformers",
        "Model training, evaluation, hyperparameter tuning, model optimization",
      ],
    },
    {
      category: "LLMs, GenAI & RAG",
      items: [
        "Hugging Face, OpenAI / Bedrock-style APIs",
        "RAG pipelines, embeddings, vector databases (FAISS)",
        "Prompt engineering, LLM fine-tuning, schema-constrained extraction",
        "Cost-optimized inference, context management",
      ],
    },
    {
      category: "Data Science & Analytics",
      items: [
        "Pandas, NumPy, SciPy",
        "Visualization: Matplotlib, Seaborn",
        "Statistical modeling, exploratory data analysis (EDA)",
      ],
    },
    {
      category: "Cloud, MLOps & Deployment",
      items: [
        "AWS, Google Cloud Platform (GCP)",
        "Docker, Kubernetes, CI/CD pipelines",
        "FastAPI, REST API development",
        "Model deployment, monitoring, scalable inference",
      ],
    },
    {
      category: "Big Data & Distributed Systems",
      items: [
        "Apache Spark, Hadoop",
        "Distributed data processing pipelines",
        "Feature engineering at scale",
      ],
    },
    {
      category: "Developer & Productivity Tools",
      items: [
        "Git, Jupyter Notebook, VS Code",
        "CLI tools, debugging, reproducible workflows",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Leadership",
        "critical thinking",
        "strong communication",
        "problem-solving",
        "adaptability",
        "collaboration",
        "Team Work",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-black text-white px-6 md:px-10 py-16 border-t border-gray-800"
    >
      <h2 className="text-3xl font-semibold mb-8">🧠 Technical Skills</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skillGroup, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg hover:shadow-red-600/20 transition-all duration-300 border border-gray-800"
          >
            <h3 className="text-xl font-bold text-red-500 mb-3">
              {skillGroup.category}
            </h3>

            <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed">
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

