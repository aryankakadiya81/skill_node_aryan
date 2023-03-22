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



-- select * from client_master where name like'_a%';
-- select  name from client_master where city like'm%';
-- select * from client_master where state in('bangalore','mangalore');
-- select * from client_master where baldue>1000;
-- select * from sales_order where orderdate like'%6%';
-- select * from sales_order where clientno in('C00001','C00002');
-- select * from product_master where sellprice>500 and sellprice<=750;
-- alter table product_master add column new_price int;
-- update product_master set new_price=(sellprice*0.15)+sellprice where sellprice>500;
-- select name,city,state  from client_master where state<>'maharashtra';
-- select count(orderno) from sales_order;
-- select avg(sellprice) from product_master;
-- select min(sellprice) as minmum,max(sellprice) as maximum from product_master;
-- select count(sellprice)  from product_master where sellprice<500;
-- select description from product_master where qtyonhand<recorderlvl;



-- /Date Function/:-

-- /adddate & date_add/:-
-- select  adddate('2017-10-20',interval 1 year);

-- /addtime/:-
-- SELECT addtime("09:34:21", "01:10:10");

-- /curdate & current_date/:-
-- select curdate();

-- /current_time & curtime/:-
-- select current_time();

-- /current_timestamp/:-
-- select current_timestamp();

-- /date/:-
-- select date("2018-10-30");

-- /datediff/:-
-- select datediff("2018-10-30","2017-10-30");

-- /date_format/:-
-- select date_format("2018-10-20","%a");

-- /date_sub & sub_date/:-
-- select date_sub("2018-10-20",interval 10 day);

-- /day/:-
-- select day("2017-06-15");  

-- /dayname/:-
-- select dayname("2003-11-17");

-- /dayofmonth/:-
-- select dayofmonth("2003-11-19");

-- /dayofweek/:-
-- select dayofweek("2003-11-17");  

-- /dayofyear/:-
-- select dayofyear("2017-12-31");

-- /Extract/:-
-- select Extract(year FROM "2017-06-15");

-- /from_days/:-
-- select from_days(685467);

-- /hour/:-
-- select hour("09:34:00");

-- /last_day/:- 
-- select last_day("2017-06-15"); 

-- /localtime/:-
-- select localtime();

-- /makedate/:-
-- select makedate(2017, 35);

-- /maketime/:-
-- select maketime(11, 35, 4);

-- /minute/:-
-- select minute("2017-06-20 09:30:00");

-- /month/:-
-- SELECT MONTH("2017-06-15");

-- /monthname/:-
-- SELECT MONTHNAME("2017-06-15");

-- /sec_to_time/:-
-- select sec_to_time(20000);

-- /str_to_date/:-
-- select str_to_date("August 10 2017", "%M %d %Y")

-- /sysdate/:-
-- select sysdate();

-- /time/:-
-- select time("19:30:10");

-- /time_format/:-
-- SELECT TIME_FORMAT("19:30:10", "%H %i %s");

-- /time_to_sec/:-
-- SELECT TIME_TO_SEC("0:01:01");

-- /timediff/:-
-- SELECT TIMEDIFF("13:20:11", "13:10:10");

-- /to_days/:-
-- SELECT TO_DAYS("2022-10-19");

-- /week/:-
-- SELECT WEEK("2022-12-31");

-- /weekday/:-
-- SELECT WEEKDAY("2017-06-15");

-- /weekofyear/:-
-- SELECT WEEKOFYEAR("2017-12-30 ");

-- /yearweek/:-
-- SELECT YEARWEEK("2022-12-30");