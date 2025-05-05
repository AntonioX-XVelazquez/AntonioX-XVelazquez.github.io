<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://lint.page/kit/4d0fe3.js" crossorigin="anonymous"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Royal Recruit Project Home</title>
    <link rel="stylesheet" href="RoyalRecruit/styles/default.css">
    
</head>
<body>

    <header>
        <h1>Royal Recruit</h1>
        <div class="header-box">  
            <nav>
            <button class="nav-button"><a href="../itis3135/RoyalRecruit.com">Home</a></button>
            <button class="nav-button"><a href="../itis3135/RoyalRecruit/AboutUs.html">About Us</a></button>
            <button class="nav-button"><a href="../itis3135/RoyalRecruit/ApplyToday.html">Apply Today</a></button>
            <button class="nav-button"><a href="../itis3135/RoyalRecruit/LocalEvents.html">Local Events</a></button>
            <button class="nav-button"><a href="../itis3135/RoyalRecruit/Resorces.html">Resorces</a></button>
        </nav> 
        </div>
    </header>

    <main>
        <div class="main-box">
            <div class="main-box-trim">
                <div class="main-box-center">
        <h2>Home</h2>
        <p>Welcome to my ITIS 3135 website!</p>
        <p>My name is <strong>Antonio Velazquez</strong> and I am a student at UNCC.</p>
        <p>My favorite hobbies are: Working out, playing video games, driving</p>
        </div>
        </div>
    </div>
    </main>
    <footer class="footer">
        <div data-include="components/RoyalFooter.html"></div>
    </footer>
    <script src="scripts/HTMLInclude.min.js"></script>

</body>
</html>