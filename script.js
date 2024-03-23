document.addEventListener('DOMContentLoaded', function () {
    const reservaForm = document.getElementById('reserva-form');
    const reservasContainer = document.getElementById('reservas');
  
    reservaForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const fecha = document.getElementById('fecha').value;
      const motivo = document.getElementById('motivo').value;
  
      if (nombre.trim() === '' || fecha.trim() === '' || motivo.trim() === '') {
        alert('Por favor, complete todos los campos.');
        return;
      }
  
      agregarReserva(nombre, fecha, motivo);
      reservaForm.reset();
    });
  
    function agregarReserva(nombre, fecha, motivo) {
      const reservaDiv = document.createElement('div');
      reservaDiv.classList.add('reserva');
      reservaDiv.innerHTML = `
        <span><strong>Nombre:</strong> ${nombre}</span>
        <span><strong>Fecha:</strong> ${fecha}</span>
        <span><strong>Motivo:</strong> ${motivo}</span>
        <button class="eliminar-btn">Eliminar</button>
      `;
      reservasContainer.appendChild(reservaDiv);
  
      const eliminarBtn = reservaDiv.querySelector('.eliminar-btn');
      eliminarBtn.addEventListener('click', function () {
        reservaDiv.remove();
      });
    }
  });
  