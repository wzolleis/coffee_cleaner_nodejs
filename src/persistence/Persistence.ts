import Database from "better-sqlite3";

export class Persistence {
    private database: Database | undefined;

    constructor() {
        this.connect();
    }

    public connect = (): void => {
        if (!this.database) {
            this.database = new Database("./database/cleaner_db");
        }
    }

    public close = (): void => {
        if (this.database) {
            this.database.close();
            this.database = undefined;
        }
    }

    public run(statement: string, params: any = {}): void {
        if (this.database) {
            this.database.prepare(statement).run(params);
        } else {
            console.error("database not connected");
        }
    }

    public all(sql: string, params: any = {}): any {
        if (this.database) {
            return this.database.prepare(sql).all(params);
        }
    }
}
