'use client';

import React from 'react';

export default function FAQ() {
  return (
    <section className="faq-section">
      <div className="container">
        <h2>Perguntas frequentes</h2>
        <div className="faq-list">

          <details className="faq-item">
            <summary className="faq-item__question">
              O código vai ser meu ou fica com a Tech Hive?
              <span className="faq-item__icon" aria-hidden="true">+</span>
            </summary>
            <p className="faq-item__answer">
              100% seu. Na entrega do Dia 10, transferimos o código-fonte, o repositório Git,
              o domínio configurado e todos os acessos de infraestrutura.
              A Tech Hive não fica com nenhum ativo do projeto.
            </p>
          </details>

          <details className="faq-item">
            <summary className="faq-item__question">
              E se eu quiser mudar algo no meio do desenvolvimento?
              <span className="faq-item__icon" aria-hidden="true">+</span>
            </summary>
            <p className="faq-item__answer">
              O escopo é travado em contrato antes do início. Mudanças de escopo são avaliadas
              e cotadas separadamente como adicionais. O que foi acordado é entregue no prazo —
              sem surpresa de custo.
            </p>
          </details>

          <details className="faq-item">
            <summary className="faq-item__question">
              Tenho só uma ideia, sem especificação técnica. Consigo começar?
              <span className="faq-item__icon" aria-hidden="true">+</span>
            </summary>
            <p className="faq-item__answer">
              É exatamente para isso que existe o nosso analista. Na conversa inicial de 10 minutos,
              você descreve a ideia em linguagem de negócio — sem jargão técnico. O briefing e o
              Roteiro são responsabilidade da Tech Hive.
            </p>
          </details>

          <details className="faq-item">
            <summary className="faq-item__question">
              Vocês têm experiência no meu setor?
              <span className="faq-item__icon" aria-hidden="true">+</span>
            </summary>
            <p className="faq-item__answer">
              24 anos em sistemas críticos para PMEs brasileiras nos colocou em projetos de varejo,
              saúde, serviços financeiros, logística e agronegócio. Pergunte ao analista sobre o
              seu setor específico na conversa inicial.
            </p>
          </details>

          <details className="faq-item">
            <summary className="faq-item__question">
              O que acontece depois da entrega do produto?
              <span className="faq-item__icon" aria-hidden="true">+</span>
            </summary>
            <p className="faq-item__answer">
              Você decide. Pode evoluir com seu time interno, contratar devs ou voltar para a
              Tech Hive para a próxima fase. Entregamos o produto documentado e com arquitetura
              que suporta evolução sem começar do zero.
            </p>
          </details>

        </div>
      </div>
    </section>
  );
}
