document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contacto');
  const estado = document.getElementById('mensaje-estado');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    if (!nombre || !email) {
      estado.textContent = 'Por favor completá los campos obligatorios.';
      estado.style.color = 'red';
      return;
    }

    // Simulación de envío exitoso
    setTimeout(() => {
      estado.textContent = '¡Mensaje enviado correctamente!';
      estado.style.color = 'green';
      form.reset();
    }, 500);
  });
});
