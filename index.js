// Función para cambiar el color de fondo de la página
function cambiarfondo() {
    const body = document.body;
    const currentColor = window.getComputedStyle(body).backgroundColor;
    body.style.backgroundColor = currentColor === 'rgb(255, 255, 255)' ? '#f2f2f2' : '#fff';
}

// Función para cambiar el color del encabezado
function cambiarcolorencabezado() {
    const mainHeading = document.getElementById('main-heading');
    const currentColor = window.getComputedStyle(mainHeading).color;
    mainHeading.style.color = currentColor === 'rgb(255, 255, 255)' ? '#f0f' : '#fff';
}

// Función para agregar un producto a la lista de productos
function addProduct() {
    const productList = document.getElementById('products-list');
    const newProduct = document.createElement('div');
    newProduct.classList.add('product-item');
    newProduct.textContent = 'Nuevo Producto';
    productList.appendChild(newProduct);
}