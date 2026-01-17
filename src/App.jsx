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
import AIBot from "./components/AIBot"; // 🤖 AI Chatbot

// 🎬 Centralized project data
const myProjects = [
  {
    title: "Human Activity Recognition Using CNN + LSTM",
    tech: "PyTorch, NumPy, GridSearchCV, Deep Learning",
    image:
      "https://www.labellerr.com/blog/content/images/size/w2000/2023/06/sports-activity-recognition.jpeg",
    link: "https://ieeexplore.ieee.org/",
    steps: [
      "Collected time-series sensor data for 15 human activities.",
      "Preprocessed data with Pandas & NumPy for consistency.",
      "Designed CNN + LSTM hybrid model for sequence classification.",
      "Trained on GPU using PyTorch with hyperparameter tuning.",
      "Evaluated using F1-score, precision, and recall metrics.",
    ],
    skills: ["Python", "PyTorch", "NumPy", "Deep Learning", "GridSearchCV"],
  },
  {
    title: "Cloud-Based Chat Platform with NLP and ML Integration",
    tech: "Google Cloud, Docker, Kubernetes, NLP, ML, MongoDB",
    image:
      "https://praxie.com/wp-content/uploads/2025/01/1736285778188x602261657773534500-feature-1792x896.png",
    link: "https://github.com/",
    steps: [
      "Developed scalable chat backend using Flask and MongoDB.",
      "Integrated NLP for intent classification and sentiment analysis.",
      "Containerized services using Docker and deployed via Kubernetes.",
      "Enabled predictive text and conversation summarization.",
      "Deployed CI/CD pipeline on Google Cloud with auto-scaling.",
    ],
    skills: ["Python", "Google Cloud", "Docker", "Kubernetes", "NLP", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    tech: "React, TailwindCSS, Responsive UI",
    image:
      "https://aiexpert.network/wp-content/uploads/2023/11/How-Netflix-is-Leveraging-AI-to-Transform-Streaming.jpg",
    link: "https://github.com/asif",
    steps: [
      "Designed Netflix-inspired UI using React & TailwindCSS.",
      "Created reusable components for navigation and project display.",
      "Integrated dynamic project data with hover animations.",
      "Deployed to GitHub Pages for public viewing.",
    ],
    skills: ["React", "TailwindCSS", "JavaScript", "Vite"],
  },
  {
  title: "Schema-Constrained Medical Document Extraction Agent",
  tech: "GenAI · AWS · LangChain · Amazon Bedrock · LlamaCloud",
  image:
    "https://cdn.prod.website-files.com/61e7d259b7746e3f63f0b6be/635297215329779e911ed18f_cv%20parser%20eden%20ai%20.svg", // safe placeholder (can change later)
  link: "https://github.com/Asif-0209/medical-pdf-to-schema",
  steps: [
    "Built an end-to-end GenAI pipeline to extract structured medical data from PDFs into strict, validated JSON using Pydantic and JSON Schema.",
    "Integrated Amazon Bedrock for LLM inference and LlamaCloud for layout-aware document parsing (tables + narrative text).",
    "Implemented cost-optimized model routing with selective escalation (light analysis → high-accuracy extraction).",
    "Designed deterministic validation and auto-repair loops (type checks, unit/date normalization, retry-only-invalid-fields).",
    "Orchestrated serverless batch processing using AWS Lambda, API Gateway, and S3 to generate SQL/CSV-ready outputs.",
    "Produced RAG-ready structured data with page-level provenance (source page + supporting snippet).",
  ],
  skills: [
    "GenAI",
    "Schema-Constrained LLMs",
    "Amazon Bedrock",
    "LangChain",
    "LlamaCloud",
    "AWS Lambda",
    "API Gateway",
    "S3",
    "Pydantic",
    "JSON Schema",
    "Cost Optimization",
    "Document AI",
    "RAG Pipelines",
  ],
},
  {
  title: "smart-preprocess (PyPI) — Open-Source Data Preprocessing Toolkit",
  tech: "Python · Pandas · NumPy · scikit-learn · Feature Engineering · PyPI",
  image: "https://media.licdn.com/dms/image/v2/D5622AQGeRnRFffhY4Q/feedshare-shrink_2048_1536/B56Zpv8pT1H8Aw-/0/1762814761228?e=1770249600&v=beta&t=i3uP7fFTkOi4Y2rMDeS9q3w91pqVk6Ecx8yribmyshk",
  link: "https://pypi.org/project/smart-preprocess-asif/", 
  steps: [
    "Designed a reusable preprocessing API to convert raw datasets into model-ready features with minimal code.",
    "Implemented missing-value handling, encoding, scaling, outlier treatment, and feature engineering utilities.",
    "Ensured pipeline compatibility for ML workflows (clean → transform → train) with consistent outputs.",
    "Packaged and published releases to PyPI with versioning, documentation, and usage examples.",
    "Optimized developer UX: sensible defaults + configurable options for different datasets and tasks."
  ],
  skills: [
    "Python",
    "Pandas",
    "NumPy",
    "scikit-learn",
    "Feature Engineering",
    "Data Preprocessing",
    "Open Source",
    "PyPI Packaging",
    "Documentation"
  ],
},
  {
  title: "AI Resume Analyzer & Job Matching Assistant",
  tech: "GenAI · LangChain · LlamaCloud · Embeddings · Vector Search",
  image:
    "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/da42d8082a500c505595b28abce42c779d69e10a/36946bf109a859852b967a73ad2f44224788c79d",
  link: "https://github.com/Asif-0209", // replace with repo if public
  steps: [
    "Built a GenAI-powered system to parse resumes and job descriptions into structured candidate profiles using schema-constrained extraction.",
    "Orchestrated the pipeline using LangChain to ensure reliable conversion from unstructured text to validated JSON outputs.",
    "Integrated LlamaCloud API for layout-aware resume parsing and section segmentation (skills, experience, education).",
    "Implemented embedding-based similarity matching between resumes and job descriptions to compute role-fit scores and identify missing skills.",
    "Designed validation and normalization logic to maintain consistent skill taxonomies and role mappings across candidates.",
    "Exposed the system via REST APIs for scalable batch resume analysis and job-matching workflows."
  ],
  skills: [
    "GenAI",
    "LangChain",
    "LlamaCloud",
    "Embeddings",
    "Vector Similarity Search",
    "Schema-Constrained Extraction",
    "JSON Schema",
    "REST APIs",
    "RAG Pipelines",
    "Document AI"
  ],
},



];

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* 🌐 Global Navbar */}
      <Navbar />

      {/* ⚡ Main Routes */}
      <Routes>
        {/* 🏠 Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />

              {/* 🎬 Featured Projects Section with ID for smooth scroll */}
              <section id="projects" className="scroll-mt-24">
                <ProjectRow
                  title="🎬 My Featured Projects"
                  projects={myProjects}
                />
              </section>

              <ExperienceRow />
              <Skills />

              <footer className="text-center py-10 text-gray-400 border-t border-gray-800 bg-black mt-10">
                <p>©Asif P • AI/ML Engineer Portfolio • React × Tailwind × OpenAI</p>
              </footer>
            </>
          }
        />

        {/* 🎥 Projects Page */}
        <Route
          path="/projects"
          element={<ProjectsPage projects={myProjects} />}
        />

        {/* 💼 Experience Page */}
        <Route path="/experience" element={<ExperiencePage />} />

        {/* 🧠 Skills Page */}
        <Route path="/skills" element={<Skills />} />

        {/* 🎓 Education Page */}
        <Route path="/education" element={<EducationPage />} />

        {/* ℹ️ About Page */}
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      {/* 🤖 Floating AI Assistant (visible on all pages) */}
      <AIBot />
    </div>
  );
}

export default App;
