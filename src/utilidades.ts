export function formatarMoeda(valor: number): string {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function definirCategoriaIdade(idade: number): string {
  switch (true) {
    // Criança: entre 0 e 12 anos
    case (idade < 13):
      return 'criança';
    // Adolescente: entre 13 e 17 anos
    case (idade < 18):
      return 'adolescente';
    // Adulto: entre 18 e 59 anos
    case (idade <= 60):
      return 'adulto';
    // Idoso: 60 anos ou mais
    default:
      return 'idoso';
  }
}

