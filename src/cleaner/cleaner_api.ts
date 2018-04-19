import { ICleaner, IDeletable } from "../types";
import { findAll, insert, update } from "./cleanerRepo";
import { deleteCleaner } from "./cleanerRepo"

export class Api {

    public findAllCleaners = (): ICleaner[] => {
        console.log("api: findAllCleaners");
        return findAll();
    }

    public saveCleaner = (cleaner: ICleaner): void => {
        update(cleaner);
    }

    public insertCleaner = (cleaner: ICleaner): void => {
        insert(cleaner);
    }

    public deleteCleaner = (toDelete: IDeletable): void => {
        console.log("api: deleteCleaner");
        deleteCleaner(toDelete);
    }
}

export const cleanerApi: Api = new Api();
