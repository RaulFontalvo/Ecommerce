// Función para cambiar el color de fondo de la página
function changeBackgroundColor() {
    const body = document.body;
    const currentColor = window.getComputedStyle(body).backgroundColor;
    body.style.backgroundColor = currentColor === 'rgb(255, 255, 255)' ? '#f2f2f2' : '#fff';
}

// Función para cambiar el color del encabezado
function changeHeadingColor() {
    const mainHeading = document.getElementById('main-heading');
    const currentColor = window.getComputedStyle(mainHeading).color;
    mainHeading.style.color = currentColor === 'rgb(255, 255, 255)' ? '#333' : '#fff';
}