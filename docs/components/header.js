class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        /* Column container */
        .row {  
          display: flex;
          flex-wrap: wrap;
        }

        /* Header/logo Title */
        .header {
          text-align: center;
          background-color: #ffdce4;
          color: white;
        }

        /* Style the top navigation bar */
        .navbar {
          display: flex;
          background-color: pink;
        }
  
        /* Style the navigation bar links */
        .navbar a {
          color: white;
          padding: 14px 20px;
          text-decoration: none;
          text-align: center;
        }
  
        /* Change color on hover */
        .navbar a:hover {
          background-color: #806cb4;
          color: black;
        }

      </style>

      <header>
        <!-- Header -->
        <div class="header">
          <div class="row">
            <img src="images/logo.png" width="5%" height="auto"/>
            <h1 style="color:#00246a;">Danny's Dumpster Fire</h1>
          </div>
        </div>

        <!-- Navigation Bar -->
        <div class="navbar">
            <a href="index.html">Home</a>
            <a href="resume.html">Resume</a>
            <a href="generic.html">Generic</a>
            <a href="thoughts.html">Thoughts</a>
        </div>
      </header>
    `;
  }
}

customElements.define('header-component', Header);