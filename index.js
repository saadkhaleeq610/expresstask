import express from "express"
import path from "path"
import { fileURLToPath } from "url";
import posts from './routes/posts.js';
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notfound from "./middleware/notfound.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 8000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger);
app.use('/api/posts', posts);


//error handler
app.use(notfound);
app.use(errorHandler);


app.listen(port, () => {
    console.log("The server is running");
});