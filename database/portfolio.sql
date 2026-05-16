CREATE DATABASE portfolio_db;
USE portfolio_db;

CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    description TEXT
);

INSERT INTO projects (title, description)
VALUES
('Portfolio Website', 'Responsive personal portfolio website'),
('Parent Monitoring System', 'Student monitoring application');

CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    message TEXT
);