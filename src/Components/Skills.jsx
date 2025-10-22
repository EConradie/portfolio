import React from "react";

export default function Skills() {
  const skillsData = [
    {
      category: "Languages",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "C#", "Kotlin", "Swift", "PHP"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Express.js", "jQuery", "Angular", ".NET"],
    },
    {
      category: "Databases",
      items: ["Firebase", "MongoDB", "MySQL", "phpMyAdmin"],
    },
    {
      category: "Tools & Software",
      items: ["GitHub", "Figma", "Miro", "Microsoft Word", "Adobe Photoshop", "Adobe After Effects", "Adobe Premiere Pro", "Autodesk Fusion"],
    },
  ];

  return (
    <section name="skills" className="py-32 max-w-6xl mx-auto px-6 md:px-12">
      <h2 className="text-3xl font-semibold mb-12 text-accent text-center">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {skillsData.map((skill) => (
          <div key={skill.category} className="bg-neutral-900 p-6 rounded-2xl border border-white/10 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-accent">{skill.category}</h3>
            <ul className="space-y-2 text-neutral-300">
              {skill.items.map((item) => (
                <li key={item} className="hover:text-accent transition">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
