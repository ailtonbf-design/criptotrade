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

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5521982803811?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20CriptoTrade"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;