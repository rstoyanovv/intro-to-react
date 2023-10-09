CREATE TABLE todos (
    id serial PRIMARY KEY,
    title VARCHAR NOT NULL,
    task VARCHAR NOT NULL,
    is_completed BOOLEAN NOT NULL,
    date_of_creating DATE DEFAULT CURRENT_DATE
);