# Dra. Elisa Carvalho Landing Page (24)

# Prompt para o Lovable — Landing Page Dra. Elisa Carvalho (v3 — versão robusta)

> Instruções de uso: anexe junto com este texto, na mesma mensagem:
> 1. Logo (fundo verde, ícone com linhas curvas — silhueta estilizada de mulher grávida — e "ELISA CARVALHO")
> 2. Foto da Dra. Elisa (retrato, jaleco branco)
> 3. Todas as fotos reais do consultório que você tiver (quanto mais, melhor — vão para o carrossel)
>
> Esse é um prompt grande (reconstrói e expande o site atual). Mande de uma vez só, revise o resultado com calma, e só depois faça ajustes pontuais menores via seleção.

---

Refaça a landing page da Dra. Elisa Carvalho (obstetra e ginecologista, atendimento presencial na Barra da Tijuca e por teleconsulta) com a estrutura, conteúdo e identidade visual abaixo.

## Configurações técnicas gerais
- **Meta tags:** título da aba "Dra. Elisa Carvalho — Obstetra e Ginecologista", descrição "Acompanhamento obstétrico e ginecológico humanizado na Barra da Tijuca. Presencial e teleconsulta."
- **Favicon:** usar o ícone da logo anexada (recortado, sem o texto).
- **Animações:** aplicar transições suaves e discretas (fade-in leve ao rolar a página até cada seção aparecer, transição suave no hover de botões e cards). Nada de animações chamativas, bounce, ou movimento contínuo — o tom da marca é sóbrio e acolhedor, então a animação deve ser sutil, quase imperceptível, só dando uma sensação de suavidade.
- **Botão de WhatsApp flutuante:** adicionar um botão fixo no canto inferior direito da tela (visível em qualquer ponto da rolagem, em desktop e mobile), com ícone de WhatsApp, levando para https://wa.me/552141417099. Deve ficar sempre acima do conteúdo, mas sem cobrir texto importante.
- **Menu com scroll suave:** ao clicar em um item do menu, rolar suavemente até a seção (não pular direto). Destacar visualmente (cor terracota ou sublinhado) o item do menu correspondente à seção que está visível no momento.

## Identidade visual
Paleta extraída da logo anexada:
- Verde escuro `#47715B` — cor principal (fundos de seção, títulos de destaque, botões)
- Terracota `#A85C4A` — acento (links, hover, pequenos detalhes)
- Camel `#BF8B6B` — acento secundário (ícones, detalhes)
- Creme `#F1EBE0` — fundo claro principal

Fonte serifada elegante para títulos, sans-serif limpa para textos corridos.

**Ícones das seções:** use ícones da biblioteca **lucide-react** (já disponível no projeto) em todos os lugares que precisarem de ícone — cards de diferenciais, lista de formação, etc. Não crie ilustrações customizadas ou SVGs desenhados à mão para representar conceitos (isso já foi tentado antes e não funcionou bem). Ícones sugeridos por seção estão indicados abaixo.

**Elemento decorativo do Hero (importante, ler com atenção):**
Não desenhe uma forma nova ou tente recriar o ícone da logo como uma ilustração original — isso já foi tentado e ficou com aparência confusa. Em vez disso, **reutilize a própria imagem da logo anexada** como plano de fundo decorativo: posicione-a grande, do lado direito do Hero, com opacidade bem baixa (entre 6% e 10%), sem cor adicional, sem recriar ou redesenhar — apenas a imagem original com opacidade reduzida, atrás do texto. Isso reaproveita a silhueta real da logo (que lembra uma mulher grávida) sem depender de geração de arte original, que é onde o resultado anterior deu errado.

**Linha divisória decorativa (opcional, entre seções):** se for usar alguma linha decorativa separando seções, use algo tecnicamente simples: uma linha fina horizontal reta ou uma curva senoidal simples de um único traço, cor terracota ou verde, sem ornamentos adicionais. Nada de formas orgânicas complexas geradas livremente.

## Tom e personalidade da marca
Acolhedor e delicado, com um toque de sofisticação. Frases curtas, calorosas, na segunda pessoa.

## Estrutura das seções

**1. Header fixo**
Logo à esquerda. Menu: Início, Sobre, Atendimento, Dúvidas, Contato. Botão "Agendar consulta" → https://wa.me/552141417099

**2. Hero**
Selo: "BARRA DA TIJUCA · RIO DE JANEIRO"
Título: "Cuidando de você em cada etapa"
Subtítulo: "Acompanhamento obstétrico e ginecológico com um atendimento pensado para você se sentir ouvida, respeitada e em segurança — do primeiro exame à última dúvida."
Botão principal: "Agendar consulta presencial" → https://wa.me/552141417099
Botão secundário: "Conhecer a Dra. Elisa" (âncora para #sobre)
Fundo creme + logo em baixa opacidade à direita (ver instrução acima). Sem foto de pessoa aqui.

**3. Sobre a Dra. Elisa**
Foto dela ao lado do texto.
Texto: "Acredito que toda paciente merece sair de uma consulta com a certeza de que foi ouvida e cuidada de verdade. Ao longo da minha trajetória, venho construindo um atendimento próximo, claro e humano — onde cada etapa, cada exame e cada decisão são explicados com atenção, sem pressa e sem julgamentos. Meu compromisso é caminhar ao seu lado em cada momento, do início ao fim."
Credencial: "Dra. Elisa Carvalho — CRM RJ 1213172 · RQE 59538 — Obstetrícia e Ginecologia"

**4. Formação e atuação (NOVA SEÇÃO)**
Título: "Formação e experiência"
Subtítulo pequeno: "Uma trajetória construída com cuidado técnico e humano."
Lista/cards com ícone (lucide-react) + texto:
- Ícone `GraduationCap` — **Graduação** — "Universidade Federal do Estado do Rio de Janeiro (UNIRIO)"
- Ícone `Award` — **Residência médica** — "Ginecologia e Obstetrícia — Hospital Federal de Ipanema / Hospital Universitário Gaffrée e Guinle"
- Ícone `Building2` — **Atuação hospitalar** — "Obstetra na Maternidade Escola da UFRJ (Laranjeiras) e na Maternidade Maria Amélia Buarque de Hollanda (Centro)"
Layout: 3 itens em linha (desktop) ou empilhados (mobile), com o ícone à esquerda de cada texto, fundo levemente diferenciado (creme mais escuro ou branco) para destacar do restante da página.

**5. Diferenciais**
Título: "Cuidando de você em cada etapa"
4 cards, cada um com ícone lucide-react (sugestões: `MessageCircle` para Explicação, `Ear` para Escuta ativa, `Heart` ou `Clock` para Acompanhamento, `Lock` para Sigilo):
- **Explicação** — "Cada etapa é explicada com clareza, do objetivo de um exame aos próximos passos do seu acompanhamento."
- **Escuta ativa** — "Suas dores e dúvidas são ouvidas com atenção total, sem pressa e sem julgamentos."
- **Acompanhamento** — "Antes, durante e depois da consulta — se surgir uma dúvida ou uma urgência, você tem com quem falar."
- **Sigilo profissional** — "Tudo o que é dito na consulta, fica na consulta. Você pode falar de tudo com segurança."

**5.1. Áreas de atuação (NOVA SEÇÃO)**
Título: "Áreas de atuação"
Subtítulo: "Cuidado completo em ginecologia e obstetrícia, em cada fase da sua vida."
Grade de cards pequenos, cada um com ícone lucide-react + nome do serviço (sem foto, sem descrição longa — só ícone e nome, estilo "tags" visuais):
- Ícone `Baby` — Pré-natal
- Ícone `HeartPulse` — Parto humanizado
- Ícone `Stethoscope` — Consulta ginecológica
- Ícone `CalendarCheck` — Consulta de retorno
- Ícone `CircleDot` — Inserção e retirada de DIU
- Ícone `Users` — Planejamento familiar
- Ícone `Activity` — Tratamento de SOP (síndrome dos ovários policísticos)
- Ícone `Video` — Teleconsulta
Layout em grade responsiva (2 colunas no mobile, 4 no desktop), fundo neutro, ícones em verde ou terracota.

**5.2. Jornada do atendimento (NOVA SEÇÃO)**
Título: "Como é o seu cuidado, em cada etapa"
3 passos numerados, em linha no desktop / empilhados no mobile, cada um com ícone lucide-react:
- **1 · Primeiro contato** (ícone `MessageCircle`) — "Você entra em contato pelo WhatsApp, presencial ou por teleconsulta, para tirar dúvidas iniciais."
- **2 · Consulta** (ícone `Stethoscope`) — "Um espaço de escuta e explicação, sem pressa, para entender sua queixa ou acompanhar sua gestação."
- **3 · Acompanhamento contínuo** (ícone `Heart`) — "Você segue com suporte para dúvidas e próximos passos, sempre que precisar."
Usar linhas finas conectando os números (estilo timeline horizontal simples), sem ilustrações adicionais.

**6. Para quem é esse atendimento**
Título: "Um cuidado pensado para cada momento da sua jornada"
Texto: "Se você está vivendo a expectativa de uma gestação, ou busca um acompanhamento ginecológico onde se sinta verdadeiramente ouvida — este é um espaço para você. Aqui, cada etapa é explicada com calma, e cada dúvida encontra espaço para ser feita sem receio."

**7. Atendimento**
Título: "Como funciona o atendimento"
Dois cards lado a lado:
- **Consulta presencial** — "No espaço do Consultório Eva, na Barra da Tijuca. Para acompanhamento completo, exames e conversas mais longas." → botão "Agendar presencial" → https://wa.me/552141417099
- **Teleconsulta** — "Para uma primeira conversa, esclarecimento de dúvidas ou orientações — do conforto da sua casa." → botão "Agendar teleconsulta" → https://wa.me/5521995640833

**8. FAQ**
Título: "Dúvidas frequentes"
Acordeão com estas perguntas e respostas exatas (não deixe nenhuma resposta vazia):
- "Com que frequência devo ir ao ginecologista/obstetra?" → "De forma geral, uma consulta anual é recomendada para acompanhamento preventivo. Durante a gestação, o intervalo é definido de forma individual. Na consulta, definimos juntas o que faz mais sentido para o seu momento."
- "A consulta é dolorosa?" → "O exame ginecológico pode causar um leve desconforto, mas não deve ser doloroso. Se em algum momento você sentir dor, me avise — o ritmo da consulta se adapta a você."
- "Posso levar acompanhante?" → "Sim, você pode levar um acompanhante de sua confiança para a consulta, se isso te deixar mais à vontade."
- "Como funciona o agendamento?" → "Você pode agendar diretamente pelo WhatsApp. Também é possível marcar uma primeira conversa por teleconsulta para tirar dúvidas antes da consulta presencial."
- "O consultório atende convênio?" → "O atendimento na Barra da Tijuca é particular. Consultas pelo convênio são realizadas em uma unidade separada, em Copacabana."

**9. CTA final (NOVA SEÇÃO)**
Fundo verde escuro, texto em creme, seção de destaque antes do rodapé.
Título: "Vamos cuidar de você em cada etapa?"
Texto: "Agende sua consulta e comece um acompanhamento pensado para o seu momento — com escuta, clareza e cuidado real."
Botão grande: "Agendar pelo WhatsApp" → https://wa.me/552141417099

**10. Localização e contato**
Título: "Venha nos conhecer"
Endereço: Avenida João Cabral de Mello Neto, 850, Sala 303, Barra da Tijuca, Rio de Janeiro - RJ, CEP 22775-057
Horários:
- Terça e sexta: 13h às 18h
- Quarta: 8h às 18h
- Sábado: 8h às 12h
- Segunda, quinta e domingo: fechado
Mapa incorporado do Google Maps para o endereço acima.
**Carrossel de fotos do consultório:** use o componente de carrossel do shadcn/ui (já disponível no projeto) para exibir todas as fotos reais do consultório anexadas — não apenas 2 fixas lado a lado. Setas de navegação discretas e indicadores de posição (bolinhas) na cor da marca. Transição suave ao trocar de slide.
Botão: "Falar no WhatsApp" → https://wa.me/552141417099

**11. Footer**
Logo pequena. Instagram: @[instagram] (placeholder — ainda não temos o handle real, deixe como link comentado ou omita o ícone de Instagram até recebermos essa informação, para não publicar um link quebrado). Texto legal: "Dra. Elisa Carvalho — Obstetra e Ginecologista — CRM RJ 1213172 · RQE 59538". Copyright.

## Diretrizes visuais gerais
- Muito espaço em branco/creme, respiro entre seções.
- Cantos suavemente arredondados em botões e cards.
- Nada de emojis, ícones "fofos" fora do lucide-react, ou cores fora da paleta.
- Botão de WhatsApp sempre visível e com bom contraste.
- Site responsivo (mobile-first) — teste mentalmente como o Hero e a nova seção de Formação ficam em tela estreita.

## Imagens: o que usar e onde
- Retrato da Dra. Elisa: apenas na seção "Sobre".
- Todas as fotos do consultório: no carrossel da seção de Localização/Contato.
- A logo: no Header, no Footer, no favicon, e como marca d'água de baixa opacidade no Hero (conforme instrução acima). Nenhuma outra foto de banco de imagens ou gerada por IA.
- Nota: as fotos da doutora e do consultório são temporárias — uma nova sessão de fotos profissional vai substituí-las em breve.

## O que NÃO fazer
- Não criar ilustrações/SVGs originais tentando representar a logo ou conceitos abstratos — usar apenas lucide-react para ícones e a imagem real da logo para o watermark do Hero.
- Não usar fotos de pacientes reais nem "antes e depois".
- Não prometer resultados ou usar linguagem como "melhor obstetra da região" (proibido pelo CFM).
- Não inventar depoimentos ou avaliações de pacientes (a Dra. Elisa ainda não tem avaliações publicadas).
- Não adicionar seção de preços.
- Não publicar links de Instagram quebrados com placeholder visível tipo "[instagram]" — se o handle real não estiver disponível, omitir o ícone em vez de mostrar um link inválido.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://drelisacarvalho.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/73673de6-827c-484e-85d0-23e907163325).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
