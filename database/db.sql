

-- to create a new database
CREATE DATABASE empleados;

-- to use database
use empleados;

-- creating a new table
CREATE TABLE empleado (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);

-- to show all tables
show tables;

-- to describe table
describe empleados;