
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

-- select * from salesman_master order by salesmanname,salesman_no;

-- select * from salesman_master order by salesmanname desc;

-- select * from product_master order by description;









