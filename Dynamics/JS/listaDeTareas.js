// Referencias a los elementos
const btnAgregar = document.getElementById("agregarTarea");
const btnEliminarUltima = document.getElementById("eliminarUltima");
const btnEliminarTodas = document.getElementById("eliminarTodas");
const contenedor = document.getElementById("contenedor");

// Función para crear y agregar una tarea
function agregarTarea(texto = "Nueva tarea") {
  const tarea = document.createElement("div");
  tarea.classList.add("tarea");
  tarea.textContent = texto;
  contenedor.appendChild(tarea);
}

// Agregar nueva tarea
btnAgregar.addEventListener("click", () => {
  agregarTarea();
});

// Eliminar la última tarea
btnEliminarUltima.addEventListener("click", () => {
  const tareas = contenedor.querySelectorAll(".tarea");
  if (tareas.length > 0) {
    contenedor.removeChild(tareas[tareas.length - 1]);
  }
});

// Eliminar todas las tareas
btnEliminarTodas.addEventListener("click", () => {
  contenedor.innerHTML = "";
});
