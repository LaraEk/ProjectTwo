### Schema
DROP DATABASE IF EXISTS pets_db;
CREATE DATABASE pets_db;

USE pets_db;

-- -- MAIN TABLE=======================================
-- CREATE TABLE pets (
-- 	pet_id int NOT NULL AUTO_INCREMENT,
-- 	pet_type VARCHAR(10) NULL,
-- 	PRIMARY KEY (pet_id)
-- );
-- -- ============================================

CREATE TABLE  real_pets(
	id int NOT NULL AUTO_INCREMENT,
	pet_name VARCHAR(255) NOT NULL,
	pet_type VARCHAR(255) NOT NULL,
	pet_breed VARCHAR(255) NULL,
	pet_gender enum('m','f'),
	pet_age int NULL,
	pet_weight DECIMAL(4,2) NULL,
	pet_price DECIMAL(6,2) NOT NULL,
	pet_notes VARCHAR(400) NULL,
	pet_adopted BOOLEAN DEFAULT FALSE NOT NULL,
	pet_pic BLOB NULL,
	adopted_date DATE NULL,
	adoptedby_name VARCHAR(255) NULL,
	adoptedby_email VARCHAR(255) NULL,
	adoptedby_phone VARCHAR(30) NULL,
	PRIMARY KEY (id)
);
-- added adoption details here based on form fields in the adoption request to track info when a pet is adopted,
--  as they would in real life, but all fields optional
-- ==========================================


-- FANTASY PETS CATEGORY=====================
CREATE TABLE fantasy_animals(
	id int NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	pic BLOB NULL,
	age INT(5) NOT NULL,
	size_in_feet INT(5) NOT NULL,
	temperament VARCHAR(50) NOT NULL,
	price DECIMAL(20,3) NOT NULL,
	from_where VARCHAR(255) NOT NULL,
	matching_real_animal VARCHAR(50) NOT NULL,
	adopted BOOLEAN DEFAULT FALSE NOT NULL,
	PRIMARY KEY (id)
);
-- ============================================

-- Adoption Form===============================
CREATE TABLE adoption_requests (
	id INT NOT NULL AUTO_INCREMENT,
	client_name VARCHAR(255) NOT NULL,
	client_email VARCHAR(255) NOT NULL,
	client_phone VARCHAR(30) NULL,
	client_message VARCHAR(500) NULL,
	pet_id INT NULL,
	PRIMARY KEY (id)
);

