import React,{useRef,useEffect,useState} from 'react'
import p5 from 'p5';

function HomePage() {
    const sketchRef = useRef(null);
    let canvas = null;
    let p;


    useEffect(()=>{
        const sketch = new p5((sketch)=>{
            let nodes = [];
            const numNodes = 20;

            class Node {
                constructor(x, y) {
                  this.x = x;
                  this.y = y;
                  this.radius = 25;
                  this.speedX = p.random(-2, 2);
                  this.speedY = p.random(-2, 2);
                  this.color = p.color(p.random(0,50), p.random(50,100), p.random(100,200));
                }

                display() {
                    p.fill(this.color);
                    p.noStroke();
                    p.ellipse(this.x, this.y, this.radius);
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
                canvas = p.createCanvas(p.windowWidth,400).parent(sketchRef.current);
                for (let i = 0; i < numNodes; i++) {
                    const x = p.random(p.width);
                    const y = p.random(p.height);
                    nodes.push(new Node(x, y));
                  }
            }

            p.draw = () =>{
                p.background(25,25,25);
                //p.ellipse(p.mouseX,p.mouseY,50,50);

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

                      if (d < 100) {
                        p.stroke(128,128,128);
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
                p.resizeCanvas(p.windowWidth,400);
            }
        })

        if(canvas){
            p.resizeCanvas(window.innerWidth,400);
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