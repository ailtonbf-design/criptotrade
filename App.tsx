import React, { useState, useEffect } from 'react';
import { Menu, X, Bitcoin } from 'lucide-react';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ValuesGrid from './components/ValuesGrid';
import EducationSection from './components/EducationSection';
import SafetySection from './components/SafetySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [btcPrice, setBtcPrice] = useState<number | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Fetch Bitcoin Price
  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl');
        const data = await response.json();
        if (data.bitcoin?.brl) {
          setBtcPrice(data.bitcoin.brl);
        }
      } catch (error) {
        console.error("Erro ao buscar preço do Bitcoin:", error);
      }
    };

    fetchPrice();
    // Atualiza a cada 60 segundos para evitar rate-limit da API pública
    const interval = setInterval(fetchPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

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
            <div className="flex-shrink-0 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <img 
                  src="https://res.cloudinary.com/dapsovbs5/image/upload/v1765222922/Logo_maygtz.png" 
                  alt="CripTrade Logo" 
                  className="w-10 h-10 object-contain"
                />
                <div className="hidden xs:block">
                  <span className="text-xl font-semibold tracking-tight text-stone-900 block leading-none">CripTrade</span>
                  <span className="text-xs text-stone-500 uppercase tracking-widest">Segurança & Educação</span>
                </div>
              </div>

              {/* Bitcoin Ticker - Visible on Desktop and Mobile */}
              <div className="flex items-center gap-2 bg-stone-100 border border-stone-200 rounded-full px-3 py-1.5 shadow-sm">
                <div className="relative">
                  <Bitcoin size={16} className="text-orange-500" />
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-1 leading-none">
                  <span className="text-xs font-bold text-stone-500 uppercase">BTC</span>
                  <span className="text-sm font-mono font-semibold text-stone-800">
                    {btcPrice ? formatCurrency(btcPrice) : '...'}
                  </span>
                </div>
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