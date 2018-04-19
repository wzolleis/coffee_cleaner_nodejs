import * as _ from "lodash";
import { db } from "../persistence/Persistence";
import { ICleaner, IDeletable } from "../types";

export const findAll = (): ICleaner[] => {
    return db.get("cleaner").value();
};

export const insert = (cleaner: ICleaner): void => {
    const all = findAll();
    const maxBy = _.maxBy(all, "id");
    const nextId: number = !!maxBy && !!maxBy.id ? maxBy.id + 1 : 1;

    // Add a post
    db.get("cleaner")
        .push({id: nextId, name: cleaner.name})
        .write();

};

export const update = (cleaner: ICleaner): void => {
    if (!cleaner.id) {
        console.error("updateCleaner: keine id");
        return;
    }

    db.get("cleaner")
        .updateById(cleaner.id, cleaner)
        .write();
};

export const deleteCleaner = (toDelete: IDeletable): void => {
    db.get("cleaner")
        .removeById(toDelete.id)
        .write();
};
