# GUIA_CLIENTE

## Como alterar o texto principal (Copy)
- Abra `js/data.js`.
- Edite `DATA.hero.headline`, `DATA.hero.subheadline` e `DATA.hero.cta`.

## Como substituir imagem ou video no Hero
- Ainda em `js/data.js`, edite `DATA.hero.media`.
- Para imagem: use `type: 'image'`, troque `src` e `alt`.
- Para video: use `type: 'video'`, troque `src` e opcionalmente `poster`.
- Voce pode usar caminho local (ex: `./assets/hero.jpg`) ou URL.

## Como editar listas (cards)
- Logos: `DATA.logos`
- Para logos, use `logo` com URL ou caminho local (ex: `./assets/nome.png`).
- Dores: `DATA.pains`
- Modulos: `DATA.modules`
- Depoimentos: `DATA.testimonials` (inclui `avatar`)
- Bonus: `DATA.bonuses`
- FAQ: `DATA.faq`

## Como alterar preco e garantia
- Edite `DATA.pricing`.
  - Para o botao de oferta, edite `DATA.pricing.offerCta`.
- Para planos, edite `DATA.pricing.plans`.
  - Use `priceNow` e `priceBefore` para exibir preco atual e antes.

## Como alterar o contador regressivo
- Edite `DATA.countdownEnd` no formato ISO (ex: `2026-02-01T23:59:59-03:00`).
  - O botao do contador fica em `js/render.js` com o texto "Aproveitar oferta".
