const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(<!DOCTYPE html>
<html>
<head>
  <title>Finance Portal</title>
  <style>
    /* Global Styles */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    /* Header Styles */
    header {
      background-color: #1a237e;
      color: white;
      padding: 20px;
      text-align: center;
    }

    h1 {
      margin: 0;
      font-size: 32px;
    }

    /* Navigation Styles */
    nav {
      background-color: #3f51b5;
      color: white;
      padding: 10px;
      text-align: center;
    }

    nav ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    nav ul li {
      display: inline;
      margin-right: 10px;
    }

    nav ul li a {
      text-decoration: none;
      color: white;
    }

    /* Main Content Styles */
    main {
      margin: 20px;
      text-align: center;
    }

    h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      font-size: 18px;
      margin-bottom: 20px;
    }

    /* Footer Styles */
    footer {
      background-color: #9c27b0;
      color: white;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <header>
    <h1>Finance Portal</h1>
  </header>

  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Stocks</a></li>
      <li><a href="#">Bonds</a></li>
      <li><a href="#">Investments</a></li>
      <li><a href="#">News</a></li>
    </ul>
  </nav>

  <main>
    <h2>Welcome to the Finance Portal</h2>
    <p>Discover a world of financial opportunities and make informed decisions.</p>
    <p>Explore stocks, bonds, investments, and stay updated with the latest market news.</p>
    <p>Our expert financial advisors are here to assist you every step of the way.</p>
  </main>

  <footer>
    &copy; 2023 Finance Portal. All rights reserved.
  </footer>
</body>
</html>
);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
