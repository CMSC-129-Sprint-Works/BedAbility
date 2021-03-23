USE bedability;
CREATE TABLE hospital(
	hospital_id int,
    name varchar(255),
    address varchar(255),
    available_beds int
);

CREATE TABLE patient(
	patient_id int,
    name varchar(255),
    address varchar(255)
);