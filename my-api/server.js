// const express = require("express");
// const cors = require("cors");
// const app = express();


// // const cors = require("cors") Cross-Origin Resource Sharing;

// app.use(cors());
// app.use(express.json()); // Middleware to read JSON

// -------------------------------------------------------------------------- this is old that i have done Details page 
// so this will be not working in ID that's why i have created down new.

// Example route
// app.get("/api/APIUsers", (req, res) => {
//     res.json([
//         { id: 1, name: "Farfalle with Peas, Ham and Cream", image: "Farfalle.jpg" },
//         { id: 2, name: "Beef Lo Mein Noodles", image: "Beef-Lo-Mein-Noodles.jpg" },
//         { id: 4, name: "Bruschetta", image: "Bruschetta.jpg" },
//         { id: 5, name: "Lemon White Wine Chicken over Linguini", image: "Lemon-White-Wine-Chicken.jpg" },
//         { id: 6, name: "Linguine", image: "Linguine.jpg" },
//         { id: 7, name: "pistachio pasta", image: "pistachio-pasta.jpg" },
//         { id: 8, name: "Tagliatelle Con Vongole - Pasta With Little Clams", image: "Tagliatelle-Con-Vongole.jpg" },
//         { id: 9, name: "alfredopasta5", image: "alfredopasta5.webp" },
//         { id: 10, name: "spicy pasta", image: "spicy-pasta.jpg" },



//     ]);
// });
// -------------------------------------------------------------------------- 

// 2. New API for Details page working fine
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());



app.get("/api/APIUsers", (req, res) => {
    const users = [
        { id: 1, name: "Farfalle with Peas, Ham and Cream", image: "Farfalle.jpg", description: "Delicious creamy pasta with ham and peas." },
        { id: 2, name: "Beef Lo Mein Noodles", image: "Beef-Lo-Mein-Noodles.jpg", description: "Stir-fried noodles with beef and veggies." },
        { id: 4, name: "Bruschetta", image: "Bruschetta.jpg", description: "Toasted bread with tomatoes and basil." },
        { id: 5, name: "Lemon White Wine Chicken over Linguini", image: "Lemon-White-Wine-Chicken.jpg", description: "Chicken in lemon white wine sauce over pasta." },
        { id: 6, name: "Linguine", image: "Linguine.jpg", description: "Classic linguine pasta." },
        { id: 7, name: "pistachio pasta", image: "pistachio-pasta.jpg", description: "Creamy pasta with pistachio nuts." },
        { id: 8, name: "Tagliatelle Con Vongole - Pasta With Little Clams", image: "Tagliatelle-Con-Vongole.jpg", description: "Tagliatelle with clams." },
        { id: 9, name: "alfredopasta5", image: "alfredopasta5.webp", description: "Creamy Alfredo pasta." },
        { id: 10, name: "spicy pasta", image: "spicy-pasta.jpg", description: "Pasta with spicy tomato sauce." },
    ];
    res.json(users);
});

app.get("/api/APIUsers/:id", (req, res) => {
    const { id } = req.params;
    const users = [
        { id: 1, name: "Farfalle with Peas, Ham and Cream", image: "Farfalle.jpg", description: "Delicious creamy pasta with ham and peas." },
        { id: 2, name: "Beef Lo Mein Noodles", image: "Beef-Lo-Mein-Noodles.jpg", description: "Stir-fried noodles with beef and veggies." },
        { id: 4, name: "Bruschetta", image: "Bruschetta.jpg", description: "Toasted bread with tomatoes and basil." },
        { id: 5, name: "Lemon White Wine Chicken over Linguini", image: "Lemon-White-Wine-Chicken.jpg", description: "Chicken in lemon white wine sauce over pasta." },
        { id: 6, name: "Linguine", image: "Linguine.jpg", description: "Classic linguine pasta." },
        { id: 7, name: "pistachio pasta", image: "pistachio-pasta.jpg", description: "Creamy pasta with pistachio nuts." },
        { id: 8, name: "Tagliatelle Con Vongole - Pasta With Little Clams", image: "Tagliatelle-Con-Vongole.jpg", description: "Tagliatelle with clams." },
        { id: 9, name: "alfredopasta5", image: "alfredopasta5.webp", description: "Creamy Alfredo pasta." },
        { id: 10, name: "spicy pasta", image: "spicy-pasta.jpg", description: "Pasta with spicy tomato sauce." },
    ];
    const user = users.find(u => u.id === parseInt(id));

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    res.json(user);

})

app.use("/images", express.static("images"));
// Start server
app.listen(5000, () => console.log("Server running on port 5000"));