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
                afirmacao: [
                "Voce aceitou a oportunidade de começar sua carreira em um grande clube. ",
                "Você aproveitou a oportunidade de iniciar sua trajetória profissional em um clube de grande destaque.",
                "Você recebeu a oportunidade de dar o primeiro passo na sua carreira em um clube de grande prestígio."
            ]
            },
            {
                texto: "Recusar proposta",
                afirmacao: [
                    "Voce decidiu esperar por uma oportunidade que combinasse mais com seus objetivos.",
                    "Você escolheu esperar pelo momento certo e por uma oportunidade que estivesse alinhada aos seus objetivos.",
                    "Você optou por aguardar uma oportunidade que estivesse de acordo com seus planos e ambições profissionais."
                ]
            }
        ]
    },
    {
        enunciado: "Como voce encara o treinamentos?",
        alternativas: [
            {
                texto: "Treinar com dedicação.",
                afirmacao:
                ["Voce treinou diariamente e evoluiu a cada temporada.",
                "Você manteve uma rotina constante de treinos e se tornou um jogador cada vez melhor a cada temporada.",
                "Você se dedicou aos treinos todos os dias e alcançou uma evolução significativa a cada temporada."
            ]
            },
            {
                texto: "Treinar apenas o necessário.",
                afirmacao: 
                ["Voce preferiu manter uma rotina mais leve durante os treinamentos.",
                           "Você trabalhou duro em cada treino e evoluiu constantemente ao longo das temporadas.",
                           "Você se dedicou intensamente em cada temporada e percebeu sua evolução a cada novo desafio."
            ]
            }
        ]
    },
    {
        enunciado: "Surge uma proposta para jogar no exterior. Voce aceita ou fica no clube?",
        alternativas: [
            {
                texto: "Aceitar.",
                afirmacao: [
                    "Voce aceitou o desafio de jogar em outro país e ganhou experiencia internacional.",
                           "Você abraçou a oportunidade de atuar no exterior e conquistou uma valiosa experiência internacional.",
                           "Você encarou o desafio de jogar fora do país e ampliou sua experiência e visão no futebol internacional."
            ]
            },
            {
                texto: "Permanecer no clube.",
                afirmacao: [
                    "Voce escolheu prrmanecer no clube onde costruiu sua história.",
                    "Você decidiu permanecer no clube onde construiu sua trajetória e deixou sua marca.",
                    "Você escolheu continuar no clube onde viveu grandes momentos e construiu uma história de sucesso."
            ]
            }
        ]
    },
    {
        enunciado: "Voce é escolhido para cobrar o penalti da final",
        alternativas: [
            {
                texto: "Cobrar o penalti.",
                afirmacao: [
                    "Voce asumiu a responsabilidade no momento mai importante da partida.",
                    "Você assumiu a responsabilidade quando o jogo mais precisava de você e fez a diferença no momento decisivo.",
                    "Você teve coragem para assumir a responsabilidade e decidir a partida no momento mais importante."
            ]
            },
            {
                texto: "Passar a responsabilidade",
                afirmacao: [
                    "Voce confiou a cobrança a um companheiro de equipe",
                    "Você confiou a cobrança a um companheiro de equipe e demonstrou confiança no potencial dele.",
                    "Você escolheu confiar a cobrança ao seu companheiro e mostrou que acredita na força da equipe."
            ]
            }
        ]
    },
    {
        enunciado: "Sua carreira está chgando ao fim. O que voce faz agora? ",
        alternativas: [
            {
                texto: "Virar treinador",
                afirmacao: [
                    "Voce decidiu continuar no futebol formando novos talentos",
                    "Você decidiu permanecer no futebol e passou a dedicar sua experiência à formação de novos talentos.",
                    "Você escolheu seguir no futebol, ajudando a preparar e desenvolver a próxima geração de talentos."
            ]
            },
            {
                texto: "Apoentar-se",
                afirmacao: [
                    "Voce encerrou sua carreira e passou a aproveitar uma nova fase da vida. ",
                    "Você encerrou sua carreira no futebol e começou a desfrutar de uma nova e especial fase da sua vida.",
                    "Você decidiu encerrar sua carreira e abraçou com tranquilidade e entusiasmo um novo capítulo da sua vida."
            ]
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
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

function aleatorio (Lista){
    const posicao = Math.floor(Math.random()* Lista.lenght);
    return Lista[posicao];
}
mostraPergunta():