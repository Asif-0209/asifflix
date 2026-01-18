import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function AboutPage() {
  return (
    <div className="bg-black min-h-screen text-white pt-24 px-8 md:px-20">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-red-500 mb-3">👤 About Me</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Get to know the person behind the AI.
        </p>
      </header>

      {/* Content Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 animate-fadeIn">
        {/* Profile Image */}
        <div className="w-60 h-60 md:w-72 md:h-72 rounded-xl overflow-hidden shadow-lg border-4 border-red-600 hover:scale-105 transform transition duration-300">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQFQxwu84nZEcg/profile-displayphoto-crop_800_800/B56ZpRSYtzIsAQ-/0/1762300366004?e=1763596800&v=beta&t=CnTt4A-MAiUaqWewMRxk6cvjcpvMBdfmznLzLy7P0xw"
            alt="Asif"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Description */}
        <div className="max-w-2xl">
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            Results-driven AI/ML Engineer with hands-on experience in designing,
            training, and deploying deep learning models using PyTorch and
            OpenCV. Proven success in improving model accuracy by 25% through
            data preprocessing, optimization, and feature engineering. Developed
            and integrated 5+ production-ready AI systems across cloud and web
            platforms, enhancing performance efficiency by 30%. Passionate about
            leveraging machine learning for scalable, real-world impact in
            data-driven environments.
          </p>

          {/* Contact Info */}
          <div className="text-gray-400 mb-8 space-y-2">
            <p>📍 Arizona, United States</p>

            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-red-500" />
              <a
                href="mailto:asifp0203@gmail.com"
                className="text-red-400 hover:underline"
              >
                asifp0203@gmail.com
              </a>
            </p>

            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaPhoneAlt className="text-red-500" />
              <a
                href="tel:+19282250554"
                className="text-red-400 hover:underline"
              >
                +1 (928) 225-0554
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-6 text-3xl">
            <a
              href="https://github.com/Asif-0209"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://media.licdn.com/dms/image/v2/D5635AQHB5uAPTiytCA/profile-framedphoto-shrink_800_800/B56Zpg7IyDIYAg-/0/1762562706830?e=1769299200&v=beta&t=g_fFA2xWZ5ckbfOLF0mcSamDqPgkldN8xWIiP_cPA68"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:asifp0203@gmail.com"
              className="text-gray-400 hover:text-red-500 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-400 border-t border-gray-800 mt-16">
        <p>©Asif P • AI/ML Engineer Portfolio • React × Tailwind × OpenAI</p>
      </footer>
    </div>
  );
}

export default AboutPage;
