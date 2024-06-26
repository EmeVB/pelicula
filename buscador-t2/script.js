$(document).ready(function (){})

    function comboBox() {
        $.ajax({
            url:'https://www.codigo-alfa.cl/aglo/Tester/listasPeliculas',
            method: 'GET',
            success:(data)=>{
                console.log(data.peliculas)
                const select = document.getElementById("pelis")
                const peliculas = data.peliculas
                peliculas.forEach(element => {
                    const option = document.createElement('option')
                    option.value = element.id
                    option.textContent = element.title
                    select.appendChild(option)
                });
            }
        })

    } 

    comboBox();

    function aleatoria() {
        $.ajax({
            url:'https://www.codigo-alfa.cl/aglo/Tester/peliculaAleatoria',
            method: 'GET',
            success:(data)=>{
                console.log(data)
                const palabra = document.getElementById("peliAleatoria") 
                const pelicula = data.pelicula
                palabra.textContent = pelicula.title
            }
        })

    } 