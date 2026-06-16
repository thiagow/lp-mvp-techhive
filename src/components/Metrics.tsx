'use client';

import React from 'react';

export default function Metrics() {
  return (
    <section className="metrics-section">
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
            Por que a Tech Hive
          </span>
        </div>
        <h2>Não é só velocidade.<br />É velocidade com rigor de quem já viu projeto frágil afundar.</h2>
        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                <path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7L47.79,127.83a8,8,0,0,0,5,13.66l57.6,21.61L95.77,236.43a8,8,0,0,0,13.69,7l106.35-117.1A8,8,0,0,0,215.79,118.17ZM120,205.28l12.48-62.43a8,8,0,0,0-5-9.33L70,111.59l66.07-72.87L123.55,101.1a8,8,0,0,0,5,9.33l57.48,21.93Z"></path>
              </svg>
            </div>
            <h4>Proposta em 24h</h4>
            <p>Você não espera 3 semanas para saber se o projeto é viável. Escopo + proposta comercial em até 24h da conversa inicial.</p>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                <path d="M245.54,115.54l-11.85-11.86a24,24,0,0,0-11-6A63.89,63.89,0,0,0,216,80a64.07,64.07,0,0,0-128,0,63.89,63.89,0,0,0-6.65,17.67,24,24,0,0,0-11,6L58.46,115.54A8,8,0,0,0,64,128H72v88a16,16,0,0,0,16,16h80a16,16,0,0,0,16-16V128h8a8,8,0,0,0,5.54-12.46ZM136,216H120V128h16Zm32,0H152V128h16ZM88,80a48,48,0,0,1,96,0c0,11.23-5.32,23.1-15,33.09-1.39,1.44-2.82,2.83-4.22,4.16a13.33,13.33,0,0,0-.73.75H140.48s.55-1.52.82-2.31A8,8,0,0,0,126.17,110a19.78,19.78,0,0,1-3.23-6.19c-1.36-4.08.38-9.3,5.18-15.68A8,8,0,1,0,115.3,78.53c-6,8-8.23,15.75-6.52,22.25a35.8,35.8,0,0,0,6,11.83,18.47,18.47,0,0,0,4.89,5.39H91.93a13.33,13.33,0,0,0-.73-.75c-1.4-1.33-2.83-2.72-4.22-4.16C77.32,103.1,72,91.23,72,80Z"></path>
              </svg>
            </div>
            <h4>Arquiteto sênior em cada projeto</h4>
            <p>IA acelera a construção. Profissional sênior com 24 anos revisa cada linha antes da entrega. Você não recebe código frágil.</p>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                <path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H80V72a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V48h24Z"></path>
              </svg>
            </div>
            <h4>Escopo travado. Preço fixo.</h4>
            <p>O que você aprova no Alinhamento é o que você paga. Sem aditivos, sem surpresa de custo no final.</p>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                <path d="M216,40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H71.32l-14,24.5a8,8,0,0,0,13.9,7.94L86.85,192h82.3L184.8,224.44a8,8,0,0,0,13.9-7.94l-14-24.5H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176Z"></path>
              </svg>
            </div>
            <h4>Código seu desde o Dia 1</h4>
            <p>Repositório Git, domínio e todos os acessos de infra passam para você na Estreia. Sem reféns de contrato.</p>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.48c.35.79,8.82,19.58,27.65,38.41C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.35c18.83-18.83,27.3-37.62,27.65-38.41A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
              </svg>
            </div>
            <h4>Visibilidade real a cada 2 dias</h4>
            <p>Você não fica no escuro por 10 dias. Entregas parciais a cada 2 dias para você acompanhar e validar ao vivo.</p>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
                <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-112-24a32,32,0,0,1,64,0V80H96Zm112,152H48V96H208V208Zm-80-56a16,16,0,1,1-16-16A16,16,0,0,1,128,152Z"></path>
              </svg>
            </div>
            <h4>Arquitetura que escala além do MVP</h4>
            <p>Não entregamos protótipo frágil. A estrutura que construímos suporta a próxima fase sem começar do zero.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
