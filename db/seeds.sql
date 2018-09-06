-- REAL PETS CATEGORY==========================================================================================================
INSERT INTO real_pets (pet_name, pet_type, pet_breed, pet_gender, pet_age, pet_weight, pet_price, pet_notes, pet_adopted, pet_pic, adopted_date, adoptedby_name, adoptedby_email, adoptedby_phone )

VALUE ("Max","Dog", "German shepherd", "m", "5", "15.5", "300.50", "Loyal", false,'German Shepherd.jpg', null, "", "", ""),

("Cooper","Dog", "Labrador", "m", "4", "6.32", "145.30", "Friendly", false,'labrador.jpg', null, "", "", ""), 

("Oscar", "Cat", "American Curl", "f", "2", "5.2", "150.50", "Good with kids", false,'chihuahua.jpg', null, "", "", ""), 

("Sam", "Cat", "Savannah", "f", "3", "2.5", "109.99", "Sleeps all the time", true, 'savannah.jpg', "2018-02-15", "Will Smith", "will.smith@yahoo.com", "301-869-5656"), 

("Angel", "Bird", "Parrot", "f", "1", "1.5", "49.50", "Chirpy", true,'Parrot.jpg', "2017-11-25", "Kristin Flores","kristin.flores40@example.com", "703-175-5488"),

("Coco", "Bird", "Dove", "m", "1", "1.0", "35.49", "Soft and beautiful", false, 'dove.jpg', null, "", "", ""),

("Spot", "Fish", "Goldfish", "m", "2", "1.0", "23.50", "Good for elder people", true,'Goldfish.jpg', "2017-02-23", "Nina Myers", "nina.myers75@example.com", "301-607-9183"), 

("Peachy", "Fish", "Cod", "f", "4", "3.5", "45.00", "Eye catching pet", true, 'cod.JPG', "2018-12-25", "Ivan Alexander", "ivan.alexander27@example.com", "392-229-8566"),

("Aggy", "Hamster", "Mesocricetus", "m", "4", "7.5", "135.60", "Adorable", false,'mesocricetus.jpg', null, "", "", ""), 

("Amber", "Hamster", "Chinese Hamster", "f", "3", "2.5", "28.99", "Cute and sweet", true, 'chinese hamster.jpg', "2017-12-08", "Abigail Simmmons", "abigail.simmmons58@example.com", "301-869-8795");
-- ===========================================================================================================================

-- FANTASY PETS CATEGORY======================================================================================================
INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUES ("Smaug", "171", "82", "arrogant", "5000.50", "Middle Earth: Lonely Mountain", "lizard", false,'Smaug.jpg');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUES ("Pikachu","17", "1", "endearing", "2530.00", "Pokemon World: Kanto", "chinchilla", false,'Pikachu.png');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUES ("Eevee", "5", "0.5", "adorable", "5000.00", "Pokemon World: Kanto", "fox", true,'Eevee.png');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUES ("Hedwig", "6", "1", "loyal", "450.00", "Harry Potter: Hogwarts", "owl", true,'hedwig.png');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUES ("Buckbeak", "4", "6", "arrogant", "10000.00", "Harry Potter: Hogwarts", "horse", false,'buckbeak.jpg');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUE ("Porgs", ".3", ".2", "nervously cute", "30.20", "Star Wars: Luke's Sulking Island", "puffins", false, 'porgs.jpg');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUE ("Mermaid", "20", "6.2", "lures sailors to their deaths with song", "100000.50", "The Sea", "fish", true, 'mermaid.png');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUE ("Firebird", "100", "23", "wild and free", "25000.20", "Russian Fairytales", "parrot", false, 'firebird.png');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUE ("Unicorn", "30", "7", "rainbowy", "7800.00", "Arthurian Legend", "horse", false, 'unicorn.png');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUE ("Jackalope", "2", "1", "fearsome crittur", "17.30", "North American folklore", "rabbit", true, 'jackalope.png');

INSERT INTO fantasy_animals (name, age, size_in_feet, temperament, price, from_where, matching_real_animal, adopted, pic)  
VALUE ("Bambi", "4", "12", "cute and pretty", "2000.59", "Walt Disney", "deer", true, 'bambi.png');
-- ======================================================================================================================

-- Adoption Form Entries ================================================================================================
INSERT INTO adoption_requests (client_name, client_email, client_phone, client_message, pet_id)
VALUE ("Amy Ross", "amy.ross@yahoo.com", "666-777-8888", "Adopting a pet has alway been my dream.", "1");

INSERT INTO adoption_requests (client_name, client_email, client_phone, client_message, pet_id)
VALUE ("Jack Martinez", "jack.martinez@gmail.com", "777-888-9999", "I love to adopt the parrot. Is it available?", "2");

INSERT INTO adoption_requests (client_name, client_email, client_phone, client_message, pet_id)
VALUE ("Sara Butler", "sara.butler@gmail.com", "555-666-2222", "Please contact me soon.", "3");

INSERT INTO adoption_requests (client_name, client_email, client_phone, client_message, pet_id)
VALUE ("Mike Lewis", "mike.lewis@yahoo.com", "222-333-9999", "How long will the process take for the adoption?", "4");

INSERT INTO adoption_requests (client_name, client_email, client_phone, client_message, pet_id)
VALUE ("Samantha Campbell", "samantha.campbell@yahoo.com", "444-555-5555", "I just love pets!","5");
-- ========================================================================================================================
