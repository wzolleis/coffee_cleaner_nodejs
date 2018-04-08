import { CLEANER_ID_COL, CLEANER_NAME_COL, CLEANER_TABLE, CLEANER_TEAM_COL } from "../ddl/Schema";

export const CREATE_CLEANER_TABLE_SQL = (): string => {
    return `CREATE TABLE IF NOT EXISTS ${CLEANER_TABLE} (${CLEANER_ID_COL}, ${CLEANER_NAME_COL}, ${CLEANER_TEAM_COL})`;
};

export const FIND_ALL_CLEANER_SQL = (): string => {
    return `SELECT t.* FROM ${CLEANER_TABLE} t`;
};

export const INSERT_CLEANER_SQL = "insert into cleaner (name) values (:name)";

export const UPDATE_CLEANER_SQL = "update cleaner set team = :team, name = :name WHERE id = :id";
