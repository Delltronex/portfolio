import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetails.css";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // 🧠 Each project has unique details + links
  const projects = {
    1: {
      title: "PDF Chat Webapp",
      tag: "AI/ML",
      description:
        " Developed an AI-powered application for chatting with PDF documents using the LLaMA 2 model.",
      tech: ["Python", "Langchain", "Llama 2", "Streamlit"],
      live: "https://project-alpha-demo.vercel.app",
      code: "https://github.com/Delltronex/PDF_Chatbot_translator.git",
    },
    2: {
      title: "Healthcare Website",
      tag: "AI/ML",
      description:
        "Developed an AI-driven healthcare platform to provide insights based on patient medical records.",
        
      tech: ["Python", "Huggingface Model", "JavaScript", "HTML/CSS"],
      live: "https://tron-portfolio.vercel.app",
      code: "https://github.com/kaushalshukla/tron-portfolio",
    },
    3: {
      title: "Fake Website Detector",
      tag: "AI/ML",
      description:
        "Developed a system to detect fake websites by analysing URLs, enhancing online security and user trust.",
      tech: ["Pyhton", "Pandas", "HTML", "CSS", "JavaScript"],
      live: "https://blockhealth-demo.netlify.app",
      code: "https://github.com/kaushalshukla/blockhealth",
    },
    4: {
      title: "Tron Portfolio Website",
      tag: "Website",
      description:
        "A futuristic Tron-inspired React + Vite portfolio website showcasing my projects, skills, education, and experience.",
      tech: ["React", "Vite", "Nodemailer", "Vercel"],
      live: "https://portfolio-roan-psi-hwy5du99m6.vercel.app/",
      code: "https://github.com/Delltronex/Tron_Portfholio.git",
    },
  };

  const project = projects[id];

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>⚠️ Project Not Found</h2>
        <button className="pd-back" onClick={() => navigate("/projects")}>
          ← Back to Projects
        </button>
      </div>
    );
  }

  return (
    <section className="project-details">
      <div className="project-box">
        <div className="pd-header">
          <h1 className="pd-title">{project.title}</h1>
          <span className="pd-tag">{project.tag}</span>
        </div>

        <p className="pd-description">{project.description}</p>

        <div className="pd-tech">
          <h2>Key Technologies</h2>
          <ul>
            {project.tech.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="pd-buttons">
          <a
            href={project.live}
            className="pd-btn pd-live"
            target="_blank"
            rel="noreferrer"
          >
            🚀 View Live
          </a>
          <a
            href={project.code}
            className="pd-btn pd-code"
            target="_blank"
            rel="noreferrer"
          >
            💻 Source Code
          </a>
        </div>

        <button className="pd-back" onClick={() => navigate("/projects")}>
          ← Back to Projects
        </button>
      </div>
    </section>
  );
}
