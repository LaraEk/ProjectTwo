
-- REAL PETS CATEGORY==========================================================================================================
INSERT INTO real_pets (pet_name, breed, age, pet_weight, price, notes, adopted, pic)
VALUE ("Dog", "German shepherd", "5", "15.5", "300.50", "Loyal", false,'/images/German Shepherd.jpg');

INSERT INTO real_pets (pet_name, breed, age, pet_weight, price, notes, adopted, pic) 
VALUE ("Cat", "American Curl", "2", "5.2", "150.50", "Good with kids", false,'/images/chihuahua.jpg');

INSERT INTO real_pets (pet_name, breed, age, pet_weight, price, notes, adopted, pic)
VALUE ("Bird", "Parrot", "1", "1.5", "49.50", "Chirpy", true,'/images/Parrot.jpg');

INSERT INTO real_pets (pet_name, breed, age, pet_weight, price, notes, adopted, pic) 
VALUE ("Fish", "Goldfish", "2", "1.0", "23.50", "Good for elder people", true,'/images/Goldfish.jpg');

INSERT INTO real_pets (pet_name, breed, age, pet_weight, price, notes, adopted, pic)
VALUE ("Hamster", "Mesocricetus", "4", "7.5", "135.60", "Adorable", false,'/images/mesocricetus/.jpg');
-- ===========================================================================================================================

-- FANTASY PETS CATEGORY======================================================================================================
INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUES ("Smaug", "171", "82", "arrogant", "5000.50", "Middle Earth: Lonely Mountain", "lizard", false,'/images/Smaug.jpg');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUES ("Pikachu","17", "1", "endearing", "2530.00", "Pokemon World: Kanto", "chinchilla", false,'/images/Pikachu.jpg');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUES ("Eevee", "5", "0.5", "adorable", "5000.00", "Pokemon World: Kanto", "fox", true,'/images/Eevee.jpg');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUES ("Hedwig", "6", "1", "loyal", "450.00", "Harry Potter: Hogwarts", "owl", true,'/images/hedwig.jpg');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUES ("Buckbeak", "4", "6", "arrogant", "10000.00", "Harry Potter: Hogwarts", "horse", false,'/images/buckbeak.jpg');
-- ======================================================================================================================

--Adoption Form Entries ================================================================================================
INSERT INTO adoption_form (name, email, phone, message)
VALUE ("Amy Ross", "amy.ross@yahoo.com", "666-777-8888", "Adopting a pet has alway been my dream.");

INSERT INTO adoption_form (name, email, phone, message)
VALUE ("Jack Martinez", "jack.martinez@gmail.com", "777-888-9999", "I love to adopt the parrot. Is it available?");

INSERT INTO adoption_form (name, email, phone, message)
VALUE ("Sara Butler", "sara.butler@gmail.com", "555-666-2222", "Please contact me soon.");

INSERT INTO adoption_form (name, email, phone, message)
VALUE ("Mike Lewis", "mike.lewis@yahoo.com", "222-333-9999", "How long will the process take for the adoption?");

INSERT INTO adoption_form (name, email, phone, message)
VALUE ("Samantha Campbell", "samantha.campbell@yahoo.com", "444-555-5555", "I just love pets!");
-- ========================================================================================================================
