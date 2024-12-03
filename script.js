$(document).ready(function() {
    const canvas = document.getElementById('trailCanvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = document.documentElement.scrollWidth;
        canvas.height = document.documentElement.scrollHeight;
    }
    resizeCanvas();

    let lastX = -1;
    let lastY = -1;

    function drawOval(x, y, size) {
        const width = size * (Math.random() * 0.5 + 1); 
        const height = size * (Math.random() * 0.3 + 0.7); 
        
        ctx.beginPath();
        ctx.ellipse(x, y, width, height, Math.PI / 4, 0, Math.PI * 2); 
        ctx.fillStyle = 'rgba(200, 220, 255, 0.9)'; 
        ctx.shadowColor = 'rgba(255, 255, 255, 0.6)';
        ctx.shadowBlur = size * 2;
        ctx.fill();
    }

    $(document).mousemove(function(event) {
        const x = event.clientX + window.scrollX;
        const y = event.clientY + window.scrollY;

        if (lastX !== -1 && lastY !== -1) {
            const dx = x - lastX;
            const dy = y - lastY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            const numOvals = Math.min(Math.ceil(distance / 250), 5);

            for (let i = 0; i < numOvals; i++) {
                const size = Math.random() * 3 + 1;
                const offsetX = (Math.random() - 0.5) * size * 2;
                const offsetY = (Math.random() - 0.5) * size * 2;
                drawOval(lastX + offsetX, lastY + offsetY, size);
            }
        }

        lastX = x;
        lastY = y;

        const scrollSpeed = 0.5; 
        if (event.clientX < 500) window.scrollBy(-scrollSpeed, 0); 
        if (event.clientX > window.innerWidth - 500) window.scrollBy(scrollSpeed, 0); 
        if (event.clientY < 500) window.scrollBy(0, -scrollSpeed); 
        if (event.clientY > window.innerHeight - 500) window.scrollBy(0, scrollSpeed); 
    });

    $(window).mouseleave(function() {
        lastX = -1;
        lastY = -1;
    });

    $(window).resize(function() {
        resizeCanvas();
    });
});

$(document).ready(function() {
    $('.title, .info1, .info2, .info3, .info4, .info5, .info6, .info7').hover(function() {
        $(this).addClass($(this).attr('class') + '-hovered');
    });
});

$(document).mousemove(function (event) {
    const x = event.clientX + window.scrollX;
    const y = event.clientY + window.scrollY;

    const maxScrollX = document.documentElement.scrollWidth - window.innerWidth;
    const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;

    if (event.clientX < 500 && window.scrollX > 0) window.scrollBy(-0.8, 0); 
    if (event.clientX > window.innerWidth - 500 && window.scrollX < maxScrollX) window.scrollBy(0.8, 0); 
    if (event.clientY < 500 && window.scrollY > 0) window.scrollBy(0, -0.8); 
    if (event.clientY > window.innerHeight - 500 && window.scrollY < maxScrollY) window.scrollBy(0, 0.8); 
});

        // const listenButton = document.getElementById("listen-button");
        // const imageModal = document.getElementById("image-modal");

        // listenButton.addEventListener("click", () => {
        //     imageModal.style.display = "flex";
        // });

        // imageModal.addEventListener("click", () => {
        //     imageModal.style.display = "none";
        // });

const listenButton = document.getElementById("listen-button");
const videoModal = document.getElementById("video-modal");
const videoPlayer = document.getElementById("video-player");

listenButton.addEventListener("click", () => {
    videoModal.style.display = "flex"; 
    videoPlayer.play(); 
});

videoModal.addEventListener("click", () => {
    videoModal.style.display = "none";
    videoPlayer.pause(); 
    videoPlayer.currentTime = 0; 
});

