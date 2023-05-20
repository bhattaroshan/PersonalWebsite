import React,{useRef,useEffect,useState} from 'react'
import p5 from 'p5';
import {useNavigate} from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    const sketchRef = useRef(null);
    let canvas = null;
    let p;


    useEffect(()=>{
        const sketch = new p5((sketch)=>{
            let nodes = [];
            let diameter = 55;
            const numNodes = 10;
            let categories = [
                "Food","Travel","Books","Drive","Passion","Educator",
                "Coder","?","Music","Curious"
            ];

            class Node {
                constructor(x, y,i) {
                  this.x = x;
                  this.y = y;
                  this.diameter = diameter;
                  this.speedX = p.random(-1, 1);
                  this.speedY = p.random(-1, 1);
                  this.color = p.color(p.random(0,50), p.random(100,150), p.random(100,200));
                  this.text = categories[i];
                }

                display() {
                    p.fill(this.color);
                    p.noStroke();
                    p.ellipse(this.x, this.y, this.diameter);
                    p.fill(255);
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
            
                    if ((this.x-this.diameter/2) < 0 || (this.x+this.diameter/2) > p.width) {
                        this.speedX *= -1;
                        }
            
                    if ((this.y-this.diameter/2) <= 0 || (this.y+this.diameter/2) > p.height) {
                        this.speedY *= -1;
                        }
                    }
                }

            p = sketch;
            p.setup = () =>{
                canvas = p.createCanvas(p.windowWidth,p.windowHeight*0.92).parent(sketchRef.current);
                for (let i = 0; i < numNodes; i++) {
                    let x = 0;
                    let y = 0;
                    let newPos = true;

                    while(newPos){
                        newPos = false;
                        x = p.random(diameter,p.width-diameter);
                        y = p.random(diameter,p.height-diameter);
                        for(let i=0;i<nodes.length;i++){
                            const node = nodes[i];
                            const d = p.dist(node.x,node.y,x,y);
                            if(d<=node.diameter){
                                newPos = true;
                                break;
                            }
                        }
                    }
                   


                    nodes.push(new Node(x, y,i));
                  }
            }

            p.draw = () =>{
                p.background(230,230,230);

                for (let i = 0; i < nodes.length; i++) {
                    const nodeA = nodes[i];
                    for (let j = i + 1; j < nodes.length; j++) {
                        const nodeB = nodes[j];
                        const d = p.dist(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
                        if(d<nodeA.diameter){
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

            p.mousePressed = () =>{
                for(let i=0;i<numNodes;++i){
                    let currNode = nodes[i];
                    if(p.abs(p.mouseX-currNode.x)<currNode.diameter/2 && 
                      p.abs(p.mouseY-currNode.y)<currNode.diameter/2){
                        if(currNode.text=="Travel"){
                            navigate("travel");
                        }else if(currNode.text=="Books"){
                            navigate("books");
                        }
                      }
                }
            }
        })

        if(canvas){
            p.resizeCanvas(window.innerWidth,window.innerHeight*0.92);
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