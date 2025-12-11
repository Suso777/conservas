/* assets/js/components/footer.js */

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <footer class="footer-mariria" id="footerMenu">
        
        <div class="grid">
            
            <div class="one">

                <a href="https://instagram.com" target="_blank" rel="noopener" class="social-link">
                    <i class="fa-brands fa-instagram"></i></a>
                
                <a href="https://facebook.com" target="_blank" rel="noopener" class="social-link">
                    <i class="fa-brands fa-facebook"></i></a>

                <a href="https://x.com" target="_blank" rel="noopener" class="social-link">
                    <i class="fa-brands fa-x-twitter"></i></a>

                <a href="https://discord.com" target="_blank" rel="noopener" class="social-link">
                    <i class="fa-brands fa-discord"></i></a>

            </div>
    
            <div class="two">
                <hr>
            </div>

            <div class="three">
                <div class="dreamDev">
                    copyright 2025 <img src="../assets/img/shared/icons/developers-icon-1.png" width="6%" href="https://suso777.github.io/dreamDevelopers/" alt="logo Dream Developers" title="dreamdevelopers.com">
                </div>
            <div>
        </div>

        </footer>
    `;


    }
}

/* Registramos el custom element */
customElements.define('my-custom-footer', MyFooter);