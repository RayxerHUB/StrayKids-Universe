/* PARTICLE GENERATOR */

for(let i=0;i<40;i++){

const p=document.createElement("div")

p.className="particle"

p.style.left=Math.random()*100+"vw"

p.style.animationDuration=10+Math.random()*20+"s"

p.style.animationDelay=Math.random()*5+"s"

document.body.appendChild(p)

}