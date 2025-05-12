export function calcularImposto(salario: number): number {
  const aliquota = 0.01788;
  return salario * aliquota;
}
