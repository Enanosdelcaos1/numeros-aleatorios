/* ========================================
   LÓGICA DE LA CALCULADORA
   Controla todas las operaciones matemáticas
   Se ejecuta automáticamente al cargar/refrescar
   ======================================== */

// Función para generar un número aleatorio entre 0 y 100
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 101);
}

// Variables globales que almacenan los dos números para las operaciones
let numero1 = generarNumeroAleatorio();
let numero2 = generarNumeroAleatorio();

/* ========================================
   FUNCIÓN: Mostrar números en los círculos
   Actualiza el contenido HTML de los elementos numero1 y numero2
   ======================================== */
function mostrarNumeros() {
    document.getElementById('numero1').textContent = numero1;
    document.getElementById('numero2').textContent = numero2;
}

/* ========================================
   FUNCIÓN: Calcular todos los resultados
   Realiza las 6 operaciones y muestra los resultados en pantalla
   Se ejecuta automáticamente al cargar la página
   ======================================== */
function calcularResultados() {
    // Suma: numero1 + numero2
    const suma = numero1 + numero2;
    document.getElementById('resultSuma').textContent = suma;

    // Resta: numero1 - numero2
    const resta = numero1 - numero2;
    document.getElementById('resultResta').textContent = resta;

    // Multiplicación: numero1 * numero2
    const multiplicacion = numero1 * numero2;
    document.getElementById('resultMultiplicacion').textContent = multiplicacion;

    // División: numero1 / numero2 (si numero2 no es 0)
    const division = numero2 !== 0 ? (numero1 / numero2).toFixed(2) : 'Error';
    document.getElementById('resultDivision').textContent = division;

    // Porcentaje: qué porcentaje es numero1 de numero2
    const porcentaje = (numero1 * numero2 / 100).toFixed(2);
    document.getElementById('resultPorcentaje').textContent = porcentaje;

    // Raíz cuadrada: raíz cuadrada del promedio de los dos números
    const promedio = (numero1 + numero2) / 2;
    const raizCuadrada = Math.sqrt(promedio).toFixed(2);
    document.getElementById('resultRaizCuadrada').textContent = raizCuadrada;
}

/* ========================================
   INICIALIZAR LA PÁGINA
   Se ejecuta cuando la página se carga o se refresca
   ======================================== */
mostrarNumeros();
calcularResultados();
