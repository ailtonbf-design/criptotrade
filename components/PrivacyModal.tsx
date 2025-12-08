import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
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
            <h2 className="text-xl font-bold text-stone-900">Política de Privacidade</h2>
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
            A Criptrade valoriza a segurança, a privacidade e a transparência no relacionamento com seus clientes. Esta Política de Privacidade explica como tratamos os dados pessoais fornecidos por você ao solicitar nossos serviços de compra e venda de criptomoedas via P2P.
          </p>
          <p className="font-medium text-stone-800">
            O uso do site Criptrade indica que você está ciente das práticas descritas nesta política.
          </p>

          <section>
            <h3 className="text-base font-bold text-stone-900 mb-2">1. Sobre a Criptrade</h3>
            <p className="mb-2">A Criptrade é uma empresa especializada em intermediação de compra e venda de criptomoedas através de plataformas P2P (peer-to-peer) seguras e reconhecidas.</p>
            <p className="mb-2 italic">Importante destacar:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Não somos corretora, exchange ou instituição financeira.</li>
              <li>Não realizamos operações dentro do site.</li>
              <li>As negociações acontecem exclusivamente via contato direto com nossa equipe e são executadas por meio de plataformas P2P confiáveis.</li>
              <li>Nosso site tem caráter informativo e serve apenas como canal de apresentação e contato.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-base font-bold text-stone-900 mb-2">2. Dados que coletamos</h3>
            <p className="mb-2">A Criptrade coleta somente os dados que você fornece voluntariamente, como:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Nome completo</li>
              <li>Telefone/WhatsApp</li>
              <li>E-mail</li>
              <li>CPF (se necessário para segurança da operação)</li>
              <li>Dados bancários para liquidação da compra ou venda</li>
              <li>Informações sobre a transação solicitada (moeda, valor, tipo de operação)</li>
            </ul>
            <p className="mt-2">Não coletamos dados automaticamente pelo site.</p>
          </section>

          <section>
            <h3 className="text-base font-bold text-stone-900 mb-2">3. Como utilizamos seus dados</h3>
            <p className="mb-2">Os dados fornecidos são usados exclusivamente para:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Realizar a intermediação de compra ou venda de criptomoedas via P2P</li>
              <li>Garantir a segurança e a autenticidade da operação</li>
              <li>Enviar comprovantes, recibos e histórico da transação</li>
              <li>Cumprir obrigações legais e antifraude</li>
              <li>Nos comunicar com você durante todo o processo</li>
            </ul>
            <p className="mt-2">Seu contato não será utilizado para propaganda sem seu consentimento.</p>
          </section>

          <section>
            <h3 className="text-base font-bold text-stone-900 mb-2">4. Compartilhamento de informações</h3>
            <p className="mb-2">A Criptrade não vende, não aluga e não comercializa seus dados.</p>
            <p className="mb-2">Podemos compartilhar seus dados apenas quando necessário, como:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Com plataformas P2P utilizadas para executar a transação</li>
              <li>Com bancos e meios de pagamento envolvidos</li>
              <li>Com prestadores de serviços necessários para validação de identidade</li>
              <li>Com autoridades legais, se houver obrigação</li>
            </ul>
            <p className="mt-2">O compartilhamento é limitado ao mínimo necessário para a operação.</p>
          </section>

          <section>
            <h3 className="text-base font-bold text-stone-900 mb-2">5. Segurança das Informações</h3>
            <p className="mb-2">Adotamos práticas de segurança para proteger seus dados:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Armazenamento seguro</li>
              <li>Acesso restrito a colaboradores autorizados</li>
              <li>Checagens manuais de identidade e dados</li>
              <li>Procedimentos de verificação durante a negociação P2P</li>
            </ul>
            <p className="mt-2 bg-yellow-50 p-3 rounded-lg border border-yellow-100 text-yellow-800">
              Apesar disso, lembramos que nenhum meio digital é 100% livre de riscos, principalmente em transações financeiras. Por isso, todas as operações são acompanhadas por atendimento individualizado.
            </p>
          </section>

          <section>
            <h3 className="text-base font-bold text-stone-900 mb-2">6. Cookies e dados de navegação</h3>
            <p>Como o site não possui login, cadastro ou operações internas, não utilizamos cookies para coleta de dados pessoais, rastreamento ou identificação.</p>
          </section>

          <section>
            <h3 className="text-base font-bold text-stone-900 mb-2">7. Direitos do usuário</h3>
            <p className="mb-2">Você tem direito de:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Solicitar acesso aos seus dados</li>
              <li>Corrigir informações</li>
              <li>Solicitar exclusão (quando permitido por lei)</li>
              <li>Obter cópia dos dados fornecidos</li>
              <li>Revogar consentimentos</li>
            </ul>
            <p className="mt-2">Para qualquer solicitação, basta nos contatar pelos canais oficiais.</p>
          </section>

          <section>
            <h3 className="text-base font-bold text-stone-900 mb-2">8. Retenção dos dados</h3>
            <p className="mb-2">Os dados serão mantidos pelo tempo necessário para:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Concluir a operação solicitada</li>
              <li>Cumprir obrigações legais e fiscais</li>
              <li>Oferecer suporte ou comprovações futuras, se necessário</li>
            </ul>
            <p className="mt-2">Após esse período, dados não obrigatórios serão excluídos com segurança.</p>
          </section>

          <section>
            <h3 className="text-base font-bold text-stone-900 mb-2">9. Contato</h3>
            <p className="mb-2">Para dúvidas ou solicitações sobre esta Política de Privacidade, entre em contato:</p>
            <div className="bg-stone-50 p-4 rounded-lg border border-stone-100">
              <p className="font-semibold text-stone-800">Criptrade – Intermediação P2P de Criptomoedas</p>
              <p>📍 Sede no Rio de Janeiro – atendimento em todo Brasil</p>
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

export default PrivacyModal;
