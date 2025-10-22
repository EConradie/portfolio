import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const navItems = [
    { name: "Home", target: "home" },
    { name: "About", target: "about" },
    { name: "Skills", target: "skills" },
    { name: "Projects", target: "projects" },
    { name: "Contact", target: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md py-4 z-50 border-b border-white/10">
      <ul className="flex justify-center gap-10 text-sm font-medium">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.target}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-accent transition"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
