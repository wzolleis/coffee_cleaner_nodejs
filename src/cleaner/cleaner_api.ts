import { Persistence } from "../persistence/Persistence";
import { ICleaner, IDeletable } from "../types";
import { findAll, insert, remove, update } from "./cleanerRepo";

export class Api {
    constructor() {
        // nothing
    }

    public findAllCleaners = (): ICleaner[] => {
        const persistence = new Persistence();
        try {
            persistence.connect();
            return findAll(persistence);
        } finally {
            persistence.close();
        }
    }

    public saveCleaner = (cleaner: ICleaner): void  => {
        const persistence = new Persistence();
        try {
            persistence.connect();
            update(cleaner, persistence);
        } finally {
            persistence.close();
        }
    }

    public insertCleaner = (cleaner: ICleaner): void  => {
        const persistence = new Persistence();
        try {
            persistence.connect();
            insert(cleaner, persistence);
        } finally {
            persistence.close();
        }
    }

    public deleteCleaner = (toDelete: IDeletable): void => {
        const persistence = new Persistence();
        try {
            persistence.connect();
            remove(toDelete, persistence);
        } finally {
            persistence.close();
        }
    }
}

export const cleanerApi: Api = new Api();
