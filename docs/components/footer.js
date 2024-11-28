class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
          /* Footer */
            .footer {
                padding: 20px;
                text-align: center;
            }
            .linkSpace {
                flex: 10%;
                padding: 0px;
            }

            .linkSpace a {
                text-decoration: none;
                color: #00246a;
            }

            /* Change color on hover */
            .linkSpace:hover {
            background-color: #806cb4;
            color: black;
            }
        </style>
  
        <footer>
          <!-- Footer Image -->
          <div class="footer">
            <div class="row">
              <img src="images/logo.png" width="5%" height="auto" class="center" />
            </div>

            <!-- Footer Name and Year -->
            <div class="row">
                <div class="linkSpace">
                    <a href="index.html"><b>Daniela Michelle Vela Hernandez 2024</b></a>
                </div>
            </div>

            <!-- Footer Links -->
            <div class="row">
                <div class="linkSpace">
                    <a href="https://www.linkedin.com/in/daniela-vela-hernandez-225894269/">LinkedIn</a>
                </div>
                <div class="linkSpace">
                    <a href="https://github.com/dmvelahern/dmvelahern.github.io">Github</a>
                </div>
            </div>

          </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);