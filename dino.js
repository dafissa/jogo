





//dino /O personagem principal do jogo, que pode saltar para evitar obstáculos.
let dinoWidth = 88; //- Largura do dinossauro em 88 pixels.
let dinoHeight = 94; //- Altura do dinossauro em 94pixels;
let dinoX = 50; //- Posição horizontal inicial do dinossauro, localizada em 50 pixels à direita.
let dinoY = boardHeight - dinoHeight; //- Define a posição vertical inicial do dinossauro, 
let dinoImg;//- Declaração de variável que armazenará a imagem do dinossauro.

let dino = {
    x : dinoX,
    y : dinoY,
    width : dinoWidth,
    height : dinoHeight
}

//cactus /Obstáculos gerados aleatoriamente que se movem para a esquerda.
let cactusArray = []; //- Um array vazio é criado para armazenar os cactos que vão aparecer

let cactus1Width = 34;
let cactus2Width = 69;
let cactus3Width = 102;

let cactusHeight = 70; //- Todos tem a mesma altura de 70 pixels.
let cactusX = 700; //- Os cactos começam na posição horizonta 700, longe do dinossauro.
let cactusY = boardHeight - cactusHeight; //- A posição vertical (cactusY) é calculada

let cactus1Img;
let cactus2Img; //- Declaramos as variáveis que irão armazenar as imagens dos três tipos
let cactus3Img;

//physics
let velocityX = -8; //- Define a velocidade horizontal dos cactos.
let velocityY = 0; //- é a velocidade vertical do dinossauro,que é usada no salto.
let gravity = .4; //- adiciona um efeito de gravidade,puxando o dinossauro para o chão.

let gameOver = false; //- INDICA QUE O JOGO AINDA NÃO ACABOU.
let score = 0; //- indica que a pontuação começa em 0.

window.onload = function() {
    board = document.getElementById("board"); //- esse trecho executa quando a página é
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d"); //- usado para desenhar no quadro.

    //desenhe o dinossauro inicial
    //context.fillStyle="green";
    //context.fillRect(dino.x, dino.y, dino.width, dino.height);

    dinoImg = new Image(); //cria um novo objeto Image, que será usado para armazenar
    dinoImg.scr = "https://github.com/ImKennyYip/chrome-dinosaur-game/blob/master/img/dino.png?raw=true&quot"; 
    dinoImg.onload = function() {
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
    }

    cactus1Img = new Image();
    cactus1Img.src = "https://github.com/ImKennyYip/chrome-dinosaur-game/blob/master/img/big-cactus1.png?raw=true&quot";

    cactus2Img = new Image();
    cactus2Img.src = "https://github.com/ImKennyYip/chrome-dinosaur-game/blob/master/img/big-cactus2.png?raw=true&quot";

    cactus3Img = new Image();
    cactus3Img.src = "https://github.com/ImKennyYip/chrome-dinosaur-game/blob/master/img/big-cactus3.png?raw=true&quot";

    requestAnimationFrame(update); //- inicio do loop de atualizações
    setInterval(placeCactus, 1000); //config do intervalo para add cactos
    document.addEventListener("keydown", moveDino); //adição do evento de teclado
} 

