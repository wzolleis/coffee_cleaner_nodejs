import {IDatabase, IMain} from "pg-promise";
import pgPromise from "pg-promise";

const pgp: IMain = pgPromise({
    // Initialization Options
});

const cn: string = "postgres://postgres@localhost:5432/coffee_cleaner";

export const db: IDatabase<any> = pgp(cn);
