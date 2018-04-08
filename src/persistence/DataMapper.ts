import { ICleaner, ICleanerDataMapper } from "../types";

export class CleanerDataMapper implements ICleanerDataMapper {
    public mapRows = (rows: any): ICleaner[] => {
        const cleaners: ICleaner[] = [];
        rows.forEach((row: any) => {
            const cleaner: ICleaner = {
                id: row.id,
                name: row.name,
                team: row.team,
            };
            cleaners.push(cleaner);
        });
        return cleaners;
    }
}
