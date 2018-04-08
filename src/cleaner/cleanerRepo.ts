import { Persistence } from "../persistence/Persistence";
import { FIND_ALL_CLEANER_SQL, INSERT_CLEANER_SQL, UPDATE_CLEANER_SQL } from "../persistence/Statements";
import { ICleaner, ICleanerDataMapper } from "../types";

export const findAll = (persistence: Persistence, dataMapper: ICleanerDataMapper): void => {
    persistence.all(FIND_ALL_CLEANER_SQL(), dataMapper.mapRows);
};

export const insert = (cleaner: ICleaner, persistence: Persistence): void => {
    persistence.run(INSERT_CLEANER_SQL(cleaner.name), (err) => {
        if (err) {
            // tslint:disable-next-line:no-console
            console.log("insert with error", err);
            return;
        }
    });
};

export const update = (cleaner: ICleaner, persistence: Persistence): void => {
    const team: number | null = cleaner.team ? cleaner.team : null;
    const id: number = cleaner.id ? cleaner.id : -1;
    persistence.run(UPDATE_CLEANER_SQL(id, team), (err) => {
        if (err) {
            // tslint:disable-next-line:no-console
            console.log("update with error", err);
            return;
        }
    });
};
