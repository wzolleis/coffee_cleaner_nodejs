import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
const lodashId = require("lodash-id");

const adapter = new FileSync("./database/db.json");

export let db: any;

/**
 * Initialisiert die Datenbank - fuegt die Methoden von lodash-id hinzu
 */
export const initDatabase = () => {
    db = low(adapter);
    db._.mixin(lodashId);

    if (!db.has("cleaner")) {
        db.defaults({
            cleaner: [{
                id: 1,
                name: "Roberto Carlos",
                team: "2"
            }]
        }).write();
    }
};
