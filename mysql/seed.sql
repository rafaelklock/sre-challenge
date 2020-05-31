use preferences;

create table preferences (
    id int NOT NULL AUTO_INCREMENT,
    ip VARCHAR(20),
    preference VARCHAR(20),
    PRIMARY KEY (id)
);