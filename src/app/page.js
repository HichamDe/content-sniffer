'use client'
import { useState, useEffect } from 'react';
import { Shield, Eye, Zap, Download, Star, ChevronRight, Play, Globe, Lock, ArrowDown } from 'lucide-react';
import Image from 'next/image';
import logo from "@/assets/logo.png"
import Link from 'next/link';
export default function ContentSnifferHomepage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Smart Content Filtering",
      description: "Advanced AI-powered detection of inappropriate content with customizable sensitivity levels"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Real-time Protection",
      description: "Instant content scanning and blocking across all websites and social media platforms"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Zero impact on browsing speed with optimized algorithms and minimal resource usage"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Privacy First",
      description: "All filtering happens locally - your browsing data never leaves your device"
    }
  ];

  const stats = [
    { number: "500K+", label: "Active Users" },
    { number: "99.9%", label: "Detection Rate" },
    { number: "0ms", label: "Added Latency" },
    { number: "5★", label: "User Rating" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div
          className="absolute w-96 h-96 bg-green-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4 backdrop-blur-md bg-black/20 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="cursor-pointer flex items-center space-x-3">
            <Image src={logo} width={148} height={52} alt='Content Sniffer Logo'/>
          </Link>
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <a href="#features" className="hover:text-green-400 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-green-400 transition-colors">How it Works</a>
            <Link download href='/extension.crx' className="cursor-pointer bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
              Drag Extension
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/50 mb-8">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm">Trusted by 500,000+ users worldwide</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-green-400 bg-clip-text text-transparent leading-tight">
              Browse Safely,<br />
              <span className="text-green-400">Filter Smart</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered content filtering that automatically detects and hides inappropriate content across the web, giving you complete control over your browsing experience.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link download href='/extension.crx' className="cursor-pointer group bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Drag to Chrome - Free</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link href="#features" className="group border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <ArrowDown className="w-5 h-5" />
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Cutting-edge technology meets user-friendly design to deliver the ultimate content filtering experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-green-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-400">Simple setup, powerful protection</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">1. Install</h3>
              <p className="text-gray-400">Add Content Sniffer to Chrome with one click - no signup required</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">2. Configure</h3>
              <p className="text-gray-400">Set your preferences and customize filtering levels to match your needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">3. Browse Safely</h3>
              <p className="text-gray-400">Enjoy the web with automatic content filtering running in the background</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Take Control?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Join hundreds of thousands of users who browse the web safely with Content Sniffer.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-black font-bold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 text-lg">
              Install Now - It&apos;s Free
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Link href="/" className="cursor-pointer flex items-center space-x-3">
              <Image src={logo} width={148} height={52} alt='Content Sniffer Logo'/>
            </Link>
            <div className="text-center text-gray-500">
              <p>&copy; 2025 Content Sniffer. All rights reserved.</p>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}