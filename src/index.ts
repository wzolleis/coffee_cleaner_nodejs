import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import methodOverride from "method-override";
import logger from "morgan";
import { findAllCleaners, insertCleaner, saveCleaner } from "./cleaner/cleaner_api";
import {prepareDatabase} from "./database";
import { insertDummyValues } from "./ddl/Schema";

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

app.get("/cc/api/cleaner",  (req: any, res: any) => findAllCleaners(res));

app.post("/cc/api/cleaner",  (req: any, res: any) => {
    saveCleaner(req.body, res);
});

app.put("/cc/api/cleaner",  (req: any, res: any) => {
    insertCleaner(req.body, res);
});

app.post("/cc/api/database/prepare", () => {
    prepareDatabase();
} );

app.listen(process.env.PORT || 8080, () => {
    prepareDatabase();
    insertDummyValues();
    // tslint:disable-next-line:no-console
    console.log("Example app listening on port 8080!");
});
