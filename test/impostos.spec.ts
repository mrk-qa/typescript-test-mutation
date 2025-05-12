import { calcularImposto } from '../src/impostos';

describe('Funções de impostos', () => {
  it('calcula imposto corretamente', () => {
    expect(calcularImposto(2500)).toBeCloseTo(44.7, 1);
  });
});
