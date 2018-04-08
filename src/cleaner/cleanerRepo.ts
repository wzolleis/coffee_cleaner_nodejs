import { CleanerDataMapper } from "../persistence/DataMapper";
import { Persistence } from "../persistence/Persistence";
import {
    DELETE_CLEANER_SQL,
    FIND_ALL_CLEANER_SQL,
    INSERT_CLEANER_SQL,
    UPDATE_CLEANER_SQL,
} from "../persistence/Statements";
import { ICleaner, ICleanerDataMapper, IDeletable } from "../types";

export const findAll = (persistence: Persistence): ICleaner[] => {
    const dataMapper: ICleanerDataMapper = new CleanerDataMapper();
    const rows: any = persistence.all(FIND_ALL_CLEANER_SQL);
    return dataMapper.mapRows(rows);
};

export const insert = (cleaner: ICleaner, persistence: Persistence): void => {
    persistence.run(INSERT_CLEANER_SQL, {
        name: cleaner.name,
    });
};

export const update = (cleaner: ICleaner, persistence: Persistence): void => {
    const team: number | null = cleaner.team ? cleaner.team : null;
    const id: number = cleaner.id ? cleaner.id : -1;
    persistence.run(UPDATE_CLEANER_SQL, {
        id,
        name: cleaner.name,
        team,
    });
};

export const remove = (toDelete: IDeletable, persistence: Persistence): void => {
    persistence.run(DELETE_CLEANER_SQL, {id: toDelete.id});
};
