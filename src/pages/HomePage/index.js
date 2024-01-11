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
import { useSelector } from 'react-redux';

function HomePage() {
    const {drawerOpen} = useSelector((state)=>state.drawer);
    const navigate = useNavigate();
    const sketchRef = useRef(null);

    useEffect(()=>{
        const sketch = new p5((p)=>{
            let nodes = [];
            let diameter = 70;
            let img = [];
            let mousePressed = false;
            let lastPressedNode = null;

            let star 
            let system

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
                  this.massIncrease = false;
                  this.exponential = 0.0;
                }

                display() {
                    if(this.external_link===true) {
                        p.stroke(255,255,255);
                    }else{
                        p.stroke(50,200,100);
                    }
                    p.strokeWeight(0.8);
                    p.fill(this.color);
                    p.ellipse(this.x, this.y, this.diameter);
                    p.fill(255);
                    p.noStroke();
                    p.textSize(10);
                    p.textAlign(p.CENTER,p.CENTER);
                    p.textFont("Poppins");
                    p.text(this.text,this.x,this.y+this.diameter/4);
                    p.image(this.img,this.x-(this.diameter/2)/2.5,this.y-(this.diameter/2)/1.5,
                            this.diameter/2.5,this.diameter/2.5);
                    
                  }
          
                update() {
                    if(this.massIncrease && this.exponential>-5.0){
                        this.exponential-=0.1;
                    }

                    if(this.massIncrease && this.diameter<90){
                        this.diameter+=(Math.exp(this.exponential)*2);
                        // this.diameter+=2;
                    }

                    if(!this.massIncrease && this.diameter>70){
                        this.diameter-=2;
                    }
                    if(this.diameter<70) this.diameter=70;
                    if(this.diameter>90) this.diameter=90;

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

                function grid(){
                    p.stroke(255)
                    p.line(p.width/2,0,p.width/2,p.height)
                    p.line(0,p.height/2,p.width,p.height/2);
                  }
                  
                  function Star(x,y){
                    this.pos = p.createVector(p.random(x-p.width,x+p.width),p.random(y-p.height,y+p.height))
                    this.xSpeed = p.map(this.pos.x,-p.width,p.width,-0.01,0.01)
                    this.ySpeed = p.map(this.pos.y,-p.height,p.height,-0.01,0.01);
                    this.speed = p.createVector(this.xSpeed,this.ySpeed);
                    this.xAcc = this.xSpeed
                    this.yAcc = this.ySpeed
                    this.acc = p.createVector(this.xAcc,this.yAcc);
                    this.size = p.random(0.5,3);
                    this.alpha = 5
                    this.r = p.random(128,255);
                    this.g = p.random(128,255);
                    this.b = p.random(128,255);
                  }
                  
                  Star.prototype.display = function(){
                    p.fill(this.r,this.g,this.b, this.alpha);
                    p.noStroke();
                    //line(0,0,this.pos.x,this.pos.y)
                    p.ellipse(this.pos.x,this.pos.y,this.size,this.size);
                    this.alpha +=5
                  }
                  
                  Star.prototype.move = function(){
                    this.pos.add(this.speed);
                    this.speed.add(this.acc)
                  
                  }
                  
                  Star.prototype.isDead = function(){
                    if(this.pos.x > p.width + this.size || this.pos.y > p.height + this.size || this.pos.x < -p.width - this.size|| this.pos.y < -p.height -this.size ){
                      return true
                    }
                  }
                  
                  let StarSystem = function(x,y){
                    this.origin = p.createVector(x,y)
                    this.stars = []
                  }
                  
                  StarSystem.prototype.initialize = function(starNum){
                    //make star array
                    
                    for(let i = 0; i < starNum; i++){
                      this.stars.push(new Star(this.origin.x,this.origin.y))
                    }
                    
                  }
                  
                  StarSystem.prototype.addStar = function (){
                    this.stars.push(new Star(this.origin.x,this.origin.y))
                  }
                  
                  StarSystem.prototype.run = function(){
                    for(let i = 0; i < this.stars.length; i++){
                      this.stars[i].display();
                      this.stars[i].move();
                      if(this.stars[i].isDead()){
                        this.stars.splice(i,1);
                        this.addStar();
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

                  star = new Star(p.random(-p.width/2,p.width/2),p.random(-p.height/2,p.height/2));
                  system = new StarSystem(0,0)
                  system.initialize(200);
            }

            p.draw = () =>{
                // p.background(17,17,17);
                p.background(17,24,39);
                    //p.translate(p.width/2,p.height/2)
                system.run(); 

                for (let i = 0; i < nodes.length; i++) {
                    const nodeA = nodes[i];
                    for (let j = i + 1; j < nodes.length; j++) {
                        const nodeB = nodes[j];
                        const d = p.dist(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
                        if(d<(nodeA.diameter/2+nodeB.diameter/2)){
                            // if(p.abs(nodeA.lastX-nodeA.x)>p.abs(nodeA.lastY-nodeA.y)){ //x axis
                            //     nodeA.speedX *=-1;
                            // }else{
                            //     nodeA.speedY *= -1;
                            // }


                            // if(p.abs(nodeB.lastY-nodeB.y)>p.abs(nodeB.lastY-nodeB.y)){ //y axis
                            //     nodeB.speedX *=-1;
                            // }else{
                            //     nodeB.speedY *= -1;
                            // }
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
                    if(currNode!==undefined){
                        if(p.abs(p.mouseX-currNode?.x)<currNode?.diameter/2 && 
                        p.abs(p.mouseY-currNode?.y)<currNode?.diameter/2){
                          currNode.color = p.color(128,128,128);
                          currNode.massIncrease = true;
                          //currNode.diameter = 90;
                          p.cursor("pointer");
                          break;
                        }else{
                            currNode.massIncrease = false;
                            currNode.exponential=0.0;
                            currNode.color = p.color(10,10,10);
                            p.cursor("default");
                        }
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
                        currNode.massIncrease = true;
                        currNode.color = p.color(128,128,128);
                        mousePressed = true;
                    }
                } 
            }

            p.mouseReleased = (event) =>{

                for(let i=0;i<numNodes;++i){
                    let currNode = nodes[i];
                    currNode.mousePressed = false;
                    currNode.massIncrease = false;
                    currNode.exponential = 0.0;
                    currNode.color = p.color(10,10,10);
                    if(p.abs(p.mouseX-currNode?.x)<currNode?.diameter/2 && 
                      p.abs(p.mouseY-currNode?.y)<currNode?.diameter/2){
                        if(currNode?.allowNavigation===true && !drawerOpen){
                            if(currNode?.external_link){
                                window.open(currNode?.url);
                                event.preventDefault();
                            }
                            else{
                                navigate(currNode?.url);
                            }
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

    },[drawerOpen])
    

    return (
        <div ref={sketchRef}>

        </div>
    )
}

export default HomePage;