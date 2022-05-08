-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- USE ecommerce_db;

-- CREATE TABLE category(
--     id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY, 
--     category_name VARCHAR(30) NOT NULL
-- );

-- CREATE TABLE product(
--     id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     product_name VARCHAR(30) NOT NULL, 
--     price DECIMAL NOT NULL,-- validates that the value is a decimal,
--     stock INTEGER NOT NULL SET DEFAULT 10,--validates value as numeric
--     category_id INTEGER, 
--     FOREIGN KEY (category_id)
--     REFERENCES category(id)
-- );

-- CREATE TABLE tag(
--     id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     tag_name VARCHAR(30)
-- );

-- CREATE TABLE productTag(
--     id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     product_id INTEGER, 
--     FOREIGN KEY (product_id)
--     REFERENCES product(id),
--     tag_id INTEGER,
--     FOREIGN KEY (tag_id)
--     REFERENCES tag(id)
-- );