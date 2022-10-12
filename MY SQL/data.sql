
--my sql shell
--\sql
--\connect root@localhost:port
--ctrl + l
--show databases;
--CREATE DATABASE skilldemo;
--USE skilldemo;
--show tables;
--create table tablename(col datatype,.,.,.,.)
--
--CREATE TABLE students (
--Roll_No INT, 
--Name VARCHAR(10), 
--Age INT, 
--Contact INT
--);
--
--insert into table-name values()
--
--INSERT INTO students VALUES 
--(2,'Bran',19,62847263),
--(3,'Jhon',24,98765655),
--(4,'Max',21,36434242);
--
--select * from students;
--
--describe students;

--command line 
--select * from students;
--create table client_master(
--   Clientno varchar(50) ,
--   Name varchar(50),
--   city varchar(50),
--   pincode numeric(38),
--   state varchar(50),
--   baldue numeric(38)
--);
--insert into client_master values('C00001', 'Ivan', 'Bombay', 400054, 'Maharashtra', 15000);
--insert into client_master values('C00002', 'Vandana', 'Madras', 780001, 'Tamilnadu', 0);
--insert into client_master values('C00003', 'Pramada', 'Bombay', 400057, 'Maharashtra', 5000);
--insert into client_master values('C00004', 'Basu', 'Bombay', 400056, 'Maharashtra', 0);
--insert into client_master values('C00005', 'Ravi', 'Delhi', 100001, '', 2000);
--insert into client_master values('C00006', 'Rukmini', 'Bombay', 400050, 'Maharashtra', 0);
--select * from client_master;

--create table product_master(
--   productno varchar(50),
--   description varchar(50),
--   profitpercent numeric(38,2),
--   unitmeasured varchar(50),
--   qtyonhand numeric(38),
--   recorderlvl numeric(38),
--   sellprice numeric(38),
--   costprice numeric(38)
--);
--
--insert into product_master values('P00001','1.44floppies',5,'piece',100,20,525,500);
--insert into product_master values('P03453','Monitors',6,'piece',10,3,12000,11200);
--insert into product_master values('P06734','Mouse',5,'piece',20,5,1050,500);
--insert into product_master values('P07865','1.22 floppies',5,'piece',100,20,525,500);
--insert into product_master values('P07868','Keyboards',2,'piece',10,3,3150,3050);
--insert into product_master values('P07885','CD Drive',2.50,'piece',10,3,5250,5100);
--insert into product_master values('P07965','540 HDD',4,'piece',10,3,8400,8000);
--insert into product_master values('P07975','1.44 Drive',5,'piece',10,3,1050,1000);
--insert into product_master values('P08865','1.22 Drive',5,'piece',2,3,1050,1000);
--select * from product_master;

--create table salesman_master(
--    salesman_no varchar(50),
--    salesmanname varchar(50),
--    address varchar(50),
--    city varchar(50),
--    pincode numeric(38),
--    state varchar(50),
--    salamt numeric(38),
--    tgttoget numeric(38),
--    ytdsale numeric(38),
--    remark varchar(50)
--);
--
--insert into salesman_master values('S00001','Kiran','A/14 worli','Bombay',400002,'Mah',3000,100,50,'Good');
--insert into salesman_master values('S00002','Manish','65,nariman','Bombay',400001,'Mah',3000,200,100,'Good');
--insert into salesman_master values('S00003','Ravi','P-7 Bandra','Bombay',400032,'Mah',3000,200,100,'Good');
--insert into salesman_master values('S00004','Ashish','A/5 Juhu','Bombay',400044,'Mah',3000,200,150,'Good');
--select * from salesman_master;

--select * from client_master;
--
--select Clientno from client_master;
--select name from client_master;
--select city from client_master;
--select pincode from client_master;
--select state from client_master;
--select baldue from client_master;
--
--select *,name from client_master;

--select name "client" from client_master;
--
--select name as "client" from client_master;
--
--describe client_master;
--desc client_master;

--select name,state from client_master where city = 'Bombay';
--
--select name,state,baldue from client_master where baldue >1000;

--select name,state,baldue from client_master where baldue >1000 and city='Bombay';
--
--select name,state,baldue from client_master where baldue >1000 or city='Bombay';
--
--select name,state,baldue from client_master where baldue >1000 or city != 'Bombay';
--select name,state,baldue from client_master where baldue >1000 or city <> 'Bombay';

--all data delete
--delete from client_master;

--full table delete
--drop table client_master;

--for data delete
--delete from client_master where name = 'Ivan';

--select name,city from client_master;

--update client_master set city = 'Surat';

--update client_master set city = 'mumbai',baldue=10000 where name = 'basu';

--select name from client_master;
--
--select * from client_master;
--
--select name,city from client_master;

--select description from product_master;

--select * from client_master;
--
--select name from client_master where city = 'bombay';
--
--select * from salesman_master;

--select salesmanname from salesman_master where salamt = 3000;

--select * from client_master;

--update client_master set city = 'Banglore' where Clientno = 'C00005'; 
--
--select * from client_master;

--update client_master set baldue = 1000 where Clientno = 'C00001';
--
--select * from client_master;

--show tables;

--drop tables client_master,product_master,salesman_master,students;

--create table mybag(
--    colour varchar(30),
--    compartment int,
--    capacity varchar(30),
--    constraint pk_mybeg primary key(colour,compartment,capacity)
--);

--insert into mybag values("R",4,"25L");
--insert into mybag values("G",4,"25L");
--insert into mybag values("B",4,"25L");
--
--insert into mybag values("R",4,"30L");
--insert into mybag values("G",4,"30L");
--insert into mybag values("B",4,"30L");
--
--insert into mybag values("R",4,"35L");
--insert into mybag values("G",4,"35L");
--insert into mybag values("B",4,"35L");
--
--insert into mybag values("R",5,"25L");
--insert into mybag values("G",5,"25L");
--insert into mybag values("B",5,"25L");
--
--insert into mybag values("R",5,"30L");
--insert into mybag values("G",5,"30L");
--insert into mybag values("B",5,"30L");
--
--insert into mybag values("R",5,"35L");
--insert into mybag values("G",5,"35L");
--insert into mybag values("B",5,"35L");
--
--insert into mybag values("R",6,"25L");
--insert into mybag values("G",6,"25L");
--insert into mybag values("B",6,"25L");
--
--insert into mybag values("R",6,"30L");
--insert into mybag values("G",6,"30L");
--insert into mybag values("B",6,"30L");
--
--insert into mybag values("R",6,"35L");
--insert into mybag values("G",6,"35L");
--insert into mybag values("B",6,"35L");

--select * from mybag where compartment = 4;
--select * from mybag where compartment = 5;
--select * from mybag where compartment = 6;

--select * from mybag where colour = "R";
--select * from mybag where colour = "G";
--select * from mybag where colour = "B";

--select * from mybag where capacity = "25L";
--select * from mybag where capacity = "30L";
--select * from mybag where capacity = "35L";

--drop table mybag;






