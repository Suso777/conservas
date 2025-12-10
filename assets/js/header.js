class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header-mariria" id="headerMenu">
        <div class="logoMenu">
            <a href="../index.html">
                <img src="../assets/img/logo.png" alt="Logo MAR I RÍA" class="logoImageSize">
            </a>
        </div>

        <div class="hamburgerMenu" id="hamburgerBtn">
            <img id="hamburgerIcon" 
                 src="../assets/img/NavigationImg/menuClosed.png" 
                 alt="Abrir menú" 
                 class="hamburgerImage">
        </div>

        <nav class="navbar hidden" id="menu">
            <ul>
                <li><a href="../index.html">Inicio</a></li>
                <li><a href="../html/saleProducts.html">Productos</a></li>
                <li><a href="../html/contacto.html">Contacto</a></li>
                <li><a href="../html/aboutUs.html">Conoce Mar i Ría</a></li>
                <li><a href="../html/developers.html">Nosotros</a></li>
                <li class="cesta-item"><a href="../html/basket.html">Cesta</a></li>
            </ul>
        </nav>
      </header>
    `;

    const menu = this.querySelector("#menu");
    const btn = this.querySelector("#hamburgerBtn");
    const icon = this.querySelector("#hamburgerIcon");

    let abierto = false;

    btn.addEventListener("click", () => {
      abierto = !abierto;
      menu.classList.toggle("hidden");

      icon.src = abierto
        ? "../assets/img/NavigationImg/menuOpen.png"
        : "../assets/img/NavigationImg/menuClosed.png";
    });
  }
}

customElements.define("my-custom-header", myHeader);
