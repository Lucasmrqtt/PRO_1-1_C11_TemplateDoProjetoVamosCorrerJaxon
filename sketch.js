var path,boy, leftBoundary,rightBoundary;
var pathImg,boyrunning;
var i;


function preload(){
pathImg = loadImage("path.png");
boyrunning = loadAnimation("Runner-1.png","Runner-2.png");
}


function setup(){
 createCanvas(600,400);

//criando chão
path = createSprite (300,200)
path.addImage ("ground",pathImg)
path.scale = 1

//Criando menino que corre 
boy = createSprite(300,340,10,10);
boy.addAnimation('Running',boyrunning);
boy.scale = 0.08



// Movendo o fundo 
path.velocityY = 4;

// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(-290,200,900,800);
leftBoundary.visible = false;


//Crie Boundary direito 

rightBoundary=createSprite (700,200,500,800);
rightBoundary.visible = false;
}



function draw() {
background(0);

// Menino se movendo no eixo X com o mouse
boy.x = mouseX


edges= createEdgeSprites();



boy.collide(rightBoundary);
boy.collide(leftBoundary);


 //Reiniciar o fundo
 if (path.y > 400) {
    path.y = height/2
}


text("X: "+mouseX+" / Y: "+ mouseY,mouseX,mouseY)

 drawSprites();

 }




