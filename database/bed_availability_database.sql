USE bedability;

CREATE TABLE personnel(
	personnel_id int,
    name varchar(255),
    email varchar(255),
    position varchar(255),
    is_master bool,
    username varchar(255),
    password varchar(255),
    hospital_id int,
    PRIMARY KEY (personnel_id),
    FOREIGN KEY (hospital_id) REFERENCES hospital(hospital_id)
);

CREATE TABLE request(
	request_no int,
    FOREIGN KEY (patient_id) REFERENCES patient(patient_id),
    FOREIGN KEY (hospital_id) REFERENCES hospital(hospital_id),
    date_requested datetime,
    PRIMARY KEY (request_no)
);