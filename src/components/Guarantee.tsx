'use client';

import React from 'react';

export default function Guarantee() {
  return (
    <section className="guarantee-section">
      <div className="container">

        <div className="guarantee-block">
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
              Garantia de entrega
            </span>
          </div>
          <h2>Escopo fixo. Prazo garantido.<br />Ou trabalhamos sem custo adicional até entregar.</h2>
          <p className="guarantee-text">
            Entregamos tudo que foi acordado no escopo dentro do prazo contratado.
            Se não entregarmos, continuamos sem cobrar até o produto estar no ar —
            sem negociação, sem cláusula de saída, sem advogado.
          </p>
          <p className="guarantee-trust">
            24 anos entregando sistemas críticos para empresas brasileiras.
            O Vibe Coding Studio é mais rápido. O rigor é o mesmo.
          </p>
        </div>

        <div className="comparison-block">
          <h3>Compare antes de decidir</h3>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th className="th-highlight">Tech Hive<br /><small>Vibe Coding Studio</small></th>
                  <th>Agência tradicional</th>
                  <th>Dev interno CLT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="feature-col">Prazo de entrega</td>
                  <td className="highlight-col">10 dias úteis</td>
                  <td>60–120 dias</td>
                  <td>90+ dias</td>
                </tr>
                <tr>
                  <td className="feature-col">Investimento</td>
                  <td className="highlight-col">A partir de R$ 4.800</td>
                  <td>R$ 30k–R$ 80k</td>
                  <td>R$ 12k–18k/mês</td>
                </tr>
                <tr>
                  <td className="feature-col">Propriedade do código</td>
                  <td className="highlight-col">100% seu, desde o dia 1</td>
                  <td>Depende do contrato</td>
                  <td>Sim</td>
                </tr>
                <tr>
                  <td className="feature-col">Escopo</td>
                  <td className="highlight-col">Travado em contrato</td>
                  <td>Sujeito a aditivos</td>
                  <td>Indefinido</td>
                </tr>
                <tr>
                  <td className="feature-col">Arquitetura sênior</td>
                  <td className="highlight-col">Incluída em todos os projetos</td>
                  <td>Depende da equipe</td>
                  <td>Depende do perfil</td>
                </tr>
                <tr>
                  <td className="feature-col">Prazo para proposta</td>
                  <td className="highlight-col">24 horas</td>
                  <td>2–4 semanas</td>
                  <td>Processo seletivo</td>
                </tr>
                <tr>
                  <td className="feature-col">Garantia</td>
                  <td className="highlight-col">Explícita em contrato</td>
                  <td>Risco do cliente</td>
                  <td>Risco do cliente</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
