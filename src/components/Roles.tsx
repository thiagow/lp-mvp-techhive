'use client';

import React from 'react';

export default function Roles() {
  return (
    <section className="roles-section">
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
            Divisão de trabalho
          </span>
        </div>
        <h2>Você foca no negócio.<br />A gente cuida de tudo que é técnico.</h2>

        <div className="roles-grid">

          <div className="roles-card roles-card--client">
            <div className="roles-card__header">
              <span className="roles-card__icon">👤</span>
              <h4>Você faz isso:</h4>
            </div>
            <ul className="roles-list">
              <li>Descreve a ideia em 10 minutos</li>
              <li>Aprova o plano e o escopo</li>
              <li>Valida o protótipo antes do desenvolvimento</li>
              <li>Acompanha as entregas parciais</li>
              <li>Homologa e aprova o produto final</li>
            </ul>
          </div>

          <div className="roles-divider" aria-hidden="true">
            <span>+</span>
          </div>

          <div className="roles-card roles-card--us">
            <div className="roles-card__header">
              <span className="roles-card__icon">⚡</span>
              <h4>A Tech Hive faz isso:</h4>
            </div>
            <ul className="roles-list">
              <li>Transforma a ideia em briefing estruturado</li>
              <li>Define arquitetura, stack e cronograma</li>
              <li>Desenvolve, testa e documenta</li>
              <li>Faz deploy em produção</li>
              <li>Entrega código, domínio e todos os acessos</li>
            </ul>
          </div>

        </div>

        <p className="roles-footer">
          Isso é tudo que você precisa fazer. O resto é com a gente.
        </p>
      </div>
    </section>
  );
}
