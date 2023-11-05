// Carro
let carro = {
    modelo: "Fusca",
    cor: "Azul",
    velocidadeAtual: 0,
    acelerar: function () {
        this.velocidadeAtual += 10;
        document.getElementById("velocidade").textContent = this.velocidadeAtual + " km/h";
    },
    frear: function () {
        this.velocidadeAtual -= 10;
        document.getElementById("velocidade").textContent = this.velocidadeAtual + " km/h";
    },
    pintar: function (novaCor) {
        this.cor = novaCor;
        document.getElementById("cor").textContent = novaCor;
    },
    };

    function acelerarCarro() {
    carro.acelerar();
    }

    function frearCarro() {
    carro.frear();
    }

    function pintarCarro(novaCor) {
    carro.pintar(novaCor);
    }

    // Livro
    let livro = {
    titulo: "Gyo",
    autor: "Junji Ito",
    paginas: 256,
    aberto: false,
    abrir: function () {
        this.aberto = true;
    },
    fechar: function () {
        this.aberto = false;
    },
    ler: function () {
        alert("Lendo o livro: " + this.titulo);
    },
    };

    function abrirLivro() {
    livro.abrir();
    }

    function fecharLivro() {
    livro.fechar();
    }

    function lerLivro() {
    livro.ler();
    }

    // Conta Bancária
    let contaBancaria = {
    titular: "João",
    saldo: 1000,
    numeroConta: "12345",
    depositar: function () {
        this.saldo += 100;
    },
    sacar: function () {
        this.saldo -= 50;
    },
    consultarSaldo: function () {
        alert("Saldo atual: " + this.saldo + " BRL");
    },
    };

    function depositar() {
    contaBancaria.depositar();
    }

    function sacar() {
    contaBancaria.sacar();
    }

    function consultarSaldo() {
    contaBancaria.consultarSaldo();
    }

    // Rede Social
    let redeSocial = {
    usuario: "Alice",
    seguidores: 500,
    publicacoes: 100,
    publicarPost: function () {
        this.publicacoes++;
    },
    seguirUsuario: function (nomeUsuario) {
        alert("Seguindo " + nomeUsuario);
    },
    verFeed: function () {
        alert("Visualizando o feed de " + this.usuario);
    },
    };

    function publicarPost() {
    redeSocial.publicarPost();
    document.getElementById("publicacoes").textContent = redeSocial.publicacoes;
    }

    function seguirUsuario(nomeUsuario) {
    redeSocial.seguirUsuario(nomeUsuario);
    redeSocial.seguidores++;
    document.getElementById("seguidores").textContent = redeSocial.seguidores;
    }

    function verFeed() {
    redeSocial.verFeed();
    }