import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import logger from "morgan";
import { cleanerApi } from "./cleaner/cleaner_api";
import { Persistence } from "./persistence/Persistence";
import { serverIo } from "./serverio/ServerIO";
import { ICleaner } from "./types";

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cors());

const router = express.Router();

app.route("/cc/api/cleaner")
    .get((req: any, res: any) => {
        const cleaners = cleanerApi.findAllCleaners();
        serverIo.sendResponse(res, cleaners);
    })
    .post((req: any, res: any) => {
        const cleaner: ICleaner = req.body;
        cleanerApi.insertCleaner(cleaner);
        serverIo.sendResponse(res, {});
    });

/**
 * update cleaner
 */
app.route("/cc/api/cleaner/:id")
    .put((req: any, res: any) => {
        const cleaner: ICleaner = req.body;
        const id: number = req.params.id;
        if (id !== cleaner.id) {
            console.log("die id in der url stimmt nicht mit der id im body überein");
            serverIo.sendError(res, 400, "die id in der url stimmt nicht mit der id im body überein");
            return;
        }
        cleanerApi.saveCleaner(cleaner);
        const data: object = {id};
        serverIo.sendResponse(res, data);
    });

/**
 * Erzeugt das Datenbankschema (nur zum Test)
 */
router.post("/cc/api/database/prepare", () => {
    const persistence = new Persistence();
    persistence.connect();
    persistence.prepare();
    persistence.close();
});

app.use("/", router);

app.listen(process.env.PORT || 8080, () => {
    // tslint:disable-next-line:no-console
    console.log("Coffe Cleaner app listening on port 8080!");
});
