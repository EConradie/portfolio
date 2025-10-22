import { motion } from "framer-motion";
import ProfileImage from "../Assets/profile.JPEG";

export default function Hero() {
  return (
    <section name="home" className="flex flex-col-reverse md:flex-row items-center justify-between h-screen max-w-6xl mx-auto px-6 md:px-12">
      
      {/* LEFT SIDE: Text */}
      <motion.div
        className="flex-1 text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I’m <span className="text-accent">Erik</span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400">
          Web & App Developer
        </p>
        <div className="mt-6">
          <a
            href="/cv.pdf"
            download
            className="inline-block border border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-full transition"
          >
            Download CV
          </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE: Profile Image */}
      <motion.div
        className="flex-1 flex justify-center md:justify-end mb-10 md:mb-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={ProfileImage}
          alt="Profile"
          className="w-85 h-85 rounded-full object-cover"
        />
      </motion.div>
    </section>
  );
}
