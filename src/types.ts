export interface ICleaner  {
    id?: number;
    name: string;
    team?: number;
}

export interface ICleanerDataMapper {
    mapRows: (rows: any) => ICleaner[];
}

export interface IDeletable {
    id: number;
}
