-- Create the product table
CREATE TABLE
     product (
          id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
          product_name VARCHAR(255),
          product_price DECIMAL(10, 2)
     );

-- Create the customers_orders table
CREATE TABLE
     customers_orders (
          id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
          customer_name VARCHAR(255) NOT NULL,
          status VARCHAR(10),
          total DECIMAL(10, 2) DEFAULT 0, -- Default to 0, will be updated via trigger or application logic
          created_date DATE
     );

-- Create the order_products junction table
CREATE TABLE
     order_products (
          order_id INT,
          product_id INT,
          quantity INT,
          PRIMARY KEY (order_id, product_id),
          FOREIGN KEY (order_id) REFERENCES customers_orders (id) ON DELETE CASCADE,
          FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE
     );

INSERT INTO
     customers_orders (customer_name, total, status, created_date)
VALUES
     ('Damian Dip');

INSERT INTO
     order_products (order_id, product_id, quantity)
VALUES
     (2, 1, 2), -- order_id 1, product_id 1 (Aspirina), quantity 2
     (2, 2, 4);

-- order_id 1, product_id 2 (Paracetamol), quantity 1