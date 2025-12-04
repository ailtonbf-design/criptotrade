import React from 'react';
import { Target, Compass, HeartHandshake } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Sobre a CripTrade</h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Fundada em 2023 no Rio de Janeiro, nascemos com o propósito de tornar o mercado de criptomoedas 
            <span className="font-semibold text-brand-700"> acessível, seguro e simples</span>. 
            Atuamos com compra e venda de ativos digitais, oferecendo atendimento personalizado e orientado 
            tanto para iniciantes quanto para investidores experientes.
          </p>
          <div className="mt-8 w-24 h-1 bg-brand-200 mx-auto rounded-full"></div>
        </div>

        {/* 3 Pillars */}
        <div className="grid md:grid-cols-3 gap-12">
          
          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-stone-900 rounded-xl flex items-center justify-center text-white mb-6">
              <Compass size={24} />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Nossa Missão</h3>
            <p className="text-stone-600 leading-relaxed">
              Promover o acesso ao mercado de criptomoedas com segurança, educação e transparência, ajudando nossos clientes a realizar operações com confiança e entendimento do que estão fazendo.
            </p>
          </div>

          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-brand-700 rounded-xl flex items-center justify-center text-white mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Nossa Visão</h3>
            <p className="text-stone-600 leading-relaxed">
              Ser reconhecida como uma referência em negociação segura de ativos digitais, combinando tecnologia, informação e atendimento humano especializado.
            </p>
          </div>

          <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center text-white mb-6">
              <HeartHandshake size={24} />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Compromisso</h3>
            <p className="text-stone-600 leading-relaxed">
              Entregar transparência, agilidade e informações claras, sempre seguindo as normas da Receita Federal e as boas práticas do mercado global.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
