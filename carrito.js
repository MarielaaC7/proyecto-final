document.addEventListener("DOMContentLoaded", () => {

    const renderizarProductos = () => {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        productosEnCarrito(carrito);

        let seccionProductos = document.getElementById("contenedor-carrito");
        seccionProductos.innerHTML = "";

        if (!carrito.length) {
            let mensajeCarrito = document.createElement("p");
            mensajeCarrito.classList.add("mensaje-carrito");
            mensajeCarrito.textContent = "No hay productos en el carrito.";

            seccionProductos.appendChild(mensajeCarrito);

        } else {
            carrito.forEach((Elemento, index) => {
                let tarjetaProducto = document.createElement("article");
                tarjetaProducto.classList.add("producto-carrito");

                let imgProducto = document.createElement("img");
                imgProducto.src = Elemento.images[0];
                imgProducto.alt = Elemento.title;

                let tituloProducto = document.createElement("h3");
                tituloProducto.textContent = Elemento.title;

                let precioProducto = document.createElement("p");
                precioProducto.textContent = `$${Elemento.price}`;

                let btnEliminar = document.createElement("button");
                btnEliminar.classList.add("btn-eliminar-carrito");
                btnEliminar.textContent = "Eliminar";

                btnEliminar.addEventListener("click", () => {
                    eliminarProducto(index);
                });

                tarjetaProducto.appendChild(imgProducto);
                tarjetaProducto.appendChild(tituloProducto);
                tarjetaProducto.appendChild(precioProducto);
                tarjetaProducto.appendChild(btnEliminar);

                seccionProductos.appendChild(tarjetaProducto);
            });

            
        }
        renderizarBotones();
    };

    const renderizarBotones = () => {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        let divAcciones = document.getElementById("acciones-carrito");
        divAcciones.innerHTML = "";

        if (carrito.length) {
            let btnVaciar = document.createElement("button");
            btnVaciar.textContent = "Vaciar el carrito";

            btnVaciar.addEventListener("click", () => {
                vaciarCarrito();
            });

            let btnFinalizar = document.createElement("button");
            btnFinalizar.textContent = "Finalizar compra";

            btnFinalizar.addEventListener("click", () => {
                let confirmado = confirm("¿Estás segurx que deseas finalizar la compra?");
                if (confirmado) {
                    alert("¡Gracias por su compra!");
                    localStorage.removeItem("carrito");
                    window.location.href = "Practica.html";
                }
            });

            divAcciones.appendChild(btnVaciar);
            divAcciones.appendChild(btnFinalizar);
        }
    };

    const productosEnCarrito = (carrito) => {
        let contadorCarrito = document.getElementById("contador-carrito");
        contadorCarrito.textContent = carrito.length;
    };

    const eliminarProducto = (indice) => {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.splice(indice, 1);

        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert("Producto eliminado.");
        renderizarProductos();
    };

    const vaciarCarrito = () => {
        localStorage.removeItem("carrito");
        alert("Carrito sin productos.");
        renderizarProductos();
    };

    renderizarProductos();
});
