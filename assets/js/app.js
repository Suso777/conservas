const contenedorProductos = document.getElementById("productosContainer");
const buscador = document.getElementById("buscador");
let productos = []; 

async function cargarProductos() {
    try {
        const respuesta = await fetch("../assets/JSON/saleProducts.json");

        if (!respuesta.ok) {
            throw new Error("No se pudo cargar productos.json");
        }

        productos = await respuesta.json();
        mostrarProductos(productos);
        
    } catch (err) {
        console.error("Error cargando productos:", err);
        contenedorProductos.innerHTML = "<p>Error cargando productos.</p>";
    }
}

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

const cestaLink = document.querySelector(".cesta-item a");

if (cestaLink) {
    cestaLink.classList.add("cesta-animada");
    setTimeout(() => {
        cestaLink.classList.remove("cesta-animada");
    }, 500); 
}

}

cargarProductos();
