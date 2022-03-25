

const btn1 = document.querySelector(`.btn1`)
btn1.addEventListener(`click`, () => {

    const datos1 = {
        nombre: "Iphone",
        apellido: "A32",
        dni: "071525"
    }

    const lista = document.getElementById(`lista`)
    const row = document.createElement(`tr`)

    const colNombre = document.createElement(`td`)
    const colApellido = document.createElement(`td`)
    const colDni = document.createElement(`td`)

    colNombre.innerText = datos1.nombre
    colApellido.innerText = datos1.apellido
    colDni.innerText = datos1.dni


    row.appendChild(colNombre)
    row.appendChild(colApellido)
    row.appendChild(colDni)
    lista.appendChild(row)
    celularesGuardados.push(datos1)
})

const btn2 = document.querySelector(`.btn2`)
btn2.addEventListener(`click`, () => {

    const datos2 = {
        nombre: "Samsung",
        apellido: "A32",
        dni: "02323"
    }
    const lista = document.getElementById(`lista`)
    const row = document.createElement(`tr`)

    const colNombre = document.createElement(`td`)
    const colApellido = document.createElement(`td`)
    const colDni = document.createElement(`td`)

    colNombre.innerText = datos2.nombre
    colApellido.innerText = datos2.apellido
    colDni.innerText = datos2.dni


    row.appendChild(colNombre)
    row.appendChild(colApellido)
    row.appendChild(colDni)
    lista.appendChild(row)
    celularesGuardados.push(datos2)
})

const btn3 = document.querySelector(`.btn3`)
btn3.addEventListener(`click`, () => {

    const datos3 = {
        nombre: "Motorola",
        apellido: "G9Power",
        dni: "982635"
    }
    const lista = document.getElementById(`lista`)
    const row = document.createElement(`tr`)

    const colNombre = document.createElement(`td`)
    const colApellido = document.createElement(`td`)
    const colDni = document.createElement(`td`)

    colNombre.innerText = datos3.nombre
    colApellido.innerText = datos3.apellido
    colDni.innerText = datos3.dni


    row.appendChild(colNombre)
    row.appendChild(colApellido)
    row.appendChild(colDni)
    lista.appendChild(row)
    celularesGuardados.push(datos3)
})

const btn4 = document.querySelector(`.btn4`)
btn4.addEventListener(`click`, () => {

    const datos4 = {
        nombre: "LG",
        apellido: "XT-615",
        dni: "00234"
    }
    const lista = document.getElementById(`lista`)
    const row = document.createElement(`tr`)

    const colNombre = document.createElement(`td`)
    const colApellido = document.createElement(`td`)
    const colDni = document.createElement(`td`)

    colNombre.innerText = datos4.nombre
    colApellido.innerText = datos4.apellido
    colDni.innerText = datos4.dni


    row.appendChild(colNombre)
    row.appendChild(colApellido)
    row.appendChild(colDni)
    lista.appendChild(row)
    celularesGuardados.push(datos4)
})

const celularesGuardados = []



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
    prueba ? alert("debe llenar todos los datos") : localStorage.setItem(`datos`, JSON.stringify(datosPersonas))


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
        listaProducto.innerHTML = celularesGuardados[i].nombre
        listaCompras.appendChild(listaProducto)
    }
})