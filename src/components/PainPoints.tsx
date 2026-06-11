'use client';

import React from 'react';

export default function PainPoints() {
  const points = [
    {
      id: 1,
      title: "Reuniões sem fim, orçamento travado",
      description: "A agência pediu mais uma reunião. De novo. E o orçamento que você precisa para começar a rodar ainda não chegou.",
      icon: (
        <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Desenvolvedores que desaparecem",
      description: "O freelancer sumiu no meio do projeto e você se encontra travado: sem código, sem respostas e sem o dinheiro investido.",
      icon: (
        <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Time interno sobrecarregado",
      description: "Seu time de tecnologia está focado em manter a operação principal rodando, e sua ideia de inovação entrou no fim da fila do 'depois'.",
      icon: (
        <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-24 border-y border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-base sm:text-4xl">
            Você reconhece alguma dessas situações?
          </h2>
          <p className="mt-4 text-base text-navy-base/70">
            Fundadores e CEOs perdem oportunidades de mercado todos os dias devido aos gargalos tradicionais de desenvolvimento.
          </p>
        </div>

        {/* Cards de Dores */}
        <div className="mx-auto mt-12 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
          {points.map((point) => (
            <div
              key={point.id}
              className="flex flex-col justify-between rounded-xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 mb-6">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-base mb-3">
                  {point.title}
                </h3>
                <p className="text-base text-navy-base/80 leading-relaxed font-normal">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Frase de Fechamento */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <div className="inline-block rounded-2xl bg-navy-base px-8 py-6 shadow-xl shadow-navy-base/10">
            <p className="text-lg font-semibold text-white md:text-xl leading-relaxed">
              &ldquo;O problema nunca foi a sua ideia. Foi a velocidade de quem deveria executá-la.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
