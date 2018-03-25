import { findAll, update } from "./cleanerRepo";
import { ICleaner } from "./cleanerTypes";

export const findAllCleaners = async (res: any): Promise<void> => {
     const result: ICleaner[] = await findAll();
      // tslint:disable-next-line:no-console
     console.log("sending data =", result);
     res.send(result);
};

export const saveCleaner = async (cleaner: ICleaner, res: any): Promise<void>  => {
    // tslint:disable-next-line:no-console
    console.log("body", cleaner);
    const result: number = await update(cleaner);
    res.send(result);
};
