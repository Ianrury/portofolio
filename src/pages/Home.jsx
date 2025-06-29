import React, { useState, useEffect } from "react";
import { ChevronDown, Github, ExternalLink, Mail, Phone, MapPin, Download, Facebook, Instagram, MessageCircle, Code, Server, Monitor } from "lucide-react";
import profilePic from "../assets/person.jpeg";

const Home = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    { name: "Laravel", icon: "🚀", color: "from-red-500 to-orange-500", level: 95 },
    { name: "React JS", icon: "⚛️", color: "from-blue-400 to-blue-600", level: 90 },
    { name: "TypeScript", icon: "📘", color: "from-blue-600 to-blue-800", level: 85 },
    { name: "Next.js", icon: "▲", color: "from-gray-700 to-black", level: 88 },
    { name: "Express.js", icon: "🟢", color: "from-green-500 to-green-700", level: 85 },
    { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-indigo-600", level: 80 },
    { name: "MySQL", icon: "🗄️", color: "from-blue-500 to-blue-700", level: 90 },
    { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-yellow-600", level: 92 },
    { name: "CodeIgniter", icon: "🔥", color: "from-orange-500 to-red-500", level: 85 },
    { name: "Bootstrap", icon: "🎨", color: "from-purple-500 to-purple-700", level: 88 },
    { name: "Tailwind", icon: "🌊", color: "from-cyan-400 to-blue-500", level: 95 },
    { name: "GIT", icon: "📦", color: "from-gray-600 to-gray-800", level: 90 },
    { name: "PHP", icon: "🐘", color: "from-indigo-500 to-purple-500", level: 88 },
    { name: "Node.js", icon: "🟢", color: "from-green-400 to-green-600", level: 87 },
    { name: "Prisma", icon: "🔺", color: "from-gray-500 to-gray-700", level: 82 },
    { name: "Docker", icon: "🐳", color: "from-blue-500 to-cyan-500", level: 75 },
  ];

  const projects = [
    // Full Stack Projects
    {
      id: 1,
      title: "Sistem Informasi Ponpes",
      description: "Sistem manajemen ponpes yang memungkinkan admin untuk mengelola data siswa, guru, artikel, dan informasi penerimaan santri dengan dashboard yang komprehensif.",
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=500&h=300&fit=crop",
      tech: ["Laravel", "Tailwind", "MySQL", "Blade"],
      github: "#",
      demo: "https://ppnahdlatussubban.com/",
      category: "fullstack",
    },
    {
      id: 2,
      title: "Sistem Klinik Bidan",
      description: "Sistem manajemen klinik bidan yang lengkap dengan fitur manajemen pasien, jadwal konsultasi, riwayat perawatan, inventory obat, dan sistem pembayaran.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=300&fit=crop",
      tech: ["Laravel", "Tailwind", "MySQL", "Chart.js"],
      github: "https://github.com/Ianrury/skripsi-klinik",
      demo: "#",
      category: "fullstack",
    },
    {
      id: 3,
      title: "Articel Platform",
      description: "Platform artikel multi-author dengan sistem komentar real-time, pencarian advanced, kategori artikel, dan dashboard penulis untuk mengelola konten.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      tech: ["React.js", "Node.js", "Tailwind", "MySQL"],
      github: "https://github.com/Ianrury/articel",
      demo: "#",
      category: "fullstack",
    },
    {
      id: 4,
      title: "E-commerce Furniture",
      description: "Platform e-commerce furniture dengan fitur katalog produk, keranjang belanja, sistem pembayaran, manajemen order, dan admin dashboard untuk seller.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop",
      tech: ["PHP", "Bootstrap", "MySQL", "PayPal API"],
      github: "https://github.com/Ianrury/furnic",
      demo: "",
      category: "fullstack",
    },

    // Backend Projects
    {
      id: 5,
      title: "Online Bookstore API",
      description: "RESTful API untuk toko buku online dengan authentication JWT, manajemen produk, sistem order, payment gateway integration, dan dokumentasi lengkap.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      tech: ["Express.js", "Node.js", "PostgreSQL", "Prisma ORM"],
      github: "https://github.com/Ianrury/submission-spbe--Ian-Roery-",
      demo: "#",
      category: "backend",
    },
    {
      id: 6,
      title: "Healthcare API System",
      description: "Backend system untuk aplikasi kesehatan dengan fitur appointment scheduling, patient records, doctor management, dan real-time notifications.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      tech: ["Express.js", "MongoDB", "Socket.io", "JWT"],
      github: "#",
      demo: "#",
      category: "backend",
    },
    {
      id: 7,
      title: "Inventory Management API",
      description: "API untuk sistem manajemen inventori dengan fitur real-time stock tracking, automated reorder alerts, supplier management, dan reporting system.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=300&fit=crop",
      tech: ["Laravel", "MySQL", "Redis", "Queue Jobs"],
      github: "#",
      demo: "#",
      category: "backend",
    },

    // Frontend Projects
    {
      id: 8,
      title: "Library Management Dashboard",
      description: "Frontend dashboard untuk sistem perpustakaan dengan fitur pencarian buku advanced, sistem peminjaman, member management, dan analytics dashboard.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop",
      tech: ["React", "Tailwind", "Zod", "Axios"],
      github: "https://librari-app.vercel.app/",
      demo: "https://librari-app.vercel.app/",
      category: "frontend",
    },
    {
      id: 9,
      title: "Project Management UI",
      description: "Interface untuk manajemen proyek dengan drag-and-drop task board, timeline view, team collaboration tools, dan progress tracking dashboard.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tech: ["React", "Tailwind", "Framer Motion", "Chart.js"],
      github: "https://github.com/Ianrury/guru_inovatif",
      demo: "#",
      category: "frontend",
    },
    {
      id: 10,
      title: "Medical Stock Monitor",
      description: "Dashboard untuk monitoring stok obat dengan real-time alerts, expiry date tracking, automated reporting, dan supplier management interface.",
      image: "https://images.unsplash.com/photo-1585435557343-3b092031d8ab?w=500&h=300&fit=crop",
      tech: ["React", "Tailwind", "Chart.js", "WebSocket"],
      github: "https://github.com/Ianrury/Sistock",
      demo: "#",
      category: "frontend",
    },
  ];

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("all");

  const filterProjects = (category) => {
    setActiveFilter(category);
    if (category === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((project) => project.category === category));
    }
  };

  const scrollToSection = (sectionId) => {
    setCurrentSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleDownloadCV = () => {
    // Simulate CV download
    const link = document.createElement("a");
    link.href = "#"; // Replace with actual CV URL
    link.download = "Ian_Roery_CV.pdf";
    link.click();
    alert("CV download started! (Demo purposes)");
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com", color: "from-blue-600 to-blue-800" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com", color: "from-pink-500 to-purple-600" },
    { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/6281225621214", color: "from-green-500 to-green-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Floating Cursor Effect */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: "scale(0.8)",
        }}
      ></div>

      {/* Header */}
      <header className="fixed top-0 w-full z-40 bg-white/10 backdrop-blur-md border-b border-white/20">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">Portfolio</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-105 ${currentSection === item ? "bg-white/20 text-purple-300" : ""}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:rotate-180"
              >
                <div className="flex flex-col space-y-1">
                  <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
                  <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></div>
                  <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-500 overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="py-4 space-y-2">
              {["home", "about", "skills", "projects", "contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-3 capitalize rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
        <div className="text-center space-y-8 px-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-pulse">Hello, I'm Developer</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">Full Stack Developer with a passion for creating innovative and user-friendly web applications.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              View My Work
            </button>
            <button onClick={() => scrollToSection("contact")} className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:scale-105 transform transition-all duration-300">
              Contact Me
            </button>
          </div>

          <div className="animate-bounce mt-12">
            <ChevronDown className="mx-auto w-8 h-8 text-purple-400" />
          </div>
        </div>
      </section>

      {/* About Section - Enhanced */}
      <section id="about" className="min-h-screen flex items-center py-11 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Saya adalah seorang <span className="text-purple-400 font-semibold">Full Stack Developer</span> yang berpengalaman dalam mengembangkan aplikasi web modern dengan teknologi terdepan. Dengan pengalaman lebih dari 12 bulan,
                    saya telah berhasil menyelesaikan berbagai proyek dengan tingkat kompleksitas yang beragam.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Keahlian saya mencakup pengembangan <span className="text-pink-400 font-semibold">Frontend</span> dengan React.js,
                    <span className="text-blue-400 font-semibold"> Backend</span> dengan Laravel & Node.js, serta manajemen database MySQL & PostgreSQL. Saya senang menciptakan solusi digital yang tidak hanya fungsional tetapi juga
                    memberikan pengalaman pengguna yang luar biasa.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl font-bold text-purple-400">10+</div>
                    <div className="text-gray-300">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl font-bold text-pink-400">12+</div>
                    <div className="text-gray-300">Months Experience</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl font-bold text-blue-400">16+</div>
                    <div className="text-gray-300">Technologies</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl font-bold text-green-400">100%</div>
                    <div className="text-gray-300">Client Satisfaction</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    onClick={handleDownloadCV}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30"
                  >
                    <Download className="w-5 h-5" />
                    Download CV
                  </button>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 bg-gradient-to-r ${social.color} rounded-xl hover:scale-110 transform transition-all duration-300 hover:shadow-xl group`}
                          title={social.name}
                        >
                          <IconComponent className="w-5 h-5 group-hover:animate-pulse" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-1 animate-spin-slow">
                  <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                    <img src={profilePic} alt="Foto Profil" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-bounce text-2xl">⚛️</div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center animate-bounce text-2xl" style={{ animationDelay: "1s" }}>
                  🚀
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Horizontal Scroll */}
      <section id="skills" className="py-12 md:py-11 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills & Technologies</h2>

          <div className="relative">
            {/* Desktop Auto-Scroll Version */}
            <div className="hidden md:block relative overflow-hidden">
              <div className="flex animate-scroll-left space-x-6 hover:pause-animation">
                {[...skills, ...skills].map((skill, index) => (
                  <div key={`${skill.name}-${index}`} className="flex-shrink-0 group p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 min-w-[200px]">
                    <div className="text-center space-y-4">
                      <div className="text-4xl mb-2">{skill.icon}</div>
                      <h3 className="text-xl font-semibold">{skill.name}</h3>
                      {/* <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 group-hover:animate-pulse`} style={{ width: `${skill.level}%` }}></div>
                      </div>
                      <div className="text-sm text-gray-400">{skill.level}%</div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile/Tablet Manual Scroll Version */}
            <div className="md:hidden">
              <div className="overflow-x-auto scrollbar-hide pb-4">
                <div className="flex space-x-4 px-2" style={{ width: "max-content" }}>
                  {skills.map((skill, index) => (
                    <div key={`mobile-${skill.name}-${index}`} className="flex-shrink-0 group p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 min-w-[160px]">
                      <div className="text-center space-y-3">
                        <div className="text-3xl mb-2">{skill.icon}</div>
                        <h3 className="text-lg font-semibold">{skill.name}</h3>
                        {/* <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 group-hover:animate-pulse`} style={{ width: `${skill.level}%` }}></div>
                        </div> */}
                        {/* <div className="text-xs text-gray-400">{skill.level}%</div> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scroll Indicator for Mobile */}
              <div className="flex justify-center mt-4">
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <span>Swipe to see more</span>
                  <svg className="w-4 h-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Enhanced with Categories */}
      <section id="projects" className="min-h-screen py-11 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Featured Projects</h2>

          {/* Project Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { key: "all", label: "All Projects", icon: Code },
              { key: "fullstack", label: "Full Stack", icon: Monitor },
              { key: "backend", label: "Backend", icon: Server },
              { key: "frontend", label: "Frontend", icon: Monitor },
            ].map((filter) => {
              const IconComponent = filter.icon;
              return (
                <button
                  key={filter.key}
                  onClick={() => filterProjects(filter.key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === filter.key ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg" : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {filter.label}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 text-xs rounded-full font-semibold ${
                        project.category === "fullstack" ? "bg-purple-500/80 text-white" : project.category === "backend" ? "bg-green-500/80 text-white" : "bg-blue-500/80 text-white"
                      }`}
                    >
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>

                  {/* Project Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {project.github && project.github !== "#" && (
                      <a href={project.github} className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    )}

                    {project.demo && project.demo !== "#" && (
                      <a href={project.demo} className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-12 md:py-11 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Get In Touch</h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-6 md:space-y-8">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Saya selalu terbuka untuk diskusi tentang proyek baru, peluang kreatif, atau sekadar berbagi ide. Mari terhubung dan ciptakan sesuatu yang luar biasa bersama!
              </p>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-purple-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="font-semibold text-sm md:text-base">Email</div>
                    <div className="text-gray-400 text-sm md:text-base break-all">ianroeri@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-purple-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="font-semibold text-sm md:text-base">Phone</div>
                    <div className="text-gray-400 text-sm md:text-base">+62 812 2562 1214</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-purple-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="font-semibold text-sm md:text-base">Location</div>
                    <div className="text-gray-400 text-sm md:text-base">Yogyakarta, Indonesia</div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 md:pt-6">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-400">Connect with me</h3>
                <div className="flex flex-wrap gap-2 md:gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-gradient-to-r ${social.color} rounded-xl hover:scale-110 transform transition-all duration-300 hover:shadow-xl group text-sm md:text-base`}
                      >
                        <IconComponent className="w-4 h-4 md:w-5 md:h-5 group-hover:animate-pulse" />
                        <span className="font-medium">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="space-y-4 md:space-y-6 mt-8 lg:mt-0">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 py-3 md:px-4 md:py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300 placeholder-gray-400 text-sm md:text-base"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-3 py-3 md:px-4 md:py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300 placeholder-gray-400 text-sm md:text-base"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-3 py-3 md:px-4 md:py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300 placeholder-gray-400 text-sm md:text-base"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-3 py-3 md:px-4 md:py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300 placeholder-gray-400 resize-none text-sm md:text-base"
                ></textarea>
              </div>
              <button
                onClick={() => alert("Message sent! (Demo purposes)")}
                className="w-full px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6">
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gradient-to-r ${social.color} rounded-full hover:scale-110 transform transition-all duration-300 hover:shadow-xl`}
                    title={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-gray-400">© 2024 Ian Roery Portfolio. Made with ❤️ using React & Tailwind CSS</p>
            <p className="text-sm text-gray-500">Crafted with passion in Yogyakarta, Indonesia</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
