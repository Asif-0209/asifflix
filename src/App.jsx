import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import ProjectRow from "./components/ProjectRow";
import ExperienceRow from "./components/ExperienceRow";
import Skills from "./components/Skills";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import AboutPage from "./pages/AboutPage";
import AIBot from "./components/AIBot";

const myProjects = [
  {
    title: "Agent Security Benchmark & Prompt Injection Detector",
    tech: "PyTorch · Transformers · SLURM · HPC · LLM Agents",
    category: "Research",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80",
    link: "https://github.com/Asif-0209",
    steps: [
      "Built the first benchmark of 12,536 agent tool-call trajectories spanning 5 domains and 6 attack types for studying prompt-injection defenses.",
      "Automated generation pipeline on NAU HPC cluster (Llama-3.3-70B, parallel SLURM jobs) producing benign, attacked, and resisted-attack trajectories.",
      "Drove label correctness from under 10% to 99.6% across 3 dataset iterations by diagnosing semantic-collapse and positional-labeling failures.",
      "Architected dual-head Transformer encoder detecting trajectory-level injections and localizing step-level prompts using self-attention.",
      "Designed evaluation around 1,500 hard negatives to verify the model learns true injection signal rather than surface novelty.",
    ],
    skills: ["PyTorch", "Transformers", "HPC", "SLURM", "Agent Security", "LLM Agents", "Data Engineering", "Deep Learning"],
  },
  {
    title: "Schema-Constrained Medical Document Extraction Agent",
    tech: "GenAI · AWS · LangChain · Amazon Bedrock · LlamaCloud",
    category: "GenAI",
    image: "https://cdn.prod.website-files.com/61e7d259b7746e3f63f0b6be/635297215329779e911ed18f_cv%20parser%20eden%20ai%20.svg",
    link: "https://github.com/Asif-0209/medical-pdf-to-schema",
    steps: [
      "Built an end-to-end GenAI pipeline extracting structured medical data from PDFs into validated JSON using Pydantic and JSON Schema.",
      "Integrated Amazon Bedrock for LLM inference and LlamaCloud for layout-aware document parsing across tables and narrative text.",
      "Implemented cost-optimized model routing with selective escalation from light analysis to high-accuracy extraction.",
      "Designed deterministic validation and auto-repair loops with type checks, unit normalization, and retry-only-invalid-fields logic.",
      "Orchestrated serverless batch processing via AWS Lambda, API Gateway, and S3 generating SQL/CSV-ready outputs with page-level provenance.",
    ],
    skills: ["GenAI", "Amazon Bedrock", "LangChain", "LlamaCloud", "AWS Lambda", "Pydantic", "JSON Schema", "RAG Pipelines", "Document AI"],
  },
  {
    title: "smart-preprocess — Open-Source PyPI Package",
    tech: "Python · Pandas · NumPy · scikit-learn · PyPI",
    category: "Open Source",
    image: "https://media.licdn.com/dms/image/v2/D5622AQGeRnRFffhY4Q/feedshare-shrink_2048_1536/B56Zpv8pT1H8Aw-/0/1762814761228?e=1770249600&v=beta&t=i3uP7fFTkOi4Y2rMDeS9q3w91pqVk6Ecx8yribmyshk",
    link: "https://pypi.org/project/smart-preprocess-asif/",
    steps: [
      "Published open-source Python package to PyPI automating ML data preprocessing — cleaning, type handling, missing values, normalization, and encoding.",
      "Designed modular pipeline-ready utilities integrating into end-to-end ML workflows, reducing data preparation time across projects.",
      "Docs written as agent-consumable Markdown and YAML so coding agents and new users can adopt it without friction.",
      "Maintained versioned, CI-driven releases with documentation and usage examples.",
    ],
    skills: ["Python", "Pandas", "NumPy", "scikit-learn", "Feature Engineering", "Open Source", "PyPI", "CI/CD"],
  },
  {
    title: "Human Activity Recognition — CNN + LSTM",
    tech: "PyTorch · Deep Learning · Time-Series · IEEE Published",
    category: "Research",
    image: "https://www.labellerr.com/blog/content/images/size/w2000/2023/06/sports-activity-recognition.jpeg",
    link: "https://ieeexplore.ieee.org/document/10649335",
    steps: [
      "Built a CNN + LSTM hybrid model classifying 15 human activities with 92% accuracy on time-series sensor data.",
      "Processed 1.2M+ sensor readings with Pandas and NumPy, improving generalization and cutting training time by 35%.",
      "Trained with PyTorch and GPU acceleration using GridSearchCV for hyperparameter tuning.",
      "Published and presented at IEEE International Conference on Contemporary Computing and Communications (InC4) 2024.",
    ],
    skills: ["PyTorch", "CNN", "LSTM", "Deep Learning", "Time-Series", "NumPy", "GPU Training", "IEEE Publication"],
  },
];

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <section id="projects" className="scroll-mt-24">
                <ProjectRow title="Featured Work" projects={myProjects} />
              </section>
              <ExperienceRow />
              <Skills />
              <footer className="text-center py-10 text-gray-400 border-t border-gray-800 bg-black mt-10">
                <p>Asif Pinjari · AI/ML Engineer · React × Tailwind</p>
              </footer>
            </>
          }
        />
        <Route path="/projects" element={<ProjectsPage projects={myProjects} />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <AIBot />
    </div>
  );
}

export default App;
