const contenedor = document.getElementById("cestaContainer");
const precioTotal = document.getElementById("precioTotal");
const btnVaciar = document.getElementById("vaciarCesta");

let cesta = JSON.parse(localStorage.getItem("cesta")) || [];

function mostrarCesta() {
    contenedor.innerHTML = "";

    if (cesta.length === 0) {
        contenedor.innerHTML = `<p class="text-center">Tu cesta está vacía.</p>`;
        precioTotal.textContent = "0.00 €";
        return;
    }

    cesta.forEach(prod => {
        const div = document.createElement("div");
        div.className = "card mb-3 shadow-sm";

        div.innerHTML = `
        <div class="row g-0">
            <div class="col-md-3">
                <img src="${prod.imagen}" class="img-fluid rounded-start" alt="${prod.nombre}">
            </div>
            <div class="col-md-9">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <p class="card-text">${prod.descripcion}</p>
                    <p class="card-text"><strong>${prod.precio.toFixed(2)} €</strong></p>

                    <div class="d-flex align-items-center gap-2">
                        <button class="btn btn-outline-secondary btn-sm" onclick="cambiarCantidad(${prod.id}, -1)">−</button>
                        <span><strong>${prod.cantidad}</strong></span>
                        <button class="btn btn-outline-secondary btn-sm" onclick="cambiarCantidad(${prod.id}, 1)">+</button>

                        <button class="btn btn-danger btn-sm ms-auto" onclick="eliminarProducto(${prod.id})">
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;

        contenedor.appendChild(div);
    });

    actualizarTotal();
}

function cambiarCantidad(id, cambio) {
    const item = cesta.find(p => p.id === id);
    if (!item) return;

    item.cantidad += cambio;

    if (item.cantidad <= 0) {
        cesta = cesta.filter(p => p.id !== id);
    }

    guardar();
}

function eliminarProducto(id) {
    cesta = cesta.filter(p => p.id !== id);
    guardar();
}

btnVaciar.addEventListener("click", () => {
    if (confirm("¿Quieres vaciar la cesta?")) {
        cesta = [];
        guardar();
    }
});

function guardar() {
    localStorage.setItem("cesta", JSON.stringify(cesta));
    mostrarCesta();
}

function actualizarTotal() {
    const total = cesta.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
    precioTotal.textContent = `${total.toFixed(2)} €`;
}

mostrarCesta();
