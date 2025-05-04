<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://lint.page/kit/4d0fe3.js" crossorigin="anonymous"></script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Antonio Velazquez's Agile Viper| ITIS 3135 | Home</title>
    <link rel="stylesheet" href="styles/default.css">
    
</head>

<style>    
body {
  color: #ffffff;
  background-color: #2a623d;
  font-family: sans-serif;
}
h1, h2, p{
  text-align: center;
  color: #ffffff;
}

ul {
  color: #ffffff;
  list-style-position: inside;
}

header {
  background-color: #1a472a;
  padding: 10px;
  text-align: center;
}

nav a {
margin: 0 15px;
text-decoration: none;
color:aliceblue;
font-weight: bold;
cursor: pointer;
text-align: center;
}

.hover {
color:aquamarine;
}

.footer{
margin: 0 15px;
text-decoration: none;
color:aliceblue;
font-weight: bold;
cursor: pointer;
}

.footer a {
text-decoration: none;
margin: 0 10px;
color:  #b3cde0;
}

section {
display: none;
padding: 20px;
}

.active {
display: block;
}

figcaption {
margin-top: 5px;
font-style: italic;
font-size: 0.9em;
font-style: bold;
}

figure {
margin: 10px 0;
text-align: center;
}
figure img {
width: 100%;
max-width: 700px;
height: auto;
border-radius: 5px;
}
  .footer a {
    text-decoration: none;
    margin: 0 10px; 
    color:  #b3cde0;
  }
  .footer a:visited {
    color: #b3cde0;
  }
  .footer a:hover {
    color: #fdb00b; 
  }
  .footer a:active {
    color: #ff6f69;
  }

  .separator {
    margin: 0 10px;
    font-weight: bold;
  }
</style>

<body>
    <header>
        <div data-include="../components/header.html"></div>
    </header>
    <main>
        <h2>Welcome to Team Vipers website!</h2>
        <p>
            
        </p>
    </main>
    <footer>
        <div data-include="../components/footer.html"></div>
    </footer>
    <script src="../scripts/HTMLInclude.min.js"></script>
</body>
</html>