import { Database, Statement, verbose } from "sqlite3";
import { createTables } from "../ddl/Schema";

export class Persistence {
    private database: Database | undefined;

    constructor() {
        this.connect();
    }

    public connect = (): void => {
        if (!this.database) {
            verbose();
            this.database = new Database("./database/cleaner_db");
        }
    }

    public close = (): void => {
        if (this.database) {
            this.database.close();
            this.database = undefined;
        }
    }

    public prepare = (): void => {
        createTables(this);
    }

    public run(statement: string, callback?: (this: Statement, err: Error | null, rows: any[]) => void): void {
        if (this.database) {
            this.database.run(statement, callback);
        } else {
            // tslint:disable-next-line:no-console
            console.log("database not connected");
        }
    }

    public all(statement: string, callback?: (this: Statement, err: Error | null, rows: any[]) => void): any {
        if (this.database) {
            this.database.all(statement, callback);
        }
    }
}
