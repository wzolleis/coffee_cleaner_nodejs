import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

const adapter = new FileSync("./database/db.json");

export let db = low(adapter);

export const initDatabase = () => {
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
