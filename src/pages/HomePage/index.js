import React,{useRef,useEffect,useState} from 'react'
import p5 from 'p5';

function HomePage() {
    const sketchRef = useRef(null);
    let canvas = null;
    let p;


    useEffect(()=>{
        const sketch = new p5((sketch)=>{
            let nodes = [];
            const numNodes = 10;
            let categories = [
                "Food","Travel","Books","Drive","Passion","Educator",
                "Coder","?","Music","Curious"
            ];

            class Node {
                constructor(x, y,i) {
                  this.x = x;
                  this.y = y;
                  this.radius = 55;
                  this.speedX = p.random(-2, 2);
                  this.speedY = p.random(-2, 2);
                  this.color = p.color(p.random(0,50), p.random(50,100), p.random(100,200),70);
                  this.text = categories[i];
                }

                display() {
                    p.fill(this.color);
                    p.noStroke();
                    p.ellipse(this.x, this.y, this.radius);
                    p.fill(0);
                    if(this.text==="?"){
                        p.textSize(25);
                    }else{
                        p.textSize(12);
                    }
                    p.textAlign(p.CENTER,p.CENTER);
                    p.text(this.text,this.x,this.y);
                  }
          
                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;
            
                    if (this.x < 0 || this.x > p.width) {
                        this.speedX *= -1;
                        }
            
                    if (this.y < 0 || this.y > p.height) {
                        this.speedY *= -1;
                        }
                    }
                }

            p = sketch;
            p.setup = () =>{
                canvas = p.createCanvas(p.windowWidth,p.windowHeight*0.9).parent(sketchRef.current);
                for (let i = 0; i < numNodes; i++) {
                    let x = p.random(p.width);
                    let y = p.random(p.height);
                    let newPos = true;

                    while(newPos){
                        newPos = false;
                        for(let i=0;i<nodes.length;i++){
                            const node = nodes[i];
                            const d = p.dist(node.x,node.y,x,y);
                            if(d<=node.radius*3){
                                newPos = true;
                                break;
                            }
                        }
                        x = p.random(p.width);
                        y = p.random(p.height);
                    }
                   


                    nodes.push(new Node(x, y,i));
                  }
            }

            p.draw = () =>{
                p.background(230,230,230);

                  // Draw edges between nodes
                for (let i = 0; i < nodes.length; i++) {
                    const nodeA = nodes[i];
                    for (let j = i + 1; j < nodes.length; j++) {
                        const nodeB = nodes[j];
                        const d = p.dist(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
                        if(d<nodeA.radius){
                        nodeA.speedX *= -1;
                        nodeA.speedY *= -1;
                        nodeB.speedX *= -1;
                        nodeB.speedY *= -1;
                        }
                        const forceDist = 300;
                        if (d < forceDist) {
                        p.stroke(50,50,100,80);
                        p.strokeWeight(((forceDist-d)*4)/forceDist);
                        p.line(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
                        }
                    }
                }

                for (let i = 0; i < nodes.length; i++) {
                    const node = nodes[i];
                    node.display();
                    node.update();
                  }
            }

            p.windowResized = () =>{
                p.resizeCanvas(p.windowWidth,p.height);
            }
        })

        if(canvas){
            p.resizeCanvas(window.innerWidth,p.height);
        }

        return ()=>{
            sketch.remove();
        }

    },[])
    
    return (
        <div ref={sketchRef}>

        </div>
    )
}

export default HomePage;