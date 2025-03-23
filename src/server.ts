import express from "express";
import path from "path";

const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "../public")));

// Create the home page route
app.get("/", (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Node.js Learning Path</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f4f4f4;
                color: #333;
            }
            h1 {
                color: #2c3e50;
                border-bottom: 2px solid #3498db;
                padding-bottom: 10px;
            }
            .nav {
                background-color: #fff;
                padding: 15px;
                margin-bottom: 15px;
                border-radius: 5px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }
            .nav ul {
                list-style: none;
                padding: 0;
            }
            .nav li {
                margin-bottom: 10px;
            }
            a {
                color: #3498db;
                text-decoration: none;
                font-size: 1.1em;
            }
            a:hover {
                text-decoration: underline;
            }
        </style>
    </head>
    <body>
        <h1>Node.js Learning Path</h1>
        <nav class="nav">
            <ul>
                <li><a href="/chap1.html">Chapter 1: Strengthen Core Node.js Skills</a></li>
                <li><a href="/chap2.html">Chapter 2: Master System Design</a></li>
                <li><a href="/chap3.html">Chapter 3: Enhance Problem-Solving</a></li>
                <li><a href="/chap4.html">Chapter 4: Level Up Testing</a></li>
                <li><a href="/chap5.html">Chapter 5: Deepen DevOps & Deployment Knowledge</a></li>
                <li><a href="/chap6.html">Chapter 6: Improve Code Quality & Leadership</a></li>
                <li><a href="/chap7.html">Chapter 7: Simulate Real-World Challenges</a></li>
                <li><a href="/problem.html">Common Node.js Problems</a></li>
                <li><a href="/system-problem.html">System Problems</a></li>
            </ul>
        </nav>
    </body>
    </html>
    `;
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
