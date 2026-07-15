import React from "react";

function ExperiencePage() {
  const experiences = [
    {
      title: "AI/ML Engineer",
      company: "Northern Arizona University",
      location: "Arizona, USA",
      period: "Jan 2025 — Present",
      description: [
        "Wore multiple hats across a public-university AI team: discovering stakeholder needs, scoping AI sprints with clear outcomes, shipping working solutions, and handing them off with runbooks so non-technical colleagues could own and operate them.",
        "Built and deployed agents, automations, internal tools, and integrations on Claude API + LangChain + AWS, including RAG pipelines, LLM-powered dashboards, and agentic workflows used by 200+ faculty and administrators across multiple departments.",
        "Embedded with non-technical stakeholders to translate ambiguous AI requests into shippable solutions; ran enablement sessions that turned faculty and admin colleagues into the AI go-to people on their teams.",
        "Exercised judgment to catch wrong answers in production AI outputs, pushed back on AI use-cases that would not actually help users, and cut features from demos that were not landing with the audience.",
        "Built evaluation harnesses measuring retrieval accuracy, response quality, and hallucination rates, turning subjective AI quality into concrete metrics stakeholders trusted.",
        "Improved model accuracy ~30% and reduced token usage ~40% through iterative prompt engineering, retrieval tuning, and selective model routing.",
      ],
      skills: ["Claude API", "LangChain", "AWS", "RAG", "Agentic Workflows", "Evaluation Harnesses", "Prompt Engineering", "Stakeholder Enablement"],
    },
    {
      title: "Research Assistant — AI, Agents & Deep Learning",
      company: "Northern Arizona University",
      location: "Arizona, USA",
      period: "Feb 2026 — Present",
      description: [
        "Conducting applied research on observability and anomaly detection in multi-agent AI communication systems, building evaluation harnesses and reproducible experiment pipelines tracking precision, recall, F1-score, and detection latency toward peer-reviewed publication.",
        "Built custom datasets and data engineering workflows from scratch with no PM tracking, translating ambiguous research goals into concrete experiment plans.",
        "Preparing peer-reviewed publication on agentic AI observability and self-refinement patterns in production LLM applications.",
      ],
      skills: ["Agent Observability", "Anomaly Detection", "PyTorch", "Evaluation Harnesses", "Data Engineering", "HPC", "Research"],
    },
    {
      title: "Teaching Assistant — Python & Deep Learning",
      company: "Northern Arizona University",
      location: "Arizona, USA",
      period: "Feb 2026 — Present",
      description: [
        "Mentor 100+ graduate students on PyTorch, TensorFlow, and deep learning architectures (CNNs, RNNs, LSTMs, Transformers) through office hours, lab sessions, and code reviews.",
        "Helped students troubleshoot, investigate, and debug code across PyTorch and TensorFlow projects, diagnosing model training failures, tensor shape mismatches, dataloader bugs, and CUDA/GPU issues in real time.",
        "Adapt explanations on the fly based on whether content is landing, switching between math-first, code-first, or intuition-first depending on the student.",
      ],
      skills: ["PyTorch", "TensorFlow", "Deep Learning", "Mentoring", "Debugging", "Code Reviews"],
    },
    {
      title: "Teaching Assistant — Advanced Python",
      company: "Northern Arizona University",
      location: "Arizona, USA",
      period: "Jan 2025 — Dec 2025",
      description: [
        "Supported 80+ graduate students in Advanced Python (OOP, decorators, async, design patterns) through weekly office hours, lab sessions, and detailed feedback on assignments.",
        "Helped students troubleshoot and debug complex Python bugs: async/await issues, decorator chains, OOP inheritance problems, and import/environment errors, applying fixes alongside them so they learned the debugging process, not just the answer.",
      ],
      skills: ["Python", "OOP", "Async", "Design Patterns", "Mentoring", "Debugging"],
    },
    {
      title: "Semester Zero Peer Mentor",
      company: "Northern Arizona University",
      location: "Arizona, USA",
      period: "Jul 2025 — Aug 2025",
      description: [
        "Selected as peer mentor for NAU's Semester Zero summer program, embedded with a cohort of middle-school students arriving with zero AI exposure.",
        "Designed and delivered hands-on workshops introducing campers to Claude, ChatGPT, and modern AI tools, translating abstract AI concepts into age-appropriate, concrete examples.",
        "Taught responsible and ethical AI use from day one: writing good prompts, verifying outputs, recognizing when AI is the wrong tool, and thinking critically about AI-generated content.",
        "Read the room constantly, adjusting pace, language, and examples, and watched campers go from scared of AI to confidently exploring AI tools on their own.",
      ],
      skills: ["AI Literacy", "Teaching", "Responsible AI", "Communication", "Workshop Design"],
    },
  ];

  const openSource = [
    {
      title: "smart-preprocess",
      subtitle: "pip install smart-preprocess-asif",
      link: "https://pypi.org/project/smart-preprocess-asif/",
      description: [
        "Authored and published Python library on PyPI automating data preprocessing: missing values, encoding, scaling, and outlier handling. Actively downloaded across ML workflows.",
        "Built and maintained solo with no PM oversight; versioned, CI-driven releases designed so the tool keeps running after handoff.",
      ],
      skills: ["Python", "Pandas", "NumPy", "scikit-learn", "PyPI", "Open Source", "CI/CD"],
    },
  ];

  const certifications = [
    "Anthropic AI Fluency (2026)",
    "Anthropic Claude 101 (2026)",
    "AWS Certified AI Practitioner",
    "AWS Certified Machine Learning Engineer — Associate",
    "Google Cloud Computing Foundations",
    "IEEE InC4 2024 Publication — CNN+LSTM Human Activity Recognition",
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
        <p className="text-gray-400">Production AI systems, applied research, teaching, and open-source work.</p>
      </header>

      <section className="px-10 pt-10">
        <h2 className="text-xl font-semibold text-gray-300 mb-6 border-b border-gray-800 pb-2">Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => <SectionCard key={i} item={exp} />)}
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
