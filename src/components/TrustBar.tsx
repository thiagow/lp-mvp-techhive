'use client';

import React from 'react';

export default function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container">
        <p className="eyebrow trust-bar__label">Empresas que confiaram no nosso código</p>
        <div className="trust-bar__logos">
          {/* Substituir pelos logos reais quando disponíveis */}
          <div className="logo-placeholder">TOTVS</div>
          <div className="logo-placeholder">SAP B1</div>
          <div className="logo-placeholder">Conta Azul</div>
          <div className="logo-placeholder">Omie</div>
          <div className="logo-placeholder">Senior ERP</div>
          <div className="logo-placeholder">Protheus</div>
        </div>
      </div>
    </section>
  );
}
