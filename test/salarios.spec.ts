import { calcularSalarioLiquido } from '../src/salarios';

describe('Funções de salário', () => {
  it('calcula salário líquido com descontos', () => {
    const salarioBruto = 5000;
    const descontos = [500, 200, 300];
    expect(calcularSalarioLiquido(salarioBruto, descontos)).toBe(4000);
  });
});
