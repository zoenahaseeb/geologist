const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, iron,rubber,hammer;
var sand1, sand2, sand3, sand4,sand5,sand6,sand7,sand8,sand9,sand10;
var sand11, sand12, sand13, sand14,sand15,sand16,sand17,sand18,sand19,sand20;


function setup(){
    var canvas = createCanvas(1350,655);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    stone = new Stone(700,320,100,100);
    iron = new Iron(300,350);
    rubber=new Rubber(900,450,70);
    hammer = new Hammer(10,100);

    sand1 = new Sand(350,450,10);
    sand2 = new Sand(420,450,10);
    sand3 = new Sand(360,450,10);
    sand4 = new Sand(510,450,10);
    sand5 = new Sand(435,450,10);
    sand6 = new Sand(320,445,10);
    sand7 = new Sand(550,445,10);
    sand8 = new Sand(455,445,10);
    sand9 = new Sand(340,445,10);
    sand10 = new Sand(300,445,10);

	sand11 = new Sand(530,450,10);
    sand12 = new Sand(445,450,10);
    sand13 = new Sand(330,450,10);
    sand14 = new Sand(525,450,10);
    sand15 = new Sand(530,450,10);
    sand16 = new Sand(425,455,10);
    sand17 = new Sand(530,455,10);
    sand18 = new Sand(515,455,10);
    sand19 = new Sand(380,455,10);
    sand20 = new Sand(485,455,10);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone.display();
    plane.display();
    iron.display();
    rubber.display();
    hammer.display();

    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
    sand8.display();
    sand9.display();
    sand10.display();

	sand11.display();
    sand12.display();
    sand13.display();
    sand14.display();
    sand15.display();
    sand16.display();
    sand17.display();
    sand18.display();
    sand19.display();
    sand20.display();
}
