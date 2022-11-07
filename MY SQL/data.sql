
-- my sql shell
-- \sql
-- \connect root@localhost:port
-- ctrl + l
-- show databases;
-- CREATE DATABASE skilldemo;
-- USE skilldemo;
-- show tables;
-- create table tablename(col datatype,.,.,.,.)

-- CREATE TABLE students (
-- Roll_No INT, 
-- Name VARCHAR(10), 
-- Age INT, 
-- Contact INT
-- );

-- insert into table-name values()

-- INSERT INTO students VALUES 
-- (2,'Bran',19,62847263),
-- (3,'Jhon',24,98765655),
-- (4,'Max',21,36434242);

-- select * from students;

-- describe students
-- command line 
-- select * from students;
-- create table client_master(
--    Clientno varchar(50) ,
--    Name varchar(50),
--    city varchar(50),
--    pincode numeric(38),
--    state varchar(50),
--    baldue numeric(38)
-- );
-- insert into client_master values('C00001', 'Ivan', 'Bombay', 400054, 'Maharashtra', 15000);
-- insert into client_master values('C00002', 'Vandana', 'Madras', 780001, 'Tamilnadu', 0);
-- insert into client_master values('C00003', 'Pramada', 'Bombay', 400057, 'Maharashtra', 5000);
-- insert into client_master values('C00004', 'Basu', 'Bombay', 400056, 'Maharashtra', 0);
-- insert into client_master values('C00005', 'Ravi', 'Delhi', 100001, '', 2000);
-- insert into client_master values('C00006', 'Rukmini', 'Bombay', 400050, 'Maharashtra', 0);
-- select * from client_master
-- create table product_master(
--    productno varchar(50),
--    description varchar(50),
--    profitpercent numeric(38,2),
--    unitmeasured varchar(50),
--    qtyonhand numeric(38),
--    recorderlvl numeric(38),
--    sellprice numeric(38),
--    costprice numeric(38)
-- );

-- insert into product_master values('P00001','1.44floppies',5,'piece',100,20,525,500);
-- insert into product_master values('P03453','Monitors',6,'piece',10,3,12000,11200);
-- insert into product_master values('P06734','Mouse',5,'piece',20,5,1050,500);
-- insert into product_master values('P07865','1.22 floppies',5,'piece',100,20,525,500);
-- insert into product_master values('P07868','Keyboards',2,'piece',10,3,3150,3050);
-- insert into product_master values('P07885','CD Drive',2.50,'piece',10,3,5250,5100);
-- insert into product_master values('P07965','540 HDD',4,'piece',10,3,8400,8000);
-- insert into product_master values('P07975','1.44 Drive',5,'piece',10,3,1050,1000);
-- insert into product_master values('P08865','1.22 Drive',5,'piece',2,3,1050,1000);
-- select * from product_master
-- create table salesman_master(
--     salesman_no varchar(50),
--     salesmanname varchar(50),
--     address varchar(50),
--     city varchar(50),
--     pincode numeric(38),
--     state varchar(50),
--     salamt numeric(38),
--     tgttoget numeric(38),
--     ytdsale numeric(38),
--     remark varchar(50)
-- );

-- insert into salesman_master values('S00001','Kiran','A/14 worli','Bombay',400002,'Mah',3000,100,50,'Good');
-- insert into salesman_master values('S00002','Manish','65,nariman','Bombay',400001,'Mah',3000,200,100,'Good');
-- insert into salesman_master values('S00003','Ravi','P-7 Bandra','Bombay',400032,'Mah',3000,200,100,'Good');
-- insert into salesman_master values('S00004','Ashish','A/5 Juhu','Bombay',400044,'Mah',3500,200,150,'Good');
-- select * from salesman_master
-- select * from client_master;

-- select Clientno from client_master;
-- select name from client_master;
-- select city from client_master;
-- select pincode from client_master;
-- select state from client_master;
-- select baldue from client_master;

-- select *,name from client_master
-- select name "client" from client_master;

-- select name as "client" from client_master;

-- describe client_master;
-- desc client_master
-- select name,state from client_master where city = 'Bombay';

-- select name,state,baldue from client_master where baldue >1000
-- select name,state,baldue from client_master where baldue >1000 and city='Bombay';

-- select name,state,baldue from client_master where baldue >1000 or city='Bombay';

-- select name,state,baldue from client_master where baldue >1000 or city != 'Bombay';
-- select name,state,baldue from client_master where baldue >1000 or city <> 'Bombay'
-- all data delete
-- delete from client_master
-- full table delete
-- drop table client_master
-- for data delete
-- delete from client_master where name = 'Ivan'
-- select name,city from client_master
-- update client_master set city = 'Surat'
-- update client_master set city = 'mumbai',baldue=10000 where name = 'basu'
-- select name from client_master;

-- select * from client_master;

-- select name,city from client_master
-- select description from product_master
-- select * from client_master;

-- select name from client_master where city = 'bombay';

-- select * from salesman_master
-- select salesmanname from salesman_master where salamt = 3000
-- select * from client_master
-- update client_master set city = 'Banglore' where Clientno = 'C00005'; 

-- select * from client_master
-- update client_master set baldue = 1000 where Clientno = 'C00001';

-- select * from client_master
-- show tables
-- drop tables client_master,product_master,salesman_master,students
-- create table mybag(
--     colour varchar(30),
--     compartment int,
--     capacity varchar(30),
--     constraint pk_mybeg primary key(colour,compartment,capacity)
-- )
-- create table mybag(
--     colour varchar(30) primary key,
--     compartment int,
--     capacity varchar(30),
-- );
-- insert into mybag values("R",4,"25L");
-- insert into mybag values("G",4,"25L");
-- insert into mybag values("B",4,"25L");
-- insert into mybag values("R",4,"30L");
-- insert into mybag values("G",4,"30L");
-- insert into mybag values("B",4,"30L");
-- insert into mybag values("R",4,"35L");
-- insert into mybag values("G",4,"35L");
-- insert into mybag values("B",4,"35L");

-- insert into mybag values("R",5,"25L");
-- insert into mybag values("G",5,"25L");
-- insert into mybag values("B",5,"25L");
-- insert into mybag values("R",5,"30L");
-- insert into mybag values("G",5,"30L");
-- insert into mybag values("B",5,"30L");
-- insert into mybag values("R",5,"35L");
-- insert into mybag values("G",5,"35L");
-- insert into mybag values("B",5,"35L");

-- insert into mybag values("R",6,"25L");
-- insert into mybag values("G",6,"25L");
-- insert into mybag values("B",6,"25L");
-- insert into mybag values("R",6,"30L");
-- insert into mybag values("G",6,"30L");
-- insert into mybag values("B",6,"30L");
-- insert into mybag values("R",6,"35L");
-- insert into mybag values("G",6,"35L");
-- insert into mybag values("B",6,"35L")
-- select * from mybag where compartment = 4;
-- select * from mybag where compartment = 5;
-- select * from mybag where compartment = 6
-- select * from mybag where colour = "R";
-- select * from mybag where colour = "G";
-- select * from mybag where colour = "B"
-- select * from mybag where capacity = "25L";
-- select * from mybag where capacity = "30L";
-- select * from mybag where capacity = "35L"
-- drop table mybag;

-- drop tables client_master,salesman_master;

-- create table client_master(
--    Clientno varchar(50),
--    Name varchar(50),
--    Address1 varchar(50),
--    Address2 varchar(50),
--    city varchar(50),
--    pincode numeric(38),
--    state varchar(50),
--    baldue numeric(38),
--    constraint PK_CLIENT_MASTER primary key(Clientno)
-- );
-- insert into client_master values('C00001', 'Ivan', '1-madras soc.', 'nr. gopal temple', 'Bombay', 400054, 'Maharashtra', 15000);
-- insert into client_master values('C00002', 'Vandana', '6-krishna soc.', 'opp. shiv temple', 'Madras', 780001, 'Tamilnadu', 0);
-- insert into client_master values('C00003', 'Pramada', '2-sabjimandi soc.', 'opp. water station', 'Bombay', 400057, 'Maharashtra', 5000);
-- insert into client_master values('C00004', 'Basu', '902-finance heights', 'opp. bsc', 'Bombay', 400056, 'Maharashtra', 0);
-- insert into client_master values('C00005', 'Ravi', '67-abc soc.', 'opp. kbc temple', 'Delhi', 100001, '', 2000);
-- insert into client_master values('C00006', 'Rukmini', '1-pqr soc.', 'opp. xyz', 'Bombay', 400050, 'Maharashtra', 0);

-- create table product_master(
--    productno varchar(50),
--    description varchar(50),
--    profitpercent numeric(38,2),
--    unitmeasured varchar(50),
--    qtyonhand numeric(38),
--    recorderlvl numeric(38),
--    sellprice numeric(38),
--    costprice numeric(38),
--    constraint PK_PRODUCT_MASTER primary key(productno)
-- );

-- insert into product_master values('P00001','1.44floppies',5,'piece',100,20,525,500);
-- insert into product_master values('P03453','Monitors',6,'piece',10,3,12000,11200);
-- insert into product_master values('P06734','Mouse',5,'piece',20,5,1050,500);
-- insert into product_master values('P07865','1.22 floppies',5,'piece',100,20,525,500);
-- insert into product_master values('P07868','Keyboards',2,'piece',10,3,3150,3050);
-- insert into product_master values('P07885','CD Drive',2.50,'piece',10,3,5250,5100);
-- insert into product_master values('P07965','540 HDD',4,'piece',10,3,8400,8000);
-- insert into product_master values('P07975','1.44 Drive',5,'piece',10,3,1050,1000);
-- insert into product_master values('P08865','1.22 Drive',5,'piece',2,3,1050,1000);

-- create table salesman_master(
--     salesman_no varchar(50),
--     salesmanname varchar(50),
--     Address1 varchar(50),
--     Address2 varchar(50),
--     city varchar(50),
--     pincode numeric(38),
--     state varchar(50),
--     salamt numeric(38),
--     tgttoget numeric(38),
--     ytdsale numeric(38),
--     remark varchar(50),
--     constraint PK_salesman_MASTER primary key(salesman_no)
-- );

-- insert into salesman_master values('S00001','Kiran','A/14 worli','abc','Bombay',400002,'Mah',3000,100,50,'Good');
-- insert into salesman_master values('S00002','Manish','65,nariman','pqc','Bombay',400001,'Mah',3000,200,100,'Good');
-- insert into salesman_master values('S00003','Ravi','P-7 Bandra','kbc','Bombay',400032,'Mah',3000,200,100,'Good');
-- insert into salesman_master values('S00004','Ashish','A/5 Juhu','xyz','Bombay',400044,'Mah',3500,200,150,'Good');

-- create table sales_order(
--     Orderno varchar(50),
--     Clientno varchar(50),
--     Orderdate date,
--     Deltaddr varchar(50),
--     salesman_no varchar(50),
--     Delytype char(10),
--     Billyn char(10),
--     Delydate date,
--     Orderstatus varchar(50),
--     constraint PK_sales_order primary key(Orderno),
--     constraint FK_sales_order foreign key (Clientno) references client_master(Clientno),
--     constraint FK_sales_order1 foreign key (salesman_no) references salesman_master(salesman_no)
-- );

-- insert into sales_order values('O19001','C00001','2004-06-12','chikuwadi','S00001','F','N','2002-07-20','in process');
-- insert into sales_order values('O19002','C00002','2004-06-25','varachha','S00002','P','N','2002-06-27','cancelled');
-- insert into sales_order values('O46865','C00003','2004-02-18','punagam','S00003','F','Y','2002-02-20','fullfilled');
-- insert into sales_order values('O19003','C00001','2004-04-03','yogichowk','S00001','F','Y','2002-04-07','fullfilled');
-- insert into sales_order values('O46866','C00004','2004-05-20','mahavir','S00002','P','N','2002-05-22','cancelled');
-- insert into sales_order values('O19008','C00005','2004-05-24','jakatnaka','S00004','F','N','2002-07-26','in process');


-- create table sales_order_details(
--     Orderno varchar(50),
--     productno varchar(50),
--     Qtyordered numeric(38),
--     Qtydisp numeric(38),
--     Productrate numeric(38,2),
--     constraint FK_sales_order_details foreign key (Orderno) references sales_order(Orderno),
--     constraint FK_sales_order_details1 foreign key (productno) references product_master(productno)
-- );

-- insert into sales_order_details values('O19001','P00001',4,4,525);
-- insert into sales_order_details values('O19001','P07965',2,1,8400);
-- insert into sales_order_details values('O19001','P07885',2,1,5250);
-- insert into sales_order_details values('O19002','P00001',10,0,525);
-- insert into sales_order_details values('O46865','P07868',3,3,3150);
-- insert into sales_order_details values('O46865','P07885',3,1,5250);
-- insert into sales_order_details values('O46865','P00001',10,10,525);
-- insert into sales_order_details values('O46865','P03453',4,4,1050);
-- insert into sales_order_details values('O19003','P03453',2,2,1050);
-- insert into sales_order_details values('O19003','P06734',1,1,12000);
-- insert into sales_order_details values('O46866','P07965',1,0,8400);
-- insert into sales_order_details values('O46866','P07975',1,0,1050);
-- insert into sales_order_details values('O19008','P00001',10,5,525);
-- insert into sales_order_details values('O19008','P07975',5,3,1050);

-- update sales_order_details set productno = 'P0345' where Orderno = 'C'; 

-- select * from sales_order,sales_order_details;

-- create table mybag(
--     colour varchar(30),
--     compartment int,
--     capacity varchar(30),
--     colour1 varchar(30),
--     compartment1 int,
--     capacity1 varchar(30),
--     colour2 varchar(30),
--     compartment2 int,
--     capacity2 varchar(30),
--     colour3 varchar(30),
--     compartment3 int,
--     capacity3 varchar(30)
--     colour4 varchar(30),
--     compartment4 int,
--     capacity4 varchar(30),
--     colour5 varchar(30),
--     compartment5 int,
--     capacity5 varchar(30),
--     constraint pk_mybag primary key (compartment,compartment1,compartment2,compartment3,compartment4,compartment5
--     colour)
--     );

-- select * from client_master limit 2;

-- select * from client_master limit 5;

-- select distinct city,state from client_master;

-- select distinct city from client_master;

-- select city from client_master;

-- select * from client_master where name like 'ravi';

-- select * from client_master where name like 'i';

-- select * from client_master where name like '______';

-- select * from client_master where name like '____';

-- select * from client_master where name like '_____';

-- select * from client_master where name like '_a__';

-- select * from client_master where name like '_r_';

-- select * from client_master where name like '%r%';

-- select * from client_master where name like '%a%';

-- select * from client_master where name like '%d%';

-- select * from client_master where name like '%n_';

-- select * from client_master where name like '_a%';

-- select * from client_master where name like '%A';

-- select * from client_master where name like 'R%';

-- select * from client_master where name like 'A%';

-- select * from product_master where qtyonhand not in(10,2);

-- select * from product_master where qtyonhand in(10,2);

-- select * from salesman_master order by salesmanname,salesman_no;

-- select * from salesman_master order by salesmanname desc;

-- select * from product_master order by description;

-- source D:\ARYAN KAKADIYA\PROGRAMME\NODE_JS\MY SQL\data.sql


 
-- select LEFT("aryan kakadiya", 6);
-- select LEFT("aryan kakadiya", 7) as ExtractString;
-- select LEFT(Orderno, 5) as ExtractString from sales_order_details;
-- select LEFT(Orderno, 5) from sales_order_details;
-- select LEFT(Orderno, 5) as ExtractString, LEFT(Productrate, 2) as Extract from sales_order_details;

-- select length("aryan kakadiya");
-- select length("aryan kakadiya") as lengthfun;
-- select length(Orderno) as lengthfun from sales_order_details;
-- select length(Orderno),length(Productrate) from sales_order_details;
-- select length(Orderno),length(Productrate) as lnth from sales_order_details;
-- select length(Orderno) as num,length(Productrate) from sales_order_details;
-- select length(Orderno) as comm,length(Productrate) as lnth from sales_order_details;

-- select lower("ARyan KAKADiya");
-- select lower("ARyan KAKADiya") as lower;
-- select lower(Orderno) as lower from sales_order_details;
-- select lower(Orderno),lower(Productrate) from sales_order_details;
-- select lower(Orderno),lower(Productrate) as lnth from sales_order_details;
-- select lower(Orderno) as num,lower(Productrate) from sales_order_details;
-- select lower(Orderno) as comm,lower(Productrate) as low from sales_order_details;

-- select upper("ARyan KAKADiya");
-- select upper("ARyan KAKADiya") as up;
-- select upper(Orderno) as up from sales_order_details;
-- select upper(Orderno),upper(Productrate) from sales_order_details;
-- select upper(Orderno),upper(Productrate) as up from sales_order_details;
-- select upper(Orderno) as up1, upper(Productrate) from sales_order_details;
-- select upper(Orderno) as up1, upper(Productrate) as up2 from sales_order_details;

-- select upper("ARyan KAKADiya");
-- select upper("ARyan KAKADiya") as up;
-- select upper(Orderno) as up from sales_order_details;
-- select upper(Orderno),upper(Productrate) from sales_order_details;
-- select upper(Orderno),upper(Productrate) as up from sales_order_details;
-- select upper(Orderno) as up1, upper(Productrate) from sales_order_details;
-- select upper(Orderno) as up1, upper(Productrate) as up2 from sales_order_details;

-- select lpad("ARyan KAKADiya", 14, "ABC");
-- select lpad("ARyan KAKADiya", 17, "ABC");
-- select lpad("ARyan KAKADiya", 20, "ABC");
-- select lpad("ARyan KAKADiya", 22, "ABC");
-- select lpad("ARyan KAKADiya", 17, "ABC") AS lap;
-- select lpad(description, 17, "aryan") as lap1 from product_master;
-- select lpad(description, 17, "aryan") as lap1, lpad(productno, 16, "kp") from product_master;
-- select lpad(description, 17, "aryan") as lap1, lpad(productno, 16, "kp") as lap2 from product_master;

-- select ltrim("       aryan ");
-- select ltrim("       aryan ");
-- select ltrim("     kakadiya ") as trimfun;
-- select ltrim(Orderno) as trimfun from sales_order_details;
-- select ltrim(Orderno) as trimfun, ltrim(Productrate) from sales_order_details;
-- select ltrim(Orderno) as trimfun, ltrim(Productrate) as trimfun1 from sales_order_details;

-- alter table table_name add column_name datatype;
-- alter table table_name drop column_name datatype;
-- alter table table_name modify column_name datatype; 

-- string function 

-- /left/:-
-- select  left(name,5) as name from client_master;

-- /length/:-
-- select length("name") as name;

-- /Lower/:-
-- select Lower("NAME");

-- /Lpad/:-
-- select lpad("SQL",6,"OOM");

-- /LTRIM/:-
-- select LTRIM("      sql op");

-- /MID & SUBSTR & SUBSTRING/:-
-- select mid("sql tutorial",5,3);

-- /Repeat/:-
-- select Repeat("sql",3);

-- /Replace/:-
-- select Replace("sql tutorial","sql","html");

-- /Right/:-
-- select Right("sql tutorial",4);

-- /RPAD/:-
-- select RPAD("sql",8,"ABC");

-- /RTRIM/:-
-- select RTRIM("sql     ") as name; 

-- /STRCMP/:-
-- select STRCMP("sql","sql");

-- /TRIM/:-
-- select TRIM("    sql     ") as name;

-- /UCASE & UPPER/:-
-- select UPPER("sql");

-- /Maths Function/:-

-- /ABS/:-
-- SELECT ABS(-243.5);

-- /AVG/:-
-- SELECT AVG(sellprice) AS AveragePrice FROM product_master;

-- /CEIL/:-
-- SELECT CEIL(25.75);

-- /COUNT/:-
-- SELECT COUNT(clientno) AS NumberOfProducts FROM client_master;

-- /DIV/:-
-- SELECT 10 DIV 5;

-- /FLOOR/:-
-- SELECT FLOOR(25.75);

-- /MAX/:-
-- SELECT MAX(sellprice) AS LargestPrice FROM product_master;

-- /MIN/:-
-- SELECT min(sellprice) AS smallestPrice FROM product_master;

-- /MOD/:-
-- SELECT MOD(18, 4);

-- /PI/:-
-- select pi();

-- /POW/:-
-- SELECT POW(4, 2);

-- /RAND/:-
-- select rand();

-- /ROUND/:-
-- SELECT ROUND(135.375, 2);

-- /SQRT/:-
-- SELECT SQRT(64);

-- /SUM/:-
-- SELECT SUM(sellprice) AS TOTAL FROM product_master;

-- select * from client_master where name like '_a%';

-- select * from client_master where city like 'm%';

-- select * from client_master where city = 'delhi' or city = 'bombay';

-- select * from client_master where baldue > 10000;

-- select * from sales_order where Orderdate < '2004-07-1' and Orderdate >= '2004-06-1';

-- select * from client_master where Clientno = 'C00001' or Clientno = 'C00002';

-- select * from product_master where sellprice > 500 and sellprice <= 750;

-- alter table product_master add column new_price int;
-- update product_master set new_price=(sellprice*0.15)+sellprice where sellprice>500;
-- select * from product_master;

-- select name,city,state from client_master where state != 'Maharashtra'; 

-- SELECT COUNT(Orderno) as total_orders FROM sales_order_details;

-- SELECT AVG(sellprice) as avg_price FROM product_master;

-- SELECT min(sellprice) as min_price, max(sellprice) as max_price FROM product_master;

-- SELECT COUNT(sellprice) as under_500 FROM product_master where sellprice<=500;

-- select * from product_master where qtyonhand < recorderlvl;

-- select curdate();

-- select now();

-- SELECT ADDDATE("2017-06-15 09:34:21", INTERVAL 15 MINUTE);
-- SELECT ADDDATE(now(), INTERVAL -3 HOUR) as '-3_hour';
-- SELECT ADDDATE(now(), INTERVAL -2 MONTH);

-- SELECT ADDTIME("2017-06-15 09:34:21", "2");
-- SELECT ADDTIME("2017-06-15 09:34:21.000001", "5.000003");
-- SELECT ADDTIME("2017-06-15 09:34:21.000001", "2:10:5.000003");
-- SELECT ADDTIME("2017-06-15 09:34:21.000001", "5 2:10:5.000003");
-- SELECT ADDTIME("09:34:21.000001", "2:10:5.000003") as addtime;

-- SELECT CURDATE();
-- SELECT CURDATE() + 1 as cur;

-- SELECT CURRENT_DATE();
-- SELECT CURRENT_DATE() + 1; -- second day(+1)

-- SELECT CURRENT_TIME() + 1;-- second day(+1)
-- SELECT CURRENT_TIME() ;

-- SELECT CURRENT_TIMESTAMP() + 1;
-- SELECT CURRENT_TIMESTAMP();

-- SELECT CURTIME();
-- SELECT CURTIME() + 1; -- (+1) second add

-- SELECT DATE("2017-06-15 09:34:21");
-- SELECT DATE("The date is 2017-06-15");
-- SELECT DATE(OrderDate) FROM Orders; -- from tables

-- SELECT DATEDIFF("2017-06-25", "2017-06-15"); -- for add time
-- SELECT DATEDIFF("2017-06-25 09:34:21", "2017-06-15 15:25:35");
-- SELECT DATEDIFF(now(),"2022-01-19");
-- SELECT DATEDIFF("2017-01-01", "2016-12-24");

-- SELECT DATE_ADD("2017-06-15", INTERVAL 10 DAY);
-- SELECT DATE_ADD("2017-06-15 09:34:21", INTERVAL 15 MINUTE);
-- SELECT DATE_ADD("2017-06-15 09:34:21", INTERVAL -3 HOUR);
-- SELECT DATE_ADD(now(), INTERVAL -3 HOUR);
-- SELECT DATE_ADD("2017-06-15", INTERVAL -2 MONTH);

-- SELECT DATE_FORMAT("2017-06-15", "%Y");
-- SELECT DATE_FORMAT("2017-06-15", "%M %d %Y");
-- SELECT DATE_FORMAT("2017-06-15", "%W %M %e %Y");
-- SELECT DATE_FORMAT(BirthDate, "%W %M %e %Y") FROM Employees;
-- %a	Abbreviated weekday name (Sun to Sat)
-- %b	Abbreviated month name (Jan to Dec)
-- %c	Numeric month name (0 to 12)
-- %D	Day of the month as a numeric value, followed by suffix (1st, 2nd, 3rd, ...)
-- %d	Day of the month as a numeric value (01 to 31)
-- %e	Day of the month as a numeric value (0 to 31)
-- %f	Microseconds (000000 to 999999)
-- %H	Hour (00 to 23)
-- %h	Hour (00 to 12)
-- %I	Hour (00 to 12)
-- %i	Minutes (00 to 59)
-- %j	Day of the year (001 to 366)
-- %k	Hour (0 to 23)
-- %l	Hour (1 to 12)
-- %M	Month name in full (January to December)
-- %m	Month name as a numeric value (00 to 12)
-- %p	AM or PM
-- %r	Time in 12 hour AM or PM format (hh:mm:ss AM/PM)
-- %S	Seconds (00 to 59)
-- %s	Seconds (00 to 59)
-- %T	Time in 24 hour format (hh:mm:ss)
-- %U	Week where Sunday is the first day of the week (00 to 53)
-- %u	Week where Monday is the first day of the week (00 to 53)
-- %V	Week where Sunday is the first day of the week (01 to 53). Used with %X
-- %v	Week where Monday is the first day of the week (01 to 53). Used with %x
-- %W	Weekday name in full (Sunday to Saturday)
-- %w	Day of the week where Sunday=0 and Saturday=6
-- %X	Year for the week where Sunday is the first day of the week. Used with %V
-- %x	Year for the week where Monday is the first day of the week. Used with %v
-- %Y	Year as a numeric, 4-digit value
-- %y	Year as a numeric, 2-digit value

-- SELECT DATE_SUB("2017-06-15", INTERVAL 10 DAY); -- less time,day
-- SELECT DATE_SUB("2017-06-15 09:34:21", INTERVAL 15 MINUTE);
-- SELECT DATE_SUB("2017-06-15 09:34:21", INTERVAL 3 HOUR);
-- SELECT DATE_SUB("2017-06-15", INTERVAL -2 MONTH);
-- MICROSECOND
-- SECOND
-- MINUTE
-- HOUR
-- DAY
-- WEEK
-- MONTH
-- QUARTER
-- YEAR
-- SECOND_MICROSECOND
-- MINUTE_MICROSECOND
-- MINUTE_SECOND
-- HOUR_MICROSECOND
-- HOUR_SECOND
-- HOUR_MINUTE
-- DAY_MICROSECOND
-- DAY_SECOND
-- DAY_MINUTE
-- DAY_HOUR
-- YEAR_MONTH





-- SELECT DATEDIFF(now(),"2000-01-19");

-- SELECT DATE_FORMAT(DATEDIFF("2022-01-19",curdate()), "%Y");
 
-- select DATE_FORMAT (from_days(DATEDIFF(now(),'2004-04-19')),'%y %m %d %a') as age;

-- CREATE TABLE students (
-- Roll_No INT, 
-- Name VARCHAR(10), 
-- dob date);

-- INSERT INTO students VALUES(1,'aryan','2004-04-19'); 
-- INSERT INTO students VALUES(2,'neel','2000-09-05');
-- INSERT INTO students VALUES(3,'kunj','2005-08-12');
-- INSERT INTO students VALUES(4,'harsh','2003-07-14');
-- select * from students;

--  alter table students add column age varchar(50);

-- update students set age = DATE_FORMAT(from_days(DATEDIFF(now(),dob)),'%y %m %d %a');

CREATE DATABASE new;