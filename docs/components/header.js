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
          justify-content: space-around; /* Space out links evenly */
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
            <img src="images/logo.png" width="8%" height="auto"/>
            <h1 class="aestheticText" style="color:#00246a;font-size: 3rem;">/home/danny</h1>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=VT323">
          </div>
        </div>

        <!-- Navigation Bar -->
        <div class="navbar" >
            <a class="aestheticText" style="font-size: 2rem;" href="index.html">..</a>
            <a class="aestheticText" style="font-size: 2rem;" href="resume.html">/resume</a>
            <a class="aestheticText" style="font-size: 2rem;" href="generic.html">/generic</a>
            <a class="aestheticText" style="font-size: 2rem;" href="thoughts.html">/thoughts</a>
        </div>
      </header>
    `;
  }
}

customElements.define('header-component', Header);