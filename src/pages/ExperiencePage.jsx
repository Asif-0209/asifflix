import React from "react";

function ExperiencePage() {
  const experiences = [
    {
      title: "AI/ML Engineer",
      company: "Northern Arizona University",
      location: "Arizona, USA",
      period: "Jul 2025 — Present",
      description: [
        "Architected and deployed production LLM applications using LangChain and LangGraph on AWS Bedrock with multi-agent orchestration, tool-use integration, and RAG pipelines — giving researchers across three departments real-time access to insights and reducing manual data-gathering time by 40%.",
        "Fine-tuned open-source LLMs using LoRA/QLoRA and PEFT on domain-specific datasets, improving task accuracy and reducing inference cost by selecting optimized adapter configurations over full model retraining.",
        "Built end-to-end ML pipelines in Python covering data ingestion, cleaning, feature engineering, training, validation, and artifact packaging — improving model accuracy by 30% across multiple prediction tasks.",
        "Implemented containerized FastAPI inference services with Docker deployed on AWS and GCP, with versioned model endpoints, automated health checks, and CI/CD through GitHub Actions.",
        "Integrated LLM-powered analytics dashboards with enterprise campus systems enabling data-driven reporting for 200+ faculty and administrators, while optimizing prompt strategies and token usage.",
        "Authored technical documentation, runbooks, and onboarding guides enabling non-technical stakeholders to independently operate LLM-powered tools.",
      ],
      skills: ["LangChain", "LangGraph", "AWS Bedrock", "RAG", "Multi-Agent Orchestration", "LoRA/QLoRA", "FastAPI", "Docker", "CI/CD"],
    },
    {
      title: "Software Engineer — Machine Learning",
      company: "Vincon Reality Pvt. Ltd.",
      location: "Hyderabad, India",
      period: "Sep 2022 — May 2024",
      description: [
        "Shipped production Python systems integrating ML inference with IoT device control, improving automation efficiency by 40%.",
        "Optimized inference with quantization and pruning to sub-50ms latency across 10+ products, within 2% of full-precision accuracy.",
        "Built SQL/Python data pipelines feeding scheduled retraining jobs from high-volume telemetry.",
        "Introduced CI with automated regression tests cutting defects by 30%; led debugging of hardware-software integration issues across 10+ smart home products.",
      ],
      skills: ["TensorFlow Lite", "IoT", "Edge AI", "Model Optimization", "Quantization", "SQL Pipelines", "CI/CD"],
    },
  ];

  const research = [
    {
      title: "Agent Security Benchmark & Prompt Injection Detector",
      company: "Northern Arizona University — Research",
      period: "Feb 2026 — Present",
      description: [
        "Built the first benchmark of 12,536 LLM-agent tool-call trajectories with step-level prompt-injection labels spanning 5 agent domains and 6 attack types.",
        "Automated generation pipeline on NAU Monsoon HPC cluster (Llama-3.3-70B, parallel SLURM jobs) producing benign, attacked, and resisted-attack trajectories plus 1,500 hard negatives.",
        "Drove label correctness from under 10% to 99.6% across 3 iterations by diagnosing semantic-collapse and positional-labeling failures, validated against 1,200+ manually reviewed samples.",
        "Architected a dual-head Transformer encoder detecting trajectory-level injections and localizing step-level prompts using self-attention to capture long-range dependencies.",
        "Designed evaluation around hard negatives to verify the model learns true injection signal rather than surface novelty. Working toward peer-reviewed publication.",
      ],
      skills: ["PyTorch", "Transformers", "HPC", "SLURM", "Agent Security", "Prompt Injection", "Data Engineering", "LLM Evaluation"],
    },
  ];

  const openSource = [
    {
      title: "smart-preprocess",
      subtitle: "pip install smart-preprocess-asif",
      link: "https://pypi.org/project/smart-preprocess-asif/",
      description: [
        "Published open-source Python package to PyPI automating common ML data preprocessing steps — cleaning, type handling, missing value strategies, normalization, and encoding.",
        "Designed modular, pipeline-ready utilities that integrate into end-to-end ML experiments reducing data preparation time and improving consistency across projects.",
        "Docs written as agent-consumable Markdown and YAML so coding agents and new users can adopt it quickly without reading source.",
      ],
      skills: ["Python", "Pandas", "NumPy", "scikit-learn", "PyPI", "Open Source", "CI/CD"],
    },
  ];

  const certifications = [
    "IEEE InC4 2024 Publication — CNN+LSTM Human Activity Recognition (92% accuracy)",
    "AWS Certified AI Practitioner",
    "AWS Certified Machine Learning Engineer — Associate",
    "PyPI Open-Source Package Author",
    "Google Cloud Computing Foundations — 12 Badges",
    "M.S. Computer Science, Northern Arizona University (GPA: 3.9/4.0)",
  ];

  const SectionCard = ({ item }) => (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-red-600/40 transition-colors duration-300">
      <h2 className="text-xl font-bold text-red-500 mb-1">{item.title}</h2>
      {item.subtitle && (
        <a href={item.link} target="_blank" rel="noopener noreferrer"
          className="text-sm text-red-400 hover:underline mb-1 block">{item.subtitle}</a>
      )}
      <p className="text-gray-300 text-sm">{item.company}</p>
      {item.period && <p className="text-gray-500 text-sm mb-3">{item.period}</p>}
      <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1 text-sm">
        {item.description.map((d, i) => <li key={i}>{d}</li>)}
      </ul>
      <div className="flex flex-wrap gap-2">
        {item.skills.map((s, i) => (
          <span key={i} className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-xs">{s}</span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-black min-h-screen text-white pt-24">
      <header className="p-8 border-b border-gray-700 text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-2">Experience</h1>
        <p className="text-gray-400">Production AI systems, applied research, and open-source work.</p>
      </header>

      <section className="px-10 pt-10">
        <h2 className="text-xl font-semibold text-gray-300 mb-6 border-b border-gray-800 pb-2">Industry</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => <SectionCard key={i} item={exp} />)}
        </div>
      </section>

      <section className="px-10 pt-10">
        <h2 className="text-xl font-semibold text-gray-300 mb-6 border-b border-gray-800 pb-2">Research</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {research.map((r, i) => <SectionCard key={i} item={r} />)}
        </div>
      </section>

      <section className="px-10 pt-10">
        <h2 className="text-xl font-semibold text-gray-300 mb-6 border-b border-gray-800 pb-2">Open Source</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {openSource.map((o, i) => <SectionCard key={i} item={o} />)}
        </div>
      </section>

      <section className="px-10 pt-10 pb-16 border-t border-gray-800 mt-10">
        <h2 className="text-xl font-semibold text-gray-300 mb-6">Credentials</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
          {certifications.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
      </section>

      <footer className="text-center py-10 text-gray-400 border-t border-gray-800">
        <p>Asif Pinjari · AI/ML Engineer · React × Tailwind</p>
      </footer>
    </div>
  );
}

export default ExperiencePage;
