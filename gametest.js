const spider = document.querySelector('.spider-man');
const pipe = document.querySelector('.pipe');
let lifes = 3;
let score = 0;

const jump = () => {
    spider.classList.add('jump');

    setTimeout(() => {

        spider.classList.remove('jump');
        let sumScores = score + 10;

    },500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const spiderPosition = +window.getComputedStyle(spider).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && spiderPosition < 80 && lifes > 0) {

        pipe.style.animation = 'none';
        pipe.style.left =  `${pipePosition}px`;
        let loseLifes = lifes - 1;

        spider.style.animation = 'none';
        spider.style.bottom =  `${spiderPosition}px`;

        spider.src = "https://media.tenor.com/oJzzasSRmQEAAAAi/mario-mario-dead.gif";
        spider.style.width = '150px'
        spider.style.marginLeft = '50px'

        function goToQuizPage() {
            window.location.href = "quiz.html";
          }
        setTimeout(goToQuizPage, 3000);

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);
document.addEventListener("touchstart", jump);