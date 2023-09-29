CREATE TABLE todos (
    id serial PRIMARY KEY,
    title VARCHAR NOT NULL,
    task VARCHAR NOT NULL,
    status VARCHAR NOT NULL,
    is_completed BOOLEAN NOT NULL,
);