import React, { useState } from 'react';
import { Menu, X, ShieldCheck, Phone, ChevronRight } from 'lucide-react';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ValuesGrid from './components/ValuesGrid';
import EducationSection from './components/EducationSection';
import SafetySection from './components/SafetySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Valores', href: '#valores' },
    { label: 'Educação', href: '#educacao' },
    { label: 'Segurança', href: '#seguranca' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-700">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo area */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-700 rounded-lg flex items-center justify-center text-white">
                <ShieldCheck size={24} />
              </div>
              <div>
                <span className="text-xl font-semibold tracking-tight text-stone-900 block leading-none">CripTrade</span>
                <span className="text-xs text-stone-500 uppercase tracking-widest">Segurança & Educação</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-stone-600 hover:text-brand-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-stone-900 hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl"
              >
                Fale Conosco
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-stone-600 hover:text-stone-900 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-100 animate-fade-in-down">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-stone-700 hover:text-brand-700 hover:bg-stone-50"
                >
                  {link.label}
                </a>
              ))}
               <a
                  href="#contato"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-brand-700 hover:bg-stone-50"
                >
                  Entrar em Contato
                </a>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-20">
        <Hero />
        <AboutSection />
        <ValuesGrid />
        <EducationSection />
        <SafetySection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
