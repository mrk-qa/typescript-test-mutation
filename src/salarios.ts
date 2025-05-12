export function calcularSalarioLiquido(salarioBruto: number, descontos: number[]): number {
  const totalDescontos = descontos.reduce((acc, curr) => acc + curr, 0);
  return salarioBruto - totalDescontos;
}
