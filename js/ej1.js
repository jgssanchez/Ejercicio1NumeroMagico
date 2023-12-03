document.getElementById("startBtn").addEventListener("click", function () {
  document.getElementById("gameSection").style.display = "block";
  let numRandom = Math.floor(Math.random() * 100) + 1;

  document.getElementById("submitBtn").addEventListener("click", function () {
    let numJugador = document.getElementById("userInput").value;
    if (numJugador == numRandom) {
      alert("¡Felicidades! Has adivinado el número");
    } else if (numJugador < 0) {
      alert("Por favor ingresa un número positivo");
    } else if (numJugador < numRandom) {
      alert("El número que ingresaste es menor al número mágico");
    } else {
      alert("El número que ingresaste es mayor al número mágico");
    }
  });
});
