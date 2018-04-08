import { Database, Statement } from "sqlite3";
import { insert } from "../cleaner/cleanerRepo";
import { ICleaner } from "../cleaner/cleanerTypes";
import { closeDatabase, connectDatabase } from "../database";

export const CLEANER_TABLE: string = "cleaner";

const CLEANER_ID_COL: string = "id INTEGER PRIMARY KEY AUTOINCREMENT";
const CLEANER_NAME_COL: string = "name varchar(200) NOT NULL";
const CLEANER_TEAM_COL: string = "team integer";

export const createTables = (): void => {
    const db: Database = connectDatabase();

    // do something
    const cleanerTableSql: string =
        `CREATE TABLE IF NOT EXISTS ${CLEANER_TABLE} (${CLEANER_ID_COL}, ${CLEANER_NAME_COL}, ${CLEANER_TEAM_COL});`;

    const statement: Statement = db.prepare(cleanerTableSql);
    statement.run();
    statement.finalize();

    // tslint:disable-next-line:no-console
    console.log("database created");

    closeDatabase(db);
};

export const insertDummyValues = (): void => {
    const dummyCleaner: ICleaner = {
        name: "Franz Beckenbauer",
    };
    // tslint:disable-next-line:no-console
    console.log("insert into  cleaner", dummyCleaner);
    insert(dummyCleaner);
    // tslint:disable-next-line:no-console
    console.log("insert into cleaner...done", dummyCleaner);
};
