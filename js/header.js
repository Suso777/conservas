document.addEventListener("DOMContentLoaded", () => {

  const header = `
        <header class="header-mariria" id="headerMenu">
            <div class="logoMenu">
                <a href="../index.html">
                    <img src="/img/logo.png" alt="Logo MAR I RÍA" class="logoImageSize">
                </a>
            </div>

            <div class="hamburgerMenu" id="hamburgerBtn">
                <img id="hamburgerIcon" 
                     src="/img/NavigationImg/menuOpen.png" 
                     alt="Abrir menú" 
                     class="hamburgerImage">
            </div>

            <nav class="navbar hidden" id="menu">
                <ul>
                    <li><a href="../index.html">Inicio</a></li>
                    <li><a href="../productos.html">Productos</a></li>
                    <li><a href="../contacto.html">Contacto</a></li>
                    <li><a href="../sobre-nosotros.html">Sobre Nosotros</a></li>
                    <li><a href="../cesta.html">Cesta</a></li>
                </ul>
            </nav>
        </header>
    `;

  document.body.insertAdjacentHTML("afterbegin", header);

  const menu = document.getElementById("menu");
  const btn = document.getElementById("hamburgerBtn");
  const icon = document.getElementById("hamburgerIcon");

  let abierto = false;

  btn.addEventListener("click", () => {
    abierto = !abierto;
    menu.classList.toggle("hidden");

    if (abierto) {
      icon.src = "/img/NavigationImg/menuOpen.png";
    } else {
      icon.src = "/img/NavigationImg/menuClosed.png";
    }
  });

});
