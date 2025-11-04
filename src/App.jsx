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
              <ProjectRow title="🎬 My Featured Projects" projects={myProjects} />
              <ExperienceRow />
              <Skills />
              <footer className="text-center py-10 text-gray-400 border-t border-gray-800 bg-black mt-10">
                <p>© 2025 Asif • Built with ❤️ using React + TailwindCSS</p>
              </footer>
            </>
          }
        />

        {/* 🎥 Projects Page */}
        <Route path="/projects" element={<ProjectsPage projects={myProjects} />} />

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
