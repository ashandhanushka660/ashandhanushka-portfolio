'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import {
  LucideLayers,
  LucideExternalLink,
  LucideChevronLeft,
  LucideChevronRight,
  LucideDatabase,
  LucideCpu,
  LucideCode2,
  LucideGlobe,
  LucideTerminal,
  LucideWallet,
  LucideCamera,
  LucideTrophy,
  LucideBinary,
  LucideGithub,
  LucideBookOpen,
  LucideTarget,
  LucideZap,
  LucideUser,
  LucideMail,
  LucidePhone,
  LucideGraduationCap,
  LucideCopy,
  LucideCheck,
  LucideInstagram,
  LucideLinkedin
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('HOME');
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  // Profile Image Path (assuming local or provided in environment)
  const profileImg = "/ashan-profile.png";

  // Refs for scrolling - create refs outside useMemo to follow React rules
  const homeRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sectionRefs = useMemo(() => ({
    HOME: homeRef,
    PROJECTS: projectsRef,
    ABOUT: aboutRef,
    CONTACT: contactRef
  }), []);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const scrollToSection = (tab: string) => {
    const ref = sectionRefs[tab as keyof typeof sectionRefs];
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveTab(tab);
  };

  // Intersection Observer to detect active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-section');
          if (id) setActiveTab(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [sectionRefs]);

  const projects = [
    {
      id: 'cbdc-wallet',
      category: 'Fintech & Blockchain',
      title: 'CBDC & Digital Wallet Ecosystem',
      subtitle: 'Modernization of Financial Systems',
      description: 'Explores the architecture of digital fiat currency across different tech stacks, from backend microservices to frontend interfaces.',
      tags: ['.NET', 'Spring Boot', 'Blockchain', 'Quasar', 'Supabase', 'Java'],
      icon: <LucideWallet className="w-5 h-5" />,
      color: 'border-emerald-500/30 shadow-emerald-500/10 text-emerald-400',
      learningPoints: [
        'Secure CBDC Wallets using .NET & Spring Boot',
        'Blockchain integration with Quasar Framework',
        'Real-time state tracking with Supabase',
        'Cross-platform digital asset management'
      ],
      githubUrl: 'https://github.com/ashandhanushka'
    },
    {
      id: 'camera-sim',
      category: 'Simulations & Multimedia',
      title: 'Camera Anatomy & Simulation',
      subtitle: 'Hardware Simulation & Logic',
      description: 'Specialized projects designed to simulate the internal workings and visual outputs of complex camera systems.',
      tags: ['C#', 'WPF', 'JavaScript', 'Game Logic'],
      icon: <LucideCamera className="w-5 h-5" />,
      color: 'border-blue-500/30 shadow-blue-500/10 text-blue-400',
      learningPoints: [
        'Hardware Mapping: Anatomy to Software Logic',
        'Graphic rendering for simulation controls',
        'Logic-based modeling of physical devices',
        'High-fidelity UI interaction systems'
      ],
      githubUrl: 'https://github.com/ashandhanushka'
    },
    {
      id: 'soap-practicals',
      category: 'Service Architecture',
      title: 'SOAP-Web-Services-Practicals',
      subtitle: 'Distributed Systems & Integration',
      description: 'A comprehensive series of practicals covering service creation, WSDL definitions, and complex WS-BPEL service composition.',
      tags: ['PHP', 'XML', 'WSDL', 'WS-BPEL', 'SOAP'],
      icon: <LucideDatabase className="w-5 h-5" />,
      color: 'border-cyan-500/30 shadow-cyan-500/10 text-cyan-400',
      learningPoints: [
        'SOAP Implementation via PHP & XAMPP',
        'XML-based messaging and WSDL interfaces',
        'Service Composition (WS-BPEL Orchestration)',
        'SOAP Envelopes, Headers, and Bodies'
      ],
      githubUrl: 'https://github.com/ashandhanushka'
    },
    {
      id: 'modern-web',
      category: 'Modern Web Development',
      title: 'Full-Stack & Automation Tools',
      subtitle: 'Commerce & Data Engineering',
      description: 'A mix of modern React-based commerce platforms, web scraping engines, and AI-driven automation tools.',
      tags: ['Next.js', 'React', 'Python', 'Web Scraping', 'AI/ML'],
      icon: <LucideGlobe className="w-5 h-5" />,
      color: 'border-purple-500/30 shadow-purple-500/10 text-purple-400',
      learningPoints: [
        'SSR & Static Site Generation with Next.js',
        'Web Scraping engines for data mining',
        'AI-driven Text-to-Speech (EN/SN) systems',
        'High-performance commerce architecture'
      ],
      githubUrl: 'https://github.com/ashandhanushka'
    },
    {
      id: 'js-logic',
      category: 'Logic & Algorithms',
      title: 'JS Practicals Repository',
      subtitle: 'Foundational Coding Challenges',
      description: 'Focusing on DOM manipulation and functional programming patterns to build efficient, scalable scripts.',
      tags: ['JavaScript (ES6+)', 'HTML5', 'CSS3'],
      icon: <LucideBinary className="w-5 h-5" />,
      color: 'border-yellow-500/30 shadow-yellow-500/10 text-yellow-400',
      learningPoints: [
        'Functional Programming: forEach, filter, immutability',
        'DOM Manipulation: Event listeners & dynamic styling',
        'Selector optimization and object creation',
        'ES6+ best practices and modularity'
      ],
      githubUrl: 'https://github.com/ashandhanushka'
    },
    {
      id: 'specialized-apps',
      category: 'Specialized Applications',
      title: 'Domain-Specific Software Suite',
      subtitle: 'Event & Organization Management',
      description: 'Targeted software for library management, real-time sports scoreboards, and secure voting systems.',
      tags: ['WPF', 'C#', 'SQL', 'UI/UX Design'],
      icon: <LucideTrophy className="w-5 h-5" />,
      color: 'border-rose-500/30 shadow-rose-500/10 text-rose-400',
      learningPoints: [
        'Library Management: Desktop UI/UX & CRUD',
        'Sports Scoreboards: Real-time data tracking',
        'Secure Voting: Logic for tallying & reporting',
        'Organizational workflow automation'
      ],
      githubUrl: 'https://github.com/ashandhanushka'
    }
  ];

  const FloatingCrystal = ({ className = '', size = 200 }: { className?: string; size?: number }) => (
    <svg
      viewBox="0 0 200 200"
      className={`absolute transition-all duration-1000 ease-in-out ${className}`}
      style={{ width: size, height: size, filter: 'blur(2px)' }}
    >
      <defs>
        <linearGradient id="crystalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0c3fc" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#8ec5fc" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#d1a3ff" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <path d="M100 20 L160 80 L100 180 L40 80 Z" fill="url(#crystalGrad)" className="animate-pulse" />
      <path d="M100 20 L130 80 L100 110 L70 80 Z" fill="rgba(255,255,255,0.3)" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white font-sans overflow-hidden flex flex-col items-center justify-center p-4 md:p-10 selection:bg-purple-500/30">

      {/* Decorative Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl w-full bg-[#111114]/80 backdrop-blur-xl border border-white/5 rounded-[40px] shadow-2xl overflow-hidden flex flex-col relative min-h-[85vh]">

        {/* Navigation - Fixed Position inside the container */}
        <header className="sticky top-0 w-full flex justify-between items-center px-8 py-8 z-50 bg-[#111114]/40 backdrop-blur-xl border-b border-white/5">
          <nav className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
            {['HOME', 'PROJECTS', 'ABOUT', 'CONTACT'].map((tab) => (
              <button
                key={tab}
                onClick={() => scrollToSection(tab)}
                className={`px-6 py-2 rounded-full text-xs font-medium tracking-widest transition-all duration-300 ${activeTab === tab ? 'bg-white/10 text-white shadow-inner' : 'text-gray-400 hover:text-white'
                  }`}
              >
                {tab}
              </button>
            ))}
          </nav>
          <div className="text-xl font-bold tracking-tighter flex items-center gap-1">
            <span className="bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">A&A</span>
          </div>
        </header>

        {/* Scrollable Container */}
        <main className="flex-grow overflow-y-auto custom-scrollbar scroll-smooth">

          {/* HOME SECTION */}
          <section
            ref={homeRef}
            data-section="HOME"
            className="min-h-[calc(85vh-100px)] flex flex-col lg:flex-row items-center gap-12 px-8 py-16 lg:px-16"
          >
            <div className="relative w-full lg:w-1/2 aspect-square max-h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[40px] border border-white/10 rounded-[30px] z-0 shadow-2xl" />

              {/* Floating Avatar */}
              <div className="absolute top-10 right-10 z-20 w-24 h-24 p-1 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500 overflow-hidden group">
                <Image
                  src={profileImg}
                  alt="Ashan"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"; }}
                />
              </div>

              <FloatingCrystal className="top-10 left-10 opacity-40 scale-50 rotate-12" size={150} />
              <FloatingCrystal className="bottom-10 right-10 opacity-30 scale-75 -rotate-45" size={180} />

              <div className="relative z-10 transition-transform duration-500 hover:scale-105 cursor-grab active:cursor-grabbing">
                <FloatingCrystal className="animate-[bounce_8s_infinite_ease-in-out]" size={320} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <FloatingCrystal className="rotate-90 opacity-80" size={140} />
                </div>
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/5">
                <LucideChevronLeft className="w-4 h-4 text-gray-400" />
                <div className="w-12 h-[2px] bg-white/10 relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-1/3 bg-white" />
                </div>
                <LucideChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="w-full lg:w-1/2 space-y-8 lg:pl-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-white/20" />
                  <span className="text-[10px] tracking-[0.4em] text-gray-500 uppercase font-bold">Introduction</span>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold leading-[0.95] tracking-tight text-white/95">
                  ASHAN <br />
                  DHANUSHKA<br />

                </h1>
                <p className="text-gray-400 max-w-md text-sm md:text-base font-light tracking-wide leading-relaxed uppercase">
                  Software Engineer & Creative Developer / Specializing in Fintech, SPRINGBOOT, LARAVEL and Full-Stack Architectures.
                </p>
              </div>
              <button
                onClick={() => scrollToSection('PROJECTS')}
                className="group relative px-8 py-3 bg-white/5 border border-white/20 rounded-full overflow-hidden transition-all hover:border-white/40"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="relative z-10 text-xs font-bold tracking-[0.2em] group-hover:text-black transition-colors duration-300 uppercase">View Case Studies</span>
                <div className={`absolute inset-0 bg-white transform origin-left transition-transform duration-300 ease-out ${isHovered ? 'scale-x-100' : 'scale-x-0'}`} />
              </button>
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section
            ref={projectsRef}
            data-section="PROJECTS"
            className="min-h-screen space-y-12 px-8 py-20 lg:px-16 border-t border-white/5"
          >
            <div className="space-y-2">
              <h2 className="text-4xl font-bold tracking-tighter">PROJECTS</h2>
              <p className="text-gray-500 text-sm tracking-widest uppercase font-medium">A portfolio of engineering excellence across multiple domains.</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`group relative bg-[#1a1a20]/40 border ${project.color} rounded-[32px] p-8 transition-all hover:scale-[1.01] overflow-hidden flex flex-col`}
                >
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    {project.icon}
                  </div>

                  <div className="relative z-10 space-y-6 flex-grow">
                    <div className="space-y-1">
                      <div className={`text-[10px] font-bold tracking-[0.2em] uppercase ${project.color.split(' ')[2]}`}>
                        {project.category}
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                      {project.description}
                    </p>

                    <div className="space-y-3">
                      <div className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">Key Learning Points:</div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                        {project.learningPoints.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-[11px] text-gray-300">
                            <div className={`mt-1 w-1 h-1 rounded-full shrink-0 bg-current ${project.color.split(' ')[2]}`} />
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-400 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors"
                    >
                      <LucideGithub className="w-4 h-4" />
                      Repository
                    </a>
                    <button className="flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase text-gray-500 hover:text-white transition-colors">
                      Details <LucideExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ABOUT SECTION */}
          <section
            ref={aboutRef}
            data-section="ABOUT"
            className="min-h-screen px-8 py-20 lg:px-16 border-t border-white/5 space-y-12"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-widest uppercase text-purple-400 font-bold">
                  <LucideUser className="w-3 h-3" /> Developer Identity
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Hi, I&apos;m Ashan Dhanushka! 👋</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Card Column */}
              <div className="space-y-6">
                <div className="relative group overflow-hidden bg-[#1a1a20]/40 border border-white/10 rounded-[40px] p-2 aspect-[3/4] shadow-2xl transition-all duration-700 hover:border-purple-500/40">
                  <Image
                    src={profileImg}
                    alt="Ashan Dhanushka"
                    width={320}
                    height={420}
                    className="w-full h-full object-cover rounded-[32px] grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-60 rounded-[32px] m-2 pointer-events-none" />
                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="text-xs font-bold tracking-[0.2em] text-purple-400 uppercase mb-1">University Student</div>
                    <div className="text-lg font-bold tracking-tight text-white/90">Based in Sri Lanka 🇱🇰</div>
                  </div>
                </div>

                {/* GitHub Stats */}
                <div className="bg-[#1a1a20]/40 border border-white/5 rounded-[32px] p-6 space-y-6">
                  <h3 className="text-sm font-bold flex items-center gap-2 tracking-[0.2em] uppercase">
                    <LucideLayers className="w-4 h-4 text-purple-400" /> 📈 Global Impact
                  </h3>
                  <div className="w-full bg-black/40 rounded-2xl border border-white/5 p-2 overflow-hidden">
                    <Image
                      src={`https://github-readme-stats.vercel.app/api?username=ashandhanushka&show_icons=true&theme=radical&hide_border=true&bg_color=00000000`}
                      alt="GitHub stats"
                      width={350}
                      height={200}
                      className="w-full h-auto rounded-xl grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Bio & Tech Stack */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-[#1a1a20]/40 border border-white/5 rounded-[32px] p-8 space-y-8 relative overflow-hidden group">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2 tracking-tight uppercase">
                      <LucideGlobe className="w-5 h-5 text-blue-400" /> 🚀 About Me
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg font-light">
                      I&apos;m a dedicated University Student exploring the intersections of finance and technology. My journey is fueled by a passion for backend logic, distributed systems, and modern software architecture.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: <LucideBookOpen className="w-4 h-4 text-purple-400" />, label: "Focus Areas", text: "Springboot, Python, Java, and C#" },
                      { icon: <LucideCpu className="w-4 h-4 text-cyan-400" />, label: "Backend Core", text: "Spring Boot, Laravel, .NET" },
                      { icon: <LucideTarget className="w-4 h-4 text-emerald-400" />, label: "2026 Milestone", text: "Full-scale Open Source Apps" },
                      { icon: <LucideZap className="w-4 h-4 text-yellow-400" />, label: "Workflow", text: "Mastering Clean Code & Scalability" }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 bg-white/5 p-5 rounded-2xl border border-white/5 transition-all hover:bg-white/10 hover:border-white/10 group/item">
                        <div className="mt-1 transition-transform group-hover/item:scale-110">{item.icon}</div>
                        <div>
                          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.label}</div>
                          <div className="text-xs text-gray-300 font-medium leading-tight mt-1">{item.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Fun Quote Box */}
                  <div className="relative p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/5 rounded-2xl italic text-sm text-gray-400 leading-relaxed">
                    &quot;I speak fluent Python, but my Java is still learning to brew. I believe code is the ultimate form of documentation, though I&rsquo;m getting much better at commenting!&quot;
                  </div>
                </div>

                {/* Languages & Tools Grid */}
                <div className="bg-[#1a1a20]/40 border border-white/5 rounded-[32px] p-8 space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-2 tracking-tight uppercase">
                    <LucideCode2 className="w-5 h-5 text-emerald-400" /> 🛠 Tech Stack Matrix
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { name: "Python", color: "3670A0", logo: "python" },
                      { name: "Java", color: "ED8B00", logo: "openjdk" },
                      { name: "Spring Boot", color: "6DB33F", logo: "spring-boot" },
                      { name: "C#", color: "239120", logo: "c-sharp" },
                      { name: "PHP", color: "777BB4", logo: "php" },
                      { name: "Laravel", color: "FF2D20", logo: "laravel" },
                      { name: "React", color: "61DAFB", logo: "react" },
                      { name: "Git", color: "F05032", logo: "git" }
                    ].map((tech) => (
                      <Image
                        key={tech.name}
                        src={`https://img.shields.io/badge/${tech.name.replace('#', '%23')}-${tech.color}?style=for-the-badge&logo=${tech.logo}&logoColor=white`}
                        alt={tech.name}
                        width={120}
                        height={32}
                        className="h-8 rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all duration-300 transform hover:-translate-y-1"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT SECTION */}
          <section
            ref={contactRef}
            data-section="CONTACT"
            className="min-h-screen px-8 py-20 lg:px-16 border-t border-white/5 space-y-12"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-widest uppercase text-cyan-400 font-bold">
                <LucideTerminal className="w-3 h-3" /> Communication Terminal
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">GET IN TOUCH</h2>
              <p className="text-gray-500 text-sm tracking-widest uppercase max-w-lg leading-relaxed font-medium">
                Available for collaborations, academic inquiries, and professional networking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative bg-[#1a1a20]/40 border border-cyan-500/20 rounded-[32px] p-8 space-y-6 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/5">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 text-cyan-400">
                    <LucideMail className="w-5 h-5" />
                  </div>
                  <button onClick={() => handleCopy('ashandhanushka660@gmail.com')} className="p-2 text-gray-500 hover:text-white transition-colors">
                    {copied ? <LucideCheck className="w-4 h-4 text-emerald-400" /> : <LucideCopy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest">Personal Email</div>
                  <div className="text-sm font-medium tracking-tight text-white/90">ashandhanushka660@gmail.com</div>
                </div>
                <a href="mailto:ashandhanushka660@gmail.com" className="flex items-center gap-2 text-[10px] font-bold text-gray-500 group-hover:text-white tracking-widest uppercase transition-all">
                  Open Mail Client&nbsp;<LucideExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="group relative bg-[#1a1a20]/40 border border-purple-500/20 rounded-[32px] p-8 space-y-6 transition-all hover:border-purple-500/50 hover:bg-purple-500/5">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20 text-purple-400">
                    <LucideGraduationCap className="w-5 h-5" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-bold text-purple-500 uppercase tracking-widest">Academic ID</div>
                  <div className="text-sm font-medium tracking-tight text-white/90">wcm24b126@uovt</div>
                </div>
                <div className="text-[10px] font-bold text-gray-600 tracking-widest uppercase">University of Vocational Technology</div>
              </div>

              <div className="group relative bg-[#1a1a20]/40 border border-emerald-500/20 rounded-[32px] p-8 space-y-6 transition-all hover:border-emerald-500/50 hover:bg-emerald-500/5">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-emerald-400">
                    <LucidePhone className="w-5 h-5" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Phone Number</div>
                  <div className="text-sm font-medium tracking-tight text-white/90">0710118916</div>
                </div>
                <div className="text-[10px] font-bold text-gray-600 tracking-widest uppercase">Voice & SMS Availability</div>
              </div>
            </div>

            {/* Enhanced Footer CTA */}
            <div className="bg-[#1a1a20]/20 border border-white/5 rounded-[40px] p-12 text-center space-y-10 mb-20 relative overflow-hidden group/cta">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-1000" />
              <div className="space-y-2 relative z-10">
                <h3 className="text-2xl font-bold tracking-tight uppercase">Let's build something extraordinary.</h3>
                <p className="text-gray-500 text-sm tracking-widest">OPEN FOR NEW OPPORTUNITIES AND OPEN SOURCE CONTRIBUTIONS.</p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8 relative z-10">
                <a href="https://github.com/ashandhanushka" target="_blank" className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-all hover:scale-110 tracking-widest uppercase">
                  <LucideGithub className="w-5 h-5" /> GitHub
                </a>
                <div className="w-[1px] h-4 bg-white/10 hidden md:block" />
                <a href="https://linkedin.com" target="_blank" className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-all hover:scale-110 tracking-widest uppercase">
                  <LucideLinkedin className="w-5 h-5" /> LinkedIn
                </a>
                <div className="w-[1px] h-4 bg-white/10 hidden md:block" />
                <a href="https://instagram.com" target="_blank" className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-all hover:scale-110 tracking-widest uppercase">
                  <LucideInstagram className="w-5 h-5" /> Social
                </a>
              </div>
            </div>
          </section>

        </main>

        <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
      </div>

      <footer className="mt-8 text-[10px] text-gray-600 tracking-[0.3em] uppercase flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <span>&copy; 2024 ASHAN DHANUSHKA</span>
          <span className="w-1 h-1 rounded-full bg-gray-700" />
          <span>SRI LANKA</span>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.05); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.1); }
      `}} />
    </div>
  );
};

export default App;
