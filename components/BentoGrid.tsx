"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Database, FlaskConical, Cpu } from "lucide-react";

const projects = [
  {
    title: "DeepChem Open Source",
    category: "Core Contributor",
    description: "Optimizing molecular machine learning models and pipelines used by researchers globally. Focused on bridging AI and chemical sciences.",
    icon: <FlaskConical className="w-6 h-6 text-purple-400" />,
    colSpan: "md:col-span-2",
    link: "https://github.com/Abu-Sameer-66"
  },
  {
    title: "ChemBERTa Optimization",
    category: "Scientific NLP",
    description: "Achieved SOTA benchmarks on Tox21 datasets by implementing advanced transformer fine-tuning techniques on ChemBERTa architecture.",
    icon: <Database className="w-6 h-6 text-cyan-400" />,
    colSpan: "md:col-span-1",
    link: "https://github.com/Abu-Sameer-66"
  },
  {
    title: "Custom LLM Fine-Tuning Engine",
    category: "Generative AI",
    description: "Architected an end-to-end pipeline for domain-adaptive fine-tuning of LLaMA & Mistral models, focusing on maximum inference efficiency.",
    icon: <Cpu className="w-6 h-6 text-white" />,
    colSpan: "md:col-span-3",
    link: "https://github.com/Abu-Sameer-66"
  }
];

export default function BentoGrid() {
  return (
    <section className="py-24 relative z-10 container mx-auto px-4 sm:px-6 max-w-6xl">
      
      {/* THE NARRATIVE (Mission Statement) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24 max-w-4xl"
      >
        <h2 className="text-sm font-mono text-cyan-400 tracking-[0.3em] mb-6 uppercase flex items-center gap-4">
          <span className="w-12 h-[1px] bg-cyan-400/50"></span>
          The Mission
        </h2>
        <p className="text-3xl md:text-5xl font-light text-gray-400 leading-snug tracking-tight">
          I don't just deploy models; I architect systems that <strong className="text-white font-medium">reason</strong>. My focus lies in pushing the boundaries of what <strong className="text-white font-medium">Large Language Models</strong> can achieve in real-world scientific domains.
        </p>
      </motion.div>

      {/* ELITE CASE STUDIES (Bento Box Layout) */}
      <div className="mb-12 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white tracking-tight">Elite Case Studies</h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent ml-8"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className={`group relative overflow-hidden rounded-[2rem] border border-white/5 bg-black/40 backdrop-blur-md p-8 sm:p-10 hover:border-purple-500/50 transition-all duration-500 shadow-2xl ${project.colSpan}`}
          >
            {/* Glowing Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="mb-12 flex justify-between items-start">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                  {project.icon}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white border border-transparent hover:border-white/10">
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
              
              <div>
                <span className="text-xs font-mono text-purple-300 uppercase tracking-widest mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-purple-100 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-base sm:text-lg font-light group-hover:text-gray-300 transition-colors">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}