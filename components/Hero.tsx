import React from 'react';
import { Shield, BookOpen, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-stone-50 py-16 sm:py-24 lg:py-32">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-100 rounded-full blur-3xl mix-blend-multiply filter"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-50 rounded-full blur-3xl mix-blend-multiply filter"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-800 text-xs font-semibold uppercase tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              Transparência e Educação
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight leading-[1.15] mb-6">
              Investimento em Cripto com <span className="text-brand-700">Segurança</span> e <span className="text-brand-700">Orientação Humana</span>.
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 mb-8 leading-relaxed max-w-lg">
              Facilitamos suas negociações com clareza, ética e foco total em educação. Sem promessas vazias, apenas tecnologia segura e suporte real.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contato" 
                className="px-8 py-4 bg-stone-900 text-white text-base font-medium rounded-lg hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Fale com um Especialista
              </a>
              <a 
                href="#sobre" 
                className="px-8 py-4 bg-white text-stone-700 border border-stone-200 text-base font-medium rounded-lg hover:bg-stone-50 transition-all flex items-center gap-2"
              >
                <BookOpen size={18} />
                Nossa História
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-stone-500 text-sm font-medium">
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

          {/* Visual/Image Content */}
          <div className="relative hidden lg:block h-full min-h-[500px]">
             {/* Floating Coin 1 - Top Right */}
             <img 
                src="https://res.cloudinary.com/dapsovbs5/image/upload/v1764962658/2_pbl4jr.png" 
                className="absolute -top-12 -right-6 w-32 h-32 z-20 animate-float-slow drop-shadow-2xl object-contain"
                alt="Crypto Asset Ethereum"
             />

             {/* Floating Coin 2 - Middle/Bottom Left */}
             <img 
                src="https://res.cloudinary.com/dapsovbs5/image/upload/v1764962658/1_skkugd.png" 
                className="absolute bottom-24 -left-12 w-28 h-28 z-20 animate-float-medium drop-shadow-2xl object-contain"
                alt="Crypto Asset Bitcoin"
             />

             {/* Main Image Container */}
             <div className="absolute inset-0 bg-stone-200 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-out z-10">
                <img 
                    src="https://res.cloudinary.com/dapsovbs5/image/upload/v1764962829/Design_sem_nome_f3k9ui.png" 
                    alt="Consultoria Humanizada" 
                    className="w-full h-full object-cover"
                />
             </div>
             
             {/* Floating Info Card */}
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-stone-100 max-w-xs animate-pulse-slow z-30">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-50 rounded-lg text-green-700">
                        <Shield size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-stone-900">100% Auditável</h3>
                        <p className="text-sm text-stone-500 mt-1">Todas as transações registradas na Blockchain.</p>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;