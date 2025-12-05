import React from 'react';
import { Shield, BookOpen, Users } from 'lucide-react';

const Hero: React.FC = () => {
  
  // Componente visual extraído para permitir reutilização em posições diferentes (Mobile vs Desktop)
  const HeroVisuals = ({ className }: { className?: string }) => (
    <div className={`relative block ${className}`}>
        {/* Floating Coin - Bitcoin */}
        <img 
          src="https://res.cloudinary.com/dapsovbs5/image/upload/v1764966821/7_wmhepo.png" 
          className="absolute top-1/3 left-4 sm:left-12 lg:left-4 lg:top-[20%] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 z-20 animate-float-medium drop-shadow-xl object-contain"
          alt="Crypto Asset Bitcoin"
        />

        {/* Floating Coin - Ethereum */}
        <img 
          src="https://res.cloudinary.com/dapsovbs5/image/upload/v1764966821/5_mnznnz.png" 
          className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 lg:left-[42%] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 z-20 animate-float-slow drop-shadow-xl object-contain"
          alt="Crypto Asset Ethereum"
        />
        
        {/* Floating Coin - Tether */}
        <img 
          src="https://res.cloudinary.com/dapsovbs5/image/upload/v1764966821/6_hya9ig.png" 
          className="absolute top-1/3 right-4 sm:right-12 lg:right-20 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 z-20 animate-float-medium drop-shadow-xl object-contain"
          alt="Crypto Asset Tether"
        />

        {/* Main Image Container */}
        <div className="absolute inset-0 z-10 flex justify-center items-center">
          <img 
              src="https://res.cloudinary.com/dapsovbs5/image/upload/v1764969045/Design_sem_nome_1_gyvmio.png" 
              alt="Negociação segura de criptomoedas" 
              className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
        
        {/* Floating Info Card */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:-bottom-6 lg:left-0 lg:translate-x-0 w-[95%] sm:w-auto bg-white p-4 sm:p-6 rounded-xl shadow-xl border border-stone-100 max-w-xs animate-pulse-slow z-30">
          <div className="flex items-start gap-4">
              <div className="p-3 bg-green-50 rounded-lg text-green-700">
                  <Shield size={24} />
              </div>
              <div>
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base">100% Auditável</h3>
                  <p className="text-xs sm:text-sm text-stone-500 mt-1">Todas as transações registradas na Blockchain.</p>
              </div>
          </div>
        </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-stone-50 py-10 sm:py-24 lg:py-32">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-100 rounded-full blur-3xl mix-blend-multiply filter"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-50 rounded-full blur-3xl mix-blend-multiply filter"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            {/* Badge - Hidden on Mobile (Req 1) */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-800 text-xs font-semibold uppercase tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              Transparência e Educação
            </div>
            
            {/* Headline - Centered, 3 lines, specific coloring */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight leading-[1.15] mb-6 mt-2 sm:mt-0 text-center w-full">
              Investimento em<br />
              Cripto <span className="text-brand-700">com Segurança</span><br />
              e Orientação Humana
            </h1>
            
            <p className="text-lg sm:text-xl text-stone-600 mb-6 sm:mb-8 leading-relaxed max-w-lg text-center">
              Facilitamos suas negociações com clareza, ética e foco total em educação. Sem promessas vazias, apenas tecnologia segura e suporte real.
            </p>
            
            {/* MOBILE VISUALS (Req 3: Positioned between text and button) */}
            <HeroVisuals className="lg:hidden w-full h-[380px] sm:h-[480px] my-8" />
            
            <div className="flex flex-wrap gap-4 w-full justify-center">
              <a 
                href="#contato" 
                className="px-8 py-4 bg-stone-900 text-white text-base font-medium rounded-lg hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Fale com um Especialista
              </a>
              <a 
                href="#sobre" 
                className="hidden sm:flex px-8 py-4 bg-white text-stone-700 border border-stone-200 text-base font-medium rounded-lg hover:bg-stone-50 transition-all items-center gap-2"
              >
                <BookOpen size={18} />
                Nossa História
              </a>
            </div>

            <div className="mt-8 sm:mt-12 flex items-center gap-6 text-stone-500 text-sm font-medium justify-center">
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-brand-700" />
                <span>Normas da Receita Federal</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} className="text-brand-700" />
                <span>Atendimento Pessoal</span>
              </div>
            </div>
          </div>

          {/* DESKTOP VISUALS (Right Column) */}
          <HeroVisuals className="hidden lg:block h-full min-h-[500px]" />

        </div>
      </div>
    </section>
  );
};

export default Hero;