function nombreCelulares(marca, modelo, serie, cantidad) {

    const celular = {
        marca: marca,
        modelo: modelo,
        serie: serie,
        cantidad: cantidad
    }


    const lista = document.getElementById(`lista`)
    const row = document.createElement(`tr`)

    const colMarca = document.createElement(`td`)
    const colModelo = document.createElement(`td`)
    const colSerie = document.createElement(`td`)
    const colCantidad = document.createElement(`td`)

    colMarca.innerText = marca
    colModelo.innerText = modelo
    colSerie.innerText = serie
    colCantidad.innerText = cantidad

    row.appendChild(colMarca)
    row.appendChild(colModelo)
    row.appendChild(colSerie)
    row.appendChild(colCantidad)
    lista.appendChild(row)
    celularesGuardados.push(celular)

    Toastify({
        text: "se agrego exitosamete",
        duration: 1500,
    }).showToast()
}

const celularesGuardados = []

const btn1 = document.querySelector(`.btn1`)

btn1.addEventListener(`click`, () => {
    nombreCelulares("IPHONE", "A32", "09897", 1)

})

const btn2 = document.querySelector(`.btn2`)
btn2.addEventListener(`click`, () => {
    nombreCelulares("SAMSUNG", "A32", "00811", 1)

})

const btn3 = document.querySelector(`.btn3`)
btn3.addEventListener(`click`, () => {
    nombreCelulares("MOTOROLA", "G9 POWER", "00811", 1)
})

const btn4 = document.querySelector(`.btn4`)
btn4.addEventListener(`click`, () => {
    nombreCelulares("LG", "XT-615", "00811", 1)
})

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
    prueba ? alert(`debe llenar los datos`) : localStorage.setItem(`datos`, JSON.stringify(datosPersonas))

    formatear.reset()


})

const detalles = document.getElementById(`detalles`)
detalles.addEventListener(`click`, () => {

    const datosEntregas = JSON.parse(localStorage.getItem(`datos`))

    class pruebaDeDatos {
        constructor(nombre, apellido, email, direccion) {
            this.nombre = nombre
            this.apellido = apellido
            this.email = email
            this.direccion = direccion
            this.info = `<b>Nombre:</b> ${nombre} --><b>Apellido:</b>  ${apellido} --><b>Email:</b>  ${email} --><b>Direccion:</b>  ${direccion} `
        }
        mensaje() {
            return this.info
        }
    }
    const persona1 = new pruebaDeDatos(datosEntregas.nombre, datosEntregas.apellido, datosEntregas.email, datosEntregas.direccion)

    const listaDetalles = document.getElementById(`listaDetalles`)
    const row = document.createElement(`li`)
    row.innerHTML = persona1.mensaje()
    listaDetalles.appendChild(row)

    const listaCompras = document.getElementById(`listaCompras`)
    for (let i = 0; i < celularesGuardados.length; i++) {

        const listaProducto = document.createElement(`li`)
        listaProducto.innerHTML = celularesGuardados[i].marca
        listaCompras.appendChild(listaProducto)
    }
})
const finalizar = document.getElementById(`finalizar`)
finalizar.addEventListener(`click`, () => {

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'GRACIAS POR SU COMPRA!',
        text: `Su pedido esta activo`,
        showConfirmButton: false,
        timer: 3000,
    })

})