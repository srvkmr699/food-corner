import express from "express";
import cors from "cors";
import { SAMPLE_FOOD, SAMPLE_USERS } from "./data";
//import jwt from "jsonwebtoken";
import jwt from 'jsonwebtoken';

const app = express();

app.use(cors({
        credentials: true,
        origin: ["http://localhost:4200"],
}));

app.use(express.json());
// API endpoint = Get all foods
app.get("/api/foods",(req, res)=>{
    res.send(SAMPLE_FOOD);
});

// API endpoint = Get foods based on search term
app.get("/api/foods/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const foods = SAMPLE_FOOD.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(foods);
});

// API endpoint = Get food by id
app.get("/api/foods/:id", (req,res) => {
    const foodId = req.params.id;
    const food = SAMPLE_FOOD.find(food => food.id ===foodId)??[];
    res.send(food);
});

app.post("/api/users/login", (req,res) => {
    const {email, password} = req.body;
    const user = SAMPLE_USERS.find(user => user.email === email && user.password === password);
    if(user) {
        res.send(generateToken(user));
    } else {
        res.status(401).send("username or password is incorrect!");
    }
});

const generateToken = (user:any) => {

    const token = jwt.sign(
        {email:user.email, isAdmin:user.isAdmin},
        "srvkmr699",
        {expiresIn:"30d"}
    );
    user.token = token;
    return user;
};

const port = 5000;

app.listen(port, () => {
    console.log("Food Corner Backend is running on port: ", port);
})