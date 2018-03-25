CREATE TABLE cleaner (
    id         integer generated always as identity PRIMARY KEY,
    name       varchar(200) NOT NULL
);


CREATE TABLE teams (
    id         integer generated always as identity PRIMARY KEY,
    name       varchar(200) NOT NULL
);

CREATE TABLE team_cleaner_zuo (
    team         integer  REFERENCES teams (id),
    cleaner      integer  REFERENCES cleaner(id)
);