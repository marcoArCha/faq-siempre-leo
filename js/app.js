'use strict'

const bloque    = document.querySelectorAll('.bloque')
const h2        = document.querySelectorAll('.h2')
    

// Cuando CLICK en h2,
    // QUITAR la clase activo de TODOS los bloque
    // Vamos a añadir la clase activo al BLOQUE con la POSICION del h2

// Recorrer TODOS los h2
//h2.forEach( ( cadaH2 , i )=>{
    // Asignando un CLICK a cada h2
//    h2[i].addEventListener('click', ()=>{

        // Recorrer TODOS los bloque
   //     bloque.forEach( ( cadaBloque , i )=>{
            // Quitamos la clase activo de TODOS los bloques
   //         bloque[i].classList.remove('activo')
    //    })
        // Añadiendo la clase activo al bloque cuya posición sea igual al del h2
        // (Línea número 12)
   //     bloque[i].classList.add('activo')

 //   })
//})

// Recorrer TODOS los h2
h2.forEach((cadaH2, i) => {
    // Asignando un CLICK a cada h2
    h2[i].addEventListener('click', () => {
        // Añadir la clase activo al bloque cuya posición sea igual al del h2
        bloque[i].classList.toggle('activo');
        h2[i].classList.toggle('abierto'); // Agregar clase 'abierto' al h2 clickeado
    });
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.acordeon')) {
        // Si el clic no fue dentro de un elemento con la clase 'acordeon',
        // ocultar todos los bloques activos
        bloque.forEach((cadaBloque) => {
            cadaBloque.classList.remove('activo');      
        });
    }
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.acordeon')) {
        // Si se hace clic fuera del acordeón, quitar la clase 'abierto' de todos los h2
        h2.forEach((cadaH2) => {
            cadaH2.classList.remove('abierto');
        });
    }
});