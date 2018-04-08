import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import methodOverride from "method-override";
import logger from "morgan";
import { cleanerApi } from "./cleaner/cleaner_api";
import { Persistence } from "./persistence/Persistence";
import { serverIo } from "./serverio/ServerIO";
import { ICleaner } from "./types";

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

/**
 * Alle Cleaner abfragen
 */
app.get("/cc/api/cleaner",  (req: any, res: any) => {
    const cleaners = cleanerApi.findAllCleaners();
    serverIo.sendResponse(res, cleaners);
});

/**
 * update cleaner
 */
app.post("/cc/api/cleaner/:id",  (req: any, res: any) => {
    const cleaner: ICleaner = req.body;
    const id: number = req.params.id;
    cleanerApi.saveCleaner(cleaner);
    const data: object = {id};
    serverIo.sendResponse(res, data);
});

/**
 * insert cleaner
 */
app.put("/cc/api/cleaner",  (req: any, res: any) => {
    const cleaner: ICleaner = req.body;
    console.log("cleaner=", JSON.stringify(cleaner));
    cleanerApi.insertCleaner(cleaner);
    serverIo.sendResponse(res, {});
});

/**
 * Erzeugt das Datenbankschema (nur zum Test)
 */
app.post("/cc/api/database/prepare", () => {
    const persistence = new Persistence();
    persistence.connect();
    persistence.prepare();
    persistence.close();
} );

app.listen(process.env.PORT || 8080, () => {
    // tslint:disable-next-line:no-console
    console.log("Example app listening on port 8080!");
});
