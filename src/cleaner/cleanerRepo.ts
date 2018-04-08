import { CleanerDataMapper } from "../persistence/DataMapper";
import { Persistence } from "../persistence/Persistence";
import { FIND_ALL_CLEANER_SQL, INSERT_CLEANER_SQL, UPDATE_CLEANER_SQL } from "../persistence/Statements";
import { ICleaner, ICleanerDataMapper } from "../types";

export const findAll = (persistence: Persistence): ICleaner[] => {
    const dataMapper: ICleanerDataMapper = new CleanerDataMapper();
    const rows: any = persistence.all(FIND_ALL_CLEANER_SQL());
    return dataMapper.mapRows(rows);
};

export const insert = (cleaner: ICleaner, persistence: Persistence): void => {
    persistence.run(INSERT_CLEANER_SQL(cleaner.name));
};

export const update = (cleaner: ICleaner, persistence: Persistence): void => {
    const team: number | null = cleaner.team ? cleaner.team : null;
    const id: number = cleaner.id ? cleaner.id : -1;
    persistence.run(UPDATE_CLEANER_SQL(), {
        id,
        name: cleaner.name,
        team,
    });
};
