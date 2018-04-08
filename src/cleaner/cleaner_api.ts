import { findAll, insert, update } from "./cleanerRepo";
import { ICleaner } from "./cleanerTypes";

export const findAllCleaners = (res: any): void => {
     const result: ICleaner[] = findAll();
     res.send(result);
};

export const saveCleaner = (cleaner: ICleaner, res: any): void  => {
    const result: number = update(cleaner);
    res.send(result);
};

export const insertCleaner = (cleaner: ICleaner, res: any): void  => {
    const result: number = insert(cleaner);
    res.send(result);
};
