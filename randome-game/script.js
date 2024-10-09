const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const birdUp = new Image();
const birdDown = new Image();
const background = new Image();
const footer = new Image();
const pipeYellow = new Image();
const foreground = new Image();

const gap = 140;
let score = 0;
const gravity = 1.3;

const button = {
    x: 200,
    y: 180,
    width: 150,
    height: 50,
  };

birdUp.src = 'assets/bird-up.png';
birdDown.src = 'assets/bird-up.png';
background.src = 'assets/background.jpg';
pipeYellow.src = 'assets/pipe-yellow.png';
foreground.src = 'assets/floor-sprite.png';

//// bird position
const xPosition = canvas.width * 0.3;
let yPosition = 100;

document.addEventListener('keydown', moveUp);

function moveUp() {
    yPosition -= 25;
}

const pipe = [];
pipe[0] = {
    x: canvas.width - 180,
    y: 0
}

function draw () {
    context.drawImage(background, 0, 0); 

    for(let i = 0; i < pipe.length; i++) {
        context.drawImage(pipeYellow, pipe[i].x, pipe[i].y);
        context.drawImage(pipeYellow, pipe[i].x, pipe[i].y + pipeYellow.height + gap);

        pipe[i].x--; 

        if (pipe[i].x == 500) {
            pipe.push({
                x: canvas.width,
                y: Math.floor(Math.random() * pipeYellow.height) - pipeYellow.height
            })
        }
        /// track touches
        if (xPosition + birdDown.width >= pipe[i].x 
            && xPosition <= pipe[i].x + pipeYellow.width
            && (yPosition <= pipe[i].y + pipeYellow.height 
                || yPosition + birdDown.height >= pipe[i].y + pipeYellow.height + gap) 
                || yPosition + birdDown.height >= canvas.height - foreground.height
            ) {
                context.fillStyle = "#900C3F";  
                context.font = "38px Arial";
                context.fillText("Game Over!", 200, 100);
                context.fillText("Your score is: " + score, 200, 150);

                context.fillRect(button.x, button.y, button.width, button.height);
                context.fillStyle = 'white';
                context.font = '24px Arial';
                context.fillText('Restart', button.x + 15, button.y + button.height / 2 + 8);

                return;
            }
        
        if(pipe[i].x === 120) {
            score += 10;
        }
    }

    context.drawImage(foreground, 0, canvas.height - foreground.height);
    context.drawImage(birdDown, xPosition, yPosition);

    yPosition += gravity;

    context.fillStyle = '#4040FF';
    context.font = '23px Roboto';
    context.fillText('Score: ' + score, 10, canvas.height - 30);

    requestAnimationFrame(draw);
}

foreground.onload = draw;