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

-- REAL PETS CATEGORY ========================

CREATE TABLE  real_pets(
	id int NOT NULL AUTO_INCREMENT,
	pet_name VARCHAR(255) NOT NULL,
	breed VARCHAR(100) NULL,
	age int NULL,
	pet_weight DECIMAL(4,2) NULL,
	price DECIMAL(6,2) NOT NULL,
	notes VARCHAR(400) NULL,
	adopted BOOLEAN DEFAULT FALSE NOT NULL,
	pic BLOB NULL,
	PRIMARY KEY (id)
);
-- ==========================================


-- FANTASY PETS CATEGORY=====================
CREATE TABLE fantasy_animals(
	id int NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	pic BLOB,
	age INT(5) NOT NULL,
	size_in_feet INT(5.5) NOT NULL,
	temperament VARCHAR(50) NOT NULL,
	price INT(20.3) NOT NULL,
	from_where VARCHAR(255) NOT NULL,
	matching_real_animal VARCHAR(50) NOT NULL,
	adopted BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
-- ============================================