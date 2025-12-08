import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  // Impede a rolagem do corpo da página quando o modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop com efeito blur */}
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Container do Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-fade-in-down border border-stone-200">
        
        {/* Cabeçalho */}
        <div className="flex items-center justify-between p-6 border-b border-stone-100 bg-stone-50 shrink-0">
          <div>
            <h2 className="text-xl font-bold text-stone-900">Termos de Uso</h2>
            <p className="text-xs text-stone-500 mt-1">Última atualização: Dezembro/2025</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-200 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Conteúdo com rolagem */}
        <div className="p-6 overflow-y-auto text-stone-600 text-sm leading-relaxed space-y-6">
          <p>
            Bem-vindo ao site da Criptrade. Ao acessar este site ou utilizar nossos serviços, você concorda com os presentes Termos de Uso. Caso não concorde, recomendamos que não utilize o site ou nossos canais de atendimento.
          </p>

          <section>
            <h3 className="text-base font-bold text-stone-900 mb-2">1. Sobre a Criptrade</h3>
            <p className="mb-2">A Criptrade é uma empresa que atua na intermediação de compra e venda de criptomoedas por meio de plataformas P2P (peer-to-peer).</p>
            <p className="mb-2 italic font-semibold">Importante:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>A Criptrade não é corretora ou exchange;</li>
              <li>Não é instituição financeira nem oferece produtos de investimento;</li>
              <li>Não há qualquer operação realizada dentro do site;</li>
              <li>Todas as transações são feitas exclusivamente via contato direto com nossa equipe e executadas em plataformas P2P seguras.</li>
            </ul>
            <p className="mt-2">O site tem caráter informativo e serve apenas para apresentação dos serviços e disponibilização de canais de contato.</p>
          </section>

          <section>
            <h3 className="text-base font-bold text-stone-900 mb-2">2. Uso do Site</h3>
            <p className="mb-2">Ao acessar o site Criptrade, você concorda que:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Não realizará transações financeiras dentro do site;</li>
              <li>Não enviará informações falsas ou incompletas;</li>
              <li>Não utilizará o site para fins ilegais, fraudulentos ou que violem a legislação vigente;</li>
              <li>Utilizará as informações apenas para comunicação e conhecimento dos serviços.</li>
            </ul>
            <p className="mt-2">O site pode conter links externos. A Criptrade não se responsabiliza pelo conteúdo, segurança ou práticas de privacidade de terceiros.</p>
          </section>

          <section>
            <h3 className="text-base font-bold text-stone-900 mb-2">3. Funcionamento das Operações</h3>
            <p className="mb-2">Toda compra e venda de criptomoedas intermediada pela Criptrade segue este fluxo:</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>O cliente entra em contato diretamente (WhatsApp, telefone ou e-mail).</li>
              <li>A Criptrade confirma o valor, moeda e condições.</li>
              <li>A operação é executada via plataformas P2P, nunca pelo site.</li>
              <li>O cliente envia os dados necessários (pessoais ou bancários).</li>
              <li>A transação é concluída com a liberação de valores e envio de comprovantes.</li>
            </ol>
            <p className="mt-2">A Criptrade atua como intermediadora e não garante valorização, previsão de mercado ou lucros futuros.</p>
          </section>

          <section>
            <h3 className="text-base font-bold text-stone-900 mb-2">4. Responsabilidades do Usuário</h3>
            <p className="mb-2">Ao solicitar uma operação com a Criptrade, o usuário declara que:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>É maior de 18 anos;</li>
              <li>É o legítimo proprietário dos recursos financeiros utilizados;</li>
              <li>Compreende os riscos associados às criptomoedas;</li>
              <li>Utilizará os dados fornecidos de forma lícita e consciente;</li>
              <li>Se compromete a fornecer informações verdadeiras e completas;</li>
              <li>Concorda com a Política de Privacidade da Criptrade;</li>
            </ul>
            <p className="mt-2 font-medium text-stone-800">Transações realizadas em plataformas P2P são irreversíveis; o usuário deve revisar todas as informações antes de concluir.</p>
          </section>

          <section>
            <h3 className="text-base font-bold text-stone-900 mb-2">5. Limitação de Responsabilidade</h3>
            <p className="mb-2">A Criptrade não se responsabiliza por:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Oscilações, desvalorização ou volatilidade das criptomoedas;</li>
              <li>Perdas financeiras decorrentes de decisões do usuário;</li>
              <li>Problemas técnicos ou de instabilidade em plataformas P2P;</li>
              <li>Atrasos por motivos externos, como sistema bancário ou manutenção de plataformas;</li>
              <li>Atos de terceiros, golpes externos ou informações incorretas fornecidas pelo usuário;</li>
              <li>Interrupções de internet, falhas de transmissão ou indisponibilidade temporária do site.</li>
            </ul>
            <p className="mt-2">A Criptrade garante apenas a execução correta da operação conforme acordado no atendimento.</p>
          </section>

          <section>
            <h3 className="text-base font-bold text-stone-900 mb-2">6. Conteúdos e Informações</h3>
            <p className="mb-2">Todo o conteúdo do site da Criptrade (textos, imagens, informações e materiais) é de propriedade da empresa e não pode ser:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Copiado</li>
              <li>Reproduzido</li>
              <li>Distribuído</li>
              <li>Modificado</li>
            </ul>
            <p className="mt-1">sem autorização expressa.</p>
            <p className="mt-2">As informações presentes no site são apenas informativas e não constituem recomendação de investimento.</p>
          </section>

          <section>
            <h3 className="text-base font-bold text-stone-900 mb-2">7. Privacidade e Proteção de Dados</h3>
            <p className="mb-2">A Criptrade trata informações pessoais conforme descrito em nossa Política de Privacidade, que faz parte integrante destes Termos de Uso.</p>
            <p>O usuário declara estar ciente e concorda com os termos de tratamento de dados para fins operacionais.</p>
          </section>

          <section>
            <h3 className="text-base font-bold text-stone-900 mb-2">8. Alterações nos Termos</h3>
            <p className="mb-2">A Criptrade poderá modificar estes Termos de Uso a qualquer momento, sempre que necessário para atualização, adequação legal ou melhoria dos serviços.</p>
            <p>A versão atualizada ficará disponível em nosso site com a data de última modificação.</p>
          </section>

          <section>
            <h3 className="text-base font-bold text-stone-900 mb-2">9. Contato</h3>
            <p className="mb-2">Para dúvidas, suporte ou solicitações relacionadas a estes Termos de Uso:</p>
            <div className="bg-stone-50 p-4 rounded-lg border border-stone-100">
              <p className="font-semibold text-stone-800">Criptrade – Intermediação P2P de Criptomoedas</p>
              <p>📍 Sede no Rio de Janeiro – atendemos todo o Brasil</p>
              <p>📞 WhatsApp: (21) 98280-3811</p>
              <p>📧 E-mail: criptradebanks@gmail.com</p>
            </div>
          </section>

        </div>

        {/* Rodapé do Modal */}
        <div className="p-4 border-t border-stone-100 bg-stone-50 flex justify-end shrink-0">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-stone-900 text-white font-medium rounded-lg hover:bg-stone-800 transition-colors"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;