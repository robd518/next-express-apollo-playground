CREATE DATABASE IF NOT EXISTS employees;
USE employees;

DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
    emp_no          INT             NOT NULL,
    first_name      VARCHAR(14)     NOT NULL,
    last_name       VARCHAR(16)     NOT NULL,
    PRIMARY KEY     (emp_no)
);

INSERT INTO `employees` VALUES 
    (100, 'Bill', 'Gates'),
    (101, 'Steve', 'Jobs'),
    (102, 'Steve', 'Wozniak'),
    (103, 'John', 'Romero'),
    (104, 'John', 'Carmack'),
    (105, 'Tom', 'Hall'),
    (106, 'Adrian', 'Carmack'),
    (107, 'American', 'McGee');