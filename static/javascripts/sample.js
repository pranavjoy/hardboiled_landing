const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const mousePosition = {
    x : 0,
    y : 0
}

let direction = {
    x : 3,
    y : 4
};

const easeFactor = 0.25;
colors = ["#F00000", "#FF0000", "#FFF000", "#FFFF00", "#FFFFF0", "#FFFFFF", "#FF00FF", "#F0F0F0", "#00FF00", "#0F0F0F"]
function resize(){
    canvas.width= window.innerWidth;
    canvas.height = window.innerHeight;
}
const positions=[];
n = 0;
function draw(){
    resize();

    for (let i = 0; i < 60; i++){

        const size = 120 - ( i * 2 );
        positions.push({x:0, y:0});

        if (i === 0){
            positions[i].x = positions[i].x + ( mousePosition.x - positions[i].x ) * easeFactor ;
            positions[i].y = positions[i].y + ( mousePosition.y - positions[i].y ) * easeFactor;

        } else {
            positions[i].x = positions[i].x + (  positions[i - 1].x - positions[i].x ) * easeFactor ;
            positions[i].y = positions[i].y + (  positions[i - 1].y - positions[i].y ) * easeFactor ;
        }

        context.beginPath();
        context.arc(positions[i].x , positions[i].y, size, 0, Math.PI*2);
        context.fill();
        if (i < 10){
            context.fillStyle = colors[i+n];
        } else {
            context.fillStyle = colors[(i+n)%10];
        }

    }
    n++;
    window.requestAnimationFrame(draw);

}

function onMouseMove(event){
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientY;
}

window.addEventListener("mousemove", onMouseMove);
window.requestAnimationFrame(draw);
