import express from "express"
import path from "path"
import posts from './routes/posts.js'
import logger from "./middleware/logger.js";
const port = process.env.PORT || 8000;

const app = express();

// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger); // Move this line here
app.use('/api/posts', posts);

app.listen(port, () => {
    console.log("The server is running");
});