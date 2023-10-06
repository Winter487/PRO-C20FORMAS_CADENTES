//criação
//mecanismo
const Engine = Matter.Engine;
//mundo
const World = Matter.World;
//corpos
const Bodies = Matter.Bodies;
//corpo
const Body = Matter.Body;

let engine;
let world;
let ball;
let ground;
let rock;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();

    world = engine.world;

    //criar chão

    var ground_opitions = {
        isStatic: true
    };

    ground = Bodies.rectangle(200, 390, 400, 20, ground_opitions)
    World.add(world, ground);

    //bola
    var ball_opitions = {

        restituition: 0.95,
        frictionAir:0.01
    }

    ball = Bodies.circle(210,10,10,ball_opitions);
    World.add(world,ball);

    //preda
    var rock_options = {
        restituition: 0.7,
        friction:0.01,
        frictionAir:0.1
    };

    rock = Bodies.rectangle(110,50,10,10,rock_options);
    World.add(world,rock);
}


function draw() 
{
    background(51);
    Engine.update(engine);

    ellipse(ball.position.x,ball.position.y, 20);
    ellipse(rock.position.x,rock.position.y, 20);

    rect(ground.position.x,ground.position.y,400, 20);


    rectMode(CENTER);
    ellipseMode(RADIUS);

}

