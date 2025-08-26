const mensajes = [
  "Estoy aprendiendo JavaScript ",
  "Soy una persona curiosa y práctica. Me gusta aprender cosas nuevas, desde programación en python y Java. También me interesa ver peliculas y hago proyectos sencillos, como construir. En lo personal, tengo el cabello castaño oscuro casi negro, piel blanca que suele enrojecerse y ojos café oscuro. Me suele estresar algunas cosas como del día a día el tráfico de Lima",
  "Me llama la atencion el diseño web ",
  "La práctica hace al maestro"
];

function cambiarMensaje() {
  const mensajeEl = document.getElementById('mensaje');
  const nuevo = mensajes[Math.floor(Math.random() * mensajes.length)];
  mensajeEl.textContent = nuevo;
}

function aplicarTemaGuardado() {
  const tema = localStorage.getItem('tema') || 'claro';
  const esOscuro = tema === 'oscuro';
  document.body.classList.toggle('oscuro', esOscuro);
  const btn = document.getElementById('temaBtn');
  btn.setAttribute('aria-pressed', String(esOscuro));
  btn.textContent = esOscuro ? 'Modo claro' : 'Modo oscuro';
}

function toggleTema() {
  const esOscuro = !document.body.classList.contains('oscuro');
  document.body.classList.toggle('oscuro', esOscuro);
  localStorage.setItem('tema', esOscuro ? 'oscuro' : 'claro');
  aplicarTemaGuardado();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('anio').textContent = new Date().getFullYear();
  aplicarTemaGuardado();
});
