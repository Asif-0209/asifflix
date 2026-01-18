import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const experiences = [
  {
    role: "AI/ML Engineer — Northern Arizona University",
    date: "Oct 2024 – Dec 2025",
    location: "Arizona, United States",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
  },
  {
    role: "Teaching Assistant for Advanced Python — Northern Arizona University",
    date: "Aug 2024 – Dec 2025",
    location: "Arizona, United States",
    image:
      "https://www.teachingpersonnel.com/img/Xm96JvBX60y6bwjZtACw4g/MicrosoftTeams-image+(14).png?v=01b539281ec29ce90387374f095478d8",
  },
  {
    role: "Smart Automation ML Engineer — Vincon Reality Pvt. Ltd.",
    date: "Sep 2022 – May 2024",
    location: "Hyderabad, India",
    image:
      "https://electronicsmaker.com/wp-content/uploads/2019/08/article.png",
  },
];

function ExperienceRow() {
  return (
    <section className="p-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-white">Professional Experience</h2>
        <Link
          to="/experience"
          className="text-red-500 hover:text-red-400 transition"
        >
          View All →
        </Link>
      </div>

      <div className="flex space-x-6 overflow-x-auto pb-4">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="min-w-[300px] bg-zinc-900 rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <img
              src={exp.image}
              alt={exp.role}
              className="w-full h-44 object-cover opacity-90"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-red-400">{exp.role}</h3>
              <p className="text-sm text-gray-400">{exp.date}</p>
              <p className="text-xs text-gray-500">{exp.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceRow;
