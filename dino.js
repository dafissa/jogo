





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
let cactusY = boardHeight - cactusHeight; //- 

