const arrow = '<svg class="seta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>';

document.addEventListener('DOMContentLoaded', function() {
    const barra = document.getElementById('barra');
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const daysInMonth = new Date(year, month, 0).getDate();

    // Defina os dias específicos para colorir
    const diasAzul = [5, 15]; // substitua por x e y
    const diasVermelho = [10, 20]; // substitua por z e k

    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'dia';
        dayDiv.textContent = i;
        if (i == 5) {
            dayDiv.innerHTML += arrow;

        }

        if (i >= diasAzul[0] && i <= diasAzul[1]) {
            dayDiv.classList.add('azul');
        }

        if (i >= diasVermelho[0] && i <= diasVermelho[1]) {
            dayDiv.classList.add('vermelho');
        }

        barra.appendChild(dayDiv);
    }
});
