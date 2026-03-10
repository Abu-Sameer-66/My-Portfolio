// "use client";

// import { 
//   Github, Linkedin, Mail, BrainCircuit, Code2, Phone, Rocket, 
//   GitCommitHorizontal, Cpu, Users, TerminalSquare, Database, Wrench, 
//   Sparkles, Briefcase, GraduationCap, ChevronRight, FolderGit2, 
//   ExternalLink, Beaker, Building2, Send, Award, Trophy, Globe, 
//   CheckCircle2, Clock 
// } from "lucide-react";

// export default function Home() {
  
//   // --- PROJECT DATA ARRAYS (PHASE 5) ---
//   const deepchemProjects = [
//     { name: "Mistral7B-ClinTox-Study", link: "https://github.com/Abu-Sameer-66/Mistral7B-ClinTox-Study", desc: "LLM Fine-tuning study on the ClinTox dataset for clinical toxicity prediction.", tags: ["Mistral-7B", "LoRA", "DeepChem"] },
//     { name: "Mistral7B-Tox21-Molecular", link: "https://github.com/Abu-Sameer-66/Mistral7B-Tox21-Molecular-Optimization", desc: "Native fine-tuning of Mistral-7B on Tox21 dataset using 4-bit quantization.", tags: ["Quantization", "Tox21", "LLM"] },
//     { name: "Mistral7B-BACE-Generalization", link: "https://github.com/Abu-Sameer-66/Mistral7B-BACE-Generalization-Study", desc: "Optimizing Mistral-7B for BACE-1 inhibitor prediction using scaffold-split data.", tags: ["Drug Discovery", "Scaffold-Split"] },
//     { name: "Mistral7B-BBBP-Reasoning", link: "https://github.com/Abu-Sameer-66/Mistral7B-BBBP-Molecular-Reasoning", desc: "Molecular property prediction on BBBP using property-aware prompting.", tags: ["Cheminformatics", "DeepChem"] },
//     { name: "ChemLLM-Tox-OLMo", link: "https://github.com/Abu-Sameer-66/ChemLLM-Tox-OLMo", desc: "Fine-tuning OLMo-7B with QLoRA for Molecular Toxicity Prediction.", tags: ["OLMo-7B", "QLoRA", "Generative AI"] }
//   ];

//   const industryProjects = [
//     { name: "Retail-Sales-Performance", link: "https://github.com/Abu-Sameer-66/Retail-Sales-Performance-Analysis", desc: "BI analysis to identify profit leakages and optimize regional sales strategies.", tags: ["Data Analysis", "BI", "Seaborn"] },
//     { name: "CogniPath-Analytics-Engine", link: "https://github.com/Abu-Sameer-66/CogniPath-Analytics-Engine", desc: "AI-driven EdTech engine optimizing academic outcomes via predictive modeling.", tags: ["Predictive Analysis", "Scikit-Learn"] },
//     { name: "PropVal-AI-Real-Estate", link: "https://github.com/Abu-Sameer-66/PropVal-Property-Valuation--AI-Real-Estate-Engine", desc: "Production-grade AVM utilizing Gradient Boosting to estimate real estate asset values.", tags: ["PropTech", "Machine Learning"] },
//     { name: "SpamGuard-AI-Threat-Detection", link: "https://github.com/Abu-Sameer-66/SpamGuard-AI-Threat-Detection", desc: "Enterprise-grade SMS Phishing & Spam Detection System utilizing NLP.", tags: ["NLP", "Text Classification"] },
//     { name: "AI-Voice-Assistant", link: "https://github.com/Abu-Sameer-66/AI-Voice-Assistant-Python", desc: "A modular voice assistant utilizing Python automation and speech recognition.", tags: ["Python", "Automation", "AI"] }
//   ];

//   // --- CERTIFICATIONS DATA ARRAY (PHASE 7) ---
//   const certifications = [
//     { 
//       title: "The Ultimate Job Ready Data Science Course", 
//       issuer: "CodeWithHarry", 
//       date: "Feb 2026", 
//       id: "CWH-THE-ULTIMATE-JOB-READY-DATA-SCIENCE-COURSE-BMXY6IIK", 
//       status: "Completed",
//       icon: <CheckCircle2 className="w-5 h-5 text-green-400" />
//     },
//     { 
//       title: "Python Development Masterclass (11-Hour Intensive)", 
//       issuer: "CodeWithHarry / Self-Taught", 
//       date: "Completed", 
//       id: "Independent Portfolio Validation", 
//       status: "Completed",
//       icon: <CheckCircle2 className="w-5 h-5 text-green-400" />
//     },
//     { 
//       title: "Full-Stack Web Development & Prompt Engineering", 
//       issuer: "Ongoing Specialized Training", 
//       date: "Present", 
//       id: "Skill Expansion Phase", 
//       status: "In Progress",
//       icon: <Clock className="w-5 h-5 text-yellow-400 animate-pulse" />
//     }
//   ];

//   return (
//     <main className="min-h-screen fluid-mesh-bg text-white overflow-x-hidden relative font-sans selection:bg-yellow-500/30">
      
//       {/* =========================================
//           NAVBAR (LOCKED)
//           ========================================= */}
//       <nav className="fixed w-full z-50 bg-[#050505]/60 backdrop-blur-xl border-b border-yellow-500/20 py-4 px-6 md:px-12 flex justify-between items-center shadow-lg">
//         <div className="font-bold text-xl tracking-wide text-white flex items-center gap-1">
//           <span className="text-yellow-500 font-mono">&lt;</span>
//           Sameer Nadeem
//           <span className="text-yellow-500 font-mono">/&gt;</span>
//         </div>
//         <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-300 tracking-wide uppercase">
//           <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
//           <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
//           <a href="#arsenal" className="hover:text-yellow-400 transition-colors">Arsenal</a>
//           <a href="#journey" className="hover:text-yellow-400 transition-colors">Journey</a>
//           <a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a>
//           <a href="#legacy" className="hover:text-yellow-400 transition-colors">Legacy</a>
//         </div>
//       </nav>

//       {/* =========================================
//           PHASE 1: THE ELITE HERO SECTION (LOCKED)
//           ========================================= */}
//       <section id="home" className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-24 px-4 text-center">
//         <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-tr from-yellow-500 via-red-600 to-[#050505] mb-8 shadow-[0_0_50px_rgba(234,179,8,0.4)] group hover:scale-105 transition-transform duration-500">
//           <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500 via-red-600 to-teal-900 rounded-full opacity-60 blur-lg group-hover:opacity-100 transition-opacity animate-pulse"></div>
//           <div className="relative w-full h-full bg-[#0a0a0a] rounded-full border-[3px] border-[#050505] flex items-center justify-center overflow-hidden z-10">
//              <img src="/profile.png" alt="Sameer Nadeem" className="w-full h-full object-cover" onError={(e) => { const target = e.currentTarget; if (target.src.includes('.png')) { target.src = "/profile.jpg"; } else { target.src = "https://ui-avatars.com/api/?name=Sameer+Nadeem&background=0D0D0D&color=EAB308&size=256&bold=true"; } }} />
//           </div>
//         </div>
//         <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white tracking-tighter drop-shadow-2xl">Sameer Nadeem</h1>
//         <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 text-xl md:text-2xl font-bold mb-6 tracking-wide">
//           AI-ML Engineer | Data Scientist | LLM Optimization & Fine-Tuning
//         </p>
//         <div className="flex flex-wrap justify-center gap-4 mb-10">
//           <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-red-500/40 text-sm font-mono text-gray-200 shadow-[0_0_15px_rgba(153,27,27,0.3)] hover:border-red-400 transition-colors">
//             <Code2 size={16} className="text-red-400"/> Python & SQL Developer
//           </span>
//           <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-purple-500/40 text-sm font-mono text-gray-200 shadow-[0_0_15px_rgba(107,33,168,0.3)] hover:border-purple-400 transition-colors">
//             <BrainCircuit size={16} className="text-purple-400"/>Open Source & DeepChem Contributor
//           </span>
//         </div>
//         <h2 className="text-2xl md:text-4xl font-semibold max-w-4xl leading-snug mb-12 text-gray-300 drop-shadow-lg">
//           Building Systems & Architecture. <br className="hidden md:block"/>
//           Transforming <span className="text-white font-bold underline decoration-yellow-500 decoration-4 underline-offset-8">AutoMotive Retail</span> with Data & ML.
//         </h2>
//         <div className="flex flex-col items-center gap-8">
//           <a href="#projects" className="elite-golden-button text-[#3d2b00] px-12 py-4 rounded-full font-extrabold text-lg tracking-wider uppercase flex items-center gap-3">
//             Explore My Work <ChevronRight className="w-6 h-6" />
//           </a>
//           <div className="flex flex-wrap justify-center gap-5 mt-2">
//             <a href="https://www.linkedin.com/in/sameer-nadeem-66339a357/" target="_blank" rel="noreferrer" title="LinkedIn" className="p-4 rounded-full bg-black/60 backdrop-blur-md border border-yellow-500/50 text-yellow-500 hover:text-white hover:bg-yellow-500/20 transition-all hover:scale-110 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
//               <Linkedin size={24} />
//             </a>
//             <a href="https://github.com/Abu-Sameer-66" target="_blank" rel="noreferrer" title="GitHub" className="p-4 rounded-full bg-black/60 backdrop-blur-md border border-yellow-500/50 text-yellow-500 hover:text-white hover:bg-yellow-500/20 transition-all hover:scale-110 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
//               <Github size={24} />
//             </a>
//             <a href="https://www.kaggle.com/sameernadeem66" target="_blank" rel="noreferrer" title="Kaggle" className="p-4 rounded-full bg-black/60 backdrop-blur-md border border-yellow-500/50 text-yellow-500 hover:text-white hover:bg-yellow-500/20 transition-all hover:scale-110 shadow-[0_0_15px_rgba(234,179,8,0.2)] flex items-center justify-center">
//               <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-[24px] h-[24px]"><path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.34-.246.526-.246h3.255c.234 0 .304.141.211.422L12.35 14.54l6.475 9.319z"/></svg>
//             </a>
//             <a href="mailto:sameersain361@gmail.com" title="Email" className="p-4 rounded-full bg-black/60 backdrop-blur-md border border-yellow-500/50 text-yellow-500 hover:text-white hover:bg-yellow-500/20 transition-all hover:scale-110 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
//               <Mail size={24} />
//             </a>
//             <a href="tel:+923047637545" title="Call" className="p-4 rounded-full bg-black/60 backdrop-blur-md border border-yellow-500/50 text-yellow-500 hover:text-white hover:bg-yellow-500/20 transition-all hover:scale-110 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
//               <Phone size={24} />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           PHASE 2: WHO AM I ? (LOCKED)
//           ========================================= */}
//       <section id="about" className="relative z-10 py-20 px-4 md:px-12 max-w-6xl mx-auto flex flex-col items-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white tracking-tight flex items-center gap-4">
//           <span className="w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//           Who Am I ?
//           <span className="w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//         </h2>
//         <div className="bg-[#050505]/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl mb-16 hover:border-yellow-500/30 transition-colors duration-500">
//           <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light text-justify md:text-center">
//             Hi, I'm <span className="text-yellow-400 font-semibold">Sameer Nadeem</span>. I believe true AI isn't just trained on static datasets; it's engineered from the ground up to solve real human problems. Beyond my academic foundation as a Data Science student at the <span className="text-white font-medium">Islamia University of Bahawalpur</span>, I am actively bridging the gap between raw data and real-world impact.
//             <br/><br/>
//             Currently, I am conducting hands-on data engineering at an <span className="text-yellow-400 font-semibold">Automotive Retail</span> business—analyzing pricing elasticity, inventory dynamics, and customer feedback loops to build ML systems that optimize daily operations. Whether it's contributing to DeepChem's open-source ecosystem, engineering scalable LLM pipelines, or extracting insights straight from the shop floor, my mission is singular: <span className="text-white font-medium">to architect intelligent systems that serve humanity and make life easier.</span>
//           </p>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
//           <div className="flex flex-col items-center justify-center p-8 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 group hover:border-yellow-500/50 hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:-translate-y-2">
//             <Rocket className="w-10 h-10 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
//             <h3 className="text-4xl font-extrabold text-white mb-2">10+</h3>
//             <p className="text-sm text-yellow-500 uppercase tracking-widest font-bold mb-1">AI-ML Projects</p>
//             <p className="text-xs text-gray-400 text-center font-medium">Built & Deployed</p>
//           </div>
//           <div className="flex flex-col items-center justify-center p-8 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 group hover:border-yellow-500/50 hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:-translate-y-2">
//             <GitCommitHorizontal className="w-10 h-10 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
//             <h3 className="text-4xl font-extrabold text-white mb-2">600+</h3>
//             <p className="text-sm text-yellow-500 uppercase tracking-widest font-bold mb-1">GitHub Commits</p>
//             <p className="text-xs text-gray-400 text-center font-medium">Active Developer</p>
//           </div>
//           <div className="flex flex-col items-center justify-center p-8 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 group hover:border-yellow-500/50 hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:-translate-y-2">
//             <Cpu className="w-10 h-10 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
//             <h3 className="text-4xl font-extrabold text-white mb-2">LLMs</h3>
//             <p className="text-sm text-yellow-500 uppercase tracking-widest font-bold mb-1">Fine-Tuning</p>
//             <p className="text-xs text-gray-400 text-center font-medium">Optimization Expert</p>
//           </div>
//           <div className="flex flex-col items-center justify-center p-8 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 group hover:border-yellow-500/50 hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:-translate-y-2">
//             <Users className="w-10 h-10 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
//             <h3 className="text-4xl font-extrabold text-white mb-2">2,000+</h3>
//             <p className="text-sm text-yellow-500 uppercase tracking-widest font-bold mb-1">Network</p>
//             <p className="text-xs text-gray-400 text-center font-medium">Tech Community</p>
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           PHASE 3: TECHNICAL ARSENAL (LOCKED)
//           ========================================= */}
//       <section id="arsenal" className="relative z-10 py-20 px-4 md:px-12 max-w-6xl mx-auto flex flex-col items-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight flex items-center gap-4">
//           <span className="w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//           Technical Arsenal
//           <span className="w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
//           <div className="bg-[#050505]/70 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-yellow-500/40 transition-all duration-500 flex flex-col h-full shadow-xl hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]">
//             <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
//               <TerminalSquare className="w-6 h-6 text-yellow-400 drop-shadow-md" />
//               <h3 className="text-xl font-bold text-white tracking-wide">Languages & DB</h3>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               {['Python', 'SQL', 'C++ (Beginner)', 'JavaScript (Beginner)'].map((skill) => (
//                 <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 shadow-sm cursor-default transition-all duration-300 hover:text-yellow-300 hover:border-yellow-500/60 hover:bg-yellow-500/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">{skill}</span>
//               ))}
//             </div>
//           </div>
//           <div className="md:col-span-2 bg-[#050505]/70 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-yellow-500/40 transition-all duration-500 flex flex-col h-full shadow-xl hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]">
//             <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
//               <Sparkles className="w-6 h-6 text-yellow-400 drop-shadow-md" />
//               <h3 className="text-xl font-bold text-white tracking-wide">Specializations</h3>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               {['LLM Fine-Tuning', 'System Architecture', 'Molecular ML', 'Web Scraping', 'Workflow Automation', 'AutoMotive Data Analytics', 'RAG (Retrieval-Augmented Generation)'].map((skill) => (
//                 <span key={skill} className="px-5 py-2.5 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-sm font-semibold text-yellow-100 shadow-md cursor-default transition-all duration-300 hover:text-white hover:border-yellow-400 hover:bg-yellow-500/30 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(234,179,8,0.5)]">{skill}</span>
//               ))}
//             </div>
//           </div>
//           <div className="md:col-span-2 bg-[#050505]/70 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-yellow-500/40 transition-all duration-500 flex flex-col h-full shadow-xl hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]">
//             <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
//               <Database className="w-6 h-6 text-yellow-400 drop-shadow-md" />
//               <h3 className="text-xl font-bold text-white tracking-wide">AI & Data Ecosystem</h3>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               {['DeepChem', 'TensorFlow', 'PyTorch', 'Hugging Face', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'OpenCV'].map((skill) => (
//                 <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 shadow-sm cursor-default transition-all duration-300 hover:text-yellow-300 hover:border-yellow-500/60 hover:bg-yellow-500/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">{skill}</span>
//               ))}
//             </div>
//           </div>
//           <div className="bg-[#050505]/70 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-yellow-500/40 transition-all duration-500 flex flex-col h-full shadow-xl hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]">
//             <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
//               <Wrench className="w-6 h-6 text-yellow-400 drop-shadow-md" />
//               <h3 className="text-xl font-bold text-white tracking-wide">Tools & DevOps</h3>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               {['Git & GitHub', 'VS Code', 'Jupyter', 'Google Colab', 'Kaggle', 'LinkedIn', 'ORCID', 'Discord'].map((skill) => (
//                 <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 shadow-sm cursor-default transition-all duration-300 hover:text-yellow-300 hover:border-yellow-500/60 hover:bg-yellow-500/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">{skill}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           PHASE 4: EXPERIENCE & ACADEMIC TIMELINE (LOCKED)
//           ========================================= */}
//       <section id="journey" className="relative z-10 py-20 px-4 md:px-12 max-w-5xl mx-auto flex flex-col items-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight flex items-center gap-4 text-center">
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//           Where I've Made Impact
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//         </h2>
//         <div className="relative w-full border-l-2 md:border-l-0 md:border-t-0 md:absolute-center md:before:absolute md:before:inset-0 md:before:ml-auto md:before:mr-auto md:before:w-[2px] md:before:bg-gradient-to-b md:before:from-yellow-500 md:before:via-red-600 md:before:to-purple-900 border-yellow-500/30 pl-6 md:pl-0">
//           <div className="relative mb-16 md:mb-24 md:w-1/2 md:pr-12 md:ml-0 group">
//             <div className="absolute -left-[35px] md:-right-[11px] md:left-auto top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
//             <div className="bg-[#050505]/60 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] hover:-translate-y-1">
//               <div className="flex items-center gap-3 mb-2">
//                 <Briefcase className="w-5 h-5 text-yellow-500" />
//                 <h3 className="text-2xl font-bold text-white">Data Strategy Consultant</h3>
//               </div>
//               <p className="text-yellow-400 font-medium mb-1">Al-Quresh Motors & Spare Parts</p>
//               <p className="text-xs text-gray-500 font-mono mb-4 border-b border-white/10 pb-4">JAN 2026 — PRESENT | Ground-Zero Analytics</p>
//               <ul className="space-y-2 text-gray-300 text-sm md:text-base leading-relaxed">
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 shrink-0 mt-1"/> Executing ground-level data collection to analyze customer psychology, product demand, and pricing elasticity.</li>
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 shrink-0 mt-1"/> Digitizing shop floor operations and mapping customer churn to predict seasonal product roadmaps for the business owner.</li>
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 shrink-0 mt-1"/> Bridging the gap between raw retail logic and Machine Learning to build a predictive, customer-satisfaction-focused sales system.</li>
//               </ul>
//             </div>
//           </div>
//           <div className="relative mb-16 md:mb-24 md:w-1/2 md:pl-12 md:ml-auto group">
//             <div className="absolute -left-[35px] md:-left-[11px] top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
//             <div className="bg-[#050505]/60 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-1">
//               <div className="flex items-center gap-3 mb-2">
//                 <Code2 className="w-5 h-5 text-purple-400" />
//                 <h3 className="text-2xl font-bold text-white">Core Open Source Contributor</h3>
//               </div>
//               <p className="text-purple-400 font-medium mb-1">DeepChem Ecosystem</p>
//               <p className="text-xs text-gray-500 font-mono mb-4 border-b border-white/10 pb-4">DEC 2025 — PRESENT | Global AI Community</p>
//               <ul className="space-y-2 text-gray-300 text-sm md:text-base leading-relaxed">
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-1"/> Integrating a lifelong passion for Chemistry with modern computing by teaching AI models complex molecular science.</li>
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-1"/> Submitting advanced Pull Requests (PRs) focused on model optimization and fine-tuning LLMs for chemical datasets.</li>
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-1"/> Actively contributing to architectures that transform computational chemistry into scalable machine learning solutions.</li>
//               </ul>
//             </div>
//           </div>
//           <div className="relative mb-16 md:mb-24 md:w-1/2 md:pr-12 md:ml-0 group">
//             <div className="absolute -left-[35px] md:-right-[11px] md:left-auto top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
//             <div className="bg-[#050505]/60 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1">
//               <div className="flex items-center gap-3 mb-2">
//                 <GraduationCap className="w-6 h-6 text-blue-400" />
//                 <h3 className="text-2xl font-bold text-white">Bachelor of Science in Data Science</h3>
//               </div>
//               <p className="text-blue-400 font-medium mb-1">Islamia University of Bahawalpur</p>
//               <p className="text-xs text-gray-500 font-mono mb-4 border-b border-white/10 pb-4">AUG 2023 — EXP. 2027 | 6th Semester | Grade: B</p>
//               <div className="text-gray-300 text-sm md:text-base leading-relaxed">
//                 <p className="mb-2 text-gray-400">Core Architecture & Logic Coursework:</p>
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {['Advanced ML', 'ANN & Deep Learning', 'Data Mining', 'Probability & Stats', 'Business Process Analysis', 'Data Warehouse & BI'].map((sub) => (
//                     <span key={sub} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-xs text-blue-200">{sub}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="relative mb-16 md:mb-24 md:w-1/2 md:pl-12 md:ml-auto group">
//             <div className="absolute -left-[35px] md:-left-[11px] top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-gray-400 shadow-[0_0_15px_rgba(156,163,175,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
//             <div className="bg-[#050505]/60 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:border-gray-400/50 transition-all duration-300 hover:-translate-y-1">
//               <div className="flex items-center gap-3 mb-2">
//                 <GraduationCap className="w-5 h-5 text-gray-300" />
//                 <h3 className="text-xl font-bold text-white">Intermediate (FSc Pre-Engineering)</h3>
//               </div>
//               <p className="text-gray-300 font-medium mb-1">Punjab Group of Colleges, Bahawalpur</p>
//               <p className="text-xs text-gray-500 font-mono mb-2">2021 — 2023 | Grade: B</p>
//               <p className="text-gray-400 text-sm leading-relaxed">Developed a profound, life-long passion for Chemistry through exceptional mentorship, laying the analytical foundation for my future work in Molecular Machine Learning.</p>
//             </div>
//           </div>
//           <div className="relative md:w-1/2 md:pr-12 md:ml-0 group">
//             <div className="absolute -left-[35px] md:-right-[11px] md:left-auto top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
//             <div className="bg-gradient-to-br from-[#050505] to-[#1a0505] backdrop-blur-md border border-red-500/30 p-6 md:p-8 rounded-2xl hover:border-red-500/70 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] hover:-translate-y-1 relative overflow-hidden">
//               <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/10 blur-2xl rounded-full"></div>
//               <div className="flex items-center gap-3 mb-2">
//                 <GraduationCap className="w-5 h-5 text-red-400" />
//                 <h3 className="text-xl font-bold text-white">Matriculation (Science)</h3>
//               </div>
//               <p className="text-red-400 font-medium mb-1">Government Technical High School, BWP</p>
//               <p className="text-xs text-gray-500 font-mono mb-3">GRADUATED 2021</p>
//               <div className="flex items-center gap-3 mb-2">
//                  <span className="px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 font-bold tracking-widest">1037 / 1100 Marks</span>
//               </div>
//               <p className="text-gray-300 text-sm leading-relaxed mt-3">Selected as part of the highly coveted <span className="text-white font-bold">Top 1% Elite Cohort</span> in one of the city's highest-ranking schools. A foundational era that cemented a track record of top-tier execution.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           PHASE 5: ELITE PROJECTS SHOWCASE (LOCKED)
//           ========================================= */}
//       <section id="projects" className="relative z-10 py-20 px-4 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight flex items-center gap-4 text-center">
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//           Building Intelligence, One Model At A Time
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//         </h2>
//         <p className="text-gray-400 text-lg mb-16 max-w-2xl text-center">A curated selection of my production-grade systems, open-source contributions, and real-world ML engines.</p>
//         <div className="w-full mb-16">
//           <div className="flex items-center gap-3 mb-8 border-b border-purple-500/30 pb-4">
//             <Beaker className="w-8 h-8 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
//             <h3 className="text-3xl font-bold text-white tracking-wide">Open Source & Molecular ML <span className="text-purple-400 text-xl font-medium">(DeepChem / GSoC)</span></h3>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {deepchemProjects.map((project, index) => (
//               <div key={index} className="bg-gradient-to-br from-[#0a0a0a] to-[#120518] backdrop-blur-xl border border-purple-500/20 p-6 rounded-2xl hover:border-purple-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:-translate-y-2 flex flex-col justify-between group">
//                 <div>
//                   <div className="flex justify-between items-start mb-4">
//                     <FolderGit2 className="w-8 h-8 text-purple-500 group-hover:text-yellow-400 transition-colors" />
//                     <a href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-purple-500/20 transition-colors"><ExternalLink className="w-5 h-5 text-gray-300 hover:text-white" /></a>
//                   </div>
//                   <h4 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-purple-300 transition-colors">{project.name}</h4>
//                   <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>
//                 </div>
//                 <div className="flex flex-wrap gap-2 mt-auto">
//                   {project.tags.map(tag => (
//                     <span key={tag} className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-md text-xs font-medium text-purple-200">{tag}</span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="w-full">
//           <div className="flex items-center gap-3 mb-8 border-b border-blue-500/30 pb-4">
//             <Building2 className="w-8 h-8 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
//             <h3 className="text-3xl font-bold text-white tracking-wide">Enterprise & Industry Solutions</h3>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {industryProjects.map((project, index) => (
//               <div key={index} className="bg-gradient-to-br from-[#0a0a0a] to-[#050f1a] backdrop-blur-xl border border-blue-500/20 p-6 rounded-2xl hover:border-blue-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:-translate-y-2 flex flex-col justify-between group">
//                 <div>
//                   <div className="flex justify-between items-start mb-4">
//                     <FolderGit2 className="w-8 h-8 text-blue-500 group-hover:text-yellow-400 transition-colors" />
//                     <a href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-blue-500/20 transition-colors"><ExternalLink className="w-5 h-5 text-gray-300 hover:text-white" /></a>
//                   </div>
//                   <h4 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-300 transition-colors">{project.name}</h4>
//                   <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>
//                 </div>
//                 <div className="flex flex-wrap gap-2 mt-auto">
//                   {project.tags.map(tag => (
//                     <span key={tag} className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-md text-xs font-medium text-blue-200">{tag}</span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           PHASE 6: LEADERSHIP & DIGITAL RECOGNITION (NEW)
//           ========================================= */}
//       <section id="legacy" className="relative z-10 py-20 px-4 md:px-12 max-w-6xl mx-auto flex flex-col items-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight flex items-center gap-4 text-center">
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//           Leadership & Digital Footprint
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-20">
//           {/* Card 1: LinkedIn Network */}
//           <div className="bg-[#050505]/60 backdrop-blur-xl border border-yellow-500/20 p-8 rounded-3xl hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)] flex flex-col items-center text-center group">
//             <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//               <Users className="w-10 h-10 text-blue-400" />
//             </div>
//             <h3 className="text-2xl font-bold text-white mb-3">Global Tech Community Leader</h3>
//             <p className="text-gray-300 leading-relaxed">Cultivating an active and engaged network of <span className="text-yellow-400 font-bold">2,000+ industry professionals</span> on LinkedIn. Consistently sharing high-value insights on LLM fine-tuning, Python development, and real-world Data Science strategies to empower the next generation of engineers.</p>
//           </div>

//           {/* Card 2: Open Source Advocate */}
//           <div className="bg-[#050505]/60 backdrop-blur-xl border border-yellow-500/20 p-8 rounded-3xl hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)] flex flex-col items-center text-center group">
//             <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//               <Globe className="w-10 h-10 text-purple-400" />
//             </div>
//             <h3 className="text-2xl font-bold text-white mb-3">Open Source Advocate</h3>
//             <p className="text-gray-300 leading-relaxed">Dedicated to the democratization of deep learning through active contributions to <span className="text-yellow-400 font-bold">DeepChem</span>. Building public-beneficial systems and driving the adoption of molecular machine learning in global scientific communities.</p>
//           </div>
//         </div>

//       {/* =========================================
//           PHASE 7: CERTIFICATIONS & CREDENTIALS (NEW)
//           ========================================= */}
//         <div className="w-full">
//           <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
//             <Award className="w-8 h-8 text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
//             <h3 className="text-3xl font-bold text-white tracking-wide">Certificates & Continuous Learning</h3>
//           </div>
          
//           <div className="flex flex-col gap-4">
//             {certifications.map((cert, index) => (
//               <div key={index} className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#0a0a0a]/50 backdrop-blur-md border border-white/5 p-6 rounded-2xl hover:border-white/20 hover:bg-white/5 transition-all">
//                 <div className="flex items-start gap-4 mb-4 md:mb-0">
//                   <div className="mt-1">{cert.icon}</div>
//                   <div>
//                     <h4 className="text-lg font-bold text-white mb-1">{cert.title}</h4>
//                     <p className="text-sm text-gray-400">Issuer: <span className="text-yellow-500/80">{cert.issuer}</span></p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col md:items-end text-left md:text-right">
//                   <span className="px-3 py-1 bg-white/5 rounded-md text-xs font-mono text-gray-300 mb-2 border border-white/10">ID: {cert.id}</span>
//                   <span className="text-sm text-gray-500 font-medium">{cert.status} • {cert.date}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           PHASE 8: THE EPIC "TABHAI" FOOTER (NEW)
//           ========================================= */}
//       <footer id="contact" className="relative z-10 pt-32 pb-10 px-4 mt-10 border-t border-yellow-500/20 bg-gradient-to-t from-[#050505] via-[#1a0505] to-transparent text-center overflow-hidden">
//         {/* Background heavy glow for epic effect */}
//         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-yellow-500/10 blur-[100px] rounded-t-full pointer-events-none"></div>

//         <div className="relative max-w-5xl mx-auto flex flex-col items-center">
          
//           <Trophy className="w-16 h-16 text-yellow-500 mb-6 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]" />
          
//           <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tracking-tighter uppercase">
//             The Future Isn't Predicted.<br/>It's Engineered.
//           </h2>
          
//           <p className="text-gray-300 text-xl mb-12 max-w-3xl font-light">
//             Whether it's optimizing LLMs for complex chemistry, building predictive AVMs for real estate, or engineering data pipelines for retail—I don't just write code. <span className="font-bold text-white">I architect solutions that serve humanity.</span> Let's build the extraordinary.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-6 mb-24">
//             <a href="mailto:sameersain361@gmail.com" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black px-12 py-5 rounded-full font-extrabold text-lg tracking-widest uppercase flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-[0_0_30px_rgba(234,179,8,0.4)]">
//               <Send className="w-6 h-6" /> Initialize Contact
//             </a>
//             <a href="tel:+923047637545" className="px-12 py-5 rounded-full border-2 border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10 hover:border-yellow-400 font-bold text-lg tracking-widest uppercase transition-all hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]">
//               +92 304 7637545
//             </a>
//           </div>

//           {/* Footer Bottom Bar */}
//           <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//             <div className="text-gray-500 text-sm font-mono font-semibold tracking-wider flex items-center gap-2">
//               <Code2 className="w-4 h-4" /> DESIGNED & ENGINEERED BY <span className="text-yellow-500">SAMEER NADEEM</span>
//             </div>
//             <div className="text-gray-600 text-xs font-mono">
//               SYSTEM ONLINE // STATUS: OPTIMIZED // © {new Date().getFullYear()}
//             </div>
//           </div>

//         </div>
//       </footer>

//     </main>
//   );
// }



// "use client";

// import { 
//   Github, Linkedin, Mail, BrainCircuit, Code2, Phone, Rocket, 
//   GitCommitHorizontal, Cpu, Users, TerminalSquare, Database, Wrench, 
//   Sparkles, Briefcase, GraduationCap, ChevronRight, FolderGit2, 
//   ExternalLink, Beaker, Building2, Send, Award, Trophy, Globe, 
//   CheckCircle2, Clock 
// } from "lucide-react";

// export default function Home() {
  
//   // --- PROJECT DATA ARRAYS (PHASE 5) ---
//   const deepchemProjects = [
//     { name: "Mistral7B-ClinTox-Study", link: "https://github.com/Abu-Sameer-66/Mistral7B-ClinTox-Study", desc: "LLM Fine-tuning study on the ClinTox dataset for clinical toxicity prediction.", tags: ["Mistral-7B", "LoRA", "DeepChem"] },
//     { name: "Mistral7B-Tox21-Molecular", link: "https://github.com/Abu-Sameer-66/Mistral7B-Tox21-Molecular-Optimization", desc: "Native fine-tuning of Mistral-7B on Tox21 dataset using 4-bit quantization.", tags: ["Quantization", "Tox21", "LLM"] },
//     { name: "Mistral7B-BACE-Generalization", link: "https://github.com/Abu-Sameer-66/Mistral7B-BACE-Generalization-Study", desc: "Optimizing Mistral-7B for BACE-1 inhibitor prediction using scaffold-split data.", tags: ["Drug Discovery", "Scaffold-Split"] },
//     { name: "Mistral7B-BBBP-Reasoning", link: "https://github.com/Abu-Sameer-66/Mistral7B-BBBP-Molecular-Reasoning", desc: "Molecular property prediction on BBBP using property-aware prompting.", tags: ["Cheminformatics", "DeepChem"] },
//     { name: "ChemLLM-Tox-OLMo", link: "https://github.com/Abu-Sameer-66/ChemLLM-Tox-OLMo", desc: "Fine-tuning OLMo-7B with QLoRA for Molecular Toxicity Prediction.", tags: ["OLMo-7B", "QLoRA", "Generative AI"] }
//   ];

//   const industryProjects = [
//     { name: "Retail-Sales-Performance", link: "https://github.com/Abu-Sameer-66/Retail-Sales-Performance-Analysis", desc: "BI analysis to identify profit leakages and optimize regional sales strategies.", tags: ["Data Analysis", "BI", "Seaborn"] },
//     { name: "CogniPath-Analytics-Engine", link: "https://github.com/Abu-Sameer-66/CogniPath-Analytics-Engine", desc: "AI-driven EdTech engine optimizing academic outcomes via predictive modeling.", tags: ["Predictive Analysis", "Scikit-Learn"] },
//     { name: "PropVal-AI-Real-Estate", link: "https://github.com/Abu-Sameer-66/PropVal-Property-Valuation--AI-Real-Estate-Engine", desc: "Production-grade AVM utilizing Gradient Boosting to estimate real estate asset values.", tags: ["PropTech", "Machine Learning"] },
//     { name: "SpamGuard-AI-Threat-Detection", link: "https://github.com/Abu-Sameer-66/SpamGuard-AI-Threat-Detection", desc: "Enterprise-grade SMS Phishing & Spam Detection System utilizing NLP.", tags: ["NLP", "Text Classification"] },
//     { name: "AI-Voice-Assistant", link: "https://github.com/Abu-Sameer-66/AI-Voice-Assistant-Python", desc: "A modular voice assistant utilizing Python automation and speech recognition.", tags: ["Python", "Automation", "AI"] }
//   ];

//   // --- CERTIFICATIONS DATA ARRAY (PHASE 7) ---
//   const certifications = [
//     { 
//       title: "The Ultimate Job Ready Data Science Course", 
//       issuer: "CodeWithHarry", 
//       date: "Feb 2026", 
//       id: "CWH-THE-ULTIMATE-JOB-READY-DATA-SCIENCE-COURSE-BMXY6IIK", 
//       status: "Completed",
//       icon: <CheckCircle2 className="w-5 h-5 text-green-400" />
//     },
//     { 
//       title: "Python Development Masterclass (11-Hour Intensive)", 
//       issuer: "CodeWithHarry / Self-Taught", 
//       date: "Completed", 
//       id: "Independent Portfolio Validation", 
//       status: "Completed",
//       icon: <CheckCircle2 className="w-5 h-5 text-green-400" />
//     },
//     { 
//       title: "Full-Stack Web Development & Prompt Engineering", 
//       issuer: "Ongoing Specialized Training", 
//       date: "Present", 
//       id: "Skill Expansion Phase", 
//       status: "In Progress",
//       icon: <Clock className="w-5 h-5 text-yellow-400 animate-pulse" />
//     }
//   ];

//   return (
//     <main className="min-h-screen fluid-mesh-bg text-white overflow-x-hidden relative font-sans selection:bg-yellow-500/30">
      
//       {/* =========================================
//           NAVBAR (LOCKED)
//           ========================================= */}
//       <nav className="fixed w-full z-50 bg-[#050505]/60 backdrop-blur-xl border-b border-yellow-500/20 py-4 px-6 md:px-12 flex justify-between items-center shadow-lg">
//         <div className="font-bold text-xl tracking-wide text-white flex items-center gap-1">
//           <span className="text-yellow-500 font-mono">&lt;</span>
//           Sameer Nadeem
//           <span className="text-yellow-500 font-mono">/&gt;</span>
//         </div>
//         <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-300 tracking-wide uppercase">
//           <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
//           <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
//           <a href="#arsenal" className="hover:text-yellow-400 transition-colors">Arsenal</a>
//           <a href="#journey" className="hover:text-yellow-400 transition-colors">Journey</a>
//           <a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a>
//           <a href="#legacy" className="hover:text-yellow-400 transition-colors">Legacy</a>
//         </div>
//       </nav>

//       {/* =========================================
//           PHASE 1: THE ELITE HERO SECTION (LOCKED)
//           ========================================= */}
//       <section id="home" className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-24 px-4 text-center">
//         <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-tr from-yellow-500 via-red-600 to-[#050505] mb-8 shadow-[0_0_50px_rgba(234,179,8,0.4)] group hover:scale-105 transition-transform duration-500">
//           <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500 via-red-600 to-teal-900 rounded-full opacity-60 blur-lg group-hover:opacity-100 transition-opacity animate-pulse"></div>
//           <div className="relative w-full h-full bg-[#0a0a0a] rounded-full border-[3px] border-[#050505] flex items-center justify-center overflow-hidden z-10">
//              <img src="/profile.png" alt="Sameer Nadeem" className="w-full h-full object-cover" onError={(e) => { const target = e.currentTarget; if (target.src.includes('.png')) { target.src = "/profile.jpg"; } else { target.src = "https://ui-avatars.com/api/?name=Sameer+Nadeem&background=0D0D0D&color=EAB308&size=256&bold=true"; } }} />
//           </div>
//         </div>
//         <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white tracking-tighter drop-shadow-2xl">Sameer Nadeem</h1>
//         <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 text-xl md:text-2xl font-bold mb-6 tracking-wide">
//           AI-ML Engineer | Data Scientist | LLM Optimization & Fine-Tuning
//         </p>
//         <div className="flex flex-wrap justify-center gap-4 mb-10">
//           <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-red-500/40 text-sm font-mono text-gray-200 shadow-[0_0_15px_rgba(153,27,27,0.3)] hover:border-red-400 transition-colors">
//             <Code2 size={16} className="text-red-400"/> Python & SQL Developer
//           </span>
//           <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-purple-500/40 text-sm font-mono text-gray-200 shadow-[0_0_15px_rgba(107,33,168,0.3)] hover:border-purple-400 transition-colors">
//             <BrainCircuit size={16} className="text-purple-400"/>Open Source & DeepChem Contributor
//           </span>
//         </div>
//         <h2 className="text-2xl md:text-4xl font-semibold max-w-4xl leading-snug mb-12 text-gray-300 drop-shadow-lg">
//           Building Systems & Architecture. <br className="hidden md:block"/>
//           Transforming <span className="text-white font-bold underline decoration-yellow-500 decoration-4 underline-offset-8">AutoMotive Retail</span> with Data & ML.
//         </h2>
//         <div className="flex flex-col items-center gap-8">
//           <a href="#projects" className="elite-golden-button text-[#3d2b00] px-12 py-4 rounded-full font-extrabold text-lg tracking-wider uppercase flex items-center gap-3">
//             Explore My Work <ChevronRight className="w-6 h-6" />
//           </a>
//           <div className="flex flex-wrap justify-center gap-5 mt-2">
//             <a href="https://www.linkedin.com/in/sameer-nadeem-66339a357/" target="_blank" rel="noreferrer" title="LinkedIn" className="p-4 rounded-full bg-black/60 backdrop-blur-md border border-yellow-500/50 text-yellow-500 hover:text-white hover:bg-yellow-500/20 transition-all hover:scale-110 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
//               <Linkedin size={24} />
//             </a>
//             <a href="https://github.com/Abu-Sameer-66" target="_blank" rel="noreferrer" title="GitHub" className="p-4 rounded-full bg-black/60 backdrop-blur-md border border-yellow-500/50 text-yellow-500 hover:text-white hover:bg-yellow-500/20 transition-all hover:scale-110 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
//               <Github size={24} />
//             </a>
//             <a href="https://www.kaggle.com/sameernadeem66" target="_blank" rel="noreferrer" title="Kaggle" className="p-4 rounded-full bg-black/60 backdrop-blur-md border border-yellow-500/50 text-yellow-500 hover:text-white hover:bg-yellow-500/20 transition-all hover:scale-110 shadow-[0_0_15px_rgba(234,179,8,0.2)] flex items-center justify-center">
//               <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-[24px] h-[24px]"><path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.34-.246.526-.246h3.255c.234 0 .304.141.211.422L12.35 14.54l6.475 9.319z"/></svg>
//             </a>
//             <a href="mailto:sameersain361@gmail.com" title="Email" className="p-4 rounded-full bg-black/60 backdrop-blur-md border border-yellow-500/50 text-yellow-500 hover:text-white hover:bg-yellow-500/20 transition-all hover:scale-110 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
//               <Mail size={24} />
//             </a>
//             <a href="tel:+923047637545" title="Call" className="p-4 rounded-full bg-black/60 backdrop-blur-md border border-yellow-500/50 text-yellow-500 hover:text-white hover:bg-yellow-500/20 transition-all hover:scale-110 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
//               <Phone size={24} />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           PHASE 2: WHO AM I ? (LOCKED)
//           ========================================= */}
//       <section id="about" className="relative z-10 py-20 px-4 md:px-12 max-w-6xl mx-auto flex flex-col items-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white tracking-tight flex items-center gap-4">
//           <span className="w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//           Who Am I ?
//           <span className="w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//         </h2>
//         <div className="bg-[#050505]/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl mb-16 hover:border-yellow-500/30 transition-colors duration-500">
//           <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light text-justify md:text-center">
//             Hi, I'm <span className="text-yellow-400 font-semibold">Sameer Nadeem</span>. I believe true AI isn't just trained on static datasets; it's engineered from the ground up to solve real human problems. Beyond my academic foundation as a Data Science student at the <span className="text-white font-medium">Islamia University of Bahawalpur</span>, I am actively bridging the gap between raw data and real-world impact.
//             <br/><br/>
//             Currently, I am conducting hands-on data engineering at an <span className="text-yellow-400 font-semibold">Automotive Retail</span> business—analyzing pricing elasticity, inventory dynamics, and customer feedback loops to build ML systems that optimize daily operations. Whether it's contributing to DeepChem's open-source ecosystem, engineering scalable LLM pipelines, or extracting insights straight from the shop floor, my mission is singular: <span className="text-white font-medium">to architect intelligent systems that serve humanity and make life easier.</span>
//           </p>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
//           <div className="flex flex-col items-center justify-center p-8 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 group hover:border-yellow-500/50 hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:-translate-y-2">
//             <Rocket className="w-10 h-10 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
//             <h3 className="text-4xl font-extrabold text-white mb-2">10+</h3>
//             <p className="text-sm text-yellow-500 uppercase tracking-widest font-bold mb-1">AI-ML Projects</p>
//             <p className="text-xs text-gray-400 text-center font-medium">Built & Deployed</p>
//           </div>
//           <div className="flex flex-col items-center justify-center p-8 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 group hover:border-yellow-500/50 hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:-translate-y-2">
//             <GitCommitHorizontal className="w-10 h-10 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
//             <h3 className="text-4xl font-extrabold text-white mb-2">600+</h3>
//             <p className="text-sm text-yellow-500 uppercase tracking-widest font-bold mb-1">GitHub Commits</p>
//             <p className="text-xs text-gray-400 text-center font-medium">Active Developer</p>
//           </div>
//           <div className="flex flex-col items-center justify-center p-8 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 group hover:border-yellow-500/50 hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:-translate-y-2">
//             <Cpu className="w-10 h-10 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
//             <h3 className="text-4xl font-extrabold text-white mb-2">LLMs</h3>
//             <p className="text-sm text-yellow-500 uppercase tracking-widest font-bold mb-1">Fine-Tuning</p>
//             <p className="text-xs text-gray-400 text-center font-medium">Optimization Expert</p>
//           </div>
//           <div className="flex flex-col items-center justify-center p-8 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 group hover:border-yellow-500/50 hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:-translate-y-2">
//             <Users className="w-10 h-10 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
//             <h3 className="text-4xl font-extrabold text-white mb-2">2,000+</h3>
//             <p className="text-sm text-yellow-500 uppercase tracking-widest font-bold mb-1">Network</p>
//             <p className="text-xs text-gray-400 text-center font-medium">Tech Community</p>
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           PHASE 3: TECHNICAL ARSENAL (LOCKED)
//           ========================================= */}
//       <section id="arsenal" className="relative z-10 py-20 px-4 md:px-12 max-w-6xl mx-auto flex flex-col items-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight flex items-center gap-4">
//           <span className="w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//           Technical Arsenal
//           <span className="w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
//           <div className="bg-[#050505]/70 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-yellow-500/40 transition-all duration-500 flex flex-col h-full shadow-xl hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]">
//             <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
//               <TerminalSquare className="w-6 h-6 text-yellow-400 drop-shadow-md" />
//               <h3 className="text-xl font-bold text-white tracking-wide">Languages & DB</h3>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               {['Python', 'SQL', 'C++ (Beginner)', 'JavaScript (Beginner)'].map((skill) => (
//                 <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 shadow-sm cursor-default transition-all duration-300 hover:text-yellow-300 hover:border-yellow-500/60 hover:bg-yellow-500/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">{skill}</span>
//               ))}
//             </div>
//           </div>
          
//           <div className="md:col-span-2 bg-[#050505]/70 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-yellow-500/40 transition-all duration-500 flex flex-col h-full shadow-xl hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]">
//             <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
//               <Sparkles className="w-6 h-6 text-yellow-400 drop-shadow-md" />
//               <h3 className="text-xl font-bold text-white tracking-wide">Specializations</h3>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               {['LLM Fine-Tuning', 'System Architecture', 'Molecular ML', 'Web Scraping', 'Workflow Automation', 'AutoMotive Data Analytics', 'RAG (Retrieval-Augmented Generation)'].map((skill) => (
//                 <span key={skill} className="px-5 py-2.5 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-sm font-semibold text-yellow-100 shadow-md cursor-default transition-all duration-300 hover:text-white hover:border-yellow-400 hover:bg-yellow-500/30 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(234,179,8,0.5)]">{skill}</span>
//               ))}
//             </div>
//           </div>
          
//           <div className="md:col-span-2 bg-[#050505]/70 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-yellow-500/40 transition-all duration-500 flex flex-col h-full shadow-xl hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]">
//             <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
//               <Database className="w-6 h-6 text-yellow-400 drop-shadow-md" />
//               <h3 className="text-xl font-bold text-white tracking-wide">AI & Data Ecosystem</h3>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               {['DeepChem', 'TensorFlow', 'PyTorch', 'Hugging Face', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'OpenCV'].map((skill) => (
//                 <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 shadow-sm cursor-default transition-all duration-300 hover:text-yellow-300 hover:border-yellow-500/60 hover:bg-yellow-500/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">{skill}</span>
//               ))}
//             </div>
//           </div>
          
//           <div className="bg-[#050505]/70 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-yellow-500/40 transition-all duration-500 flex flex-col h-full shadow-xl hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]">
//             <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
//               <Wrench className="w-6 h-6 text-yellow-400 drop-shadow-md" />
//               <h3 className="text-xl font-bold text-white tracking-wide">Tools & DevOps</h3>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               {['Git & GitHub', 'VS Code', 'Jupyter', 'Google Colab', 'Kaggle', 'LinkedIn', 'ORCID', 'Discord'].map((skill) => (
//                 <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 shadow-sm cursor-default transition-all duration-300 hover:text-yellow-300 hover:border-yellow-500/60 hover:bg-yellow-500/10 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">{skill}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           PHASE 4: EXPERIENCE & ACADEMIC TIMELINE (LOCKED)
//           ========================================= */}
//       <section id="journey" className="relative z-10 py-20 px-4 md:px-12 max-w-5xl mx-auto flex flex-col items-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight flex items-center gap-4 text-center">
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//           Where I've Made Impact
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//         </h2>
//         <div className="relative w-full border-l-2 md:border-l-0 md:border-t-0 md:absolute-center md:before:absolute md:before:inset-0 md:before:ml-auto md:before:mr-auto md:before:w-[2px] md:before:bg-gradient-to-b md:before:from-yellow-500 md:before:via-red-600 md:before:to-purple-900 border-yellow-500/30 pl-6 md:pl-0">
          
//           <div className="relative mb-16 md:mb-24 md:w-1/2 md:pr-12 md:ml-0 group">
//             <div className="absolute -left-[35px] md:-right-[11px] md:left-auto top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
//             <div className="bg-[#050505]/60 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] hover:-translate-y-1">
//               <div className="flex items-center gap-3 mb-2">
//                 <Briefcase className="w-5 h-5 text-yellow-500" />
//                 <h3 className="text-2xl font-bold text-white">Data Strategy Consultant</h3>
//               </div>
//               <p className="text-yellow-400 font-medium mb-1">Al-Quresh Motors & Spare Parts</p>
//               <p className="text-xs text-gray-500 font-mono mb-4 border-b border-white/10 pb-4">JAN 2026 — PRESENT | Ground-Zero Analytics</p>
//               <ul className="space-y-2 text-gray-300 text-sm md:text-base leading-relaxed">
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 shrink-0 mt-1"/> Executing ground-level data collection to analyze customer psychology, product demand, and pricing elasticity.</li>
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 shrink-0 mt-1"/> Digitizing shop floor operations and mapping customer churn to predict seasonal product roadmaps for the business owner.</li>
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 shrink-0 mt-1"/> Bridging the gap between raw retail logic and Machine Learning to build a predictive, customer-satisfaction-focused sales system.</li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="relative mb-16 md:mb-24 md:w-1/2 md:pl-12 md:ml-auto group">
//             <div className="absolute -left-[35px] md:-left-[11px] top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
//             <div className="bg-[#050505]/60 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-1">
//               <div className="flex items-center gap-3 mb-2">
//                 <Code2 className="w-5 h-5 text-purple-400" />
//                 <h3 className="text-2xl font-bold text-white">Core Open Source Contributor</h3>
//               </div>
//               <p className="text-purple-400 font-medium mb-1">DeepChem Ecosystem</p>
//               <p className="text-xs text-gray-500 font-mono mb-4 border-b border-white/10 pb-4">DEC 2025 — PRESENT | Global AI Community</p>
//               <ul className="space-y-2 text-gray-300 text-sm md:text-base leading-relaxed">
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-1"/> Integrating a lifelong passion for Chemistry with modern computing by teaching AI models complex molecular science.</li>
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-1"/> Submitting advanced Pull Requests (PRs) focused on model optimization and fine-tuning LLMs for chemical datasets.</li>
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-1"/> Actively contributing to architectures that transform computational chemistry into scalable machine learning solutions.</li>
//               </ul>
//             </div>
//           </div>

//           <div className="relative mb-16 md:mb-24 md:w-1/2 md:pr-12 md:ml-0 group">
//             <div className="absolute -left-[35px] md:-right-[11px] md:left-auto top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
//             <div className="bg-[#050505]/60 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1">
//               <div className="flex items-center gap-3 mb-2">
//                 <GraduationCap className="w-6 h-6 text-blue-400" />
//                 <h3 className="text-2xl font-bold text-white">Bachelor of Science in Data Science</h3>
//               </div>
//               <p className="text-blue-400 font-medium mb-1">Islamia University of Bahawalpur</p>
//               <p className="text-xs text-gray-500 font-mono mb-4 border-b border-white/10 pb-4">AUG 2023 — EXP. 2027 | 6th Semester | Grade: B</p>
//               <div className="text-gray-300 text-sm md:text-base leading-relaxed">
//                 <p className="mb-2 text-gray-400">Core Architecture & Logic Coursework:</p>
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {['Advanced ML', 'ANN & Deep Learning', 'Data Mining', 'Probability & Stats', 'Business Process Analysis', 'Data Warehouse & BI'].map((sub) => (
//                     <span key={sub} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-xs text-blue-200">{sub}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="relative mb-16 md:mb-24 md:w-1/2 md:pl-12 md:ml-auto group">
//             <div className="absolute -left-[35px] md:-left-[11px] top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-gray-400 shadow-[0_0_15px_rgba(156,163,175,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
//             <div className="bg-[#050505]/60 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:border-gray-400/50 transition-all duration-300 hover:-translate-y-1">
//               <div className="flex items-center gap-3 mb-2">
//                 <GraduationCap className="w-5 h-5 text-gray-300" />
//                 <h3 className="text-xl font-bold text-white">Intermediate (FSc Pre-Engineering)</h3>
//               </div>
//               <p className="text-gray-300 font-medium mb-1">Punjab Group of Colleges, Bahawalpur</p>
//               <p className="text-xs text-gray-500 font-mono mb-2">2021 — 2023 | Grade: B</p>
//               <p className="text-gray-400 text-sm leading-relaxed">Developed a profound, life-long passion for Chemistry through exceptional mentorship, laying the analytical foundation for my future work in Molecular Machine Learning.</p>
//             </div>
//           </div>

//           <div className="relative md:w-1/2 md:pr-12 md:ml-0 group">
//             <div className="absolute -left-[35px] md:-right-[11px] md:left-auto top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
//             <div className="bg-gradient-to-br from-[#050505] to-[#1a0505] backdrop-blur-md border border-red-500/30 p-6 md:p-8 rounded-2xl hover:border-red-500/70 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] hover:-translate-y-1 relative overflow-hidden">
//               <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/10 blur-2xl rounded-full"></div>
//               <div className="flex items-center gap-3 mb-2">
//                 <GraduationCap className="w-5 h-5 text-red-400" />
//                 <h3 className="text-xl font-bold text-white">Matriculation (Science)</h3>
//               </div>
//               <p className="text-red-400 font-medium mb-1">Government Technical High School, BWP</p>
//               <p className="text-xs text-gray-500 font-mono mb-3">GRADUATED 2021</p>
//               <div className="flex items-center gap-3 mb-2">
//                  <span className="px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 font-bold tracking-widest">1037 / 1100 Marks</span>
//               </div>
//               <p className="text-gray-300 text-sm leading-relaxed mt-3">Selected as part of the highly coveted <span className="text-white font-bold">Top 1% Elite Cohort</span> in one of the city's highest-ranking schools. A foundational era that cemented a track record of top-tier execution.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           PHASE 5: ELITE PROJECTS SHOWCASE (LOCKED)
//           ========================================= */}
//       <section id="projects" className="relative z-10 py-20 px-4 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight flex items-center gap-4 text-center">
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//           Building Intelligence, One Model At A Time
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//         </h2>
//         <p className="text-gray-400 text-lg mb-16 max-w-2xl text-center">A curated selection of my production-grade systems, open-source contributions, and real-world ML engines.</p>

//         <div className="w-full mb-16">
//           <div className="flex items-center gap-3 mb-8 border-b border-purple-500/30 pb-4">
//             <Beaker className="w-8 h-8 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
//             <h3 className="text-3xl font-bold text-white tracking-wide">Open Source & Molecular ML <span className="text-purple-400 text-xl font-medium">(DeepChem / GSoC)</span></h3>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {deepchemProjects.map((project, index) => (
//               <div key={index} className="bg-gradient-to-br from-[#0a0a0a] to-[#120518] backdrop-blur-xl border border-purple-500/20 p-6 rounded-2xl hover:border-purple-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:-translate-y-2 flex flex-col justify-between group">
//                 <div>
//                   <div className="flex justify-between items-start mb-4">
//                     <FolderGit2 className="w-8 h-8 text-purple-500 group-hover:text-yellow-400 transition-colors" />
//                     <a href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-purple-500/20 transition-colors"><ExternalLink className="w-5 h-5 text-gray-300 hover:text-white" /></a>
//                   </div>
//                   <h4 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-purple-300 transition-colors">{project.name}</h4>
//                   <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>
//                 </div>
//                 <div className="flex flex-wrap gap-2 mt-auto">
//                   {project.tags.map(tag => (
//                     <span key={tag} className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-md text-xs font-medium text-purple-200">{tag}</span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="w-full">
//           <div className="flex items-center gap-3 mb-8 border-b border-blue-500/30 pb-4">
//             <Building2 className="w-8 h-8 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
//             <h3 className="text-3xl font-bold text-white tracking-wide">Enterprise & Industry Solutions</h3>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {industryProjects.map((project, index) => (
//               <div key={index} className="bg-gradient-to-br from-[#0a0a0a] to-[#050f1a] backdrop-blur-xl border border-blue-500/20 p-6 rounded-2xl hover:border-blue-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:-translate-y-2 flex flex-col justify-between group">
//                 <div>
//                   <div className="flex justify-between items-start mb-4">
//                     <FolderGit2 className="w-8 h-8 text-blue-500 group-hover:text-yellow-400 transition-colors" />
//                     <a href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-blue-500/20 transition-colors"><ExternalLink className="w-5 h-5 text-gray-300 hover:text-white" /></a>
//                   </div>
//                   <h4 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-300 transition-colors">{project.name}</h4>
//                   <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>
//                 </div>
//                 <div className="flex flex-wrap gap-2 mt-auto">
//                   {project.tags.map(tag => (
//                     <span key={tag} className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-md text-xs font-medium text-blue-200">{tag}</span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           PHASE 6 & 7: LEADERSHIP & CREDENTIALS (LOCKED)
//           ========================================= */}
//       <section id="legacy" className="relative z-10 py-20 px-4 md:px-12 max-w-6xl mx-auto flex flex-col items-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight flex items-center gap-4 text-center">
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//           Leadership & Digital Footprint
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-20">
//           <div className="bg-[#050505]/60 backdrop-blur-xl border border-yellow-500/20 p-8 rounded-3xl hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)] flex flex-col items-center text-center group">
//             <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Users className="w-10 h-10 text-blue-400" /></div>
//             <h3 className="text-2xl font-bold text-white mb-3">Global Tech Community Leader</h3>
//             <p className="text-gray-300 leading-relaxed">Cultivating an active and engaged network of <span className="text-yellow-400 font-bold">2,000+ industry professionals</span> on LinkedIn. Consistently sharing high-value insights on LLM fine-tuning, Python development, and real-world Data Science strategies.</p>
//           </div>
//           <div className="bg-[#050505]/60 backdrop-blur-xl border border-yellow-500/20 p-8 rounded-3xl hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)] flex flex-col items-center text-center group">
//             <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Globe className="w-10 h-10 text-purple-400" /></div>
//             <h3 className="text-2xl font-bold text-white mb-3">Open Source Advocate</h3>
//             <p className="text-gray-300 leading-relaxed">Dedicated to the democratization of deep learning through active contributions to <span className="text-yellow-400 font-bold">DeepChem</span>. Building public-beneficial systems and driving the adoption of molecular machine learning in global scientific communities.</p>
//           </div>
//         </div>

//         <div className="w-full">
//           <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
//             <Award className="w-8 h-8 text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
//             <h3 className="text-3xl font-bold text-white tracking-wide">Certificates & Continuous Learning</h3>
//           </div>
//           <div className="flex flex-col gap-4">
//             {certifications.map((cert, index) => (
//               <div key={index} className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#0a0a0a]/50 backdrop-blur-md border border-white/5 p-6 rounded-2xl hover:border-white/20 hover:bg-white/5 transition-all">
//                 <div className="flex items-start gap-4 mb-4 md:mb-0">
//                   <div className="mt-1">{cert.icon}</div>
//                   <div>
//                     <h4 className="text-lg font-bold text-white mb-1">{cert.title}</h4>
//                     <p className="text-sm text-gray-400">Issuer: <span className="text-yellow-500/80">{cert.issuer}</span></p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col md:items-end text-left md:text-right">
//                   <span className="px-3 py-1 bg-white/5 rounded-md text-xs font-mono text-gray-300 mb-2 border border-white/10">ID: {cert.id}</span>
//                   <span className="text-sm text-gray-500 font-medium">{cert.status} • {cert.date}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           PHASE 8: THE EPIC "TABHAI" FOOTER (ANIMATED)
//           ========================================= */}
//       <footer id="contact" className="relative z-10 pt-32 pb-10 px-4 mt-10 border-t border-white/5 bg-gradient-to-t from-[#050505] via-[#1a0505] to-transparent text-center overflow-hidden">
        
//         {/* INLINE CSS FOR ELITE ANIMATIONS */}
//         <style dangerouslySetInnerHTML={{__html: `
//           @keyframes scanline {
//             0% { transform: translateX(-100%); }
//             100% { transform: translateX(100vw); }
//           }
//           .animate-scan {
//             animation: scanline 4s ease-in-out infinite;
//           }
//           @keyframes text-shimmer {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }
//           .animate-text-shimmer {
//             background-size: 200% auto;
//             animation: text-shimmer 4s linear infinite;
//           }
//         `}} />

//         {/* Moving Laser Line on Top Border */}
//         <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden">
//           <div className="w-[200px] h-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-scan shadow-[0_0_20px_rgba(234,179,8,1)]"></div>
//         </div>

//         {/* Breathing Background Glow (Pulse Effect) */}
//         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-yellow-500/10 blur-[100px] rounded-t-full pointer-events-none animate-pulse"></div>

//         <div className="relative max-w-5xl mx-auto flex flex-col items-center">
          
//           <Trophy className="w-16 h-16 text-yellow-500 mb-6 drop-shadow-[0_0_20px_rgba(234,179,8,0.8)] animate-pulse" style={{ animationDuration: '3s' }} />
          
//           {/* Animated Shimmer Text */}
//           <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-400 to-white animate-text-shimmer tracking-tighter uppercase">
//             The Future Isn't Predicted.<br/>It's Engineered.
//           </h2>
          
//           <p className="text-gray-300 text-xl mb-12 max-w-3xl font-light">
//             Whether it's optimizing LLMs for complex chemistry, building predictive AVMs for real estate, or engineering data pipelines for retail—I don't just write code. <span className="font-bold text-white">I architect solutions that serve humanity.</span> Let's build the extraordinary.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-6 mb-24">
//             <a href="mailto:sameersain361@gmail.com" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black px-12 py-5 rounded-full font-extrabold text-lg tracking-widest uppercase flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-[0_0_30px_rgba(234,179,8,0.4)]">
//               <Send className="w-6 h-6 animate-pulse" /> Initialize Contact
//             </a>
//             <a href="tel:+923047637545" className="px-12 py-5 rounded-full border-2 border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10 hover:border-yellow-400 font-bold text-lg tracking-widest uppercase transition-all hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]">
//               +92 304 7637545
//             </a>
//           </div>

//           {/* Footer Bottom Bar */}
//           <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//             <div className="text-gray-500 text-sm font-mono font-semibold tracking-wider flex items-center gap-2">
//               <Code2 className="w-4 h-4" /> DESIGNED & ENGINEERED BY <span className="text-yellow-500">SAMEER NADEEM</span>
//             </div>
//             <div className="text-gray-600 text-xs font-mono">
//               SYSTEM ONLINE // STATUS: OPTIMIZED // © {new Date().getFullYear()}
//             </div>
//           </div>

//         </div>
//       </footer>

//     </main>
//   );
// }



// "use client";

// import { 
//   Github, Linkedin, Mail, BrainCircuit, Code2, Phone, Rocket, 
//   GitCommitHorizontal, Cpu, Users, TerminalSquare, Database, Wrench, 
//   Sparkles, Briefcase, GraduationCap, ChevronRight, FolderGit2, 
//   ExternalLink, Beaker, Building2, Send, Award, Trophy, Globe, 
//   CheckCircle2, Clock 
// } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Home() {
  
//   // --- PROJECT DATA ARRAYS ---
//   const deepchemProjects = [
//     { name: "Mistral7B-ClinTox-Study", link: "https://github.com/Abu-Sameer-66/Mistral7B-ClinTox-Study", desc: "LLM Fine-tuning study on the ClinTox dataset for clinical toxicity prediction.", tags: ["Mistral-7B", "LoRA", "DeepChem"] },
//     { name: "Mistral7B-Tox21-Molecular", link: "https://github.com/Abu-Sameer-66/Mistral7B-Tox21-Molecular-Optimization", desc: "Native fine-tuning of Mistral-7B on Tox21 dataset using 4-bit quantization.", tags: ["Quantization", "Tox21", "LLM"] },
//     { name: "Mistral7B-BACE-Generalization", link: "https://github.com/Abu-Sameer-66/Mistral7B-BACE-Generalization-Study", desc: "Optimizing Mistral-7B for BACE-1 inhibitor prediction using scaffold-split data.", tags: ["Drug Discovery", "Scaffold-Split"] },
//     { name: "Mistral7B-BBBP-Reasoning", link: "https://github.com/Abu-Sameer-66/Mistral7B-BBBP-Molecular-Reasoning", desc: "Molecular property prediction on BBBP using property-aware prompting.", tags: ["Cheminformatics", "DeepChem"] },
//     { name: "ChemLLM-Tox-OLMo", link: "https://github.com/Abu-Sameer-66/ChemLLM-Tox-OLMo", desc: "Fine-tuning OLMo-7B with QLoRA for Molecular Toxicity Prediction.", tags: ["OLMo-7B", "QLoRA", "Generative AI"] }
//   ];

//   const industryProjects = [
//     { name: "Retail-Sales-Performance", link: "https://github.com/Abu-Sameer-66/Retail-Sales-Performance-Analysis", desc: "BI analysis to identify profit leakages and optimize regional sales strategies.", tags: ["Data Analysis", "BI", "Seaborn"] },
//     { name: "CogniPath-Analytics-Engine", link: "https://github.com/Abu-Sameer-66/CogniPath-Analytics-Engine", desc: "AI-driven EdTech engine optimizing academic outcomes via predictive modeling.", tags: ["Predictive Analysis", "Scikit-Learn"] },
//     { name: "PropVal-AI-Real-Estate", link: "https://github.com/Abu-Sameer-66/PropVal-Property-Valuation--AI-Real-Estate-Engine", desc: "Production-grade AVM utilizing Gradient Boosting to estimate real estate asset values.", tags: ["PropTech", "Machine Learning"] },
//     { name: "SpamGuard-AI-Threat-Detection", link: "https://github.com/Abu-Sameer-66/SpamGuard-AI-Threat-Detection", desc: "Enterprise-grade SMS Phishing & Spam Detection System utilizing NLP.", tags: ["NLP", "Text Classification"] },
//     { name: "AI-Voice-Assistant", link: "https://github.com/Abu-Sameer-66/AI-Voice-Assistant-Python", desc: "A modular voice assistant utilizing Python automation and speech recognition.", tags: ["Python", "Automation", "AI"] }
//   ];

//   // --- CERTIFICATIONS DATA ARRAY ---
//   const certifications = [
//     { 
//       title: "The Ultimate Job Ready Data Science Course", 
//       issuer: "CodeWithHarry", 
//       date: "Feb 2026", 
//       id: "CWH-THE-ULTIMATE-JOB-READY-DATA-SCIENCE-COURSE-BMXY6IIK", 
//       status: "Completed",
//       icon: <CheckCircle2 className="w-5 h-5 text-green-400" />
//     },
//     { 
//       title: "Python Development Masterclass (11-Hour Intensive)", 
//       issuer: "CodeWithHarry / Self-Taught", 
//       date: "Completed", 
//       id: "Independent Portfolio Validation", 
//       status: "Completed",
//       icon: <CheckCircle2 className="w-5 h-5 text-green-400" />
//     },
//     { 
//       title: "Full-Stack Web Development & Prompt Engineering", 
//       issuer: "Ongoing Specialized Training", 
//       date: "Present", 
//       id: "Skill Expansion Phase", 
//       status: "In Progress",
//       icon: <Clock className="w-5 h-5 text-yellow-400 animate-pulse" />
//     }
//   ];

//   // --- 3D ANIMATION VARIANTS (THE ENGINE) ---
//   const fadeInUp3D = {
//     hidden: { opacity: 0, y: 60, rotateX: -15, scale: 0.95 },
//     visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 } }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
//   };

//   const popIn3D = {
//     hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
//     visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { type: "spring", stiffness: 120, damping: 15 } }
//   };

//   return (
//     <main className="min-h-screen fluid-mesh-bg text-white overflow-x-hidden relative font-sans selection:bg-yellow-500/30 perspective-[1000px]">
      
//       {/* 4D FLOATING ORBS (Background Environment) */}
//       <motion.div animate={{ y: [0, -50, 0], x: [0, 30, 0] }} transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }} className="absolute top-1/4 left-10 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
//       <motion.div animate={{ y: [0, 50, 0], x: [0, -40, 0] }} transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }} className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-yellow-700/10 rounded-full blur-[150px] pointer-events-none" />

//       {/* NAVBAR */}
//       <motion.nav 
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ type: "spring", stiffness: 100, damping: 20 }}
//         className="fixed w-full z-50 bg-[#050505]/60 backdrop-blur-xl border-b border-yellow-500/20 py-4 px-6 md:px-12 flex justify-between items-center shadow-lg"
//       >
//         <div className="font-bold text-xl tracking-wide text-white flex items-center gap-1">
//           <span className="text-yellow-500 font-mono">&lt;</span>
//           Sameer Nadeem
//           <span className="text-yellow-500 font-mono">/&gt;</span>
//         </div>
//         <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-300 tracking-wide uppercase">
//           <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
//           <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
//           <a href="#arsenal" className="hover:text-yellow-400 transition-colors">Arsenal</a>
//           <a href="#journey" className="hover:text-yellow-400 transition-colors">Journey</a>
//           <a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a>
//           <a href="#legacy" className="hover:text-yellow-400 transition-colors">Legacy</a>
//         </div>
//       </motion.nav>

//       {/* PHASE 1: HERO SECTION */}
//       <section id="home" className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-24 px-4 text-center transform-style-3d">
        
//         {/* Floating Profile Image */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
//           animate={{ opacity: 1, scale: 1, rotateY: 0 }}
//           transition={{ type: "spring", stiffness: 60, damping: 20, duration: 1.5 }}
//           className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-tr from-yellow-500 via-red-600 to-[#050505] mb-8 shadow-[0_0_50px_rgba(234,179,8,0.4)] group"
//         >
//           <motion.div 
//             animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.8, 0.6] }} 
//             transition={{ repeat: Infinity, duration: 3 }}
//             className="absolute inset-0 bg-gradient-to-tr from-yellow-500 via-red-600 to-teal-900 rounded-full opacity-60 blur-lg"
//           />
//           <div className="relative w-full h-full bg-[#0a0a0a] rounded-full border-[3px] border-[#050505] flex items-center justify-center overflow-hidden z-10">
//              <img src="/profile.png" alt="Sameer Nadeem" className="w-full h-full object-cover" onError={(e) => { const target = e.currentTarget; if (target.src.includes('.png')) { target.src = "/profile.jpg"; } else { target.src = "https://ui-avatars.com/api/?name=Sameer+Nadeem&background=0D0D0D&color=EAB308&size=256&bold=true"; } }} />
//           </div>
//         </motion.div>

//         <motion.h1 
//           initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-5xl md:text-7xl font-extrabold mb-4 text-white tracking-tighter drop-shadow-2xl"
//         >
//           Sameer Nadeem
//         </motion.h1>
        
//         <motion.p 
//           initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
//           className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 text-xl md:text-2xl font-bold mb-6 tracking-wide"
//         >
//           AI-ML Engineer | Data Scientist | LLM Optimization & Fine-Tuning
//         </motion.p>

//         <motion.div 
//           initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7, type: "spring" }}
//           className="flex flex-wrap justify-center gap-4 mb-10"
//         >
//           <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-red-500/40 text-sm font-mono text-gray-200 shadow-[0_0_15px_rgba(153,27,27,0.3)] hover:border-red-400 transition-colors">
//             <Code2 size={16} className="text-red-400"/> Python & SQL Developer
//           </span>
//           <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-purple-500/40 text-sm font-mono text-gray-200 shadow-[0_0_15px_rgba(107,33,168,0.3)] hover:border-purple-400 transition-colors">
//             <BrainCircuit size={16} className="text-purple-400"/>Open Source & DeepChem Contributor
//           </span>
//         </motion.div>

//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
//           className="text-2xl md:text-4xl font-semibold max-w-4xl leading-snug mb-12 text-gray-300 drop-shadow-lg"
//         >
//           Building Systems & Architecture. <br className="hidden md:block"/>
//           Transforming <span className="text-white font-bold underline decoration-yellow-500 decoration-4 underline-offset-8">AutoMotive Retail</span> with Data & ML.
//         </motion.h2>

//         <motion.div 
//           initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, type: "spring" }}
//           className="flex flex-col items-center gap-8"
//         >
//           <motion.a 
//             whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(234,179,8,0.6)" }} whileTap={{ scale: 0.95 }}
//             href="#projects" 
//             className="elite-golden-button text-[#3d2b00] px-12 py-4 rounded-full font-extrabold text-lg tracking-wider uppercase flex items-center gap-3"
//           >
//             Explore My Work <ChevronRight className="w-6 h-6" />
//           </motion.a>
          
//           <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-wrap justify-center gap-5 mt-2">
//             {[
//               { icon: <Linkedin size={24} />, link: "https://www.linkedin.com/in/sameer-nadeem-66339a357/", title: "LinkedIn" },
//               { icon: <Github size={24} />, link: "https://github.com/Abu-Sameer-66", title: "GitHub" },
//               { icon: <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-[24px] h-[24px]"><path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.34-.246.526-.246h3.255c.234 0 .304.141.211.422L12.35 14.54l6.475 9.319z"/></svg>, link: "https://www.kaggle.com/sameernadeem66", title: "Kaggle" },
//               { icon: <Mail size={24} />, link: "mailto:sameersain361@gmail.com", title: "Email" },
//               { icon: <Phone size={24} />, link: "tel:+923047637545", title: "Call" }
//             ].map((social, i) => (
//               <motion.a 
//                 key={i} variants={popIn3D} whileHover={{ scale: 1.2, rotateZ: 5, y: -5 }}
//                 href={social.link} target="_blank" rel="noreferrer" title={social.title} 
//                 className="p-4 rounded-full bg-black/60 backdrop-blur-md border border-yellow-500/50 text-yellow-500 hover:text-white hover:bg-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.2)] flex items-center justify-center"
//               >
//                 {social.icon}
//               </motion.a>
//             ))}
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* =========================================
//           PHASE 2: WHO AM I ?
//           ========================================= */}
//       <section id="about" className="relative z-10 py-20 px-4 md:px-12 max-w-6xl mx-auto flex flex-col items-center perspective-[1200px]">
//         <motion.h2 variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-4xl md:text-5xl font-bold mb-12 text-white tracking-tight flex items-center gap-4">
//           <span className="w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//           Who Am I ?
//           <span className="w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//         </motion.h2>

//         <motion.div 
//           variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }}
//           className="bg-[#050505]/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl mb-16 hover:border-yellow-500/30 transition-colors duration-500"
//         >
//           <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light text-justify md:text-center">
//             Hi, I'm <span className="text-yellow-400 font-semibold">Sameer Nadeem</span>. I believe true AI isn't just trained on static datasets; it's engineered from the ground up to solve real human problems. Beyond my academic foundation as a Data Science student at the <span className="text-white font-medium">Islamia University of Bahawalpur</span>, I am actively bridging the gap between raw data and real-world impact.
//             <br/><br/>
//             Currently, I am conducting hands-on data engineering at an <span className="text-yellow-400 font-semibold">Automotive Retail</span> business—analyzing pricing elasticity, inventory dynamics, and customer feedback loops to build ML systems that optimize daily operations. Whether it's contributing to DeepChem's open-source ecosystem, engineering scalable LLM pipelines, or extracting insights straight from the shop floor, my mission is singular: <span className="text-white font-medium">to architect intelligent systems that serve humanity and make life easier.</span>
//           </p>
//         </motion.div>

//         <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
//           {[
//             { icon: <Rocket className="w-10 h-10 text-yellow-500 mb-4" />, val: "10+", title: "AI-ML Projects", sub: "Built & Deployed" },
//             { icon: <GitCommitHorizontal className="w-10 h-10 text-yellow-500 mb-4" />, val: "600+", title: "GitHub Commits", sub: "Active Developer" },
//             { icon: <Cpu className="w-10 h-10 text-yellow-500 mb-4" />, val: "LLMs", title: "Fine-Tuning", sub: "Optimization Expert" },
//             { icon: <Users className="w-10 h-10 text-yellow-500 mb-4" />, val: "2,000+", title: "Network", sub: "Tech Community" }
//           ].map((metric, i) => (
//             <motion.div 
//               key={i} variants={popIn3D} whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5, z: 20 }}
//               className="flex flex-col items-center justify-center p-8 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-2xl group hover:border-yellow-500/50 hover:shadow-[0_20px_40px_rgba(234,179,8,0.2)] transform-style-3d"
//             >
//               <div className="group-hover:scale-110 transition-transform duration-300">{metric.icon}</div>
//               <h3 className="text-4xl font-extrabold text-white mb-2">{metric.val}</h3>
//               <p className="text-sm text-yellow-500 uppercase tracking-widest font-bold mb-1">{metric.title}</p>
//               <p className="text-xs text-gray-400 text-center font-medium">{metric.sub}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* =========================================
//           PHASE 3: TECHNICAL ARSENAL
//           ========================================= */}
//       <section id="arsenal" className="relative z-10 py-20 px-4 md:px-12 max-w-6xl mx-auto flex flex-col items-center perspective-[1500px]">
//         <motion.h2 variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight flex items-center gap-4">
//           <span className="w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//           Technical Arsenal
//           <span className="w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//         </motion.h2>
        
//         <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          
//           {/* Languages */}
//           <motion.div variants={fadeInUp3D} className="bg-[#050505]/70 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-yellow-500/40 transition-all duration-500 flex flex-col h-full shadow-xl hover:shadow-[0_10px_30px_rgba(234,179,8,0.15)]">
//             <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
//               <TerminalSquare className="w-6 h-6 text-yellow-400 drop-shadow-md" />
//               <h3 className="text-xl font-bold text-white tracking-wide">Languages & DB</h3>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               {['Python', 'SQL', 'C++ (Beginner)', 'JavaScript (Beginner)'].map((skill) => (
//                 <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 shadow-sm cursor-default transition-all duration-300 hover:text-yellow-300 hover:border-yellow-500/60 hover:bg-yellow-500/10 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(234,179,8,0.3)]">{skill}</span>
//               ))}
//             </div>
//           </motion.div>
          
//           {/* Specializations (Col span 2) */}
//           <motion.div variants={fadeInUp3D} className="md:col-span-2 bg-[#050505]/70 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-yellow-500/40 transition-all duration-500 flex flex-col h-full shadow-xl hover:shadow-[0_10px_30px_rgba(234,179,8,0.15)]">
//             <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
//               <Sparkles className="w-6 h-6 text-yellow-400 drop-shadow-md" />
//               <h3 className="text-xl font-bold text-white tracking-wide">Specializations</h3>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               {['LLM Fine-Tuning', 'System Architecture', 'Molecular ML', 'Web Scraping', 'Workflow Automation', 'AutoMotive Data Analytics', 'RAG (Retrieval-Augmented Generation)'].map((skill) => (
//                 <span key={skill} className="px-5 py-2.5 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-sm font-semibold text-yellow-100 shadow-md cursor-default transition-all duration-300 hover:text-white hover:border-yellow-400 hover:bg-yellow-500/30 hover:-translate-y-1 hover:shadow-[0_5px_25px_rgba(234,179,8,0.5)]">{skill}</span>
//               ))}
//             </div>
//           </motion.div>
          
//           {/* AI Ecosystem (Col span 2) */}
//           <motion.div variants={fadeInUp3D} className="md:col-span-2 bg-[#050505]/70 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-yellow-500/40 transition-all duration-500 flex flex-col h-full shadow-xl hover:shadow-[0_10px_30px_rgba(234,179,8,0.15)]">
//             <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
//               <Database className="w-6 h-6 text-yellow-400 drop-shadow-md" />
//               <h3 className="text-xl font-bold text-white tracking-wide">AI & Data Ecosystem</h3>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               {['DeepChem', 'TensorFlow', 'PyTorch', 'Hugging Face', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'OpenCV'].map((skill) => (
//                 <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 shadow-sm cursor-default transition-all duration-300 hover:text-yellow-300 hover:border-yellow-500/60 hover:bg-yellow-500/10 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(234,179,8,0.3)]">{skill}</span>
//               ))}
//             </div>
//           </motion.div>
          
//           {/* Tools */}
//           <motion.div variants={fadeInUp3D} className="bg-[#050505]/70 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-yellow-500/40 transition-all duration-500 flex flex-col h-full shadow-xl hover:shadow-[0_10px_30px_rgba(234,179,8,0.15)]">
//             <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
//               <Wrench className="w-6 h-6 text-yellow-400 drop-shadow-md" />
//               <h3 className="text-xl font-bold text-white tracking-wide">Tools & DevOps</h3>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               {['Git & GitHub', 'VS Code', 'Jupyter', 'Google Colab', 'Kaggle', 'LinkedIn', 'ORCID', 'Discord'].map((skill) => (
//                 <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 shadow-sm cursor-default transition-all duration-300 hover:text-yellow-300 hover:border-yellow-500/60 hover:bg-yellow-500/10 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(234,179,8,0.3)]">{skill}</span>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* =========================================
//           PHASE 4: EXPERIENCE & ACADEMIC TIMELINE 
//           ========================================= */}
//       <section id="journey" className="relative z-10 py-20 px-4 md:px-12 max-w-5xl mx-auto flex flex-col items-center">
//         <motion.h2 variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight flex items-center gap-4 text-center">
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//           Where I've Made Impact
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//         </motion.h2>
        
//         <div className="relative w-full border-l-2 md:border-l-0 md:border-t-0 md:absolute-center md:before:absolute md:before:inset-0 md:before:ml-auto md:before:mr-auto md:before:w-[2px] md:before:bg-gradient-to-b md:before:from-yellow-500 md:before:via-red-600 md:before:to-purple-900 border-yellow-500/30 pl-6 md:pl-0">
          
//           {/* Card 1 */}
//           <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "spring", duration: 0.8 }} viewport={{ once: true, margin: "-100px" }} className="relative mb-16 md:mb-24 md:w-1/2 md:pr-12 md:ml-0 group perspective-[1000px]">
//             <div className="absolute -left-[35px] md:-right-[11px] md:left-auto top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
//             <div className="bg-[#050505]/60 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(234,179,8,0.2)] hover:rotate-y-2">
//               <div className="flex items-center gap-3 mb-2">
//                 <Briefcase className="w-5 h-5 text-yellow-500" />
//                 <h3 className="text-2xl font-bold text-white">Data Strategy Consultant</h3>
//               </div>
//               <p className="text-yellow-400 font-medium mb-1">Al-Quresh Motors & Spare Parts</p>
//               <p className="text-xs text-gray-500 font-mono mb-4 border-b border-white/10 pb-4">JAN 2026 — PRESENT | Ground-Zero Analytics</p>
//               <ul className="space-y-2 text-gray-300 text-sm md:text-base leading-relaxed">
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 shrink-0 mt-1"/> Executing ground-level data collection to analyze customer psychology, product demand, and pricing elasticity.</li>
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 shrink-0 mt-1"/> Digitizing shop floor operations and mapping customer churn to predict seasonal product roadmaps for the business owner.</li>
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 shrink-0 mt-1"/> Bridging the gap between raw retail logic and Machine Learning to build a predictive, customer-satisfaction-focused sales system.</li>
//               </ul>
//             </div>
//           </motion.div>
          
//           {/* Card 2 */}
//           <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "spring", duration: 0.8 }} viewport={{ once: true, margin: "-100px" }} className="relative mb-16 md:mb-24 md:w-1/2 md:pl-12 md:ml-auto group perspective-[1000px]">
//             <div className="absolute -left-[35px] md:-left-[11px] top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
//             <div className="bg-[#050505]/60 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(168,85,247,0.2)] hover:-rotate-y-2">
//               <div className="flex items-center gap-3 mb-2">
//                 <Code2 className="w-5 h-5 text-purple-400" />
//                 <h3 className="text-2xl font-bold text-white">Core Open Source Contributor</h3>
//               </div>
//               <p className="text-purple-400 font-medium mb-1">DeepChem Ecosystem</p>
//               <p className="text-xs text-gray-500 font-mono mb-4 border-b border-white/10 pb-4">DEC 2025 — PRESENT | Global AI Community</p>
//               <ul className="space-y-2 text-gray-300 text-sm md:text-base leading-relaxed">
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-1"/> Integrating a lifelong passion for Chemistry with modern computing by teaching AI models complex molecular science.</li>
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-1"/> Submitting advanced Pull Requests (PRs) focused on model optimization and fine-tuning LLMs for chemical datasets.</li>
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-1"/> Actively contributing to architectures that transform computational chemistry into scalable machine learning solutions.</li>
//               </ul>
//             </div>
//           </motion.div>

//           {/* Card 3 */}
//           <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "spring", duration: 0.8 }} viewport={{ once: true, margin: "-100px" }} className="relative mb-16 md:mb-24 md:w-1/2 md:pr-12 md:ml-0 group perspective-[1000px]">
//             <div className="absolute -left-[35px] md:-right-[11px] md:left-auto top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
//             <div className="bg-[#050505]/60 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(59,130,246,0.2)] hover:rotate-y-2">
//               <div className="flex items-center gap-3 mb-2">
//                 <GraduationCap className="w-6 h-6 text-blue-400" />
//                 <h3 className="text-2xl font-bold text-white">Bachelor of Science in Data Science</h3>
//               </div>
//               <p className="text-blue-400 font-medium mb-1">Islamia University of Bahawalpur</p>
//               <p className="text-xs text-gray-500 font-mono mb-4 border-b border-white/10 pb-4">AUG 2023 — EXP. 2027 | 6th Semester | Grade: B</p>
//               <div className="text-gray-300 text-sm md:text-base leading-relaxed">
//                 <p className="mb-2 text-gray-400">Core Architecture & Logic Coursework:</p>
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {['Advanced ML', 'ANN & Deep Learning', 'Data Mining', 'Probability & Stats', 'Business Process Analysis', 'Data Warehouse & BI'].map((sub) => (
//                     <span key={sub} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-xs text-blue-200">{sub}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Card 4 */}
//           <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "spring", duration: 0.8 }} viewport={{ once: true, margin: "-100px" }} className="relative mb-16 md:mb-24 md:w-1/2 md:pl-12 md:ml-auto group perspective-[1000px]">
//             <div className="absolute -left-[35px] md:-left-[11px] top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-gray-400 shadow-[0_0_15px_rgba(156,163,175,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
//             <div className="bg-[#050505]/60 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:border-gray-400/50 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(255,255,255,0.1)] hover:-rotate-y-2">
//               <div className="flex items-center gap-3 mb-2">
//                 <GraduationCap className="w-5 h-5 text-gray-300" />
//                 <h3 className="text-xl font-bold text-white">Intermediate (FSc Pre-Engineering)</h3>
//               </div>
//               <p className="text-gray-300 font-medium mb-1">Punjab Group of Colleges, Bahawalpur</p>
//               <p className="text-xs text-gray-500 font-mono mb-2">2021 — 2023 | Grade: B</p>
//               <p className="text-gray-400 text-sm leading-relaxed">Developed a profound, life-long passion for Chemistry through exceptional mentorship, laying the analytical foundation for my future work in Molecular Machine Learning.</p>
//             </div>
//           </motion.div>

//           {/* Card 5 */}
//           <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "spring", duration: 0.8 }} viewport={{ once: true, margin: "-100px" }} className="relative md:w-1/2 md:pr-12 md:ml-0 group perspective-[1000px]">
//             <div className="absolute -left-[35px] md:-right-[11px] md:left-auto top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
//             <div className="bg-gradient-to-br from-[#050505] to-[#1a0505] backdrop-blur-md border border-red-500/30 p-6 md:p-8 rounded-2xl hover:border-red-500/70 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(239,68,68,0.3)] hover:rotate-y-2 relative overflow-hidden">
//               <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/20 blur-2xl rounded-full"></motion.div>
//               <div className="flex items-center gap-3 mb-2">
//                 <GraduationCap className="w-5 h-5 text-red-400" />
//                 <h3 className="text-xl font-bold text-white">Matriculation (Science)</h3>
//               </div>
//               <p className="text-red-400 font-medium mb-1">Government Technical High School, BWP</p>
//               <p className="text-xs text-gray-500 font-mono mb-3">GRADUATED 2021</p>
//               <div className="flex items-center gap-3 mb-2">
//                  <span className="px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 font-bold tracking-widest">1037 / 1100 Marks</span>
//               </div>
//               <p className="text-gray-300 text-sm leading-relaxed mt-3">Selected as part of the highly coveted <span className="text-white font-bold">Top 1% Elite Cohort</span> in one of the city's highest-ranking schools. A foundational era that cemented a track record of top-tier execution.</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* =========================================
//           PHASE 5: ELITE PROJECTS SHOWCASE
//           ========================================= */}
//       <section id="projects" className="relative z-10 py-20 px-4 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
//         <motion.h2 variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight flex items-center gap-4 text-center">
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//           Building Intelligence, One Model At A Time
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//         </motion.h2>
//         <motion.p variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-gray-400 text-lg mb-16 max-w-2xl text-center">
//           A curated selection of my production-grade systems, open-source contributions, and real-world ML engines.
//         </motion.p>

//         {/* Track 1 */}
//         <div className="w-full mb-16">
//           <motion.div variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-3 mb-8 border-b border-purple-500/30 pb-4">
//             <Beaker className="w-8 h-8 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
//             <h3 className="text-3xl font-bold text-white tracking-wide">Open Source & Molecular ML <span className="text-purple-400 text-xl font-medium">(DeepChem / GSoC)</span></h3>
//           </motion.div>
//           <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-[1200px]">
//             {deepchemProjects.map((project, index) => (
//               <motion.div key={index} variants={popIn3D} whileHover={{ y: -10, rotateX: 5, rotateY: -5, z: 20 }} className="bg-gradient-to-br from-[#0a0a0a] to-[#120518] backdrop-blur-xl border border-purple-500/20 p-6 rounded-2xl flex flex-col justify-between group shadow-lg hover:shadow-[0_20px_40px_rgba(168,85,247,0.3)] transition-shadow duration-300">
//                 <div>
//                   <div className="flex justify-between items-start mb-4">
//                     <FolderGit2 className="w-8 h-8 text-purple-500 group-hover:text-yellow-400 transition-colors" />
//                     <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-purple-500/20 transition-colors"><ExternalLink className="w-5 h-5 text-gray-300 hover:text-white" /></motion.a>
//                   </div>
//                   <h4 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-purple-300 transition-colors">{project.name}</h4>
//                   <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>
//                 </div>
//                 <div className="flex flex-wrap gap-2 mt-auto">
//                   {project.tags.map(tag => (
//                     <span key={tag} className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-md text-xs font-medium text-purple-200">{tag}</span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Track 2 */}
//         <div className="w-full">
//           <motion.div variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-3 mb-8 border-b border-blue-500/30 pb-4">
//             <Building2 className="w-8 h-8 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
//             <h3 className="text-3xl font-bold text-white tracking-wide">Enterprise & Industry Solutions</h3>
//           </motion.div>
//           <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-[1200px]">
//             {industryProjects.map((project, index) => (
//               <motion.div key={index} variants={popIn3D} whileHover={{ y: -10, rotateX: 5, rotateY: 5, z: 20 }} className="bg-gradient-to-br from-[#0a0a0a] to-[#050f1a] backdrop-blur-xl border border-blue-500/20 p-6 rounded-2xl flex flex-col justify-between group shadow-lg hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)] transition-shadow duration-300">
//                 <div>
//                   <div className="flex justify-between items-start mb-4">
//                     <FolderGit2 className="w-8 h-8 text-blue-500 group-hover:text-yellow-400 transition-colors" />
//                     <motion.a whileHover={{ scale: 1.2, rotate: -10 }} href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-blue-500/20 transition-colors"><ExternalLink className="w-5 h-5 text-gray-300 hover:text-white" /></motion.a>
//                   </div>
//                   <h4 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-300 transition-colors">{project.name}</h4>
//                   <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>
//                 </div>
//                 <div className="flex flex-wrap gap-2 mt-auto">
//                   {project.tags.map(tag => (
//                     <span key={tag} className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-md text-xs font-medium text-blue-200">{tag}</span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* =========================================
//           PHASE 6 & 7: LEADERSHIP & CREDENTIALS 
//           ========================================= */}
//       <section id="legacy" className="relative z-10 py-20 px-4 md:px-12 max-w-6xl mx-auto flex flex-col items-center perspective-[1200px]">
//         <motion.h2 variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight flex items-center gap-4 text-center">
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//           Leadership & Digital Footprint
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//         </motion.h2>

//         <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-20">
//           <motion.div variants={popIn3D} whileHover={{ scale: 1.02, rotateY: 5, z: 20 }} className="bg-[#050505]/60 backdrop-blur-xl border border-yellow-500/20 p-8 rounded-3xl hover:border-yellow-500/50 shadow-lg hover:shadow-[0_20px_40px_rgba(234,179,8,0.2)] flex flex-col items-center text-center group">
//             <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Users className="w-10 h-10 text-blue-400" /></div>
//             <h3 className="text-2xl font-bold text-white mb-3">Global Tech Community Leader</h3>
//             <p className="text-gray-300 leading-relaxed">Cultivating an active and engaged network of <span className="text-yellow-400 font-bold">2,000+ industry professionals</span> on LinkedIn. Consistently sharing high-value insights on LLM fine-tuning, Python development, and real-world Data Science strategies.</p>
//           </motion.div>

//           <motion.div variants={popIn3D} whileHover={{ scale: 1.02, rotateY: -5, z: 20 }} className="bg-[#050505]/60 backdrop-blur-xl border border-yellow-500/20 p-8 rounded-3xl hover:border-yellow-500/50 shadow-lg hover:shadow-[0_20px_40px_rgba(234,179,8,0.2)] flex flex-col items-center text-center group">
//             <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Globe className="w-10 h-10 text-purple-400" /></div>
//             <h3 className="text-2xl font-bold text-white mb-3">Open Source Advocate</h3>
//             <p className="text-gray-300 leading-relaxed">Dedicated to the democratization of deep learning through active contributions to <span className="text-yellow-400 font-bold">DeepChem</span>. Building public-beneficial systems and driving the adoption of molecular machine learning in global scientific communities.</p>
//           </motion.div>
//         </motion.div>

//         <div className="w-full">
//           <motion.div variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
//             <Award className="w-8 h-8 text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
//             <h3 className="text-3xl font-bold text-white tracking-wide">Certificates & Continuous Learning</h3>
//           </motion.div>
//           <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-4">
//             {certifications.map((cert, index) => (
//               <motion.div key={index} variants={fadeInUp3D} whileHover={{ scale: 1.01, x: 10, backgroundColor: "rgba(255,255,255,0.05)" }} className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#0a0a0a]/50 backdrop-blur-md border border-white/5 p-6 rounded-2xl transition-all">
//                 <div className="flex items-start gap-4 mb-4 md:mb-0">
//                   <div className="mt-1">{cert.icon}</div>
//                   <div>
//                     <h4 className="text-lg font-bold text-white mb-1">{cert.title}</h4>
//                     <p className="text-sm text-gray-400">Issuer: <span className="text-yellow-500/80">{cert.issuer}</span></p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col md:items-end text-left md:text-right">
//                   <span className="px-3 py-1 bg-white/5 rounded-md text-xs font-mono text-gray-300 mb-2 border border-white/10">ID: {cert.id}</span>
//                   <span className="text-sm text-gray-500 font-medium">{cert.status} • {cert.date}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* =========================================
//           PHASE 8: THE EPIC "TABHAI" FOOTER (4D ANIMATED)
//           ========================================= */}
//       <footer id="contact" className="relative z-10 pt-32 pb-10 px-4 mt-10 border-t border-white/5 bg-gradient-to-t from-[#050505] via-[#1a0505] to-transparent text-center overflow-hidden">
        
//         {/* CSS FOR SCANLINE AND SHIMMER */}
//         <style dangerouslySetInnerHTML={{__html: `
//           @keyframes scanline { 0% { transform: translateX(-100%); } 100% { transform: translateX(100vw); } }
//           .animate-scan { animation: scanline 4s ease-in-out infinite; }
//           @keyframes text-shimmer { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
//           .animate-text-shimmer { background-size: 200% auto; animation: text-shimmer 4s linear infinite; }
//         `}} />

//         {/* Moving Laser Line on Top Border */}
//         <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden">
//           <div className="w-[300px] h-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-scan shadow-[0_0_30px_rgba(234,179,8,1)]"></div>
//         </div>

//         {/* Breathing Background Glow (Pulse Effect) */}
//         <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-yellow-600/10 blur-[120px] rounded-t-full pointer-events-none" />

//         <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 1.2 }} viewport={{ once: true }} className="relative max-w-5xl mx-auto flex flex-col items-center">
          
//           <motion.div animate={{ rotateY: [0, 360] }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }}>
//             <Trophy className="w-16 h-16 text-yellow-500 mb-6 drop-shadow-[0_0_30px_rgba(234,179,8,1)]" />
//           </motion.div>
          
//           <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-400 to-white animate-text-shimmer tracking-tighter uppercase">
//             The Future Isn't Predicted.<br/>It's Engineered.
//           </h2>
          
//           <p className="text-gray-300 text-xl mb-12 max-w-3xl font-light">
//             Whether it's optimizing LLMs for complex chemistry, building predictive AVMs for real estate, or engineering data pipelines for retail—I don't just write code. <span className="font-bold text-white">I architect solutions that serve humanity.</span> Let's build the extraordinary.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-6 mb-24">
//             <motion.a whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(234,179,8,0.5)" }} whileTap={{ scale: 0.95 }} href="mailto:sameersain361@gmail.com" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-12 py-5 rounded-full font-extrabold text-lg tracking-widest uppercase flex items-center justify-center gap-3">
//               <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><Send className="w-6 h-6" /></motion.div> Initialize Contact
//             </motion.a>
//             <motion.a whileHover={{ scale: 1.05, backgroundColor: "rgba(234,179,8,0.1)", borderColor: "#eab308" }} whileTap={{ scale: 0.95 }} href="tel:+923047637545" className="px-12 py-5 rounded-full border-2 border-yellow-500/50 text-yellow-500 font-bold text-lg tracking-widest uppercase">
//               +92 304 7637545
//             </motion.a>
//           </div>

//           <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//             <div className="text-gray-500 text-sm font-mono font-semibold tracking-wider flex items-center gap-2">
//               <Code2 className="w-4 h-4" /> DESIGNED & ENGINEERED BY <span className="text-yellow-500">SAMEER NADEEM</span>
//             </div>
//             <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="text-gray-600 text-xs font-mono">
//               SYSTEM ONLINE // STATUS: OPTIMIZED // © {new Date().getFullYear()}
//             </motion.div>
//           </div>

//         </motion.div>
//       </footer>

//     </main>
//   );
// }




// "use client";

// import { 
//   Github, Linkedin, Mail, BrainCircuit, Code2, Phone, Rocket, 
//   GitCommitHorizontal, Cpu, Users, TerminalSquare, Database, Wrench, 
//   Sparkles, Briefcase, GraduationCap, ChevronRight, FolderGit2, 
//   ExternalLink, Beaker, Building2, Send, Award, Trophy, Globe, 
//   CheckCircle2, Clock 
// } from "lucide-react";
// import { motion, Variants } from "framer-motion";

// // =========================================
// // DATA ARRAYS & VARIANTS (MOVED OUTSIDE TO FIX ERROR)
// // =========================================

// const deepchemProjects = [
//   { name: "Mistral7B-ClinTox-Study", link: "https://github.com/Abu-Sameer-66/Mistral7B-ClinTox-Study", desc: "LLM Fine-tuning study on the ClinTox dataset for clinical toxicity prediction.", tags: ["Mistral-7B", "LoRA", "DeepChem"] },
//   { name: "Mistral7B-Tox21-Molecular", link: "https://github.com/Abu-Sameer-66/Mistral7B-Tox21-Molecular-Optimization", desc: "Native fine-tuning of Mistral-7B on Tox21 dataset using 4-bit quantization.", tags: ["Quantization", "Tox21", "LLM"] },
//   { name: "Mistral7B-BACE-Generalization", link: "https://github.com/Abu-Sameer-66/Mistral7B-BACE-Generalization-Study", desc: "Optimizing Mistral-7B for BACE-1 inhibitor prediction using scaffold-split data.", tags: ["Drug Discovery", "Scaffold-Split"] },
//   { name: "Mistral7B-BBBP-Reasoning", link: "https://github.com/Abu-Sameer-66/Mistral7B-BBBP-Molecular-Reasoning", desc: "Molecular property prediction on BBBP using property-aware prompting.", tags: ["Cheminformatics", "DeepChem"] },
//   { name: "ChemLLM-Tox-OLMo", link: "https://github.com/Abu-Sameer-66/ChemLLM-Tox-OLMo", desc: "Fine-tuning OLMo-7B with QLoRA for Molecular Toxicity Prediction.", tags: ["OLMo-7B", "QLoRA", "Generative AI"] }
// ];

// const industryProjects = [
//   { name: "Retail-Sales-Performance", link: "https://github.com/Abu-Sameer-66/Retail-Sales-Performance-Analysis", desc: "BI analysis to identify profit leakages and optimize regional sales strategies.", tags: ["Data Analysis", "BI", "Seaborn"] },
//   { name: "CogniPath-Analytics-Engine", link: "https://github.com/Abu-Sameer-66/CogniPath-Analytics-Engine", desc: "AI-driven EdTech engine optimizing academic outcomes via predictive modeling.", tags: ["Predictive Analysis", "Scikit-Learn"] },
//   { name: "PropVal-AI-Real-Estate", link: "https://github.com/Abu-Sameer-66/PropVal-Property-Valuation--AI-Real-Estate-Engine", desc: "Production-grade AVM utilizing Gradient Boosting to estimate real estate asset values.", tags: ["PropTech", "Machine Learning"] },
//   { name: "SpamGuard-AI-Threat-Detection", link: "https://github.com/Abu-Sameer-66/SpamGuard-AI-Threat-Detection", desc: "Enterprise-grade SMS Phishing & Spam Detection System utilizing NLP.", tags: ["NLP", "Text Classification"] },
//   { name: "AI-Voice-Assistant", link: "https://github.com/Abu-Sameer-66/AI-Voice-Assistant-Python", desc: "A modular voice assistant utilizing Python automation and speech recognition.", tags: ["Python", "Automation", "AI"] }
// ];

// const certifications = [
//   { 
//     title: "The Ultimate Job Ready Data Science Course", 
//     issuer: "CodeWithHarry", 
//     date: "Feb 2026", 
//     id: "CWH-THE-ULTIMATE-JOB-READY-DATA-SCIENCE-COURSE-BMXY6IIK", 
//     status: "Completed",
//     icon: <CheckCircle2 className="w-5 h-5 text-green-400" />
//   },
//   { 
//     title: "Python Development Masterclass (11-Hour Intensive)", 
//     issuer: "CodeWithHarry / Self-Taught", 
//     date: "Completed", 
//     id: "Independent Portfolio Validation", 
//     status: "Completed",
//     icon: <CheckCircle2 className="w-5 h-5 text-green-400" />
//   },
//   { 
//     title: "Full-Stack Web Development & Prompt Engineering", 
//     issuer: "Ongoing Specialized Training", 
//     date: "Present", 
//     id: "Skill Expansion Phase", 
//     status: "In Progress",
//     icon: <Clock className="w-5 h-5 text-yellow-400 animate-pulse" />
//   }
// ];

// // PROPERLY TYPED VARIANTS TO FIX THE ERROR
// const fadeInUp3D: Variants = {
//   hidden: { opacity: 0, y: 60, rotateX: -15, scale: 0.95 },
//   visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 } }
// };

// const staggerContainer: Variants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
// };

// const popIn3D: Variants = {
//   hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
//   visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { type: "spring", stiffness: 120, damping: 15 } }
// };

// // =========================================
// // MAIN COMPONENT
// // =========================================

// export default function Home() {
//   return (
//     <main className="min-h-screen fluid-mesh-bg text-white overflow-x-hidden relative font-sans selection:bg-yellow-500/30 perspective-[1000px]">
      
//       {/* 4D FLOATING ORBS (Background Environment) */}
//       <motion.div animate={{ y: [0, -50, 0], x: [0, 30, 0] }} transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }} className="absolute top-1/4 left-10 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
//       <motion.div animate={{ y: [0, 50, 0], x: [0, -40, 0] }} transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }} className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-yellow-700/10 rounded-full blur-[150px] pointer-events-none" />

//       {/* NAVBAR */}
//       <motion.nav 
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ type: "spring", stiffness: 100, damping: 20 }}
//         className="fixed w-full z-50 bg-[#050505]/60 backdrop-blur-xl border-b border-yellow-500/20 py-4 px-6 md:px-12 flex justify-between items-center shadow-lg"
//       >
//         <div className="font-bold text-xl tracking-wide text-white flex items-center gap-1">
//           <span className="text-yellow-500 font-mono">&lt;</span>
//           Sameer Nadeem
//           <span className="text-yellow-500 font-mono">/&gt;</span>
//         </div>
//         <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-300 tracking-wide uppercase">
//           <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
//           <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
//           <a href="#arsenal" className="hover:text-yellow-400 transition-colors">Arsenal</a>
//           <a href="#journey" className="hover:text-yellow-400 transition-colors">Journey</a>
//           <a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a>
//           <a href="#legacy" className="hover:text-yellow-400 transition-colors">Legacy</a>
//         </div>
//       </motion.nav>

//       {/* PHASE 1: HERO SECTION */}
//       <section id="home" className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-24 px-4 text-center transform-style-3d">
        
//         {/* Floating Profile Image */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
//           animate={{ opacity: 1, scale: 1, rotateY: 0 }}
//           transition={{ type: "spring", stiffness: 60, damping: 20, duration: 1.5 }}
//           className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-tr from-yellow-500 via-red-600 to-[#050505] mb-8 shadow-[0_0_50px_rgba(234,179,8,0.4)] group"
//         >
//           <motion.div 
//             animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.8, 0.6] }} 
//             transition={{ repeat: Infinity, duration: 3 }}
//             className="absolute inset-0 bg-gradient-to-tr from-yellow-500 via-red-600 to-teal-900 rounded-full opacity-60 blur-lg"
//           />
//           <div className="relative w-full h-full bg-[#0a0a0a] rounded-full border-[3px] border-[#050505] flex items-center justify-center overflow-hidden z-10">
//              <img src="/profile.png" alt="Sameer Nadeem" className="w-full h-full object-cover" onError={(e) => { const target = e.currentTarget; if (target.src.includes('.png')) { target.src = "/profile.jpg"; } else { target.src = "https://ui-avatars.com/api/?name=Sameer+Nadeem&background=0D0D0D&color=EAB308&size=256&bold=true"; } }} />
//           </div>
//         </motion.div>

//         <motion.h1 
//           initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-5xl md:text-7xl font-extrabold mb-4 text-white tracking-tighter drop-shadow-2xl"
//         >
//           Sameer Nadeem
//         </motion.h1>
        
//         <motion.p 
//           initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
//           className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 text-xl md:text-2xl font-bold mb-6 tracking-wide"
//         >
//           AI-ML Engineer | Data Scientist | LLM Optimization & Fine-Tuning
//         </motion.p>

//         <motion.div 
//           initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7, type: "spring" }}
//           className="flex flex-wrap justify-center gap-4 mb-10"
//         >
//           <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-red-500/40 text-sm font-mono text-gray-200 shadow-[0_0_15px_rgba(153,27,27,0.3)] hover:border-red-400 transition-colors">
//             <Code2 size={16} className="text-red-400"/> Python & SQL Developer
//           </span>
//           <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-purple-500/40 text-sm font-mono text-gray-200 shadow-[0_0_15px_rgba(107,33,168,0.3)] hover:border-purple-400 transition-colors">
//             <BrainCircuit size={16} className="text-purple-400"/>Open Source & DeepChem Contributor
//           </span>
//         </motion.div>

//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
//           className="text-2xl md:text-4xl font-semibold max-w-4xl leading-snug mb-12 text-gray-300 drop-shadow-lg"
//         >
//           Building Systems & Architecture. <br className="hidden md:block"/>
//           Transforming <span className="text-white font-bold underline decoration-yellow-500 decoration-4 underline-offset-8">AutoMotive Retail</span> with Data & ML.
//         </motion.h2>

//         <motion.div 
//           initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, type: "spring" }}
//           className="flex flex-col items-center gap-8"
//         >
//           <motion.a 
//             whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(234,179,8,0.6)" }} whileTap={{ scale: 0.95 }}
//             href="#projects" 
//             className="elite-golden-button text-[#3d2b00] px-12 py-4 rounded-full font-extrabold text-lg tracking-wider uppercase flex items-center gap-3"
//           >
//             Explore My Work <ChevronRight className="w-6 h-6" />
//           </motion.a>
          
//           <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-wrap justify-center gap-5 mt-2">
//             {[
//               { icon: <Linkedin size={24} />, link: "https://www.linkedin.com/in/sameer-nadeem-66339a357/", title: "LinkedIn" },
//               { icon: <Github size={24} />, link: "https://github.com/Abu-Sameer-66", title: "GitHub" },
//               { icon: <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-[24px] h-[24px]"><path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.34-.246.526-.246h3.255c.234 0 .304.141.211.422L12.35 14.54l6.475 9.319z"/></svg>, link: "https://www.kaggle.com/sameernadeem66", title: "Kaggle" },
//               { icon: <Mail size={24} />, link: "mailto:sameersain361@gmail.com", title: "Email" },
//               { icon: <Phone size={24} />, link: "tel:+923047637545", title: "Call" }
//             ].map((social, i) => (
//               <motion.a 
//                 key={i} variants={popIn3D} whileHover={{ scale: 1.2, rotateZ: 5, y: -5 }}
//                 href={social.link} target="_blank" rel="noreferrer" title={social.title} 
//                 className="p-4 rounded-full bg-black/60 backdrop-blur-md border border-yellow-500/50 text-yellow-500 hover:text-white hover:bg-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.2)] flex items-center justify-center"
//               >
//                 {social.icon}
//               </motion.a>
//             ))}
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* =========================================
//           PHASE 2: WHO AM I ?
//           ========================================= */}
//       <section id="about" className="relative z-10 py-20 px-4 md:px-12 max-w-6xl mx-auto flex flex-col items-center perspective-[1200px]">
//         <motion.h2 variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-4xl md:text-5xl font-bold mb-12 text-white tracking-tight flex items-center gap-4">
//           <span className="w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//           Who Am I ?
//           <span className="w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//         </motion.h2>

//         <motion.div 
//           variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }}
//           className="bg-[#050505]/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl mb-16 hover:border-yellow-500/30 transition-colors duration-500"
//         >
//           <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light text-justify md:text-center">
//             Hi, I'm <span className="text-yellow-400 font-semibold">Sameer Nadeem</span>. I believe true AI isn't just trained on static datasets; it's engineered from the ground up to solve real human problems. Beyond my academic foundation as a Data Science student at the <span className="text-white font-medium">Islamia University of Bahawalpur</span>, I am actively bridging the gap between raw data and real-world impact.
//             <br/><br/>
//             Currently, I am conducting hands-on data engineering at an <span className="text-yellow-400 font-semibold">Automotive Retail</span> business—analyzing pricing elasticity, inventory dynamics, and customer feedback loops to build ML systems that optimize daily operations. Whether it's contributing to DeepChem's open-source ecosystem, engineering scalable LLM pipelines, or extracting insights straight from the shop floor, my mission is singular: <span className="text-white font-medium">to architect intelligent systems that serve humanity and make life easier.</span>
//           </p>
//         </motion.div>

//         <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
//           {[
//             { icon: <Rocket className="w-10 h-10 text-yellow-500 mb-4" />, val: "10+", title: "AI-ML Projects", sub: "Built & Deployed" },
//             { icon: <GitCommitHorizontal className="w-10 h-10 text-yellow-500 mb-4" />, val: "600+", title: "GitHub Commits", sub: "Active Developer" },
//             { icon: <Cpu className="w-10 h-10 text-yellow-500 mb-4" />, val: "LLMs", title: "Fine-Tuning", sub: "Optimization Expert" },
//             { icon: <Users className="w-10 h-10 text-yellow-500 mb-4" />, val: "2,000+", title: "Network", sub: "Tech Community" }
//           ].map((metric, i) => (
//             <motion.div 
//               key={i} variants={popIn3D} whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5, z: 20 }}
//               className="flex flex-col items-center justify-center p-8 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-2xl group hover:border-yellow-500/50 hover:shadow-[0_20px_40px_rgba(234,179,8,0.2)] transform-style-3d"
//             >
//               <div className="group-hover:scale-110 transition-transform duration-300">{metric.icon}</div>
//               <h3 className="text-4xl font-extrabold text-white mb-2">{metric.val}</h3>
//               <p className="text-sm text-yellow-500 uppercase tracking-widest font-bold mb-1">{metric.title}</p>
//               <p className="text-xs text-gray-400 text-center font-medium">{metric.sub}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* =========================================
//           PHASE 3: TECHNICAL ARSENAL
//           ========================================= */}
//       <section id="arsenal" className="relative z-10 py-20 px-4 md:px-12 max-w-6xl mx-auto flex flex-col items-center perspective-[1500px]">
//         <motion.h2 variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight flex items-center gap-4">
//           <span className="w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//           Technical Arsenal
//           <span className="w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//         </motion.h2>
        
//         <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          
//           <motion.div variants={fadeInUp3D} className="bg-[#050505]/70 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-yellow-500/40 transition-all duration-500 flex flex-col h-full shadow-xl hover:shadow-[0_10px_30px_rgba(234,179,8,0.15)]">
//             <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
//               <TerminalSquare className="w-6 h-6 text-yellow-400 drop-shadow-md" />
//               <h3 className="text-xl font-bold text-white tracking-wide">Languages & DB</h3>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               {['Python', 'SQL', 'C++ (Beginner)', 'JavaScript (Beginner)'].map((skill) => (
//                 <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 shadow-sm cursor-default transition-all duration-300 hover:text-yellow-300 hover:border-yellow-500/60 hover:bg-yellow-500/10 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(234,179,8,0.3)]">{skill}</span>
//               ))}
//             </div>
//           </motion.div>
          
//           <motion.div variants={fadeInUp3D} className="md:col-span-2 bg-[#050505]/70 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-yellow-500/40 transition-all duration-500 flex flex-col h-full shadow-xl hover:shadow-[0_10px_30px_rgba(234,179,8,0.15)]">
//             <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
//               <Sparkles className="w-6 h-6 text-yellow-400 drop-shadow-md" />
//               <h3 className="text-xl font-bold text-white tracking-wide">Specializations</h3>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               {['LLM Fine-Tuning', 'System Architecture', 'Molecular ML', 'Web Scraping', 'Workflow Automation', 'AutoMotive Data Analytics', 'RAG (Retrieval-Augmented Generation)'].map((skill) => (
//                 <span key={skill} className="px-5 py-2.5 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-sm font-semibold text-yellow-100 shadow-md cursor-default transition-all duration-300 hover:text-white hover:border-yellow-400 hover:bg-yellow-500/30 hover:-translate-y-1 hover:shadow-[0_5px_25px_rgba(234,179,8,0.5)]">{skill}</span>
//               ))}
//             </div>
//           </motion.div>
          
//           <motion.div variants={fadeInUp3D} className="md:col-span-2 bg-[#050505]/70 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-yellow-500/40 transition-all duration-500 flex flex-col h-full shadow-xl hover:shadow-[0_10px_30px_rgba(234,179,8,0.15)]">
//             <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
//               <Database className="w-6 h-6 text-yellow-400 drop-shadow-md" />
//               <h3 className="text-xl font-bold text-white tracking-wide">AI & Data Ecosystem</h3>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               {['DeepChem', 'TensorFlow', 'PyTorch', 'Hugging Face', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'OpenCV'].map((skill) => (
//                 <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 shadow-sm cursor-default transition-all duration-300 hover:text-yellow-300 hover:border-yellow-500/60 hover:bg-yellow-500/10 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(234,179,8,0.3)]">{skill}</span>
//               ))}
//             </div>
//           </motion.div>
          
//           <motion.div variants={fadeInUp3D} className="bg-[#050505]/70 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-yellow-500/40 transition-all duration-500 flex flex-col h-full shadow-xl hover:shadow-[0_10px_30px_rgba(234,179,8,0.15)]">
//             <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
//               <Wrench className="w-6 h-6 text-yellow-400 drop-shadow-md" />
//               <h3 className="text-xl font-bold text-white tracking-wide">Tools & DevOps</h3>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               {['Git & GitHub', 'VS Code', 'Jupyter', 'Google Colab', 'Kaggle', 'LinkedIn', 'ORCID', 'Discord'].map((skill) => (
//                 <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 shadow-sm cursor-default transition-all duration-300 hover:text-yellow-300 hover:border-yellow-500/60 hover:bg-yellow-500/10 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(234,179,8,0.3)]">{skill}</span>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* =========================================
//           PHASE 4: EXPERIENCE & ACADEMIC TIMELINE 
//           ========================================= */}
//       <section id="journey" className="relative z-10 py-20 px-4 md:px-12 max-w-5xl mx-auto flex flex-col items-center">
//         <motion.h2 variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight flex items-center gap-4 text-center">
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//           Where I've Made Impact
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//         </motion.h2>
        
//         <div className="relative w-full border-l-2 md:border-l-0 md:border-t-0 md:absolute-center md:before:absolute md:before:inset-0 md:before:ml-auto md:before:mr-auto md:before:w-[2px] md:before:bg-gradient-to-b md:before:from-yellow-500 md:before:via-red-600 md:before:to-purple-900 border-yellow-500/30 pl-6 md:pl-0">
          
//           <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "spring", duration: 0.8 }} viewport={{ once: true, margin: "-100px" }} className="relative mb-16 md:mb-24 md:w-1/2 md:pr-12 md:ml-0 group perspective-[1000px]">
//             <div className="absolute -left-[35px] md:-right-[11px] md:left-auto top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
//             <div className="bg-[#050505]/60 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(234,179,8,0.2)] hover:rotate-y-2">
//               <div className="flex items-center gap-3 mb-2">
//                 <Briefcase className="w-5 h-5 text-yellow-500" />
//                 <h3 className="text-2xl font-bold text-white">Data Strategy Consultant</h3>
//               </div>
//               <p className="text-yellow-400 font-medium mb-1">Al-Quresh Motors & Spare Parts</p>
//               <p className="text-xs text-gray-500 font-mono mb-4 border-b border-white/10 pb-4">JAN 2026 — PRESENT | Ground-Zero Analytics</p>
//               <ul className="space-y-2 text-gray-300 text-sm md:text-base leading-relaxed">
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 shrink-0 mt-1"/> Executing ground-level data collection to analyze customer psychology, product demand, and pricing elasticity.</li>
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 shrink-0 mt-1"/> Digitizing shop floor operations and mapping customer churn to predict seasonal product roadmaps for the business owner.</li>
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 shrink-0 mt-1"/> Bridging the gap between raw retail logic and Machine Learning to build a predictive, customer-satisfaction-focused sales system.</li>
//               </ul>
//             </div>
//           </motion.div>
          
//           <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "spring", duration: 0.8 }} viewport={{ once: true, margin: "-100px" }} className="relative mb-16 md:mb-24 md:w-1/2 md:pl-12 md:ml-auto group perspective-[1000px]">
//             <div className="absolute -left-[35px] md:-left-[11px] top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
//             <div className="bg-[#050505]/60 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(168,85,247,0.2)] hover:-rotate-y-2">
//               <div className="flex items-center gap-3 mb-2">
//                 <Code2 className="w-5 h-5 text-purple-400" />
//                 <h3 className="text-2xl font-bold text-white">Core Open Source Contributor</h3>
//               </div>
//               <p className="text-purple-400 font-medium mb-1">DeepChem Ecosystem</p>
//               <p className="text-xs text-gray-500 font-mono mb-4 border-b border-white/10 pb-4">DEC 2025 — PRESENT | Global AI Community</p>
//               <ul className="space-y-2 text-gray-300 text-sm md:text-base leading-relaxed">
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-1"/> Integrating a lifelong passion for Chemistry with modern computing by teaching AI models complex molecular science.</li>
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-1"/> Submitting advanced Pull Requests (PRs) focused on model optimization and fine-tuning LLMs for chemical datasets.</li>
//                 <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-1"/> Actively contributing to architectures that transform computational chemistry into scalable machine learning solutions.</li>
//               </ul>
//             </div>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "spring", duration: 0.8 }} viewport={{ once: true, margin: "-100px" }} className="relative mb-16 md:mb-24 md:w-1/2 md:pr-12 md:ml-0 group perspective-[1000px]">
//             <div className="absolute -left-[35px] md:-right-[11px] md:left-auto top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
//             <div className="bg-[#050505]/60 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(59,130,246,0.2)] hover:rotate-y-2">
//               <div className="flex items-center gap-3 mb-2">
//                 <GraduationCap className="w-6 h-6 text-blue-400" />
//                 <h3 className="text-2xl font-bold text-white">Bachelor of Science in Data Science</h3>
//               </div>
//               <p className="text-blue-400 font-medium mb-1">Islamia University of Bahawalpur</p>
//               <p className="text-xs text-gray-500 font-mono mb-4 border-b border-white/10 pb-4">AUG 2023 — EXP. 2027 | 6th Semester | Grade: B</p>
//               <div className="text-gray-300 text-sm md:text-base leading-relaxed">
//                 <p className="mb-2 text-gray-400">Core Architecture & Logic Coursework:</p>
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {['Advanced ML', 'ANN & Deep Learning', 'Data Mining', 'Probability & Stats', 'Business Process Analysis', 'Data Warehouse & BI'].map((sub) => (
//                     <span key={sub} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-xs text-blue-200">{sub}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "spring", duration: 0.8 }} viewport={{ once: true, margin: "-100px" }} className="relative mb-16 md:mb-24 md:w-1/2 md:pl-12 md:ml-auto group perspective-[1000px]">
//             <div className="absolute -left-[35px] md:-left-[11px] top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-gray-400 shadow-[0_0_15px_rgba(156,163,175,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
//             <div className="bg-[#050505]/60 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:border-gray-400/50 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(255,255,255,0.1)] hover:-rotate-y-2">
//               <div className="flex items-center gap-3 mb-2">
//                 <GraduationCap className="w-5 h-5 text-gray-300" />
//                 <h3 className="text-xl font-bold text-white">Intermediate (FSc Pre-Engineering)</h3>
//               </div>
//               <p className="text-gray-300 font-medium mb-1">Punjab Group of Colleges, Bahawalpur</p>
//               <p className="text-xs text-gray-500 font-mono mb-2">2021 — 2023 | Grade: B</p>
//               <p className="text-gray-400 text-sm leading-relaxed">Developed a profound, life-long passion for Chemistry through exceptional mentorship, laying the analytical foundation for my future work in Molecular Machine Learning.</p>
//             </div>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "spring", duration: 0.8 }} viewport={{ once: true, margin: "-100px" }} className="relative md:w-1/2 md:pr-12 md:ml-0 group perspective-[1000px]">
//             <div className="absolute -left-[35px] md:-right-[11px] md:left-auto top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
//             <div className="bg-gradient-to-br from-[#050505] to-[#1a0505] backdrop-blur-md border border-red-500/30 p-6 md:p-8 rounded-2xl hover:border-red-500/70 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(239,68,68,0.3)] hover:rotate-y-2 relative overflow-hidden">
//               <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/20 blur-2xl rounded-full"></motion.div>
//               <div className="flex items-center gap-3 mb-2">
//                 <GraduationCap className="w-5 h-5 text-red-400" />
//                 <h3 className="text-xl font-bold text-white">Matriculation (Science)</h3>
//               </div>
//               <p className="text-red-400 font-medium mb-1">Government Technical High School, BWP</p>
//               <p className="text-xs text-gray-500 font-mono mb-3">GRADUATED 2021</p>
//               <div className="flex items-center gap-3 mb-2">
//                  <span className="px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 font-bold tracking-widest">1037 / 1100 Marks</span>
//               </div>
//               <p className="text-gray-300 text-sm leading-relaxed mt-3">Selected as part of the highly coveted <span className="text-white font-bold">Top 1% Elite Cohort</span> in one of the city's highest-ranking schools. A foundational era that cemented a track record of top-tier execution.</p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* =========================================
//           PHASE 5: ELITE PROJECTS SHOWCASE
//           ========================================= */}
//       <section id="projects" className="relative z-10 py-20 px-4 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
//         <motion.h2 variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight flex items-center gap-4 text-center">
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//           Building Intelligence, One Model At A Time
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//         </motion.h2>
//         <motion.p variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-gray-400 text-lg mb-16 max-w-2xl text-center">
//           A curated selection of my production-grade systems, open-source contributions, and real-world ML engines.
//         </motion.p>

//         <div className="w-full mb-16">
//           <motion.div variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-3 mb-8 border-b border-purple-500/30 pb-4">
//             <Beaker className="w-8 h-8 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
//             <h3 className="text-3xl font-bold text-white tracking-wide">Open Source & Molecular ML <span className="text-purple-400 text-xl font-medium">(DeepChem / GSoC)</span></h3>
//           </motion.div>
//           <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-[1200px]">
//             {deepchemProjects.map((project, index) => (
//               <motion.div key={index} variants={popIn3D} whileHover={{ y: -10, rotateX: 5, rotateY: -5, z: 20 }} className="bg-gradient-to-br from-[#0a0a0a] to-[#120518] backdrop-blur-xl border border-purple-500/20 p-6 rounded-2xl flex flex-col justify-between group shadow-lg hover:shadow-[0_20px_40px_rgba(168,85,247,0.3)] transition-shadow duration-300">
//                 <div>
//                   <div className="flex justify-between items-start mb-4">
//                     <FolderGit2 className="w-8 h-8 text-purple-500 group-hover:text-yellow-400 transition-colors" />
//                     <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-purple-500/20 transition-colors"><ExternalLink className="w-5 h-5 text-gray-300 hover:text-white" /></motion.a>
//                   </div>
//                   <h4 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-purple-300 transition-colors">{project.name}</h4>
//                   <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>
//                 </div>
//                 <div className="flex flex-wrap gap-2 mt-auto">
//                   {project.tags.map(tag => (
//                     <span key={tag} className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-md text-xs font-medium text-purple-200">{tag}</span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         <div className="w-full">
//           <motion.div variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-3 mb-8 border-b border-blue-500/30 pb-4">
//             <Building2 className="w-8 h-8 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
//             <h3 className="text-3xl font-bold text-white tracking-wide">Enterprise & Industry Solutions</h3>
//           </motion.div>
//           <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-[1200px]">
//             {industryProjects.map((project, index) => (
//               <motion.div key={index} variants={popIn3D} whileHover={{ y: -10, rotateX: 5, rotateY: 5, z: 20 }} className="bg-gradient-to-br from-[#0a0a0a] to-[#050f1a] backdrop-blur-xl border border-blue-500/20 p-6 rounded-2xl flex flex-col justify-between group shadow-lg hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)] transition-shadow duration-300">
//                 <div>
//                   <div className="flex justify-between items-start mb-4">
//                     <FolderGit2 className="w-8 h-8 text-blue-500 group-hover:text-yellow-400 transition-colors" />
//                     <motion.a whileHover={{ scale: 1.2, rotate: -10 }} href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-blue-500/20 transition-colors"><ExternalLink className="w-5 h-5 text-gray-300 hover:text-white" /></motion.a>
//                   </div>
//                   <h4 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-300 transition-colors">{project.name}</h4>
//                   <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>
//                 </div>
//                 <div className="flex flex-wrap gap-2 mt-auto">
//                   {project.tags.map(tag => (
//                     <span key={tag} className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-md text-xs font-medium text-blue-200">{tag}</span>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* =========================================
//           PHASE 6 & 7: LEADERSHIP & CREDENTIALS 
//           ========================================= */}
//       <section id="legacy" className="relative z-10 py-20 px-4 md:px-12 max-w-6xl mx-auto flex flex-col items-center perspective-[1200px]">
//         <motion.h2 variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight flex items-center gap-4 text-center">
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//           Leadership & Digital Footprint
//           <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
//         </motion.h2>

//         <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-20">
//           <motion.div variants={popIn3D} whileHover={{ scale: 1.02, rotateY: 5, z: 20 }} className="bg-[#050505]/60 backdrop-blur-xl border border-yellow-500/20 p-8 rounded-3xl hover:border-yellow-500/50 shadow-lg hover:shadow-[0_20px_40px_rgba(234,179,8,0.2)] flex flex-col items-center text-center group">
//             <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Users className="w-10 h-10 text-blue-400" /></div>
//             <h3 className="text-2xl font-bold text-white mb-3">Global Tech Community Leader</h3>
//             <p className="text-gray-300 leading-relaxed">Cultivating an active and engaged network of <span className="text-yellow-400 font-bold">2,000+ industry professionals</span> on LinkedIn. Consistently sharing high-value insights on LLM fine-tuning, Python development, and real-world Data Science strategies.</p>
//           </motion.div>

//           <motion.div variants={popIn3D} whileHover={{ scale: 1.02, rotateY: -5, z: 20 }} className="bg-[#050505]/60 backdrop-blur-xl border border-yellow-500/20 p-8 rounded-3xl hover:border-yellow-500/50 shadow-lg hover:shadow-[0_20px_40px_rgba(234,179,8,0.2)] flex flex-col items-center text-center group">
//             <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Globe className="w-10 h-10 text-purple-400" /></div>
//             <h3 className="text-2xl font-bold text-white mb-3">Open Source Advocate</h3>
//             <p className="text-gray-300 leading-relaxed">Dedicated to the democratization of deep learning through active contributions to <span className="text-yellow-400 font-bold">DeepChem</span>. Building public-beneficial systems and driving the adoption of molecular machine learning in global scientific communities.</p>
//           </motion.div>
//         </motion.div>

//         <div className="w-full">
//           <motion.div variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
//             <Award className="w-8 h-8 text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
//             <h3 className="text-3xl font-bold text-white tracking-wide">Certificates & Continuous Learning</h3>
//           </motion.div>
//           <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-4">
//             {certifications.map((cert, index) => (
//               <motion.div key={index} variants={fadeInUp3D} whileHover={{ scale: 1.01, x: 10, backgroundColor: "rgba(255,255,255,0.05)" }} className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#0a0a0a]/50 backdrop-blur-md border border-white/5 p-6 rounded-2xl transition-all">
//                 <div className="flex items-start gap-4 mb-4 md:mb-0">
//                   <div className="mt-1">{cert.icon}</div>
//                   <div>
//                     <h4 className="text-lg font-bold text-white mb-1">{cert.title}</h4>
//                     <p className="text-sm text-gray-400">Issuer: <span className="text-yellow-500/80">{cert.issuer}</span></p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col md:items-end text-left md:text-right">
//                   <span className="px-3 py-1 bg-white/5 rounded-md text-xs font-mono text-gray-300 mb-2 border border-white/10">ID: {cert.id}</span>
//                   <span className="text-sm text-gray-500 font-medium">{cert.status} • {cert.date}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* =========================================
//           PHASE 8: THE EPIC "TABHAI" FOOTER (4D ANIMATED)
//           ========================================= */}
//       <footer id="contact" className="relative z-10 pt-32 pb-10 px-4 mt-10 border-t border-white/5 bg-gradient-to-t from-[#050505] via-[#1a0505] to-transparent text-center overflow-hidden">
        
//         {/* CSS FOR SCANLINE AND SHIMMER */}
//         <style dangerouslySetInnerHTML={{__html: `
//           @keyframes scanline { 0% { transform: translateX(-100%); } 100% { transform: translateX(100vw); } }
//           .animate-scan { animation: scanline 4s ease-in-out infinite; }
//           @keyframes text-shimmer { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
//           .animate-text-shimmer { background-size: 200% auto; animation: text-shimmer 4s linear infinite; }
//         `}} />

//         {/* Moving Laser Line on Top Border */}
//         <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden">
//           <div className="w-[300px] h-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-scan shadow-[0_0_30px_rgba(234,179,8,1)]"></div>
//         </div>

//         {/* Breathing Background Glow (Pulse Effect) */}
//         <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-yellow-600/10 blur-[120px] rounded-t-full pointer-events-none" />

//         <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 1.2 }} viewport={{ once: true }} className="relative max-w-5xl mx-auto flex flex-col items-center">
          
//           <motion.div animate={{ rotateY: [0, 360] }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }}>
//             <Trophy className="w-16 h-16 text-yellow-500 mb-6 drop-shadow-[0_0_30px_rgba(234,179,8,1)]" />
//           </motion.div>
          
//           <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-400 to-white animate-text-shimmer tracking-tighter uppercase">
//             The Future Isn't Predicted.<br/>It's Engineered.
//           </h2>
          
//           <p className="text-gray-300 text-xl mb-12 max-w-3xl font-light">
//             Whether it's optimizing LLMs for complex chemistry, building predictive AVMs for real estate, or engineering data pipelines for retail—I don't just write code. <span className="font-bold text-white">I architect solutions that serve humanity.</span> Let's build the extraordinary.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-6 mb-24">
//             <motion.a whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(234,179,8,0.5)" }} whileTap={{ scale: 0.95 }} href="mailto:sameersain361@gmail.com" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-12 py-5 rounded-full font-extrabold text-lg tracking-widest uppercase flex items-center justify-center gap-3">
//               <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><Send className="w-6 h-6" /></motion.div> Initialize Contact
//             </motion.a>
//             <motion.a whileHover={{ scale: 1.05, backgroundColor: "rgba(234,179,8,0.1)", borderColor: "#eab308" }} whileTap={{ scale: 0.95 }} href="tel:+923047637545" className="px-12 py-5 rounded-full border-2 border-yellow-500/50 text-yellow-500 font-bold text-lg tracking-widest uppercase">
//               +92 304 7637545
//             </motion.a>
//           </div>

//           <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//             <div className="text-gray-500 text-sm font-mono font-semibold tracking-wider flex items-center gap-2">
//               <Code2 className="w-4 h-4" /> DESIGNED & ENGINEERED BY <span className="text-yellow-500">SAMEER NADEEM</span>
//             </div>
//             <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="text-gray-600 text-xs font-mono">
//               SYSTEM ONLINE // STATUS: OPTIMIZED // © {new Date().getFullYear()}
//             </motion.div>
//           </div>

//         </motion.div>
//       </footer>

//     </main>
//   );
// }




// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { 
//   Github, Linkedin, Mail, Code2, Cpu, Database, 
//   Briefcase, GraduationCap, ChevronRight, FolderGit2, 
//   ExternalLink, Beaker, Globe, Award, ShieldCheck, Satellite, 
//   Microscope, TerminalSquare, Network, BookOpen, Layers, 
//   Fingerprint, Zap, Radar, PlaySquare, FileText, Send
// } from "lucide-react";

// // =========================================
// // DATA ASSETS
// // =========================================

// const coreProjects = [
//   { name: "Deepfake Forensics Hybrid", link: "https://github.com/Abu-Sameer-66/Deepfake-Forensics-SOTA-Hybrid", desc: "SOTA ResNet-Transformer Hybrid. 99.92% precision over 140,000 images.", tags: ["ResNet-18", "Transformers", "Computer Vision"] },
//   { name: "Chest X-Ray ViT", link: "https://github.com/Abu-Sameer-66/Chest-XRay-Ablation-ViT", desc: "Ablation study on Vision Transformers for high-accuracy medical imaging.", tags: ["Healthcare AI", "ViT", "PyTorch"] },
//   { name: "PropVal AI Real Estate", link: "https://github.com/Abu-Sameer-66/PropVal-Property-Valuation--AI-Real-Estate-Engine", desc: "Production-grade AVM using Gradient Boosting for asset valuation.", tags: ["PropTech", "Machine Learning"] },
//   { name: "CogniPath Analytics Engine", link: "https://github.com/Abu-Sameer-66/CogniPath-Analytics-Engine", desc: "AI-driven EdTech engine optimizing academic outcomes via predictive modeling.", tags: ["EdTech", "Scikit-Learn"] },
//   { name: "SpamGuard AI Threat Detection", link: "https://github.com/Abu-Sameer-66/SpamGuard-AI-Threat-Detection", desc: "Enterprise SMS Phishing & Spam Detection using advanced NLP.", tags: ["NLP", "Cybersecurity"] },
//   { name: "Multispectral Satellite Forensics", link: "https://github.com/Abu-Sameer-66/SOTA-Multispectral-Satellite-Forensics-EuroSAT", desc: "13-channel satellite data classification using HAM & ViTs.", tags: ["Earth Observation", "Multispectral"] }
// ];

// const gsocProjects = [
//   { name: "Mistral7B-Tox21-Optimization", link: "https://github.com/Abu-Sameer-66/Mistral7B-Tox21-Molecular-Optimization", desc: "Native fine-tuning of Mistral-7B on Tox21 dataset using 4-bit quantization.", tags: ["Tox21", "Quantization"] },
//   { name: "Mistral7B-BACE-Study", link: "https://github.com/Abu-Sameer-66/Mistral7B-BACE-Generalization-Study", desc: "Optimizing Mistral-7B for BACE-1 inhibitor prediction using scaffold-split data.", tags: ["Drug Discovery", "Scaffold-Split"] },
//   { name: "Mistral7B-ClinTox", link: "https://github.com/Abu-Sameer-66/Mistral7B-ClinTox-Study", desc: "LLM Fine-tuning study on the ClinTox dataset for clinical toxicity prediction.", tags: ["Mistral-7B", "LoRA"] },
//   { name: "Mistral7B-BBBP-Reasoning", link: "https://github.com/Abu-Sameer-66/Mistral7B-BBBP-Molecular-Reasoning", desc: "Molecular property prediction on BBBP using property-aware prompting.", tags: ["Cheminformatics", "Reasoning"] },
//   { name: "ChemLLM-Tox-OLMo", link: "https://github.com/Abu-Sameer-66/ChemLLM-Tox-OLMo", desc: "Fine-tuning OLMo-7B with QLoRA for Molecular Toxicity Prediction.", tags: ["OLMo-7B", "QLoRA", "DeepChem"] }
// ];

// const additionalProjects = [
//   { name: "AI Voice Assistant", link: "https://github.com/Abu-Sameer-66/AI-Voice-Assistant-Python", desc: "Modular Python automation and speech recognition." },
//   { name: "Retail Sales Analysis", link: "https://github.com/Abu-Sameer-66/Retail-Sales-Performance-Analysis", desc: "BI analysis identifying profit leakages." },
//   { name: "Social Graph Engine", link: "https://github.com/Abu-Sameer-66/Social-Graph-Recommendation-Engine", desc: "Recommendation engine utilizing graph data structures." }
// ];

// const certifications = [
//   { title: "The Ultimate Job Ready Data Science Course", issuer: "CodeWithHarry", date: "Feb 20, 2026", id: "CWH-THE-ULTIMATE-JOB-READY-DATA-SCIENCE-COURSE-BMXY6IIK" },
//   { title: "Complete 2026 Python Bootcamp: Learn Python from Scratch", issuer: "CodeWithHarry", date: "Mar 9, 2026", id: "CWH-COMPLETE-PYTHON-BOOTCAMP-LEARN-PYTHON-FROM-SCRATCH-BMXY6IIK" },
//   { title: "Ultimate Web Development Course 2026", issuer: "Udemy", date: "Feb 20, 2026", id: "UC-2e72fbd0-d45a-487b-bf17-372434c63615" },
//   { title: "Introduction to Data Science in Python", issuer: "DataCamp", date: "May 26, 2025", id: "#40,907,162" },
//   { title: "Complete Prompt Engineering for AI Bootcamp", issuer: "Udemy", date: "In Progress", id: "GPT-5, Midjourney, Veo3 & LangChain" },
//   { title: "Prime AI/ML Batch", issuer: "Apna College", date: "In Progress", id: "Deep Learning, Transformers, Agentic AI" }
// ];

// // =========================================
// // ANIMATION VARIANTS
// // =========================================
// const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
// const staggerWrap = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
// const scaleIn = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } } };

// export default function Portfolio() {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <main className="min-h-screen bg-[#090e17] text-[#fcfbfb] font-sans selection:bg-[#f7d794] selection:text-[#090e17] overflow-x-hidden">
      
//       {/* 4D CINEMATIC BACKGROUND MESH */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <motion.div 
//           className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 bg-[#3da6a3]"
//           animate={{ x: mousePos.x - 300, y: mousePos.y - 300 }}
//           transition={{ type: "tween", ease: "linear", duration: 0.2 }}
//         />
//         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,_rgba(25,42,86,0.8),_transparent_70%)] blur-[100px]"></div>
//         <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle,_rgba(110,30,42,0.4),_transparent_70%)] blur-[150px]"></div>
//         <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] bg-[radial-gradient(circle,_rgba(247,215,148,0.1),_transparent_70%)] blur-[100px]"></div>
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
//       </div>

//       {/* =========================================
//           1. HERO SYSTEM / COMMAND CENTER
//           ========================================= */}
//       <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-20">
//         <motion.div initial="hidden" animate="visible" variants={staggerWrap} className="max-w-6xl mx-auto w-full flex flex-col items-center text-center">
          
//           <motion.div variants={scaleIn} className="mb-8 relative group perspective-[1000px]">
//             <div className="absolute inset-0 rounded-full border border-[#3da6a3] animate-[spin_10s_linear_infinite] opacity-50"></div>
//             <div className="absolute inset-2 rounded-full border border-[#f7d794] animate-[spin_15s_linear_infinite_reverse] opacity-30"></div>
//             <div className="w-40 h-40 md:w-48 md:h-48 rounded-full p-2 bg-[#192a56]/50 backdrop-blur-md shadow-[0_0_50px_rgba(61,166,163,0.3)] z-10 relative overflow-hidden group-hover:rotate-y-12 transition-transform duration-700">
//               <img src="/profile.png" alt="Sameer Nadeem" className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=SN&background=192a56&color=f7d794&size=256&bold=true"; }} />
//             </div>
//           </motion.div>

//           <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#192a56]/40 border border-[#3da6a3]/30 text-[#3da6a3] font-mono text-sm mb-6 backdrop-blur-md">
//             <Radar className="w-4 h-4 animate-pulse" /> SYSTEM ONLINE // RESEARCH TERMINAL
//           </motion.div>

//           <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase mb-4 text-[#fcfbfb] drop-shadow-2xl">
//             Sameer <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f7d794] to-[#3da6a3]">Nadeem</span>
//           </motion.h1>

//           <motion.p variants={fadeUp} className="text-[#c7d2d8] text-lg md:text-2xl font-light tracking-widest uppercase mb-10">
//             AI/ML Engineer <span className="text-[#6e1e2a] font-bold">|</span> Deep Learning Researcher <span className="text-[#6e1e2a] font-bold">|</span> P2D Integrator
//           </motion.p>

//           <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 text-[#b5b7b9]">
//             {[
//               { icon: <Github />, link: "https://github.com/Abu-Sameer-66" },
//               { icon: <Linkedin />, link: "https://www.linkedin.com/in/sameer-nadeem-66339a357/" },
//               { icon: <BookOpen />, link: "https://medium.com/@sameerdataanalyst66" },
//               { icon: <Mail />, link: "mailto:sameersain361@gmail.com" }
//             ].map((social, idx) => (
//               <a key={idx} href={social.link} target="_blank" rel="noreferrer" className="p-3 bg-[#192a56]/30 border border-[#2c3a47] rounded-full hover:bg-[#3da6a3]/20 hover:text-[#f7d794] hover:border-[#3da6a3] transition-all duration-300 backdrop-blur-md">
//                 {social.icon}
//               </a>
//             ))}
//             <div className="flex items-center px-5 py-2 border border-[#2c3a47] bg-[#192a56]/30 rounded-full text-xs font-mono backdrop-blur-md hover:border-[#f7d794]/50 transition-colors">
//               <span className="w-2 h-2 rounded-full bg-[#f7d794] mr-2 animate-pulse"></span> ORCID: 0009-0006-1369-7590
//             </div>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* =========================================
//           2. WHO I AM & PHILOSOPHY
//           ========================================= */}
//       <section className="relative z-10 py-24 px-6 bg-gradient-to-b from-transparent to-[#0a0f1c] border-b border-[#2c3a47]/50">
//         <div className="max-w-6xl mx-auto">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerWrap} className="grid lg:grid-cols-12 gap-12 items-center">
            
//             <motion.div variants={fadeUp} className="lg:col-span-7">
//               <h2 className="text-3xl md:text-5xl font-black text-[#fcfbfb] mb-8 flex items-center gap-4">
//                 <Fingerprint className="w-10 h-10 text-[#f7d794]" /> Identity & Mission
//               </h2>
//               <div className="space-y-6 text-[#c7d2d8] text-lg font-light leading-relaxed">
//                 <p>
//                   I synthesize rigorous academic research with the collaborative power of open-source contribution to architect high-fidelity AI systems that bridge the gap between theoretical breakthroughs and global production.
//                 </p>
//                 <p>
//                   My mission is to pioneer <strong className="text-[#3da6a3] font-normal">P2D (Physical-to-Deployment) integrations</strong>, translating advanced Computer Vision and Cheminformatics architectures into scalable, high-impact solutions that redefine business intelligence and empower the global ecosystem.
//                 </p>
//                 <p>
//                   I harmonize deep academic experimentation with open-source collaboration to engineer research-backed AI systems capable of solving real-world problems. Ultimately, my goal is to transform cutting-edge AI research into production-grade intelligent systems capable of delivering sustainable global impact.
//                 </p>
//               </div>
//             </motion.div>

//             <motion.div variants={scaleIn} className="lg:col-span-5 relative">
//               <div className="bg-[#192a56]/40 backdrop-blur-xl border border-[#3da6a3]/30 p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
//                 <h3 className="text-[#f7d794] font-mono text-sm tracking-widest uppercase mb-4 border-b border-[#f7d794]/20 pb-2">Core Directive</h3>
//                 <p className="text-xl font-serif italic text-[#fcfbfb] leading-relaxed">
//                   "Synthesizing the complexity of research into the elegance of production — where code is the language and impact is the legacy."
//                 </p>
//                 <div className="mt-8 flex items-center justify-between text-[#b5b7b9] font-mono text-xs">
//                   <span>Location: Bahawalpur, PK</span>
//                   <span className="flex items-center gap-1 text-[#3da6a3]"><Zap className="w-3 h-3"/> Active</span>
//                 </div>
//               </div>
//             </motion.div>

//           </motion.div>
//         </div>
//       </section>

//       {/* =========================================
//           3 & 4. AI ARSENAL & SPECIALIZATIONS
//           ========================================= */}
//       <section className="relative z-10 py-24 px-6 border-b border-[#2c3a47]/50">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
//             <div>
//               <h2 className="text-3xl md:text-5xl font-black text-[#fcfbfb] flex items-center gap-4 mb-4">
//                 <Cpu className="w-10 h-10 text-[#3da6a3]" /> AI Arsenal & Expertise
//               </h2>
//               <p className="text-[#c7d2d8] text-lg font-light">Technology stack and domain specializations driving my research.</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Specializations */}
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#1a1a1a]/60 backdrop-blur-md p-8 border border-[#2c3a47] rounded-2xl md:col-span-2 hover:border-[#3da6a3]/50 transition-colors group">
//               <h3 className="text-2xl font-bold mb-6 text-[#fcfbfb] flex items-center gap-3"><Microscope className="w-6 h-6 text-[#f7d794]"/> Research Specializations</h3>
//               <div className="flex flex-wrap gap-3">
//                 {['Deep Learning', 'LLM Optimization & Fine-Tuning', 'Molecular Machine Learning', 'Scientific ML & Cheminformatics', 'Computer Vision', 'Multi-Spectral Satellite Intelligence', 'Deepfake Forensics & Detection', 'AI System Architecture'].map(t => (
//                   <span key={t} className="px-4 py-2 bg-[#192a56]/50 border border-[#3da6a3]/30 text-[#fcfbfb] text-sm rounded-lg shadow-sm group-hover:border-[#3da6a3]/70 transition-colors">{t}</span>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Languages */}
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#1a1a1a]/60 backdrop-blur-md p-8 border border-[#2c3a47] rounded-2xl hover:border-[#f7d794]/50 transition-colors group">
//               <h3 className="text-xl font-bold mb-6 text-[#fcfbfb] flex items-center gap-3"><TerminalSquare className="w-5 h-5 text-[#f7d794]"/> Languages</h3>
//               <div className="flex flex-wrap gap-2 font-mono text-sm">
//                 {['Python', 'SQL', 'C++', 'JavaScript', 'HTML/CSS'].map(t => (
//                   <span key={t} className="px-3 py-1.5 bg-[#0a0f1c] border border-[#2c3a47] text-[#c7d2d8] rounded-md">{t}</span>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Frameworks */}
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#1a1a1a]/60 backdrop-blur-md p-8 border border-[#2c3a47] rounded-2xl md:col-span-3 hover:border-[#6e1e2a]/50 transition-colors group">
//               <h3 className="text-xl font-bold mb-6 text-[#fcfbfb] flex items-center gap-3"><Network className="w-5 h-5 text-[#6e1e2a]"/> Frameworks, Libraries & Tools</h3>
//               <div className="flex flex-wrap gap-3 font-mono text-sm">
//                 {['PyTorch', 'TensorFlow', 'HuggingFace Transformers', 'DeepChem', 'Scikit-Learn', 'Pandas', 'NumPy', 'OpenCV', 'ResNet', 'Vision Transformers', 'Next.js', 'Node.js', 'Jupyter', 'Google Colab'].map(t => (
//                   <span key={t} className="px-4 py-2 bg-[#0a0f1c] border border-[#6e1e2a]/40 text-[#fcfbfb] rounded-lg">{t}</span>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           8. RESEARCH LAB & EXPERIMENTS 
//           ========================================= */}
//       <section className="relative z-10 py-24 px-6 bg-gradient-to-b from-[#0a0f1c] to-[#192a56]/20 border-b border-[#2c3a47]/50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-3xl md:text-5xl font-black text-[#fcfbfb] mb-6 inline-flex items-center gap-4">
//               <Beaker className="w-10 h-10 text-[#f7d794]" /> Deep Learning Laboratory
//             </h2>
//             <p className="text-[#c7d2d8] text-lg font-light max-w-3xl mx-auto">
//               A dedicated research area focusing on AI Forensics, Earth Observation AI, Explainable AI (Grad-CAM), and Uncertainty Estimation (MC Dropout).
//             </p>
//           </div>

//           <div className="space-y-24">
//             {/* Experiment 1: Deepfake */}
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="grid lg:grid-cols-2 gap-12 items-center">
//               <div className="order-2 lg:order-1">
//                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#6e1e2a]/20 border border-[#6e1e2a] text-[#fcfbfb] font-mono text-xs font-bold mb-6 rounded">
//                   <span className="w-2 h-2 rounded-full bg-[#6e1e2a] animate-pulse"></span> EXPERIMENT 01
//                 </div>
//                 <h3 className="text-3xl md:text-4xl font-bold text-[#fcfbfb] mb-4">Deepfake Detection Forensics</h3>
//                 <p className="text-[#c7d2d8] text-lg mb-6 leading-relaxed">
//                   Engineered a highly specialized hybrid architecture combining the local texture extraction of CNNs with the global contextual reasoning of Vision Transformers. 
//                 </p>
//                 <div className="bg-[#1a1a1a]/80 border border-[#2c3a47] p-6 rounded-xl space-y-3 font-mono text-sm text-[#b5b7b9]">
//                   <div className="flex justify-between border-b border-[#2c3a47] pb-2"><span>Dataset:</span> <span className="text-[#fcfbfb]">140,000 images</span></div>
//                   <div className="flex justify-between border-b border-[#2c3a47] pb-2"><span>Architecture:</span> <span className="text-[#fcfbfb]">ResNet-Transformer Hybrid</span></div>
//                   <div className="flex justify-between border-b border-[#2c3a47] pb-2"><span>Precision:</span> <span className="text-[#3da6a3] font-bold">99.92%</span></div>
//                   <div className="flex justify-between"><span>F1 Score:</span> <span className="text-[#3da6a3] font-bold">99.39%</span></div>
//                 </div>
//               </div>
//               <div className="order-1 lg:order-2">
//                 <div className="bg-[#0a0f1c] p-2 border border-[#3da6a3]/30 rounded-2xl shadow-[0_20px_50px_rgba(61,166,163,0.15)]">
//                    <div className="w-full h-[300px] flex items-center justify-center bg-[#192a56]/30 rounded-xl border border-[#2c3a47] overflow-hidden relative text-center p-4">
                      
//                    </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Experiment 2: Satellite */}
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="grid lg:grid-cols-2 gap-12 items-center">
//               <div>
//                 <div className="bg-[#0a0f1c] p-2 border border-[#f7d794]/30 rounded-2xl shadow-[0_20px_50px_rgba(247,215,148,0.1)]">
//                    <div className="w-full h-[300px] flex items-center justify-center bg-[#192a56]/30 rounded-xl border border-[#2c3a47] overflow-hidden relative text-center p-4">
                      
//                    </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f7d794]/10 border border-[#f7d794] text-[#f7d794] font-mono text-xs font-bold mb-6 rounded">
//                   <span className="w-2 h-2 rounded-full bg-[#f7d794] animate-pulse"></span> EXPERIMENT 02
//                 </div>
//                 <h3 className="text-3xl md:text-4xl font-bold text-[#fcfbfb] mb-4">Multi-Spectral Satellite Intelligence</h3>
//                 <p className="text-[#c7d2d8] text-lg mb-6 leading-relaxed">
//                   Transitioned from traditional 3-channel RGB classification to complex 13-channel Earth Observation data to detect land-use changes invisible to the human eye. 
//                 </p>
//                 <div className="bg-[#1a1a1a]/80 border border-[#2c3a47] p-6 rounded-xl space-y-3 font-mono text-sm text-[#b5b7b9]">
//                   <div className="flex justify-between border-b border-[#2c3a47] pb-2"><span>Dataset:</span> <span className="text-[#fcfbfb]">EuroSAT (13 Channels)</span></div>
//                   <div className="flex justify-between border-b border-[#2c3a47] pb-2"><span>Baseline (ANN):</span> <span className="text-[#6e1e2a] font-bold">64% Accuracy (Failed Spatial)</span></div>
//                   <div className="flex justify-between"><span>SOTA (HAM + ViT):</span> <span className="text-[#f7d794] font-bold">≈89% Accuracy</span></div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           5 & 6. ACADEMIC JOURNEY & PROFESSIONAL IMPACT
//           ========================================= */}
//       <section id="journey" className="relative z-10 py-24 px-6 border-b border-[#2c3a47]/50">
//         <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          
//           {/* PROFESSIONAL IMPACT */}
//           <div>
//             <h2 className="text-3xl font-black text-[#fcfbfb] mb-10 flex items-center gap-4 border-b border-[#2c3a47] pb-4">
//               <Briefcase className="w-8 h-8 text-[#3da6a3]" /> Professional Impact
//             </h2>
//             <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#3da6a3] before:via-[#192a56] before:to-transparent">
              
//               {[
//                 { title: "Open Source Research Contributor (GSoC 2026)", org: "DeepChem Ecosystem", focus: "LLMs & Cheminformatics", desc: "Integrating OLMo-7B into DeepChem for automated SMILES generation. Designed a 12-week TorchModel integration roadmap and optimized validation pipelines.", color: "#3da6a3" },
//                 { title: "Lead Deep Learning Researcher", org: "AI Research Lab (IUB)", focus: "Synthetic Forensics & Multi-Spectral", desc: "Developing high-precision defensive AI under Prof. Talha. Achieved 99.92% precision on Deepfake Forensics. Designed pipelines for Google Scholar publications.", color: "#3da6a3" },
//                 { title: "AI Solutions Architect & Consultant", org: "Freelance (Upwork/LinkedIn)", focus: "P2D Integration", desc: "Translating complex technical scripts into high-value business assets. Designing custom Computer Vision and NLP pipelines that integrate seamlessly into corporate infrastructures.", color: "#192a56" },
//                 { title: "Technical Operations & Strategist", org: "Al-Quresh Motors", focus: "Industrial AI Integration", desc: "Implementing Real-World P2D by integrating Data Science into local logistics. Optimized supply chain precision and digitized traditional business workflows.", color: "#192a56" },
//                 { title: "Strategic Data Operations Analyst", org: "TechSpark Coworking", focus: "Lead Gen & Market Intelligence (1 Yr)", desc: "Developed robust lead pipelines and optimized CRM data architecture. Maintained 99%+ accuracy in data management within a fast-paced ecosystem.", color: "#2c3a47" }
//               ].map((exp, idx) => (
//                 <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
//                   <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0a0f1c] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(61,166,163,0.5)] z-10`} style={{backgroundColor: exp.color}}></div>
//                   <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-[#1a1a1a]/80 backdrop-blur-md p-6 rounded-xl border border-[#2c3a47] hover:border-[#3da6a3]/50 transition-colors shadow-lg">
//                     <h3 className="font-bold text-[#fcfbfb] text-lg mb-1">{exp.title}</h3>
//                     <p className="text-[#3da6a3] font-mono text-xs mb-3">{exp.org} | {exp.focus}</p>
//                     <p className="text-[#c7d2d8] text-sm leading-relaxed">{exp.desc}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* ACADEMIC JOURNEY */}
//           <div>
//             <h2 className="text-3xl font-black text-[#fcfbfb] mb-10 flex items-center gap-4 border-b border-[#2c3a47] pb-4">
//               <GraduationCap className="w-8 h-8 text-[#f7d794]" /> Academic Journey
//             </h2>
//             <div className="space-y-8">
//               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#192a56]/30 p-8 rounded-2xl border border-[#f7d794]/30 relative overflow-hidden">
//                 <div className="absolute top-0 right-0 p-4 opacity-10"><GraduationCap className="w-24 h-24 text-[#f7d794]" /></div>
//                 <div className="inline-block px-3 py-1 bg-[#f7d794]/20 text-[#f7d794] text-xs font-bold font-mono rounded mb-4">OCT 2023 - MAY 2027</div>
//                 <h3 className="text-2xl font-bold text-[#fcfbfb] mb-2">BS in Data Science</h3>
//                 <p className="text-[#c7d2d8] mb-4">The Islamia University of Bahawalpur</p>
//                 <div className="flex items-center gap-2 mb-4 font-mono text-sm text-[#f7d794]">
//                   <span className="bg-[#1a1a1a] px-3 py-1 rounded border border-[#2c3a47]">Current CGPA: 3+ / 4.0</span>
//                   <span className="bg-[#1a1a1a] px-3 py-1 rounded border border-[#2c3a47]">Student Researcher</span>
//                 </div>
//                 <p className="text-[#b5b7b9] text-sm leading-relaxed mb-4">Core: DSA, Machine Learning, Deep Learning, Data Warehouse, DBMS, Advanced Statistics, Linear Algebra, Business Process Analysis.</p>
//               </motion.div>

//               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#1a1a1a]/80 p-6 rounded-2xl border border-[#2c3a47]">
//                 <div className="inline-block px-3 py-1 bg-[#2c3a47] text-[#c7d2d8] text-xs font-bold font-mono rounded mb-4">APR 2021 - MAY 2023</div>
//                 <h3 className="text-xl font-bold text-[#fcfbfb] mb-1">Intermediate (Pre-Engineering)</h3>
//                 <p className="text-[#b5b7b9] text-sm mb-3">Punjab Group of Colleges Bahawalpur</p>
//                 <p className="text-[#c7d2d8] text-sm leading-relaxed">Subjects: Physics, Chemistry, Math, English. Activities: STEP Member, ECAT & FUNGAT prep.</p>
//               </motion.div>

//               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#1a1a1a]/80 p-6 rounded-2xl border border-[#2c3a47]">
//                 <div className="inline-block px-3 py-1 bg-[#2c3a47] text-[#c7d2d8] text-xs font-bold font-mono rounded mb-4">APR 2019 - MAY 2021</div>
//                 <h3 className="text-xl font-bold text-[#fcfbfb] mb-1">Matriculation (Science)</h3>
//                 <p className="text-[#b5b7b9] text-sm mb-3">Govt Technical High School Bahawalpur</p>
//                 <div className="inline-block px-3 py-1 border border-[#f7d794]/50 text-[#f7d794] text-xs font-bold font-mono rounded bg-[#1a1a1a] shadow-[0_0_10px_rgba(247,215,148,0.2)]">1037 / 1100 Marks (Top 1% Elite Cohort)</div>
//               </motion.div>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* =========================================
//           7. PROJECTS SECTION: Building Intelligence
//           ========================================= */}
//       <section id="projects" className="relative z-10 py-24 px-6 bg-[#0a0f1c] border-b border-[#2c3a47]/50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl md:text-6xl font-black text-[#fcfbfb] mb-6 uppercase tracking-tighter">
//               Building Intelligence <br/><span className="text-[#3da6a3]">One Model at a Time.</span>
//             </h2>
//             <p className="text-[#c7d2d8] text-lg font-light max-w-2xl mx-auto">
//               Translating complex architectures into scalable, high-impact systems.
//             </p>
//           </div>

//           {/* GSoC Research Projects */}
//           <div className="mb-20">
//             <h3 className="text-2xl font-bold text-[#f7d794] mb-8 border-b border-[#f7d794]/20 pb-4 flex items-center gap-3"><Layers className="w-6 h-6"/> GSoC Research Projects</h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//               {gsocProjects.map((project, idx) => (
//                 <motion.a key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} href={project.link} target="_blank" rel="noreferrer" className="bg-[#1a1a1a] border border-[#2c3a47] p-6 rounded-xl hover:border-[#f7d794]/60 hover:shadow-[0_10px_30px_rgba(247,215,148,0.1)] transition-all group flex flex-col justify-between h-full">
//                   <div>
//                     <div className="flex justify-between items-start mb-4">
//                       <FolderGit2 className="w-8 h-8 text-[#f7d794] group-hover:scale-110 transition-transform" />
//                       <ExternalLink className="w-4 h-4 text-[#b5b7b9] group-hover:text-[#fcfbfb]" />
//                     </div>
//                     <h4 className="text-lg font-bold text-[#fcfbfb] mb-3 leading-tight group-hover:text-[#f7d794] transition-colors">{project.name}</h4>
//                     <p className="text-sm text-[#c7d2d8] leading-relaxed mb-6">{project.desc}</p>
//                   </div>
//                   <div className="flex flex-wrap gap-2 mt-auto">
//                     {project.tags.map(t => <span key={t} className="text-[10px] font-mono px-2 py-1 bg-[#2c3a47]/50 border border-[#2c3a47] rounded text-[#b5b7b9]">{t}</span>)}
//                   </div>
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Core AI Projects */}
//           <div className="mb-20">
//             <h3 className="text-2xl font-bold text-[#3da6a3] mb-8 border-b border-[#3da6a3]/20 pb-4 flex items-center gap-3"><Database className="w-6 h-6"/> Core AI Projects</h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {coreProjects.map((project, idx) => (
//                 <motion.a key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} href={project.link} target="_blank" rel="noreferrer" className="bg-[#1a1a1a] border border-[#2c3a47] p-8 rounded-xl hover:border-[#3da6a3]/60 hover:shadow-[0_10px_30px_rgba(61,166,163,0.1)] transition-all group flex flex-col justify-between h-full">
//                   <div>
//                     <div className="flex justify-between items-start mb-6">
//                       <TerminalSquare className="w-8 h-8 text-[#3da6a3] group-hover:scale-110 transition-transform" />
//                       <ExternalLink className="w-5 h-5 text-[#b5b7b9] group-hover:text-[#fcfbfb]" />
//                     </div>
//                     <h4 className="text-xl font-bold text-[#fcfbfb] mb-3 group-hover:text-[#3da6a3] transition-colors">{project.name}</h4>
//                     <p className="text-[#c7d2d8] leading-relaxed mb-6">{project.desc}</p>
//                   </div>
//                   <div className="flex flex-wrap gap-2 mt-auto">
//                     {project.tags.map(t => <span key={t} className="text-[11px] font-mono px-2 py-1 bg-[#192a56]/40 border border-[#3da6a3]/30 rounded text-[#3da6a3]">{t}</span>)}
//                   </div>
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Additional Projects */}
//           <div>
//             <h3 className="text-2xl font-bold text-[#b5b7b9] mb-8 border-b border-[#2c3a47] pb-4 flex items-center gap-3"><Code2 className="w-6 h-6"/> Additional Data & Automation Projects</h3>
//             <div className="grid md:grid-cols-3 gap-6">
//               {additionalProjects.map((project, idx) => (
//                 <motion.a key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} href={project.link} target="_blank" rel="noreferrer" className="bg-[#1a1a1a]/50 border border-[#2c3a47] p-6 rounded-xl hover:border-[#fcfbfb]/50 transition-all group">
//                   <h4 className="text-lg font-bold text-[#fcfbfb] mb-2 group-hover:text-[#f7d794] transition-colors">{project.name}</h4>
//                   <p className="text-sm text-[#c7d2d8]">{project.desc}</p>
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* =========================================
//           9 & 10. KNOWLEDGE SHARING, COMMUNITY & OS
//           ========================================= */}
//       <section className="relative z-10 py-24 px-6 bg-[#1a1a1a] border-b border-[#2c3a47]/50">
//         <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          
//           <div>
//             <h2 className="text-3xl font-black text-[#fcfbfb] mb-8 flex items-center gap-4 border-b border-[#2c3a47] pb-4">
//               <PlaySquare className="w-8 h-8 text-[#6e1e2a]" /> Knowledge Sharing
//             </h2>
//             <div className="space-y-6">
//               <a href="https://medium.com/@sameerdataanalyst66/the-accuracy-paradox-why-95-accuracy-in-medical-ai-is-often-a-lie-7234156ee326" target="_blank" rel="noreferrer" className="block bg-[#0a0f1c] border border-[#2c3a47] p-6 rounded-xl hover:border-[#6e1e2a] transition-all group">
//                 <div className="flex justify-between items-center mb-2">
//                   <span className="text-xs font-mono text-[#6e1e2a] px-2 py-1 border border-[#6e1e2a]/30 rounded bg-[#6e1e2a]/10">Medium Article</span>
//                   <ExternalLink className="w-4 h-4 text-[#b5b7b9]" />
//                 </div>
//                 <h4 className="text-lg font-bold text-[#fcfbfb] mb-2 group-hover:text-[#6e1e2a] transition-colors">The Accuracy Paradox in Medical AI</h4>
//                 <p className="text-sm text-[#c7d2d8]">Why 95% accuracy in Medical AI is often a lie. A deep dive into metrics that matter in healthcare AI.</p>
//               </a>
              
//               <div className="bg-[#0a0f1c] border border-[#2c3a47] p-6 rounded-xl">
//                 <h4 className="text-lg font-bold text-[#fcfbfb] mb-4">Technical Presentations (University Level)</h4>
//                 <ul className="space-y-3 text-[#c7d2d8] text-sm">
//                   <li className="flex items-start gap-3"><ChevronRight className="w-4 h-4 text-[#6e1e2a] mt-0.5 shrink-0"/> Building a Mini GPT AI System</li>
//                   <li className="flex items-start gap-3"><ChevronRight className="w-4 h-4 text-[#6e1e2a] mt-0.5 shrink-0"/> SpamGuard AI Threat Detection Architecture</li>
//                   <li className="flex items-start gap-3"><ChevronRight className="w-4 h-4 text-[#6e1e2a] mt-0.5 shrink-0"/> Deep Learning Architectures (ANN / CNN) Mechanics</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h2 className="text-3xl font-black text-[#fcfbfb] mb-8 flex items-center gap-4 border-b border-[#2c3a47] pb-4">
//               <Globe className="w-8 h-8 text-[#3da6a3]" /> Community & Open Source
//             </h2>
//             <p className="text-[#c7d2d8] mb-8 leading-relaxed">
//               Active contributor to the public ecosystem. Dedicated to democratizing deep learning through open-source collaborations and building a strong network of AI professionals globally.
//             </p>
//             <div className="grid grid-cols-2 gap-6">
//               <div className="bg-[#0a0f1c] border border-[#3da6a3]/30 p-6 rounded-xl text-center shadow-[0_10px_30px_rgba(61,166,163,0.1)]">
//                 <Github className="w-8 h-8 text-[#3da6a3] mx-auto mb-4" />
//                 <h4 className="text-3xl font-black text-[#fcfbfb] mb-1">650+</h4>
//                 <p className="text-xs font-mono text-[#3da6a3] uppercase">GitHub Commits</p>
//               </div>
//               <div className="bg-[#0a0f1c] border border-[#f7d794]/30 p-6 rounded-xl text-center shadow-[0_10px_30px_rgba(247,215,148,0.1)]">
//                 <FolderGit2 className="w-8 h-8 text-[#f7d794] mx-auto mb-4" />
//                 <h4 className="text-3xl font-black text-[#fcfbfb] mb-1">15+</h4>
//                 <p className="text-xs font-mono text-[#f7d794] uppercase">Elite Repositories</p>
//               </div>
//               <div className="bg-[#0a0f1c] border border-[#192a56] p-6 rounded-xl text-center col-span-2">
//                 <Linkedin className="w-8 h-8 text-[#c7d2d8] mx-auto mb-4" />
//                 <h4 className="text-3xl font-black text-[#fcfbfb] mb-1">2,200+</h4>
//                 <p className="text-xs font-mono text-[#c7d2d8] uppercase">LinkedIn Connections</p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* =========================================
//           11. CERTIFICATES & CREDENTIALS
//           ========================================= */}
//       <section className="relative z-10 py-24 px-6 bg-[#0a0f1c] border-b border-[#2c3a47]/50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-5xl font-black text-[#fcfbfb] mb-6 inline-flex items-center gap-4">
//               <Award className="w-10 h-10 text-[#f7d794]" /> Elite Credentials
//             </h2>
//             <p className="text-[#c7d2d8] text-lg font-light max-w-2xl mx-auto">
//               Continuous learning and professional validation through world-class tech bootcamps.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {certifications.map((cert, idx) => (
//               <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#1a1a1a] border border-[#2c3a47] p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#f7d794]/40 transition-colors">
//                 <div className="flex items-start gap-4">
//                   <FileText className="w-6 h-6 text-[#f7d794] shrink-0 mt-1" />
//                   <div>
//                     <h4 className="text-lg font-bold text-[#fcfbfb] mb-1">{cert.title}</h4>
//                     <p className="text-sm text-[#b5b7b9]">Issuer: <strong className="text-[#f7d794] font-normal">{cert.issuer}</strong></p>
//                   </div>
//                 </div>
//                 <div className="flex flex-col md:items-end md:text-right shrink-0">
//                   <span className="text-xs font-mono text-[#c7d2d8] bg-[#0a0f1c] px-2 py-1 border border-[#2c3a47] rounded mb-1 w-max md:w-auto">ID: {cert.id}</span>
//                   <span className="text-xs text-[#3da6a3]">{cert.date}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           12 & 13. DIGITAL FOOTPRINT & CONTACT SYSTEM
//           ========================================= */}
//       <footer id="contact" className="relative z-10 pt-32 pb-12 px-6 bg-gradient-to-b from-[#0a0f1c] to-[#020408] overflow-hidden text-center">
        
//         {/* Cinematic Laser Scanline */}
//         <style dangerouslySetInnerHTML={{__html: `
//           @keyframes scanline { 0% { transform: translateX(-100vw); } 100% { transform: translateX(100vw); } }
//           .animate-scan { animation: scanline 4s ease-in-out infinite; }
//         `}} />
//         <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden">
//           <div className="w-[400px] h-full bg-gradient-to-r from-transparent via-[#3da6a3] to-transparent animate-scan shadow-[0_0_30px_rgba(61,166,163,1)]"></div>
//         </div>

//         {/* Ambient Footer Glow */}
//         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[radial-gradient(ellipse_at_bottom,_rgba(109,0,26,0.3),_transparent_60%)] pointer-events-none"></div>

//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerWrap} className="relative max-w-4xl mx-auto">
          
//           <motion.div variants={scaleIn} className="mb-8 inline-block">
//             <div className="w-20 h-20 rounded-full border border-[#f7d794]/50 bg-[#192a56]/50 flex items-center justify-center shadow-[0_0_40px_rgba(247,215,148,0.3)]">
//               <TerminalSquare className="w-10 h-10 text-[#f7d794]" />
//             </div>
//           </motion.div>

//           <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-black text-[#fcfbfb] mb-8 uppercase tracking-tighter drop-shadow-2xl">
//             Let's Engineer <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f7d794] to-[#3da6a3]">The Future.</span>
//           </motion.h2>

//           <motion.p variants={fadeUp} className="text-[#c7d2d8] text-xl font-light max-w-2xl mx-auto mb-16 leading-relaxed">
//             Entering the final phase. If you are building high-end AI architectures, require elite technical strategy, or want to collaborate on global OS research—<strong className="text-[#fcfbfb]">the system is ready.</strong>
//           </motion.p>

//           <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
//             <a href="mailto:sameersain361@gmail.com" className="px-10 py-5 bg-gradient-to-r from-[#192a56] to-[#0a0f1c] border border-[#3da6a3] text-[#fcfbfb] font-bold tracking-widest uppercase hover:bg-[#3da6a3] hover:text-[#0a0f1c] transition-all duration-300 shadow-[0_0_30px_rgba(61,166,163,0.3)] flex items-center justify-center gap-3 group">
//               <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> Initialize Contact
//             </a>
//             <a href="https://www.upwork.com/freelancers/~016d309ea83d2c431a" target="_blank" rel="noreferrer" className="px-10 py-5 bg-transparent border-2 border-[#f7d794] text-[#f7d794] font-bold tracking-widest uppercase hover:bg-[#f7d794] hover:text-[#0a0f1c] transition-all duration-300 shadow-[0_0_30px_rgba(247,215,148,0.1)]">
//               Hire on Upwork
//             </a>
//           </motion.div>

//           <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-8 mb-20 text-[#b5b7b9]">
//             <a href="tel:0304763745" className="hover:text-[#fcfbfb] font-mono text-sm transition-colors flex items-center gap-2"><div className="w-2 h-2 bg-[#f7d794] rounded-full"></div> 0304 763745</a>
//             <span className="hover:text-[#fcfbfb] font-mono text-sm transition-colors flex items-center gap-2"><div className="w-2 h-2 bg-[#3da6a3] rounded-full"></div> Bahawalpur, PK</span>
//           </motion.div>

//           <div className="w-full border-t border-[#2c3a47] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-[#c7d2d8]">
//             <p>DESIGNED & ENGINEERED BY <span className="text-[#f7d794] font-bold">SAMEER NADEEM</span></p>
//             <p className="animate-pulse">SYSTEM ONLINE // ELITE RESEARCH TERMINAL // © {new Date().getFullYear()}</p>
//           </div>

//         </motion.div>
//       </footer>

//     </main>
//   );
// }


// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { 
//   Github, Linkedin, Mail, Code2, Cpu, Database, 
//   Briefcase, GraduationCap, ChevronRight, FolderGit2, 
//   ExternalLink, Beaker, Globe, Award, ShieldCheck, Satellite, 
//   TerminalSquare, Network, BookOpen, Layers, 
//   Fingerprint, Zap, Radar, PlaySquare, FileText, Send, 
//   Stethoscope, Activity, Target, Workflow
// } from "lucide-react";

// // =========================================
// // DATA ASSETS
// // =========================================

// const coreProjects = [
//   { name: "Deepfake Forensics Hybrid", link: "https://github.com/Abu-Sameer-66/Deepfake-Forensics-SOTA-Hybrid", desc: "SOTA ResNet-Transformer Hybrid. 99.92% precision over 140,000 images.", tags: ["ResNet-18", "Transformers", "Computer Vision"] },
//   { name: "PropVal AI Real Estate", link: "https://github.com/Abu-Sameer-66/PropVal-Property-Valuation--AI-Real-Estate-Engine", desc: "Production-grade AVM using Gradient Boosting for asset valuation.", tags: ["PropTech", "Machine Learning"] },
//   { name: "CogniPath Analytics Engine", link: "https://github.com/Abu-Sameer-66/CogniPath-Analytics-Engine", desc: "AI-driven EdTech engine optimizing academic outcomes via predictive modeling.", tags: ["EdTech", "Scikit-Learn"] },
//   { name: "SpamGuard AI Threat Detection", link: "https://github.com/Abu-Sameer-66/SpamGuard-AI-Threat-Detection", desc: "Enterprise SMS Phishing & Spam Detection using advanced NLP.", tags: ["NLP", "Cybersecurity"] }
// ];

// const gsocProjects = [
//   { name: "Mistral7B-Tox21-Optimization", link: "https://github.com/Abu-Sameer-66/Mistral7B-Tox21-Molecular-Optimization", desc: "Native fine-tuning of Mistral-7B on Tox21 dataset using 4-bit quantization.", tags: ["Tox21", "Quantization"] },
//   { name: "Mistral7B-BACE-Study", link: "https://github.com/Abu-Sameer-66/Mistral7B-BACE-Generalization-Study", desc: "Optimizing Mistral-7B for BACE-1 inhibitor prediction using scaffold-split data.", tags: ["Drug Discovery", "Scaffold-Split"] },
//   { name: "Mistral7B-ClinTox", link: "https://github.com/Abu-Sameer-66/Mistral7B-ClinTox-Study", desc: "LLM Fine-tuning study on the ClinTox dataset for clinical toxicity prediction.", tags: ["Mistral-7B", "LoRA"] },
//   { name: "ChemLLM-Tox-OLMo", link: "https://github.com/Abu-Sameer-66/ChemLLM-Tox-OLMo", desc: "Fine-tuning OLMo-7B with QLoRA for Molecular Toxicity Prediction.", tags: ["OLMo-7B", "DeepChem"] }
// ];

// const additionalProjects = [
//   { name: "AI Voice Assistant", link: "https://github.com/Abu-Sameer-66/AI-Voice-Assistant-Python", desc: "Modular Python automation and speech recognition." },
//   { name: "Retail Sales Analysis", link: "https://github.com/Abu-Sameer-66/Retail-Sales-Performance-Analysis", desc: "BI analysis identifying profit leakages." },
//   { name: "Social Graph Engine", link: "https://github.com/Abu-Sameer-66/Social-Graph-Recommendation-Engine", desc: "Recommendation engine utilizing graph data structures." }
// ];

// const certifications = [
//   { title: "The Ultimate Job Ready Data Science Course", issuer: "CodeWithHarry", date: "Feb 20, 2026", id: "CWH-THE-ULTIMATE-JOB-READY-DATA-SCIENCE-COURSE-BMXY6IIK" },
//   { title: "Complete 2026 Python Bootcamp", issuer: "CodeWithHarry", date: "Mar 9, 2026", id: "CWH-COMPLETE-PYTHON-BOOTCAMP-LEARN-PYTHON-FROM-SCRATCH-BMXY6IIK" },
//   { title: "Ultimate Web Development Course 2026", issuer: "Udemy", date: "Feb 20, 2026", id: "UC-2e72fbd0-d45a-487b-bf17-372434c63615" },
//   { title: "Introduction to Data Science in Python", issuer: "DataCamp", date: "May 26, 2025", id: "#40,907,162" },
//   { title: "Complete Prompt Engineering for AI Bootcamp", issuer: "Udemy", date: "In Progress", id: "GPT-5, Midjourney, Veo3 & LangChain" },
//   { title: "Prime AI/ML Batch", issuer: "Apna College", date: "In Progress", id: "Deep Learning, Transformers, Agentic AI" }
// ];

// // =========================================
// // ANIMATION VARIANTS
// // =========================================
// const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } };
// const staggerWrap = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
// const scaleIn = { hidden: { opacity: 0, scale: 0.9, rotateX: 10 }, visible: { opacity: 1, scale: 1, rotateX: 0, transition: { type: "spring", stiffness: 80, damping: 20, duration: 1 } } };

// export default function Portfolio() {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     // Color Palette: Base: #150016, Deep Purple: #29104A, Accent: #522C5D, Mauve: #845162, Light Highlight: #E3B6B1, Text: #FFE3D8
//     <main className="min-h-screen bg-[#150016] text-[#FFE3D8] font-sans selection:bg-[#E3B6B1] selection:text-[#150016] overflow-x-hidden">
      
//       {/* 4D CINEMATIC BACKGROUND MESH */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <motion.div 
//           className="absolute w-[800px] h-[800px] rounded-full blur-[200px] opacity-20 bg-[#522C5D]"
//           animate={{ x: mousePos.x - 400, y: mousePos.y - 400 }}
//           transition={{ type: "tween", ease: "linear", duration: 0.15 }}
//         />
//         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,_rgba(41,16,74,0.6),_transparent_70%)] blur-[120px]"></div>
//         <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle,_rgba(132,81,98,0.3),_transparent_70%)] blur-[150px]"></div>
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay"></div>
//       </div>

//       {/* =========================================
//           1. HERO SYSTEM / COMMAND CENTER
//           ========================================= */}
//       <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-20">
//         <motion.div initial="hidden" animate="visible" variants={staggerWrap} className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
          
//           {/* PROFILE IMAGE WITH 3D ORBS */}
//           <motion.div variants={scaleIn} className="mb-8 relative group perspective-[1200px]">
//             <div className="absolute inset-0 rounded-full border border-[#522C5D] animate-[spin_10s_linear_infinite] opacity-60"></div>
//             <div className="absolute inset-3 rounded-full border border-[#E3B6B1] animate-[spin_15s_linear_infinite_reverse] opacity-40"></div>
//             <div className="w-48 h-48 md:w-56 md:h-56 rounded-full p-2 bg-[#29104A]/60 backdrop-blur-xl shadow-[0_0_60px_rgba(82,44,93,0.5)] z-10 relative overflow-hidden transform-gpu group-hover:rotate-y-12 transition-all duration-700">
//               <img src="/profile.jpeg" alt="Sameer Nadeem" className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=SN&background=29104A&color=FFE3D8&size=256"; }} />
//             </div>
//           </motion.div>

//           <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#29104A]/50 border border-[#522C5D] text-[#E3B6B1] font-mono text-sm mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(82,44,93,0.3)]">
//             <Radar className="w-4 h-4 animate-pulse text-[#FFE3D8]" /> SYSTEM ONLINE // RESEARCH TERMINAL
//           </motion.div>

//           <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase mb-4 text-[#FFE3D8] drop-shadow-2xl">
//             Sameer <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3B6B1] to-[#845162]">Nadeem</span>
//           </motion.h1>

//           <motion.div variants={fadeUp} className="flex flex-wrap justify-center items-center gap-3 text-[#E3B6B1] text-sm md:text-lg font-medium tracking-wide uppercase mb-10 max-w-4xl">
//             <span>AI/ML Engineer</span> <span className="text-[#845162] font-black">|</span> 
//             <span>Data Scientist</span> <span className="text-[#845162] font-black">|</span> 
//             <span>Open Source Contributor</span> <span className="text-[#845162] font-black">|</span> 
//             <span>LLM Optimizer & Fine-Tuning</span> <span className="text-[#845162] font-black">|</span> 
//             <span className="text-[#FFE3D8] font-bold border-b border-[#E3B6B1]">P2D Integrator</span>
//           </motion.div>

//           <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 text-[#E3B6B1]">
//             <a href="https://www.kaggle.com/sameernadeem66" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#29104A]/40 border border-[#522C5D] rounded-full hover:bg-[#522C5D]/40 hover:text-[#FFE3D8] hover:border-[#E3B6B1] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md font-bold shadow-lg">
//               <span className="text-xl font-black">k</span> Kaggle
//             </a>
//             {[
//               { icon: <Github />, link: "https://github.com/Abu-Sameer-66" },
//               { icon: <Linkedin />, link: "https://www.linkedin.com/in/sameer-nadeem-66339a357/" },
//               { icon: <BookOpen />, link: "https://medium.com/@sameerdataanalyst66" },
//               { icon: <Mail />, link: "mailto:sameersain361@gmail.com" }
//             ].map((social, idx) => (
//               <a key={idx} href={social.link} target="_blank" rel="noreferrer" className="p-3 bg-[#29104A]/40 border border-[#522C5D] rounded-full hover:bg-[#522C5D]/40 hover:text-[#FFE3D8] hover:border-[#E3B6B1] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md shadow-lg">
//                 {social.icon}
//               </a>
//             ))}
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* =========================================
//           2. WHO I AM & P2D INTEGRATION
//           ========================================= */}
//       <section className="relative z-10 py-32 px-6 bg-gradient-to-b from-transparent to-[#29104A]/10 border-b border-[#522C5D]/30">
//         <div className="max-w-7xl mx-auto">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerWrap} className="grid lg:grid-cols-12 gap-16 items-center">
            
//             <motion.div variants={fadeUp} className="lg:col-span-7">
//               <h2 className="text-4xl md:text-5xl font-black text-[#FFE3D8] mb-8 flex items-center gap-4">
//                 <Fingerprint className="w-12 h-12 text-[#E3B6B1]" /> Identity & Mission
//               </h2>
//               <div className="space-y-6 text-[#E3B6B1] text-lg font-light leading-relaxed">
//                 <p>
//                   I synthesize rigorous academic research with the collaborative power of open-source contribution to architect high-fidelity AI systems that bridge the gap between theoretical breakthroughs and global production.
//                 </p>
//                 <div className="p-8 bg-[#29104A]/30 border-l-4 border-[#E3B6B1] rounded-r-2xl shadow-[0_20px_40px_rgba(41,16,74,0.4)] backdrop-blur-md">
//                   <h4 className="text-[#FFE3D8] font-bold text-2xl mb-4 flex items-center gap-3"><Network className="w-6 h-6 text-[#E3B6B1]"/> Defining P2D</h4>
//                   <p className="text-[#FFE3D8] leading-relaxed">
//                     My mission is to pioneer <strong className="text-[#E3B6B1] font-black tracking-wide">Physical-to-Digital (P2D) Integration</strong> — bridging the gap from the real-world physical infrastructure into the AI-driven digital era. I translate physical workflows into scalable, automated, and intelligent digital architectures.
//                   </p>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div variants={scaleIn} className="lg:col-span-5 relative perspective-[1200px]">
//               <div className="bg-gradient-to-br from-[#29104A]/60 to-[#150016] backdrop-blur-xl border border-[#522C5D] p-10 rounded-3xl shadow-[0_30px_60px_rgba(41,16,74,0.8)] transform-gpu hover:rotate-y-6 hover:rotate-x-6 transition-all duration-700">
//                 <h3 className="text-[#E3B6B1] font-mono text-sm tracking-widest uppercase mb-6 border-b border-[#522C5D] pb-3 flex items-center gap-2"><Zap className="w-4 h-4"/> Core Directive</h3>
//                 <p className="text-3xl font-serif italic text-[#FFE3D8] leading-snug">
//                   "Synthesizing the complexity of research into the elegance of digital production — where code is the language and impact is the legacy."
//                 </p>
//               </div>
//             </motion.div>

//           </motion.div>
//         </div>
//       </section>

//       {/* =========================================
//           3. AI ARSENAL & EXPERTISE (Pure 3D Data Design)
//           ========================================= */}
//       <section className="relative z-10 py-32 px-6 border-b border-[#522C5D]/30">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-4xl md:text-6xl font-black text-[#FFE3D8] flex items-center justify-center gap-4 mb-4 drop-shadow-lg">
//               <Cpu className="w-12 h-12 text-[#E3B6B1]" /> Deep Tech Arsenal
//             </h2>
//             <p className="text-[#E3B6B1] text-xl font-light">The foundational stack driving my 4D digital architecture.</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-[2000px]">
//             {/* Specializations */}
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="bg-gradient-to-br from-[#29104A] to-[#150016] p-[2px] rounded-3xl md:col-span-2 group transform-gpu hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(82,44,93,0.6)] transition-all duration-500">
//               <div className="bg-[#150016]/90 backdrop-blur-xl h-full p-10 rounded-[22px] group-hover:bg-[#150016]/70 transition-colors relative overflow-hidden">
//                 <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform duration-700"><Layers className="w-64 h-64 text-[#E3B6B1]"/></div>
//                 <h3 className="text-3xl font-black mb-8 text-[#FFE3D8] flex items-center gap-3 relative z-10"><TerminalSquare className="w-8 h-8 text-[#E3B6B1]"/> AI Specializations</h3>
//                 <div className="flex flex-wrap gap-4 relative z-10">
//                   {['Deep Learning', 'LLM Optimization & Fine-Tuning', 'Scientific ML & Cheminformatics', 'Computer Vision', 'Multi-Spectral Intelligence', 'Deepfake Forensics', 'P2D Integration'].map(t => (
//                     <span key={t} className="px-5 py-3 bg-[#29104A]/80 border border-[#522C5D] text-[#FFE3D8] text-sm font-bold rounded-xl shadow-[inset_0_2px_10px_rgba(255,255,255,0.05)] hover:border-[#E3B6B1] transition-colors">{t}</span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//             {/* Languages */}
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="bg-gradient-to-bl from-[#522C5D] to-[#150016] p-[2px] rounded-3xl group transform-gpu hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(82,44,93,0.6)] transition-all duration-500">
//                <div className="bg-[#150016]/90 backdrop-blur-xl h-full p-10 rounded-[22px] group-hover:bg-[#150016]/70 transition-colors relative overflow-hidden">
//                 <div className="absolute -right-10 -top-10 opacity-5 group-hover:rotate-12 transition-transform duration-700"><Code2 className="w-48 h-48 text-[#E3B6B1]"/></div>
//                 <h3 className="text-3xl font-black mb-8 text-[#FFE3D8] flex items-center gap-3 relative z-10"><Database className="w-8 h-8 text-[#E3B6B1]"/> Core Stack</h3>
//                 <div className="flex flex-col gap-4 font-mono text-sm relative z-10">
//                   {['Python (Advanced)', 'SQL / Database Mgt', 'C++ (Core logic)', 'JavaScript / TS'].map(t => (
//                     <span key={t} className="px-5 py-4 bg-[#150016] border border-[#522C5D] text-[#E3B6B1] rounded-xl text-center shadow-lg hover:border-[#E3B6B1] transition-colors">{t}</span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           4. DEEP LEARNING LABORATORY (PURE DATA VISUALIZATION - NO IMAGES)
//           ========================================= */}
//       <section className="relative z-10 py-32 px-6 bg-gradient-to-b from-[#150016] to-[#29104A]/20 border-b border-[#522C5D]/30">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-24">
//             <h2 className="text-4xl md:text-6xl font-black text-[#FFE3D8] mb-6 inline-flex items-center gap-4">
//               <Beaker className="w-12 h-12 text-[#E3B6B1]" /> Deep Learning Laboratory
//             </h2>
//             <p className="text-[#E3B6B1] text-xl font-light max-w-3xl mx-auto">
//               Abstracting complex models into purely data-driven, scalable, and high-precision architectures.
//             </p>
//           </div>

//           <div className="space-y-16">
            
//             {/* EXPERIMENT 01: Deepfake (Data Dashboard Design) */}
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-[#29104A]/30 backdrop-blur-xl border border-[#522C5D] rounded-[40px] p-8 md:p-12 relative overflow-hidden group hover:border-[#E3B6B1]/50 transition-colors duration-500 shadow-[0_20px_60px_rgba(41,16,74,0.5)]">
//               <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-[0.03] group-hover:scale-110 transition-transform duration-700 pointer-events-none"><ShieldCheck size={500} /></div>
              
//               <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#845162]/30 border border-[#845162] text-[#FFE3D8] font-mono text-xs font-bold mb-8 rounded-full">
//                 <span className="w-2 h-2 rounded-full bg-[#FFE3D8] animate-pulse"></span> EXPERIMENT 01
//               </div>
              
//               <div className="grid lg:grid-cols-5 gap-12">
//                 <div className="lg:col-span-2">
//                   <h3 className="text-4xl font-black text-[#FFE3D8] mb-4">Deepfake Forensics Architecture</h3>
//                   <p className="text-[#E3B6B1] text-lg leading-relaxed mb-8">
//                     Engineered a highly specialized ablation pipeline combining local texture extraction (CNNs) with global contextual reasoning (ViTs). Analyzed synthetic manipulations across a massive scale to establish a defensive AI baseline.
//                   </p>
//                   <a href="https://github.com/Abu-Sameer-66/Deepfake-Forensics-SOTA-Hybrid" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-[#150016] bg-[#E3B6B1] hover:bg-[#FFE3D8] px-8 py-4 rounded-xl font-black transition-all shadow-[0_0_20px_rgba(227,182,177,0.4)]">
//                     <Github className="w-6 h-6"/> View Notebook
//                   </a>
//                 </div>
                
//                 <div className="lg:col-span-3 grid grid-cols-2 gap-4">
//                   {/* Data Metrics Grid */}
//                   <div className="bg-[#150016]/80 border border-[#522C5D] p-6 rounded-2xl flex flex-col justify-center relative overflow-hidden">
//                     <Database className="absolute right-4 top-4 w-12 h-12 text-[#522C5D] opacity-20"/>
//                     <span className="text-[#845162] font-mono text-sm font-bold uppercase mb-2">Dataset Scale</span>
//                     <span className="text-3xl lg:text-4xl font-black text-[#FFE3D8]">140,000<span className="text-lg text-[#E3B6B1]"> imgs</span></span>
//                   </div>
//                   <div className="bg-[#150016]/80 border border-[#522C5D] p-6 rounded-2xl flex flex-col justify-center relative overflow-hidden">
//                     <Workflow className="absolute right-4 top-4 w-12 h-12 text-[#522C5D] opacity-20"/>
//                     <span className="text-[#845162] font-mono text-sm font-bold uppercase mb-2">Core Pipeline</span>
//                     <span className="text-2xl lg:text-3xl font-black text-[#FFE3D8]">ResNet-ViT</span>
//                   </div>
//                   <div className="bg-gradient-to-br from-[#522C5D] to-[#29104A] border border-[#E3B6B1] p-6 rounded-2xl flex flex-col justify-center relative overflow-hidden shadow-[0_0_30px_rgba(227,182,177,0.2)]">
//                     <Target className="absolute right-4 top-4 w-16 h-16 text-[#E3B6B1] opacity-20"/>
//                     <span className="text-[#FFE3D8] font-mono text-sm font-bold uppercase mb-2">SOTA Precision</span>
//                     <span className="text-4xl lg:text-5xl font-black text-[#FFE3D8]">99.92%</span>
//                   </div>
//                   <div className="bg-[#150016]/80 border border-[#522C5D] p-6 rounded-2xl flex flex-col justify-center relative overflow-hidden">
//                     <Activity className="absolute right-4 top-4 w-12 h-12 text-[#522C5D] opacity-20"/>
//                     <span className="text-[#845162] font-mono text-sm font-bold uppercase mb-2">F1 Score Max</span>
//                     <span className="text-3xl lg:text-4xl font-black text-[#FFE3D8]">99.39%</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* EXPERIMENT 02: Satellite */}
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-[#29104A]/30 backdrop-blur-xl border border-[#522C5D] rounded-[40px] p-8 md:p-12 relative overflow-hidden group hover:border-[#E3B6B1]/50 transition-colors duration-500 shadow-[0_20px_60px_rgba(41,16,74,0.5)]">
//               <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-[0.03] group-hover:scale-110 transition-transform duration-700 pointer-events-none"><Satellite size={500} /></div>
              
//               <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E3B6B1]/20 border border-[#E3B6B1] text-[#FFE3D8] font-mono text-xs font-bold mb-8 rounded-full">
//                 <span className="w-2 h-2 rounded-full bg-[#FFE3D8] animate-pulse"></span> EXPERIMENT 02
//               </div>
              
//               <div className="grid lg:grid-cols-5 gap-12">
//                 <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 order-2 lg:order-1">
//                   <div className="bg-[#150016]/80 border border-[#522C5D] p-6 rounded-2xl flex flex-col justify-center relative">
//                     <span className="text-[#845162] font-mono text-sm font-bold uppercase mb-2">Data Space</span>
//                     <span className="text-2xl font-black text-[#FFE3D8]">13-Channel EuroSAT</span>
//                   </div>
//                   <div className="bg-[#150016]/80 border border-[#522C5D] p-6 rounded-2xl flex flex-col justify-center relative">
//                     <span className="text-[#845162] font-mono text-sm font-bold uppercase mb-2">Engine</span>
//                     <span className="text-2xl font-black text-[#FFE3D8]">HAM + ViT Hybrid</span>
//                   </div>
//                   <div className="bg-[#150016]/80 border border-[#522C5D] p-6 rounded-2xl flex flex-col justify-center relative">
//                     <span className="text-[#845162] font-mono text-sm font-bold uppercase mb-2">Baseline (ANN Failed)</span>
//                     <span className="text-3xl font-black text-[#845162]">64.00%</span>
//                   </div>
//                   <div className="bg-gradient-to-br from-[#522C5D] to-[#29104A] border border-[#E3B6B1] p-6 rounded-2xl flex flex-col justify-center relative shadow-[0_0_30px_rgba(227,182,177,0.2)]">
//                     <span className="text-[#FFE3D8] font-mono text-sm font-bold uppercase mb-2">SOTA Leap</span>
//                     <span className="text-4xl font-black text-[#FFE3D8] drop-shadow-md">89.00%+</span>
//                   </div>
//                 </div>

//                 <div className="lg:col-span-2 order-1 lg:order-2">
//                   <h3 className="text-4xl font-black text-[#FFE3D8] mb-4">Multi-Spectral Satellite Intelligence</h3>
//                   <p className="text-[#E3B6B1] text-lg leading-relaxed mb-8">
//                     Transitioned from standard 3-channel RGB to complex 13-channel data. Deployed Hybrid Attention Mechanism (HAM) and ViTs to classify Earth Observation data, detecting minute land-use shifts invisible to the human eye.
//                   </p>
//                   <a href="https://github.com/Abu-Sameer-66/SOTA-Multispectral-Satellite-Forensics-EuroSAT" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-[#150016] bg-[#E3B6B1] hover:bg-[#FFE3D8] px-8 py-4 rounded-xl font-black transition-all shadow-[0_0_20px_rgba(227,182,177,0.4)]">
//                     <Github className="w-6 h-6"/> View Architecture
//                   </a>
//                 </div>
//               </div>
//             </motion.div>

//             {/* EXPERIMENT 03: Medical / Chest X-Ray */}
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-[#29104A]/30 backdrop-blur-xl border border-[#522C5D] rounded-[40px] p-8 md:p-12 relative overflow-hidden group hover:border-[#E3B6B1]/50 transition-colors duration-500 shadow-[0_20px_60px_rgba(41,16,74,0.5)]">
//               <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-[0.03] group-hover:scale-110 transition-transform duration-700 pointer-events-none"><Stethoscope size={500} /></div>
              
//               <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#522C5D]/50 border border-[#845162] text-[#FFE3D8] font-mono text-xs font-bold mb-8 rounded-full">
//                 <span className="w-2 h-2 rounded-full bg-[#FFE3D8] animate-pulse"></span> EXPERIMENT 03
//               </div>
              
//               <div className="grid lg:grid-cols-5 gap-12">
//                 <div className="lg:col-span-2">
//                   <h3 className="text-4xl font-black text-[#FFE3D8] mb-4">Chest X-Ray ViT Ablation</h3>
//                   <p className="text-[#E3B6B1] text-lg leading-relaxed mb-8">
//                     Conducted a rigorous ablation study on Vision Transformers applied to high-stakes medical imaging. Analyzed layer dropouts, patch sizes, and attention heads to optimize precision in automated pulmonary disease detection.
//                   </p>
//                   <a href="https://github.com/Abu-Sameer-66/Chest-XRay-Ablation-ViT" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-[#150016] bg-[#E3B6B1] hover:bg-[#FFE3D8] px-8 py-4 rounded-xl font-black transition-all shadow-[0_0_20px_rgba(227,182,177,0.4)]">
//                     <Github className="w-6 h-6"/> Explore Codebase
//                   </a>
//                 </div>
                
//                 <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <div className="bg-[#150016]/80 border border-[#522C5D] p-6 rounded-2xl flex flex-col justify-center md:col-span-2 relative">
//                     <span className="text-[#845162] font-mono text-sm font-bold uppercase mb-2">Primary Domain</span>
//                     <span className="text-2xl font-black text-[#FFE3D8]">Healthcare AI Forensics</span>
//                   </div>
//                   <div className="bg-[#150016]/80 border border-[#522C5D] p-6 rounded-2xl flex flex-col justify-center text-center relative">
//                     <Layers className="w-8 h-8 text-[#E3B6B1] mx-auto mb-2"/>
//                     <span className="text-[#FFE3D8] font-bold">XAI Maps</span>
//                   </div>
//                   <div className="bg-gradient-to-br from-[#522C5D] to-[#29104A] border border-[#E3B6B1] p-6 rounded-2xl flex flex-col justify-center md:col-span-3 relative shadow-[0_0_30px_rgba(227,182,177,0.2)]">
//                     <span className="text-[#FFE3D8] font-mono text-sm font-bold uppercase mb-2">Technical Focus</span>
//                     <span className="text-3xl font-black text-[#FFE3D8]">Explainable AI (Grad-CAM) & ViT Attention</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           5. PROFESSIONAL EXPERIENCE (Split Part 1)
//           ========================================= */}
//       <section className="relative z-10 py-32 px-6 border-b border-[#522C5D]/30">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-black text-[#FFE3D8] mb-20 flex items-center justify-center gap-4 text-center">
//             <Briefcase className="w-10 h-10 text-[#E3B6B1]" /> Professional Architecture
//           </h2>

//           <div className="relative border-l-4 border-[#522C5D] ml-4 md:ml-[50%] space-y-20">
//             {[
//               { title: "Open Source Research Contributor (GSoC 2026)", org: "DeepChem Ecosystem", desc: "Integrating OLMo-7B into DeepChem. Designed a 12-week TorchModel integration roadmap and optimized validation pipelines." },
//               { title: "Lead Deep Learning Researcher", org: "AI Research Lab (IUB)", desc: "Developing high-precision defensive AI. Achieved 99.92% precision on Deepfake Forensics. Designed pipelines for Google Scholar publications." },
//               { title: "AI Solutions Architect & Consultant", org: "Freelance", desc: "Translating complex technical scripts into high-value business assets. Designing custom Computer Vision and NLP pipelines (P2D)." },
//               { title: "Technical Operations & Strategist", org: "Al-Quresh Motors", desc: "Implementing Real-World P2D by integrating Data Science into local logistics. Optimized supply chain precision." }
//             ].map((exp, idx) => (
//               <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className={`relative pl-10 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right md:-left-full" : "md:pl-16"}`}>
//                 <div className={`absolute top-0 w-6 h-6 bg-[#E3B6B1] rounded-full border-4 border-[#150016] shadow-[0_0_15px_rgba(227,182,177,0.8)] ${idx % 2 === 0 ? "-left-[14px] md:left-auto md:-right-[14px]" : "-left-[14px]"}`}></div>
//                 <div className="bg-[#29104A]/50 backdrop-blur-md p-8 rounded-3xl border border-[#522C5D] hover:border-[#E3B6B1] hover:shadow-[0_20px_50px_rgba(82,44,93,0.6)] transition-all transform-gpu hover:-translate-y-2">
//                   <h3 className="text-2xl font-black text-[#FFE3D8] mb-3">{exp.title}</h3>
//                   <div className={`mb-5 ${idx % 2 === 0 ? "md:justify-end" : ""} flex`}>
//                     <p className="text-[#E3B6B1] font-mono text-sm font-bold bg-[#150016] border border-[#522C5D] px-4 py-2 rounded-lg">{exp.org}</p>
//                   </div>
//                   <p className="text-[#E3B6B1] leading-relaxed text-lg">{exp.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           6. ACADEMIC JOURNEY (Split Part 2)
//           ========================================= */}
//       <section className="relative z-10 py-32 px-6 bg-[#29104A]/10 border-b border-[#522C5D]/30">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-black text-[#FFE3D8] mb-16 flex items-center justify-center gap-4 text-center">
//             <GraduationCap className="w-10 h-10 text-[#E3B6B1]" /> Academic Foundation
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="bg-gradient-to-br from-[#522C5D]/60 to-[#29104A]/60 p-10 rounded-[40px] border border-[#E3B6B1]/40 relative overflow-hidden group hover:border-[#E3B6B1] transition-all shadow-[0_20px_50px_rgba(41,16,74,0.5)]">
//               <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-125 transition-transform duration-700"><GraduationCap className="w-80 h-80 text-[#FFE3D8]" /></div>
//               <div className="inline-block px-5 py-2 bg-[#150016] text-[#E3B6B1] text-sm font-bold font-mono rounded-xl mb-6 shadow-inner border border-[#522C5D]">OCT 2023 - MAY 2027</div>
//               <h3 className="text-4xl font-black text-[#FFE3D8] mb-4 relative z-10">BS in Data Science</h3>
//               <p className="text-[#E3B6B1] text-xl mb-8 relative z-10 font-bold">The Islamia University of Bahawalpur</p>
//               <div className="flex flex-wrap gap-4 mb-8 font-mono text-sm text-[#FFE3D8] relative z-10">
//                 <span className="bg-[#150016] border border-[#E3B6B1]/50 px-5 py-3 rounded-xl shadow-lg">CGPA: <span className="font-black text-[#E3B6B1]">3+ / 4.0</span></span>
//                 <span className="bg-[#150016] border border-[#E3B6B1]/50 px-5 py-3 rounded-xl shadow-lg font-black text-[#E3B6B1]">Student Researcher</span>
//               </div>
//               <p className="text-[#FFE3D8] leading-relaxed relative z-10 font-medium">Core: DSA, Machine Learning, Deep Learning, Advanced Statistics, Linear Algebra, Business Process Analysis.</p>
//             </motion.div>

//             <div className="space-y-8 flex flex-col justify-between">
//               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#29104A]/60 p-8 rounded-3xl border border-[#522C5D] hover:border-[#E3B6B1]/50 transition-colors h-full flex flex-col justify-center">
//                 <div className="inline-block px-4 py-1.5 w-max bg-[#150016] text-[#E3B6B1] text-xs font-bold font-mono rounded-lg mb-4 border border-[#522C5D]">APR 2021 - MAY 2023</div>
//                 <h3 className="text-2xl font-bold text-[#FFE3D8] mb-2">Intermediate (Pre-Engineering)</h3>
//                 <p className="text-[#845162] font-bold mb-4">Punjab Group of Colleges Bahawalpur</p>
//                 <p className="text-[#E3B6B1] leading-relaxed">Subjects: Physics, Chemistry, Math. Activities: STEP Member, ECAT prep.</p>
//               </motion.div>

//               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#29104A]/60 p-8 rounded-3xl border border-[#522C5D] hover:border-[#E3B6B1]/50 transition-colors h-full flex flex-col justify-center relative overflow-hidden">
//                 <div className="absolute right-0 top-0 w-32 h-32 bg-[radial-gradient(circle,_rgba(227,182,177,0.1),_transparent_70%)]"></div>
//                 <div className="inline-block px-4 py-1.5 w-max bg-[#150016] text-[#E3B6B1] text-xs font-bold font-mono rounded-lg mb-4 border border-[#522C5D]">APR 2019 - MAY 2021</div>
//                 <h3 className="text-2xl font-bold text-[#FFE3D8] mb-2">Matriculation (Science)</h3>
//                 <p className="text-[#845162] font-bold mb-6">Govt Technical High School Bahawalpur</p>
//                 <div className="inline-block w-max px-6 py-3 border-2 border-[#E3B6B1] text-[#FFE3D8] text-lg font-black font-mono rounded-xl bg-[#522C5D]/30 shadow-[0_0_20px_rgba(227,182,177,0.2)]">1037 / 1100 Marks</div>
//                 <p className="text-sm font-mono text-[#E3B6B1] mt-3">Top 1% Elite Cohort</p>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           7. PROJECTS GRID: Building Intelligence
//           ========================================= */}
//       <section id="projects" className="relative z-10 py-32 px-6 bg-[#150016] border-b border-[#522C5D]/50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-24">
//             <h2 className="text-5xl md:text-7xl font-black text-[#FFE3D8] mb-6 uppercase tracking-tighter drop-shadow-lg">
//               Building Intelligence <br/><span className="text-[#E3B6B1]">One Model at a Time.</span>
//             </h2>
//             <p className="text-[#E3B6B1] text-xl font-light max-w-2xl mx-auto">
//               Translating complex architectures into scalable, high-impact digital systems.
//             </p>
//           </div>

//           {/* GSoC Research Projects */}
//           <div className="mb-24">
//             <h3 className="text-3xl font-black text-[#FFE3D8] mb-10 border-b border-[#522C5D] pb-4 flex items-center gap-4"><Layers className="w-8 h-8 text-[#E3B6B1]"/> GSoC Research Models</h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-[1000px]">
//               {gsocProjects.map((project, idx) => (
//                 <motion.a key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} href={project.link} target="_blank" rel="noreferrer" className="bg-[#29104A]/40 border border-[#522C5D] p-8 rounded-3xl hover:border-[#E3B6B1]/80 hover:bg-[#522C5D]/20 hover:shadow-[0_20px_40px_rgba(82,44,93,0.6)] transition-all duration-300 group flex flex-col justify-between h-full transform-gpu">
//                   <div>
//                     <div className="flex justify-between items-start mb-6">
//                       <FolderGit2 className="w-10 h-10 text-[#E3B6B1] group-hover:scale-110 transition-transform" />
//                       <ExternalLink className="w-5 h-5 text-[#845162] group-hover:text-[#FFE3D8] transition-colors" />
//                     </div>
//                     <h4 className="text-xl font-bold text-[#FFE3D8] mb-4 leading-tight group-hover:text-[#E3B6B1] transition-colors">{project.name}</h4>
//                     <p className="text-sm text-[#E3B6B1] leading-relaxed mb-8">{project.desc}</p>
//                   </div>
//                   <div className="flex flex-wrap gap-2 mt-auto">
//                     {project.tags.map(t => <span key={t} className="text-xs font-bold font-mono px-3 py-1.5 bg-[#150016] border border-[#522C5D] rounded-lg text-[#E3B6B1]">{t}</span>)}
//                   </div>
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Core AI Projects */}
//           <div className="mb-24">
//             <h3 className="text-3xl font-black text-[#FFE3D8] mb-10 border-b border-[#522C5D] pb-4 flex items-center gap-4"><Database className="w-8 h-8 text-[#E3B6B1]"/> Core AI & Forensics</h3>
//             <div className="grid md:grid-cols-2 gap-8 perspective-[1000px]">
//               {coreProjects.map((project, idx) => (
//                 <motion.a key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} href={project.link} target="_blank" rel="noreferrer" className="bg-gradient-to-br from-[#29104A]/40 to-[#150016] border border-[#522C5D] p-10 rounded-3xl hover:border-[#E3B6B1] hover:shadow-[0_20px_50px_rgba(227,182,177,0.15)] transition-all duration-500 group flex flex-col justify-between h-full transform-gpu">
//                   <div>
//                     <div className="flex justify-between items-start mb-6">
//                       <TerminalSquare className="w-10 h-10 text-[#E3B6B1] group-hover:scale-110 transition-transform" />
//                       <ExternalLink className="w-6 h-6 text-[#845162] group-hover:text-[#FFE3D8] transition-colors" />
//                     </div>
//                     <h4 className="text-2xl font-black text-[#FFE3D8] mb-4 group-hover:text-[#E3B6B1] transition-colors">{project.name}</h4>
//                     <p className="text-[#E3B6B1] text-lg leading-relaxed mb-8">{project.desc}</p>
//                   </div>
//                   <div className="flex flex-wrap gap-3 mt-auto">
//                     {project.tags.map(t => <span key={t} className="text-sm font-bold font-mono px-4 py-2 bg-[#522C5D]/40 border border-[#845162] rounded-xl text-[#FFE3D8]">{t}</span>)}
//                   </div>
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Additional Projects */}
//           <div>
//             <h3 className="text-2xl font-black text-[#FFE3D8] mb-8 border-b border-[#522C5D] pb-4 flex items-center gap-3"><Code2 className="w-6 h-6 text-[#845162]"/> Data Analytics & Automation Scripts</h3>
//             <div className="grid md:grid-cols-3 gap-6">
//               {additionalProjects.map((project, idx) => (
//                 <motion.a key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} href={project.link} target="_blank" rel="noreferrer" className="bg-[#29104A]/20 border border-[#522C5D] p-6 rounded-2xl hover:bg-[#522C5D]/30 transition-all group">
//                   <h4 className="text-lg font-bold text-[#FFE3D8] mb-2 group-hover:text-[#E3B6B1] transition-colors">{project.name}</h4>
//                   <p className="text-sm text-[#E3B6B1]">{project.desc}</p>
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* =========================================
//           8. MEDIUM / KNOWLEDGE SHARING (BOLD & PROMINENT)
//           ========================================= */}
//       <section className="relative z-10 py-32 px-6 bg-gradient-to-r from-[#522C5D]/30 via-[#150016] to-[#522C5D]/30 border-b border-[#522C5D]/50">
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="bg-[#29104A] border-4 border-[#E3B6B1] p-10 md:p-20 rounded-[50px] shadow-[0_30px_100px_rgba(227,182,177,0.2)] transform-gpu hover:scale-105 transition-transform duration-700 relative overflow-hidden">
            
//             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
            
//             <BookOpen className="w-20 h-20 text-[#FFE3D8] mx-auto mb-8 relative z-10" />
//             <h2 className="text-5xl md:text-7xl font-black text-[#FFE3D8] mb-8 uppercase tracking-tighter drop-shadow-2xl relative z-10">
//               Knowledge is <span className="text-[#E3B6B1]">Power.</span>
//             </h2>
//             <p className="text-[#E3B6B1] text-xl md:text-3xl font-light mb-12 leading-relaxed max-w-4xl mx-auto relative z-10">
//               Read my highly acclaimed article breaking down the reality of AI in the medical field. A deep dive into metrics that actually matter vs marketing hype.
//             </p>
//             <a href="https://medium.com/@sameerdataanalyst66/the-accuracy-paradox-why-95-accuracy-in-medical-ai-is-often-a-lie-7234156ee326" target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 bg-[#FFE3D8] text-[#150016] px-12 py-6 rounded-full font-black text-2xl hover:bg-[#E3B6B1] hover:shadow-[0_0_50px_rgba(255,227,216,0.8)] transition-all relative z-10">
//               <span className="animate-pulse">Read on Medium</span> <ExternalLink className="w-8 h-8" />
//             </a>
//           </motion.div>
//         </div>
//       </section>

//       {/* =========================================
//           9 & 10. COMMUNITY, OS, & CREDENTIALS
//           ========================================= */}
//       <section className="relative z-10 py-32 px-6 bg-[#150016] border-b border-[#522C5D]/50">
//         <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          
//           {/* Metrics & OS */}
//           <div className="lg:col-span-5">
//             <h2 className="text-4xl font-black text-[#FFE3D8] mb-10 border-b border-[#522C5D] pb-4">
//               Community & OS
//             </h2>
//             <p className="text-[#E3B6B1] text-lg mb-10 leading-relaxed">
//               Active contributor to the public ecosystem. Dedicated to democratizing deep learning through open-source collaborations and building a strong network of AI professionals globally.
//             </p>
//             <div className="grid grid-cols-2 gap-6">
//               <div className="bg-[#29104A]/50 border border-[#522C5D] p-8 rounded-3xl text-center shadow-lg hover:border-[#E3B6B1] transition-colors group">
//                 <Github className="w-10 h-10 text-[#E3B6B1] mx-auto mb-4 group-hover:scale-110 transition-transform" />
//                 <h4 className="text-4xl font-black text-[#FFE3D8] mb-2">650+</h4>
//                 <p className="text-sm font-bold font-mono text-[#E3B6B1] uppercase">Commits</p>
//               </div>
//               <div className="bg-[#29104A]/50 border border-[#522C5D] p-8 rounded-3xl text-center shadow-lg hover:border-[#E3B6B1] transition-colors group">
//                 <FolderGit2 className="w-10 h-10 text-[#E3B6B1] mx-auto mb-4 group-hover:scale-110 transition-transform" />
//                 <h4 className="text-4xl font-black text-[#FFE3D8] mb-2">15+</h4>
//                 <p className="text-sm font-bold font-mono text-[#E3B6B1] uppercase">Elite Repos</p>
//               </div>
//               <div className="bg-gradient-to-r from-[#522C5D] to-[#29104A] border border-[#E3B6B1]/50 p-8 rounded-3xl text-center col-span-2 shadow-[0_10px_30px_rgba(82,44,93,0.4)] hover:border-[#FFE3D8] transition-colors group">
//                 <Linkedin className="w-12 h-12 text-[#FFE3D8] mx-auto mb-4 group-hover:scale-110 transition-transform" />
//                 <h4 className="text-5xl font-black text-[#FFE3D8] mb-2">2,200+</h4>
//                 <p className="text-sm font-bold font-mono text-[#E3B6B1] uppercase tracking-widest">LinkedIn Connections</p>
//               </div>
//             </div>
//           </div>

//           {/* Credentials */}
//           <div className="lg:col-span-7">
//             <h2 className="text-4xl font-black text-[#FFE3D8] mb-10 border-b border-[#522C5D] pb-4">
//               Elite Credentials
//             </h2>
//             <div className="grid md:grid-cols-2 gap-6">
//               {certifications.map((cert, idx) => (
//                 <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#29104A]/30 backdrop-blur-md border border-[#522C5D] p-8 rounded-3xl flex flex-col justify-between gap-4 hover:border-[#E3B6B1] hover:shadow-[0_10px_30px_rgba(82,44,93,0.5)] transition-all transform-gpu hover:-translate-y-1">
//                   <div>
//                     <FileText className="w-8 h-8 text-[#E3B6B1] mb-4" />
//                     <h4 className="text-xl font-bold text-[#FFE3D8] mb-2 leading-tight">{cert.title}</h4>
//                     <p className="text-md text-[#845162] font-bold">{cert.issuer}</p>
//                   </div>
//                   <div>
//                     <span className="inline-block mt-4 text-xs font-black font-mono text-[#150016] bg-[#E3B6B1] px-3 py-1.5 rounded-lg w-full text-center truncate">{cert.id}</span>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* =========================================
//           11. CONTACT & END SYSTEM
//           ========================================= */}
//       <footer id="contact" className="relative z-10 pt-40 pb-16 px-6 bg-[#150016] overflow-hidden text-center">
        
//         {/* Cinematic Laser Scanline */}
//         <style dangerouslySetInnerHTML={{__html: `
//           @keyframes scanline { 0% { transform: translateX(-100vw); } 100% { transform: translateX(100vw); } }
//           .animate-scan { animation: scanline 4s ease-in-out infinite; }
//         `}} />
//         <div className="absolute top-0 left-0 w-full h-[3px] overflow-hidden">
//           <div className="w-[600px] h-full bg-gradient-to-r from-transparent via-[#E3B6B1] to-transparent animate-scan shadow-[0_0_40px_rgba(227,182,177,1)]"></div>
//         </div>

//         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-[radial-gradient(ellipse_at_bottom,_rgba(82,44,93,0.4),_transparent_60%)] pointer-events-none"></div>

//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerWrap} className="relative max-w-5xl mx-auto">
          
//           <motion.h2 variants={fadeUp} className="text-6xl md:text-8xl font-black text-[#FFE3D8] mb-10 uppercase tracking-tighter">
//             Let's Engineer <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3B6B1] to-[#845162]">The Future.</span>
//           </motion.h2>

//           <motion.p variants={fadeUp} className="text-[#E3B6B1] text-2xl font-light max-w-3xl mx-auto mb-16 leading-relaxed">
//             If you are building high-end AI architectures, require elite technical strategy, or want to collaborate on global OS research—<strong className="text-[#FFE3D8] font-black">the system is ready.</strong>
//           </motion.p>

//           <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 justify-center mb-24">
//             <a href="mailto:sameersain361@gmail.com" className="px-12 py-6 bg-gradient-to-r from-[#E3B6B1] to-[#845162] text-[#150016] font-black text-xl tracking-widest uppercase hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(227,182,177,0.5)] flex items-center justify-center gap-3 rounded-2xl">
//               <Send className="w-6 h-6" /> Initialize Contact
//             </a>
//             <a href="https://www.upwork.com/freelancers/~016d309ea83d2c431a" target="_blank" rel="noreferrer" className="px-12 py-6 bg-[#150016] border-4 border-[#522C5D] text-[#FFE3D8] font-black text-xl tracking-widest uppercase hover:border-[#E3B6B1] hover:bg-[#29104A] transition-all duration-300 rounded-2xl shadow-lg">
//               Hire on Upwork
//             </a>
//           </motion.div>

//           <div className="w-full border-t border-[#522C5D] pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-mono text-[#E3B6B1]">
//             <p>DESIGNED & ENGINEERED BY <span className="text-[#FFE3D8] font-black">SAMEER NADEEM</span></p>
//             <p className="animate-pulse flex items-center gap-2"><div className="w-3 h-3 bg-[#E3B6B1] rounded-full"></div> SYSTEM ONLINE // P2D INTEGRATION TERMINAL</p>
//           </div>

//         </motion.div>
//       </footer>

//     </main>
//   );
// }


// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   Github, Linkedin, Mail, Code2, Cpu, Database, 
//   Briefcase, GraduationCap, ChevronRight, FolderGit2, 
//   ExternalLink, Beaker, Globe, Award, ShieldCheck, Satellite, 
//   TerminalSquare, Network, BookOpen, Layers, 
//   Fingerprint, Zap, Radar, PlaySquare, FileText, Send, 
//   Stethoscope, Activity, Target, Workflow, Server, MonitorSmartphone
// } from "lucide-react";

// // =========================================
// // DATA ASSETS
// // =========================================

// const coreProjects = [
//   { name: "Deepfake Forensics Hybrid", link: "https://github.com/Abu-Sameer-66/Deepfake-Forensics-SOTA-Hybrid", desc: "SOTA ResNet-Transformer Hybrid. 99.92% precision over 140,000 images.", tags: ["ResNet-18", "Transformers", "Computer Vision"] },
//   { name: "PropVal AI Real Estate", link: "https://github.com/Abu-Sameer-66/PropVal-Property-Valuation--AI-Real-Estate-Engine", desc: "Production-grade AVM using Gradient Boosting for asset valuation.", tags: ["PropTech", "Machine Learning"] },
//   { name: "CogniPath Analytics Engine", link: "https://github.com/Abu-Sameer-66/CogniPath-Analytics-Engine", desc: "AI-driven EdTech engine optimizing academic outcomes via predictive modeling.", tags: ["EdTech", "Scikit-Learn"] },
//   { name: "SpamGuard AI Threat Detection", link: "https://github.com/Abu-Sameer-66/SpamGuard-AI-Threat-Detection", desc: "Enterprise SMS Phishing & Spam Detection using advanced NLP.", tags: ["NLP", "Cybersecurity"] }
// ];

// const gsocProjects = [
//   { name: "Mistral7B-Tox21-Optimization", link: "https://github.com/Abu-Sameer-66/Mistral7B-Tox21-Molecular-Optimization", desc: "Native fine-tuning of Mistral-7B on Tox21 dataset using 4-bit quantization.", tags: ["Tox21", "Quantization"] },
//   { name: "Mistral7B-BACE-Study", link: "https://github.com/Abu-Sameer-66/Mistral7B-BACE-Generalization-Study", desc: "Optimizing Mistral-7B for BACE-1 inhibitor prediction using scaffold-split data.", tags: ["Drug Discovery", "Scaffold-Split"] },
//   { name: "Mistral7B-ClinTox", link: "https://github.com/Abu-Sameer-66/Mistral7B-ClinTox-Study", desc: "LLM Fine-tuning study on the ClinTox dataset for clinical toxicity prediction.", tags: ["Mistral-7B", "LoRA"] },
//   { name: "ChemLLM-Tox-OLMo", link: "https://github.com/Abu-Sameer-66/ChemLLM-Tox-OLMo", desc: "Fine-tuning OLMo-7B with QLoRA for Molecular Toxicity Prediction.", tags: ["OLMo-7B", "DeepChem"] }
// ];

// const certifications = [
//   { title: "The Ultimate Job Ready Data Science Course", issuer: "CodeWithHarry", date: "Feb 20, 2026", id: "CWH-THE-ULTIMATE-JOB-READY-DATA-SCIENCE-COURSE-BMXY6IIK" },
//   { title: "Complete 2026 Python Bootcamp", issuer: "CodeWithHarry", date: "Mar 9, 2026", id: "CWH-COMPLETE-PYTHON-BOOTCAMP-LEARN-PYTHON-FROM-SCRATCH-BMXY6IIK" },
//   { title: "Ultimate Web Development Course 2026", issuer: "Udemy", date: "Feb 20, 2026", id: "UC-2e72fbd0-d45a-487b-bf17-372434c63615" },
//   { title: "Introduction to Data Science in Python", issuer: "DataCamp", date: "May 26, 2025", id: "#40,907,162" },
//   { title: "Complete Prompt Engineering for AI Bootcamp", issuer: "Udemy", date: "In Progress", id: "GPT-5, Midjourney, Veo3 & LangChain" },
//   { title: "Prime AI/ML Batch", issuer: "Apna College", date: "In Progress", id: "Deep Learning, Transformers, Agentic AI" }
// ];

// // =========================================
// // ANIMATION VARIANTS (TABAHI LEVEL)
// // =========================================
// const fadeUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } };
// const staggerWrap = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } };
// const scaleIn = { hidden: { opacity: 0, scale: 0.85, rotateX: 15 }, visible: { opacity: 1, scale: 1, rotateX: 0, transition: { type: "spring", stiffness: 60, damping: 20, duration: 1.2 } } };
// const floatAnimation = { y: [0, -15, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } };
// const letterStagger = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

// export default function Portfolio() {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <main className="min-h-screen bg-[#100012] text-[#FFE3D8] font-sans selection:bg-[#E3B6B1] selection:text-[#100012] overflow-x-hidden">
      
//       {/* 4D CINEMATIC BACKGROUND MESH */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <motion.div 
//           className="absolute w-[800px] h-[800px] rounded-full blur-[250px] opacity-20 bg-[#522C5D]"
//           animate={{ x: mousePos.x - 400, y: mousePos.y - 400 }}
//           transition={{ type: "tween", ease: "linear", duration: 0.1 }}
//         />
//         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,_rgba(41,16,74,0.5),_transparent_70%)] blur-[150px]"></div>
//         <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-[radial-gradient(circle,_rgba(132,81,98,0.2),_transparent_70%)] blur-[180px]"></div>
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
//       </div>

//       {/* =========================================
//           1. HERO SYSTEM / COMMAND CENTER
//           ========================================= */}
//       <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-20">
//         <motion.div initial="hidden" animate="visible" variants={staggerWrap} className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
          
//           {/* PROFILE IMAGE WITH 3D ORBS */}
//           <motion.div variants={scaleIn} className="mb-10 relative group perspective-[1200px]">
//             <div className="absolute inset-0 rounded-full border-2 border-[#522C5D] animate-[spin_8s_linear_infinite] opacity-60"></div>
//             <div className="absolute inset-[-15px] rounded-full border border-dashed border-[#E3B6B1] animate-[spin_12s_linear_infinite_reverse] opacity-30"></div>
//             <div className="w-48 h-48 md:w-60 md:h-60 rounded-full p-2 bg-[#29104A]/60 backdrop-blur-xl shadow-[0_0_80px_rgba(82,44,93,0.6)] z-10 relative overflow-hidden transform-gpu group-hover:rotate-y-12 transition-all duration-700">
//               <img src="/profile.png" alt="Sameer Nadeem" className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=SN&background=29104A&color=FFE3D8&size=256"; }} />
//             </div>
//           </motion.div>

//           <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#150016] border border-[#522C5D] text-[#E3B6B1] font-mono text-sm mb-6 shadow-[0_0_30px_rgba(82,44,93,0.4)] relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E3B6B1]/10 to-transparent animate-[scanline_2s_linear_infinite]"></div>
//             <Radar className="w-4 h-4 animate-pulse text-[#FFE3D8]" /> SYSTEM ONLINE // RESEARCH TERMINAL
//           </motion.div>

//           {/* ANIMATED NAME */}
//           <motion.h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase mb-6 text-[#FFE3D8] drop-shadow-2xl flex flex-wrap justify-center gap-4">
//             {"Sameer".split("").map((char, i) => (
//               <motion.span key={`s-${i}`} variants={letterStagger} className="inline-block hover:text-[#E3B6B1] transition-colors hover:-translate-y-2 duration-300">{char}</motion.span>
//             ))}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3B6B1] to-[#845162] flex">
//               {"Nadeem".split("").map((char, i) => (
//                 <motion.span key={`n-${i}`} variants={letterStagger} className="inline-block hover:-translate-y-2 duration-300">{char}</motion.span>
//               ))}
//             </span>
//           </motion.h1>

//           <motion.div variants={fadeUp} className="flex flex-wrap justify-center items-center gap-4 text-[#E3B6B1] text-sm md:text-lg font-mono font-medium mb-12 max-w-4xl">
//             <span className="px-4 py-1.5 bg-[#29104A]/40 rounded-lg border border-[#522C5D] shadow-md hover:border-[#E3B6B1] transition-colors">AI/ML Engineer</span> 
//             <span className="px-4 py-1.5 bg-[#29104A]/40 rounded-lg border border-[#522C5D] shadow-md hover:border-[#E3B6B1] transition-colors">Data Scientist</span> 
//             <span className="px-4 py-1.5 bg-[#29104A]/40 rounded-lg border border-[#522C5D] shadow-md hover:border-[#E3B6B1] transition-colors">Open Source Contributor</span> 
//             <span className="px-4 py-1.5 bg-[#29104A]/40 rounded-lg border border-[#522C5D] shadow-md hover:border-[#E3B6B1] transition-colors">LLM Fine-Tuning</span> 
//             <span className="px-4 py-1.5 bg-[#29104A]/40 rounded-lg border border-[#522C5D] shadow-md hover:border-[#E3B6B1] transition-colors">P2D Integrator</span>
//           </motion.div>

//           <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 text-[#E3B6B1]">
//             <a href="https://orcid.org/0009-0005-2736-1632" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#150016] border border-[#522C5D] rounded-full hover:bg-[#A6CE39]/20 hover:text-[#A6CE39] hover:border-[#A6CE39] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md font-bold shadow-lg">
//               <span className="text-xl font-black font-serif italic">iD</span> ORCID
//             </a>
//             <a href="https://www.kaggle.com/sameernadeem66" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#150016] border border-[#522C5D] rounded-full hover:bg-[#20BEFF]/20 hover:text-[#20BEFF] hover:border-[#20BEFF] hover:-translate-y-1 transition-all duration-300 backdrop-blur-md font-bold shadow-lg">
//               <span className="text-xl font-black">k</span> Kaggle
//             </a>
//             {[
//               { icon: <Github />, link: "https://github.com/Abu-Sameer-66", color: "hover:text-white hover:border-white hover:bg-white/10" },
//               { icon: <Linkedin />, link: "https://www.linkedin.com/in/sameer-nadeem-66339a357/", color: "hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10" },
//               { icon: <BookOpen />, link: "https://medium.com/@sameerdataanalyst66", color: "hover:text-white hover:border-white hover:bg-white/10" },
//               { icon: <Mail />, link: "mailto:sameersain361@gmail.com", color: "hover:text-[#EA4335] hover:border-[#EA4335] hover:bg-[#EA4335]/10" }
//             ].map((social, idx) => (
//               <a key={idx} href={social.link} target="_blank" rel="noreferrer" className={`p-3 bg-[#150016] border border-[#522C5D] rounded-full hover:-translate-y-1 transition-all duration-300 backdrop-blur-md shadow-lg ${social.color}`}>
//                 {social.icon}
//               </a>
//             ))}
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* =========================================
//           2. IDENTITY & MISSION (EXPANDED & ANIMATED)
//           ========================================= */}
//       <section className="relative z-10 py-32 px-6 bg-gradient-to-b from-transparent to-[#29104A]/10 border-y border-[#522C5D]/30">
//         <div className="max-w-7xl mx-auto">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerWrap} className="grid lg:grid-cols-12 gap-16 items-center">
            
//             <motion.div variants={fadeUp} className="lg:col-span-7">
//               <div className="inline-block px-4 py-2 bg-[#29104A] border border-[#E3B6B1] text-[#E3B6B1] font-mono text-xs rounded-full mb-6 font-bold shadow-[0_0_15px_rgba(227,182,177,0.3)]">
//                 /// PROTOCOL: ARCHITECT
//               </div>
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#FFE3D8] mb-8 leading-tight">
//                 Bridging the Gap Between <br/>
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3B6B1] to-[#845162]">Theory & Production.</span>
//               </h2>
//               <div className="space-y-6 text-[#E3B6B1] text-lg font-light leading-relaxed">
//                 <p>
//                   I am a rigorous AI/ML Engineer and Data Scientist driven by the pursuit of precision. My expertise lies in synthesizing cutting-edge academic research—from custom Vision Transformers to deeply optimized LLMs—and architecting them into robust, scalable digital infrastructures. 
//                 </p>
//                 <p>
//                   I don't just build models; I engineer <strong className="text-[#FFE3D8] font-bold">Physical-to-Digital (P2D) integration systems</strong>. Whether it’s optimizing supply chain logistics through predictive analytics or developing state-of-the-art Deepfake Forensics, my mission is to extract actionable intelligence from chaotic, real-world data and deploy it into high-impact business environments.
//                 </p>
//                 <div className="mt-8 flex gap-4">
//                   <div className="h-1 flex-1 bg-gradient-to-r from-[#522C5D] to-transparent rounded-full"></div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div variants={scaleIn} animate={floatAnimation} className="lg:col-span-5 relative perspective-[1200px]">
//               <div className="absolute inset-0 bg-[#E3B6B1] blur-[80px] opacity-10 rounded-full animate-pulse"></div>
//               <div className="bg-[#100012]/80 backdrop-blur-xl border border-[#522C5D] p-10 rounded-3xl shadow-[0_30px_80px_rgba(41,16,74,0.9)] transform-gpu hover:rotate-y-6 hover:rotate-x-6 transition-all duration-700 relative z-10">
//                 <h3 className="text-[#E3B6B1] font-mono text-sm tracking-widest uppercase mb-6 border-b border-[#522C5D] pb-3 flex items-center gap-2"><Cpu className="w-5 h-5"/> Architectural Philosophy</h3>
//                 <p className="text-2xl font-serif italic text-[#FFE3D8] leading-snug">
//                   "Algorithms are merely thoughts. Engineering makes them reality. I translate the complexity of mathematical research into the elegance of production-grade systems."
//                 </p>
//                 <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#522C5D] pt-6">
//                   <div>
//                     <span className="block text-3xl font-black text-[#FFE3D8]">99.9%</span>
//                     <span className="text-xs font-mono text-[#E3B6B1]">SOTA Precision Hit</span>
//                   </div>
//                   <div>
//                     <span className="block text-3xl font-black text-[#FFE3D8]">140K+</span>
//                     <span className="text-xs font-mono text-[#E3B6B1]">Data Points Handled</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//           </motion.div>
//         </div>
//       </section>

//       {/* =========================================
//           3. DEEP TECH ARSENAL (TABAHI UPDATE)
//           ========================================= */}
//       <section className="relative z-10 py-32 px-6 border-b border-[#522C5D]/30 overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
//             <h2 className="text-5xl md:text-6xl font-black text-[#FFE3D8] flex items-center justify-center gap-4 mb-4 drop-shadow-xl">
//               <Server className="w-12 h-12 text-[#E3B6B1]" /> Deep Tech Arsenal
//             </h2>
//             <p className="text-[#E3B6B1] text-xl font-light">The foundational stack driving my 4D digital architecture.</p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[2000px]">
            
//             {/* 1. Specializations */}
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="bg-gradient-to-br from-[#29104A] to-[#100012] p-[2px] rounded-3xl group transform-gpu hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(82,44,93,0.8)] transition-all duration-500">
//               <div className="bg-[#100012]/95 backdrop-blur-xl h-full p-8 rounded-[22px] group-hover:bg-[#150016] transition-colors relative overflow-hidden flex flex-col">
//                 <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-125 transition-transform duration-1000"><TerminalSquare className="w-64 h-64 text-[#E3B6B1]"/></div>
//                 <h3 className="text-2xl font-black mb-6 text-[#FFE3D8] flex items-center gap-3 relative z-10 border-b border-[#522C5D] pb-4"><Layers className="w-6 h-6 text-[#E3B6B1]"/> Intelligence Core</h3>
//                 <div className="flex flex-wrap gap-2.5 relative z-10">
//                   {['Deep Learning', 'LLM Fine-Tuning', 'DBMS & DSA', 'Computer Vision', 'Statistics & Probability', 'Advanced Statistics', 'ANN, CNN & Transformers', 'Business Intelligence', 'Data Warehouses', 'Business Process Analysis'].map(t => (
//                     <span key={t} className="px-3 py-1.5 bg-[#29104A]/60 border border-[#522C5D] text-[#FFE3D8] text-xs font-bold rounded-lg shadow-sm hover:border-[#E3B6B1] hover:bg-[#522C5D]/40 transition-colors cursor-default">{t}</span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//             {/* 2. Core Stack & Libraries */}
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.1 }} variants={scaleIn} className="bg-gradient-to-bl from-[#522C5D] to-[#100012] p-[2px] rounded-3xl group transform-gpu hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(82,44,93,0.8)] transition-all duration-500">
//                <div className="bg-[#100012]/95 backdrop-blur-xl h-full p-8 rounded-[22px] group-hover:bg-[#150016] transition-colors relative overflow-hidden flex flex-col">
//                 <div className="absolute -left-10 -top-10 opacity-5 group-hover:rotate-45 transition-transform duration-1000"><Database className="w-64 h-64 text-[#E3B6B1]"/></div>
//                 <h3 className="text-2xl font-black mb-6 text-[#FFE3D8] flex items-center gap-3 relative z-10 border-b border-[#522C5D] pb-4"><Code2 className="w-6 h-6 text-[#E3B6B1]"/> Syntax & Libraries</h3>
//                 <div className="flex flex-col gap-3 font-mono text-sm relative z-10">
//                   {['Python (Advanced)', 'PyTorch / TensorFlow', 'Scikit-Learn / Pandas / NumPy', 'Matplotlib / Seaborn', 'SQL / C++ (Core Logic)', 'JavaScript / TypeScript'].map(t => (
//                     <div key={t} className="flex items-center gap-3 px-4 py-3 bg-[#150016] border border-[#522C5D] text-[#E3B6B1] rounded-xl shadow-lg hover:border-[#E3B6B1] transition-colors group/item">
//                       <div className="w-1.5 h-1.5 rounded-full bg-[#845162] group-hover/item:bg-[#E3B6B1]"></div> {t}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//             {/* 3. Workstations */}
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, delay: 0.2 }} variants={scaleIn} className="bg-gradient-to-tr from-[#845162]/50 to-[#100012] p-[2px] rounded-3xl md:col-span-2 lg:col-span-1 group transform-gpu hover:-translate-y-4 hover:shadow-[0_40px_80px_rgba(82,44,93,0.8)] transition-all duration-500">
//                <div className="bg-[#100012]/95 backdrop-blur-xl h-full p-8 rounded-[22px] group-hover:bg-[#150016] transition-colors relative overflow-hidden flex flex-col">
//                 <div className="absolute -right-10 top-1/2 -translate-y-1/2 opacity-5 group-hover:-translate-x-10 transition-transform duration-1000"><MonitorSmartphone className="w-64 h-64 text-[#E3B6B1]"/></div>
//                 <h3 className="text-2xl font-black mb-6 text-[#FFE3D8] flex items-center gap-3 relative z-10 border-b border-[#522C5D] pb-4"><Workflow className="w-6 h-6 text-[#E3B6B1]"/> Environments</h3>
//                 <div className="grid grid-cols-2 gap-3 relative z-10">
//                   {['Google Colab Pro', 'Jupyter Lab', 'VS Code', 'Kaggle Kernels', 'Anaconda', 'Git / GitHub CLI'].map(t => (
//                     <div key={t} className="px-3 py-4 bg-[#29104A]/30 border border-[#522C5D] text-[#FFE3D8] rounded-xl text-center text-xs font-bold shadow-md hover:border-[#E3B6B1] hover:bg-[#522C5D]/40 transition-colors flex flex-col items-center justify-center gap-2 cursor-default">
//                       {t}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           4. DEEP LEARNING LABORATORY (HEAVY ANIMATIONS)
//           ========================================= */}
//       <section className="relative z-10 py-32 px-6 bg-[#150016] border-b border-[#522C5D]/30 overflow-hidden">
//         {/* Animated Background Gradients for Lab */}
//         <div className="absolute top-1/3 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E3B6B1]/20 to-transparent"></div>
//         <div className="absolute bottom-1/3 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#845162]/20 to-transparent"></div>

//         <div className="max-w-6xl mx-auto relative z-10">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-24">
//             <h2 className="text-5xl md:text-7xl font-black text-[#FFE3D8] mb-6 inline-flex items-center gap-4 drop-shadow-[0_0_30px_rgba(227,182,177,0.3)]">
//               <Beaker className="w-14 h-14 text-[#E3B6B1] animate-bounce" /> The Laboratory
//             </h2>
//             <p className="text-[#E3B6B1] text-xl font-light max-w-3xl mx-auto">
//               Abstracting complex models into purely data-driven, scalable, and high-precision architectures.
//             </p>
//           </motion.div>

//           <div className="space-y-24">
            
//             {/* EXPERIMENT 01: Deepfake */}
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} animate={floatAnimation} className="bg-[#100012]/80 backdrop-blur-2xl border-2 border-[#522C5D] hover:border-[#E3B6B1] rounded-[40px] p-8 md:p-12 relative overflow-visible group transition-colors duration-700 shadow-[0_30px_80px_rgba(41,16,74,0.8)]">
//               {/* Glowing Orb Behind Card */}
//               <div className="absolute -inset-4 bg-gradient-to-r from-[#522C5D] to-[#29104A] rounded-[48px] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10"></div>
              
//               <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-[0.02] group-hover:scale-110 transition-transform duration-1000 pointer-events-none"><ShieldCheck size={500} /></div>
              
//               <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#845162]/30 border border-[#845162] text-[#FFE3D8] font-mono text-xs font-bold mb-8 rounded-full shadow-[0_0_20px_rgba(132,81,98,0.5)]">
//                 <span className="w-2 h-2 rounded-full bg-[#FFE3D8] animate-[ping_1.5s_infinite]"></span> EXPERIMENT 01
//               </div>
              
//               <div className="grid lg:grid-cols-5 gap-12 relative z-10">
//                 <div className="lg:col-span-2">
//                   <h3 className="text-4xl font-black text-[#FFE3D8] mb-4 group-hover:text-[#E3B6B1] transition-colors">Deepfake Forensics Architecture</h3>
//                   <p className="text-[#E3B6B1] text-lg leading-relaxed mb-8">
//                     Engineered a highly specialized ablation pipeline combining local texture extraction (CNNs) with global contextual reasoning (ViTs). Analyzed synthetic manipulations across a massive scale to establish a defensive AI baseline.
//                   </p>
//                   <a href="https://github.com/Abu-Sameer-66/Deepfake-Forensics-SOTA-Hybrid" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-[#100012] bg-[#E3B6B1] hover:bg-[#FFE3D8] px-8 py-4 rounded-xl font-black transition-all shadow-[0_0_30px_rgba(227,182,177,0.5)] hover:-translate-y-1">
//                     <Github className="w-6 h-6"/> View Architecture
//                   </a>
//                 </div>
                
//                 <div className="lg:col-span-3 grid grid-cols-2 gap-4">
//                   <div className="bg-[#150016] border border-[#522C5D] p-6 rounded-2xl flex flex-col justify-center relative overflow-hidden group/box hover:border-[#845162] transition-colors">
//                     <Database className="absolute right-4 top-4 w-12 h-12 text-[#522C5D] opacity-20 group-hover/box:scale-125 transition-transform"/>
//                     <span className="text-[#845162] font-mono text-sm font-bold uppercase mb-2">Dataset Scale</span>
//                     <span className="text-3xl lg:text-4xl font-black text-[#FFE3D8]">140,000<span className="text-lg text-[#E3B6B1]"> imgs</span></span>
//                   </div>
//                   <div className="bg-[#150016] border border-[#522C5D] p-6 rounded-2xl flex flex-col justify-center relative overflow-hidden group/box hover:border-[#845162] transition-colors">
//                     <Workflow className="absolute right-4 top-4 w-12 h-12 text-[#522C5D] opacity-20 group-hover/box:scale-125 transition-transform"/>
//                     <span className="text-[#845162] font-mono text-sm font-bold uppercase mb-2">Core Pipeline</span>
//                     <span className="text-2xl lg:text-3xl font-black text-[#FFE3D8]">ResNet-ViT</span>
//                   </div>
//                   <div className="bg-gradient-to-br from-[#522C5D] to-[#29104A] border border-[#E3B6B1] p-6 rounded-2xl flex flex-col justify-center relative overflow-hidden shadow-[0_0_40px_rgba(227,182,177,0.3)] group/box">
//                     <Target className="absolute right-4 top-4 w-16 h-16 text-[#E3B6B1] opacity-20 group-hover/box:rotate-12 transition-transform"/>
//                     <span className="text-[#FFE3D8] font-mono text-sm font-bold uppercase mb-2">SOTA Precision</span>
//                     <span className="text-4xl lg:text-5xl font-black text-[#FFE3D8]">99.92%</span>
//                   </div>
//                   <div className="bg-[#150016] border border-[#522C5D] p-6 rounded-2xl flex flex-col justify-center relative overflow-hidden group/box hover:border-[#845162] transition-colors">
//                     <Activity className="absolute right-4 top-4 w-12 h-12 text-[#522C5D] opacity-20 group-hover/box:scale-125 transition-transform"/>
//                     <span className="text-[#845162] font-mono text-sm font-bold uppercase mb-2">F1 Score Max</span>
//                     <span className="text-3xl lg:text-4xl font-black text-[#FFE3D8]">99.39%</span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* EXPERIMENT 02: Satellite */}
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} animate={{ y: [0, -10, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 } }} className="bg-[#100012]/80 backdrop-blur-2xl border-2 border-[#522C5D] hover:border-[#E3B6B1] rounded-[40px] p-8 md:p-12 relative overflow-visible group transition-colors duration-700 shadow-[0_30px_80px_rgba(41,16,74,0.8)]">
//                <div className="absolute -inset-4 bg-gradient-to-l from-[#522C5D] to-[#29104A] rounded-[48px] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10"></div>
//               <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-[0.02] group-hover:scale-110 transition-transform duration-1000 pointer-events-none"><Satellite size={500} /></div>
              
//               <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E3B6B1]/20 border border-[#E3B6B1] text-[#FFE3D8] font-mono text-xs font-bold mb-8 rounded-full shadow-[0_0_20px_rgba(227,182,177,0.3)]">
//                 <span className="w-2 h-2 rounded-full bg-[#FFE3D8] animate-[ping_1.5s_infinite]"></span> EXPERIMENT 02
//               </div>
              
//               <div className="grid lg:grid-cols-5 gap-12 relative z-10">
//                 <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 order-2 lg:order-1">
//                   <div className="bg-[#150016] border border-[#522C5D] p-6 rounded-2xl flex flex-col justify-center relative group/box hover:border-[#E3B6B1]/50 transition-colors">
//                     <span className="text-[#845162] font-mono text-sm font-bold uppercase mb-2">Data Space</span>
//                     <span className="text-2xl font-black text-[#FFE3D8]">13-Channel EuroSAT</span>
//                   </div>
//                   <div className="bg-[#150016] border border-[#522C5D] p-6 rounded-2xl flex flex-col justify-center relative group/box hover:border-[#E3B6B1]/50 transition-colors">
//                     <span className="text-[#845162] font-mono text-sm font-bold uppercase mb-2">Engine</span>
//                     <span className="text-2xl font-black text-[#FFE3D8]">HAM + ViT Hybrid</span>
//                   </div>
//                   <div className="bg-[#150016] border border-[#522C5D] p-6 rounded-2xl flex flex-col justify-center relative group/box hover:border-[#E3B6B1]/50 transition-colors">
//                     <span className="text-[#845162] font-mono text-sm font-bold uppercase mb-2">Baseline (ANN)</span>
//                     <span className="text-3xl font-black text-[#845162]">64.00%</span>
//                   </div>
//                   <div className="bg-gradient-to-br from-[#522C5D] to-[#29104A] border border-[#E3B6B1] p-6 rounded-2xl flex flex-col justify-center relative shadow-[0_0_40px_rgba(227,182,177,0.3)] group/box">
//                     <span className="text-[#FFE3D8] font-mono text-sm font-bold uppercase mb-2">SOTA Leap</span>
//                     <span className="text-4xl font-black text-[#FFE3D8] drop-shadow-md">89.00%+</span>
//                   </div>
//                 </div>

//                 <div className="lg:col-span-2 order-1 lg:order-2">
//                   <h3 className="text-4xl font-black text-[#FFE3D8] mb-4 group-hover:text-[#E3B6B1] transition-colors">Multi-Spectral Intelligence</h3>
//                   <p className="text-[#E3B6B1] text-lg leading-relaxed mb-8">
//                     Transitioned from standard 3-channel RGB to complex 13-channel data. Deployed Hybrid Attention Mechanism (HAM) and ViTs to classify Earth Observation data, detecting minute land-use shifts.
//                   </p>
//                   <a href="https://github.com/Abu-Sameer-66/SOTA-Multispectral-Satellite-Forensics-EuroSAT" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-[#100012] bg-[#E3B6B1] hover:bg-[#FFE3D8] px-8 py-4 rounded-xl font-black transition-all shadow-[0_0_30px_rgba(227,182,177,0.5)] hover:-translate-y-1">
//                     <Github className="w-6 h-6"/> Explore Code
//                   </a>
//                 </div>
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           5. PROFESSIONAL ARCHITECTURE
//           ========================================= */}
//       <section className="relative z-10 py-32 px-6 border-b border-[#522C5D]/30">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-6xl font-black text-[#FFE3D8] mb-20 flex items-center justify-center gap-4 text-center">
//             <Briefcase className="w-12 h-12 text-[#E3B6B1]" /> Professional Architecture
//           </motion.h2>

//           <div className="relative border-l-4 border-[#522C5D] ml-4 md:ml-[50%] space-y-24">
//             {[
//               { title: "Open Source Research Contributor (GSoC 2026)", org: "DeepChem Ecosystem", desc: "Spearheading the integration of massive Language Models (OLMo-7B) into DeepChem's architecture. Engineered a rigorous 12-week TorchModel integration roadmap, optimizing validation pipelines and democratizing scientific machine learning globally." },
//               { title: "Technical Operations & Data Strategist", org: "Al-Quresh Motors", desc: "Executing high-level Physical-to-Digital (P2D) integration. Automated complex supply chain logistics, implemented data-driven predictive metrics for inventory, and translated raw business operations into a centralized, intelligent digital dashboard." },
//               { title: "Lead Deep Learning Researcher", org: "AI Research Lab (IUB)", desc: "Developing SOTA defensive AI architectures. Achieved a groundbreaking 99.92% precision in Deepfake Forensics. Designed and structured end-to-end ablation pipelines destined for top-tier Google Scholar publications." },
//               { title: "AI Solutions Architect", org: "Freelance", desc: "Consulting and building custom pipelines for global clients. Specializing in NLP sentiment analysis, Computer Vision defect detection, and transforming complex Python scripts into deployable business assets." }
//             ].map((exp, idx) => (
//               <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className={`relative pl-10 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right md:-left-full" : "md:pl-16"}`}>
//                 <div className={`absolute top-0 w-8 h-8 bg-[#E3B6B1] rounded-full border-4 border-[#100012] shadow-[0_0_20px_rgba(227,182,177,0.8)] ${idx % 2 === 0 ? "-left-[18px] md:left-auto md:-right-[18px]" : "-left-[18px]"}`}></div>
//                 <div className="bg-[#29104A]/30 backdrop-blur-xl p-10 rounded-[30px] border border-[#522C5D] hover:border-[#E3B6B1] hover:shadow-[0_20px_60px_rgba(82,44,93,0.7)] transition-all transform-gpu hover:-translate-y-3 duration-500 group">
//                   <h3 className="text-3xl font-black text-[#FFE3D8] mb-4 group-hover:text-[#E3B6B1] transition-colors">{exp.title}</h3>
//                   <div className={`mb-6 ${idx % 2 === 0 ? "md:justify-end" : ""} flex`}>
//                     <p className="text-[#E3B6B1] font-mono text-sm font-bold bg-[#150016] border border-[#522C5D] px-5 py-2.5 rounded-xl shadow-md">{exp.org}</p>
//                   </div>
//                   <p className="text-[#FFE3D8] font-light leading-relaxed text-lg">{exp.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           6. ACADEMIC FOUNDATION
//           ========================================= */}
//       <section className="relative z-10 py-32 px-6 bg-gradient-to-b from-[#150016] to-[#29104A]/20 border-b border-[#522C5D]/30">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl md:text-6xl font-black text-[#FFE3D8] mb-16 flex items-center justify-center gap-4 text-center">
//             <GraduationCap className="w-12 h-12 text-[#E3B6B1]" /> Academic Foundation
//           </motion.h2>

//           <div className="grid md:grid-cols-2 gap-8 perspective-[1000px]">
//             {/* Degree Card */}
//             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="bg-gradient-to-br from-[#522C5D]/80 to-[#29104A]/80 p-12 rounded-[40px] border border-[#E3B6B1]/40 relative overflow-hidden group hover:border-[#E3B6B1] hover:shadow-[0_30px_80px_rgba(41,16,74,0.8)] transition-all duration-500 transform-gpu">
//               <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-1000"><GraduationCap className="w-96 h-96 text-[#FFE3D8]" /></div>
//               <div className="inline-block px-5 py-2.5 bg-[#100012] text-[#E3B6B1] text-sm font-bold font-mono rounded-xl mb-6 shadow-inner border border-[#522C5D]">OCT 2023 - MAY 2027</div>
//               <h3 className="text-4xl lg:text-5xl font-black text-[#FFE3D8] mb-4 relative z-10">BS in Data Science</h3>
//               <p className="text-[#E3B6B1] text-2xl mb-10 relative z-10 font-bold drop-shadow-md">The Islamia University of Bahawalpur</p>
//               <div className="flex flex-wrap gap-4 mb-8 font-mono text-sm text-[#FFE3D8] relative z-10">
//                 <span className="bg-[#100012]/80 border border-[#E3B6B1]/50 px-6 py-3 rounded-xl shadow-lg backdrop-blur-sm">CGPA: <span className="font-black text-[#E3B6B1] text-lg">3+ / 4.0</span></span>
//                 <span className="bg-[#100012]/80 border border-[#E3B6B1]/50 px-6 py-3 rounded-xl shadow-lg font-black text-[#E3B6B1] backdrop-blur-sm">Active Researcher</span>
//               </div>
//               <p className="text-[#FFE3D8] text-lg leading-relaxed relative z-10 font-light border-t border-[#E3B6B1]/30 pt-6">
//                 Specializing in robust architectural design, mathematical foundations of neural networks, and scalable data warehousing. Engaged in high-level university research groups.
//               </p>
//             </motion.div>

//             {/* Previous Education */}
//             <div className="space-y-8 flex flex-col justify-between">
//               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#29104A]/40 p-10 rounded-3xl border border-[#522C5D] hover:border-[#E3B6B1]/50 hover:bg-[#522C5D]/20 transition-all duration-300 h-full flex flex-col justify-center">
//                 <div className="inline-block px-4 py-1.5 w-max bg-[#100012] text-[#E3B6B1] text-xs font-bold font-mono rounded-lg mb-6 border border-[#522C5D]">APR 2021 - MAY 2023</div>
//                 <h3 className="text-3xl font-bold text-[#FFE3D8] mb-3">Intermediate (Pre-Engineering)</h3>
//                 <p className="text-[#845162] font-black text-xl mb-6">Punjab Group of Colleges Bahawalpur</p>
//                 <p className="text-[#E3B6B1] leading-relaxed font-light">
//                   Built a strong analytical foundation in advanced Mathematics, Physics, and Chemistry. Active participant in the STEP pre-engineering cohort.
//                 </p>
//               </motion.div>

//               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-[#29104A]/40 p-10 rounded-3xl border border-[#522C5D] hover:border-[#E3B6B1]/50 hover:bg-[#522C5D]/20 transition-all duration-300 h-full flex flex-col justify-center relative overflow-hidden">
//                 <div className="absolute right-0 top-0 w-40 h-40 bg-[radial-gradient(circle,_rgba(227,182,177,0.15),_transparent_70%)]"></div>
//                 <div className="inline-block px-4 py-1.5 w-max bg-[#100012] text-[#E3B6B1] text-xs font-bold font-mono rounded-lg mb-6 border border-[#522C5D]">APR 2019 - MAY 2021</div>
//                 <h3 className="text-3xl font-bold text-[#FFE3D8] mb-3">Matriculation (Science)</h3>
//                 <p className="text-[#845162] font-black text-xl mb-8">Govt Technical High School Bahawalpur</p>
//                 <div className="flex items-center gap-4">
//                   <div className="px-6 py-3 border-2 border-[#E3B6B1] text-[#FFE3D8] text-xl font-black font-mono rounded-xl bg-[#522C5D]/40 shadow-[0_0_20px_rgba(227,182,177,0.3)]">1037 / 1100</div>
//                   <p className="text-sm font-mono text-[#E3B6B1] font-bold">Top 1% Elite Cohort</p>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           7. MEDIUM / KNOWLEDGE SHARING (REDESIGNED - SLEEK & BEAUTIFUL)
//           ========================================= */}
//       <section className="relative z-10 py-32 px-6 bg-[#100012] border-b border-[#522C5D]/50 overflow-hidden">
//         {/* Background glow for Medium card */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[radial-gradient(ellipse,_rgba(82,44,93,0.3),_transparent_70%)] blur-3xl pointer-events-none"></div>

//         <div className="max-w-6xl mx-auto">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn} className="bg-gradient-to-r from-[#150016] to-[#29104A]/40 border border-[#522C5D] rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 shadow-[0_40px_100px_rgba(21,0,22,0.8)] backdrop-blur-2xl group hover:border-[#845162] transition-colors duration-700">
            
//             <div className="lg:w-1/3 text-center lg:text-left">
//               <div className="w-24 h-24 bg-[#522C5D]/30 border border-[#845162] rounded-3xl flex items-center justify-center mx-auto lg:mx-0 mb-8 shadow-lg group-hover:rotate-12 transition-transform duration-500">
//                 <BookOpen className="w-12 h-12 text-[#E3B6B1]" />
//               </div>
//               <h2 className="text-4xl md:text-5xl font-black text-[#FFE3D8] leading-tight">
//                 Knowledge <br/><span className="text-[#845162]">Distribution.</span>
//               </h2>
//             </div>

//             <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-[#522C5D] pt-8 lg:pt-0 lg:pl-12">
//               <h3 className="text-2xl md:text-3xl font-bold text-[#FFE3D8] mb-6 leading-snug">
//                 "The Accuracy Paradox: Why 95% Accuracy in Medical AI is Often a Lie"
//               </h3>
//               <p className="text-[#E3B6B1] text-lg font-light mb-10 leading-relaxed">
//                 A highly acclaimed deep dive into the reality of AI in the medical field. I break down the metrics that actually matter (Precision, Recall, F1) versus the marketing hype of pure "accuracy". Essential reading for true AI architects.
//               </p>
//               <a href="https://medium.com/@sameerdataanalyst66/the-accuracy-paradox-why-95-accuracy-in-medical-ai-is-often-a-lie-7234156ee326" target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 bg-transparent border-2 border-[#E3B6B1] text-[#E3B6B1] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#E3B6B1] hover:text-[#100012] transition-all duration-300 shadow-[0_0_20px_rgba(227,182,177,0.1)] hover:shadow-[0_0_40px_rgba(227,182,177,0.4)]">
//                 Read Article on Medium <ExternalLink className="w-5 h-5" />
//               </a>
//             </div>

//           </motion.div>
//         </div>
//       </section>

//       {/* =========================================
//           8. COMMUNITY & OPEN SOURCE
//           ========================================= */}
//       <section className="relative z-10 py-32 px-6 bg-[#150016] border-b border-[#522C5D]/30">
//         <div className="max-w-6xl mx-auto">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-black text-[#FFE3D8] mb-4">Open Source Ecosystem</h2>
//             <p className="text-[#E3B6B1] text-lg max-w-2xl mx-auto font-light">Democratizing deep learning through public collaboration.</p>
//           </motion.div>

//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerWrap} className="grid md:grid-cols-3 gap-8">
//             <motion.div variants={scaleIn} className="bg-[#29104A]/30 border border-[#522C5D] p-10 rounded-[30px] text-center shadow-lg hover:border-[#E3B6B1] transition-colors group">
//               <Github className="w-12 h-12 text-[#E3B6B1] mx-auto mb-6 group-hover:-translate-y-2 transition-transform duration-300" />
//               <h4 className="text-5xl font-black text-[#FFE3D8] mb-3">650+</h4>
//               <p className="text-sm font-bold font-mono text-[#845162] uppercase tracking-widest">Commits</p>
//             </motion.div>
//             <motion.div variants={scaleIn} className="bg-[#29104A]/30 border border-[#522C5D] p-10 rounded-[30px] text-center shadow-lg hover:border-[#E3B6B1] transition-colors group">
//               <FolderGit2 className="w-12 h-12 text-[#E3B6B1] mx-auto mb-6 group-hover:-translate-y-2 transition-transform duration-300" />
//               <h4 className="text-5xl font-black text-[#FFE3D8] mb-3">15+</h4>
//               <p className="text-sm font-bold font-mono text-[#845162] uppercase tracking-widest">Elite Repos</p>
//             </motion.div>
//             <motion.div variants={scaleIn} className="bg-gradient-to-br from-[#522C5D] to-[#29104A] border border-[#E3B6B1]/50 p-10 rounded-[30px] text-center shadow-[0_20px_40px_rgba(82,44,93,0.5)] hover:border-[#FFE3D8] transition-colors group">
//               <Linkedin className="w-12 h-12 text-[#FFE3D8] mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
//               <h4 className="text-5xl font-black text-[#FFE3D8] mb-3">2,200+</h4>
//               <p className="text-sm font-bold font-mono text-[#E3B6B1] uppercase tracking-widest">Network</p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* =========================================
//           9. ELITE CREDENTIALS
//           ========================================= */}
//       <section className="relative z-10 py-32 px-6 bg-gradient-to-t from-[#100012] to-[#150016] border-b border-[#522C5D]/30">
//         <div className="max-w-6xl mx-auto">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-black text-[#FFE3D8] mb-4 flex items-center justify-center gap-4"><Award className="w-10 h-10 text-[#E3B6B1]"/> Elite Credentials</h2>
//             <p className="text-[#E3B6B1] text-lg max-w-2xl mx-auto font-light">Certified rigorous training and continuous upskilling.</p>
//           </motion.div>

//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerWrap} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {certifications.map((cert, idx) => (
//               <motion.div key={idx} variants={scaleIn} className="bg-[#29104A]/20 backdrop-blur-md border border-[#522C5D] p-8 rounded-3xl flex flex-col justify-between hover:bg-[#29104A]/40 hover:border-[#E3B6B1] transition-all transform-gpu hover:-translate-y-2 duration-300 group">
//                 <div>
//                   <FileText className="w-8 h-8 text-[#845162] mb-6 group-hover:text-[#E3B6B1] transition-colors" />
//                   <h4 className="text-lg font-bold text-[#FFE3D8] mb-3 leading-snug">{cert.title}</h4>
//                   <p className="text-sm text-[#E3B6B1] font-bold mb-6">{cert.issuer}</p>
//                 </div>
//                 <div className="pt-4 border-t border-[#522C5D]">
//                   <span className="block text-[10px] font-black font-mono text-[#E3B6B1] opacity-70 truncate">{cert.id}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* =========================================
//           10. CONTACT & END SYSTEM (ANIMATED TABAHI)
//           ========================================= */}
//       <footer id="contact" className="relative z-10 pt-40 pb-12 px-6 bg-[#100012] overflow-hidden text-center">
        
//         {/* Infinite Moving Marquee / Scanline */}
//         <style dangerouslySetInnerHTML={{__html: `
//           @keyframes scanline { 0% { transform: translateX(-100vw); } 100% { transform: translateX(100vw); } }
//           @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
//           .animate-scan { animation: scanline 3s ease-in-out infinite; }
//           .animate-marquee { animation: marquee 20s linear infinite; display: inline-block; white-space: nowrap; }
//         `}} />
//         <div className="absolute top-0 left-0 w-full h-[3px] overflow-hidden">
//           <div className="w-[600px] h-full bg-gradient-to-r from-transparent via-[#E3B6B1] to-transparent animate-scan shadow-[0_0_50px_rgba(227,182,177,1)]"></div>
//         </div>

//         {/* Marquee Text Background */}
//         <div className="absolute top-20 left-0 w-full overflow-hidden opacity-5 pointer-events-none select-none">
//           <div className="animate-marquee text-9xl font-black font-mono text-[#E3B6B1]">
//             BUILDING INTELLIGENCE // OPTIMIZING ARCHITECTURES // ENGINEERING THE FUTURE // BUILDING INTELLIGENCE // OPTIMIZING ARCHITECTURES // ENGINEERING THE FUTURE //
//           </div>
//         </div>

//         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-[radial-gradient(ellipse_at_bottom,_rgba(82,44,93,0.3),_transparent_70%)] pointer-events-none"></div>

//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerWrap} className="relative max-w-5xl mx-auto z-10">
          
//           <motion.h2 variants={fadeUp} className="text-6xl md:text-8xl lg:text-9xl font-black text-[#FFE3D8] mb-8 uppercase tracking-tighter drop-shadow-2xl">
//             Let's Engineer <br/>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3B6B1] via-[#FFE3D8] to-[#845162] animate-pulse">The Future.</span>
//           </motion.h2>

//           <motion.p variants={fadeUp} className="text-[#E3B6B1] text-xl md:text-2xl font-light max-w-3xl mx-auto mb-16 leading-relaxed">
//             If you are building high-end AI architectures, require elite technical strategy, or want to collaborate on global OS research—<strong className="text-[#FFE3D8] font-black border-b border-[#E3B6B1]">the system is ready.</strong>
//           </motion.p>

//           <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 justify-center mb-32">
//             <a href="mailto:sameersain361@gmail.com" className="px-10 py-5 bg-[#E3B6B1] text-[#100012] font-black text-xl tracking-widest uppercase hover:bg-[#FFE3D8] hover:-translate-y-2 transition-all duration-300 shadow-[0_20px_50px_rgba(227,182,177,0.4)] flex items-center justify-center gap-3 rounded-2xl group">
//               <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Initialize Contact
//             </a>
//             <a href="https://www.upwork.com/freelancers/~016d309ea83d2c431a" target="_blank" rel="noreferrer" className="px-10 py-5 bg-[#150016] border-2 border-[#522C5D] text-[#FFE3D8] font-black text-xl tracking-widest uppercase hover:border-[#E3B6B1] hover:bg-[#29104A]/50 hover:-translate-y-2 transition-all duration-300 rounded-2xl shadow-lg">
//               Hire on Upwork
//             </a>
//           </motion.div>

//           <div className="w-full border-t border-[#522C5D] pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-mono text-[#E3B6B1]">
//             <p className="flex items-center gap-2">
//               <Code2 className="w-4 h-4"/> ENGINEERED BY <span className="text-[#FFE3D8] font-black text-base ml-1">SAMEER NADEEM</span>
//             </p>
//             <p className="flex items-center gap-3">
//               <span className="relative flex h-3 w-3">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E3B6B1] opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E3B6B1]"></span>
//               </span> 
//               SYSTEM ONLINE // ELITE TERMINAL
//             </p>
//           </div>

//         </motion.div>
//       </footer>

//     </main>
//   );
// }



// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
// import {
//   Github, Linkedin, Mail, Code2, Cpu, Database,
//   Briefcase, GraduationCap, ChevronRight, FolderGit2,
//   ExternalLink, Beaker, Globe, Award, ShieldCheck, Satellite,
//   TerminalSquare, Network, BookOpen, Layers,
//   Fingerprint, Zap, Radar, PlaySquare, FileText, Send,
//   Stethoscope, Activity, Target, Workflow, Server, MonitorSmartphone,
//   FlaskConical, Atom, Brain, Microscope, Dna, TrendingUp,
//   Users, MessageSquare, BarChart3, Sparkles, Star, Trophy
// } from "lucide-react";

// // =========================================
// // ANIMATION VARIANTS
// // =========================================
// const fadeUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
// };
// const fadeUpFast = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
// };
// const staggerWrap = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
// };
// const staggerFast = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
// };
// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.88, rotateX: 12 },
//   visible: { opacity: 1, scale: 1, rotateX: 0, transition: { type: "spring", stiffness: 55, damping: 18, duration: 1.1 } }
// };
// const slideLeft = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
// };
// const slideRight = {
//   hidden: { opacity: 0, x: 50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
// };
// const letterStagger = {
//   hidden: { opacity: 0, y: 25 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
// };
// const floatSlow = {
//   y: [0, -18, 0],
//   transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
// };
// const floatMed = {
//   y: [0, -12, 0],
//   transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
// };
// const glowPulse = {
//   boxShadow: [
//     "0 0 30px rgba(82,44,93,0.4)",
//     "0 0 60px rgba(82,44,93,0.8), 0 0 100px rgba(227,182,177,0.2)",
//     "0 0 30px rgba(82,44,93,0.4)"
//   ],
//   transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
// };

// // =========================================
// // 3D TILT HOOK
// // =========================================
// function useTilt(strength = 12) {
//   const ref = useRef<HTMLDivElement>(null);
//   const handleMove = (e: React.MouseEvent) => {
//     if (!ref.current) return;
//     const rect = ref.current.getBoundingClientRect();
//     const x = (e.clientX - rect.left) / rect.width - 0.5;
//     const y = (e.clientY - rect.top) / rect.height - 0.5;
//     ref.current.style.transform = `perspective(1200px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg) translateZ(20px)`;
//     ref.current.style.transition = "transform 0.05s linear";
//   };
//   const handleLeave = () => {
//     if (!ref.current) return;
//     ref.current.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
//     ref.current.style.transition = "transform 0.7s cubic-bezier(0.23,1,0.32,1)";
//   };
//   return { ref, onMouseMove: handleMove, onMouseLeave: handleLeave };
// }

// // =========================================
// // DATA
// // =========================================
// const coreProjects = [
//   {
//     name: "Deepfake Forensics Hybrid",
//     link: "https://github.com/Abu-Sameer-66/Deepfake-Forensics-SOTA-Hybrid",
//     desc: "SOTA ResNet-18 + Transformer Hybrid achieving 99.92% precision over 140,000 images. Engineered an ablation pipeline combining local texture CNNs with global ViT reasoning to establish a defensive AI baseline.",
//     tags: ["ResNet-18", "Transformers", "Computer Vision", "Ablation Study"],
//     stats: [{ label: "Precision", val: "99.92%" }, { label: "F1 Score", val: "99.39%" }, { label: "Dataset", val: "140K imgs" }],
//     arch: "ResNet-18 → Feature Fusion → Vision Transformer → Classification Head",
//     icon: ShieldCheck,
//     highlight: true
//   },
//   {
//     name: "Chest X-Ray Vision Transformer",
//     link: "https://github.com/Abu-Sameer-66/Chest-XRay-Ablation-ViT",
//     desc: "Advanced ViT ablation study for chest X-ray pathology detection. Comparative analysis of attention mechanisms, patch sizes, and positional encodings for medical imaging diagnostics.",
//     tags: ["Vision Transformer", "Medical AI", "Ablation Study", "PyTorch"],
//     stats: [{ label: "Model", val: "ViT-B/16" }, { label: "Domain", val: "Medical AI" }, { label: "Task", val: "Detection" }],
//     arch: "Patch Embedding → Multi-Head Attention → MLP Head → Pathology Labels",
//     icon: Stethoscope,
//     highlight: false
//   },
//   {
//     name: "PropVal AI Real Estate Engine",
//     link: "https://github.com/Abu-Sameer-66/PropVal-Property-Valuation--AI-Real-Estate-Engine",
//     desc: "Production-grade Automated Valuation Model (AVM) using Gradient Boosting for intelligent real estate asset valuation. End-to-end pipeline from raw listing data to deployment-ready predictions.",
//     tags: ["Gradient Boosting", "PropTech", "Feature Engineering", "Scikit-Learn"],
//     stats: [{ label: "Model", val: "XGBoost" }, { label: "Domain", val: "PropTech" }, { label: "Type", val: "Regression" }],
//     arch: "Data Pipeline → Feature Engineering → Gradient Boosting → AVM Output",
//     icon: TrendingUp,
//     highlight: false
//   },
//   {
//     name: "CogniPath Analytics Engine",
//     link: "https://github.com/Abu-Sameer-66/CogniPath-Analytics-Engine",
//     desc: "AI-driven EdTech analytics engine optimizing academic outcomes via predictive modeling. Identifies at-risk students and recommends personalized learning paths using behavioral data.",
//     tags: ["EdTech", "Scikit-Learn", "Predictive Modeling", "Data Analysis"],
//     stats: [{ label: "Domain", val: "EdTech" }, { label: "Pipeline", val: "Predictive" }, { label: "Stack", val: "Sklearn" }],
//     arch: "Behavioral Data → Feature Extraction → Ensemble Model → Intervention Signal",
//     icon: Brain,
//     highlight: false
//   },
//   {
//     name: "SpamGuard AI Threat Detection",
//     link: "https://github.com/Abu-Sameer-66/SpamGuard-AI-Threat-Detection",
//     desc: "Enterprise SMS Phishing & Spam Detection system using advanced NLP architectures. Multi-layer text classification pipeline with explainability for real-time threat identification.",
//     tags: ["NLP", "Cybersecurity", "Text Classification", "Explainability"],
//     stats: [{ label: "Domain", val: "CyberSec" }, { label: "Pipeline", val: "NLP" }, { label: "Task", val: "Detection" }],
//     arch: "TF-IDF / BERT Embedding → Classifier → LIME Explainer → Alert System",
//     icon: Zap,
//     highlight: false
//   },
//   {
//     name: "Multispectral Satellite Forensics",
//     link: "https://github.com/Abu-Sameer-66/SOTA-Multispectral-Satellite-Forensics-EuroSAT",
//     desc: "13-channel EuroSAT land-use classification using Hybrid Attention Mechanism (HAM) + ViT. Jumped from 64% ANN baseline to 89%+ SOTA accuracy in environmental intelligence extraction.",
//     tags: ["EuroSAT", "HAM", "13-Channel", "Earth Observation"],
//     stats: [{ label: "Accuracy", val: "89%+" }, { label: "Baseline", val: "64%" }, { label: "Channels", val: "13 Band" }],
//     arch: "13-Ch Spectral → HAM Attention → ViT Encoder → Land-Use Classification",
//     icon: Satellite,
//     highlight: true
//   }
// ];

// const gsocProjects = [
//   {
//     name: "Mistral7B Tox21 Optimization",
//     link: "https://github.com/Abu-Sameer-66/Mistral7B-Tox21-Molecular-Optimization",
//     desc: "Native fine-tuning of Mistral-7B on the Tox21 toxicity dataset using 4-bit QLoRA quantization. Establishes an LLM-based molecular classification benchmark within the DeepChem TorchModel framework.",
//     tags: ["Mistral-7B", "Tox21", "4-bit QLoRA", "DeepChem"],
//     dataset: "Tox21",
//     arch: "Mistral-7B → QLoRA Adapters → Tox21 Labels"
//   },
//   {
//     name: "Mistral7B BACE Generalization Study",
//     link: "https://github.com/Abu-Sameer-66/Mistral7B-BACE-Generalization-Study",
//     desc: "Optimizing Mistral-7B for BACE-1 inhibitor prediction using scaffold-split evaluation. Studies LLM generalization in drug discovery beyond memorization using out-of-distribution molecular scaffolds.",
//     tags: ["Drug Discovery", "BACE-1", "Scaffold-Split", "Generalization"],
//     dataset: "BACE",
//     arch: "Mistral-7B → Scaffold-Split → BACE-1 Binding Prediction"
//   },
//   {
//     name: "Mistral7B ClinTox Study",
//     link: "https://github.com/Abu-Sameer-66/Mistral7B-ClinTox-Study",
//     desc: "LLM fine-tuning study on the ClinTox dataset for clinical toxicity prediction. Evaluates LoRA adapter efficiency for pharmaceutical safety classification tasks.",
//     tags: ["Mistral-7B", "ClinTox", "LoRA", "Safety AI"],
//     dataset: "ClinTox",
//     arch: "Mistral-7B → LoRA → Clinical Toxicity Binary Classification"
//   },
//   {
//     name: "Mistral7B BBBP Molecular Reasoning",
//     link: "https://github.com/Abu-Sameer-66/Mistral7B-BBBP-Molecular-Reasoning",
//     desc: "Probing Mistral-7B's capacity for blood-brain barrier permeability (BBBP) prediction. Tests whether LLMs can reason over molecular SMILES strings for CNS drug candidate screening.",
//     tags: ["BBBP", "Drug Screening", "SMILES", "Molecular Reasoning"],
//     dataset: "BBBP",
//     arch: "SMILES Input → Mistral-7B → BBB Permeability Score"
//   },
//   {
//     name: "ChemLLM-Tox-OLMo",
//     link: "https://github.com/Abu-Sameer-66/ChemLLM-Tox-OLMo",
//     desc: "Flagship GSoC contribution: Fine-tuning OLMo-7B with QLoRA for Molecular Toxicity Prediction in the DeepChem ecosystem. Integrates open-weight LLMs into cheminformatics pipelines with a 12-week TorchModel roadmap.",
//     tags: ["OLMo-7B", "DeepChem", "QLoRA", "GSoC 2026"],
//     dataset: "Multi-Tox",
//     arch: "OLMo-7B → QLoRA → DeepChem TorchModel → SMILES Tox Labels",
//     flagship: true
//   }
// ];

// const additionalProjects = [
//   {
//     name: "AI Voice Assistant",
//     link: "https://github.com/Abu-Sameer-66/AI-Voice-Assistant-Python",
//     desc: "Python-based AI voice assistant integrating speech recognition, NLP intent parsing, and TTS response synthesis. Full pipeline from audio input to intelligent contextual reply.",
//     tags: ["Speech Recognition", "NLP", "TTS", "Python"],
//     icon: MessageSquare
//   },
//   {
//     name: "Retail Sales Performance Analysis",
//     link: "https://github.com/Abu-Sameer-66/Retail-Sales-Performance-Analysis",
//     desc: "End-to-end retail data analytics pipeline with advanced visualizations. Identifies KPIs, seasonal patterns, product performance clusters, and demand forecasting signals from raw sales data.",
//     tags: ["Data Analysis", "Pandas", "Seaborn", "Forecasting"],
//     icon: BarChart3
//   },
//   {
//     name: "Social Graph Recommendation Engine",
//     link: "https://github.com/Abu-Sameer-66/Social-Graph-Recommendation-Engine",
//     desc: "Graph-based collaborative filtering recommendation engine using social network topology. Implements Weisfeiler-Lehman graph isomorphism concepts for connection-aware personalized suggestions.",
//     tags: ["Graph ML", "Collaborative Filtering", "Network Analysis", "WL-Test"],
//     icon: Network
//   }
// ];

// const certifications = [
//   { title: "The Ultimate Job Ready Data Science Course", issuer: "CodeWithHarry", date: "Feb 20, 2026", id: "CWH-THE-ULTIMATE-JOB-READY-DATA-SCIENCE-COURSE-BMXY6IIK" },
//   { title: "Complete 2026 Python Bootcamp", issuer: "CodeWithHarry", date: "Mar 9, 2026", id: "CWH-COMPLETE-PYTHON-BOOTCAMP-LEARN-PYTHON-FROM-SCRATCH-BMXY6IIK" },
//   { title: "Ultimate Web Development Course 2026", issuer: "Udemy", date: "Feb 20, 2026", id: "UC-2e72fbd0-d45a-487b-bf17-372434c63615" },
//   { title: "Introduction to Data Science in Python", issuer: "DataCamp", date: "May 26, 2025", id: "#40,907,162" },
//   { title: "Complete Prompt Engineering for AI Bootcamp", issuer: "Udemy", date: "In Progress", id: "GPT-5 · Midjourney · LangChain · DSPy · LangGraph" },
//   { title: "Prime AI/ML Batch", issuer: "Apna College", date: "In Progress", id: "Deep Learning · Transformers · RAG · Agentic AI · Docker · Kubernetes" }
// ];

// const experiences = [
//   {
//     title: "Open Source Research Contributor (GSoC 2026)",
//     org: "DeepChem Ecosystem",
//     period: "2026 – Present",
//     color: "#A6CE39",
//     desc: "Spearheading the integration of massive Language Models (OLMo-7B) into DeepChem's architecture. Engineered a rigorous 12-week TorchModel integration roadmap, built LLM pipelines for molecular modeling, and optimized SMILES validation pipelines. Collaborating with global mentors on SOTA cheminformatics benchmarks.",
//     impact: ["12-week TorchModel roadmap", "OLMo-7B SMILES pipeline", "Global mentor collaboration", "SOTA benchmark optimization"],
//     icon: FlaskConical
//   },
//   {
//     title: "Lead Deep Learning Researcher",
//     org: "AI Research Lab (IUB)",
//     period: "2024 – Present",
//     color: "#E3B6B1",
//     desc: "Developing SOTA defensive AI architectures under Professor Talha. Achieved 99.92% precision in Deepfake Forensics over 140K images using ResNet-Transformer hybrids. Leading 13-channel EuroSAT satellite analysis with HAM architectures. Ablation pipelines targeting top-tier Google Scholar publications.",
//     impact: ["99.92% precision (Deepfake)", "140,000 image dataset", "13-channel satellite analysis", "HAM + ViT architectures"],
//     icon: Microscope
//   },
//   {
//     title: "AI Solutions Architect",
//     org: "Freelance (Upwork / LinkedIn)",
//     period: "2023 – Present",
//     color: "#845162",
//     desc: "Consulting and building custom AI pipelines for global clients. Specializing in NLP sentiment analysis, Computer Vision defect detection, and transforming complex Python research scripts into deployable production business assets. Full P2D integration consulting.",
//     impact: ["Computer Vision pipelines", "NLP architectures", "Production deployments", "AI strategy consulting"],
//     icon: Server
//   },
//   {
//     title: "Technical Operations & Data Strategist",
//     org: "Al-Quresh Motors",
//     period: "2023 – 2024",
//     color: "#3da6a3",
//     desc: "Executing high-level Physical-to-Digital (P2D) integration for industrial operations. Automated supply chain logistics using predictive analytics, implemented data-driven inventory metrics, and translated raw business operations into centralized intelligent digital dashboards.",
//     impact: ["Supply chain automation", "Predictive inventory", "Digital transformation", "Workflow analytics"],
//     icon: Workflow
//   },
//   {
//     title: "Strategic Data Operations Analyst",
//     org: "TechSpark Coworking",
//     period: "1 Year",
//     color: "#f7d794",
//     desc: "Led B2B market intelligence and lead generation operations for a coworking ecosystem. Architected CRM data pipelines, conducted deep market analyses, managed lead funnels, and provided startup ecosystem intelligence support to founders and partners.",
//     impact: ["B2B lead pipelines", "CRM architecture", "Market intelligence", "Startup data support"],
//     icon: BarChart3
//   },
//   {
//     title: "STEM Educator",
//     org: "Private Instruction",
//     period: "Ongoing",
//     color: "#FFE3D8",
//     desc: "Teaching Computer Science, Mathematics, and Science to Grade 4–8 students. Focus on logical thinking development, technical concept simplification, and building multidisciplinary STEM foundations. Crafting custom curricula for diverse learning styles.",
//     impact: ["CS & Math instruction", "Grades 4–8 curriculum", "Logical thinking focus", "Multidisciplinary STEM"],
//     icon: BookOpen
//   }
// ];

// const uniCourses = [
//   "Machine Learning", "Advanced Machine Learning", "Deep Learning",
//   "Statistics & Probability", "Advanced Statistics", "Data Warehousing",
//   "Software Engineering", "Web Development", "Data Visualization",
//   "Data Structures & Algorithms", "Database Management Systems",
//   "Linear Algebra", "Calculus", "Discrete Structures",
//   "Business Process Analysis", "Object Oriented Programming"
// ];

// // =========================================
// // NEURAL PARTICLE BACKGROUND
// // =========================================
// function NeuralBackground() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d")!;
//     let w = canvas.width = window.innerWidth;
//     let h = canvas.height = window.innerHeight;
//     let mouseX = w / 2, mouseY = h / 2;
//     const N = 90;
//     const pts = Array.from({ length: N }, () => ({
//       x: Math.random() * w, y: Math.random() * h,
//       vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
//       r: Math.random() * 1.5 + 0.5
//     }));
//     let raf: number;
//     const draw = () => {
//       ctx.clearRect(0, 0, w, h);
//       // Mouse attractor point
//       pts.forEach(p => {
//         const dx = mouseX - p.x, dy = mouseY - p.y;
//         const dist = Math.sqrt(dx * dx + dy * dy);
//         if (dist < 180) {
//           p.vx += (dx / dist) * 0.012;
//           p.vy += (dy / dist) * 0.012;
//         }
//         p.vx *= 0.995; p.vy *= 0.995;
//         p.x += p.vx; p.y += p.vy;
//         if (p.x < 0 || p.x > w) p.vx *= -1;
//         if (p.y < 0 || p.y > h) p.vy *= -1;
//       });
//       // Draw connections
//       for (let i = 0; i < N; i++) {
//         for (let j = i + 1; j < N; j++) {
//           const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
//           const d = Math.sqrt(dx * dx + dy * dy);
//           if (d < 140) {
//             const alpha = (1 - d / 140) * 0.18;
//             ctx.beginPath();
//             ctx.moveTo(pts[i].x, pts[i].y);
//             ctx.lineTo(pts[j].x, pts[j].y);
//             ctx.strokeStyle = `rgba(82,44,93,${alpha})`;
//             ctx.lineWidth = 0.8;
//             ctx.stroke();
//           }
//         }
//       }
//       // Draw nodes
//       pts.forEach(p => {
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = "rgba(227,182,177,0.35)";
//         ctx.fill();
//       });
//       raf = requestAnimationFrame(draw);
//     };
//     draw();
//     const onMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
//     const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
//     window.addEventListener("mousemove", onMove);
//     window.addEventListener("resize", onResize);
//     return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); window.removeEventListener("resize", onResize); };
//   }, []);
//   return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-60" />;
// }

// // =========================================
// // PROJECT CARD (CORE)
// // =========================================
// function CoreProjectCard({ p, idx }: { p: typeof coreProjects[0]; idx: number }) {
//   const tilt = useTilt(10);
//   const Icon = p.icon;
//   return (
//     <motion.div
//       variants={fadeUpFast}
//       className={`relative group rounded-[28px] overflow-hidden ${p.highlight ? "md:col-span-2" : ""}`}
//       style={{ background: "linear-gradient(135deg,#100012,#150016)" }}
//       {...tilt}
//     >
//       {/* Animated border gradient */}
//       <div className="absolute inset-0 rounded-[28px] p-[1.5px] pointer-events-none">
//         <div className={`absolute inset-0 rounded-[28px] transition-opacity duration-700 opacity-0 group-hover:opacity-100`}
//           style={{ background: "linear-gradient(135deg,#845162,#522C5D,#E3B6B1,#522C5D)" }} />
//         <div className="absolute inset-[1.5px] rounded-[26px]" style={{ background: "linear-gradient(135deg,#100012,#150016)" }} />
//       </div>
//       <div className="absolute inset-0 rounded-[28px] border border-[#522C5D]/40 group-hover:border-[#E3B6B1]/30 transition-colors duration-500" />

//       {/* Glow on hover */}
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
//         style={{ background: "radial-gradient(600px at 50% 0%,rgba(132,81,98,0.12),transparent 70%)" }} />

//       {/* Watermark icon */}
//       <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none">
//         <Icon size={180} />
//       </div>

//       <div className={`relative z-10 p-8 ${p.highlight ? "grid md:grid-cols-2 gap-8 items-start" : "flex flex-col h-full"}`}>
//         {/* Left / Main content */}
//         <div className="flex flex-col gap-4 flex-1">
//           <div className="flex items-start justify-between gap-3">
//             <div className="w-10 h-10 rounded-xl bg-[#29104A]/60 border border-[#522C5D] flex items-center justify-center flex-shrink-0 group-hover:border-[#E3B6B1]/50 transition-colors">
//               <Icon className="w-5 h-5 text-[#E3B6B1]" />
//             </div>
//             {p.highlight && (
//               <span className="flex items-center gap-1 text-[10px] font-mono font-black text-[#E3B6B1] bg-[#522C5D]/40 border border-[#845162] px-2.5 py-1 rounded-full">
//                 <Star className="w-3 h-3 fill-[#E3B6B1]" /> FEATURED
//               </span>
//             )}
//           </div>

//           <h3 className="text-xl font-black text-[#FFE3D8] leading-tight group-hover:text-[#E3B6B1] transition-colors duration-300">{p.name}</h3>
//           <p className="text-[#E3B6B1]/70 text-sm leading-relaxed font-light flex-1">{p.desc}</p>

//           {/* Architecture pill */}
//           <div className="bg-[#100012]/80 border border-[#522C5D]/50 rounded-xl px-4 py-3 group-hover:border-[#845162]/60 transition-colors">
//             <span className="block text-[10px] font-mono text-[#845162] uppercase tracking-widest mb-1">Architecture Flow</span>
//             <span className="text-xs text-[#E3B6B1]/80 font-mono">{p.arch}</span>
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {p.tags.map(t => (
//               <span key={t} className="px-2.5 py-1 bg-[#29104A]/50 border border-[#522C5D]/60 text-[#FFE3D8]/70 text-[10px] font-bold rounded-lg hover:border-[#E3B6B1]/40 hover:text-[#FFE3D8] transition-colors cursor-default">{t}</span>
//             ))}
//           </div>

//           <a href={p.link} target="_blank" rel="noreferrer"
//             className="mt-auto inline-flex items-center gap-2 text-[#E3B6B1] text-xs font-bold font-mono uppercase tracking-wider hover:gap-3 transition-all group/link w-fit">
//             <Github className="w-3.5 h-3.5" /> View on GitHub <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
//           </a>
//         </div>

//         {/* Right / Stats (only for highlight cards) */}
//         {p.highlight && (
//           <div className="grid grid-cols-1 gap-3">
//             {p.stats.map((s, i) => (
//               <motion.div key={i} animate={i === 0 ? glowPulse : {}}
//                 className={`rounded-2xl p-5 border flex flex-col justify-center ${i === 0 ? "bg-gradient-to-br from-[#522C5D] to-[#29104A] border-[#E3B6B1]/30" : "bg-[#100012]/80 border-[#522C5D]/40"}`}>
//                 <span className="text-[10px] font-mono text-[#845162] uppercase tracking-widest mb-1">{s.label}</span>
//                 <span className={`font-black text-[#FFE3D8] ${i === 0 ? "text-4xl" : "text-2xl"}`}>{s.val}</span>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// }

// // =========================================
// // GSOC PROJECT CARD
// // =========================================
// function GSoCCard({ p, idx }: { p: typeof gsocProjects[0]; idx: number }) {
//   const tilt = useTilt(8);
//   return (
//     <motion.div variants={scaleIn}
//       className={`relative group rounded-[24px] border transition-all duration-500 overflow-hidden ${p.flagship ? "border-[#A6CE39]/40 bg-gradient-to-br from-[#0a1a00]/80 to-[#100012]" : "border-[#522C5D]/40 bg-[#100012]/90"}`}
//       {...tilt}
//     >
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"
//         style={{ background: p.flagship ? "radial-gradient(400px at 50% 0%,rgba(166,206,57,0.08),transparent 70%)" : "radial-gradient(400px at 50% 0%,rgba(82,44,93,0.15),transparent 70%)" }} />

//       <div className="relative z-10 p-7 flex flex-col gap-4 h-full">
//         <div className="flex items-center justify-between">
//           <span className={`text-[10px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-full border ${p.flagship ? "text-[#A6CE39] bg-[#A6CE39]/10 border-[#A6CE39]/30" : "text-[#E3B6B1] bg-[#522C5D]/20 border-[#522C5D]"}`}>
//             {p.flagship ? "🏆 FLAGSHIP · GSoC 2026" : `GSoC · ${p.dataset}`}
//           </span>
//           <Atom className={`w-5 h-5 ${p.flagship ? "text-[#A6CE39]" : "text-[#845162]"}`} />
//         </div>

//         <h3 className={`text-lg font-black leading-tight ${p.flagship ? "text-[#FFE3D8]" : "text-[#FFE3D8]"} group-hover:text-[#E3B6B1] transition-colors`}>{p.name}</h3>
//         <p className="text-[#E3B6B1]/65 text-sm leading-relaxed font-light flex-1">{p.desc}</p>

//         <div className="bg-[#06080e]/60 border border-[#522C5D]/40 rounded-xl px-3 py-2.5">
//           <span className="block text-[9px] font-mono text-[#845162] uppercase tracking-widest mb-0.5">Pipeline</span>
//           <span className="text-[11px] text-[#E3B6B1]/75 font-mono">{p.arch}</span>
//         </div>

//         <div className="flex flex-wrap gap-1.5">
//           {p.tags.map(t => (
//             <span key={t} className={`px-2 py-0.5 text-[10px] font-bold rounded border ${p.flagship ? "border-[#A6CE39]/25 text-[#A6CE39]/80 bg-[#A6CE39]/05" : "border-[#522C5D]/50 text-[#E3B6B1]/60"}`}>{t}</span>
//           ))}
//         </div>

//         <a href={p.link} target="_blank" rel="noreferrer"
//           className={`inline-flex items-center gap-2 text-[11px] font-bold font-mono uppercase tracking-wider transition-all hover:gap-3 w-fit ${p.flagship ? "text-[#A6CE39]" : "text-[#E3B6B1]"}`}>
//           <Github className="w-3.5 h-3.5" /> View Repository <ChevronRight className="w-3.5 h-3.5" />
//         </a>
//       </div>
//     </motion.div>
//   );
// }

// // =========================================
// // MAIN PORTFOLIO COMPONENT
// // =========================================
// export default function Portfolio() {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const { scrollY } = useScroll();
//   const heroY = useTransform(scrollY, [0, 600], [0, -120]);
//   const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

//   useEffect(() => {
//     const h = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", h);
//     return () => window.removeEventListener("mousemove", h);
//   }, []);

//   return (
//     <main className="min-h-screen bg-[#100012] text-[#FFE3D8] font-sans selection:bg-[#E3B6B1] selection:text-[#100012] overflow-x-hidden">

//       {/* NEURAL PARTICLE BACKGROUND */}
//       <NeuralBackground />

//       {/* 4D CINEMATIC AMBIENT MESH */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <motion.div
//           className="absolute w-[700px] h-[700px] rounded-full blur-[220px] opacity-25 bg-[#522C5D]"
//           animate={{ x: mousePos.x - 350, y: mousePos.y - 350 }}
//           transition={{ type: "tween", ease: "linear", duration: 0.08 }}
//         />
//         <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] bg-[radial-gradient(circle,rgba(41,16,74,0.6),transparent_70%)] blur-[160px]" />
//         <div className="absolute bottom-[-20%] right-[-10%] w-[65vw] h-[65vw] bg-[radial-gradient(circle,rgba(132,81,98,0.18),transparent_70%)] blur-[200px]" />
//         <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(61,166,163,0.06),transparent_70%)] blur-[120px]" />
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay" />
//       </div>

//       {/* ==========================================
//           1. HERO — COMMAND CENTER
//           ========================================== */}
//       <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
//         <motion.div style={{ y: heroY, opacity: heroOpacity }}
//           initial="hidden" animate="visible" variants={staggerWrap}
//           className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">

//           {/* Profile with layered 3D rings */}
//           <motion.div variants={scaleIn} className="mb-10 relative group" style={{ perspective: 1200 }}>
//             {/* Ring 1 */}
//             <div className="absolute inset-[-20px] rounded-full border border-[#522C5D]/60 animate-[spin_10s_linear_infinite]" />
//             {/* Ring 2 */}
//             <div className="absolute inset-[-35px] rounded-full border border-dashed border-[#E3B6B1]/20 animate-[spin_16s_linear_infinite_reverse]" />
//             {/* Ring 3 */}
//             <div className="absolute inset-[-50px] rounded-full border border-dotted border-[#845162]/15 animate-[spin_22s_linear_infinite]" />
//             {/* Outer glow */}
//             <motion.div animate={glowPulse} className="absolute inset-0 rounded-full" />

//             <div className="w-48 h-48 md:w-56 md:h-56 rounded-full p-[3px] relative z-10"
//               style={{ background: "linear-gradient(135deg,#522C5D,#E3B6B1,#845162)" }}>
//               <div className="w-full h-full rounded-full bg-[#29104A]/80 backdrop-blur-xl overflow-hidden">
//                 <img src="/profile.png" alt="Sameer Nadeem" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=SN&background=29104A&color=FFE3D8&size=256&bold=true"; }} />
//               </div>
//             </div>
//           </motion.div>

//           {/* System badge */}
//           <motion.div variants={fadeUp}
//             className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#150016]/80 border border-[#522C5D] text-[#E3B6B1] font-mono text-xs mb-6 relative overflow-hidden backdrop-blur-xl shadow-[0_0_40px_rgba(82,44,93,0.5)]">
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E3B6B1]/8 to-transparent animate-[shimmer_2.5s_linear_infinite]" />
//             <motion.span animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
//               <Radar className="w-3.5 h-3.5 text-[#FFE3D8]" />
//             </motion.span>
//             SYSTEM ONLINE // RESEARCH TERMINAL ACTIVE
//           </motion.div>

//           {/* Animated name */}
//           <motion.h1
//             className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter uppercase mb-6 text-[#FFE3D8] drop-shadow-2xl flex flex-wrap justify-center gap-x-6 gap-y-2"
//             variants={staggerWrap}>
//             <span className="flex">
//               {"Sameer".split("").map((c, i) => (
//                 <motion.span key={i} variants={letterStagger}
//                   className="inline-block hover:text-[#E3B6B1] hover:-translate-y-3 transition-all duration-300 cursor-default"
//                   style={{ textShadow: "0 0 60px rgba(82,44,93,0.8)" }}>{c}</motion.span>
//               ))}
//             </span>
//             <span className="flex text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#E3B6B1,#845162,#E3B6B1)", backgroundSize: "200%", animation: "gradient-pan 4s ease infinite" }}>
//               {"Nadeem".split("").map((c, i) => (
//                 <motion.span key={i} variants={letterStagger}
//                   className="inline-block hover:-translate-y-3 transition-all duration-300 cursor-default">{c}</motion.span>
//               ))}
//             </span>
//           </motion.h1>

//           {/* Roles chips */}
//           <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 text-sm font-mono font-bold mb-8 max-w-4xl">
//             {["AI/ML Engineer", "Data Scientist", "Deep Learning Researcher", "Open Source Contributor", "LLM Fine-Tuning", "P2D Integrator"].map(r => (
//               <motion.span key={r} whileHover={{ scale: 1.08, y: -3 }}
//                 className="px-4 py-2 bg-[#29104A]/40 rounded-xl border border-[#522C5D] text-[#E3B6B1] shadow-lg hover:border-[#E3B6B1] hover:shadow-[0_0_20px_rgba(227,182,177,0.2)] transition-all duration-300 backdrop-blur-sm cursor-default">
//                 {r}
//               </motion.span>
//             ))}
//           </motion.div>

//           {/* Social links */}
//           <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 text-[#E3B6B1]">
//             {[
//               { label: "ORCID", href: "https://orcid.org/0009-0006-1369-7590", color: "hover:text-[#A6CE39] hover:border-[#A6CE39] hover:bg-[#A6CE39]/10", icon: <span className="text-lg font-black font-serif italic leading-none">iD</span> },
//               { label: "Kaggle", href: "https://www.kaggle.com/sameernadeem66", color: "hover:text-[#20BEFF] hover:border-[#20BEFF] hover:bg-[#20BEFF]/10", icon: <span className="text-base font-black leading-none">k</span> },
//             ].map(s => (
//               <motion.a key={s.label} href={s.href} target="_blank" rel="noreferrer" whileHover={{ y: -3, scale: 1.05 }}
//                 className={`flex items-center gap-2 px-6 py-3 bg-[#150016]/80 border border-[#522C5D] rounded-full font-bold shadow-lg backdrop-blur-md transition-all duration-300 ${s.color}`}>
//                 {s.icon} {s.label}
//               </motion.a>
//             ))}
//             {[
//               { icon: <Github className="w-4 h-4" />, href: "https://github.com/Abu-Sameer-66", color: "hover:text-white hover:border-white hover:bg-white/8", label: "GitHub" },
//               { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/sameer-nadeem-66339a357/", color: "hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10", label: "LinkedIn" },
//               { icon: <BookOpen className="w-4 h-4" />, href: "https://medium.com/@sameerdataanalyst66", color: "hover:text-white hover:border-white hover:bg-white/8", label: "Medium" },
//               { icon: <Mail className="w-4 h-4" />, href: "mailto:sameersain361@gmail.com", color: "hover:text-[#EA4335] hover:border-[#EA4335] hover:bg-[#EA4335]/10", label: "Email" },
//             ].map((s, i) => (
//               <motion.a key={i} href={s.href} target="_blank" rel="noreferrer" whileHover={{ y: -3, scale: 1.08 }}
//                 className={`flex items-center gap-2 px-5 py-3 bg-[#150016]/80 border border-[#522C5D] rounded-full backdrop-blur-md shadow-lg transition-all duration-300 text-sm font-bold ${s.color}`}>
//                 {s.icon} {s.label}
//               </motion.a>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Scroll indicator */}
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
//           className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#845162]">
//           <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Scroll</span>
//           <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-[1px] h-12 bg-gradient-to-b from-[#845162] to-transparent" />
//         </motion.div>
//       </section>

//       {/* ==========================================
//           2. IDENTITY & MISSION
//           ========================================== */}
//       <section className="relative z-10 py-32 px-6 bg-gradient-to-b from-transparent to-[#29104A]/10 border-y border-[#522C5D]/25">
//         <div className="max-w-7xl mx-auto">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerWrap}
//             className="grid lg:grid-cols-12 gap-16 items-center">

//             <motion.div variants={slideLeft} className="lg:col-span-7">
//               <div className="inline-block px-4 py-2 bg-[#29104A] border border-[#E3B6B1]/30 text-[#E3B6B1] font-mono text-xs rounded-full mb-6 font-bold shadow-[0_0_20px_rgba(227,182,177,0.2)]">
//                 /// PROTOCOL: ARCHITECT
//               </div>
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#FFE3D8] mb-8 leading-[1.05]">
//                 Bridging the Gap Between<br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3B6B1] to-[#845162]">Theory & Production.</span>
//               </h2>
//               <div className="space-y-5 text-[#E3B6B1] text-lg font-light leading-relaxed">
//                 <p>I am a rigorous AI/ML Engineer and Data Scientist driven by the pursuit of precision. My expertise lies in synthesizing cutting-edge academic research — from custom Vision Transformers to deeply optimized LLMs — and architecting them into robust, scalable digital infrastructures.</p>
//                 <p>I don't just build models; I engineer <strong className="text-[#FFE3D8] font-bold">Physical-to-Digital (P2D) integration systems</strong>. Whether it's optimizing supply chain logistics through predictive analytics or developing state-of-the-art Deepfake Forensics, my mission is to extract actionable intelligence from chaotic, real-world data and deploy it into high-impact business environments.</p>
//                 <p>Currently contributing to the <strong className="text-[#A6CE39] font-bold">DeepChem ecosystem via GSoC 2026</strong>, integrating OLMo-7B language model architectures to democratize molecular machine learning globally.</p>
//               </div>
//             </motion.div>

//             {(() => {
//               const tilt = useTilt(7);
//               return (
//                 <motion.div variants={slideRight} animate={floatSlow} className="lg:col-span-5 relative" style={{ perspective: 1200 }}>
//                   <div className="absolute inset-0 bg-[#E3B6B1] blur-[80px] opacity-8 rounded-full animate-pulse pointer-events-none" />
//                   <div className="bg-[#100012]/80 backdrop-blur-xl border border-[#522C5D] p-10 rounded-3xl shadow-[0_30px_80px_rgba(41,16,74,0.9)] relative z-10" {...tilt}>
//                     <h3 className="text-[#E3B6B1] font-mono text-xs tracking-widest uppercase mb-6 border-b border-[#522C5D] pb-3 flex items-center gap-2">
//                       <Cpu className="w-4 h-4" /> Architectural Philosophy
//                     </h3>
//                     <p className="text-2xl font-serif italic text-[#FFE3D8] leading-snug mb-8">
//                       "Algorithms are merely thoughts. Engineering makes them reality. I translate the complexity of mathematical research into the elegance of production-grade systems."
//                     </p>
//                     <div className="grid grid-cols-2 gap-4 border-t border-[#522C5D] pt-6">
//                       {[["99.9%", "SOTA Precision Hit"], ["140K+", "Data Points Handled"], ["650+", "GitHub Commits"], ["2200+", "LinkedIn Network"]].map(([v, l]) => (
//                         <div key={l}>
//                           <span className="block text-2xl font-black text-[#FFE3D8]">{v}</span>
//                           <span className="text-[10px] font-mono text-[#845162] uppercase tracking-wider">{l}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })()}
//           </motion.div>
//         </div>
//       </section>

//       {/* ==========================================
//           3. DEEP TECH ARSENAL
//           ========================================== */}
//       <section className="relative z-10 py-32 px-6 border-b border-[#522C5D]/25 overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
//             <h2 className="text-5xl md:text-6xl font-black text-[#FFE3D8] flex items-center justify-center gap-4 mb-4 drop-shadow-xl">
//               <Server className="w-11 h-11 text-[#E3B6B1]" /> Deep Tech Arsenal
//             </h2>
//             <p className="text-[#E3B6B1] text-xl font-light">The foundational stack driving my 4D digital architecture.</p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: 2000 }}>
//             {[
//               { title: "Intelligence Core", icon: Layers, items: ["Deep Learning", "LLM Fine-Tuning", "DBMS & DSA", "Computer Vision", "Statistics & Probability", "Advanced Statistics", "ANN · CNN · Transformers", "Business Intelligence", "Data Warehouses", "Deepfake Forensics", "Satellite Intelligence"] },
//               { title: "Syntax & Libraries", icon: Code2, items: ["Python (Advanced)", "PyTorch / TensorFlow", "HuggingFace Transformers", "Scikit-Learn / Pandas / NumPy", "DeepChem / OpenCV", "Matplotlib / Seaborn", "SQL / C++ / JavaScript"], mono: true },
//               { title: "Environments & Tools", icon: Workflow, items: ["Google Colab Pro", "Jupyter Lab", "VS Code", "Kaggle Kernels", "Anaconda / Conda", "Git / GitHub CLI", "Next.js / Node.js / MongoDB"], grid: true },
//             ].map((cell, i) => {
//               const tilt = useTilt(7);
//               const Icon = cell.icon;
//               return (
//                 <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
//                   className="bg-gradient-to-br from-[#29104A]/30 to-[#100012] p-[1.5px] rounded-3xl group transform-gpu hover:-translate-y-5 hover:shadow-[0_40px_80px_rgba(82,44,93,0.7)] transition-all duration-500"
//                   {...tilt}>
//                   <div className="bg-[#100012]/96 backdrop-blur-xl h-full p-8 rounded-[22px] group-hover:bg-[#150016] transition-colors relative overflow-hidden flex flex-col">
//                     <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-125 transition-transform duration-1000 pointer-events-none">
//                       <Icon className="w-52 h-52 text-[#E3B6B1]" />
//                     </div>
//                     <h3 className="text-xl font-black mb-6 text-[#FFE3D8] flex items-center gap-3 relative z-10 border-b border-[#522C5D] pb-4">
//                       <Icon className="w-5 h-5 text-[#E3B6B1]" /> {cell.title}
//                     </h3>
//                     {cell.mono ? (
//                       <div className="flex flex-col gap-2.5 font-mono text-sm relative z-10">
//                         {cell.items.map(t => (
//                           <div key={t} className="flex items-center gap-3 px-4 py-3 bg-[#150016] border border-[#522C5D] text-[#E3B6B1] rounded-xl hover:border-[#E3B6B1] transition-colors group/item">
//                             <div className="w-1.5 h-1.5 rounded-full bg-[#845162] group-hover/item:bg-[#E3B6B1] transition-colors flex-shrink-0" /> {t}
//                           </div>
//                         ))}
//                       </div>
//                     ) : cell.grid ? (
//                       <div className="grid grid-cols-2 gap-2.5 relative z-10">
//                         {cell.items.map(t => (
//                           <div key={t} className="px-3 py-3.5 bg-[#29104A]/25 border border-[#522C5D] text-[#FFE3D8] rounded-xl text-center text-xs font-bold hover:border-[#E3B6B1] hover:bg-[#522C5D]/30 transition-colors cursor-default">{t}</div>
//                         ))}
//                       </div>
//                     ) : (
//                       <div className="flex flex-wrap gap-2 relative z-10">
//                         {cell.items.map(t => (
//                           <span key={t} className="px-3 py-1.5 bg-[#29104A]/50 border border-[#522C5D] text-[#FFE3D8] text-xs font-bold rounded-lg hover:border-[#E3B6B1] hover:bg-[#522C5D]/35 transition-colors cursor-default">{t}</span>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ==========================================
//           4. DEEP LEARNING LABORATORY
//           ========================================== */}
//       <section className="relative z-10 py-32 px-6 bg-[#150016] border-b border-[#522C5D]/25 overflow-hidden">
//         <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E3B6B1]/12 to-transparent pointer-events-none" />
//         <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#845162]/12 to-transparent pointer-events-none" />

//         <div className="max-w-6xl mx-auto relative z-10">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-24">
//             <h2 className="text-5xl md:text-7xl font-black text-[#FFE3D8] mb-6 inline-flex items-center gap-4 drop-shadow-[0_0_30px_rgba(227,182,177,0.25)]">
//               <Beaker className="w-14 h-14 text-[#E3B6B1] animate-bounce" /> The Laboratory
//             </h2>
//             <p className="text-[#E3B6B1] text-xl font-light max-w-3xl mx-auto">
//               Abstracting complex models into purely data-driven, scalable, and high-precision architectures.
//             </p>
//           </motion.div>

//           <div className="space-y-24">
//             {/* EXPERIMENT 01 */}
//             {(() => {
//               const tilt = useTilt(5);
//               return (
//                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} animate={floatMed}
//                   className="bg-[#100012]/80 backdrop-blur-2xl border-2 border-[#522C5D] hover:border-[#E3B6B1]/40 rounded-[40px] p-8 md:p-12 relative overflow-visible group transition-colors duration-700 shadow-[0_30px_80px_rgba(41,16,74,0.7)]"
//                   {...tilt}>
//                   <div className="absolute -inset-3 bg-gradient-to-r from-[#522C5D] to-[#29104A] rounded-[46px] blur-xl opacity-0 group-hover:opacity-35 transition-opacity duration-700 -z-10 pointer-events-none" />
//                   <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-[0.025] group-hover:scale-110 transition-transform duration-1000 pointer-events-none"><ShieldCheck size={420} /></div>
//                   <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#845162]/25 border border-[#845162] text-[#FFE3D8] font-mono text-xs font-bold mb-8 rounded-full shadow-[0_0_20px_rgba(132,81,98,0.4)]">
//                     <motion.span animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-[#FFE3D8] block" />
//                     EXPERIMENT 01 — DEEPFAKE FORENSICS
//                   </div>
//                   <div className="grid lg:grid-cols-5 gap-12 relative z-10">
//                     <div className="lg:col-span-2">
//                       <h3 className="text-4xl font-black text-[#FFE3D8] mb-4 group-hover:text-[#E3B6B1] transition-colors">Deepfake Forensics Architecture</h3>
//                       <p className="text-[#E3B6B1] text-base leading-relaxed mb-4">Engineered a highly specialized ablation pipeline combining local texture extraction (CNNs) with global contextual reasoning (ViTs). Analyzed synthetic manipulations across a massive scale to establish a defensive AI baseline.</p>
//                       <div className="bg-[#100012]/80 border border-[#522C5D]/50 rounded-xl px-4 py-3 mb-6 text-xs font-mono text-[#E3B6B1]/70">
//                         <span className="text-[#845162] uppercase tracking-wider text-[9px] block mb-1">Architecture Flow</span>
//                         ResNet-18 → Multi-Scale Features → ViT Encoder → Fusion Head → Binary Classification
//                       </div>
//                       <a href="https://github.com/Abu-Sameer-66/Deepfake-Forensics-SOTA-Hybrid" target="_blank" rel="noreferrer"
//                         className="inline-flex items-center gap-3 text-[#100012] bg-[#E3B6B1] hover:bg-[#FFE3D8] px-7 py-3.5 rounded-xl font-black text-sm transition-all shadow-[0_0_30px_rgba(227,182,177,0.4)] hover:-translate-y-1">
//                         <Github className="w-5 h-5" /> View Architecture
//                       </a>
//                     </div>
//                     <div className="lg:col-span-3 grid grid-cols-2 gap-4">
//                       {[
//                         { l: "Dataset Scale", v: "140,000", sub: "images", icon: Database, hero: false },
//                         { l: "Core Pipeline", v: "ResNet-ViT", sub: "Hybrid", icon: Workflow, hero: false },
//                         { l: "SOTA Precision", v: "99.92%", sub: "best in class", icon: Target, hero: true },
//                         { l: "F1 Score Max", v: "99.39%", sub: "on validation", icon: Activity, hero: false },
//                       ].map(({ l, v, sub, icon: Icon, hero }) => (
//                         <motion.div key={l} animate={hero ? glowPulse : {}}
//                           className={`rounded-2xl p-5 flex flex-col justify-center relative overflow-hidden group/box transition-colors ${hero ? "bg-gradient-to-br from-[#522C5D] to-[#29104A] border border-[#E3B6B1]/30 shadow-[0_0_40px_rgba(227,182,177,0.25)]" : "bg-[#150016] border border-[#522C5D] hover:border-[#845162]"}`}>
//                           <Icon className="absolute right-3 top-3 w-10 h-10 text-[#522C5D] opacity-20 group-hover/box:scale-125 transition-transform pointer-events-none" />
//                           <span className="text-[#845162] font-mono text-[10px] font-bold uppercase mb-1 tracking-widest">{l}</span>
//                           <span className={`font-black text-[#FFE3D8] ${hero ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"}`}>{v}</span>
//                           <span className="text-xs text-[#E3B6B1]/60 font-mono mt-0.5">{sub}</span>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })()}

//             {/* EXPERIMENT 02 */}
//             {(() => {
//               const tilt = useTilt(5);
//               return (
//                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
//                   animate={{ y: [0, -12, 0], transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
//                   className="bg-[#100012]/80 backdrop-blur-2xl border-2 border-[#522C5D] hover:border-[#E3B6B1]/40 rounded-[40px] p-8 md:p-12 relative overflow-visible group transition-colors duration-700 shadow-[0_30px_80px_rgba(41,16,74,0.7)]"
//                   {...tilt}>
//                   <div className="absolute -inset-3 bg-gradient-to-l from-[#522C5D] to-[#29104A] rounded-[46px] blur-xl opacity-0 group-hover:opacity-35 transition-opacity duration-700 -z-10 pointer-events-none" />
//                   <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-[0.025] group-hover:scale-110 transition-transform duration-1000 pointer-events-none"><Satellite size={420} /></div>
//                   <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E3B6B1]/15 border border-[#E3B6B1]/40 text-[#FFE3D8] font-mono text-xs font-bold mb-8 rounded-full shadow-[0_0_20px_rgba(227,182,177,0.2)]">
//                     <motion.span animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-[#FFE3D8] block" />
//                     EXPERIMENT 02 — SATELLITE INTELLIGENCE
//                   </div>
//                   <div className="grid lg:grid-cols-5 gap-12 relative z-10">
//                     <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 order-2 lg:order-1">
//                       {[
//                         { l: "Data Space", v: "EuroSAT", sub: "13 spectral channels", hero: false },
//                         { l: "Engine", v: "HAM + ViT", sub: "Hybrid Attention", hero: false },
//                         { l: "Baseline (ANN)", v: "64.00%", sub: "standard approach", hero: false, dim: true },
//                         { l: "SOTA Leap", v: "89.00%+", sub: "+25% improvement", hero: true },
//                       ].map(({ l, v, sub, hero, dim }) => (
//                         <motion.div key={l} animate={hero ? glowPulse : {}}
//                           className={`rounded-2xl p-5 flex flex-col justify-center transition-colors ${hero ? "bg-gradient-to-br from-[#522C5D] to-[#29104A] border border-[#E3B6B1]/30 shadow-[0_0_40px_rgba(227,182,177,0.25)]" : "bg-[#150016] border border-[#522C5D] hover:border-[#E3B6B1]/30"}`}>
//                           <span className="text-[#845162] font-mono text-[10px] font-bold uppercase mb-1 tracking-widest">{l}</span>
//                           <span className={`font-black ${hero ? "text-4xl text-[#FFE3D8]" : dim ? "text-3xl text-[#845162]" : "text-2xl text-[#FFE3D8]"}`}>{v}</span>
//                           <span className="text-xs text-[#E3B6B1]/60 font-mono mt-0.5">{sub}</span>
//                         </motion.div>
//                       ))}
//                     </div>
//                     <div className="lg:col-span-2 order-1 lg:order-2">
//                       <h3 className="text-4xl font-black text-[#FFE3D8] mb-4 group-hover:text-[#E3B6B1] transition-colors">Multi-Spectral Intelligence</h3>
//                       <p className="text-[#E3B6B1] text-base leading-relaxed mb-4">Transitioned from standard 3-channel RGB to complex 13-channel data. Deployed Hybrid Attention Mechanism (HAM) and ViTs to classify Earth Observation data, detecting minute land-use shifts for environmental intelligence.</p>
//                       <div className="bg-[#100012]/80 border border-[#522C5D]/50 rounded-xl px-4 py-3 mb-6 text-xs font-mono text-[#E3B6B1]/70">
//                         <span className="text-[#845162] uppercase tracking-wider text-[9px] block mb-1">Architecture Flow</span>
//                         13-Ch Input → Spectral Attention → HAM Fusion → ViT Encoder → Land-Use Labels
//                       </div>
//                       <a href="https://github.com/Abu-Sameer-66/SOTA-Multispectral-Satellite-Forensics-EuroSAT" target="_blank" rel="noreferrer"
//                         className="inline-flex items-center gap-3 text-[#100012] bg-[#E3B6B1] hover:bg-[#FFE3D8] px-7 py-3.5 rounded-xl font-black text-sm transition-all shadow-[0_0_30px_rgba(227,182,177,0.4)] hover:-translate-y-1">
//                         <Github className="w-5 h-5" /> Explore Code
//                       </a>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })()}
//           </div>
//         </div>
//       </section>

//       {/* ==========================================
//           5. PROFESSIONAL ARCHITECTURE (UPDATED)
//           ========================================== */}
//       <section className="relative z-10 py-32 px-6 border-b border-[#522C5D]/25">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
//             className="text-4xl md:text-6xl font-black text-[#FFE3D8] mb-20 flex items-center justify-center gap-4 text-center">
//             <Briefcase className="w-12 h-12 text-[#E3B6B1]" /> Professional Architecture
//           </motion.h2>

//           <div className="relative border-l-4 border-[#522C5D] ml-4 md:ml-[50%] space-y-20">
//             {experiences.map((exp, idx) => {
//               const tilt = useTilt(6);
//               const Icon = exp.icon;
//               return (
//                 <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
//                   className={`relative pl-10 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right md:-translate-x-full md:pr-16 md:left-0" : "md:pl-16"}`}>
//                   <div className={`absolute top-1 w-9 h-9 rounded-full border-[3px] border-[#100012] shadow-[0_0_25px_rgba(227,182,177,0.7)] flex items-center justify-center ${idx % 2 === 0 ? "-left-[18px] md:left-auto md:-right-[18px]" : "-left-[18px]"}`}
//                     style={{ background: exp.color }}>
//                     <Icon className="w-4 h-4 text-[#100012]" />
//                   </div>

//                   <div className="bg-[#29104A]/25 backdrop-blur-xl p-8 rounded-[28px] border border-[#522C5D] hover:border-[#E3B6B1]/40 hover:shadow-[0_20px_60px_rgba(82,44,93,0.6)] transition-all transform-gpu hover:-translate-y-3 duration-500 group" {...tilt}>
//                     <div className={`flex items-start gap-3 mb-3 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
//                       <span className="text-[10px] font-mono font-bold text-[#845162] bg-[#150016] border border-[#522C5D] px-3 py-1 rounded-lg flex-shrink-0">{exp.period}</span>
//                     </div>
//                     <h3 className="text-2xl font-black text-[#FFE3D8] mb-1 group-hover:text-[#E3B6B1] transition-colors">{exp.title}</h3>
//                     <p className="text-[#E3B6B1] font-mono text-sm font-bold mb-4" style={{ color: exp.color }}>{exp.org}</p>
//                     <p className="text-[#FFE3D8]/75 font-light leading-relaxed text-sm mb-5">{exp.desc}</p>

//                     {/* Impact bullets */}
//                     <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
//                       {exp.impact.map(i => (
//                         <span key={i} className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#E3B6B1]/70 bg-[#150016] border border-[#522C5D]/60 px-2.5 py-1 rounded-lg hover:border-[#845162] transition-colors">
//                           <span className="w-1 h-1 rounded-full bg-[#845162] flex-shrink-0" /> {i}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ==========================================
//           6. PROJECTS — CORE AI
//           ========================================== */}
//       <section className="relative z-10 py-32 px-6 bg-[#0a000c] border-b border-[#522C5D]/25">
//         <div className="max-w-7xl mx-auto">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-6">
//             <h2 className="text-5xl md:text-6xl font-black text-[#FFE3D8] mb-3">Building Intelligence</h2>
//             <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#E3B6B1] to-[#845162]">One Model at a Time</p>
//           </motion.div>

//           {/* Section divider */}
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-center gap-4 mb-8 mt-16">
//             <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#522C5D] to-transparent" />
//             <span className="font-mono text-xs text-[#845162] uppercase tracking-[0.25em] px-4 py-2 border border-[#522C5D]/50 rounded-full">Core AI Projects</span>
//             <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#522C5D] to-transparent" />
//           </motion.div>

//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerFast}
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
//             {coreProjects.map((p, i) => <CoreProjectCard key={i} p={p} idx={i} />)}
//           </motion.div>
//         </div>
//       </section>

//       {/* ==========================================
//           7. GSoC RESEARCH PROJECTS — DEDICATED SECTION
//           ========================================== */}
//       <section className="relative z-10 py-32 px-6 bg-[#06080a] border-b border-[#522C5D]/25 overflow-hidden">
//         {/* GSoC glow aura */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-[radial-gradient(ellipse,rgba(166,206,57,0.04),transparent_70%)] blur-2xl" />
//         </div>

//         <div className="max-w-7xl mx-auto relative z-10">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
//             <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
//               <div>
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#A6CE39]/10 border border-[#A6CE39]/30 text-[#A6CE39] font-mono text-xs rounded-full mb-4 font-black">
//                   <Atom className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "4s" }} />
//                   GOOGLE SUMMER OF CODE 2026
//                 </div>
//                 <h2 className="text-4xl md:text-5xl font-black text-[#FFE3D8] leading-tight">
//                   GSoC Research Projects<br />
//                   <span className="text-[#A6CE39]">DeepChem Ecosystem</span>
//                 </h2>
//               </div>
//               <div className="bg-[#0a1a00]/60 border border-[#A6CE39]/25 rounded-2xl p-6 text-center min-w-[200px] backdrop-blur-xl">
//                 <span className="block text-4xl font-black text-[#FFE3D8] mb-1">5</span>
//                 <span className="text-[10px] font-mono text-[#A6CE39] uppercase tracking-widest">Research Repos</span>
//                 <span className="block text-xs text-[#E3B6B1]/50 mt-1 font-mono">Cheminformatics · LLMs</span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Flagship featured */}
//           {(() => {
//             const flagship = gsocProjects.find(p => p.flagship)!;
//             const tilt = useTilt(6);
//             return (
//               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
//                 className="mb-8 bg-gradient-to-br from-[#0f1f00]/80 to-[#100012]/90 border-2 border-[#A6CE39]/30 rounded-[32px] p-8 md:p-12 relative overflow-hidden group hover:border-[#A6CE39]/60 transition-colors duration-500 shadow-[0_0_60px_rgba(166,206,57,0.06)]"
//                 {...tilt}>
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
//                   style={{ background: "radial-gradient(800px at 50% 0%,rgba(166,206,57,0.05),transparent 70%)" }} />
//                 <div className="absolute top-0 right-0 -mt-12 -mr-12 opacity-[0.03] pointer-events-none"><Atom size={400} /></div>

//                 <div className="flex flex-wrap items-start gap-4 mb-6">
//                   <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#A6CE39]/15 border border-[#A6CE39]/40 text-[#A6CE39] font-mono text-xs rounded-full font-black">
//                     <Trophy className="w-3.5 h-3.5" /> FLAGSHIP CONTRIBUTION
//                   </span>
//                   <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#100012] border border-[#522C5D] text-[#E3B6B1] font-mono text-xs rounded-full">
//                     <Sparkles className="w-3.5 h-3.5" /> GSoC 2026 · DeepChem
//                   </span>
//                 </div>

//                 <div className="grid lg:grid-cols-2 gap-10 relative z-10">
//                   <div>
//                     <h3 className="text-3xl font-black text-[#FFE3D8] mb-3">{flagship.name}</h3>
//                     <p className="text-[#E3B6B1]/75 leading-relaxed mb-5">{flagship.desc}</p>
//                     <div className="bg-[#06080e]/80 border border-[#A6CE39]/20 rounded-xl px-4 py-3 mb-5">
//                       <span className="block text-[9px] font-mono text-[#A6CE39] uppercase tracking-widest mb-1">Architecture Pipeline</span>
//                       <span className="text-xs text-[#E3B6B1]/75 font-mono">{flagship.arch}</span>
//                     </div>
//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {flagship.tags.map(t => (
//                         <span key={t} className="px-2.5 py-1 text-[10px] font-bold border border-[#A6CE39]/25 text-[#A6CE39]/80 rounded-lg bg-[#A6CE39]/05">{t}</span>
//                       ))}
//                     </div>
//                     <a href={flagship.link} target="_blank" rel="noreferrer"
//                       className="inline-flex items-center gap-3 bg-[#A6CE39] text-[#06080a] font-black px-6 py-3 rounded-xl text-sm hover:bg-[#bfe05c] hover:-translate-y-1 transition-all shadow-[0_0_30px_rgba(166,206,57,0.3)]">
//                       <Github className="w-4 h-4" /> View Flagship Repository
//                     </a>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     {[["12 Weeks", "Integration Roadmap"], ["OLMo-7B", "Architecture Used"], ["QLoRA", "Fine-Tuning Method"], ["DeepChem", "Target Ecosystem"]].map(([v, l]) => (
//                       <div key={l} className="bg-[#06080e]/80 border border-[#A6CE39]/15 rounded-2xl p-5 hover:border-[#A6CE39]/35 transition-colors">
//                         <span className="block text-[10px] font-mono text-[#A6CE39] uppercase tracking-widest mb-1.5">{l}</span>
//                         <span className="text-xl font-black text-[#FFE3D8]">{v}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })()}

//           {/* Other GSoC cards */}
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerFast}
//             className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
//             {gsocProjects.filter(p => !p.flagship).map((p, i) => <GSoCCard key={i} p={p} idx={i} />)}
//           </motion.div>
//         </div>
//       </section>

//       {/* ==========================================
//           8. ADDITIONAL PROJECTS
//           ========================================== */}
//       <section className="relative z-10 py-20 px-6 border-b border-[#522C5D]/25 bg-[#100012]">
//         <div className="max-w-7xl mx-auto">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
//             className="flex items-center gap-4 mb-10">
//             <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#522C5D] to-transparent" />
//             <span className="font-mono text-xs text-[#845162] uppercase tracking-[0.25em] px-4 py-2 border border-[#522C5D]/50 rounded-full">Additional Projects</span>
//             <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#522C5D] to-transparent" />
//           </motion.div>

//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerFast}
//             className="grid md:grid-cols-3 gap-6">
//             {additionalProjects.map((p, i) => {
//               const tilt = useTilt(9);
//               const Icon = p.icon;
//               return (
//                 <motion.div key={i} variants={scaleIn}
//                   className="bg-[#150016]/90 border border-[#522C5D]/50 rounded-[22px] p-7 group hover:border-[#E3B6B1]/30 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(82,44,93,0.5)] transition-all duration-400 flex flex-col gap-4"
//                   {...tilt}>
//                   <div className="w-10 h-10 rounded-xl bg-[#29104A]/60 border border-[#522C5D] flex items-center justify-center group-hover:border-[#845162] transition-colors">
//                     <Icon className="w-5 h-5 text-[#E3B6B1]" />
//                   </div>
//                   <h3 className="text-lg font-black text-[#FFE3D8] leading-tight group-hover:text-[#E3B6B1] transition-colors">{p.name}</h3>
//                   <p className="text-[#E3B6B1]/65 text-sm leading-relaxed font-light flex-1">{p.desc}</p>
//                   <div className="flex flex-wrap gap-1.5">
//                     {p.tags.map(t => <span key={t} className="px-2 py-0.5 text-[9px] font-bold border border-[#522C5D]/50 text-[#E3B6B1]/60 rounded">{t}</span>)}
//                   </div>
//                   <a href={p.link} target="_blank" rel="noreferrer"
//                     className="inline-flex items-center gap-2 text-[#E3B6B1] text-xs font-bold font-mono uppercase tracking-wider hover:gap-3 transition-all w-fit">
//                     <Github className="w-3.5 h-3.5" /> GitHub <ChevronRight className="w-3.5 h-3.5" />
//                   </a>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* ==========================================
//           9. ACADEMIC FOUNDATION (UPDATED WITH COURSES)
//           ========================================== */}
//       <section className="relative z-10 py-32 px-6 bg-gradient-to-b from-[#150016] to-[#29104A]/15 border-b border-[#522C5D]/25">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
//             className="text-4xl md:text-6xl font-black text-[#FFE3D8] mb-16 flex items-center justify-center gap-4 text-center">
//             <GraduationCap className="w-12 h-12 text-[#E3B6B1]" /> Academic Foundation
//           </motion.h2>

//           <div className="grid md:grid-cols-2 gap-8" style={{ perspective: 1200 }}>
//             {/* Main degree card */}
//             {(() => {
//               const tilt = useTilt(6);
//               return (
//                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
//                   className="bg-gradient-to-br from-[#522C5D]/70 to-[#29104A]/70 p-10 rounded-[36px] border border-[#E3B6B1]/30 relative overflow-hidden group hover:border-[#E3B6B1]/60 hover:shadow-[0_30px_80px_rgba(41,16,74,0.8)] transition-all duration-500"
//                   {...tilt}>
//                   <div className="absolute -right-10 -bottom-10 opacity-[0.07] group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-1000 pointer-events-none">
//                     <GraduationCap className="w-80 h-80 text-[#FFE3D8]" />
//                   </div>
//                   <div className="inline-block px-4 py-2 bg-[#100012] text-[#E3B6B1] text-xs font-bold font-mono rounded-xl mb-5 border border-[#522C5D]">OCT 2023 – MAY 2027</div>
//                   <h3 className="text-4xl lg:text-5xl font-black text-[#FFE3D8] mb-3 relative z-10">BS in Data Science</h3>
//                   <p className="text-[#E3B6B1] text-xl mb-6 relative z-10 font-bold">The Islamia University of Bahawalpur</p>
//                   <div className="flex flex-wrap gap-3 mb-6 font-mono text-sm text-[#FFE3D8] relative z-10">
//                     <span className="bg-[#100012]/80 border border-[#E3B6B1]/40 px-5 py-2.5 rounded-xl shadow-lg">CGPA: <span className="font-black text-[#E3B6B1]">3+ / 4.0</span></span>
//                     <span className="bg-[#100012]/80 border border-[#E3B6B1]/40 px-5 py-2.5 rounded-xl shadow-lg font-black text-[#E3B6B1]">Active Researcher</span>
//                   </div>

//                   {/* COURSES section */}
//                   <div className="relative z-10 border-t border-[#E3B6B1]/15 pt-6">
//                     <span className="block text-[10px] font-mono font-black text-[#845162] uppercase tracking-[0.25em] mb-3">Key Courses</span>
//                     <div className="flex flex-wrap gap-2">
//                       {uniCourses.map(c => (
//                         <span key={c} className="px-2.5 py-1 text-[10px] font-bold bg-[#100012]/70 border border-[#522C5D]/60 text-[#E3B6B1]/75 rounded-lg hover:border-[#E3B6B1]/40 hover:text-[#FFE3D8] transition-colors cursor-default">{c}</span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })()}

//             {/* Previous education stack */}
//             <div className="space-y-6 flex flex-col justify-between">
//               {[
//                 { period: "APR 2021 – MAY 2023", title: "Intermediate (Pre-Engineering)", inst: "Punjab Group of Colleges Bahawalpur", desc: "Built strong analytical foundations in advanced Mathematics, Physics, and Chemistry. Active STEP pre-engineering cohort member with ECAT and FUNGAT preparation.", extra: null },
//                 { period: "APR 2019 – MAY 2021", title: "Matriculation (Science)", inst: "Govt Technical High School Bahawalpur", desc: "Core STEM foundation with Biology, Chemistry, Physics, and Mathematics.", extra: "1037 / 1100" }
//               ].map((e, i) => {
//                 const tilt = useTilt(8);
//                 return (
//                   <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
//                     className="bg-[#29104A]/35 p-9 rounded-3xl border border-[#522C5D] hover:border-[#E3B6B1]/40 hover:bg-[#522C5D]/20 transition-all duration-300 flex-1" {...tilt}>
//                     <div className="inline-block px-3 py-1.5 w-max bg-[#100012] text-[#E3B6B1] text-[10px] font-bold font-mono rounded-lg mb-4 border border-[#522C5D]">{e.period}</div>
//                     <h3 className="text-2xl font-bold text-[#FFE3D8] mb-2">{e.title}</h3>
//                     <p className="text-[#845162] font-black text-lg mb-4">{e.inst}</p>
//                     <p className="text-[#E3B6B1]/70 leading-relaxed font-light text-sm">{e.desc}</p>
//                     {e.extra && (
//                       <div className="flex items-center gap-4 mt-5">
//                         <div className="px-5 py-2.5 border-2 border-[#E3B6B1] text-[#FFE3D8] text-xl font-black font-mono rounded-xl bg-[#522C5D]/35 shadow-[0_0_20px_rgba(227,182,177,0.2)]">{e.extra}</div>
//                         <p className="text-xs font-mono text-[#E3B6B1] font-bold">Top 1% Elite Cohort</p>
//                       </div>
//                     )}
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==========================================
//           10. MEDIUM / KNOWLEDGE SHARING
//           ========================================== */}
//       <section className="relative z-10 py-32 px-6 bg-[#100012] border-b border-[#522C5D]/40 overflow-hidden">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[radial-gradient(ellipse,rgba(82,44,93,0.25),transparent_70%)] blur-3xl pointer-events-none" />
//         <div className="max-w-6xl mx-auto">
//           {(() => {
//             const tilt = useTilt(6);
//             return (
//               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
//                 className="bg-gradient-to-r from-[#150016] to-[#29104A]/35 border border-[#522C5D] rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 shadow-[0_40px_100px_rgba(21,0,22,0.7)] backdrop-blur-2xl group hover:border-[#845162] transition-colors duration-700"
//                 {...tilt}>
//                 <div className="lg:w-1/3 text-center lg:text-left">
//                   <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 6, repeat: Infinity }}
//                     className="w-24 h-24 bg-[#522C5D]/25 border border-[#845162] rounded-3xl flex items-center justify-center mx-auto lg:mx-0 mb-8 shadow-lg">
//                     <BookOpen className="w-12 h-12 text-[#E3B6B1]" />
//                   </motion.div>
//                   <h2 className="text-4xl md:text-5xl font-black text-[#FFE3D8] leading-tight">
//                     Knowledge<br /><span className="text-[#845162]">Distribution.</span>
//                   </h2>
//                 </div>
//                 <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-[#522C5D] pt-8 lg:pt-0 lg:pl-12">
//                   <h3 className="text-2xl md:text-3xl font-bold text-[#FFE3D8] mb-5 leading-snug">"The Accuracy Paradox: Why 95% Accuracy in Medical AI is Often a Lie"</h3>
//                   <p className="text-[#E3B6B1] text-base font-light mb-8 leading-relaxed">A deep dive into the reality of AI in the medical field. Breaking down the metrics that actually matter — Precision, Recall, F1 — versus the marketing hype of pure "accuracy." Essential reading for true AI architects building in high-stakes domains.</p>
//                   <a href="https://medium.com/@sameerdataanalyst66/the-accuracy-paradox-why-95-accuracy-in-medical-ai-is-often-a-lie-7234156ee326" target="_blank" rel="noreferrer"
//                     className="inline-flex items-center gap-3 bg-transparent border-2 border-[#E3B6B1] text-[#E3B6B1] px-8 py-4 rounded-full font-bold text-base hover:bg-[#E3B6B1] hover:text-[#100012] transition-all duration-300 shadow-[0_0_20px_rgba(227,182,177,0.1)] hover:shadow-[0_0_40px_rgba(227,182,177,0.35)]">
//                     Read Article on Medium <ExternalLink className="w-5 h-5" />
//                   </a>
//                 </div>
//               </motion.div>
//             );
//           })()}
//         </div>
//       </section>

//       {/* ==========================================
//           11. COMMUNITY & OPEN SOURCE
//           ========================================== */}
//       <section className="relative z-10 py-32 px-6 bg-[#150016] border-b border-[#522C5D]/25">
//         <div className="max-w-6xl mx-auto">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-black text-[#FFE3D8] mb-4">Open Source Ecosystem</h2>
//             <p className="text-[#E3B6B1] text-lg max-w-2xl mx-auto font-light">Democratizing deep learning through public collaboration.</p>
//           </motion.div>
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerWrap} className="grid md:grid-cols-3 gap-8">
//             {[
//               { icon: Github, val: "650+", label: "Commits", sub: "github.com", featured: false },
//               { icon: FolderGit2, val: "15+", label: "Elite Repos", sub: "Active Projects", featured: false },
//               { icon: Linkedin, val: "2,200+", label: "Network", sub: "linkedin.com", featured: true },
//             ].map(({ icon: Icon, val, label, sub, featured }, i) => {
//               const tilt = useTilt(10);
//               return (
//                 <motion.div key={i} variants={scaleIn}
//                   className={`p-10 rounded-[30px] text-center shadow-lg hover:border-[#E3B6B1] transition-all group hover:-translate-y-4 duration-400 ${featured ? "bg-gradient-to-br from-[#522C5D] to-[#29104A] border border-[#E3B6B1]/40 shadow-[0_20px_40px_rgba(82,44,93,0.5)]" : "bg-[#29104A]/25 border border-[#522C5D]"}`}
//                   {...tilt}>
//                   <Icon className="w-12 h-12 mx-auto mb-6 text-[#E3B6B1] group-hover:-translate-y-2 transition-transform duration-300" />
//                   <h4 className="text-5xl font-black text-[#FFE3D8] mb-3">{val}</h4>
//                   <p className="text-sm font-bold font-mono text-[#845162] uppercase tracking-widest mb-1">{label}</p>
//                   <p className="text-xs font-mono text-[#E3B6B1]/50">{sub}</p>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* ==========================================
//           12. ELITE CREDENTIALS
//           ========================================== */}
//       <section className="relative z-10 py-32 px-6 bg-gradient-to-t from-[#100012] to-[#150016] border-b border-[#522C5D]/25">
//         <div className="max-w-6xl mx-auto">
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-black text-[#FFE3D8] mb-4 flex items-center justify-center gap-4">
//               <Award className="w-10 h-10 text-[#E3B6B1]" /> Elite Credentials
//             </h2>
//             <p className="text-[#E3B6B1] text-lg max-w-2xl mx-auto font-light">Certified rigorous training and continuous upskilling.</p>
//           </motion.div>
//           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerWrap} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {certifications.map((cert, idx) => {
//               const tilt = useTilt(10);
//               const isActive = cert.date === "In Progress";
//               return (
//                 <motion.div key={idx} variants={scaleIn}
//                   className={`backdrop-blur-md border p-8 rounded-3xl flex flex-col justify-between hover:bg-[#29104A]/35 hover:-translate-y-2 transition-all transform-gpu duration-300 group ${isActive ? "bg-[#29104A]/25 border-[#845162]/50" : "bg-[#29104A]/15 border-[#522C5D]"} hover:border-[#E3B6B1]`}
//                   {...tilt}>
//                   <div>
//                     <div className="flex items-start justify-between mb-5">
//                       <FileText className="w-8 h-8 text-[#845162] group-hover:text-[#E3B6B1] transition-colors" />
//                       {isActive && (
//                         <span className="flex items-center gap-1.5 text-[9px] font-mono font-black text-[#A6CE39] bg-[#A6CE39]/10 border border-[#A6CE39]/30 px-2.5 py-1 rounded-full">
//                           <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-[#A6CE39]" />
//                           IN PROGRESS
//                         </span>
//                       )}
//                     </div>
//                     <h4 className="text-base font-bold text-[#FFE3D8] mb-2 leading-snug">{cert.title}</h4>
//                     <p className="text-sm text-[#E3B6B1] font-bold mb-4">{cert.issuer}</p>
//                   </div>
//                   <div className="pt-4 border-t border-[#522C5D]">
//                     <span className="block text-[9px] font-black font-mono text-[#E3B6B1] opacity-50 truncate">{cert.id}</span>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </section>

//       {/* ==========================================
//           13. CONTACT — END SYSTEM
//           ========================================== */}
//       <footer id="contact" className="relative z-10 pt-40 pb-12 px-6 bg-[#100012] overflow-hidden text-center">
//         <style dangerouslySetInnerHTML={{ __html: `
//           @keyframes scanline { 0%{transform:translateX(-100vw)} 100%{transform:translateX(100vw)} }
//           @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
//           @keyframes gradient-pan { 0%{background-position:0%} 100%{background-position:200%} }
//           @keyframes shimmer { 0%{transform:translateX(-100%)} 100%{transform:translateX(300%)} }
//           .animate-scan{animation:scanline 3s ease-in-out infinite}
//           .animate-marquee{animation:marquee 22s linear infinite;display:inline-block;white-space:nowrap}
//         `}} />

//         <div className="absolute top-0 left-0 w-full h-[3px] overflow-hidden">
//           <div className="w-[600px] h-full bg-gradient-to-r from-transparent via-[#E3B6B1] to-transparent animate-scan shadow-[0_0_50px_rgba(227,182,177,1)]" />
//         </div>

//         <div className="absolute top-20 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
//           <div className="animate-marquee text-[8rem] font-black font-mono text-[#E3B6B1]">
//             BUILDING INTELLIGENCE // OPTIMIZING ARCHITECTURES // ENGINEERING THE FUTURE // BUILDING INTELLIGENCE // OPTIMIZING ARCHITECTURES // ENGINEERING THE FUTURE //
//           </div>
//         </div>

//         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-[radial-gradient(ellipse_at_bottom,rgba(82,44,93,0.25),transparent_70%)] pointer-events-none" />

//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerWrap} className="relative max-w-5xl mx-auto z-10">
//           <motion.h2 variants={fadeUp} className="text-6xl md:text-8xl lg:text-9xl font-black text-[#FFE3D8] mb-8 uppercase tracking-tighter drop-shadow-2xl">
//             Let's Engineer<br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3B6B1] via-[#FFE3D8] to-[#845162] animate-pulse">The Future.</span>
//           </motion.h2>

//           <motion.p variants={fadeUp} className="text-[#E3B6B1] text-xl md:text-2xl font-light max-w-3xl mx-auto mb-16 leading-relaxed">
//             If you are building high-end AI architectures, require elite technical strategy, or want to collaborate on global OS research — <strong className="text-[#FFE3D8] font-black border-b border-[#E3B6B1]">the system is ready.</strong>
//           </motion.p>

//           <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
//             <motion.a whileHover={{ scale: 1.05, y: -3 }} href="mailto:sameersain361@gmail.com"
//               className="px-10 py-5 bg-[#E3B6B1] text-[#100012] font-black text-lg tracking-widest uppercase hover:bg-[#FFE3D8] transition-all duration-300 shadow-[0_20px_50px_rgba(227,182,177,0.35)] flex items-center justify-center gap-3 rounded-2xl group">
//               <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Initialize Contact
//             </motion.a>
//             <motion.a whileHover={{ scale: 1.05, y: -3 }} href="https://www.upwork.com/freelancers/~016d309ea83d2c431a" target="_blank" rel="noreferrer"
//               className="px-10 py-5 bg-[#150016] border-2 border-[#522C5D] text-[#FFE3D8] font-black text-lg tracking-widest uppercase hover:border-[#E3B6B1] hover:bg-[#29104A]/45 transition-all duration-300 rounded-2xl shadow-lg">
//               Hire on Upwork
//             </motion.a>
//           </motion.div>

//           {/* Contact details */}
//           <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 text-left">
//             {[
//               { label: "Email", val: "sameersain361@gmail.com", href: "mailto:sameersain361@gmail.com" },
//               { label: "Phone", val: "0304 763 745", href: "tel:0304763745" },
//               { label: "Location", val: "Bahawalpur, Punjab, PK", href: null },
//               { label: "ORCID", val: "0009-0006-1369-7590", href: "https://orcid.org/0009-0006-1369-7590" },
//             ].map(({ label, val, href }) => (
//               <div key={label} className="bg-[#150016]/60 border border-[#522C5D]/50 rounded-2xl p-5 hover:border-[#E3B6B1]/30 transition-colors">
//                 <span className="block text-[9px] font-mono text-[#845162] uppercase tracking-widest mb-2">{label}</span>
//                 {href ? (
//                   <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
//                     className="text-sm text-[#E3B6B1]/80 hover:text-[#FFE3D8] transition-colors font-mono break-all">{val}</a>
//                 ) : (
//                   <span className="text-sm text-[#E3B6B1]/80 font-mono">{val}</span>
//                 )}
//               </div>
//             ))}
//           </motion.div>

//           <div className="w-full border-t border-[#522C5D] pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-mono text-[#E3B6B1]">
//             <p className="flex items-center gap-2">
//               <Code2 className="w-4 h-4" /> ENGINEERED BY <span className="text-[#FFE3D8] font-black text-base ml-1">SAMEER NADEEM</span>
//             </p>
//             <p className="flex items-center gap-3">
//               <span className="relative flex h-3 w-3">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E3B6B1] opacity-75" />
//                 <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E3B6B1]" />
//               </span>
//               SYSTEM ONLINE // ELITE TERMINAL
//             </p>
//           </div>
//         </motion.div>
//       </footer>
//     </main>
//   );
// }



"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Github, Linkedin, Mail, Code2, Cpu, Database,
  Briefcase, GraduationCap, ChevronRight, FolderGit2,
  ExternalLink, Beaker, Globe, Award, ShieldCheck, Satellite,
  TerminalSquare, Network, BookOpen, Layers,
  Fingerprint, Zap, Radar, PlaySquare, FileText, Send,
  Stethoscope, Activity, Target, Workflow, Server, MonitorSmartphone,
  FlaskConical, Atom, Brain, Microscope, Dna, TrendingUp,
  Users, MessageSquare, BarChart3, Sparkles, Star, Trophy,
  GitPullRequest, GitCommit, Phone, AtSign, MapPin
} from "lucide-react";

// =========================================
// ANIMATION VARIANTS
// =========================================
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};
const fadeUpFast = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};
const staggerWrap = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};
const staggerFast = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88, rotateX: 12 },
  visible: { opacity: 1, scale: 1, rotateX: 0, transition: { type: "spring", stiffness: 55, damping: 18, duration: 1.1 } }
};
const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};
const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};
const letterStagger = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};
const floatSlow = {
  y: [0, -18, 0],
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
};
const floatMed = {
  y: [0, -12, 0],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
};
const glowPulse = {
  boxShadow: [
    "0 0 30px rgba(82,44,93,0.4)",
    "0 0 60px rgba(82,44,93,0.8), 0 0 100px rgba(227,182,177,0.2)",
    "0 0 30px rgba(82,44,93,0.4)"
  ],
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
};

// =========================================
// 3D TILT HOOK
// =========================================
function useTilt(strength = 12) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(1200px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg) translateZ(20px)`;
    ref.current.style.transition = "transform 0.05s linear";
  };
  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
    ref.current.style.transition = "transform 0.7s cubic-bezier(0.23,1,0.32,1)";
  };
  return { ref, onMouseMove: handleMove, onMouseLeave: handleLeave };
}

// =========================================
// DATA
// =========================================
const coreProjects = [
  {
    name: "Deepfake Forensics Hybrid",
    link: "https://github.com/Abu-Sameer-66/Deepfake-Forensics-SOTA-Hybrid",
    desc: "SOTA ResNet-18 + Transformer Hybrid achieving 99.92% precision over 140,000 images. Engineered an ablation pipeline combining local texture CNNs with global ViT reasoning to establish a defensive AI baseline.",
    tags: ["ResNet-18", "Transformers", "Computer Vision", "Ablation Study"],
    stats: [{ label: "Precision", val: "99.92%" }, { label: "F1 Score", val: "99.39%" }, { label: "Dataset", val: "140K imgs" }],
    arch: "ResNet-18 → Feature Fusion → Vision Transformer → Classification Head",
    icon: ShieldCheck,
    highlight: true
  },
  {
    name: "Chest X-Ray Vision Transformer",
    link: "https://github.com/Abu-Sameer-66/Chest-XRay-Ablation-ViT",
    desc: "Advanced ViT ablation study for chest X-ray pathology detection. Comparative analysis of attention mechanisms, patch sizes, and positional encodings for medical imaging diagnostics.",
    tags: ["Vision Transformer", "Medical AI", "Ablation Study", "PyTorch"],
    stats: [{ label: "Model", val: "ViT-B/16" }, { label: "Domain", val: "Medical AI" }, { label: "Task", val: "Detection" }],
    arch: "Patch Embedding → Multi-Head Attention → MLP Head → Pathology Labels",
    icon: Stethoscope,
    highlight: false
  },
  {
    name: "PropVal AI Real Estate Engine",
    link: "https://github.com/Abu-Sameer-66/PropVal-Property-Valuation--AI-Real-Estate-Engine",
    desc: "Production-grade Automated Valuation Model (AVM) using Gradient Boosting for intelligent real estate asset valuation. End-to-end pipeline from raw listing data to deployment-ready predictions.",
    tags: ["Gradient Boosting", "PropTech", "Feature Engineering", "Scikit-Learn"],
    stats: [{ label: "Model", val: "XGBoost" }, { label: "Domain", val: "PropTech" }, { label: "Type", val: "Regression" }],
    arch: "Data Pipeline → Feature Engineering → Gradient Boosting → AVM Output",
    icon: TrendingUp,
    highlight: false
  },
  {
    name: "CogniPath Analytics Engine",
    link: "https://github.com/Abu-Sameer-66/CogniPath-Analytics-Engine",
    desc: "AI-driven EdTech analytics engine optimizing academic outcomes via predictive modeling. Identifies at-risk students and recommends personalized learning paths using behavioral data.",
    tags: ["EdTech", "Scikit-Learn", "Predictive Modeling", "Data Analysis"],
    stats: [{ label: "Domain", val: "EdTech" }, { label: "Pipeline", val: "Predictive" }, { label: "Stack", val: "Sklearn" }],
    arch: "Behavioral Data → Feature Extraction → Ensemble Model → Intervention Signal",
    icon: Brain,
    highlight: false
  },
  {
    name: "SpamGuard AI Threat Detection",
    link: "https://github.com/Abu-Sameer-66/SpamGuard-AI-Threat-Detection",
    desc: "Enterprise SMS Phishing & Spam Detection system using advanced NLP architectures. Multi-layer text classification pipeline with explainability for real-time threat identification.",
    tags: ["NLP", "Cybersecurity", "Text Classification", "Explainability"],
    stats: [{ label: "Domain", val: "CyberSec" }, { label: "Pipeline", val: "NLP" }, { label: "Task", val: "Detection" }],
    arch: "TF-IDF / BERT Embedding → Classifier → LIME Explainer → Alert System",
    icon: Zap,
    highlight: false
  },
  {
    name: "Multispectral Satellite Forensics",
    link: "https://github.com/Abu-Sameer-66/SOTA-Multispectral-Satellite-Forensics-EuroSAT",
    desc: "13-channel EuroSAT land-use classification using Hybrid Attention Mechanism (HAM) + ViT. Jumped from 64% ANN baseline to 89%+ SOTA accuracy in environmental intelligence extraction.",
    tags: ["EuroSAT", "HAM", "13-Channel", "Earth Observation"],
    stats: [{ label: "Accuracy", val: "89%+" }, { label: "Baseline", val: "64%" }, { label: "Channels", val: "13 Band" }],
    arch: "13-Ch Spectral → HAM Attention → ViT Encoder → Land-Use Classification",
    icon: Satellite,
    highlight: true
  }
];

const gsocProjects = [
  {
    name: "Mistral7B Tox21 Optimization",
    link: "https://github.com/Abu-Sameer-66/Mistral7B-Tox21-Molecular-Optimization",
    desc: "Native fine-tuning of Mistral-7B on the Tox21 toxicity dataset using 4-bit QLoRA quantization. Establishes an LLM-based molecular classification benchmark within the DeepChem TorchModel framework.",
    tags: ["Mistral-7B", "Tox21", "4-bit QLoRA", "DeepChem"],
    dataset: "Tox21",
    arch: "Mistral-7B → QLoRA Adapters → Tox21 Labels"
  },
  {
    name: "Mistral7B BACE Generalization Study",
    link: "https://github.com/Abu-Sameer-66/Mistral7B-BACE-Generalization-Study",
    desc: "Optimizing Mistral-7B for BACE-1 inhibitor prediction using scaffold-split evaluation. Studies LLM generalization in drug discovery beyond memorization using out-of-distribution molecular scaffolds.",
    tags: ["Drug Discovery", "BACE-1", "Scaffold-Split", "Generalization"],
    dataset: "BACE",
    arch: "Mistral-7B → Scaffold-Split → BACE-1 Binding Prediction"
  },
  {
    name: "Mistral7B ClinTox Study",
    link: "https://github.com/Abu-Sameer-66/Mistral7B-ClinTox-Study",
    desc: "LLM fine-tuning study on the ClinTox dataset for clinical toxicity prediction. Evaluates LoRA adapter efficiency for pharmaceutical safety classification tasks.",
    tags: ["Mistral-7B", "ClinTox", "LoRA", "Safety AI"],
    dataset: "ClinTox",
    arch: "Mistral-7B → LoRA → Clinical Toxicity Binary Classification"
  },
  {
    name: "Mistral7B BBBP Molecular Reasoning",
    link: "https://github.com/Abu-Sameer-66/Mistral7B-BBBP-Molecular-Reasoning",
    desc: "Probing Mistral-7B's capacity for blood-brain barrier permeability (BBBP) prediction. Tests whether LLMs can reason over molecular SMILES strings for CNS drug candidate screening.",
    tags: ["BBBP", "Drug Screening", "SMILES", "Molecular Reasoning"],
    dataset: "BBBP",
    arch: "SMILES Input → Mistral-7B → BBB Permeability Score"
  },
  {
    name: "ChemLLM-Tox-OLMo",
    link: "https://github.com/Abu-Sameer-66/ChemLLM-Tox-OLMo",
    desc: "Flagship GSoC contribution: Fine-tuning OLMo-7B with QLoRA for Molecular Toxicity Prediction in the DeepChem ecosystem. Integrates open-weight LLMs into cheminformatics pipelines with a 12-week TorchModel roadmap.",
    tags: ["OLMo-7B", "DeepChem", "QLoRA", "GSoC 2026"],
    dataset: "Multi-Tox",
    arch: "OLMo-7B → QLoRA → DeepChem TorchModel → SMILES Tox Labels",
    flagship: true
  }
];

const additionalProjects = [
  {
    name: "AI Voice Assistant",
    link: "https://github.com/Abu-Sameer-66/AI-Voice-Assistant-Python",
    desc: "Python-based AI voice assistant integrating speech recognition, NLP intent parsing, and TTS response synthesis. Full pipeline from audio input to intelligent contextual reply.",
    tags: ["Speech Recognition", "NLP", "TTS", "Python"],
    icon: MessageSquare
  },
  {
    name: "Retail Sales Performance Analysis",
    link: "https://github.com/Abu-Sameer-66/Retail-Sales-Performance-Analysis",
    desc: "End-to-end retail data analytics pipeline with advanced visualizations. Identifies KPIs, seasonal patterns, product performance clusters, and demand forecasting signals from raw sales data.",
    tags: ["Data Analysis", "Pandas", "Seaborn", "Forecasting"],
    icon: BarChart3
  },
  {
    name: "Social Graph Recommendation Engine",
    link: "https://github.com/Abu-Sameer-66/Social-Graph-Recommendation-Engine",
    desc: "Graph-based collaborative filtering recommendation engine using social network topology. Implements Weisfeiler-Lehman graph isomorphism concepts for connection-aware personalized suggestions.",
    tags: ["Graph ML", "Collaborative Filtering", "Network Analysis", "WL-Test"],
    icon: Network
  }
];

const certifications = [
  { title: "The Ultimate Job Ready Data Science Course", issuer: "CodeWithHarry", date: "Feb 20, 2026", id: "CWH-THE-ULTIMATE-JOB-READY-DATA-SCIENCE-COURSE-BMXY6IIK" },
  { title: "Complete 2026 Python Bootcamp", issuer: "CodeWithHarry", date: "Mar 9, 2026", id: "CWH-COMPLETE-PYTHON-BOOTCAMP-LEARN-PYTHON-FROM-SCRATCH-BMXY6IIK" },
  { title: "Ultimate Web Development Course 2026", issuer: "Udemy", date: "Feb 20, 2026", id: "UC-2e72fbd0-d45a-487b-bf17-372434c63615" },
  { title: "Introduction to Data Science in Python", issuer: "DataCamp", date: "May 26, 2025", id: "#40,907,162" },
  { title: "Complete Prompt Engineering for AI Bootcamp", issuer: "Udemy", date: "In Progress", id: "GPT-5 · Midjourney · LangChain · DSPy · LangGraph" },
  { title: "Prime AI/ML Batch", issuer: "Apna College", date: "In Progress", id: "Deep Learning · Transformers · RAG · Agentic AI · Docker · Kubernetes" }
];

// =========================================
// EXPERIENCES — Al-Quresh moved to position 2
// =========================================
const experiences = [
  {
    title: "Open Source Research Contributor (GSoC 2026)",
    org: "DeepChem Ecosystem",
    period: "2026 – Present",
    color: "#A6CE39",
    desc: "Spearheading the integration of massive Language Models (OLMo-7B) into DeepChem's architecture. Engineered a rigorous 12-week TorchModel integration roadmap, built LLM pipelines for molecular modeling, and optimized SMILES validation pipelines. Collaborating with global mentors on SOTA cheminformatics benchmarks.",
    impact: ["12-week TorchModel roadmap", "OLMo-7B SMILES pipeline", "Global mentor collaboration", "SOTA benchmark optimization"],
    icon: FlaskConical
  },
  {
    title: "Technical Operations & Data Strategist",
    org: "Al-Quresh Motors",
    period: "2023 – 2024",
    color: "#3da6a3",
    desc: "Executing high-level Physical-to-Digital (P2D) integration for industrial operations. Automated supply chain logistics using predictive analytics, implemented data-driven inventory metrics, and translated raw business operations into centralized intelligent digital dashboards.",
    impact: ["Supply chain automation", "Predictive inventory", "Digital transformation", "Workflow analytics"],
    icon: Workflow
  },
  {
    title: "Lead Deep Learning Researcher",
    org: "AI Research Lab (IUB)",
    period: "2024 – Present",
    color: "#E3B6B1",
    desc: "Developing SOTA defensive AI architectures under Professor Talha. Achieved 99.92% precision in Deepfake Forensics over 140K images using ResNet-Transformer hybrids. Leading 13-channel EuroSAT satellite analysis with HAM architectures. Ablation pipelines targeting top-tier Google Scholar publications.",
    impact: ["99.92% precision (Deepfake)", "140,000 image dataset", "13-channel satellite analysis", "HAM + ViT architectures"],
    icon: Microscope
  },
  {
    title: "AI Solutions Architect",
    org: "Freelance (Upwork / LinkedIn)",
    period: "2023 – Present",
    color: "#845162",
    desc: "Consulting and building custom AI pipelines for global clients. Specializing in NLP sentiment analysis, Computer Vision defect detection, and transforming complex Python research scripts into deployable production business assets. Full P2D integration consulting.",
    impact: ["Computer Vision pipelines", "NLP architectures", "Production deployments", "AI strategy consulting"],
    icon: Server
  },
  {
    title: "Strategic Data Operations Analyst",
    org: "TechSpark Coworking",
    period: "1 Year",
    color: "#f7d794",
    desc: "Led B2B market intelligence and lead generation operations for a coworking ecosystem. Architected CRM data pipelines, conducted deep market analyses, managed lead funnels, and provided startup ecosystem intelligence support to founders and partners.",
    impact: ["B2B lead pipelines", "CRM architecture", "Market intelligence", "Startup data support"],
    icon: BarChart3
  },
  {
    title: "STEM Educator",
    org: "Private Instruction",
    period: "Ongoing",
    color: "#FFE3D8",
    desc: "Teaching Computer Science, Mathematics, and Science to Grade 4–8 students. Focus on logical thinking development, technical concept simplification, and building multidisciplinary STEM foundations. Crafting custom curricula for diverse learning styles.",
    impact: ["CS & Math instruction", "Grades 4–8 curriculum", "Logical thinking focus", "Multidisciplinary STEM"],
    icon: BookOpen
  }
];

const uniCourses = [
  "Machine Learning", "Advanced Machine Learning", "Deep Learning",
  "Statistics & Probability", "Advanced Statistics", "Data Warehousing",
  "Software Engineering", "Web Development", "Data Visualization",
  "Data Structures & Algorithms", "Database Management Systems",
  "Linear Algebra", "Calculus", "Discrete Structures",
  "Business Process Analysis", "Object Oriented Programming"
];

// =========================================
// NEURAL PARTICLE BACKGROUND — Enhanced with hex grid overlay
// =========================================
function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    let mouseX = w / 2, mouseY = h / 2;
    const N = 90;
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      pulse: Math.random() * Math.PI * 2
    }));
    let raf: number;
    let frame = 0;
    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, w, h);

      // Draw faint hex grid
      const hexSize = 60;
      const hexW = hexSize * Math.sqrt(3);
      const hexH = hexSize * 2;
      ctx.strokeStyle = "rgba(82,44,93,0.06)";
      ctx.lineWidth = 0.5;
      for (let row = -1; row < h / (hexH * 0.75) + 2; row++) {
        for (let col = -1; col < w / hexW + 2; col++) {
          const offsetX = (row % 2) * hexW / 2;
          const cx = col * hexW + offsetX;
          const cy = row * hexH * 0.75;
          ctx.beginPath();
          for (let s = 0; s < 6; s++) {
            const angle = (Math.PI / 3) * s - Math.PI / 6;
            const px = cx + hexSize * Math.cos(angle);
            const py = cy + hexSize * Math.sin(angle);
            s === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
        }
      }

      pts.forEach((p, idx) => {
        p.pulse += 0.012;
        const dx = mouseX - p.x, dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          p.vx += (dx / dist) * 0.012;
          p.vy += (dy / dist) * 0.012;
        }
        p.vx *= 0.995; p.vy *= 0.995;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      });

      // Draw connections with energy pulses
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 140) {
            const alpha = (1 - d / 140) * 0.18;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(82,44,93,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes with pulse glow
      pts.forEach(p => {
        const glowAlpha = 0.15 + 0.1 * Math.sin(p.pulse);
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        grad.addColorStop(0, `rgba(227,182,177,${glowAlpha})`);
        grad.addColorStop(1, "rgba(227,182,177,0)");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(227,182,177,0.45)";
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };
    draw();
    const onMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); window.removeEventListener("resize", onResize); };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-50" />;
}

// =========================================
// PROJECT CARD (CORE)
// =========================================
function CoreProjectCard({ p, idx }: { p: typeof coreProjects[0]; idx: number }) {
  const tilt = useTilt(10);
  const Icon = p.icon;
  return (
    <motion.div
      variants={fadeUpFast}
      className={`relative group rounded-[28px] overflow-hidden ${p.highlight ? "md:col-span-2" : ""}`}
      style={{ background: "linear-gradient(135deg,#100012,#150016)" }}
      {...tilt}
    >
      <div className="absolute inset-0 rounded-[28px] p-[1.5px] pointer-events-none">
        <div className={`absolute inset-0 rounded-[28px] transition-opacity duration-700 opacity-0 group-hover:opacity-100`}
          style={{ background: "linear-gradient(135deg,#845162,#522C5D,#E3B6B1,#522C5D)" }} />
        <div className="absolute inset-[1.5px] rounded-[26px]" style={{ background: "linear-gradient(135deg,#100012,#150016)" }} />
      </div>
      <div className="absolute inset-0 rounded-[28px] border border-[#522C5D]/40 group-hover:border-[#E3B6B1]/30 transition-colors duration-500" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: "radial-gradient(600px at 50% 0%,rgba(132,81,98,0.12),transparent 70%)" }} />
      <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none">
        <Icon size={180} />
      </div>

      <div className={`relative z-10 p-8 ${p.highlight ? "grid md:grid-cols-2 gap-8 items-start" : "flex flex-col h-full"}`}>
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#29104A]/60 border border-[#522C5D] flex items-center justify-center flex-shrink-0 group-hover:border-[#E3B6B1]/50 transition-colors">
              <Icon className="w-5 h-5 text-[#E3B6B1]" />
            </div>
            {p.highlight && (
              <span className="flex items-center gap-1 text-[10px] font-mono font-black text-[#E3B6B1] bg-[#522C5D]/40 border border-[#845162] px-2.5 py-1 rounded-full">
                <Star className="w-3 h-3 fill-[#E3B6B1]" /> FEATURED
              </span>
            )}
          </div>
          <h3 className="text-xl font-black text-[#FFE3D8] leading-tight group-hover:text-[#E3B6B1] transition-colors duration-300">{p.name}</h3>
          <p className="text-[#E3B6B1]/70 text-sm leading-relaxed font-light flex-1">{p.desc}</p>
          <div className="bg-[#100012]/80 border border-[#522C5D]/50 rounded-xl px-4 py-3 group-hover:border-[#845162]/60 transition-colors">
            <span className="block text-[10px] font-mono text-[#845162] uppercase tracking-widest mb-1">Architecture Flow</span>
            <span className="text-xs text-[#E3B6B1]/80 font-mono">{p.arch}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {p.tags.map(t => (
              <span key={t} className="px-2.5 py-1 bg-[#29104A]/50 border border-[#522C5D]/60 text-[#FFE3D8]/70 text-[10px] font-bold rounded-lg hover:border-[#E3B6B1]/40 hover:text-[#FFE3D8] transition-colors cursor-default">{t}</span>
            ))}
          </div>
          <a href={p.link} target="_blank" rel="noreferrer"
            className="mt-auto inline-flex items-center gap-2 text-[#E3B6B1] text-xs font-bold font-mono uppercase tracking-wider hover:gap-3 transition-all group/link w-fit">
            <Github className="w-3.5 h-3.5" /> View on GitHub <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
        {p.highlight && (
          <div className="grid grid-cols-1 gap-3">
            {p.stats.map((s, i) => (
              <motion.div key={i} animate={i === 0 ? glowPulse : {}}
                className={`rounded-2xl p-5 border flex flex-col justify-center ${i === 0 ? "bg-gradient-to-br from-[#522C5D] to-[#29104A] border-[#E3B6B1]/30" : "bg-[#100012]/80 border-[#522C5D]/40"}`}>
                <span className="text-[10px] font-mono text-[#845162] uppercase tracking-widest mb-1">{s.label}</span>
                <span className={`font-black text-[#FFE3D8] ${i === 0 ? "text-4xl" : "text-2xl"}`}>{s.val}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// =========================================
// GSOC PROJECT CARD
// =========================================
function GSoCCard({ p, idx }: { p: typeof gsocProjects[0]; idx: number }) {
  const tilt = useTilt(8);
  return (
    <motion.div variants={scaleIn}
      className={`relative group rounded-[24px] border transition-all duration-500 overflow-hidden ${(p as any).flagship ? "border-[#A6CE39]/40 bg-gradient-to-br from-[#0a1a00]/80 to-[#100012]" : "border-[#522C5D]/40 bg-[#100012]/90"}`}
      {...tilt}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"
        style={{ background: (p as any).flagship ? "radial-gradient(400px at 50% 0%,rgba(166,206,57,0.08),transparent 70%)" : "radial-gradient(400px at 50% 0%,rgba(82,44,93,0.15),transparent 70%)" }} />
      <div className="relative z-10 p-7 flex flex-col gap-4 h-full">
        <div className="flex items-center justify-between">
          <span className={`text-[10px] font-mono font-black uppercase tracking-widest px-3 py-1 rounded-full border ${(p as any).flagship ? "text-[#A6CE39] bg-[#A6CE39]/10 border-[#A6CE39]/30" : "text-[#E3B6B1] bg-[#522C5D]/20 border-[#522C5D]"}`}>
            {(p as any).flagship ? "🏆 FLAGSHIP · GSoC 2026" : `GSoC · ${p.dataset}`}
          </span>
          <Atom className={`w-5 h-5 ${(p as any).flagship ? "text-[#A6CE39]" : "text-[#845162]"}`} />
        </div>
        <h3 className="text-lg font-black leading-tight text-[#FFE3D8] group-hover:text-[#E3B6B1] transition-colors">{p.name}</h3>
        <p className="text-[#E3B6B1]/65 text-sm leading-relaxed font-light flex-1">{p.desc}</p>
        <div className="bg-[#06080e]/60 border border-[#522C5D]/40 rounded-xl px-3 py-2.5">
          <span className="block text-[9px] font-mono text-[#845162] uppercase tracking-widest mb-0.5">Pipeline</span>
          <span className="text-[11px] text-[#E3B6B1]/75 font-mono">{p.arch}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map(t => (
            <span key={t} className={`px-2 py-0.5 text-[10px] font-bold rounded border ${(p as any).flagship ? "border-[#A6CE39]/25 text-[#A6CE39]/80 bg-[#A6CE39]/05" : "border-[#522C5D]/50 text-[#E3B6B1]/60"}`}>{t}</span>
          ))}
        </div>
        <a href={p.link} target="_blank" rel="noreferrer"
          className={`inline-flex items-center gap-2 text-[11px] font-bold font-mono uppercase tracking-wider transition-all hover:gap-3 w-fit ${(p as any).flagship ? "text-[#A6CE39]" : "text-[#E3B6B1]"}`}>
          <Github className="w-3.5 h-3.5" /> View Repository <ChevronRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
}

// =========================================
// MAIN PORTFOLIO COMPONENT
// =========================================
export default function Portfolio() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -120]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const h = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);

  return (
    <main className="min-h-screen bg-[#100012] text-[#FFE3D8] font-sans selection:bg-[#E3B6B1] selection:text-[#100012] overflow-x-hidden">

      {/* NEURAL PARTICLE BACKGROUND */}
      <NeuralBackground />

      {/* 4D CINEMATIC AMBIENT MESH */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full blur-[220px] opacity-25 bg-[#522C5D]"
          animate={{ x: mousePos.x - 350, y: mousePos.y - 350 }}
          transition={{ type: "tween", ease: "linear", duration: 0.08 }}
        />
        <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] bg-[radial-gradient(circle,rgba(41,16,74,0.6),transparent_70%)] blur-[160px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[65vw] h-[65vw] bg-[radial-gradient(circle,rgba(132,81,98,0.18),transparent_70%)] blur-[200px]" />
        <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(61,166,163,0.06),transparent_70%)] blur-[120px]" />
        {/* New: diagonal scan lines overlay for added depth */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "repeating-linear-gradient(45deg,#522C5D 0px,#522C5D 1px,transparent 1px,transparent 60px)" }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay" />
      </div>

      {/* ==========================================
          1. HERO — COMMAND CENTER
          ========================================== */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }}
          initial="hidden" animate="visible" variants={staggerWrap}
          className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">

          {/* Profile with layered 3D rings */}
          <motion.div variants={scaleIn} className="mb-10 relative group" style={{ perspective: 1200 }}>
            <div className="absolute inset-[-20px] rounded-full border border-[#522C5D]/60 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-[-35px] rounded-full border border-dashed border-[#E3B6B1]/20 animate-[spin_16s_linear_infinite_reverse]" />
            <div className="absolute inset-[-50px] rounded-full border border-dotted border-[#845162]/15 animate-[spin_22s_linear_infinite]" />
            <motion.div animate={glowPulse} className="absolute inset-0 rounded-full" />
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full p-[3px] relative z-10"
              style={{ background: "linear-gradient(135deg,#522C5D,#E3B6B1,#845162)" }}>
              <div className="w-full h-full rounded-full bg-[#29104A]/80 backdrop-blur-xl overflow-hidden">
                <img src="/profile.png" alt="Sameer Nadeem" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=SN&background=29104A&color=FFE3D8&size=256&bold=true"; }} />
              </div>
            </div>
          </motion.div>

          {/* System badge */}
          <motion.div variants={fadeUp}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#150016]/80 border border-[#522C5D] text-[#E3B6B1] font-mono text-xs mb-8 relative overflow-hidden backdrop-blur-xl shadow-[0_0_40px_rgba(82,44,93,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E3B6B1]/8 to-transparent animate-[shimmer_2.5s_linear_infinite]" />
            <motion.span animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <Radar className="w-3.5 h-3.5 text-[#FFE3D8]" />
            </motion.span>
            SYSTEM ONLINE // RESEARCH TERMINAL ACTIVE
          </motion.div>

          {/* =========================================
              NAME — SINGLE LINE, RESPONSIVE
              ========================================= */}
          <motion.div variants={fadeUp} className="mb-8 w-full">
            <h1
              className="font-black tracking-tighter uppercase text-[#FFE3D8] drop-shadow-2xl leading-none whitespace-nowrap overflow-hidden"
              style={{
                fontSize: "clamp(2.8rem, 10vw, 9rem)",
                textShadow: "0 0 60px rgba(82,44,93,0.8)"
              }}
            >
              <span className="inline">Sameer </span>
              <span
                className="inline text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(135deg,#E3B6B1,#845162,#E3B6B1)",
                  backgroundSize: "200%",
                  animation: "gradient-pan 4s ease infinite",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Nadeem
              </span>
            </h1>
          </motion.div>

          {/* =========================================
              ROLE TAGS — Full visibility, clear layout
              ========================================= */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2.5 mb-10 max-w-5xl px-4">
            {["AI/ML Engineer", "Data Scientist", "Deep Learning Researcher", "Open Source Contributor", "LLM Fine-Tuning", "P2D Integrator"].map(r => (
              <motion.span key={r} whileHover={{ scale: 1.08, y: -3 }}
                className="px-4 py-2 bg-[#29104A]/60 rounded-xl border border-[#522C5D] text-[#FFE3D8] text-sm font-mono font-bold shadow-lg hover:border-[#E3B6B1] hover:shadow-[0_0_20px_rgba(227,182,177,0.2)] transition-all duration-300 backdrop-blur-sm cursor-default">
                {r}
              </motion.span>
            ))}
          </motion.div>

          {/* =========================================
              SOCIAL LINKS — Properly spaced & visible
              ========================================= */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 text-[#E3B6B1]">
            {[
              { label: "ORCID", href: "https://orcid.org/0009-0006-1369-7590", color: "hover:text-[#A6CE39] hover:border-[#A6CE39] hover:bg-[#A6CE39]/10", icon: <span className="text-lg font-black font-serif italic leading-none">iD</span> },
              { label: "Kaggle", href: "https://www.kaggle.com/sameernadeem66", color: "hover:text-[#20BEFF] hover:border-[#20BEFF] hover:bg-[#20BEFF]/10", icon: <span className="text-base font-black leading-none">k</span> },
            ].map(s => (
              <motion.a key={s.label} href={s.href} target="_blank" rel="noreferrer" whileHover={{ y: -3, scale: 1.05 }}
                className={`flex items-center gap-2 px-5 py-2.5 bg-[#150016]/90 border border-[#522C5D] rounded-full font-bold text-sm shadow-lg backdrop-blur-md transition-all duration-300 ${s.color}`}>
                {s.icon} {s.label}
              </motion.a>
            ))}
            {[
              { icon: <Github className="w-4 h-4" />, href: "https://github.com/Abu-Sameer-66", color: "hover:text-white hover:border-white hover:bg-white/8", label: "GitHub" },
              { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/sameer-nadeem-66339a357/", color: "hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10", label: "LinkedIn" },
              { icon: <BookOpen className="w-4 h-4" />, href: "https://medium.com/@sameerdataanalyst66", color: "hover:text-white hover:border-white hover:bg-white/8", label: "Medium" },
              { icon: <Mail className="w-4 h-4" />, href: "mailto:sameersain361@gmail.com", color: "hover:text-[#EA4335] hover:border-[#EA4335] hover:bg-[#EA4335]/10", label: "Email" },
            ].map((s, i) => (
              <motion.a key={i} href={s.href} target="_blank" rel="noreferrer" whileHover={{ y: -3, scale: 1.08 }}
                className={`flex items-center gap-2 px-5 py-2.5 bg-[#150016]/90 border border-[#522C5D] rounded-full backdrop-blur-md shadow-lg transition-all duration-300 text-sm font-bold ${s.color}`}>
                {s.icon} {s.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#845162]">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-[1px] h-12 bg-gradient-to-b from-[#845162] to-transparent" />
        </motion.div>
      </section>

      {/* ==========================================
          2. IDENTITY & MISSION
          ========================================== */}
      <section className="relative z-10 py-32 px-6 bg-gradient-to-b from-transparent to-[#29104A]/10 border-y border-[#522C5D]/25">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerWrap}
            className="grid lg:grid-cols-12 gap-16 items-center">

            <motion.div variants={slideLeft} className="lg:col-span-7">
              <div className="inline-block px-4 py-2 bg-[#29104A] border border-[#E3B6B1]/30 text-[#E3B6B1] font-mono text-xs rounded-full mb-6 font-bold shadow-[0_0_20px_rgba(227,182,177,0.2)]">
                /// PROTOCOL: ARCHITECT
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#FFE3D8] mb-8 leading-[1.05]">
                Bridging the Gap Between<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3B6B1] to-[#845162]">Theory & Production.</span>
              </h2>
              <div className="space-y-5 text-[#E3B6B1] text-lg font-light leading-relaxed">
                <p>I am a rigorous AI/ML Engineer and Data Scientist driven by the pursuit of precision. My expertise lies in synthesizing cutting-edge academic research — from custom Vision Transformers to deeply optimized LLMs — and architecting them into robust, scalable digital infrastructures.</p>
                <p>I don't just build models; I engineer <strong className="text-[#FFE3D8] font-bold">Physical-to-Digital (P2D) integration systems</strong>. Whether it's optimizing supply chain logistics through predictive analytics or developing state-of-the-art Deepfake Forensics, my mission is to extract actionable intelligence from chaotic, real-world data and deploy it into high-impact business environments.</p>
                <p>Currently contributing to the <strong className="text-[#A6CE39] font-bold">DeepChem ecosystem via GSoC 2026</strong>, integrating OLMo-7B language model architectures to democratize molecular machine learning globally.</p>
              </div>
            </motion.div>

            {(() => {
              const tilt = useTilt(7);
              return (
                <motion.div variants={slideRight} animate={floatSlow} className="lg:col-span-5 relative" style={{ perspective: 1200 }}>
                  <div className="absolute inset-0 bg-[#E3B6B1] blur-[80px] opacity-8 rounded-full animate-pulse pointer-events-none" />
                  <div className="bg-[#100012]/80 backdrop-blur-xl border border-[#522C5D] p-10 rounded-3xl shadow-[0_30px_80px_rgba(41,16,74,0.9)] relative z-10" {...tilt}>
                    <h3 className="text-[#E3B6B1] font-mono text-xs tracking-widest uppercase mb-6 border-b border-[#522C5D] pb-3 flex items-center gap-2">
                      <Cpu className="w-4 h-4" /> Architectural Philosophy
                    </h3>
                    <p className="text-2xl font-serif italic text-[#FFE3D8] leading-snug mb-8">
                      "Algorithms are merely thoughts. Engineering makes them reality. I translate the complexity of mathematical research into the elegance of production-grade systems."
                    </p>
                    <div className="grid grid-cols-2 gap-4 border-t border-[#522C5D] pt-6">
                      {[["99.9%", "SOTA Precision Hit"], ["140K+", "Data Points Handled"], ["650+", "GitHub Commits"], ["2200+", "LinkedIn Network"]].map(([v, l]) => (
                        <div key={l}>
                          <span className="block text-2xl font-black text-[#FFE3D8]">{v}</span>
                          <span className="text-[10px] font-mono text-[#845162] uppercase tracking-wider">{l}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          3. DEEP TECH ARSENAL — Enhanced
          ========================================== */}
      <section className="relative z-10 py-32 px-6 border-b border-[#522C5D]/25 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-[#FFE3D8] flex items-center justify-center gap-4 mb-4 drop-shadow-xl">
              <Server className="w-11 h-11 text-[#E3B6B1]" /> Deep Tech Arsenal
            </h2>
            <p className="text-[#E3B6B1] text-xl font-light">The foundational stack driving my 4D digital architecture.</p>
          </motion.div>

          {/* Top 3 core columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8" style={{ perspective: 2000 }}>
            {[
              {
                title: "Intelligence Core",
                icon: Layers,
                items: ["Deep Learning", "LLM Fine-Tuning (QLoRA / LoRA)", "Computer Vision & CNNs", "Vision Transformers (ViT)", "Deepfake & Satellite Forensics", "NLP & Text Classification", "Molecular AI / Cheminformatics", "Predictive Analytics", "Ablation Study Design", "Business Intelligence", "Data Warehouses & OLAP"],
                type: "chips"
              },
              {
                title: "Syntax & Libraries",
                icon: Code2,
                items: [
                  { name: "Python (Advanced)", level: 95 },
                  { name: "PyTorch / TensorFlow", level: 90 },
                  { name: "HuggingFace Transformers", level: 88 },
                  { name: "Scikit-Learn / XGBoost", level: 92 },
                  { name: "DeepChem / OpenCV", level: 82 },
                  { name: "Pandas / NumPy / Seaborn", level: 94 },
                  { name: "SQL / C++ / JavaScript", level: 78 },
                ],
                type: "bars"
              },
              {
                title: "Environments & Tools",
                icon: Workflow,
                items: ["Google Colab Pro", "Jupyter Lab", "VS Code", "Kaggle Kernels", "Anaconda / Conda", "Git / GitHub CLI", "Next.js / Node.js / MongoDB"],
                type: "grid"
              },
            ].map((cell, i) => {
              const tilt = useTilt(7);
              const Icon = cell.icon;
              return (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
                  className="bg-gradient-to-br from-[#29104A]/30 to-[#100012] p-[1.5px] rounded-3xl group transform-gpu hover:-translate-y-5 hover:shadow-[0_40px_80px_rgba(82,44,93,0.7)] transition-all duration-500"
                  {...tilt}>
                  <div className="bg-[#100012]/96 backdrop-blur-xl h-full p-8 rounded-[22px] group-hover:bg-[#150016] transition-colors relative overflow-hidden flex flex-col">
                    <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-125 transition-transform duration-1000 pointer-events-none">
                      <Icon className="w-52 h-52 text-[#E3B6B1]" />
                    </div>
                    <h3 className="text-xl font-black mb-6 text-[#FFE3D8] flex items-center gap-3 relative z-10 border-b border-[#522C5D] pb-4">
                      <Icon className="w-5 h-5 text-[#E3B6B1]" /> {cell.title}
                    </h3>
                    {cell.type === "bars" ? (
                      <div className="flex flex-col gap-3 relative z-10">
                        {(cell.items as { name: string; level: number }[]).map(item => (
                          <div key={item.name}>
                            <div className="flex justify-between mb-1">
                              <span className="text-xs font-mono text-[#E3B6B1] font-bold">{item.name}</span>
                              <span className="text-[10px] font-mono text-[#845162]">{item.level}%</span>
                            </div>
                            <div className="h-1.5 bg-[#29104A]/60 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                                className="h-full rounded-full"
                                style={{ background: "linear-gradient(90deg,#522C5D,#E3B6B1)" }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : cell.type === "grid" ? (
                      <div className="grid grid-cols-2 gap-2.5 relative z-10">
                        {(cell.items as string[]).map(t => (
                          <div key={t} className="px-3 py-3.5 bg-[#29104A]/25 border border-[#522C5D] text-[#FFE3D8] rounded-xl text-center text-xs font-bold hover:border-[#E3B6B1] hover:bg-[#522C5D]/30 transition-colors cursor-default">{t}</div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2 relative z-10">
                        {(cell.items as string[]).map(t => (
                          <span key={t} className="px-3 py-1.5 bg-[#29104A]/50 border border-[#522C5D] text-[#FFE3D8] text-xs font-bold rounded-lg hover:border-[#E3B6B1] hover:bg-[#522C5D]/35 transition-colors cursor-default">{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Extra row: Specializations + Soft Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "AI Research Specializations",
                icon: Brain,
                badges: [
                  { label: "Deepfake Detection", color: "#845162" },
                  { label: "Satellite EO / Remote Sensing", color: "#3da6a3" },
                  { label: "Medical Image AI", color: "#E3B6B1" },
                  { label: "Molecular Toxicity LLMs", color: "#A6CE39" },
                  { label: "Drug Discovery Prediction", color: "#A6CE39" },
                  { label: "Real Estate AVM", color: "#f7d794" },
                  { label: "Explainable AI (XAI)", color: "#845162" },
                  { label: "Adversarial Robustness", color: "#522C5D" },
                  { label: "Multi-Spectral Classification", color: "#3da6a3" },
                  { label: "Cheminformatics Benchmarks", color: "#A6CE39" },
                ]
              },
              {
                title: "Deployment & Integration Stack",
                icon: Server,
                badges: [
                  { label: "FastAPI / Flask", color: "#E3B6B1" },
                  { label: "Docker (Learning)", color: "#20BEFF" },
                  { label: "Streamlit / Gradio", color: "#845162" },
                  { label: "HuggingFace Hub", color: "#f7d794" },
                  { label: "Weights & Biases (W&B)", color: "#f7d794" },
                  { label: "ONNX Export", color: "#3da6a3" },
                  { label: "REST API Design", color: "#E3B6B1" },
                  { label: "MongoDB / PostgreSQL", color: "#522C5D" },
                  { label: "P2D Systems Integration", color: "#A6CE39" },
                  { label: "GitHub Actions CI/CD", color: "#845162" },
                ]
              }
            ].map((row, i) => {
              const tilt = useTilt(5);
              const Icon = row.icon;
              return (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
                  className="bg-gradient-to-br from-[#29104A]/30 to-[#100012] p-[1.5px] rounded-3xl group hover:shadow-[0_30px_60px_rgba(82,44,93,0.5)] transition-all duration-500"
                  {...tilt}>
                  <div className="bg-[#100012]/96 h-full p-8 rounded-[22px] group-hover:bg-[#150016] transition-colors">
                    <h3 className="text-xl font-black mb-6 text-[#FFE3D8] flex items-center gap-3 border-b border-[#522C5D] pb-4">
                      <Icon className="w-5 h-5 text-[#E3B6B1]" /> {row.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {row.badges.map(b => (
                        <span key={b.label}
                          className="px-3 py-1.5 text-xs font-bold rounded-full border cursor-default transition-all hover:-translate-y-0.5"
                          style={{ borderColor: b.color + "50", color: b.color, backgroundColor: b.color + "10" }}>
                          {b.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          4. DEEP LEARNING LABORATORY — + New Project
          ========================================== */}
      <section className="relative z-10 py-32 px-6 bg-[#150016] border-b border-[#522C5D]/25 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E3B6B1]/12 to-transparent pointer-events-none" />
        <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#845162]/12 to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-[#FFE3D8] mb-6 inline-flex items-center gap-4 drop-shadow-[0_0_30px_rgba(227,182,177,0.25)]">
              <Beaker className="w-14 h-14 text-[#E3B6B1] animate-bounce" /> The Laboratory
            </h2>
            <p className="text-[#E3B6B1] text-xl font-light max-w-3xl mx-auto">
              Abstracting complex models into purely data-driven, scalable, and high-precision architectures.
            </p>
          </motion.div>

          <div className="space-y-24">
            {/* EXPERIMENT 01 — Deepfake */}
            {(() => {
              const tilt = useTilt(5);
              return (
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} animate={floatMed}
                  className="bg-[#100012]/80 backdrop-blur-2xl border-2 border-[#522C5D] hover:border-[#E3B6B1]/40 rounded-[40px] p-8 md:p-12 relative overflow-visible group transition-colors duration-700 shadow-[0_30px_80px_rgba(41,16,74,0.7)]"
                  {...tilt}>
                  <div className="absolute -inset-3 bg-gradient-to-r from-[#522C5D] to-[#29104A] rounded-[46px] blur-xl opacity-0 group-hover:opacity-35 transition-opacity duration-700 -z-10 pointer-events-none" />
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-[0.025] group-hover:scale-110 transition-transform duration-1000 pointer-events-none"><ShieldCheck size={420} /></div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#845162]/25 border border-[#845162] text-[#FFE3D8] font-mono text-xs font-bold mb-8 rounded-full shadow-[0_0_20px_rgba(132,81,98,0.4)]">
                    <motion.span animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-[#FFE3D8] block" />
                    EXPERIMENT 01 — DEEPFAKE FORENSICS
                  </div>
                  <div className="grid lg:grid-cols-5 gap-12 relative z-10">
                    <div className="lg:col-span-2">
                      <h3 className="text-4xl font-black text-[#FFE3D8] mb-4 group-hover:text-[#E3B6B1] transition-colors">Deepfake Forensics Architecture</h3>
                      <p className="text-[#E3B6B1] text-base leading-relaxed mb-4">Engineered a highly specialized ablation pipeline combining local texture extraction (CNNs) with global contextual reasoning (ViTs). Analyzed synthetic manipulations across a massive scale to establish a defensive AI baseline.</p>
                      <div className="bg-[#100012]/80 border border-[#522C5D]/50 rounded-xl px-4 py-3 mb-6 text-xs font-mono text-[#E3B6B1]/70">
                        <span className="text-[#845162] uppercase tracking-wider text-[9px] block mb-1">Architecture Flow</span>
                        ResNet-18 → Multi-Scale Features → ViT Encoder → Fusion Head → Binary Classification
                      </div>
                      <a href="https://github.com/Abu-Sameer-66/Deepfake-Forensics-SOTA-Hybrid" target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-3 text-[#100012] bg-[#E3B6B1] hover:bg-[#FFE3D8] px-7 py-3.5 rounded-xl font-black text-sm transition-all shadow-[0_0_30px_rgba(227,182,177,0.4)] hover:-translate-y-1">
                        <Github className="w-5 h-5" /> View Architecture
                      </a>
                    </div>
                    <div className="lg:col-span-3 grid grid-cols-2 gap-4">
                      {[
                        { l: "Dataset Scale", v: "140,000", sub: "images", icon: Database, hero: false },
                        { l: "Core Pipeline", v: "ResNet-ViT", sub: "Hybrid", icon: Workflow, hero: false },
                        { l: "SOTA Precision", v: "99.92%", sub: "best in class", icon: Target, hero: true },
                        { l: "F1 Score Max", v: "99.39%", sub: "on validation", icon: Activity, hero: false },
                      ].map(({ l, v, sub, icon: Icon, hero }) => (
                        <motion.div key={l} animate={hero ? glowPulse : {}}
                          className={`rounded-2xl p-5 flex flex-col justify-center relative overflow-hidden group/box transition-colors ${hero ? "bg-gradient-to-br from-[#522C5D] to-[#29104A] border border-[#E3B6B1]/30 shadow-[0_0_40px_rgba(227,182,177,0.25)]" : "bg-[#150016] border border-[#522C5D] hover:border-[#845162]"}`}>
                          <Icon className="absolute right-3 top-3 w-10 h-10 text-[#522C5D] opacity-20 group-hover/box:scale-125 transition-transform pointer-events-none" />
                          <span className="text-[#845162] font-mono text-[10px] font-bold uppercase mb-1 tracking-widest">{l}</span>
                          <span className={`font-black text-[#FFE3D8] ${hero ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"}`}>{v}</span>
                          <span className="text-xs text-[#E3B6B1]/60 font-mono mt-0.5">{sub}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })()}

            {/* EXPERIMENT 02 — Satellite */}
            {(() => {
              const tilt = useTilt(5);
              return (
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
                  animate={{ y: [0, -12, 0], transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
                  className="bg-[#100012]/80 backdrop-blur-2xl border-2 border-[#522C5D] hover:border-[#E3B6B1]/40 rounded-[40px] p-8 md:p-12 relative overflow-visible group transition-colors duration-700 shadow-[0_30px_80px_rgba(41,16,74,0.7)]"
                  {...tilt}>
                  <div className="absolute -inset-3 bg-gradient-to-l from-[#522C5D] to-[#29104A] rounded-[46px] blur-xl opacity-0 group-hover:opacity-35 transition-opacity duration-700 -z-10 pointer-events-none" />
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-[0.025] group-hover:scale-110 transition-transform duration-1000 pointer-events-none"><Satellite size={420} /></div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E3B6B1]/15 border border-[#E3B6B1]/40 text-[#FFE3D8] font-mono text-xs font-bold mb-8 rounded-full shadow-[0_0_20px_rgba(227,182,177,0.2)]">
                    <motion.span animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-[#FFE3D8] block" />
                    EXPERIMENT 02 — SATELLITE INTELLIGENCE
                  </div>
                  <div className="grid lg:grid-cols-5 gap-12 relative z-10">
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 order-2 lg:order-1">
                      {[
                        { l: "Data Space", v: "EuroSAT", sub: "13 spectral channels", hero: false },
                        { l: "Engine", v: "HAM + ViT", sub: "Hybrid Attention", hero: false },
                        { l: "Baseline (ANN)", v: "64.00%", sub: "standard approach", hero: false, dim: true },
                        { l: "SOTA Leap", v: "89.00%+", sub: "+25% improvement", hero: true },
                      ].map(({ l, v, sub, hero, dim }) => (
                        <motion.div key={l} animate={hero ? glowPulse : {}}
                          className={`rounded-2xl p-5 flex flex-col justify-center transition-colors ${hero ? "bg-gradient-to-br from-[#522C5D] to-[#29104A] border border-[#E3B6B1]/30 shadow-[0_0_40px_rgba(227,182,177,0.25)]" : "bg-[#150016] border border-[#522C5D] hover:border-[#E3B6B1]/30"}`}>
                          <span className="text-[#845162] font-mono text-[10px] font-bold uppercase mb-1 tracking-widest">{l}</span>
                          <span className={`font-black ${hero ? "text-4xl text-[#FFE3D8]" : dim ? "text-3xl text-[#845162]" : "text-2xl text-[#FFE3D8]"}`}>{v}</span>
                          <span className="text-xs text-[#E3B6B1]/60 font-mono mt-0.5">{sub}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="lg:col-span-2 order-1 lg:order-2">
                      <h3 className="text-4xl font-black text-[#FFE3D8] mb-4 group-hover:text-[#E3B6B1] transition-colors">Multi-Spectral Intelligence</h3>
                      <p className="text-[#E3B6B1] text-base leading-relaxed mb-4">Transitioned from standard 3-channel RGB to complex 13-channel data. Deployed Hybrid Attention Mechanism (HAM) and ViTs to classify Earth Observation data, detecting minute land-use shifts for environmental intelligence.</p>
                      <div className="bg-[#100012]/80 border border-[#522C5D]/50 rounded-xl px-4 py-3 mb-6 text-xs font-mono text-[#E3B6B1]/70">
                        <span className="text-[#845162] uppercase tracking-wider text-[9px] block mb-1">Architecture Flow</span>
                        13-Ch Input → Spectral Attention → HAM Fusion → ViT Encoder → Land-Use Labels
                      </div>
                      <a href="https://github.com/Abu-Sameer-66/SOTA-Multispectral-Satellite-Forensics-EuroSAT" target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-3 text-[#100012] bg-[#E3B6B1] hover:bg-[#FFE3D8] px-7 py-3.5 rounded-xl font-black text-sm transition-all shadow-[0_0_30px_rgba(227,182,177,0.4)] hover:-translate-y-1">
                        <Github className="w-5 h-5" /> Explore Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })()}

            {/* EXPERIMENT 03 — NEW: ChemLLM Molecular Intelligence */}
            {(() => {
              const tilt = useTilt(5);
              return (
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
                  animate={{ y: [0, -10, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.7 } }}
                  className="bg-[#06080a]/90 backdrop-blur-2xl border-2 border-[#A6CE39]/25 hover:border-[#A6CE39]/50 rounded-[40px] p-8 md:p-12 relative overflow-visible group transition-colors duration-700 shadow-[0_30px_80px_rgba(10,26,0,0.8)]"
                  {...tilt}>
                  <div className="absolute -inset-3 bg-gradient-to-r from-[#0a1a00] to-[#100012] rounded-[46px] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 -z-10 pointer-events-none" />
                  <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-[0.025] group-hover:scale-110 transition-transform duration-1000 pointer-events-none"><Atom size={420} /></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[40px]"
                    style={{ background: "radial-gradient(700px at 60% 30%,rgba(166,206,57,0.05),transparent 70%)" }} />
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#A6CE39]/10 border border-[#A6CE39]/30 text-[#A6CE39] font-mono text-xs font-bold mb-8 rounded-full shadow-[0_0_20px_rgba(166,206,57,0.2)]">
                    <motion.span animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-2 h-2 rounded-full bg-[#A6CE39] block" />
                    EXPERIMENT 03 — MOLECULAR INTELLIGENCE (GSoC 2026)
                  </div>
                  <div className="grid lg:grid-cols-5 gap-12 relative z-10">
                    <div className="lg:col-span-2">
                      <h3 className="text-4xl font-black text-[#FFE3D8] mb-4 group-hover:text-[#A6CE39] transition-colors">ChemLLM Toxicity Reasoning</h3>
                      <p className="text-[#E3B6B1] text-base leading-relaxed mb-4">
                        Fine-tuned OLMo-7B with 4-bit QLoRA on multi-target molecular toxicity datasets (Tox21, BACE, ClinTox, BBBP) within the DeepChem TorchModel framework. Probes whether open-weight LLMs can reason over raw SMILES strings to predict pharmaceutical safety and drug-binding properties — pushing language models into the cheminformatics frontier.
                      </p>
                      <div className="bg-[#06080e]/80 border border-[#A6CE39]/20 rounded-xl px-4 py-3 mb-6 text-xs font-mono text-[#E3B6B1]/70">
                        <span className="text-[#A6CE39] uppercase tracking-wider text-[9px] block mb-1">Architecture Flow</span>
                        SMILES Input → Tokenizer → OLMo-7B + QLoRA → TorchModel Wrapper → Tox Labels
                      </div>
                      <a href="https://github.com/Abu-Sameer-66/ChemLLM-Tox-OLMo" target="_blank" rel="noreferrer"
                        className="inline-flex items-center gap-3 text-[#06080a] bg-[#A6CE39] hover:bg-[#bfe05c] px-7 py-3.5 rounded-xl font-black text-sm transition-all shadow-[0_0_30px_rgba(166,206,57,0.35)] hover:-translate-y-1">
                        <Github className="w-5 h-5" /> Flagship GSoC Repo
                      </a>
                    </div>
                    <div className="lg:col-span-3 grid grid-cols-2 gap-4">
                      {[
                        { l: "LLM Backbone", v: "OLMo-7B", sub: "Open-weight architecture", icon: Brain, hero: false },
                        { l: "Quantization", v: "4-bit QLoRA", sub: "Memory-efficient FT", icon: Cpu, hero: false },
                        { l: "Datasets Used", v: "5 Tox DBs", sub: "Tox21 · BACE · ClinTox · BBBP", icon: Database, hero: true },
                        { l: "Ecosystem Target", v: "DeepChem", sub: "TorchModel integration", icon: FlaskConical, hero: false },
                      ].map(({ l, v, sub, icon: Icon, hero }) => (
                        <motion.div key={l} animate={hero ? { boxShadow: ["0 0 20px rgba(166,206,57,0.2)", "0 0 50px rgba(166,206,57,0.5)", "0 0 20px rgba(166,206,57,0.2)"], transition: { duration: 3, repeat: Infinity } } : {}}
                          className={`rounded-2xl p-5 flex flex-col justify-center relative overflow-hidden group/box transition-colors ${hero ? "bg-gradient-to-br from-[#0f1f00] to-[#0a1500] border border-[#A6CE39]/30" : "bg-[#06080e] border border-[#A6CE39]/15 hover:border-[#A6CE39]/30"}`}>
                          <Icon className="absolute right-3 top-3 w-10 h-10 text-[#A6CE39] opacity-10 group-hover/box:scale-125 transition-transform pointer-events-none" />
                          <span className="text-[#A6CE39]/60 font-mono text-[10px] font-bold uppercase mb-1 tracking-widest">{l}</span>
                          <span className={`font-black ${hero ? "text-3xl text-[#A6CE39]" : "text-2xl text-[#FFE3D8]"}`}>{v}</span>
                          <span className="text-xs text-[#E3B6B1]/50 font-mono mt-0.5">{sub}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* ==========================================
          5. PROFESSIONAL ARCHITECTURE
          ========================================== */}
      <section className="relative z-10 py-32 px-6 border-b border-[#522C5D]/25">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-4xl md:text-6xl font-black text-[#FFE3D8] mb-20 flex items-center justify-center gap-4 text-center">
            <Briefcase className="w-12 h-12 text-[#E3B6B1]" /> Professional Architecture
          </motion.h2>

          <div className="relative border-l-4 border-[#522C5D] ml-4 md:ml-[50%] space-y-20">
            {experiences.map((exp, idx) => {
              const tilt = useTilt(6);
              const Icon = exp.icon;
              return (
                <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
                  className={`relative pl-10 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right md:-translate-x-full md:pr-16 md:left-0" : "md:pl-16"}`}>
                  <div className={`absolute top-1 w-9 h-9 rounded-full border-[3px] border-[#100012] shadow-[0_0_25px_rgba(227,182,177,0.7)] flex items-center justify-center ${idx % 2 === 0 ? "-left-[18px] md:left-auto md:-right-[18px]" : "-left-[18px]"}`}
                    style={{ background: exp.color }}>
                    <Icon className="w-4 h-4 text-[#100012]" />
                  </div>

                  <div className="bg-[#29104A]/25 backdrop-blur-xl p-8 rounded-[28px] border border-[#522C5D] hover:border-[#E3B6B1]/40 hover:shadow-[0_20px_60px_rgba(82,44,93,0.6)] transition-all transform-gpu hover:-translate-y-3 duration-500 group" {...tilt}>
                    <div className={`flex items-start gap-3 mb-3 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <span className="text-[10px] font-mono font-bold text-[#845162] bg-[#150016] border border-[#522C5D] px-3 py-1 rounded-lg flex-shrink-0">{exp.period}</span>
                    </div>
                    <h3 className="text-2xl font-black text-[#FFE3D8] mb-1 group-hover:text-[#E3B6B1] transition-colors">{exp.title}</h3>
                    <p className="text-[#E3B6B1] font-mono text-sm font-bold mb-4" style={{ color: exp.color }}>{exp.org}</p>
                    <p className="text-[#FFE3D8]/75 font-light leading-relaxed text-sm mb-5">{exp.desc}</p>
                    <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.impact.map(i => (
                        <span key={i} className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#E3B6B1]/70 bg-[#150016] border border-[#522C5D]/60 px-2.5 py-1 rounded-lg hover:border-[#845162] transition-colors">
                          <span className="w-1 h-1 rounded-full bg-[#845162] flex-shrink-0" /> {i}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          6. PROJECTS — CORE AI
          ========================================== */}
      <section className="relative z-10 py-32 px-6 bg-[#0a000c] border-b border-[#522C5D]/25">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-6">
            <h2 className="text-5xl md:text-6xl font-black text-[#FFE3D8] mb-3">Building Intelligence</h2>
            <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#E3B6B1] to-[#845162]">One Model at a Time</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-center gap-4 mb-8 mt-16">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#522C5D] to-transparent" />
            <span className="font-mono text-xs text-[#845162] uppercase tracking-[0.25em] px-4 py-2 border border-[#522C5D]/50 rounded-full">Core AI Projects</span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#522C5D] to-transparent" />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerFast}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {coreProjects.map((p, i) => <CoreProjectCard key={i} p={p} idx={i} />)}
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          7. GSoC RESEARCH PROJECTS — Updated stats
          ========================================== */}
      <section className="relative z-10 py-32 px-6 bg-[#06080a] border-b border-[#522C5D]/25 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-[radial-gradient(ellipse,rgba(166,206,57,0.04),transparent_70%)] blur-2xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#A6CE39]/10 border border-[#A6CE39]/30 text-[#A6CE39] font-mono text-xs rounded-full mb-4 font-black">
                  <Atom className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "4s" }} />
                  GOOGLE SUMMER OF CODE 2026
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-[#FFE3D8] leading-tight">
                  GSoC Research Projects<br />
                  <span className="text-[#A6CE39]">DeepChem Ecosystem</span>
                </h2>
              </div>

              {/* Updated stats: 5 repos, 4+ commits, 2+ PRs */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { val: "5", label: "Research Repos", sub: "Cheminformatics", icon: FolderGit2 },
                  { val: "4+", label: "Git Commits", sub: "Active pushes", icon: GitCommit },
                  { val: "2+", label: "Pull Requests", sub: "Open · Merged", icon: GitPullRequest },
                ].map(({ val, label, sub, icon: Icon }) => (
                  <div key={label} className="bg-[#0a1a00]/60 border border-[#A6CE39]/25 rounded-2xl p-4 text-center min-w-[100px] backdrop-blur-xl">
                    <Icon className="w-4 h-4 text-[#A6CE39] mx-auto mb-1" />
                    <span className="block text-3xl font-black text-[#FFE3D8]">{val}</span>
                    <span className="text-[9px] font-mono text-[#A6CE39] uppercase tracking-widest block">{label}</span>
                    <span className="text-[9px] text-[#E3B6B1]/40 font-mono">{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Flagship featured */}
          {(() => {
            const flagship = gsocProjects.find(p => p.flagship)!;
            const tilt = useTilt(6);
            return (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
                className="mb-8 bg-gradient-to-br from-[#0f1f00]/80 to-[#100012]/90 border-2 border-[#A6CE39]/30 rounded-[32px] p-8 md:p-12 relative overflow-hidden group hover:border-[#A6CE39]/60 transition-colors duration-500 shadow-[0_0_60px_rgba(166,206,57,0.06)]"
                {...tilt}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: "radial-gradient(800px at 50% 0%,rgba(166,206,57,0.05),transparent 70%)" }} />
                <div className="absolute top-0 right-0 -mt-12 -mr-12 opacity-[0.03] pointer-events-none"><Atom size={400} /></div>

                <div className="flex flex-wrap items-start gap-4 mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#A6CE39]/15 border border-[#A6CE39]/40 text-[#A6CE39] font-mono text-xs rounded-full font-black">
                    <Trophy className="w-3.5 h-3.5" /> FLAGSHIP CONTRIBUTION
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#100012] border border-[#522C5D] text-[#E3B6B1] font-mono text-xs rounded-full">
                    <Sparkles className="w-3.5 h-3.5" /> GSoC 2026 · DeepChem
                  </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 relative z-10">
                  <div>
                    <h3 className="text-3xl font-black text-[#FFE3D8] mb-3">{flagship.name}</h3>
                    <p className="text-[#E3B6B1]/75 leading-relaxed mb-5">{flagship.desc}</p>
                    <div className="bg-[#06080e]/80 border border-[#A6CE39]/20 rounded-xl px-4 py-3 mb-5">
                      <span className="block text-[9px] font-mono text-[#A6CE39] uppercase tracking-widest mb-1">Architecture Pipeline</span>
                      <span className="text-xs text-[#E3B6B1]/75 font-mono">{flagship.arch}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {flagship.tags.map(t => (
                        <span key={t} className="px-2.5 py-1 text-[10px] font-bold border border-[#A6CE39]/25 text-[#A6CE39]/80 rounded-lg bg-[#A6CE39]/05">{t}</span>
                      ))}
                    </div>
                    <a href={flagship.link} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-3 bg-[#A6CE39] text-[#06080a] font-black px-6 py-3 rounded-xl text-sm hover:bg-[#bfe05c] hover:-translate-y-1 transition-all shadow-[0_0_30px_rgba(166,206,57,0.3)]">
                      <Github className="w-4 h-4" /> View Flagship Repository
                    </a>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[["12 Weeks", "Integration Roadmap"], ["OLMo-7B", "Architecture Used"], ["QLoRA", "Fine-Tuning Method"], ["DeepChem", "Target Ecosystem"]].map(([v, l]) => (
                      <div key={l} className="bg-[#06080e]/80 border border-[#A6CE39]/15 rounded-2xl p-5 hover:border-[#A6CE39]/35 transition-colors">
                        <span className="block text-[10px] font-mono text-[#A6CE39] uppercase tracking-widest mb-1.5">{l}</span>
                        <span className="text-xl font-black text-[#FFE3D8]">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })()}

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerFast}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {gsocProjects.filter(p => !p.flagship).map((p, i) => <GSoCCard key={i} p={p} idx={i} />)}
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          8. ADDITIONAL PROJECTS
          ========================================== */}
      <section className="relative z-10 py-20 px-6 border-b border-[#522C5D]/25 bg-[#100012]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#522C5D] to-transparent" />
            <span className="font-mono text-xs text-[#845162] uppercase tracking-[0.25em] px-4 py-2 border border-[#522C5D]/50 rounded-full">Additional Projects</span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#522C5D] to-transparent" />
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerFast}
            className="grid md:grid-cols-3 gap-6">
            {additionalProjects.map((p, i) => {
              const tilt = useTilt(9);
              const Icon = p.icon;
              return (
                <motion.div key={i} variants={scaleIn}
                  className="bg-[#150016]/90 border border-[#522C5D]/50 rounded-[22px] p-7 group hover:border-[#E3B6B1]/30 hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(82,44,93,0.5)] transition-all duration-400 flex flex-col gap-4"
                  {...tilt}>
                  <div className="w-10 h-10 rounded-xl bg-[#29104A]/60 border border-[#522C5D] flex items-center justify-center group-hover:border-[#845162] transition-colors">
                    <Icon className="w-5 h-5 text-[#E3B6B1]" />
                  </div>
                  <h3 className="text-lg font-black text-[#FFE3D8] leading-tight group-hover:text-[#E3B6B1] transition-colors">{p.name}</h3>
                  <p className="text-[#E3B6B1]/65 text-sm leading-relaxed font-light flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map(t => <span key={t} className="px-2 py-0.5 text-[9px] font-bold border border-[#522C5D]/50 text-[#E3B6B1]/60 rounded">{t}</span>)}
                  </div>
                  <a href={p.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[#E3B6B1] text-xs font-bold font-mono uppercase tracking-wider hover:gap-3 transition-all w-fit">
                    <Github className="w-3.5 h-3.5" /> GitHub <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          9. ACADEMIC FOUNDATION
          ========================================== */}
      <section className="relative z-10 py-32 px-6 bg-gradient-to-b from-[#150016] to-[#29104A]/15 border-b border-[#522C5D]/25">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-4xl md:text-6xl font-black text-[#FFE3D8] mb-16 flex items-center justify-center gap-4 text-center">
            <GraduationCap className="w-12 h-12 text-[#E3B6B1]" /> Academic Foundation
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8" style={{ perspective: 1200 }}>
            {(() => {
              const tilt = useTilt(6);
              return (
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
                  className="bg-gradient-to-br from-[#522C5D]/70 to-[#29104A]/70 p-10 rounded-[36px] border border-[#E3B6B1]/30 relative overflow-hidden group hover:border-[#E3B6B1]/60 hover:shadow-[0_30px_80px_rgba(41,16,74,0.8)] transition-all duration-500"
                  {...tilt}>
                  <div className="absolute -right-10 -bottom-10 opacity-[0.07] group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-1000 pointer-events-none">
                    <GraduationCap className="w-80 h-80 text-[#FFE3D8]" />
                  </div>
                  <div className="inline-block px-4 py-2 bg-[#100012] text-[#E3B6B1] text-xs font-bold font-mono rounded-xl mb-5 border border-[#522C5D]">OCT 2023 – MAY 2027</div>
                  <h3 className="text-4xl lg:text-5xl font-black text-[#FFE3D8] mb-3 relative z-10">BS in Data Science</h3>
                  <p className="text-[#E3B6B1] text-xl mb-6 relative z-10 font-bold">The Islamia University of Bahawalpur</p>
                  <div className="flex flex-wrap gap-3 mb-6 font-mono text-sm text-[#FFE3D8] relative z-10">
                    <span className="bg-[#100012]/80 border border-[#E3B6B1]/40 px-5 py-2.5 rounded-xl shadow-lg">CGPA: <span className="font-black text-[#E3B6B1]">3+ / 4.0</span></span>
                    <span className="bg-[#100012]/80 border border-[#E3B6B1]/40 px-5 py-2.5 rounded-xl shadow-lg font-black text-[#E3B6B1]">Active Researcher</span>
                  </div>
                  <div className="relative z-10 border-t border-[#E3B6B1]/15 pt-6">
                    <span className="block text-[10px] font-mono font-black text-[#845162] uppercase tracking-[0.25em] mb-3">Key Courses</span>
                    <div className="flex flex-wrap gap-2">
                      {uniCourses.map(c => (
                        <span key={c} className="px-2.5 py-1 text-[10px] font-bold bg-[#100012]/70 border border-[#522C5D]/60 text-[#E3B6B1]/75 rounded-lg hover:border-[#E3B6B1]/40 hover:text-[#FFE3D8] transition-colors cursor-default">{c}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })()}

            <div className="space-y-6 flex flex-col justify-between">
              {[
                { period: "APR 2021 – MAY 2023", title: "Intermediate (Pre-Engineering)", inst: "Punjab Group of Colleges Bahawalpur", desc: "Built strong analytical foundations in advanced Mathematics, Physics, and Chemistry. Active STEP pre-engineering cohort member with ECAT and FUNGAT preparation.", extra: null },
                { period: "APR 2019 – MAY 2021", title: "Matriculation (Science)", inst: "Govt Technical High School Bahawalpur", desc: "Core STEM foundation with Biology, Chemistry, Physics, and Mathematics.", extra: "1037 / 1100" }
              ].map((e, i) => {
                const tilt = useTilt(8);
                return (
                  <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                    className="bg-[#29104A]/35 p-9 rounded-3xl border border-[#522C5D] hover:border-[#E3B6B1]/40 hover:bg-[#522C5D]/20 transition-all duration-300 flex-1" {...tilt}>
                    <div className="inline-block px-3 py-1.5 w-max bg-[#100012] text-[#E3B6B1] text-[10px] font-bold font-mono rounded-lg mb-4 border border-[#522C5D]">{e.period}</div>
                    <h3 className="text-2xl font-bold text-[#FFE3D8] mb-2">{e.title}</h3>
                    <p className="text-[#845162] font-black text-lg mb-4">{e.inst}</p>
                    <p className="text-[#E3B6B1]/70 leading-relaxed font-light text-sm">{e.desc}</p>
                    {e.extra && (
                      <div className="flex items-center gap-4 mt-5">
                        <div className="px-5 py-2.5 border-2 border-[#E3B6B1] text-[#FFE3D8] text-xl font-black font-mono rounded-xl bg-[#522C5D]/35 shadow-[0_0_20px_rgba(227,182,177,0.2)]">{e.extra}</div>
                        <p className="text-xs font-mono text-[#E3B6B1] font-bold">Top 1% Elite Cohort</p>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          10. MEDIUM / KNOWLEDGE SHARING
          ========================================== */}
      <section className="relative z-10 py-32 px-6 bg-[#100012] border-b border-[#522C5D]/40 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[radial-gradient(ellipse,rgba(82,44,93,0.25),transparent_70%)] blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          {(() => {
            const tilt = useTilt(6);
            return (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
                className="bg-gradient-to-r from-[#150016] to-[#29104A]/35 border border-[#522C5D] rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 shadow-[0_40px_100px_rgba(21,0,22,0.7)] backdrop-blur-2xl group hover:border-[#845162] transition-colors duration-700"
                {...tilt}>
                <div className="lg:w-1/3 text-center lg:text-left">
                  <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 6, repeat: Infinity }}
                    className="w-24 h-24 bg-[#522C5D]/25 border border-[#845162] rounded-3xl flex items-center justify-center mx-auto lg:mx-0 mb-8 shadow-lg">
                    <BookOpen className="w-12 h-12 text-[#E3B6B1]" />
                  </motion.div>
                  <h2 className="text-4xl md:text-5xl font-black text-[#FFE3D8] leading-tight">
                    Knowledge<br /><span className="text-[#845162]">Distribution.</span>
                  </h2>
                </div>
                <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-[#522C5D] pt-8 lg:pt-0 lg:pl-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#FFE3D8] mb-5 leading-snug">"The Accuracy Paradox: Why 95% Accuracy in Medical AI is Often a Lie"</h3>
                  <p className="text-[#E3B6B1] text-base font-light mb-8 leading-relaxed">A deep dive into the reality of AI in the medical field. Breaking down the metrics that actually matter — Precision, Recall, F1 — versus the marketing hype of pure "accuracy." Essential reading for true AI architects building in high-stakes domains.</p>
                  <a href="https://medium.com/@sameerdataanalyst66/the-accuracy-paradox-why-95-accuracy-in-medical-ai-is-often-a-lie-7234156ee326" target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-transparent border-2 border-[#E3B6B1] text-[#E3B6B1] px-8 py-4 rounded-full font-bold text-base hover:bg-[#E3B6B1] hover:text-[#100012] transition-all duration-300 shadow-[0_0_20px_rgba(227,182,177,0.1)] hover:shadow-[0_0_40px_rgba(227,182,177,0.35)]">
                    Read Article on Medium <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            );
          })()}
        </div>
      </section>

      {/* ==========================================
          11. COMMUNITY & OPEN SOURCE
          ========================================== */}
      <section className="relative z-10 py-32 px-6 bg-[#150016] border-b border-[#522C5D]/25">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#FFE3D8] mb-4">Open Source Ecosystem</h2>
            <p className="text-[#E3B6B1] text-lg max-w-2xl mx-auto font-light">Democratizing deep learning through public collaboration.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerWrap} className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Github, val: "650+", label: "Commits", sub: "github.com", featured: false },
              { icon: FolderGit2, val: "15+", label: "Elite Repos", sub: "Active Projects", featured: false },
              { icon: Linkedin, val: "2,200+", label: "Network", sub: "linkedin.com", featured: true },
            ].map(({ icon: Icon, val, label, sub, featured }, i) => {
              const tilt = useTilt(10);
              return (
                <motion.div key={i} variants={scaleIn}
                  className={`p-10 rounded-[30px] text-center shadow-lg hover:border-[#E3B6B1] transition-all group hover:-translate-y-4 duration-400 ${featured ? "bg-gradient-to-br from-[#522C5D] to-[#29104A] border border-[#E3B6B1]/40 shadow-[0_20px_40px_rgba(82,44,93,0.5)]" : "bg-[#29104A]/25 border border-[#522C5D]"}`}
                  {...tilt}>
                  <Icon className="w-12 h-12 mx-auto mb-6 text-[#E3B6B1] group-hover:-translate-y-2 transition-transform duration-300" />
                  <h4 className="text-5xl font-black text-[#FFE3D8] mb-3">{val}</h4>
                  <p className="text-sm font-bold font-mono text-[#845162] uppercase tracking-widest mb-1">{label}</p>
                  <p className="text-xs font-mono text-[#E3B6B1]/50">{sub}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          12. ELITE CREDENTIALS
          ========================================== */}
      <section className="relative z-10 py-32 px-6 bg-gradient-to-t from-[#100012] to-[#150016] border-b border-[#522C5D]/25">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#FFE3D8] mb-4 flex items-center justify-center gap-4">
              <Award className="w-10 h-10 text-[#E3B6B1]" /> Elite Credentials
            </h2>
            <p className="text-[#E3B6B1] text-lg max-w-2xl mx-auto font-light">Certified rigorous training and continuous upskilling.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerWrap} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => {
              const tilt = useTilt(10);
              const isActive = cert.date === "In Progress";
              return (
                <motion.div key={idx} variants={scaleIn}
                  className={`backdrop-blur-md border p-8 rounded-3xl flex flex-col justify-between hover:bg-[#29104A]/35 hover:-translate-y-2 transition-all transform-gpu duration-300 group ${isActive ? "bg-[#29104A]/25 border-[#845162]/50" : "bg-[#29104A]/15 border-[#522C5D]"} hover:border-[#E3B6B1]`}
                  {...tilt}>
                  <div>
                    <div className="flex items-start justify-between mb-5">
                      <FileText className="w-8 h-8 text-[#845162] group-hover:text-[#E3B6B1] transition-colors" />
                      {isActive && (
                        <span className="flex items-center gap-1.5 text-[9px] font-mono font-black text-[#A6CE39] bg-[#A6CE39]/10 border border-[#A6CE39]/30 px-2.5 py-1 rounded-full">
                          <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-[#A6CE39]" />
                          IN PROGRESS
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-bold text-[#FFE3D8] mb-2 leading-snug">{cert.title}</h4>
                    <p className="text-sm text-[#E3B6B1] font-bold mb-4">{cert.issuer}</p>
                  </div>
                  <div className="pt-4 border-t border-[#522C5D]">
                    <span className="block text-[9px] font-black font-mono text-[#E3B6B1] opacity-50 truncate">{cert.id}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          13. CONTACT — END SYSTEM
          ========================================== */}
      <footer id="contact" className="relative z-10 pt-40 pb-12 px-6 bg-[#100012] overflow-hidden text-center">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scanline { 0%{transform:translateX(-100vw)} 100%{transform:translateX(100vw)} }
          @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          @keyframes gradient-pan { 0%{background-position:0%} 100%{background-position:200%} }
          @keyframes shimmer { 0%{transform:translateX(-100%)} 100%{transform:translateX(300%)} }
          .animate-scan{animation:scanline 3s ease-in-out infinite}
          .animate-marquee{animation:marquee 22s linear infinite;display:inline-block;white-space:nowrap}
        `}} />

        <div className="absolute top-0 left-0 w-full h-[3px] overflow-hidden">
          <div className="w-[600px] h-full bg-gradient-to-r from-transparent via-[#E3B6B1] to-transparent animate-scan shadow-[0_0_50px_rgba(227,182,177,1)]" />
        </div>

        <div className="absolute top-20 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
          <div className="animate-marquee text-[8rem] font-black font-mono text-[#E3B6B1]">
            BUILDING INTELLIGENCE // OPTIMIZING ARCHITECTURES // ENGINEERING THE FUTURE // BUILDING INTELLIGENCE // OPTIMIZING ARCHITECTURES // ENGINEERING THE FUTURE //
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-[radial-gradient(ellipse_at_bottom,rgba(82,44,93,0.25),transparent_70%)] pointer-events-none" />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerWrap} className="relative max-w-5xl mx-auto z-10">
          <motion.h2 variants={fadeUp} className="text-6xl md:text-8xl lg:text-9xl font-black text-[#FFE3D8] mb-8 uppercase tracking-tighter drop-shadow-2xl">
            Let's Engineer<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E3B6B1] via-[#FFE3D8] to-[#845162] animate-pulse">The Future.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-[#E3B6B1] text-xl md:text-2xl font-light max-w-3xl mx-auto mb-16 leading-relaxed">
            If you are building high-end AI architectures, require elite technical strategy, or want to collaborate on global OS research — <strong className="text-[#FFE3D8] font-black border-b border-[#E3B6B1]">the system is ready.</strong>
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
            <motion.a whileHover={{ scale: 1.05, y: -3 }} href="mailto:sameersain361@gmail.com"
              className="px-10 py-5 bg-[#E3B6B1] text-[#100012] font-black text-lg tracking-widest uppercase hover:bg-[#FFE3D8] transition-all duration-300 shadow-[0_20px_50px_rgba(227,182,177,0.35)] flex items-center justify-center gap-3 rounded-2xl group">
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Initialize Contact
            </motion.a>
            <motion.a whileHover={{ scale: 1.05, y: -3 }} href="https://www.upwork.com/freelancers/~016d309ea83d2c431a" target="_blank" rel="noreferrer"
              className="px-10 py-5 bg-[#150016] border-2 border-[#522C5D] text-[#FFE3D8] font-black text-lg tracking-widest uppercase hover:border-[#E3B6B1] hover:bg-[#29104A]/45 transition-all duration-300 rounded-2xl shadow-lg">
              Hire on Upwork
            </motion.a>
          </motion.div>

          {/* Contact details — Phone replaced with icon, Email with icon */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 text-left">
            {[
              {
                label: "Email",
                href: "mailto:sameersain361@gmail.com",
                icon: <AtSign className="w-5 h-5 text-[#845162] group-hover:text-[#E3B6B1] transition-colors" />,
                display: "sameersain361@gmail.com"
              },
              {
                label: "Contact",
                href: "tel:03047637456",
                icon: <Phone className="w-5 h-5 text-[#845162] group-hover:text-[#E3B6B1] transition-colors" />,
                display: "Available on request"
              },
              {
                label: "Location",
                href: null,
                icon: <MapPin className="w-5 h-5 text-[#845162]" />,
                display: "Bahawalpur, Punjab, PK"
              },
              {
                label: "ORCID",
                href: "https://orcid.org/0009-0006-1369-7590",
                icon: <span className="text-lg font-black font-serif italic text-[#845162] group-hover:text-[#E3B6B1] transition-colors leading-none">iD</span>,
                display: "0009-0006-1369-7590"
              },
            ].map(({ label, display, href, icon }) => (
              <div key={label} className="bg-[#150016]/60 border border-[#522C5D]/50 rounded-2xl p-5 hover:border-[#E3B6B1]/30 transition-colors group">
                <div className="flex items-center gap-2 mb-2">
                  {icon}
                  <span className="text-[9px] font-mono text-[#845162] uppercase tracking-widest">{label}</span>
                </div>
                {href ? (
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                    className="text-sm text-[#E3B6B1]/80 hover:text-[#FFE3D8] transition-colors font-mono break-all">{display}</a>
                ) : (
                  <span className="text-sm text-[#E3B6B1]/80 font-mono">{display}</span>
                )}
              </div>
            ))}
          </motion.div>

          <div className="w-full border-t border-[#522C5D] pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-mono text-[#E3B6B1]">
            <p className="flex items-center gap-2">
              <Code2 className="w-4 h-4" /> ENGINEERED BY <span className="text-[#FFE3D8] font-black text-base ml-1">SAMEER NADEEM</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E3B6B1] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E3B6B1]" />
              </span>
              SYSTEM ONLINE // ELITE TERMINAL
            </p>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}
