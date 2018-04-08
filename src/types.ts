export interface ICleaner  {
    id?: number;
    name: string;
    team?: number;
}

export interface ICleanerDataMapper {
    mapRows: (error: any, rows: any) => void;
    error: () => any;
    cleaner: () => ICleaner[];
}
