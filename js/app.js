const contenedorProductos = document.getElementById("productosContainer");
const buscador = document.getElementById("buscador");

function mostrarProductos(lista) {
    contenedorProductos.innerHTML = "";

    lista.forEach(p => {
        const col = document.createElement("div");
        col.className = "col-12 col-md-4 col-lg-3";

        col.innerHTML = `
        <div class="card h-100 shadow-sm">
            <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}" />
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${p.nombre}</h5>
                <p class="card-text">${p.descripcion}</p>
                <p><strong>${p.precio.toFixed(2)}€</strong></p>
                <button class="btn btn-primary mt-auto" onclick="añadirCesta(${p.id})">Añadir a la cesta</button>
            </div>
        </div>`;

        contenedorProductos.appendChild(col);
    });
}

mostrarProductos(productos);

buscador.addEventListener("input", e => {
    const texto = e.target.value.toLowerCase();
    const filtrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(texto) ||
        p.descripcion.toLowerCase().includes(texto)
    );
    mostrarProductos(filtrados);
});

function añadirCesta(id) {
    let cesta = JSON.parse(localStorage.getItem("cesta")) || [];

    const existe = cesta.find(p => p.id === id);

    if (existe) {
        existe.cantidad++;
    } else {
        const prod = productos.find(p => p.id === id);
        cesta.push({ ...prod, cantidad: 1 });
    }

    localStorage.setItem("cesta", JSON.stringify(cesta));
    alert("Producto añadido a la cesta");
}
