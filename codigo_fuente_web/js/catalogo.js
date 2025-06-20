fetch('productos.json')
  .then(response => response.json())
  .then(productos => {
    const contenedor = document.getElementById('contenedor-productos');
    productos.forEach(producto => {
      const div = document.createElement('div');
      div.classList.add('producto');
      div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
        <button>Agregar al carrito</button>
      `;
      contenedor.appendChild(div);
    });
  })
  .catch(error => {
    console.error('Error al cargar el catálogo:', error);
  });
