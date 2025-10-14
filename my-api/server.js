const express = require("express");
const cors = require("cors");
const app = express();

// const cors = require("cors") Cross-Origin Resource Sharing;

app.use(cors());
app.use(express.json()); // Middleware to read JSON

// Example route
app.get("/api/APIUsers", (req, res) => {
    res.json([
        { id: 1, name: "Farfalle with Peas, Ham and Cream", image: "Farfalle.jpg" },
        { id: 2, name: "Beef Lo Mein Noodles", image: "Beef-Lo-Mein-Noodles.jpg" },
        { id: 4, name: "Bruschetta", image: "Bruschetta.jpg" },
        { id: 5, name: "Lemon White Wine Chicken over Linguini", image: "Lemon-White-Wine-Chicken.jpg" },
        { id: 6, name: "Linguine", image: "Linguine.jpg" },
        { id: 7, name: "pistachio pasta", image: "pistachio-pasta.jpg" },
        { id: 8, name: "Tagliatelle Con Vongole - Pasta With Little Clams", image: "Tagliatelle-Con-Vongole.jpg" },
        { id: 9, name: "alfredopasta5", image: "alfredopasta5.webp" },
        { id: 10, name: "spicy pasta", image: "spicy-pasta.jpg" },



    ]);
});
app.use("/images", express.static("images"));
// Start server
app.listen(5000, () => console.log("Server running on port 5000"));