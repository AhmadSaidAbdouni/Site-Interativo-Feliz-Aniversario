document.getElementById('surpriseButton').addEventListener('click', function () {
    const surpriseMessage = document.getElementById('surpriseMessage');
    const contador = document.getElementById('contador');
    
    surpriseMessage.classList.toggle('hidden');
    contador.classList.toggle('hidden');

    atualizarContador(); // Atualiza imediatamente
    setInterval(atualizarContador, 60000); // Atualiza a cada minuto

    startConfettiRain();
});

function startConfettiRain() {
    const numConfetti = 200; // Reduzi um pouco para não ficar exagerado
    const duration = 5000; // Confetes caem por 5 segundos

    for (let i = 0; i < numConfetti; i++) {
        createConfettiPiece();
    }

    setTimeout(() => {
        document.querySelectorAll('.confete').forEach(confete => confete.remove());
    }, duration);
}

function createConfettiPiece() {
    const confete = document.createElement('div');
    confete.classList.add('confete');
    
    confete.style.left = Math.random() * 100 + 'vw'; 
    confete.style.top = Math.random() * -10 + 'vh';
    confete.style.backgroundColor = getRandomColor();
    confete.style.animationDuration = (Math.random() * 3 + 2) + 's'; 
    confete.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(confete);

    confete.addEventListener('animationend', () => {
        confete.remove();
    });
}

function getRandomColor() {
    const colors = ['#0077cc', '#005fa3', '#004488', '#003366']; // Tons de azul
    return colors[Math.floor(Math.random() * colors.length)];
}

function atualizarContador() {
    const dataAlvo = new Date('2024-10-12T22:00:00');
    const agora = new Date();
    const diff = agora - dataAlvo;

    if (diff < 0) {
        document.getElementById('contador').innerText = 'A data ainda não chegou.';
        return;
    }

    const minutos = Math.floor(diff / (1000 * 60)) % 60;
    const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById('contador').innerText = 
        `${dias} dias, ${horas} horas e ${minutos} minutos.`;
}
