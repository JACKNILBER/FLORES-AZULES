const inicio = document.getElementById("inicio");
const btn = document.getElementById("btnInicio");
const musica = document.getElementById("musica");

btn.addEventListener("click", () => {
  // Inicia las animaciones de las flores y el mensaje
  document.body.classList.remove("container");
  inicio.classList.add("oculto");

  // Reproduce la música (el navegador la permite porque hubo un toque)
  musica.volume = 0.7;
  musica.play().catch(() => {
    console.log("No se encontró musica.mp3 junto a index.html");
  });
});
