export interface ICleaner  {
    id?: number;
    name: string;
    team?: number;
}

export interface ICleanerDataMapper {
    mapRows: (rows: any) => ICleaner[];
}
