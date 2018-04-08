import { Persistence } from "../persistence/Persistence";
import { CREATE_CLEANER_TABLE_SQL } from "../persistence/Statements";

export const CLEANER_TABLE: string = "cleaner";
export const CLEANER_ID_COL: string = "id INTEGER PRIMARY KEY AUTOINCREMENT";
export const CLEANER_NAME_COL: string = "name varchar(200) NOT NULL";
export const CLEANER_TEAM_COL: string = "team integer";

export const createTables = (persistence: Persistence): void => {
    // do something

    persistence.run(CREATE_CLEANER_TABLE_SQL());

    // tslint:disable-next-line:no-console
    console.log("database created");

};
