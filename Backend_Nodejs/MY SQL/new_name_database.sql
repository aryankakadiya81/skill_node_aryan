-- CREATE DATABASE new;

-- create table manufacturers(
--     code int, 
--     name varchar(100),
--     constraint pk_manufacturers primary key (code)
--     );

-- insert into manufacturers values(1, 'Sony') ;
-- insert into manufacturers values(2, 'Creative Labs');
-- insert into manufacturers values(3, 'Hewlett-Packard') ;
-- insert into manufacturers values(4, 'Iomega' ) ;
-- insert into manufacturers values(5, 'Fujitsu');
-- insert into manufacturers values(6, 'Winchester');

-- select * from manufacturers;

-- create table products(
--     code int, 
--     name varchar(100), 
--     price int,
--     manufacturer int,   
--     constraint pk_products primary key (code), 
--     constraint fk_products foreign key (manufacturer) references manufacturers(code)
--     );

-- INSERT into products values(1, 'Hard drive',240,5) ;
-- INSERT into products values(2, 'Memory',120,6) ;
-- INSERT into products values(3, 'ZIP drive', 150,4) ;
-- INSERT into products values(4, 'Floppy disk',5,6) ;
-- INSERT into products values(5, 'Monitor',240,1) ;
-- INSERT into products values(6, 'DVD drive',180,2) ;
-- INSERT into products values(7, 'CD drive', 90,2) ;
-- INSERT into products values(8, 'Printer', 270,3) ;
-- INSERT into products values(9, 'Toner cartridge' ,66,3) ;
-- INSERT into products values(10, 'DVD burner', 180,2);

-- select * from products;

-- select name from products;

-- select name,price from products;

-- select name from products where price <= 200;

-- select name from products where price < 120 and 60 < price;

-- select name, price*100 as price_in_cent from products; 

-- select avg(price) from products;

-- select avg(price) from products where manufacturer = 2;

-- select price,name from products where 180 <= price order by price desc, name asc;

-- select * from products order by price desc;
-- select name,min(price) from products;

-- insert into products values(11, 'Loudspeakers', 70, 2);

-- update products set name='laser printer' where code = 8;
-- Select * from products;

-- select name, price,price*0.10 as discount,(price-price*0.10) as discount_amt from products;

-- update products set price = (price - price*0.10);

-- select * from products;

-- select name, price,price*0.10 as discount,(price-price*0.10) as discount_amt from products where 120 <= price;

-- inner join 
-- select products.code,products.name,products.price,products.manufacturer,manufacturers.code,manufacturers.name
-- from products
-- inner join manufacturers
-- on products.manufacturer = manufacturers.code;

-- select *
-- from products
-- inner join manufacturers
-- on products.manufacturer = manufacturers.code order by products.code asc;

-- left join
-- select products.code,products.name,products.price,products.manufacturer,manufacturers.code,manufacturers.name
-- from products
-- left join manufacturers
-- on products.manufacturer = manufacturers.code;

-- select *
-- from products
-- left join manufacturers
-- on products.manufacturer = manufacturers.code order by products.code asc;

-- right join
-- select products.code,products.name,products.price,products.manufacturer,manufacturers.code,manufacturers.name
-- from products
-- right join manufacturers
-- on products.manufacturer = manufacturers.code;

-- cross join
-- select *
-- from products
-- cross join manufacturers;

-- select a.name, a.price, b.name
-- from products a, manufacturers b
-- where a.manufacturer = b.code
-- and a.name = 'moniter';

-- select sum(a.price), b.name
-- from manufacturers b, products a
-- where b.code = a.manufacturer
-- group by b.name
-- having b.name = 'sony';

-- create view vw_sum_price as
-- select sum(a.price), b.name
-- from manufacturers b, products a
-- where b.code = a.manufacturer
-- group by b.name;

-- select * from vw_sum_price;

-- select * from manufacturers;

-- select * from products;

-- old query from sir_file_1

-- 10
-- select *
-- from products
-- inner join manufacturers
-- on products.manufacturer = manufacturers.code;

-- 11
-- select products.name, products.price, manufacturers.name
-- from products
-- inner join manufacturers
-- on products.manufacturer = manufacturers.code;

-- 12
-- select avg(a.price), b.code
-- from manufacturers b, products a
-- where b.code = a.manufacturer
-- group by b.name;

-- 13
-- select avg(a.price), b.name
-- from manufacturers b, products a
-- where b.code = a.manufacturer
-- group by b.code;

-- select avg(a.price), b.name
-- from manufacturers b, products a
-- where b.code = a.manufacturer
-- group by b.name;

-- 14
-- select avg(a.price), b.name
-- from manufacturers b, products a
-- where b.code = a.manufacturer
-- group by b.name
-- having 150 <= avg(a.price);

-- 15
-- select price, name from products order by price limit 1;

-- 16
-- select max(a.price), b.name
-- from manufacturers b, products a
-- where b.code = a.manufacturer
-- group by b.name 
-- order by max(a.price) desc
-- limit 1;
-- (subquery of 16)
-- select a.price, b.name
-- from manufacturers b, products a
-- where b.code = a.manufacturer
-- group by b.name 
-- having max(price) = (select max(price) from products);
