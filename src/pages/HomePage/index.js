import React,{useRef,useEffect,useState} from 'react'
import p5 from 'p5';
import {useNavigate} from 'react-router-dom';
import InstagramIcon from '../../assets/images/icon_instagram.png';
import GithubIcon from '../../assets/images/icon_github.png';
import FacebookIcon from '../../assets/images/icon_facebook.png';
import LeetcodeIcon from '../../assets/images/icon_leetcode.png';
import HackerrankIcon from '../../assets/images/icon_hackerrank.png';
import BookIcon from '../../assets/images/icon_books.png';
import LanguageIcon from '../../assets/images/icon_language.png';

function HomePage({isDrawerOpen}) {
    const navigate = useNavigate();
    const sketchRef = useRef(null);

    useEffect(()=>{
        const sketch = new p5((p)=>{
            let nodes = [];
            let diameter = 70;
            let img = [];
            let mousePressed = false;
            let lastPressedNode = null;

            let categories = [
                {
                    name:"Language",
                    img:LanguageIcon,
                    url:"language",
                    color: [200,200,200],
                    external_link: false
                },
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
                    color: [255,255,255],
                    external_link: true
                },
                {
                    name:"Facebook",
                    img:FacebookIcon,
                    url:"https://www.facebook.com/roshan.bhatta2",
                    color: [255,255,255],
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
                  this.speedX = p.random(-1, 1)<0?p.random(-0.4,-0.5):p.random(0.4,0.5);
                  this.speedY = p.random(-1, 1)<0?p.random(-0.4,-0.5):p.random(0.4,0.5);
                  //this.color = p.color(categories[i].color);
                  this.color = p.color(10,10,10);
                  this.text = categories[i].name;
                  this.url = categories[i].url;
                  this.external_link = categories[i].external_link;
                  this.img = img[i];
                  this.mousePressed = false;
                  this.allowNavigation = true;
                  this.lastX = 0;
                  this.lastY = 0;
                }

                display() {
                    p.stroke(255,255,255);
                    p.strokeWeight(0.8);
                    p.fill(this.color);
                    p.ellipse(this.x, this.y, this.diameter);
                    p.fill(255);
                    p.textSize(10);
                    p.textAlign(p.CENTER,p.CENTER);
                    p.text(this.text,this.x,this.y+this.diameter/4);
                    p.image(this.img,this.x-(this.diameter/2)/2.5,this.y-(this.diameter/2)/1.5,
                            this.diameter/2.5,this.diameter/2.5);
                    
                  }
          
                update() {
                    if(!this.mousePressed){
                        this.lastX = this.x;
                        this.lastY = this.y;
                        this.x += this.speedX;
                        this.y += this.speedY;
                    }else{
                        if(this.allowNavigation===false){
                            this.x = p.mouseX;
                            this.y = p.mouseY;
                        }
                    }
            
                    if ((this.x-this.diameter/2) < 0 || (this.x+this.diameter/2) > p.width) {
                        this.speedX *= -1;
                        }
            
                    if ((this.y-this.diameter/2) <= 0 || (this.y+this.diameter/2) > p.height){
                        this.speedY *= -1;
                        }
                    }
                }

            p.setup = () =>{
                p.createCanvas(window.innerWidth,window.innerHeight*0.92).parent(sketchRef.current);
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
                            if(p.abs(nodeA.lastX-nodeA.x)>p.abs(nodeA.lastY-nodeA.y)){ //x axis
                                nodeA.speedX *=-1;
                            }else{
                                nodeA.speedY *= -1;
                            }


                            if(p.abs(nodeB.lastY-nodeB.y)>p.abs(nodeB.lastY-nodeB.y)){ //y axis
                                nodeB.speedX *=-1;
                            }else{
                                nodeB.speedY *= -1;
                            }
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
                p.resizeCanvas(p.windowWidth,p.windowHeight*0.92);
            }

            p.mouseDragged = (event) =>{
                event.preventDefault();
                if(lastPressedNode!==null && mousePressed===true){
                    lastPressedNode.allowNavigation = false;
                }
            }

            p.mouseMoved = () =>{
              
                for(let i=0;i<numNodes;++i){
                    let currNode = nodes[i];
                    if(p.abs(p.mouseX-currNode?.x)<currNode?.diameter/2 && 
                      p.abs(p.mouseY-currNode?.y)<currNode?.diameter/2){
                        currNode.color = p.color(128,128,128);
                        p.cursor("pointer");
                        break;
                      }else{
                        currNode.color = p.color(10,10,10);
                        p.cursor("default");
                      }
                }
            }

            p.mousePressed = () =>{
                for(let i=0;i<numNodes;++i){
                    let currNode = nodes[i];
                    if(p.abs(p.mouseX-currNode?.x)<currNode?.diameter/2 && 
                      p.abs(p.mouseY-currNode?.y)<currNode?.diameter/2){
                        lastPressedNode = currNode;
                        currNode.mousePressed = true;
                        mousePressed = true;
                    }
                } 
            }

            p.mouseReleased = () =>{

                for(let i=0;i<numNodes;++i){
                    let currNode = nodes[i];
                    currNode.mousePressed = false;
                    if(p.abs(p.mouseX-currNode?.x)<currNode?.diameter/2 && 
                      p.abs(p.mouseY-currNode?.y)<currNode?.diameter/2){
                        if(currNode?.allowNavigation===true && isDrawerOpen===false){
                            if(currNode?.external_link)
                                window.open(currNode?.url);
                            else
                                navigate(currNode?.url);
                        }
                      }
                }
                mousePressed = false;
                if(lastPressedNode!==null){
                    lastPressedNode.color = p.color(10,10,10);
                    lastPressedNode.allowNavigation = true;
                }
            }
        })

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