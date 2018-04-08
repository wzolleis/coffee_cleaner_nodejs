import { CleanerDataMapper } from "../persistence/DataMapper";
import { Persistence } from "../persistence/Persistence";
import { ICleaner, ICleanerDataMapper } from "../types";
import { findAll, insert, update } from "./cleanerRepo";

export class Api {
    constructor() {
        // nothing
    }

    public findAllCleaners = (): ICleaner[] => {
        const persistence = new Persistence();
        try {
            persistence.connect();
            const dataMapper: ICleanerDataMapper = new CleanerDataMapper();
            findAll(persistence, dataMapper);
            return dataMapper.cleaner();
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
}

export const cleanerApi: Api = new Api();
