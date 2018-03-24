import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import methodOverride from "method-override";
import logger from "morgan";

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

app.listen(process.env.PORT || 8080);
