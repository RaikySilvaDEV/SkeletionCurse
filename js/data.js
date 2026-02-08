const DATA = {
  hero: {
    badge: 'Turma ao vivo - inicio imediato',
    headline: 'Formacao Landing Pages que Convertem',
    subheadline:
      'Um curso completo para criar paginas de venda modernas, claras e com alta conversao usando HTML, JS e Tailwind via CDN.',
    cta: 'Quero entrar agora',
    media: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      alt: 'Equipe criando landing page no notebook',
    },
    highlights: [
      'Copy e estrutura pensadas para conversao',
      'Componentes prontos para reuso rapido',
      'Feedback semanal e comunidade ativa',
    ],
    stats: [
      { label: 'Aulas', value: '42' },
      { label: 'Horas', value: '18h' },
      { label: 'Projetos', value: '6' },
    ],
  },
  logos: [
    {
      name: 'Google',
      logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg',
    },
    {
      name: 'Netflix',
      logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/netflix.svg',
    },
    {
      name: 'Spotify',
      logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg',
    },
    {
      name: 'Amazon',
      logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazon.svg',
    },
    {
      name: 'Microsoft',
      logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg',
    },
    {
      name: 'Adobe',
      logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/adobe.svg',
    },
  ],
  pains: [
    {
      title: 'Baixa conversao',
      description:
        'Voce investe em trafego, mas a pagina nao guia o visitante ate a compra.',
    },
    {
      title: 'Layout confuso',
      description:
        'Informacoes importantes ficam escondidas e a decisao do aluno trava.',
    },
    {
      title: 'Processo lento',
      description:
        'Sem um metodo claro, cada nova pagina vira um projeto do zero.',
    },
  ],
  modules: [
    {
      title: 'Fundamentos de conversao',
      description: 'Arquitetura de pagina, hierarquia visual e microdecisoes.',
      topics: ['Mapa de jornada', 'Gatilhos de clareza', 'Proposta de valor'],
    },
    {
      title: 'Copy e estrutura',
      description: 'Como escrever titulos, provas e CTAs que funcionam.',
      topics: ['Headline poderosa', 'Beneficios vs recursos', 'Objecoes'],
    },
    {
      title: 'UI moderna com Tailwind',
      description: 'Componentes reutilizaveis e layout responsivo.',
      topics: ['Cards e grids', 'Espacamento', 'Sistema visual'],
    },
    {
      title: 'JS para paginas vivas',
      description: 'Acordeao, contadores e renderizacao via dados.',
      topics: ['Arquitetura limpa', 'Modularizacao', 'Boas praticas'],
    },
  ],
  testimonials: [
    {
      name: 'Marina Dias',
      role: 'Designer de produto',
      avatar:
        'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=160&h=160&q=70',
      quote:
        'Consegui entregar uma landing completa em dois dias e a conversao subiu muito.',
    },
    {
      name: 'Felipe Rocha',
      role: 'Freelancer',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=70',
      quote:
        'O metodo do curso me deu um passo a passo que economiza horas a cada projeto.',
    },
    {
      name: 'Luana Costa',
      role: 'Gestora de marketing',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=70',
      quote:
        'A estrutura de provas e bonus elevou a confianca dos nossos alunos.',
    },
  ],
  bonuses: [
    {
      title: 'Pack de templates editaveis',
      description: 'Layouts prontos para reaproveitar em novos projetos.',
    },
    {
      title: 'Checklist de conversao',
      description: 'Um guia rapido para revisar cada etapa da pagina.',
    },
    {
      title: 'Biblioteca de blocos',
      description: 'Componentes prontos para acelerar entregas.',
    },
  ],
  faq: [
    {
      question: 'Para quem e este curso?',
      answer:
        'Para designers, devs e profissionais de marketing que querem criar paginas de venda claras e modernas.',
    },
    {
      question: 'Preciso saber programar?',
      answer:
        'Conhecimentos basicos de HTML e JS ajudam, mas o curso guia passo a passo.',
    },
    {
      question: 'Por quanto tempo tenho acesso?',
      answer:
        'O acesso e por 12 meses com atualizacoes durante o periodo.',
    },
    {
      question: 'Tem garantia?',
      answer:
        'Sim. Voce pode pedir reembolso total em ate 7 dias.',
    },
  ],
  countdownEnd: '2026-02-20T23:59:59-03:00',
  pricing: {
    price: 'R$ 997',
    installment: 'ou 12x de R$ 97,50',
    guarantee: 'Garantia total de 7 dias.',
    offerCta: 'Quero a oferta',
    includes: [
      'Aulas gravadas e ao vivo',
      'Templates e checklists',
      'Comunidade exclusiva',
      'Certificado de conclusao',
    ],
    plans: [
      {
        name: 'Basico',
        priceNow: 'R$ 497',
        priceBefore: 'R$ 697',
        description: 'Para quem quer aprender o essencial.',
        features: ['Aulas gravadas', 'Checklist de conversao', 'Certificado'],
        cta: 'Quero o Basico',
      },
      {
        name: 'Pro',
        priceNow: 'R$ 997',
        priceBefore: 'R$ 1297',
        description: 'A experiencia completa do curso.',
        features: [
          'Tudo do Basico',
          'Aulas ao vivo',
          'Templates editaveis',
          'Comunidade exclusiva',
        ],
        cta: 'Quero o Pro',
      },
      {
        name: 'Mentoria',
        priceNow: 'R$ 1497',
        priceBefore: 'R$ 1897',
        description: 'Acompanhamento direto e revisoes.',
        features: [
          'Tudo do Pro',
          'Mentorias em grupo',
          'Revisao de landing',
          'Prioridade no suporte',
        ],
        cta: 'Quero Mentoria',
      },
    ],
  },
};

window.DATA = DATA;
