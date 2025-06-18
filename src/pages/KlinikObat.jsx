import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Github,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Code,
  Palette,
  Smartphone,
  Server,
  Database,
  Globe,
  ArrowLeft,
  Users,
  Package,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Shield,
  UserCheck,
  Settings,
  FileText,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Download,
  Upload,
  Calendar,
  Clock,
  CheckCircle,
  AlertTriangle,
  Star,
  Heart,
} from "lucide-react";

import dashbaordpicture from "../assets/klinikdashboard.png";

const KlinikObat = () => {
  const [currentSection, setCurrentSection] = useState("detail");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Manajemen Stok Obat",
      description: "Sistem otomatis untuk tracking stok obat real-time dengan notifikasi stok minimum",
      details: ["Auto tracking stok", "Notifikasi stok habis", "Barcode scanner", "Batch tracking"],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-Level User Access",
      description: "Sistem role-based dengan Super Admin, Admin, dan Staff dengan permission berbeda",
      details: ["Super Admin control", "Admin management", "Staff operations", "Custom permissions"],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Recording Pemasukan",
      description: "Pencatatan otomatis semua transaksi penjualan obat dan revenue tracking",
      details: ["Auto sales record", "Revenue analytics", "Daily reports", "Profit tracking"],
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Recording Pengeluaran",
      description: "Manajemen pengeluaran untuk pembelian obat dan operational costs",
      details: ["Purchase tracking", "Expense categories", "Budget monitoring", "Cost analysis"],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Laporan Komprehensif",
      description: "Dashboard analytics dengan berbagai laporan bisnis dan insights",
      details: ["Real-time dashboard", "Custom reports", "Export options", "Visual charts"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Sistem database terpusat untuk semua data obat, supplier, dan customer",
      details: ["Centralized data", "Backup system", "Data security", "Quick search"],
    },
  ];

  const userRoles = [
    {
      role: "Super Admin",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-pink-500",
      permissions: ["Full system access", "User management", "System settings", "Database backup", "All reports access"],
    },
    {
      role: "Admin",
      icon: <UserCheck className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      permissions: ["Inventory management", "Sales operations", "Staff management", "Reports viewing", "Customer management"],
    },
    {
      role: "Staff",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      permissions: ["Sales transactions", "Stock viewing", "Basic reports", "Customer service", "Daily operations"],
    },
  ];

  const screenshots = [
    {
      title: "Dashboard Utama",
      description: "Overview lengkap dengan metrics penting dan quick actions",
      image: dashbaordpicture,
    },
    {
      title: "Manajemen Stok",
      description: "Interface intuitif untuk tracking dan management inventory",
      image: " ",
    },
    {
      title: "Laporan Analytics",
      description: "Visualisasi data dengan charts dan graphs yang informatif",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
      title: "User Management",
      description: "Sistem manajemen user dengan role-based access control",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
    },
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
      <header className="relative z-20 py-6 px-6 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <button className="flex items-center space-x-2 text-purple-300 hover:text-white transition-colors duration-300 group">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                <span>Back to Home</span>
              </button>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Sistem Klinik</h1>
                <p className="text-sm text-gray-300">Manajeman Obat dan Pasien</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 py-12">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Featured Project</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Sistem Informasi Klinik</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Sistem manajemen apotek modern dengan teknologi terdepan untuk mengelola stok obat, transaksi, dan laporan bisnis secara efisien dan user-friendly.</p>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm">Production Ready</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-full">
                <Code className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Full Stack</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 text-purple-400" />
                <span className="text-sm">User Friendly</span>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Laravel", icon: "🚀", color: "from-red-500 to-orange-500" },
                { name: "Tailwind", icon: "🌊", color: "from-cyan-400 to-blue-500" },
                { name: "MySQL", icon: "🐬", color: "from-blue-400 to-indigo-500" },
                { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-yellow-600" },
              ].map((tech, index) => (
                <div key={index} className="group">
                  <div className={`bg-gradient-to-r ${tech.color} p-0.5 rounded-xl`}>
                    <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl text-center group-hover:bg-gray-800/80 transition-colors duration-300">
                      <div className="text-3xl mb-3">{tech.icon}</div>
                      <h3 className="font-semibold">{tech.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Fitur Utama</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group cursor-pointer" onClick={() => setActiveFeature(index)}>
                  <div className={`bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-0.5 rounded-2xl transition-all duration-300 ${activeFeature === index ? "scale-105 shadow-2xl" : "hover:scale-102"}`}>
                    <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl h-full">
                      <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors duration-300">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <div className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Roles Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">User Management System</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {userRoles.map((user, index) => (
                <div key={index} className="group">
                  <div className={`bg-gradient-to-r ${user.color} p-0.5 rounded-2xl`}>
                    <div className="bg-gray-900/90 backdrop-blur-sm p-8 rounded-2xl h-full">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className={`bg-gradient-to-r ${user.color} p-3 rounded-xl`}>{user.icon}</div>
                        <h3 className="text-2xl font-bold">{user.role}</h3>
                      </div>
                      <div className="space-y-3">
                        {user.permissions.map((permission, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{permission}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshots Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Screenshots</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {screenshots.map((screenshot, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-0.5 rounded-2xl">
                    <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img src={screenshot.image} alt={screenshot.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors duration-300">{screenshot.title}</h3>
                        <p className="text-gray-300">{screenshot.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Demo & Links Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8">Try It Out</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="https://github.com/Ianrury/skripsi-klinik">
                <button className="group bg-gray-800/50 border border-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-700/50 transition-all duration-300 flex items-center space-x-2">
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>View Code</span>
                </button>
              </a>
            </div>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: "Development Time", value: "3 Months", icon: <Clock className="w-6 h-6" /> },
              { label: "Features", value: "7", icon: <Settings className="w-6 h-6" /> },
              { label: "User Roles", value: "2 Types", icon: <Users className="w-6 h-6" /> },
              { label: "Database Tables", value: "12", icon: <Database className="w-6 h-6" /> },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-0.5 rounded-xl">
                  <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl">
                    <div className="text-purple-400 mb-3 flex justify-center">{stat.icon}</div>
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">© 2024 Klinik Obat System. Made with ❤️ using React & Modern Tech Stack</p>
        </div>
      </footer>
    </div>
  );
};

export default KlinikObat;
