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
    title: "EthicAI — Classroom AI Literacy Toolkit for K-12 Educators",
    tech: "Claude API · LangChain · Pydantic · Streamlit · Evaluation Harness",
    category: "GenAI",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
    link: "https://github.com/Asif-0209",
    steps: [
      "Built end-to-end AI literacy toolkit for NAU's Semester Zero program: a prompt-coaching assistant grading student prompts on clarity, specificity, and safety; an AI-output verifier helping students fact-check responses; and a teacher dashboard flagging concerning queries for educator review.",
      "Implemented guardrails using system prompts, structured outputs (Pydantic), and content filtering; built evaluation harness measuring guardrail accuracy across 200+ test prompts with a 96% appropriate-refusal rate.",
      "Authored a complete handoff runbook with setup instructions, classroom integration guide, troubleshooting FAQ, and lesson plans so a non-technical teacher can run it independently after a 30-minute walkthrough.",
      "Trained 4 educators to operate the tool autonomously; the tool continues running for subsequent Semester Zero cohorts.",
    ],
    skills: ["Claude API", "LangChain", "Pydantic", "Streamlit", "Guardrails", "Content Moderation", "Evaluation Harness", "AI Literacy"],
  },
  {
    title: "OfficeHours — Internal AI Assistant for University Workflows",
    tech: "Claude API · Amazon Bedrock · LangChain · FAISS · RAG",
    category: "GenAI",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    link: "https://github.com/Asif-0209",
    steps: [
      "Built internal AI assistant helping non-technical university staff handle repetitive administrative workflows: drafting policy emails, summarizing meeting notes, and answering FAQs about campus procedures.",
      "Integrated with campus knowledge bases via RAG pipeline (Amazon Bedrock embeddings + FAISS), grounding every response in verified institutional documents with inline citations.",
      "Designed a judgment layer that catches wrong answers: refuses when retrieval confidence is low, flags policy-sensitive questions for human review, and shows users which source documents informed each response.",
      "Built evaluation harness (LLM-as-Judge + spot checks) achieving 92% accuracy on a 150-question test set; reduced average drafting time by ~40% and serves 200+ users.",
      "Wrote a runbook and 20-minute onboarding video so new staff can adopt it without IT support.",
    ],
    skills: ["Claude API", "Amazon Bedrock", "LangChain", "FAISS", "RAG", "LLM-as-Judge", "Pydantic", "Evaluation Harness"],
  },
  {
    title: "Multi-Agent Observability & Anomaly Detection Benchmark",
    tech: "PyTorch · Transformers · SLURM · HPC · LLM Agents",
    category: "Research",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80",
    link: "https://github.com/Asif-0209",
    steps: [
      "Conducting applied research on observability and anomaly detection in multi-agent AI communication systems, building evaluation harnesses and reproducible experiment pipelines tracking precision, recall, F1-score, and detection latency.",
      "Built a benchmark of 12,536 agent tool-call trajectories spanning 5 domains and 6 attack types, with custom data engineering workflows built from scratch.",
      "Automated generation pipeline on NAU HPC cluster (Llama-3.3-70B, parallel SLURM jobs) producing benign, attacked, and resisted-attack trajectories.",
      "Drove label correctness from under 10% to 99.6% across 3 dataset iterations, validated against 1,200+ manually reviewed samples.",
      "Architected dual-head Transformer encoder detecting trajectory-level anomalies and localizing step-level events; preparing peer-reviewed publication on agentic AI observability and self-refinement patterns.",
    ],
    skills: ["PyTorch", "Transformers", "HPC", "SLURM", "Agent Observability", "LLM Agents", "Data Engineering", "Evaluation Harnesses"],
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
      "Authored and published Python library on PyPI automating data preprocessing: missing values, encoding, scaling, and outlier handling. Actively downloaded across ML workflows.",
      "Designed modular pipeline-ready utilities integrating into end-to-end ML workflows, reducing data preparation time across projects.",
      "Built and maintained solo with no PM oversight; versioned, CI-driven releases with documentation and usage examples.",
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
