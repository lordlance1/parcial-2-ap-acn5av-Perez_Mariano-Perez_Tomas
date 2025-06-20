document.addEventListener("DOMContentLoaded", () => {
  const catalogo = document.querySelector(".productos");
  const productos = [
    { nombre: "Llavero personalizado", precio: "$800" },
    { nombre: "Soporte de celular", precio: "$1200" }
  ];

  productos.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${p.nombre}</h3><p>${p.precio}</p>`;
    catalogo.appendChild(div);
  });
});
