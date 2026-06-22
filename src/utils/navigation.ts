/**
 * Configuração de links de redirecionamento e eventos de rastreamento (tracking).
 */

// URL principal da proposta Tech Hive
export const PROPOSAL_URL = "https://proposta.techhive.com.br/";

/**
 * Função unificada para gerenciar o clique de CTAs, disparar eventos de tracking e redirecionar o usuário.
 * 
 * @param ctaIdentifier Identificador do CTA clicado (ex: "hero_primary_cta", "value_prop_cta")
 */
export function handleCtaRedirect(ctaIdentifier: string): void {
  // --- PLACEHOLDER DE TRACKING (GTM / Meta Pixel) ---
  console.log(`[Tracking] CTA clicado: ${ctaIdentifier}`);
  
  // Exemplo de integração Meta Pixel (Facebook Pixel):
  // if (typeof window !== "undefined" && (window as any).fbq) {
  //   (window as any).fbq('track', 'Lead', { cta: ctaIdentifier });
  // }

  // Exemplo de integração Google Tag Manager (GTM):
  // if (typeof window !== "undefined" && (window as any).dataLayer) {
  //   (window as any).dataLayer.push({
  //     event: 'cta_click',
  //     cta_name: ctaIdentifier
  //   });
  // }
  
  // Redirecionamento na mesma aba
  if (typeof window !== "undefined") {
    window.location.href = PROPOSAL_URL;
  }
}
