//array, funciones, clases--Inicio
const celularesGuardados = []
const total = []
const cliente = []

function mensaje(text) {
    Toastify({
        text: text,
        duration: 1500,
        position: "center",
        style: {
            background: "red",
        }

    }).showToast()
}

function mensajeGuardar(title) {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: title,
        showConfirmButton: false,
        timer: 2000,
    })
}


function renderResumen() {
    const lista = document.getElementById(`lista`)
    lista.innerHTML = ''

    celularesGuardados.forEach(celular => {
        const row = document.createElement(`tr`)
        const colMarca = document.createElement(`td`)
        const colModelo = document.createElement(`td`)
        const colSerie = document.createElement(`td`)
        const colCantidad = document.createElement(`td`)

        colMarca.innerText = celular.marca
        colModelo.innerText = celular.modelo
        colSerie.innerText = celular.id
        colCantidad.innerText = celular.cantidad

        row.appendChild(colMarca)
        row.appendChild(colModelo)
        row.appendChild(colSerie)
        row.appendChild(colCantidad)
        lista.appendChild(row)
    })
}

function nombreMenos(marca, modelo, id, cantidad) {

    const posicion = celularesGuardados.findIndex(celular => celular.id === id);
    console.log(posicion)

    if (posicion > -1) {

        const celularActualizado = celularesGuardados[posicion];
        celularActualizado.cantidad -= 1;
        celularesGuardados[posicion] = celularActualizado;

    }
    if (celularesGuardados[posicion].cantidad === 0) {
        celularesGuardados.splice(posicion)
    }
    renderResumen()
    mensaje("eliminado :(")
}

function nombreCelulares(marca, modelo, id, cantidad, precio) {
    const celular = {
        marca: marca,
        modelo: modelo,
        id: id,
        cantidad: cantidad,
        precio: precio
    }
    const posicion = celularesGuardados.findIndex(celular => celular.id === id);

    if (posicion > -1) {
        const celularActualizado = celularesGuardados[posicion];
        celularActualizado.cantidad += 1;
        celularesGuardados[posicion] = celularActualizado;
    } else {
        celularesGuardados.push(celular)
    }
    renderResumen()


    Toastify({
        text: "se agrego exitosamete",
        duration: 1500,
    }).showToast()
}
class pruebaDeDatos {
    constructor(nombre, apellido, email, direccion) {
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.direccion = direccion
        this.info = `<b>Nombre:</b> ${nombre} --><b>Apellido:</b>  ${apellido} --><b>Email:</b>  ${email} --><b>Direccion:</b>  ${direccion} `
    }
    mensajeDatos() {
        return this.info
    }
}
//array, funciones, clases--Final

//BotonEliminar-Inicio
const btnEliminar = document.getElementById(`btn-eliminar`)
btnEliminar.addEventListener(`click`, () => {
    nombreMenos("IPHONE", "A32", "1", 1, 130.070)

})

const btnEliminar1 = document.getElementById(`btn-eliminar1`)
btnEliminar1.addEventListener(`click`, () => {
    nombreMenos("SAMSUNG", "A32", "2", 1, 74.089)

})

const btnEliminar2 = document.getElementById(`btn-eliminar2`)
btnEliminar2.addEventListener(`click`, () => {
    nombreMenos("MOTOROLA", "G9 POWER", "3", 1, 88.699)

})

const btnEliminar3 = document.getElementById(`btn-eliminar3`)
btnEliminar3.addEventListener(`click`, () => {
    nombreMenos("LG", "XT-615", "4", 1, 51.430)

})

//BotonEliminar-Inicio
//BotonesAgregar-Inicio

const btn1 = document.querySelector(`.btn1`)
btn1.addEventListener(`click`, () => {
    nombreCelulares("IPHONE", "A32", "1", 1, 130.070)

})

const btn2 = document.querySelector(`.btn2`)
btn2.addEventListener(`click`, () => {
    nombreCelulares("SAMSUNG", "A32", "2", 1, 74.089)
})

const btn3 = document.querySelector(`.btn3`)
btn3.addEventListener(`click`, () => {
    nombreCelulares("MOTOROLA", "G9 POWER", "3", 1, 88.699)
})

const btn4 = document.querySelector(`.btn4`)
btn4.addEventListener(`click`, () => {
    nombreCelulares("LG", "XT-615", "4", 1, 51.439)
})
//BotonesAgregar-Final
//Formulario-Inicio
const boton = document.getElementById(`guardar`)
boton.addEventListener(`click`, () => {
    const nombre = document.getElementById(`nombre`).value
    const apellido = document.getElementById(`apellido`).value
    const email = document.getElementById(`email`).value
    const direccion = document.getElementById(`direccion`).value


    const datosPersonas = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        direccion: direccion

    }

    const prueba = nombre == `` || apellido == `` || email == `` || direccion == `` || false
    prueba ? mensaje("debe llenar todos los datos") : localStorage.setItem(`datos`, JSON.stringify(datosPersonas), mensajeGuardar('REGISTRO CON EXITO!!'))
    cliente.push(datosPersonas)

    formatear.reset()


})

//Formulario-final
//Mostrar-Datos-Inicio

const detalles = document.getElementById(`detalles`)
detalles.addEventListener(`click`, () => {
if (celularesGuardados=="") {
    mensaje("No Hizo ninguna pedido")
    
} else {
    

    const datosEntregas = JSON.parse(localStorage.getItem(`datos`))
    const persona1 = new pruebaDeDatos(datosEntregas.nombre, datosEntregas.apellido, datosEntregas.email, datosEntregas.direccion)

    const listaDetalles = document.getElementById(`listaDetalles`)
    const row = document.createElement(`li`)
    row.innerHTML = persona1.mensajeDatos()
    listaDetalles.appendChild(row)

    const listaCompras = document.getElementById(`listaCompras`)
    for (let i = 0; i < celularesGuardados.length; i++) {

        const listaProducto = document.createElement(`li`)
        listaProducto.innerHTML = `${celularesGuardados[i].cantidad} uni. ${celularesGuardados[i].marca} = $. ${celularesGuardados[i].precio * celularesGuardados[i].cantidad} Pesos.`
        total.push(celularesGuardados[i].precio * celularesGuardados[i].cantidad)
        listaCompras.appendChild(listaProducto)
        const totalCelulares = document.getElementById(`totalCelulares`)

        let suma = 0
        for (let i = 0; i < total.length; i++) {
            suma += total[i];
        }
        totalCelulares.innerHTML = ` <b> SU PAGO TOTAL ES DE : $ </b> ${suma}`

    }
}
})

//Mostrar-Datos-Inicio
const finalizar = document.getElementById(`finalizar`)
finalizar.addEventListener(`click`, () => {
    let finCompra=total == "" || cliente == ""
    finCompra ? mensaje("Corrobore que todos los espacios esten llenos"):mensajeGuardar("Gracias po su compra... :)")
    
})
//Mostrar-Datos-Final

// usando API-Inicio
window.addEventListener(`load`, () => {

    if (navigator.geolocation) {

        let lon
        let lat
        const temperaturaValor = document.getElementById(`temperatura-valor`)
        const temperaturaDescripcion = document.getElementById(`temperatura-descripcion`)

        const Ubicacion = document.getElementById(`ubicacion`)
        const iconoAnimado = document.getElementById(`icono-animado`)

        const vientoVelocidad = document.getElementById(`viento-velocidad`)



        navigator.geolocation.getCurrentPosition(posicion => {
            // console.log(posicion.coords.latitude)

            lon = posicion.coords.longitude
            lat = posicion.coords.latitude
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=85d747fb1f5e882b6627d0863a8c4065`
            console.log(url);

            fetch(url)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    console.log(data);
                    const temp = Math.round(data.main.temp)
                    temperaturaValor.textContent = `${temp}°C`

                    const desc = data.weather[0].description
                    temperaturaDescripcion.textContent = desc

                    const lugar = data.name
                    Ubicacion.textContent = lugar

                    const velocidadViento = data.wind.speed
                    vientoVelocidad.textContent = `${velocidadViento} m/s`

                    console.log(data.weather[0].main);
                    switch (data.weather[0].main) {
                        case 'Thunderstorm':
                            iconoAnimado.src = 'animated/thunder.svg'

                            break;
                        case 'Drizzle':
                            iconoAnimado.src = 'animated/rainy-2.svg'

                            break;
                        case 'Rain':
                            iconoAnimado.src = 'animated/rainy-7.svg'

                            break;
                        case 'Snow':
                            iconoAnimado.src = 'animated/snowy-6.svg'

                            break;
                        case 'Clear':
                            iconoAnimado.src = 'animated/day.svg'

                            break;
                        case 'Atmosphere':
                            iconoAnimado.src = 'animated/weather.svg'

                            break;
                        case 'Clouds':
                            iconoAnimado.src = 'animated/cloudy-day-1.svg'

                            break;


                    }

                })
                .catch(error => {
                    console.log(error);
                })
        })
    }

})
// usando API-Final