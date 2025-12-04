import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Bitcoin, Wallet, Globe, Lock, Zap } from 'lucide-react';

const data = [
  { name: 'Jan', users: 1000 },
  { name: 'Fev', users: 2400 },
  { name: 'Mar', users: 3800 },
  { name: 'Abr', users: 5100 },
  { name: 'Mai', users: 6600 },
  { name: 'Jun', users: 8000 },
  { name: 'Jul', users: 11000 },
];

const EducationSection: React.FC = () => {
  return (
    <section id="educacao" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top: What is Crypto? */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-bold uppercase tracking-wide mb-4">
              Pedagogia Financeira
            </div>
            <h2 className="text-4xl font-bold text-stone-900 mb-6">O Que São Criptomoedas?</h2>
            <div className="prose prose-stone prose-lg text-stone-600">
              <p>
                As criptomoedas são ativos digitais que funcionam através da <strong>blockchain</strong>, 
                uma tecnologia segura que registra todas as transações de forma pública e imutável.
              </p>
              <p>
                Elas existem apenas no meio digital e não são emitidas por nenhum governo ou banco — 
                por isso são consideradas descentralizadas.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">B</div>
                <div>
                  <h4 className="font-bold text-stone-900">Bitcoin (BTC)</h4>
                  <p className="text-sm text-stone-500">A primeira e mais popular.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                <div className="w-10 h-10 bg-stone-700 rounded-full flex items-center justify-center text-white font-bold">Ξ</div>
                <div>
                  <h4 className="font-bold text-stone-900">Ethereum (ETH)</h4>
                  <p className="text-sm text-stone-500">Permite criação de aplicativos e contratos inteligentes.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">$</div>
                <div>
                  <h4 className="font-bold text-stone-900">USDT (Tether)</h4>
                  <p className="text-sm text-stone-500">Moeda estável (Stablecoin) pareada ao dólar americano.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100">
            <h3 className="text-xl font-bold text-stone-900 mb-6 flex items-center gap-2">
              <Globe className="text-brand-600" size={20}/>
              Crescimento da Adoção Global
            </h3>
            <p className="text-stone-500 text-sm mb-6">
              Este gráfico ilustrativo demonstra a tendência de crescimento de usuários de criptoativos mundialmente, 
              reforçando a importância de entender essa nova economia.
            </p>
            
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0f766e" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#0f766e" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e7e5e4" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#78716c', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#78716c', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ color: '#0f766e', fontWeight: 600 }}
                  />
                  <Area type="monotone" dataKey="users" stroke="#0f766e" strokeWidth={3} fillOpacity={1} fill="url(#colorUsers)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bottom: Why Popular? */}
        <div className="bg-brand-700 rounded-3xl p-8 sm:p-12 text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
           
           <div className="relative z-10">
             <h2 className="text-3xl font-bold mb-8 text-center sm:text-left">Por que as criptomoedas são populares?</h2>
             
             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-brand-800/50 p-6 rounded-xl border border-brand-600 backdrop-blur-sm">
                   <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center mb-4 text-white">
                      <Zap size={20} />
                   </div>
                   <h4 className="font-bold mb-2">São Rápidas</h4>
                   <p className="text-brand-100 text-sm">Transações liquidadas em minutos, 24/7.</p>
                </div>

                <div className="bg-brand-800/50 p-6 rounded-xl border border-brand-600 backdrop-blur-sm">
                   <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center mb-4 text-white">
                      <Globe size={20} />
                   </div>
                   <h4 className="font-bold mb-2">Sem Fronteiras</h4>
                   <p className="text-brand-100 text-sm">Envie valores para qualquer lugar do mundo.</p>
                </div>

                <div className="bg-brand-800/50 p-6 rounded-xl border border-brand-600 backdrop-blur-sm">
                   <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center mb-4 text-white">
                      <Wallet size={20} />
                   </div>
                   <h4 className="font-bold mb-2">Reserva de Valor</h4>
                   <p className="text-brand-100 text-sm">Utilizadas para proteção de patrimônio.</p>
                </div>

                <div className="bg-brand-800/50 p-6 rounded-xl border border-brand-600 backdrop-blur-sm">
                   <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center mb-4 text-white">
                      <Lock size={20} />
                   </div>
                   <h4 className="font-bold mb-2">Auditável</h4>
                   <p className="text-brand-100 text-sm">Tudo fica registrado na blockchain.</p>
                </div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;