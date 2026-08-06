import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const phrases = [
  "Building clean, scalable, and production-ready web applications.",
  "Turning complex problems into elegant engineering solutions.",
  "Developing highly interactive and accessible client experiences."
];

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-transparent flex items-start lg:items-center pt-40 pb-20 lg:pt-32 lg:pb-0 overflow-hidden">
      {/* Ambient Glowing Background Orb */}
      <motion.div 
        className="absolute w-[800px] h-[800px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none -z-10"
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
      />

      {/* Side Metadata (Vertical) */}
      <div className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-24 py-12">
        <span className="text-[10px] font-bold text-black/20 uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr]">
          Software Engineer
        </span>
        <div className="w-[1px] h-32 bg-black/5"></div>
        <span className="text-[10px] font-bold text-black/20 uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr]">
          2026 Archive
        </span>
      </div>

      <div className="container mx-auto px-8 md:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="lg:col-span-7 z-10">
          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex gap-16 mb-16"
          >
            <div>
              <div className="text-5xl font-bold text-black leading-none mb-1">+45</div>
              <div className="text-[10px] font-medium text-black/40 uppercase tracking-widest">Projects completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-black leading-none mb-1">+30</div>
              <div className="text-[10px] font-medium text-black/40 uppercase tracking-widest">Inventions shipped</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <h1 className="text-7xl md:text-[10rem] lg:text-[12rem] xl:text-[16rem] 2xl:text-[18rem] font-bold leading-[0.75] tracking-tighter text-black mb-8 flex overflow-hidden">
              {"Hello".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 1,
                    delay: 0.2 + index * 0.1,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <div className="text-xl md:text-2xl text-black/60 font-medium w-full max-w-lg leading-relaxed flex items-start gap-4">
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "3rem" }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-[2px] bg-black/10 mt-3 shrink-0"
              ></motion.span>
              <div className="relative h-[80px] w-full">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={phraseIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    {phrases[phraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <div className="mt-32 flex flex-col md:flex-row items-start md:items-center gap-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link
                to="/systems"
                className="inline-block px-10 py-5 bg-black text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 relative overflow-hidden group shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_10px_40px_rgba(79,70,229,0.4)] rounded-sm"
              >
                <span className="relative z-10">View Selected Work</span>
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
              </Link>
              {/* Architectural Accent */}
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-black/20" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-black/20" />
            </motion.div>

            <button className="text-sm font-bold text-black/30 flex items-center gap-3 hover:text-black transition-colors group">
              <span className="group-hover:mr-2 transition-all duration-300">Scroll down</span>
              <motion.svg 
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </button>
          </div>
        </div>

        {/* Right: Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.2, 0.8, 0.2, 1] }}
          whileHover={{ scale: 1.02, y: -10 }}
          className="lg:col-span-5 relative group cursor-pointer mt-16 lg:mt-0"
        >
          <div className="aspect-[4/5] overflow-hidden grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 shadow-2xl rounded-sm">
            <img
              src="/ayush.png"
              alt="Ayush Bhardwaj — Software Engineer & Web Developer"
              fetchpriority="high"
              decoding="async"
              className="w-full h-full object-cover object-top scale-110 group-hover:scale-100 transition-transform duration-700"
            />
          </div>
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent group-hover:opacity-0 transition-opacity duration-700 rounded-sm"></div>
          
          {/* Decorative Corner Accents */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-700" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-700" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
