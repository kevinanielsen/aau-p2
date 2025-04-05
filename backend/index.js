import { startDB } from "./db.js";
import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:4000"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  }),
);

app.use('/', routes);

app.listen(4000, () => {
  console.log('Server is running on port 4000')
})
