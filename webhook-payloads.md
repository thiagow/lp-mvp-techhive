# Documentação de Integração - Webhooks do Quiz "Equipe Digital"

Este documento serve como referência de todos os payloads enviados pelo Quiz de Qualificação "Equipe Digital" para o seu n8n/Make/API.

O quiz dispara dois eventos principais através de chamadas `POST` em JSON:

## 1. Captura do Lead (Disparado no início do Quiz)
Este payload é disparado assim que o usuário preenche o nome, e-mail e WhatsApp na primeira tela, antes de iniciar as perguntas de fato.

**Exemplo de Payload:**
```json
{
  "evento": "lead_capturado",
  "data": "2023-10-15T14:30:00.000Z",
  "lead": {
    "nome": "João da Silva",
    "email": "joao@empresa.com.br",
    "whatsapp": "(11) 98765-4321"
  },
  "utm": {
    "source": "facebook",
    "medium": "cpc",
    "campaign": "lancamento_equipe_digital"
  }
}
```

## 2. Resultado Final do Quiz (Disparado ao concluir)
Este payload é disparado quando o usuário responde todas as 7 perguntas do quiz. Ele contém a pontuação de qualificação (score) e todas as respostas individuais, que podem ser usadas para segmentar o lead no CRM.

**Exemplo de Payload:**
```json
{
  "evento": "quiz_concluido",
  "data": "2023-10-15T14:35:00.000Z",
  "lead": {
    "nome": "João da Silva",
    "email": "joao@empresa.com.br",
    "whatsapp": "(11) 98765-4321"
  },
  "scoreFinal": 4,
  "qualificacao": "Quente",
  "respostas": {
    "P1": 1, 
    "P2": 1,
    "P3": 1,
    "P4": 0,
    "P5": 1,
    "P6": "ERP TOTVS e CRM Pipdrive",
    "P7": "Clínica Médica / Agendamentos"
  }
}
```

### Regras de Qualificação (Score de P1 a P5)
O score vai de 0 a 5, calculado com base nas alternativas selecionadas (1 ponto para alternativas de alta dor/urgência).
- **Score 4-5:** Lead Quente (Alta prioridade comercial, grande volume de atendimento e custo elevado).
- **Score 2-3:** Lead Morno (Tem dor, mas talvez o volume não seja tão crítico).
- **Score 0-1:** Lead Frio (Volume baixo ou já possui processos engessados que dificultam IA).

*Guarde este documento na pasta do seu novo repositório "Equipe Digital" para quando for refazer a integração do n8n.*
