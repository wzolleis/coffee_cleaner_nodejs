import { Persistence } from "./Persistence";

export const CLEANER_TABLE: string = "cleaner";
export const CLEANER_ID_COL: string = "id INTEGER PRIMARY KEY AUTOINCREMENT";
export const CLEANER_NAME_COL: string = "name varchar(200) NOT NULL";
export const CLEANER_TEAM_COL: string = "team integer";

export class Schema {
    public createTables = (persistence: Persistence): void => {
        // persistence.run(CREATE_CLEANER_TABLE_SQL());
        console.log("database created", persistence);
    }
}

export const schema: Schema = new Schema();
