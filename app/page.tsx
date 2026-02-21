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




"use client";

import { 
  Github, Linkedin, Mail, BrainCircuit, Code2, Phone, Rocket, 
  GitCommitHorizontal, Cpu, Users, TerminalSquare, Database, Wrench, 
  Sparkles, Briefcase, GraduationCap, ChevronRight, FolderGit2, 
  ExternalLink, Beaker, Building2, Send, Award, Trophy, Globe, 
  CheckCircle2, Clock 
} from "lucide-react";
import { motion, Variants } from "framer-motion";

// =========================================
// DATA ARRAYS & VARIANTS (MOVED OUTSIDE TO FIX ERROR)
// =========================================

const deepchemProjects = [
  { name: "Mistral7B-ClinTox-Study", link: "https://github.com/Abu-Sameer-66/Mistral7B-ClinTox-Study", desc: "LLM Fine-tuning study on the ClinTox dataset for clinical toxicity prediction.", tags: ["Mistral-7B", "LoRA", "DeepChem"] },
  { name: "Mistral7B-Tox21-Molecular", link: "https://github.com/Abu-Sameer-66/Mistral7B-Tox21-Molecular-Optimization", desc: "Native fine-tuning of Mistral-7B on Tox21 dataset using 4-bit quantization.", tags: ["Quantization", "Tox21", "LLM"] },
  { name: "Mistral7B-BACE-Generalization", link: "https://github.com/Abu-Sameer-66/Mistral7B-BACE-Generalization-Study", desc: "Optimizing Mistral-7B for BACE-1 inhibitor prediction using scaffold-split data.", tags: ["Drug Discovery", "Scaffold-Split"] },
  { name: "Mistral7B-BBBP-Reasoning", link: "https://github.com/Abu-Sameer-66/Mistral7B-BBBP-Molecular-Reasoning", desc: "Molecular property prediction on BBBP using property-aware prompting.", tags: ["Cheminformatics", "DeepChem"] },
  { name: "ChemLLM-Tox-OLMo", link: "https://github.com/Abu-Sameer-66/ChemLLM-Tox-OLMo", desc: "Fine-tuning OLMo-7B with QLoRA for Molecular Toxicity Prediction.", tags: ["OLMo-7B", "QLoRA", "Generative AI"] }
];

const industryProjects = [
  { name: "Retail-Sales-Performance", link: "https://github.com/Abu-Sameer-66/Retail-Sales-Performance-Analysis", desc: "BI analysis to identify profit leakages and optimize regional sales strategies.", tags: ["Data Analysis", "BI", "Seaborn"] },
  { name: "CogniPath-Analytics-Engine", link: "https://github.com/Abu-Sameer-66/CogniPath-Analytics-Engine", desc: "AI-driven EdTech engine optimizing academic outcomes via predictive modeling.", tags: ["Predictive Analysis", "Scikit-Learn"] },
  { name: "PropVal-AI-Real-Estate", link: "https://github.com/Abu-Sameer-66/PropVal-Property-Valuation--AI-Real-Estate-Engine", desc: "Production-grade AVM utilizing Gradient Boosting to estimate real estate asset values.", tags: ["PropTech", "Machine Learning"] },
  { name: "SpamGuard-AI-Threat-Detection", link: "https://github.com/Abu-Sameer-66/SpamGuard-AI-Threat-Detection", desc: "Enterprise-grade SMS Phishing & Spam Detection System utilizing NLP.", tags: ["NLP", "Text Classification"] },
  { name: "AI-Voice-Assistant", link: "https://github.com/Abu-Sameer-66/AI-Voice-Assistant-Python", desc: "A modular voice assistant utilizing Python automation and speech recognition.", tags: ["Python", "Automation", "AI"] }
];

const certifications = [
  { 
    title: "The Ultimate Job Ready Data Science Course", 
    issuer: "CodeWithHarry", 
    date: "Feb 2026", 
    id: "CWH-THE-ULTIMATE-JOB-READY-DATA-SCIENCE-COURSE-BMXY6IIK", 
    status: "Completed",
    icon: <CheckCircle2 className="w-5 h-5 text-green-400" />
  },
  { 
    title: "Python Development Masterclass (11-Hour Intensive)", 
    issuer: "CodeWithHarry / Self-Taught", 
    date: "Completed", 
    id: "Independent Portfolio Validation", 
    status: "Completed",
    icon: <CheckCircle2 className="w-5 h-5 text-green-400" />
  },
  { 
    title: "Full-Stack Web Development & Prompt Engineering", 
    issuer: "Ongoing Specialized Training", 
    date: "Present", 
    id: "Skill Expansion Phase", 
    status: "In Progress",
    icon: <Clock className="w-5 h-5 text-yellow-400 animate-pulse" />
  }
];

// PROPERLY TYPED VARIANTS TO FIX THE ERROR
const fadeInUp3D: Variants = {
  hidden: { opacity: 0, y: 60, rotateX: -15, scale: 0.95 },
  visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const popIn3D: Variants = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { type: "spring", stiffness: 120, damping: 15 } }
};

// =========================================
// MAIN COMPONENT
// =========================================

export default function Home() {
  return (
    <main className="min-h-screen fluid-mesh-bg text-white overflow-x-hidden relative font-sans selection:bg-yellow-500/30 perspective-[1000px]">
      
      {/* 4D FLOATING ORBS (Background Environment) */}
      <motion.div animate={{ y: [0, -50, 0], x: [0, 30, 0] }} transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }} className="absolute top-1/4 left-10 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <motion.div animate={{ y: [0, 50, 0], x: [0, -40, 0] }} transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }} className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-yellow-700/10 rounded-full blur-[150px] pointer-events-none" />

      {/* NAVBAR */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed w-full z-50 bg-[#050505]/60 backdrop-blur-xl border-b border-yellow-500/20 py-4 px-6 md:px-12 flex justify-between items-center shadow-lg"
      >
        <div className="font-bold text-xl tracking-wide text-white flex items-center gap-1">
          <span className="text-yellow-500 font-mono">&lt;</span>
          Sameer Nadeem
          <span className="text-yellow-500 font-mono">/&gt;</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-300 tracking-wide uppercase">
          <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
          <a href="#arsenal" className="hover:text-yellow-400 transition-colors">Arsenal</a>
          <a href="#journey" className="hover:text-yellow-400 transition-colors">Journey</a>
          <a href="#projects" className="hover:text-yellow-400 transition-colors">Projects</a>
          <a href="#legacy" className="hover:text-yellow-400 transition-colors">Legacy</a>
        </div>
      </motion.nav>

      {/* PHASE 1: HERO SECTION */}
      <section id="home" className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-24 px-4 text-center transform-style-3d">
        
        {/* Floating Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 20, duration: 1.5 }}
          className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-tr from-yellow-500 via-red-600 to-[#050505] mb-8 shadow-[0_0_50px_rgba(234,179,8,0.4)] group"
        >
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.8, 0.6] }} 
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute inset-0 bg-gradient-to-tr from-yellow-500 via-red-600 to-teal-900 rounded-full opacity-60 blur-lg"
          />
          <div className="relative w-full h-full bg-[#0a0a0a] rounded-full border-[3px] border-[#050505] flex items-center justify-center overflow-hidden z-10">
             <img src="/profile.png" alt="Sameer Nadeem" className="w-full h-full object-cover" onError={(e) => { const target = e.currentTarget; if (target.src.includes('.png')) { target.src = "/profile.jpg"; } else { target.src = "https://ui-avatars.com/api/?name=Sameer+Nadeem&background=0D0D0D&color=EAB308&size=256&bold=true"; } }} />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-4 text-white tracking-tighter drop-shadow-2xl"
        >
          Sameer Nadeem
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 text-xl md:text-2xl font-bold mb-6 tracking-wide"
        >
          AI-ML Engineer | Data Scientist | LLM Optimization & Fine-Tuning
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7, type: "spring" }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-red-500/40 text-sm font-mono text-gray-200 shadow-[0_0_15px_rgba(153,27,27,0.3)] hover:border-red-400 transition-colors">
            <Code2 size={16} className="text-red-400"/> Python & SQL Developer
          </span>
          <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-purple-500/40 text-sm font-mono text-gray-200 shadow-[0_0_15px_rgba(107,33,168,0.3)] hover:border-purple-400 transition-colors">
            <BrainCircuit size={16} className="text-purple-400"/>Open Source & DeepChem Contributor
          </span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
          className="text-2xl md:text-4xl font-semibold max-w-4xl leading-snug mb-12 text-gray-300 drop-shadow-lg"
        >
          Building Systems & Architecture. <br className="hidden md:block"/>
          Transforming <span className="text-white font-bold underline decoration-yellow-500 decoration-4 underline-offset-8">AutoMotive Retail</span> with Data & ML.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, type: "spring" }}
          className="flex flex-col items-center gap-8"
        >
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(234,179,8,0.6)" }} whileTap={{ scale: 0.95 }}
            href="#projects" 
            className="elite-golden-button text-[#3d2b00] px-12 py-4 rounded-full font-extrabold text-lg tracking-wider uppercase flex items-center gap-3"
          >
            Explore My Work <ChevronRight className="w-6 h-6" />
          </motion.a>
          
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-wrap justify-center gap-5 mt-2">
            {[
              { icon: <Linkedin size={24} />, link: "https://www.linkedin.com/in/sameer-nadeem-66339a357/", title: "LinkedIn" },
              { icon: <Github size={24} />, link: "https://github.com/Abu-Sameer-66", title: "GitHub" },
              { icon: <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-[24px] h-[24px]"><path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.34-.246.526-.246h3.255c.234 0 .304.141.211.422L12.35 14.54l6.475 9.319z"/></svg>, link: "https://www.kaggle.com/sameernadeem66", title: "Kaggle" },
              { icon: <Mail size={24} />, link: "mailto:sameersain361@gmail.com", title: "Email" },
              { icon: <Phone size={24} />, link: "tel:+923047637545", title: "Call" }
            ].map((social, i) => (
              <motion.a 
                key={i} variants={popIn3D} whileHover={{ scale: 1.2, rotateZ: 5, y: -5 }}
                href={social.link} target="_blank" rel="noreferrer" title={social.title} 
                className="p-4 rounded-full bg-black/60 backdrop-blur-md border border-yellow-500/50 text-yellow-500 hover:text-white hover:bg-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.2)] flex items-center justify-center"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          PHASE 2: WHO AM I ?
          ========================================= */}
      <section id="about" className="relative z-10 py-20 px-4 md:px-12 max-w-6xl mx-auto flex flex-col items-center perspective-[1200px]">
        <motion.h2 variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-4xl md:text-5xl font-bold mb-12 text-white tracking-tight flex items-center gap-4">
          <span className="w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
          Who Am I ?
          <span className="w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
        </motion.h2>

        <motion.div 
          variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="bg-[#050505]/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl mb-16 hover:border-yellow-500/30 transition-colors duration-500"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light text-justify md:text-center">
            Hi, I'm <span className="text-yellow-400 font-semibold">Sameer Nadeem</span>. I believe true AI isn't just trained on static datasets; it's engineered from the ground up to solve real human problems. Beyond my academic foundation as a Data Science student at the <span className="text-white font-medium">Islamia University of Bahawalpur</span>, I am actively bridging the gap between raw data and real-world impact.
            <br/><br/>
            Currently, I am conducting hands-on data engineering at an <span className="text-yellow-400 font-semibold">Automotive Retail</span> business—analyzing pricing elasticity, inventory dynamics, and customer feedback loops to build ML systems that optimize daily operations. Whether it's contributing to DeepChem's open-source ecosystem, engineering scalable LLM pipelines, or extracting insights straight from the shop floor, my mission is singular: <span className="text-white font-medium">to architect intelligent systems that serve humanity and make life easier.</span>
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
          {[
            { icon: <Rocket className="w-10 h-10 text-yellow-500 mb-4" />, val: "10+", title: "AI-ML Projects", sub: "Built & Deployed" },
            { icon: <GitCommitHorizontal className="w-10 h-10 text-yellow-500 mb-4" />, val: "600+", title: "GitHub Commits", sub: "Active Developer" },
            { icon: <Cpu className="w-10 h-10 text-yellow-500 mb-4" />, val: "LLMs", title: "Fine-Tuning", sub: "Optimization Expert" },
            { icon: <Users className="w-10 h-10 text-yellow-500 mb-4" />, val: "2,000+", title: "Network", sub: "Tech Community" }
          ].map((metric, i) => (
            <motion.div 
              key={i} variants={popIn3D} whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5, z: 20 }}
              className="flex flex-col items-center justify-center p-8 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-2xl group hover:border-yellow-500/50 hover:shadow-[0_20px_40px_rgba(234,179,8,0.2)] transform-style-3d"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">{metric.icon}</div>
              <h3 className="text-4xl font-extrabold text-white mb-2">{metric.val}</h3>
              <p className="text-sm text-yellow-500 uppercase tracking-widest font-bold mb-1">{metric.title}</p>
              <p className="text-xs text-gray-400 text-center font-medium">{metric.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =========================================
          PHASE 3: TECHNICAL ARSENAL
          ========================================= */}
      <section id="arsenal" className="relative z-10 py-20 px-4 md:px-12 max-w-6xl mx-auto flex flex-col items-center perspective-[1500px]">
        <motion.h2 variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight flex items-center gap-4">
          <span className="w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
          Technical Arsenal
          <span className="w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
        </motion.h2>
        
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          
          <motion.div variants={fadeInUp3D} className="bg-[#050505]/70 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-yellow-500/40 transition-all duration-500 flex flex-col h-full shadow-xl hover:shadow-[0_10px_30px_rgba(234,179,8,0.15)]">
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <TerminalSquare className="w-6 h-6 text-yellow-400 drop-shadow-md" />
              <h3 className="text-xl font-bold text-white tracking-wide">Languages & DB</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Python', 'SQL', 'C++ (Beginner)', 'JavaScript (Beginner)'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 shadow-sm cursor-default transition-all duration-300 hover:text-yellow-300 hover:border-yellow-500/60 hover:bg-yellow-500/10 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(234,179,8,0.3)]">{skill}</span>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp3D} className="md:col-span-2 bg-[#050505]/70 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-yellow-500/40 transition-all duration-500 flex flex-col h-full shadow-xl hover:shadow-[0_10px_30px_rgba(234,179,8,0.15)]">
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <Sparkles className="w-6 h-6 text-yellow-400 drop-shadow-md" />
              <h3 className="text-xl font-bold text-white tracking-wide">Specializations</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {['LLM Fine-Tuning', 'System Architecture', 'Molecular ML', 'Web Scraping', 'Workflow Automation', 'AutoMotive Data Analytics', 'RAG (Retrieval-Augmented Generation)'].map((skill) => (
                <span key={skill} className="px-5 py-2.5 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-sm font-semibold text-yellow-100 shadow-md cursor-default transition-all duration-300 hover:text-white hover:border-yellow-400 hover:bg-yellow-500/30 hover:-translate-y-1 hover:shadow-[0_5px_25px_rgba(234,179,8,0.5)]">{skill}</span>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp3D} className="md:col-span-2 bg-[#050505]/70 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-yellow-500/40 transition-all duration-500 flex flex-col h-full shadow-xl hover:shadow-[0_10px_30px_rgba(234,179,8,0.15)]">
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <Database className="w-6 h-6 text-yellow-400 drop-shadow-md" />
              <h3 className="text-xl font-bold text-white tracking-wide">AI & Data Ecosystem</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {['DeepChem', 'TensorFlow', 'PyTorch', 'Hugging Face', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'OpenCV'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 shadow-sm cursor-default transition-all duration-300 hover:text-yellow-300 hover:border-yellow-500/60 hover:bg-yellow-500/10 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(234,179,8,0.3)]">{skill}</span>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp3D} className="bg-[#050505]/70 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-yellow-500/40 transition-all duration-500 flex flex-col h-full shadow-xl hover:shadow-[0_10px_30px_rgba(234,179,8,0.15)]">
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <Wrench className="w-6 h-6 text-yellow-400 drop-shadow-md" />
              <h3 className="text-xl font-bold text-white tracking-wide">Tools & DevOps</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Git & GitHub', 'VS Code', 'Jupyter', 'Google Colab', 'Kaggle', 'LinkedIn', 'ORCID', 'Discord'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 shadow-sm cursor-default transition-all duration-300 hover:text-yellow-300 hover:border-yellow-500/60 hover:bg-yellow-500/10 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(234,179,8,0.3)]">{skill}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          PHASE 4: EXPERIENCE & ACADEMIC TIMELINE 
          ========================================= */}
      <section id="journey" className="relative z-10 py-20 px-4 md:px-12 max-w-5xl mx-auto flex flex-col items-center">
        <motion.h2 variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight flex items-center gap-4 text-center">
          <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
          Where I've Made Impact
          <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
        </motion.h2>
        
        <div className="relative w-full border-l-2 md:border-l-0 md:border-t-0 md:absolute-center md:before:absolute md:before:inset-0 md:before:ml-auto md:before:mr-auto md:before:w-[2px] md:before:bg-gradient-to-b md:before:from-yellow-500 md:before:via-red-600 md:before:to-purple-900 border-yellow-500/30 pl-6 md:pl-0">
          
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "spring", duration: 0.8 }} viewport={{ once: true, margin: "-100px" }} className="relative mb-16 md:mb-24 md:w-1/2 md:pr-12 md:ml-0 group perspective-[1000px]">
            <div className="absolute -left-[35px] md:-right-[11px] md:left-auto top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
            <div className="bg-[#050505]/60 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(234,179,8,0.2)] hover:rotate-y-2">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="w-5 h-5 text-yellow-500" />
                <h3 className="text-2xl font-bold text-white">Data Strategy Consultant</h3>
              </div>
              <p className="text-yellow-400 font-medium mb-1">Al-Quresh Motors & Spare Parts</p>
              <p className="text-xs text-gray-500 font-mono mb-4 border-b border-white/10 pb-4">JAN 2026 — PRESENT | Ground-Zero Analytics</p>
              <ul className="space-y-2 text-gray-300 text-sm md:text-base leading-relaxed">
                <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 shrink-0 mt-1"/> Executing ground-level data collection to analyze customer psychology, product demand, and pricing elasticity.</li>
                <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 shrink-0 mt-1"/> Digitizing shop floor operations and mapping customer churn to predict seasonal product roadmaps for the business owner.</li>
                <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-yellow-500 shrink-0 mt-1"/> Bridging the gap between raw retail logic and Machine Learning to build a predictive, customer-satisfaction-focused sales system.</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "spring", duration: 0.8 }} viewport={{ once: true, margin: "-100px" }} className="relative mb-16 md:mb-24 md:w-1/2 md:pl-12 md:ml-auto group perspective-[1000px]">
            <div className="absolute -left-[35px] md:-left-[11px] top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
            <div className="bg-[#050505]/60 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(168,85,247,0.2)] hover:-rotate-y-2">
              <div className="flex items-center gap-3 mb-2">
                <Code2 className="w-5 h-5 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Core Open Source Contributor</h3>
              </div>
              <p className="text-purple-400 font-medium mb-1">DeepChem Ecosystem</p>
              <p className="text-xs text-gray-500 font-mono mb-4 border-b border-white/10 pb-4">DEC 2025 — PRESENT | Global AI Community</p>
              <ul className="space-y-2 text-gray-300 text-sm md:text-base leading-relaxed">
                <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-1"/> Integrating a lifelong passion for Chemistry with modern computing by teaching AI models complex molecular science.</li>
                <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-1"/> Submitting advanced Pull Requests (PRs) focused on model optimization and fine-tuning LLMs for chemical datasets.</li>
                <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-1"/> Actively contributing to architectures that transform computational chemistry into scalable machine learning solutions.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "spring", duration: 0.8 }} viewport={{ once: true, margin: "-100px" }} className="relative mb-16 md:mb-24 md:w-1/2 md:pr-12 md:ml-0 group perspective-[1000px]">
            <div className="absolute -left-[35px] md:-right-[11px] md:left-auto top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
            <div className="bg-[#050505]/60 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(59,130,246,0.2)] hover:rotate-y-2">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Bachelor of Science in Data Science</h3>
              </div>
              <p className="text-blue-400 font-medium mb-1">Islamia University of Bahawalpur</p>
              <p className="text-xs text-gray-500 font-mono mb-4 border-b border-white/10 pb-4">AUG 2023 — EXP. 2027 | 6th Semester | Grade: B</p>
              <div className="text-gray-300 text-sm md:text-base leading-relaxed">
                <p className="mb-2 text-gray-400">Core Architecture & Logic Coursework:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Advanced ML', 'ANN & Deep Learning', 'Data Mining', 'Probability & Stats', 'Business Process Analysis', 'Data Warehouse & BI'].map((sub) => (
                    <span key={sub} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-xs text-blue-200">{sub}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "spring", duration: 0.8 }} viewport={{ once: true, margin: "-100px" }} className="relative mb-16 md:mb-24 md:w-1/2 md:pl-12 md:ml-auto group perspective-[1000px]">
            <div className="absolute -left-[35px] md:-left-[11px] top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-gray-400 shadow-[0_0_15px_rgba(156,163,175,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
            <div className="bg-[#050505]/60 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl hover:border-gray-400/50 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(255,255,255,0.1)] hover:-rotate-y-2">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-5 h-5 text-gray-300" />
                <h3 className="text-xl font-bold text-white">Intermediate (FSc Pre-Engineering)</h3>
              </div>
              <p className="text-gray-300 font-medium mb-1">Punjab Group of Colleges, Bahawalpur</p>
              <p className="text-xs text-gray-500 font-mono mb-2">2021 — 2023 | Grade: B</p>
              <p className="text-gray-400 text-sm leading-relaxed">Developed a profound, life-long passion for Chemistry through exceptional mentorship, laying the analytical foundation for my future work in Molecular Machine Learning.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ type: "spring", duration: 0.8 }} viewport={{ once: true, margin: "-100px" }} className="relative md:w-1/2 md:pr-12 md:ml-0 group perspective-[1000px]">
            <div className="absolute -left-[35px] md:-right-[11px] md:left-auto top-6 w-5 h-5 rounded-full bg-[#050505] border-4 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] z-10 group-hover:scale-125 transition-transform duration-300"></div>
            <div className="bg-gradient-to-br from-[#050505] to-[#1a0505] backdrop-blur-md border border-red-500/30 p-6 md:p-8 rounded-2xl hover:border-red-500/70 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(239,68,68,0.3)] hover:rotate-y-2 relative overflow-hidden">
              <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/20 blur-2xl rounded-full"></motion.div>
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-5 h-5 text-red-400" />
                <h3 className="text-xl font-bold text-white">Matriculation (Science)</h3>
              </div>
              <p className="text-red-400 font-medium mb-1">Government Technical High School, BWP</p>
              <p className="text-xs text-gray-500 font-mono mb-3">GRADUATED 2021</p>
              <div className="flex items-center gap-3 mb-2">
                 <span className="px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 font-bold tracking-widest">1037 / 1100 Marks</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mt-3">Selected as part of the highly coveted <span className="text-white font-bold">Top 1% Elite Cohort</span> in one of the city's highest-ranking schools. A foundational era that cemented a track record of top-tier execution.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          PHASE 5: ELITE PROJECTS SHOWCASE
          ========================================= */}
      <section id="projects" className="relative z-10 py-20 px-4 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
        <motion.h2 variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight flex items-center gap-4 text-center">
          <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
          Building Intelligence, One Model At A Time
          <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
        </motion.h2>
        <motion.p variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-gray-400 text-lg mb-16 max-w-2xl text-center">
          A curated selection of my production-grade systems, open-source contributions, and real-world ML engines.
        </motion.p>

        <div className="w-full mb-16">
          <motion.div variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-3 mb-8 border-b border-purple-500/30 pb-4">
            <Beaker className="w-8 h-8 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
            <h3 className="text-3xl font-bold text-white tracking-wide">Open Source & Molecular ML <span className="text-purple-400 text-xl font-medium">(DeepChem / GSoC)</span></h3>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-[1200px]">
            {deepchemProjects.map((project, index) => (
              <motion.div key={index} variants={popIn3D} whileHover={{ y: -10, rotateX: 5, rotateY: -5, z: 20 }} className="bg-gradient-to-br from-[#0a0a0a] to-[#120518] backdrop-blur-xl border border-purple-500/20 p-6 rounded-2xl flex flex-col justify-between group shadow-lg hover:shadow-[0_20px_40px_rgba(168,85,247,0.3)] transition-shadow duration-300">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <FolderGit2 className="w-8 h-8 text-purple-500 group-hover:text-yellow-400 transition-colors" />
                    <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-purple-500/20 transition-colors"><ExternalLink className="w-5 h-5 text-gray-300 hover:text-white" /></motion.a>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-purple-300 transition-colors">{project.name}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-md text-xs font-medium text-purple-200">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="w-full">
          <motion.div variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-3 mb-8 border-b border-blue-500/30 pb-4">
            <Building2 className="w-8 h-8 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            <h3 className="text-3xl font-bold text-white tracking-wide">Enterprise & Industry Solutions</h3>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-[1200px]">
            {industryProjects.map((project, index) => (
              <motion.div key={index} variants={popIn3D} whileHover={{ y: -10, rotateX: 5, rotateY: 5, z: 20 }} className="bg-gradient-to-br from-[#0a0a0a] to-[#050f1a] backdrop-blur-xl border border-blue-500/20 p-6 rounded-2xl flex flex-col justify-between group shadow-lg hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)] transition-shadow duration-300">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <FolderGit2 className="w-8 h-8 text-blue-500 group-hover:text-yellow-400 transition-colors" />
                    <motion.a whileHover={{ scale: 1.2, rotate: -10 }} href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-blue-500/20 transition-colors"><ExternalLink className="w-5 h-5 text-gray-300 hover:text-white" /></motion.a>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-300 transition-colors">{project.name}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-md text-xs font-medium text-blue-200">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          PHASE 6 & 7: LEADERSHIP & CREDENTIALS 
          ========================================= */}
      <section id="legacy" className="relative z-10 py-20 px-4 md:px-12 max-w-6xl mx-auto flex flex-col items-center perspective-[1200px]">
        <motion.h2 variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-bold mb-16 text-white tracking-tight flex items-center gap-4 text-center">
          <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
          Leadership & Digital Footprint
          <span className="hidden md:block w-16 h-[2px] bg-yellow-500/60 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
        </motion.h2>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-20">
          <motion.div variants={popIn3D} whileHover={{ scale: 1.02, rotateY: 5, z: 20 }} className="bg-[#050505]/60 backdrop-blur-xl border border-yellow-500/20 p-8 rounded-3xl hover:border-yellow-500/50 shadow-lg hover:shadow-[0_20px_40px_rgba(234,179,8,0.2)] flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Users className="w-10 h-10 text-blue-400" /></div>
            <h3 className="text-2xl font-bold text-white mb-3">Global Tech Community Leader</h3>
            <p className="text-gray-300 leading-relaxed">Cultivating an active and engaged network of <span className="text-yellow-400 font-bold">2,000+ industry professionals</span> on LinkedIn. Consistently sharing high-value insights on LLM fine-tuning, Python development, and real-world Data Science strategies.</p>
          </motion.div>

          <motion.div variants={popIn3D} whileHover={{ scale: 1.02, rotateY: -5, z: 20 }} className="bg-[#050505]/60 backdrop-blur-xl border border-yellow-500/20 p-8 rounded-3xl hover:border-yellow-500/50 shadow-lg hover:shadow-[0_20px_40px_rgba(234,179,8,0.2)] flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Globe className="w-10 h-10 text-purple-400" /></div>
            <h3 className="text-2xl font-bold text-white mb-3">Open Source Advocate</h3>
            <p className="text-gray-300 leading-relaxed">Dedicated to the democratization of deep learning through active contributions to <span className="text-yellow-400 font-bold">DeepChem</span>. Building public-beneficial systems and driving the adoption of molecular machine learning in global scientific communities.</p>
          </motion.div>
        </motion.div>

        <div className="w-full">
          <motion.div variants={fadeInUp3D} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <Award className="w-8 h-8 text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
            <h3 className="text-3xl font-bold text-white tracking-wide">Certificates & Continuous Learning</h3>
          </motion.div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-4">
            {certifications.map((cert, index) => (
              <motion.div key={index} variants={fadeInUp3D} whileHover={{ scale: 1.01, x: 10, backgroundColor: "rgba(255,255,255,0.05)" }} className="flex flex-col md:flex-row items-start md:items-center justify-between bg-[#0a0a0a]/50 backdrop-blur-md border border-white/5 p-6 rounded-2xl transition-all">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="mt-1">{cert.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{cert.title}</h4>
                    <p className="text-sm text-gray-400">Issuer: <span className="text-yellow-500/80">{cert.issuer}</span></p>
                  </div>
                </div>
                <div className="flex flex-col md:items-end text-left md:text-right">
                  <span className="px-3 py-1 bg-white/5 rounded-md text-xs font-mono text-gray-300 mb-2 border border-white/10">ID: {cert.id}</span>
                  <span className="text-sm text-gray-500 font-medium">{cert.status} • {cert.date}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          PHASE 8: THE EPIC "TABHAI" FOOTER (4D ANIMATED)
          ========================================= */}
      <footer id="contact" className="relative z-10 pt-32 pb-10 px-4 mt-10 border-t border-white/5 bg-gradient-to-t from-[#050505] via-[#1a0505] to-transparent text-center overflow-hidden">
        
        {/* CSS FOR SCANLINE AND SHIMMER */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scanline { 0% { transform: translateX(-100%); } 100% { transform: translateX(100vw); } }
          .animate-scan { animation: scanline 4s ease-in-out infinite; }
          @keyframes text-shimmer { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
          .animate-text-shimmer { background-size: 200% auto; animation: text-shimmer 4s linear infinite; }
        `}} />

        {/* Moving Laser Line on Top Border */}
        <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden">
          <div className="w-[300px] h-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-scan shadow-[0_0_30px_rgba(234,179,8,1)]"></div>
        </div>

        {/* Breathing Background Glow (Pulse Effect) */}
        <motion.div animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-yellow-600/10 blur-[120px] rounded-t-full pointer-events-none" />

        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 1.2 }} viewport={{ once: true }} className="relative max-w-5xl mx-auto flex flex-col items-center">
          
          <motion.div animate={{ rotateY: [0, 360] }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }}>
            <Trophy className="w-16 h-16 text-yellow-500 mb-6 drop-shadow-[0_0_30px_rgba(234,179,8,1)]" />
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-400 to-white animate-text-shimmer tracking-tighter uppercase">
            The Future Isn't Predicted.<br/>It's Engineered.
          </h2>
          
          <p className="text-gray-300 text-xl mb-12 max-w-3xl font-light">
            Whether it's optimizing LLMs for complex chemistry, building predictive AVMs for real estate, or engineering data pipelines for retail—I don't just write code. <span className="font-bold text-white">I architect solutions that serve humanity.</span> Let's build the extraordinary.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-24">
            <motion.a whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(234,179,8,0.5)" }} whileTap={{ scale: 0.95 }} href="mailto:sameersain361@gmail.com" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-12 py-5 rounded-full font-extrabold text-lg tracking-widest uppercase flex items-center justify-center gap-3">
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}><Send className="w-6 h-6" /></motion.div> Initialize Contact
            </motion.a>
            <motion.a whileHover={{ scale: 1.05, backgroundColor: "rgba(234,179,8,0.1)", borderColor: "#eab308" }} whileTap={{ scale: 0.95 }} href="tel:+923047637545" className="px-12 py-5 rounded-full border-2 border-yellow-500/50 text-yellow-500 font-bold text-lg tracking-widest uppercase">
              +92 304 7637545
            </motion.a>
          </div>

          <div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm font-mono font-semibold tracking-wider flex items-center gap-2">
              <Code2 className="w-4 h-4" /> DESIGNED & ENGINEERED BY <span className="text-yellow-500">SAMEER NADEEM</span>
            </div>
            <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="text-gray-600 text-xs font-mono">
              SYSTEM ONLINE // STATUS: OPTIMIZED // © {new Date().getFullYear()}
            </motion.div>
          </div>

        </motion.div>
      </footer>

    </main>
  );
}