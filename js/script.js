window.onload = () => {
    const starsContainer = document.querySelector('.stars');
    const numStars = 50; // Número de estrelas fixas

    // Gerar estrelas de forma dinâmica
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        starsContainer.appendChild(star);
    }

    // Adicionar rotação no Saturno
    const saturn = document.querySelector('.saturn');
    saturn.style.animation = 'rotateSaturn 20s linear infinite';

    // Função para gerar estrelas cadentes
    function createShootingStars() {
        const numberOfStars = Math.floor(Math.random() * 7) + 1; // Número aleatório de 1 a 7 estrelas
        for (let i = 0; i < numberOfStars; i++) {
            const shootingStar = document.createElement('div');
            shootingStar.classList.add('shooting-star');
            
            // Definir posição aleatória das estrelas cadentes
            shootingStar.style.top = `${Math.random() * 20}%`;  // Começo da estrela cadente no topo
            shootingStar.style.left = `${Math.random() * 100}%`;  // Posição aleatória horizontal

            // Adicionar à tela
            starsContainer.appendChild(shootingStar);

            // Remover a estrela cadente após a animação
            setTimeout(() => {
                shootingStar.remove();
            }, 4000);  // Tempo de animação (4 segundos)
        }
    }

    // Criar estrelas cadentes a cada 3 segundos com intervalo aleatório
    setInterval(createShootingStars, 3000);  // Intervalo de 3 segundos entre a geração de estrelas cadentes
};
