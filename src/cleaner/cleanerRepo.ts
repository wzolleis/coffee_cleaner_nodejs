import { Database, Statement } from "sqlite3";
import { closeDatabase, connectDatabase } from "../database";
import { CLEANER_TABLE } from "../ddl/Schema";
import { ICleaner } from "./cleanerTypes";

export const findAll = (): ICleaner[] => {
    const db: Database = connectDatabase();
    const statement: Statement = db.prepare(`SELECT * FROM ${CLEANER_TABLE}`);
    const cleaners: ICleaner[] = [];
    statement.all(((err, rows): any => {
        if (err) {
            // tslint:disable-next-line:no-console
            console.log("findAll with error", err);
            return;
        }
        rows.forEach((row) => {
            const cleaner: ICleaner = {
                id: row.id,
                name: row.name,
                team: row.team,
            };
            // tslint:disable-next-line:no-console
            console.log("cleaner gefunden", cleaner);
            cleaners.push(cleaner);
        });
    }));

    closeDatabase(db);
    return cleaners;
};

export const insert = (cleaner: ICleaner): number => {
    const db: Database = connectDatabase();

    const insertSql: string = `insert into ${CLEANER_TABLE} (name) values ('${cleaner.name}')`;
    const insertStatement: Statement = db.prepare(insertSql);
    insertStatement.run((err) => {
        if (err) {
            // tslint:disable-next-line:no-console
            console.log("insert with error", err);
            return;
        }
    });
    insertStatement.finalize();

    const selectSql: string = `select id from ${CLEANER_TABLE} where name = '${cleaner.name}'`;
    const selectStatement: Statement = db.prepare(selectSql);
    let index: number = -1;
    selectStatement.run((err: any, row: any) => {
        if (!err) {
            index = row;
        }
    });
    selectStatement.finalize();
    closeDatabase(db);
    return index;
};

export const update = (cleaner: ICleaner): number => {
    const db: Database = connectDatabase();
    const team: number | null = cleaner.team ? cleaner.team : null;
    const statement: Statement = db.prepare(`update ${CLEANER_TABLE} set team = ${team}`);
    statement.run();

    closeDatabase(db);
    return cleaner.id ? cleaner.id : -1;
};
