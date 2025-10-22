import React from "react";
import { motion } from "framer-motion";
import Astro from "../Assets/astro.png";
import Bladel from "../Assets/bladel.png";
import NatureNook from "../Assets/naturenook.png";
import Terpreter from "../Assets/terpreter.png";

export default function Projects() {
  const projects = [
    {
      title: "NatureNook",
      image: NatureNook,
      link: "https://github.com/EConradie/DV300_Term1_Project",
    },
    {
      title: "Bladel",
      image: Bladel,
      link: "https://github.com/EConradie/DV300_Term2_Project",
    },
    {
      title: "Astro",
      image: Astro,
      link: "https://github.com/DieterR97/Astro",
    },
    {
      title: "Terpreter",
      image: Terpreter,
      link: "https://github.com/EConradie/DV300_Term4_Project",
    },
  ];

  return (
    <section name="projects" className="py-32 bg-neutral-900 border-y border-white/10">
      <h2 className="text-3xl font-semibold mb-10 text-accent text-center">Projects</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="bg-neutral-800 rounded-2xl p-4 w-72 shadow-lg border border-white/10 hover:border-accent transition"
            whileHover={{ scale: 1.05 }}
          >
            <img src={proj.image} alt={proj.title} className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <a
              href={proj.link}
              target="_blank"
              className="text-accent hover:underline"
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
