import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-stone-900 text-stone-300 pt-16 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="https://res.cloudinary.com/dapsovbs5/image/upload/v1765126630/Pngtree_3d_futuristic_jelly_shield_icon_21534846_1_1_1_nzwytm.png" 
                alt="CripTrade Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-white">CripTrade</span>
            </div>
            <p className="text-stone-400 mb-6 leading-relaxed">
              Sua parceira segura no universo das criptomoedas. 
              Negocie com a tranquilidade de quem entende e segue as regras.
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-brand-700 hover:text-white transition-colors">
                    <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-brand-700 hover:text-white transition-colors">
                    <Facebook size={20} />
                </a>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Fale Conosco</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-brand-500 mt-1"><Phone size={18} /></div>
                <div>
                  <p className="text-white font-medium">(21) 98280-3811</p>
                  <p className="text-xs text-stone-500">Telefone / WhatsApp</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                 <div className="text-brand-500 mt-1"><Mail size={18} /></div>
                 <div>
                    <p className="text-white font-medium">Criptradebanks@gmail.com</p>
                 </div>
              </div>
               <div className="flex items-start gap-3">
                 <div className="text-brand-500 mt-1"><MapPin size={18} /></div>
                 <div>
                    <p className="text-white font-medium">Rio de Janeiro – RJ</p>
                    <p className="text-xs text-stone-500">Atuação em todo território nacional</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Responsible Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Responsabilidade</h3>
            <div className="bg-stone-800 p-6 rounded-xl border border-stone-700">
               <p className="text-sm mb-2 text-stone-400">Responsável Técnica:</p>
               <p className="text-white font-bold text-lg mb-4">Aryanne Rodrigues</p>
               <div className="h-px w-full bg-stone-700 mb-4"></div>
               <p className="text-xs text-stone-500 italic">
                 "Seguimos rigorosamente todas as diretrizes de compliance e segurança digital."
               </p>
            </div>
          </div>

        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
          <p>© {new Date().getFullYear()} CripTrade. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <span className="hover:text-stone-300 cursor-pointer">Termos de Uso</span>
             <span className="hover:text-stone-300 cursor-pointer">Política de Privacidade</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;