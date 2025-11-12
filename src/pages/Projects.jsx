import React from "react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  const projects = [
    { id: 1, title: "PDF Chat Web App", desc: "llama 2 model baesd chatbot." },
    { id: 2, title: "Healthcare Website", desc: " AI-driven healthcare platform." },
    { id: 3, title: "Fake Website Detector", desc: "A system to detect fake websites." },
    { id: 4, title: "Tron Portfolio Website", desc: "website showcasing my self." },
  ];

  return (
    <section className="page-section">
      <h1 className="title-glow">PROJECTS</h1>
      <div className="grid">
        {projects.map((p) => (
          <div
            key={p.id}
            className="card glass-card"
            onClick={() => navigate(`/project/${p.id}`)}
          >
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
