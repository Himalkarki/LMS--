import express from "express";
import bookRouter from "./routes/bookRoutes.js"
import { connectToDB } from "./config/db.js";
import authRoutes from"./routes/UserRoutes.js";

const app = express();

const port = 5003;
connectToDB();
app.use(express.json());

app.get("/api/books", (req, res) => {
    res.json({
        sucess: true,
        messege: "This is the book route!  ",

    })
});
  app.post("/api/books/create", (req, res) => {
    res.json({
        sucess: true,
        messege: "This is the create route!  ",
    })
    })

app.use('/api/books',bookRouter);
app.use('/api/auth',authRoutes)



app.listen(port, () => {
    console.log(`server running  on ${port}`);
})