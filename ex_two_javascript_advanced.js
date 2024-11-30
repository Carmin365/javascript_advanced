function gerarContador() {
    let contador = 0;
    return function() {
        return contador++;
    };
}

const meuContador = gerarContador();
console.log(meuContador()); // 0
console.log(meuContador()); // 1