import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function AboutPage() {
  return (
    <div className="bg-black min-h-screen text-white pt-24 px-8 md:px-20">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-red-500 mb-3">About</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">AI engineer and educator who builds, teaches, scopes, and translates.</p>
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
            I ship production AI solutions and turn non-technical colleagues into confident AI users. I have built end-to-end agents, automations, internal tools, evaluation harnesses, and integrations on Claude API, LangChain, and AWS serving 200+ faculty and administrators across a public university.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            I have run trainings for mixed technical and non-technical audiences spanning 180+ people, from middle-school summer campers to graduate students to senior faculty. I am energized by ambiguity, resource constraints, and wearing multiple hats, and I exercise judgment to catch wrong answers and push back when something should not be built.
          </p>

          <div className="text-gray-400 mb-8 space-y-2 text-sm">
            <p>Arizona, USA · Open to remote, hybrid, or onsite</p>
            <p>M.S. Computer Science, Northern Arizona University (GPA 3.9) · IEEE-Published Researcher · PyPI Open-Source Author</p>
            <p>Anthropic AI Fluency · Claude 101 · AWS AI Practitioner · AWS ML Engineer Associate</p>
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
