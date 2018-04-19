import * as _ from "lodash";
import { db } from "../persistence/Persistence";
import { ICleaner, IDeletable } from "../types";

const table = "cleaner";

const nextId = (): number => {
    const all = findAll();
    const maxBy = _.maxBy(all, "id");
    return !!maxBy && !!maxBy.id ? maxBy.id + 1 : 1;
};

export const findAll = (): ICleaner[] => {
    return db.get(table).value();
};

export const insert = (cleaner: ICleaner): void => {
    db.get(table)
        .push({id: nextId(), name: cleaner.name})
        .write();
};

export const update = (cleaner: ICleaner): void => {
    db.get(table)
        .updateById(cleaner.id, cleaner)
        .write();
};

export const deleteCleaner = (toDelete: IDeletable): void => {
    db.get(table)
        .removeById(toDelete.id)
        .write();
};
