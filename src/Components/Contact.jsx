import React from "react";

export default function Contact() {
  return (
    <section name="contact" className="py-24 max-w-6xl mx-auto px-6 md:px-12 text-center">
      <h2 className="text-3xl font-semibold mb-8 text-accent">Contact</h2>
      <a
        href="/cv.pdf"
        download
        className="inline-block border border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-full transition"
      >
        Download CV
      </a>
      <footer className="mt-12 opacity-50 text-sm">
        © {new Date().getFullYear()} Erik Conradie — All Rights Reserved
      </footer>
    </section>
  );
}
