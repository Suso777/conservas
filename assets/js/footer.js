/* assets/js/components/footer.js */

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer-mariria" id="footerMenu">
        <a href="https://instagram.com" target="_blank" rel="noopener" class="social-link">
            <i class="fa-brands fa-instagram"></i>
        </a>

        <a href="https://facebook.com" target="_blank" rel="noopener" class="social-link">
            <i class="fa-brands fa-facebook"></i>
        </a>

        <a href="https://x.com" target="_blank" rel="noopener" class="social-link">
            <i class="fa-brands fa-x-twitter"></i>
        </a>

        <a href="https://discord.com" target="_blank" rel="noopener" class="social-link">
            <i class="fa-brands fa-discord"></i>
        </a>
        </footer>
    `;


    }
}

/* Registramos el custom element */
customElements.define('my-custom-footer', MyFooter);