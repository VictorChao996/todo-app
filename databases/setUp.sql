CREATE DATABASE todo_db;

USE todo_db;

CREATE TABLE
    Todos (
        id int AUTO_INCREMENT PRIMARY KEY,
        title varchar(100)
    );

CREATE TABLE
    Users (
        id int AUTO_INCREMENT PRIMARY KEY,
        username varchar(30) NOT NULL,
        account varchar(30) NOT NULL UNIQUE,
        password varchar(255) NOT NULL,
        description varchar(100),
        create_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        INDEX (username, account)
    )