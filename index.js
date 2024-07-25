function calcularNivel(vitorias, derrotas) {
    const saldo = vitorias - derrotas;

    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}


const vitoriasJogador = 75;
const derrotasJogador = 20;
const nivelJogador = calcularNivel(vitoriasJogador, derrotasJogador);

console.log(`O Herói tem saldo de ${vitoriasJogador - derrotasJogador} e está no nível de ${nivelJogador}`);
