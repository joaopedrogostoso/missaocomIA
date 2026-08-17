const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Voce foi aprovado em um grande clube . o que voce faz ?",
        alternativas: [
            {
                texto: "Aceitar a proposta",
                afirmacao: "Voce aceitou a oportunidade de começar sua carreira em um grande clube. "
            },
            {
                texto: "Recusar proposta",
                afirmacao: "Voce decidiu esperar por uma oportunidade que combinasse mais com seus objetivos."
            }
        ]
    },
    {
        enunciado: "Como voce encara o treinamentos?",
        alternativas: [
            {
                texto: "Treinar com dedicação.",
                afirmacao: "Voce treinou diariamente e evoluiu a cada temporada."
            },
            {
                texto: "Treinar apenas o necessário.",
                afirmacao: "Voce preferiu manter uma rotina mais leve durante os treinamentos."
            }
        ]
    },
    {
        enunciado: "Surge uma proposta para jogar no exterior. Voce aceita ou fica no clube?",
        alternativas: [
            {
                texto: "Aceitar.",
                afirmacao: "Voce aceitou o desafio de jogar em outro país e ganhou experiencia internacional."
            },
            {
                texto: "Permanecer no clube.",
                afirmacao: "Voce escolheu prrmanecer no clube onde costruiu sua história."
            }
        ]
    },
    {
        enunciado: "Voce é escolhido para cobrar o penalti da final",
        alternativas: [
            {
                texto: "Cobrar o penalti.",
                afirmacao: "Voce asumiu a responsabilidade no momento mai importante da partida."
            },
            {
                texto: "Passar a responsabilidade",
                afirmacao: "Voce confiou a cobrança a um companheiro de equipe"
            }
        ]
    },
    {
        enunciado: "Sua carreira está chgando ao fim. O que voce faz agora? ",
        alternativas: [
            {
                texto: "Virar treinador",
                afirmacao: "Voce decidiu continuar no futebol formando novos talentos"
            },
            {
                texto: "Apoentar-se",
                afirmacao: "Voce encerrou sua carreira e passou a aproveitar uma nova fase da vida. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();