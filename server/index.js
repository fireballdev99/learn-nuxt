import express from "express";
import userRouter from "./routes/user.js";
import cors from "cors";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send(`Welcome on port ${port}`)
})

app.listen(port, () => console.log(`Server running on port ${port}`));

