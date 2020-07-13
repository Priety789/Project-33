var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world, engine;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle = null;

var divisionHeight = 300;
var score = 0; 
var turn = 0;

var gameState = "play";

function setup() {
    createCanvas(800, 800);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width / 2, height - 15, width, 30);

    for (var k = 0; k <= width; k = k + 80) {
         divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight));
    }


    for (var j = 75; j <= width; j = j + 50) {
       plinkos.push(new Plinko(j, 75, 10));
    }

    for (var j = 50; j <= width - 10; j = j + 50) {
       plinkos.push(new Plinko(j, 175, 10));
    }

    for (var j = 75; j <= width; j = j + 50) {
       plinkos.push(new Plinko(j, 275, 10));
    }

    for (var j = 50; j <= width - 10; j = j + 50) {
       plinkos.push(new Plinko(j, 375, 10));
    }

    Engine.run(engine);
}

function draw() {
    background("black");

    fill(255);
    textSize(20)

    text("Score : " + score, 20, 30);

    text("50", 30, 530);
    text("50", 750, 530);
    text("100", 100, 530);
    text("100", 660, 530);
    text("150", 180, 530);
    text("150", 580, 530);
    text("200", 260, 530);
    text("200", 500, 530);
    text("250", 340, 530);
    text("250", 420, 530);

    for (var k = 0; k < divisions.length; k++) {
        divisions[k].display();
    }

    ground.display();
 
    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();
    }

    for (var j = 0; j < particles.length; j++) {
        particles[j].display();
    }

    if (particle !== null) {
        particle.display();
        playerScore();
    }

    playerScore();

    endGame();

    drawSprites();
}

function mousePressed() {
    particle = new Particle(mouseX, 10, 10);
    particle.display();
}

function playerScore() {
    if (particle.body.position.y > 530) {
        if (particle.body.position.x < 80) {
            if (particle.body.position.x > 0) {
                score = score + 50;
                turn++;
            }
        }
    }

    if (particle.body.position.y > 530) {
        if (particle.body.position.x < 160) {
            if (particle.body.position.x > 80) {
                score = score + 100;
                turn++;
            }
        }
    }

    if (particle.body.position.y > 530) {
        if (particle.body.position.x < 240) {
            if (particle.body.position.x > 160) {
                score = score + 150;
                turn++;
            }
        }
    }

    if (particle.body.position.y > 530) {
        if (particle.body.position.x < 320) {
            if (particle.body.position.x > 240) {
                score = score + 200;
                turn++;
            }
        }
    }

    if (particle.body.position.y > 530) {
        if (particle.body.position.x < 400) {
            if (particle.body.position.x > 320) {
                score = score + 250;
                turn++;
            }
        }
    }

    if (particle.body.position.y > 530) {
        if (particle.body.position.x < 480) {
            if (particle.body.position.x > 400) {
                score = score + 250;
                turn++;
            }
        }
    }

    if (particle.body.position.y > 530) {
        if (particle.body.position.x < 560) {
            if (particle.body.position.x > 480) {
                score = score + 200;
                turn++;
            }
        }
    }

    if (particle.body.position.y > 530) {
        if (particle.body.position.x < 640) {
            if (particle.body.position.x > 560) {
                score = score + 150;
                turn++;
            }
        }
    }

    if (particle.body.position.y > 530) {
        if (particle.body.position.x < 720) {
            if (particle.body.position.x > 640) {
                score = score + 100;
                turn++;
            }
        }
    }

    if (particle.body.position.y > 530) {
        if (particle.body.position.x < 800) {
            if (particle.body.position.x > 720) {
                score = score + 50;
                turn++;
            }
        }
    }
}

function endGame() {
    if (turn === 5) {
        gameState === "end";
    }

    if (gameState === "end") {
        particles.body.options.isStatic = true;
        text("GAME OVER!", 350, 400);
    }
}