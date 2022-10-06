CREATE EXTENSION IF NOT EXISTS "uuid-ossp"

CREATE TABLE IF NOT EXISTS Categories( 
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(200) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS Products(
	id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
	name VARCHAR(200) NOT NULL,
	price DECIMAL(8,2) NOT NULL,
	category_id INTEGER,
	FOREIGN KEY (category_id) REFERENCES Categories(id) ON DELETE CASCADE
);


SELECT
	p.name,
	p.price,
	c.name
FROM
	products p
JOIN
	categories c ON p.category_id = c.id