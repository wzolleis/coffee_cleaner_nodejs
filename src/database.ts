import { Database} from "sqlite3";
import { createTables } from "./ddl/Schema";

// const memory: Database = new Database(":memory:");
const file: Database = new Database("./database/cleaner_db");

export const connectDatabase = (): Database => {
    // tslint:disable-next-line:no-console
    console.log("connect to db");
    return file;
};

export const closeDatabase = (db: Database): void => {
    // tslint:disable-next-line:no-console
    console.log("do not close database...", db);
};

export const prepareDatabase = (): void => {
    // tslint:disable-next-line:no-console
    console.log("prepare db");
    createTables();
};
