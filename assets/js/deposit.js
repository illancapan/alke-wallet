document.addEventListener("DOMContentLoaded", function() {
    // Recuperar el valor de ahorro del LocalStorage
    let ahorroGuardado = localStorage.getItem("ahorro");

    // Elemento para mostrar el ahorro por defecto
    let resultadoElemento = document.getElementById("resultado");

    // Mostrar el ahorro guardado por defecto
    resultadoElemento.textContent = ahorroGuardado || "Ahorro por defecto";
});