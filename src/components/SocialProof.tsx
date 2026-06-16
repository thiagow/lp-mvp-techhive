'use client';

import React from 'react';
import Image from 'next/image';

export default function SocialProof() {
  return (
    <section className="social-proof">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '1.4px',
              textTransform: 'uppercase',
              color: '#00A0FF',
              background: 'rgba(0,160,255,0.10)',
              border: '1px solid rgba(0,160,255,0.25)',
              borderRadius: '999px',
              padding: '5px 14px',
            }}
          >
            Projetos entregues
          </span>
        </div>
        <h2>Entregues. No prazo. Rodando.</h2>

        <div className="cases-grid">

          <div className="case-card">
            <div className="relative w-full h-48 sm:h-56 border-b border-slate-200">
              <Image 
                src="/images/img-case1.jpg" 
                alt="Dashboard do Dojo Gestor" 
                fill
                className="object-cover"
              />
            </div>
            <div className="case-card__content">
              <div className="case-card__badge">SaaS · Lutas</div>
              <h4>Dojo Gestor</h4>
              <p>SaaS para gestão e automação de academias de lutas.</p>
              <div className="case-card__result">
                <span className="case-card__result-label">O que fizemos</span>
                Dashboard completo, gestão de turmas e controle de pagamentos.
              </div>
            </div>
          </div>

          <div className="case-card">
            <div className="relative w-full h-48 sm:h-56 border-b border-slate-200">
              <Image 
                src="/images/img-case2.jpg" 
                alt="Dashboard do Calenvo" 
                fill
                className="object-cover"
              />
            </div>
            <div className="case-card__content">
              <div className="case-card__badge">SaaS · Agendamentos</div>
              <h4>Calenvo</h4>
              <p>Plataforma SaaS para gestão completa de agendas e fidelização de clientes.</p>
              <div className="case-card__result">
                <span className="case-card__result-label">O que fizemos</span>
                Portal de agendamento self-service com confirmação automatizada.
              </div>
            </div>
          </div>

          <div className="case-card case-card--invite">
            <div className="case-card__content">
              <div className="case-card__badge case-card__badge--muted">Em breve</div>
              <h4>Seu projeto aqui</h4>
              <p>Estamos abrindo as primeiras vagas do Vibe Coding Studio. Seja um dos primeiros projetos e tenha sua história documentada.</p>
              <a href="#cta-analista" className="case-card__link">Garantir minha vaga →</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
