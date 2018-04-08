CREATE TABLE cleaner (
  id   integer generated always as identity PRIMARY KEY,
  name varchar(200) NOT NULL,
  team integer
);