CREATE DATABASE first_test;

USE first_test;

CREATE TABLE cats 
  (
    cat_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100),
    AGE INT,
    PRIMARY KEY(cat_id)
  );