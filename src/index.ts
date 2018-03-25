import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import methodOverride from "method-override";
import logger from "morgan";
import { findAllCleaners, saveCleaner } from "./cleaner/cleaner_api";

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

app.get("/cc/api/cleaner", async (req: any, res: any) => {
   findAllCleaners(res);
});

app.post("/cc/api/cleaner", async (req: any, res: any) => {
    saveCleaner(req.body, res);
});

// tslint:disable-next-line:no-console
app.listen(process.env.PORT || 8080, () => console.log("Example app listening on port 8080!"));
