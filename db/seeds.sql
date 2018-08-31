
-- REAL PETS CATEGORY==========================================================================================================
INSERT INTO real_pets (pet_name, breed, age, pet_weight, price, notes, adopted, pic)
VALUE ("Dog", "German shepherd", "5", "15.5", "300.50", "Loyal", false,'images/German Shepherd.jpg');

INSERT INTO real_pets (pet_name, breed, age, pet_weight, price, notes, adopted, pic)
VALUE ("Dog", "Labrador", "4", "6.32", "145.30", "Friendly", false,'images/labrador.jpg');

INSERT INTO real_pets (pet_name, breed, age, pet_weight, price, notes, adopted, pic) 
VALUE ("Cat", "American Curl", "2", "5.2", "150.50", "Good with kids", false,'images/chihuahua.jpg');

INSERT INTO real_pets (pet_name, breed, age, pet_weight, price, notes, adopted, pic) 
VALUE ("Cat", "Savannah", "3", "2.5", "109.99", "Sleeps all the time", true, 'images/savannah.jpg');

INSERT INTO real_pets (pet_name, breed, age, pet_weight, price, notes, adopted, pic)
VALUE ("Bird", "Parrot", "1", "1.5", "49.50", "Chirpy", true,'images/Parrot.jpg');

INSERT INTO real_pets (pet_name, breed, age, pet_weight, price, notes, adopted, pic)
VALUE ("Bird", "Dove", "1", "1.0", "35.49", "Soft and beautiful", false, 'images/dove.jpg');

INSERT INTO real_pets (pet_name, breed, age, pet_weight, price, notes, adopted, pic) 
VALUE ("Fish", "Goldfish", "2", "1.0", "23.50", "Good for elder people", true,'images/Goldfish.jpg');

INSERT INTO real_pets (pet_name, breed, age, pet_weight, price, notes, adopted, pic) 
VALUE ("Fish", "Cod", "4", "3.5", "45.00", "Eye catching pet" true, 'images/cod.JPG');

INSERT INTO real_pets (pet_name, breed, age, pet_weight, price, notes, adopted, pic)
VALUE ("Hamster", "Mesocricetus", "4", "7.5", "135.60", "Adorable", false,'images/mesocricetus.jpg');

INSERT INTO real_pets (pet_name, breed, age, pet_weight, price, notes, adopted, pic)
VALUE ("Hamster", "Chinese Hamster", "3", "2.5", "28.99", "Cute and sweet", true, 'images/chinese hamster.jpg');
-- ===========================================================================================================================

-- FANTASY PETS CATEGORY======================================================================================================
INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUES ("Smaug", "171", "82", "arrogant", "5000.50", "Middle Earth: Lonely Mountain", "lizard", false,'images/Smaug.jpg');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUES ("Pikachu","17", "1", "endearing", "2530.00", "Pokemon World: Kanto", "chinchilla", false,'images/Pikachu.png');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUES ("Eevee", "5", "0.5", "adorable", "5000.00", "Pokemon World: Kanto", "fox", true,'images/Eevee.png');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUES ("Hedwig", "6", "1", "loyal", "450.00", "Harry Potter: Hogwarts", "owl", true,'images/hedwig.png');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUES ("Buckbeak", "4", "6", "arrogant", "10000.00", "Harry Potter: Hogwarts", "horse", false,'images/buckbeak.jpg');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUE ("Porgs", ".3", ".2", "nervously cute", "30.20", "Star Wars: Luke's Sulking Island", "puffins", false, 'images/porgs.jpg');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUE ("Mermaid", "20", "6.2", "lures sailors to their deaths with song", "100000.50", "The Sea", "fish", true, 'images/mermaid.png');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUE ("Firebird", "100", "23", "wild and free", "25000.20", "Russian Fairytales", "parrot", false, 'images/firebird.png');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUE ("Unicorn", "30", "7", "rainbowy", "7800.00", "Arthurian Legend", "horse", false, 'images/unicorn.png');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUE ("Jackalope", "2", "1", "fearsome crittur", "17.30", "North American folklore", "rabbit", true, 'images/jackalope.png');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUE ("Bambi", "4", "12", "cute and pretty", "2000.59", "Walt Disney", "deer", true, 'images/bambi.png');
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
