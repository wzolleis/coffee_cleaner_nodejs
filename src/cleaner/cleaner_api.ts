import { ICleaner, IDeletable } from "../types";
import { findAll, insert, update } from "./cleanerRepo";
import { deleteCleaner } from "./cleanerRepo"

export class Api {

    public findAllCleaners = (): ICleaner[] => {
        return findAll();
    }

    public saveCleaner = (cleaner: ICleaner): void => {
        update(cleaner);
    }

    public insertCleaner = (cleaner: ICleaner): void => {
        insert(cleaner);
    }

    public deleteCleaner = (toDelete: IDeletable): void => {
        deleteCleaner(toDelete);
    }
}

export const cleanerApi: Api = new Api();
