import React from 'react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-base border-t border-white/5 py-12 text-slate-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Superior: Logo e Redes Sociais */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pb-8 mb-8 border-b border-white/5">
          
          {/* Logo */}
          <div className="shrink-0">
            <Image
              src="/logo-v3.png"
              alt="Tech Hive Logo"
              width={140}
              height={42}
              className="h-10 w-auto object-contain brightness-0 invert opacity-90"
              style={{ height: 'auto' }}
            />
          </div>
          
          {/* Redes Sociais */}
          <div className="flex items-center gap-6 text-slate-500">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg className="h-5 w-5 hover:text-white transition-colors duration-200 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.9 0-5 1.55-5 4.5V8z" />
              </svg>
            </a>
            
            <a href="https://twitter.com" aria-label="Twitter/X" target="_blank" rel="noopener noreferrer">
              <svg className="h-4 w-4 hover:text-white transition-colors duration-200 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg className="h-5 w-5 hover:text-white transition-colors duration-200 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            
            <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <svg className="h-5 w-5 hover:text-white transition-colors duration-200 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

        </div>

        {/* Inferior: Copyright e Informações Regulatórias */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 font-medium">
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
