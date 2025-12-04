import React from 'react';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const SafetySection: React.FC = () => {
  return (
    <section id="seguranca" className="py-24 bg-red-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
              <AlertTriangle size={32} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">A Importância de Pesquisar e Evitar Golpes</h2>
            <p className="text-stone-600 max-w-2xl">
              O mercado de criptomoedas cresce todos os anos — e com ele, infelizmente, também aumentam os golpes. 
              Na CripTrade, nossa prioridade é que você saiba identificar o que é real e o que é fraude.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* The "NO" List */}
            <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-8">
              <h3 className="text-lg font-bold text-red-700 flex items-center gap-2 mb-6">
                <XCircle size={20} />
                Fique Alerta: O que NÃO existe
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-stone-700">Não existe lucro garantido ou fixo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-stone-700">Não existe "multiplicação automática" de dinheiro.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-stone-700">Cuidado com "Deixe seu dinheiro comigo que eu opero".</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span className="text-stone-700">Desconfie de promessas como "Ganhe 10% ao dia".</span>
                </li>
              </ul>
            </div>

            {/* The "YES" List */}
            <div className="bg-white rounded-2xl shadow-sm border border-brand-100 p-8">
              <h3 className="text-lg font-bold text-brand-700 flex items-center gap-2 mb-6">
                <CheckCircle size={20} />
                Como a CripTrade trabalha
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-brand-500 mt-1">✔️</span>
                  <span className="text-stone-700">Você compra e vende criptomoedas, sem promessa de retorno.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-500 mt-1">✔️</span>
                  <span className="text-stone-700">Todas as operações são explicadas passo a passo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-500 mt-1">✔️</span>
                  <span className="text-stone-700">Indicamos boas práticas de armazenamento (carteiras).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-500 mt-1">✔️</span>
                  <span className="text-stone-700">Seguimos as exigências da Receita Federal (IN 1888/2019).</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-12 text-center p-6 bg-stone-100 rounded-xl">
             <p className="text-stone-700 font-medium">Nosso objetivo é que você negocie com clareza, responsabilidade e consciência.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SafetySection;
