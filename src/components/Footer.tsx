import React from 'react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark border-t border-white/5 py-12 text-slate-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/5 pb-8 mb-8">
          
          {/* Logo e Descrição */}
          <div className="text-center md:text-left">
            <Image
              src="/logo-v3.png"
              alt="Tech Hive Logo"
              width={140}
              height={42}
              className="h-11 w-auto object-contain mx-auto md:mx-0 mb-3 brightness-0 invert opacity-80"
              style={{ height: 'auto' }}
            />
            <p className="mt-2 text-xs max-w-sm font-normal text-slate-400">
              Sistemas críticos e inovação acelerada por Inteligência Artificial. 24 anos construindo o futuro digital das empresas brasileiras.
            </p>
          </div>
          
          {/* Links e Contatos */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-semibold uppercase tracking-wider text-slate-300">
            <a href="https://proposta.techhive.com.br/" className="hover:text-white transition-colors duration-200">
              Solicitar Proposta
            </a>
            <a href="#proposta-secao" className="hover:text-white transition-colors duration-200">
              Método Velocity™
            </a>
            <a href="mailto:contato@techhive.com.br" className="hover:text-white transition-colors duration-200">
              Fale Conosco
            </a>
          </div>

        </div>

        {/* Rodapé Final com Detalhes Regulatórios */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-medium">
          <p>
            &copy; {currentYear} Tech Hive. Todos os direitos reservados.
          </p>
          <p>
            Tech Hive Tecnologia S/A • CNPJ: 00.000.000/0001-00 • Sistemas Críticos e IA
          </p>
        </div>
      </div>
    </footer>
  );
}
