export function IconAbjuracao(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z"/>
    </svg>
  );
}

export function IconAdivinhacao(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="10" r="6"/>
      <path d="M8 16h8"/>
      <path d="M6 20h12"/>
    </svg>
  );
}

export function IconConvocacao(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 12c4 0 4-6 0-6-3 0-3 4 0 4 2 0 2-2 0-2"/>
    </svg>
  );
}

export function IconEncantamento(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 3v4"/>
      <path d="M12 17v4"/>
      <path d="M3 12h4"/>
      <path d="M17 12h4"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  );
}


export function IconEvocacao(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/>
    </svg>
  );
}

export function IconIlusao(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  );
}

export function IconNecromancia(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 3a7 7 0 00-7 7v3a3 3 0 003 3h1v3h2v-3h2v3h2v-3h1a3 3 0 003-3v-3a7 7 0 00-7-7z"/>
      <circle cx="9" cy="11" r="1"/>
      <circle cx="15" cy="11" r="1"/>
    </svg>
  );
}

export function IconTransmutacao(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M20 4C12 4 4 8 4 16c0 3 2 4 4 4 8 0 12-8 12-16z"/>
      <path d="M4 16c4-2 8-4 12-12"/>
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