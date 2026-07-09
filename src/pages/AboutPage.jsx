import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function AboutPage() {
  return (
    <div className="bg-black min-h-screen text-white pt-24 px-8 md:px-20">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-red-500 mb-3">About</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">AI Engineer building production agentic systems and LLM applications.</p>
      </header>

      <section className="flex flex-col md:flex-row items-center justify-center gap-12 animate-fadeIn">
        <div className="w-60 h-60 md:w-72 md:h-72 rounded-xl overflow-hidden shadow-lg border-4 border-red-600 hover:scale-105 transform transition duration-300">
          <img
            src="https://avatars.githubusercontent.com/u/126372865?v=4"
            alt="Asif Pinjari"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-2xl">
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            I am a Software Engineer with 2+ years building and operating agentic AI systems in production. I ship LLM applications and RAG pipelines using LangChain, LangGraph, and Model Context Protocol, most recently a support-automation platform serving 200+ daily users across 3 departments that cut data-gathering turnaround 40%.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            I am also a researcher behind a 12,536-trajectory agent security benchmark used for prompt-injection detection, and author of an open-source data preprocessing package on PyPI. I am comfortable owning features end to end: design, evals, observability, incident response, and the documentation that lets non-engineers build on top safely.
          </p>

          <div className="text-gray-400 mb-8 space-y-2 text-sm">
            <p>Arizona, USA · Open to remote, hybrid, or onsite · Willing to relocate anywhere in US</p>
            <p>M.S. Computer Science, Northern Arizona University (GPA 3.9) · IEEE-Published Author · AWS Certified AI Practitioner</p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-red-500" />
              <a href="mailto:asifp0203@gmail.com" className="text-red-400 hover:underline">asifp0203@gmail.com</a>
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-red-500" />
              <a href="tel:+19282250554" className="text-red-400 hover:underline">(928) 225-0554</a>
            </p>
          </div>

          <div className="flex gap-6 text-3xl">
            <a href="https://github.com/Asif-0209" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition"><FaGithub /></a>
            <a href="https://linkedin.com/in/asifp0209" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition"><FaLinkedin /></a>
            <a href="mailto:asifp0203@gmail.com" className="text-gray-400 hover:text-red-500 transition"><FaEnvelope /></a>
          </div>
        </div>
      </section>

      <footer className="text-center py-10 text-gray-400 border-t border-gray-800 mt-16">
        <p>Asif Pinjari · AI/ML Engineer · React × Tailwind</p>
      </footer>
    </div>
  );
}

export default AboutPage;
