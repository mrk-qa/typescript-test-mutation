import { formatarMoeda, definirCategoriaIdade } from '../src/utilidades';

describe('Funções utilitárias', () => {
  it('formata número como moeda', () => {
    expect(formatarMoeda(1234.56)).toBe('R$ 1.234,56');
  });

  it.each([
    [5, 'criança'],
    [13, 'adolescente'],
    [30, 'adulto'],
    [75, 'idoso'],
  ])('classifica corretamente a idade %i como %s', (idade, esperado) => {
    expect(definirCategoriaIdade(idade)).toBe(esperado);
  });
});
