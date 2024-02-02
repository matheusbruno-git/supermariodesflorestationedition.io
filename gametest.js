let startTime, intervalId;

function startStopwatch() {
  startTime = Date.now();
  intervalId = setInterval(updateTime, 10);
}

function updateTime() {
  const elapsed = Date.now() - startTime;
  const seconds = Math.floor(elapsed / 1000);
  const milliseconds = elapsed % 1000;
  document.getElementById('time').textContent = `${seconds}.${milliseconds}`;
}

function stopStopwatch() {
  clearInterval(intervalId);
}

function freeze() {
        // Disable scrolling and user interaction
        document.body.style.overflow = 'hidden';
        document.body.style.pointerEvents = 'none';
  
        pipe.style.animationPlayState = 'paused'
        
        // Remove the button
        var button = document.getElementsByTagName('button')[0];
        button.parentNode.removeChild(button);
        
        // Add unfreeze button
        var unfreezeButton = document.createElement('button');
        unfreezeButton.innerHTML = 'Unfreeze';
        unfreezeButton.onclick = unfreeze;
        document.body.appendChild(unfreezeButton);
}
      
function unfreeze() {
        // Enable scrolling and user interaction
        document.body.style.overflow = 'auto';
        document.body.style.pointerEvents = 'auto';
        pipe.style.animationPlayState = 'running';
        startStopwatch();
}

const mario = document.querySelector('.mario-man');
const pipe = document.querySelector('.pipe');
let lifes = 3;
let score = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');
        score++;

    },500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 && lifes > 0) {

        pipe.style.animation = 'none';
        pipe.style.left =  `${pipePosition}px`;
        let loseLifes = lifes - 1;

        mario.style.animation = 'none';
        mario.style.bottom =  `${marioPosition}px`;

        mario.src = "https://media.tenor.com/oJzzasSRmQEAAAAi/mario-mario-dead.gif";
        mario.style.width = '150px'
        mario.style.marginLeft = '50px'
      
        alert("Sua pontuação foi de " + score + " pontos");
      
        stopStopwatch();

        function goToQuizPage() {
            window.location.href = "quiz.html";
          }
        setTimeout(goToQuizPage, 5000);

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);
document.addEventListener('keydown', unfreeze);
window.addEventListener('load', freeze);
