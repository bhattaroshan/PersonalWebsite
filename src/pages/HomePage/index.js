import React,{useRef,useEffect,useState} from 'react'
import p5 from 'p5';
import {useNavigate} from 'react-router-dom';
import InstagramIcon from '../../assets/images/icon_instagram.png';
import GithubIcon from '../../assets/images/icon_github.png';
import FacebookIcon from '../../assets/images/icon_facebook.png';
import LeetcodeIcon from '../../assets/images/icon_leetcode.png';
import HackerrankIcon from '../../assets/images/icon_hackerrank.png';
import BookIcon from '../../assets/images/icon_books.png';

function HomePage() {
    const navigate = useNavigate();
    const sketchRef = useRef(null);
    let canvas = null;
    let p;


    useEffect(()=>{
        const sketch = new p5((sketch)=>{
            let nodes = [];
            let diameter = 60;
            let img = [];
            let categories = [
                {
                    name:"Food",
                    img:InstagramIcon,
                    url:"food",
                    color: [200,200,200],
                    external_link: false
                },
                {
                    name:"Travel",
                    img:InstagramIcon,
                    url:"travel",
                    color: [200,200,200],
                    external_link: false
                },
                {
                    name:"Books",
                    img:BookIcon,
                    url:"books",
                    color: [200,200,200],
                    external_link: false
                },
                {
                    name:"Github",
                    img:GithubIcon,
                    url:"https://github.com/bhattaroshan",
                    color: [114, 46, 209],
                    external_link: true
                },
                {
                    name:"Facebook",
                    img:FacebookIcon,
                    url:"https://www.facebook.com/roshan.bhatta2",
                    color: [59, 89, 152],
                    external_link: true
                },
                {
                    name:"Blogs",
                    img:InstagramIcon,
                    url:"blogs",
                    color: [200,200,200],
                    external_link: false
                },
                {
                    name:"Portfolio",
                    img:InstagramIcon,
                    url:"portfolio",
                    color: [200,200,200],
                    external_link: false
                },
                {
                    name:"Instagram",
                    img:InstagramIcon,
                    url:"https://www.instagram.com/roshan_bhatta_/",
                    color: [163, 32, 73],
                    external_link: true
                },
                {
                    name:"Leetcode",
                    img:LeetcodeIcon,
                    url:"https://leetcode.com/bhatta/",
                    color: [105, 0, 69],
                    external_link: true
                },
                {
                    name:"Hackerrank",
                    img:HackerrankIcon,
                    url:"https://www.hackerrank.com/bhattaroshan",
                    color: [20, 122, 75],
                    external_link: true
                },
                
            ];

            const numNodes = categories.length;

            class Node {
                constructor(x, y,i) {
                  this.x = x;
                  this.y = y;
                  this.diameter = diameter;
                  this.speedX = p.random(-1, 1)<0?-0.4:0.4;
                  this.speedY = p.random(-1, 1)<0?-0.4:0.4;
                  this.color = p.color(categories[i].color);
                  this.text = categories[i].name;
                  this.url = categories[i].url;
                  this.external_link = categories[i].external_link;
                  this.img = img[i];
                }

                display() {
                    p.stroke(this.color);
                    p.strokeWeight(1);
                    //p.fill(this.color);
                    p.noFill();
                    //p.noStroke();
                    //p.stroke(2);
                    p.ellipse(this.x, this.y, this.diameter);
                    p.fill(255);
                    p.textSize(10);
                    p.textAlign(p.CENTER,p.CENTER);
                    //p.text(this.text,this.x,this.y-this.diameter/5);
                    p.image(this.img,this.x-(this.diameter/2)/1.5,this.y-(this.diameter/2)/1.5,
                            this.diameter/1.5,this.diameter/1.5);
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
                p.background(10,10,10);

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
                        
                        let forceDist = 500;
                        if(p.width<1000){
                            forceDist = 300;
                        }
                        if (d < forceDist) {
                        p.stroke(200,200,200,80);
                        p.strokeWeight(((forceDist-d)*2.5)/forceDist);

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

            p.preload = () =>{
                for(let i=0;i<numNodes;++i){
                    img.push(p.loadImage(categories[i].img));
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
                        if(currNode.external_link)
                            window.open(currNode.url);
                        else
                            navigate(currNode.url);
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