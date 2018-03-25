import { db } from "../database";
import { ICleaner } from "./cleanerTypes";

export const findAll = async (): Promise<any> => {
    return db.any("SELECT * FROM cleaner");
};

export const update = (cleaner: ICleaner): any => {
    db.task(async (t): Promise<number> => {
        const selectSql: string = "SELECT id FROM cleaner WHERE name = $1";
        const insertSql: string = "INSERT INTO cleaner(name) VALUES($1) RETURNING id";
        const userId: number = await t.oneOrNone(selectSql, cleaner.name, (u: ICleaner): number => u && u.id);
        return userId || await t.one(insertSql, cleaner.name, (u: ICleaner): number => u.id);
    })
    .catch((error: any): number => {
        // failed
        // tslint:disable-next-line:no-console
        console.log("error in database", error);
        return -1;
    });
};
