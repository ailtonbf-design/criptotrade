import React from 'react';
import { FileSearch, ShieldCheck, Scale, GraduationCap, Zap, Users } from 'lucide-react';
import { ValueItem } from '../types';

const values: ValueItem[] = [
  {
    title: 'Transparência',
    description: 'Explicamos cada passo da negociação, sem letras miúdas.',
    icon: FileSearch,
  },
  {
    title: 'Segurança',
    description: 'Orientamos sobre boas práticas e prevenção total a golpes.',
    icon: ShieldCheck,
  },
  {
    title: 'Responsabilidade',
    description: 'Atuamos estritamente dentro das normas e regras do mercado.',
    icon: Scale,
  },
  {
    title: 'Educação',
    description: 'Acreditamos que o conhecimento é a maior proteção do investidor.',
    icon: GraduationCap,
  },
  {
    title: 'Agilidade',
    description: 'Operações rápidas, claras e sem complicação burocrática.',
    icon: Zap,
  },
  {
    title: 'Ética',
    description: 'Construímos relações de longo prazo baseadas em confiança.',
    icon: Users,
  },
];

const ValuesGrid: React.FC = () => {
  return (
    <section id="valores" className="py-24 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Nossos Valores</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">
            Não somos apenas uma plataforma de trocas. Somos parceiros na sua jornada financeira.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-2xl bg-stone-800 hover:bg-stone-700 border border-stone-700 hover:border-brand-700 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-stone-900 text-brand-500 group-hover:bg-brand-900 group-hover:text-brand-400 transition-colors">
                  <value.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-stone-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesGrid;
