export function IconAbjuracao(props) {
  // Escudo rúnico pesado com camadas de metal sobrepostas e runas de proteção nas bordas.
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Corpo principal do escudo */}
      <path d="M16 3L4 8v8c0 7.33 5.33 13.33 12 15 6.67-1.67 12-7.67 12-15V8l-12-5z" fill="currentColor" fillOpacity="0.1" strokeWidth="2"/>
      
      {/* Reforço interno e detalhes rúnicos */}
      <path d="M16 27c-3.67-.83-7-4.17-7-8" opacity="0.6"/>
      <path d="M16 27c3.67-.83 7-4.17 7-8" opacity="0.6"/>
      <path d="M9 13l2-1M11 11l2-1M19 13l-2-1M17 11l-2-1" opacity="0.5"/>
      <path d="M16 6l2.5 4H13.5L16 6z" fill="currentColor" fillOpacity="0.3"/>
    </svg>
  );
}

export function IconAdivinhacao(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <defs>
        {/* Gradiente para o brilho interno da esfera */}
        <radialGradient id="grad-crystal" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
        </radialGradient>
      </defs>

      {/* A Esfera (Bola de Cristal) */}
      <circle 
        cx="16" 
        cy="11" 
        r="9" 
        fill="url(#grad-crystal)" 
        strokeWidth="2"
      />
      
      {/* Reflexos de luz na superfície do vidro */}
      <path d="M12 6c-1.5 1-2 3-2 5" opacity="0.6" strokeWidth="1" />
      <path d="M21 8l1-1" opacity="0.8" strokeWidth="1.5" />

      {/* Pedestal Ornamental (Garra/Suporte) */}
      <path 
        d="M7 26c2-1 4-4 4-8M25 26c-2-1-4-4-4-8" 
        strokeWidth="1.8" 
        opacity="0.9"
      />
      
      {/* Base do Pedestal com detalhes rúnicos */}
      <path 
        d="M6 29h20l-2-3H8l-2 3z" 
        fill="currentColor" 
        fillOpacity="0.15" 
        strokeWidth="1.5"
      />
      <path d="M16 20v6M13 23h6" opacity="0.5" strokeWidth="1" />

      {/* Efeito de névoa ou visões dentro da bola */}
      <path 
        d="M13 11s1 2 3 2 3-2 3-2" 
        opacity="0.4" 
        strokeDasharray="2 2"
      />
    </svg>
  );
}

export function IconConvocacao(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <defs>
        {/* Gradiente para o brilho do vórtice central */}
        <radialGradient id="grad-portal" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.5" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
        </radialGradient>
      </defs>

      {/* Vórtice Central (O Núcleo da Conjuração) */}
      <circle 
        cx="16" 
        cy="16" 
        r="8" 
        fill="url(#grad-portal)" 
        strokeWidth="2"
      />
      <circle cx="16" cy="16" r="6" opacity="0.6" strokeDasharray="2 3" />
      
      {/* A Espiral de Energia Rápida */}
      <path 
        d="M16 16c3 0 3-4 0-4-2.5 0-2.5 2.5 0 2.5s2.5-1 0-1.5" 
        fill="currentColor" 
        fillOpacity="0.2"
      />

      {/* Anéis de Travamento Externos com Glifos de Ponto */}
      <circle cx="16" cy="16" r="14" strokeWidth="1.5" opacity="0.4" />
      <path 
        d="M6 16c0-5.52 4.48-10 10-10M26 16c0 5.52-4.48 10-10 10" 
        strokeWidth="1.8" 
        opacity="0.8"
      />
      
      {/* Glifos de Travamento Radiais (Norte, Sul, Leste, Oeste) */}
      <circle cx="16" cy="2" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="30" r="1" fill="currentColor" stroke="none" opacity="0.7"/>
      <circle cx="2" cy="16" r="1" fill="currentColor" stroke="none" opacity="0.7"/>
      <circle cx="30" cy="16" r="1" fill="currentColor" stroke="none" />

      {/* Faíscas de Energia que Saltam do Portal */}
      <path d="M7 7l3 3M25 25l2 2" opacity="0.6" strokeWidth="1" />
      <path d="M25 7l3-3M6.5 25.5l1.5-1.5" opacity="0.4" strokeWidth="1.5" />
    </svg>
  );
}

export function IconEncantamento(props) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >

      {/* Lábio superior */}
      <path
        d="M4 16c3-3.5 7-5 12-5s9 1.5 12 5"
        fill="currentColor"
        fillOpacity="0.15"
        strokeWidth="1.6"
      />

      {/* Lábio inferior */}
      <path
        d="M4 16c3 5 7 7 12 7s9-2 12-7"
        fill="currentColor"
        fillOpacity="0.12"
        strokeWidth="1.6"
      />

      {/* Linha da boca */}
      <path
        d="M6 16c2 1.2 6 2 10 2s8-.8 10-2"
        opacity="0.45"
        strokeWidth="1"
      />

      {/* brilho do lábio */}
      <path
        d="M9 12.5c1.5-1 4-1.5 6-1.5"
        opacity="0.5"
        strokeWidth="1"
      />

    </svg>
  );
}

export function IconEvocacao(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <defs>
        <linearGradient id="grad-evoc" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      
      {/* A chama de fundo que envolve o raio */}
      <path 
        d="M16 2C16 2 9 8 9 17a7 7 0 0 0 14 0c0-9-7-15-7-15z" 
        fill="url(#grad-evoc)" 
        opacity="0.6" 
      />
      
      {/* O Raio centralizado e afiado */}
      <path 
        d="M19 3L8 18h7l-2 11 11-15h-7l3-9z" 
        fill="currentColor" 
        fillOpacity="0.2" 
        strokeWidth="1.8"
      />
      
      {/* Detalhes de faíscas/calor ao redor */}
      <path d="M24 10l1-1M7 20l-1 1M26 22l1 1" opacity="0.5" />
      <circle cx="12" cy="6" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function IconIlusao(props) {
  // Um olho místico mais complexo, com pálpebras detalhadas e um padrão de íris geométrica.
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Íris geométrica e aura */}
      <circle cx="16" cy="16" r="4.5" fill="currentColor" fillOpacity="0.3" strokeWidth="2"/>
      <circle cx="16" cy="16" r="2" opacity="0.7"/>
      
      {/* Estrutura da pálpebra */}
      <path d="M2 16c0 0 6-11 14-11s14 11 14 11-6 11-14 11-14-11-14-11z" strokeWidth="2"/>
      
      {/* Detalhes rúnicos do Terceiro Olho */}
      <path d="M16 5V2M16 30v-3" opacity="0.6"/>
      <path d="M9.5 9.5L7 7M22.5 22.5l2.5 2.5" opacity="0.4"/>
    </svg>
  );
}

export function IconNecromancia(props) {
  // Uma caveira rúnica mais imponente, com órbitas oculares vazias profundas e marcas arcanas no crânio.
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Estrutura principal do crânio */}
      <path d="M12 12c0-2.33 2-4.5 4-4.5s4 2.17 4 4.5v6c0 2.33-2 4.5-4 4.5s-4-2.17-4-4.5v-6z" opacity="0.4" fill="currentColor"/>
      <path d="M6 14a10 10 0 0 1 20 0v5c0 3-4 6-9 6h-2c-5 0-9-3-9-6v-5z" strokeWidth="2"/>
      
      {/* Órbitas oculares e cavidade nasal */}
      <circle cx="11.5" cy="14.5" r="1.8" fill="currentColor" stroke="none"/>
      <circle cx="20.5" cy="14.5" r="1.8" fill="currentColor" stroke="none"/>
      <path d="M16 18c.5.5 1 .5 1.5 0l-.75-1.5z" fill="currentColor"/>
      
      {/* Detalhes rúnicos na mandíbula */}
      <path d="M13 25v3M19 25v3M16 25v3" opacity="0.7"/>
    </svg>
  );
}

export function IconTransmutacao(props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <defs>
        <linearGradient id="grad-trans-metal" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.5" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Barra de Metal (Lingote) - Base Sólida */}
      <path 
        d="M4 24l3-3h18l3 3H4z" 
        fill="url(#grad-trans-metal)" 
        strokeWidth="1.5"
      />
      <path d="M4 24v3l3 3h18l3-3v-3" opacity="0.8" />
      <path d="M25 21v3l3 3" opacity="0.6" />

      {/* Folha de Carvalho Clássica - Brotando do Metal */}
      <path 
        d="M16 4c-1 1-3 1-3 3 0 1 1 2 0 4-1 0-2-1-3 0-1 1-1 3 1 4 0 1 1 1 0 3s-3 2-2 4c5 0 3-4 7-4s2 4 7 4c1-2-2-2-2-4s1-2 0-3c2-1 2-3 1-4-1-1-2 0-3 0-1-2 0-3 0-4 0-2-2-2-3-3z" 
        fill="currentColor" 
        fillOpacity="0.2" 
        strokeWidth="1.8"
      />
      
      {/* Nervura Central da Folha */}
      <path d="M16 4v13" opacity="0.6" strokeWidth="1" />
      <path d="M16 8l-2 2M16 11l3 2M16 14l-3 1" opacity="0.4" />

      {/* Partículas de Alquimia (Poeira Estelar) */}
      <circle cx="26" cy="7" r="0.6" fill="currentColor" />
      <circle cx="6" cy="12" r="0.4" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function getSchoolIcon(escola) {

  if (!escola) return null;

  const e = escola
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

  switch (e) {

    case "abjuracao":
      return IconAbjuracao;

    case "adivinhacao":
    case "advinhacao":
      return IconAdivinhacao;

    case "convocacao":
      return IconConvocacao;

    case "encantamento":
      return IconEncantamento;

    case "evocacao":
      return IconEvocacao;

    case "ilusao":
      return IconIlusao;

    case "necromancia":
      return IconNecromancia;

    case "transmutacao":
      return IconTransmutacao;

    default:
      return null;

  }

}