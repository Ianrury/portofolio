import React, { useState, useEffect } from "react";
import { ChevronDown, Github, ExternalLink, Mail, Phone, MapPin, Code, Palette, Smartphone, Server, Database, Globe } from "lucide-react";
import profilePic from "../assets/person.jpeg";
import stockPic from "../assets/stok.png";

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
  ];

  const projects = [
    {
      id: 1,
      title: "Manajeman Stok Obat",
      description: "Sistem manajemen stok obat untuk apotek yang berfungsi untuk memantau pemasukan dan pengeluaran obat",
      image: stockPic,
      tech: ["Laravel", "Tailwind", "MySQL"],
      github: "https://github.com/Ianrury/Sistock",
      demo: "#",
      category: "web",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tech: ["Vue.js", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      demo: "#",
      category: "web",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      tech: ["React Native", "Node.js", "PostgreSQL"],
      github: "#",
      demo: "#",
      category: "mobile",
    },
    {
      id: 4,
      title: "AI Dashboard",
      description: "Analytics dashboard with machine learning insights and React frontend",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tech: ["Python", "Django", "TensorFlow", "D3.js"],
      github: "#",
      demo: "#",
      category: "ai",
    },
    {
      id: 5,
      title: "Social Media Platform",
      description: "Modern social networking platform with real-time chat and React frontend",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=400&h=250&fit=crop",
      tech: ["React", "Express", "Socket.io", "Redis"],
      github: "#",
      demo: "#",
      category: "web",
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "Health and fitness tracking app with workout plans and React frontend",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      tech: ["Flutter", "Firebase", "Node.js"],
      github: "#",
      demo: "#",
      category: "mobile",
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

            {/* Mobile Menu Button - More Interactive */}
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

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Saya adalah seorang Full Stack Developer yang antusias terhadap teknologi modern dan pengalaman pengguna (user experience). Meskipun pengalaman saya kurang dari satu tahun, saya telah mengembangkan berbagai aplikasi web
                  dengan beragam alur bisnis.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">Saya senang bekerja dengan teknologi seperti Laravel, React, dan Node.js untuk menciptakan solusi digital yang inovatif dan user-friendly.</p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl font-bold text-purple-400">50+</div>
                    <div className="text-gray-300">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl font-bold text-pink-400">3+</div>
                    <div className="text-gray-300">Years Experience</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-1 animate-spin-slow">
                  <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                    <img src={profilePic} alt="Foto Profil" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills & Technologies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2" style={{ animationDelay: `${index * 100}ms` }}>
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
      </section>

      {/* Projects Section - Very Interactive */}
      <section id="projects" className="min-h-screen py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Featured Projects</h2>

          {/* Project Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["all", "web", "mobile", "ai"].map((filter) => (
              <button
                key={filter}
                onClick={() => filterProjects(filter)}
                className={`px-6 py-3 rounded-full capitalize transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg" : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {filter === "all" ? "All Projects" : filter}
              </button>
            ))}
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

                  {/* Project Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <a href={project.github} className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.demo} className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 align-text-bottom">
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
      <section id="contact" className="min-h-screen flex items-center py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Get In Touch</h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <p className="text-lg text-gray-300 leading-relaxed">Saya selalu terbuka untuk diskusi tentang proyek baru, peluang kreatif, atau sekadar berbagi ide. Mari terhubung!</p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <span>developer@email.com</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <span>+62 123 456 7890</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <span>Yogyakarta, Indonesia</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-purple-400 transition-all duration-300 placeholder-gray-400" />
              </div>
              <div>
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-purple-400 transition-all duration-300 placeholder-gray-400" />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-purple-400 transition-all duration-300 placeholder-gray-400 resize-none"
                ></textarea>
              </div>
              <button
                onClick={() => alert("Message sent! (Demo purposes)")}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Portfolio. Made with ❤️ using React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
