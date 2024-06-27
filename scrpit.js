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
        
        if (diasAzul.includes(i)) {
            dayDiv.classList.add('azul');
        }
        
        if (diasVermelho.includes(i)) {
            dayDiv.classList.add('vermelho');
        }

        barra.appendChild(dayDiv);
    }
});
