import { ICleaner, ICleanerDataMapper } from "../types";

export class CleanerDataMapper implements ICleanerDataMapper {
    public err: any;
    private cleaners: ICleaner[] = [];

    public mapRows = (err: any, rows: any): void => {
        if (err) {
            // tslint:disable-next-line:no-console
            console.log("findAll with error", err);
            this.err = err;
        }
        rows.forEach((row: any) => {
            const cleaner: ICleaner = {
                id: row.id,
                name: row.name,
                team: row.team,
            };
            this.cleaners.push(cleaner);
        });
    }

    public error = (): any => this.err;

    public cleaner = (): ICleaner[] => this.cleaners;
}
