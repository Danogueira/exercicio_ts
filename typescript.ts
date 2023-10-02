function multiplicacao(a: number, b: number): number {
    return a * b;
}


function saudacao(nome: string): string {
    return `Olá ${nome}`;
}


const resultadoMultiplicacao: number = multiplicacao(5, 10);
const mensagemSaudacao: string = saudacao("João");

console.log("Resultado da multiplicação:", resultadoMultiplicacao); 
console.log(mensagemSaudacao); 
