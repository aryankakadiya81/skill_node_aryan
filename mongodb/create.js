// show dbs // show databases
// db.version() // show virsion
// db.help() // show all data of mongodb virsion
// db.showdbs
// use admin()
// show collections // show collections
// db.stud.find() // as work select query in my sql
// db.stud.find().pretty()

// db.collection.insertOne()--------------------------------------------------
// db.stud.insertOne({sno:111,sname:"Ram",fees:37500,course:"Node"})
// db.stud.insertOne({sno:112,sname:"Raj",fees:45000,course:"FullStack"})
// db.stud.insertOne({sno:113,sname:"a",fees:65000,course:"Django"})
// db.stud.insertOne({sno:114,sname:"b",fees:45000,course:"Node"})
// db.stud.insertOne({sno:115,sname:"c",fees:65000,course:"Flutter"})
// db.stud.insertOne({sno:116,sname:"d",fees:25000,course:"Python"})


// db.collection.insertMany()-------------------------------------------------------
// db.test.insertMany([
//  {name:"Any", age:"21", status:"busy"},
//  {name:"Tony", age:"25", status:"busy"},
//  {name:"Bobby", age:"28", status:"online"},
//  {name:"Sonny", age:"28", status:"away"},
//  {name:"Cher", age:"20", status:"online"}
// ])

// db.collection.insert()-----------------------------------------
// mix collections many & one collection



// ----------------------------------------------------------------------------

// db.createCollection("salesman_master")
// db.salesman_master.insertMany([
//  {salesman_no:"S00001", salesmanname:"Kiran", address1:"A/14 worli", address2:"nr. abc circle", city:"Bombay", pincode:400002, state:"Mah", salamt:3000, tgttoget:100, ytdsale:50, remark:"Good"},
//  {salesman_no:"S00002", salesmanname:"Manish", address1:"65, nariman", address2:"opp. kbc ground", city:"Bombay", pincode:400001, state:"Mah", salamt:3000, tgttoget:200, ytdsale:100, remark:"Good"},
//  {salesman_no:"S00003", salesmanname:"Ravi", address1:"P-7 Bandra", address2:"opp. kgf gold", city:"Bombay", pincode:400032, state:"Mah", salamt:3000, tgttoget:200, ytdsale:100, remark:"Good"},
//  {salesman_no:"S00004", salesmanname:"Ashish", address1:"A/5 Juhu", address2:"nr. film city", city:"Bombay", pincode:400044, state:"Mah", salamt:3500, tgttoget:200, ytdsale:150, remark:"Good"},
// ])
// db.salesman_master.find()


// db.createCollection("product_master")
// db.product_master.insertMany([
//     {productno:'P00001',description:'1.44floppies',profitpercent:5,unitmeasured:'piece',qtyonhand:100, recorderlvl:20, sellprice:525,costprice:500},
//     {productno:'P03453',description:'Monitors', profitpercent:6, unitmeasured:'piece', qtyonhand:10, recorderlvl:3, sellprice:12000, costprice:11200},
//     {productno:'P06734',description:'Mouse',profitpercent:5, unitmeasured:'piece', qtyonhand:20, recorderlvl:5, sellprice:1050, costprice:500},
//     {productno:'P07865',description:'1.22 floppies',profitpercent:5, unitmeasured:'piece', qtyonhand:100, recorderlvl:20, sellprice:525, costprice:500},
//     {productno:'P07868',description:'Keyboards',profitpercent:2, unitmeasured:'piece', qtyonhand:10, recorderlvl:3, sellprice:3150, costprice:3050},
//     {productno:'P07885',description:'CD Drive',profitpercent:2.50, unitmeasured:'piece',qtyonhand:10,recorderlvl:3,sellprice:5250,costprice:5100},
//     {productno:'P07965',description:'540 HDD',profitpercent:4, unitmeasured:'piece',qtyonhand:10,recorderlvl:3,sellprice:8400, costprice:8000},
//     {productno:'P07975',description:'1.44 Drive',profitpercent:5,unitmeasured:'piece', qtyonhand:10, recorderlvl:3, sellprice:1050, costprice:1000},
//     {productno:'P08865',description:'1.22 Drive',profitpercent:5,unitmeasured:'piece',qtyonhand:2,recorderlvl:3, sellprice:1050, costprice:1000},
// ])
// db.product_master.find().pretty()
// db.product_master.find()


// db.createCollection("CLIENT_MASTER")
// db.CLIENT_MASTER.insertMany([
//     { Clientno: "C00001", Name: "Ivan", address1: "A/14 worli", city: "Bombay", pincode: 400054, state: "Maharashtra", baldue: 15000 },
//     { Clientno: "C00002", Name: "Vandana", address1: "B-23 vesu ", city: "Madras", pincode: 780001, state: "Tamilnadu", baldue: 0 },
//     { Clientno: "C00003", Name: "Pramada", address1: "65,nariman", city: "Bombay", pincode: 400057, state: "Maharashtra", baldue: 5000 },
//     { Clientno: "C00004", Name: "Basu", address1: "p-7 Bandra", city: "Bombay", pincode: 400056, state: "Maharashtra", baldue: 0 },
//     { Clientno: "C00005", Name: "Ravi", address1: "C-42 agra", city: "Delhi", pincode: 100001, state: "Delhi", baldue: 2000 },
//     { Clientno: "C00006", Name: "Rukmini", address1: "A/5 Juhu", city: "Bombay", pincode: 400050, state: "Maharashtra", baldue: 0 },
// ])
// db.CLIENT_MASTER.find()

// ---------------------------------------------------------------------------------------
// db.CLIENT_MASTER.find()
// db.CLIENT_MASTER.find({})
// db.CLIENT_MASTER.find({}).skip(3)
// db.CLIENT_MASTER.find().sort({"Name":1})
// db.CLIENT_MASTER.find().sort({"Name":-1})
// db.CLIENT_MASTER.find().count()
// db.CLIENT_MASTER.find({"Name":"Basu"})
// db.CLIENT_MASTER.find()[0]
// db.CLIENT_MASTER.find()[1]
// db.CLIENT_MASTER.find().pretty
// db.CLIENT_MASTER.find({"baldue":{$eq:0}})
// db.CLIENT_MASTER.find({"baldue":{$ne:0}})
// db.CLIENT_MASTER.find({"baldue":{$gt:0}})
// db.CLIENT_MASTER.find({"baldue":{$gte:0}})
// db.CLIENT_MASTER.find({"baldue":{$lt:0}})
// db.CLIENT_MASTER.find({"baldue":{$lte:0}})

// db.CLIENT_MASTER.find({"baldue":{$eq:[2000,0]}})

// db.CLIENT_MASTER.find({"baldue":{$in:[2000,0]}})
// db.CLIENT_MASTER.find({"baldue":{$nin:[2000,0]}})
// db.CLIENT_MASTER.find({"baldue":{$nin:[2000,0]}}).count()

// db.CLIENT_MASTER.find({$or:[{baldue:{$ne:0}},{"State":{$in:["Maharashtra"]}}]})


// 1. db.CLIENT_MASTER.find()
// 2. db.CLIENT_MASTER.find()
// 3. db.CLIENT_MASTER.find()
// 4. db.product_master.find()
// 5. db.CLIENT_MASTER.find({"city":{$eq:"Bombay"}}) 
//    db.CLIENT_MASTER.find({"city":{$eq:"Bombay"}}).count()

// 6. db.salesman_master.find({"salamt":{$eq:3000}})
//    db.salesman_master.find({"salamt":{$eq:3000}}).count()



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// db.createCollection("salesman_master")
// db.salesman_master.insertMany([
//  {salesman_no:"S00001", salesmanname:"Kiran", address1:"A/14 worli", address2:"nr. abc circle", city:"Bombay", pincode:400002, state:"Mah", salamt:3000, tgttoget:100, ytdsale:50, remark:"Good"},
//  {salesman_no:"S00002", salesmanname:"Manish", address1:"65, nariman", address2:"opp. kbc ground", city:"Bombay", pincode:400001, state:"Mah", salamt:3000, tgttoget:200, ytdsale:100, remark:"Good"},
//  {salesman_no:"S00003", salesmanname:"Ravi", address1:"P-7 Bandra", address2:"opp. kgf gold", city:"Bombay", pincode:400032, state:"Mah", salamt:3000, tgttoget:200, ytdsale:100, remark:"Good"},
//  {salesman_no:"S00004", salesmanname:"Ashish", address1:"A/5 Juhu", address2:"nr. film city", city:"Bombay", pincode:400044, state:"Mah", salamt:3500, tgttoget:200, ytdsale:150, remark:"Good"},
// ])


// db.createCollection("product_master")
// db.product_master.insertMany([
//     {productno:'P00001',description:'1.44floppies',profitpercent:5,unitmeasured:'piece',qtyonhand:100, recorderlvl:20, sellprice:525,costprice:500},
//     {productno:'P03453',description:'Monitors', profitpercent:6, unitmeasured:'piece', qtyonhand:10, recorderlvl:3, sellprice:12000, costprice:11200},
//     {productno:'P06734',description:'Mouse',profitpercent:5, unitmeasured:'piece', qtyonhand:20, recorderlvl:5, sellprice:1050, costprice:500},
//     {productno:'P07865',description:'1.22 floppies',profitpercent:5, unitmeasured:'piece', qtyonhand:100, recorderlvl:20, sellprice:525, costprice:500},
//     {productno:'P07868',description:'Keyboards',profitpercent:2, unitmeasured:'piece', qtyonhand:10, recorderlvl:3, sellprice:3150, costprice:3050},
//     {productno:'P07885',description:'CD Drive',profitpercent:2.50, unitmeasured:'piece',qtyonhand:10,recorderlvl:3,sellprice:5250,costprice:5100},
//     {productno:'P07965',description:'540 HDD',profitpercent:4, unitmeasured:'piece',qtyonhand:10,recorderlvl:3,sellprice:8400, costprice:8000},
//     {productno:'P07975',description:'1.44 Drive',profitpercent:5,unitmeasured:'piece', qtyonhand:10, recorderlvl:3, sellprice:1050, costprice:1000},
//     {productno:'P08865',description:'1.22 Drive',profitpercent:5,unitmeasured:'piece',qtyonhand:2,recorderlvl:3, sellprice:1050, costprice:1000},
// ])


// db.createCollection("CLIENT_MASTER")
// db.CLIENT_MASTER.insertMany([
//     { Clientno: "C00001", Name: "Ivan", address1: "A/14 worli", city: "Bombay", pincode: 400054, state: "Maharashtra", baldue: 15000 },
//     { Clientno: "C00002", Name: "Vandana", address1: "B-23 vesu ", city: "Madras", pincode: 780001, state: "Tamilnadu", baldue: 0 },
//     { Clientno: "C00003", Name: "Pramada", address1: "65,nariman", city: "Bombay", pincode: 400057, state: "Maharashtra", baldue: 5000 },
//     { Clientno: "C00004", Name: "Basu", address1: "p-7 Bandra", city: "Bombay", pincode: 400056, state: "Maharashtra", baldue: 0 },
//     { Clientno: "C00005", Name: "Ravi", address1: "C-42 agra", city: "Delhi", pincode: 100001, state: "Delhi", baldue: 2000 },
//     { Clientno: "C00006", Name: "Rukmini", address1: "A/5 Juhu", city: "Bombay", pincode: 400050, state: "Maharashtra", baldue: 0 },
// ])

// load('file_name') //load file in mongosh(cmd)
// db.collection_name.drop() //drop collections
// db.dropDatabase() //drop database

// db.collection_name.remove({})
// db.CLIENT_MASTER.remove({}) //delete collection

// db.product_master.remove({qtyonhand:{$eq:10}}) //delete specific data of collection

// db.student.update({name:"avi"},{$set:{name:"helloworld"}}) //update

// db.product_master.updateMany({},{$set:{tex1:"28"}}) // all record update

// a. db.CLIENT_MASTER.update({Clientno: "C00005"},{$set:{city: "Bangalore"}})
// b. db.CLIENT_MASTER.update({Clientno: "C00001"},{$set:{baldue: 1000}})
// c. db.product_master.update({description:'Mouse'},{$set:{costprice:950.00}})
// d. db.salesman_master.updateMany({},{$set:{city:"Pune"}})



// 21-12-2022 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// example ===> db.books.find({"author.profile.exp":{$eq:8}})

// Q1) Select all documents from books collection, where no_of_reviews  is 3.
// A1) db.books.find({no_of_reviews:{$eq:3}})

// Q2) Select all documents from the books collection where author profile contains 2 courses?
// A2) db.books.find({"author.profile.courses":{$eq:2}})

// Q3) Read all documents from the books collection where 'tags' array contains 'database' element?
// A3) db.books.find({tags:{$eq:'database'}})

// Q4) Select all documents from books collection where tags array is exactly equal to ["language","freeware","programming"].
// A4) db.books.find({tags:{$eq:[ 'language', 'freeware', 'programming']}})

// Q5) To select all documents from books collection where no_of_reviews is not equal to 3.
// A5) db.books.find({no_of_reviews:{$ne:3}})

// Q6) Select all documents from books collection where the no_of_reviews is greater than 3.
// A6) db.books.find({no_of_reviews:{$gt:3}})

// Q7) Select all documents from books collection where the no_of_reviews is greater than or equal to 3.
// A7) db.books.find({no_of_reviews:{$gte:3}})

// Q8) Select all documents from books collection where the no_of_reviews is less than 3.
// A8) db.books.find({no_of_reviews:{$lt:3}})

// Q9) Select all documents from the books collection where the no_of_reviews is 1 or 4 or 5?
// A9) db.books.find({no_of_reviews:{$in:[1,4,5]}})

// Q10) Select all documents where either no_of_reviews >3 or tags array contains programming element?
// A10) db.books.find({$or:[{no_of_reviews:{$gt:3}},{tags:{$eq:'programming'}}]})

// Q11) Select all documents where either no_of_reviews is less than 3 or downloadable is true or author profile contains atleast 2 books?
// A11) db.books.find({$or:[{no_of_reviews:{$lt:3}},{"author.profile.books":{$gte:2}},{downloadable:{$eq:true}}]})
//      db.books.find({$and:[{no_of_reviews:{$lt:3}},{"author.profile.books":{$gte:2}},{downloadable:{$eq:true}}]})

// Q12) Select all documents does not conain no_of_reviews and downloadable fields Note: $or results + $nor results = total no of documents
// A12) db.books.find({$or:[{no_of_reviews:{$eq:null}},{downloadable:{$eq:null}}]})

// Q13) Select all documents where the no_of_reviews is greater than or equals to 3 and downloadable is true?
// A13) db.books.find({$and:[{no_of_reviews:{$gte:3}},{downloadable:{$eq:true}}]})

// Q14) update no_of_reviews to 10 where isbn no is 6677
// A14) db.books.updateMany({isbn:6677},{$set:{no_of_reviews:10}})
//      db.books.find({isbn:{$eq:6677}})

// Q15) update profile to 8 of books Oracle in simple way
// A15) db.books.update({ title:{$eq:'Oracle in simple way'}},{$set:{"author.profile.books":10}})
//      db.books.find({ title:{$eq:'Oracle in simple way'}})

// 23-12-2022 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// db.createCollection("students")
// db.students.insertMany([
//     {_id:1,name:"Ram",marks:[82,35,99]},
//     {_id:2,name:"Ravi",marks:[75,90,95]},
//     {_id:3,name:"Ramesh",marks:[65,45,35]},
//     {_id:4,name:"Rajesh",marks:[54,36,69]},
// ]) 


// db.books.find({tags:{$all : ["database","sql"]}}) // using $all

// db.students.find({marks: {$elemMatch: {$gte: 80, $lt: 90}}}) // using $elemMatch

// db.books.find({tags:{$size:3}}) // using $size 

// db.books.find({title: {$regex: '^d'}})

// db.books.find({isbn: {type: "int"}})

// db.books.findOne().isbn
// typeof db.books.findOne().isbn

// 24-12-2022 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1. Write a MongoDB query to display all the documents in the collection restaurants.
//    db.restaurants.find();
//    db.restaurants.find().count()


// 2. Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine for all the documents in the collection restaurant.
//    db.restaurants.find({},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine":1});


// 3. Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine, but exclude the field _id for all the documents in the collection restaurant.
//    db.restaurants.find({},{"_id":0,"restaurant_id" : 1,"name":1,"borough":1,"cuisine":1});


// 4. Write a MongoDB query to display the fields restaurant_id, name, borough and zip code, but exclude the field _id for all the documents in the collection restaurant.
//    db.restaurants.find({},{"_id":0,"restaurant_id" : 1,"name":1,"borough":1,"address.zipcode":1});


// 5. Write a MongoDB query to display all the restaurant which is in the borough Bronx.
//    db.restaurants.find({"borough":{$eq:"Bronx"}},{"_id":0,"name":1});



// 6. Write a MongoDB query to display the first 5 restaurant which is in the borough Bronx.
//    db.restaurants.find({"borough":{$eq:"Bronx"}},{"_id":0,"name":1}).limit(5);



// 7.Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx.
//   db.restaurants.find({"borough":{$eq:"Bronx"}},{"_id":0,"name":1}).skip(5).limit(5);


// 8. Write a MongoDB query to find the restaurants who achieved a score more than 90.
//    db.restaurants.find({grades : { $elemMatch:{"score":{$gt : 90}}}},{"_id":0,"name":1,"grades.score":1});


// 9. Write a MongoDB query to find the restaurants that achieved a score, more than 80 but less than 100.
//    db.restaurants.find({$and:[{"grades.score":{$gt : 80}},{"grades.score":{$lt : 100}}]},{"_id":0,"name":1,"grades.score":1});



// 10. Write a MongoDB query to find the restaurants which locate in latitude value less than -95.754168.
//     db.restaurants.find({"address.coord" : {$lt : -95.754168}});



// 11. Write a MongoDB query to find the restaurants that do not prepare any cuisine of 'American' and their grade score more than 70 and latitude less than -65.754168.
//     db.restaurants.find({$and: [{"address.coord" : {$lt : -65.754168}},{"cuisine": {$ne: "American"}},{"grades.score":{$gt : 70}}]});
//     db.restaurants.find({$and: [{"address.coord" : {$lt : -65.754168}},{"cuisine": {$ne: "American"}},{"grades.score":{$gt : 70}}]}).count();


// 12. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved a score more than 70 and located in the longitude less than -65.754168.
// Note : Do this query without using $and operator.
// inlogical

// 13. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved a grade point 'A' not belongs to the borough Brooklyn. The document must be displayed according to the cuisine in descending order.
//     db.restaurants.find({$and: [{"borough": {$eq:"Brooklyn"}},{"cuisine": {$ne: "American"}},{"grades.grade":{$eq : "A"}}]}).sort({"cuisine":-1});
//     db.restaurants.find({$and: [{"borough": {$eq:"Brooklyn"}},{"cuisine": {$ne: "American"}},{"grades.grade":{$eq : "A"}}]}).sort({"cuisine":-1}).count();
    
// 14. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Wil' as first three letters for its name.
//     db.restaurants.find({name: /^Wil/},{"restaurant_id": 1,"name":1,"borough":1,"cuisine" :1});
//     db.restaurants.find({name: /^Wil/},{"restaurant_id": 1,"name":1,"borough":1,"cuisine" :1}).count();   

// 15. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as last three letters for its name.
//     db.restaurants.find({name: /ces$/},{"restaurant_id": 1,"name":1,"borough":1,"cuisine" :1});
//     db.restaurants.find({name: /ces$/},{"restaurant_id": 1,"name":1,"borough":1,"cuisine" :1}).count();


// 16. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Reg' as three letters somewhere in its name.
//     db.restaurants.find({"name": /.*Reg.*/},{"restaurant_id": 1,"name":1,"borough":1,"cuisine" :1});
//     db.restaurants.find({"name": /.*Reg.*/},{"restaurant_id": 1,"name":1,"borough":1,"cuisine" :1});


// 17. Write a MongoDB query to find the restaurants which belong to the borough Bronx and prepared either American or Chinese dish.
//     db.restaurants.find({"borough": "Bronx", $or: [{"cuisine": "American"},{"cuisine": "Chinese"}]},{"restaurant Id": 1,"_id": 0,"name": 1,"cuisine": 1});
//     db.restaurants.find({"borough": "Bronx",$or: [{"cuisine": "American"},{"cuisine": "Chinese"}]});
//     db.restaurants.find({"borough": "Bronx",$or: [{"cuisine": "American"},{"cuisine": "Chinese"}]}).count();



// 18. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which belong to the borough Staten Island or Queens or Bronxor Brooklyn.
//     db.restaurants.find({"borough": {$in: ["Staten Island", "Queens", "Bronxor", "Brooklyn"]}}, {"_id": 0,"restaurant Id": 1, "name":1, "borough":1, "cuisine":1});
//     db.restaurants.find({"borough": {$in: ["Staten Island", "Queens", "Bronxor", "Brooklyn"]}}, {"_id": 0,"restaurant Id": 1, "name":1, "borough":1, "cuisine":1}).count();


// 19. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which are not belonging to the borough Staten Island or Queens or Bronxor Brooklyn.
//     db.restaurants.find({"borough": {$nin: ["Staten Island", "Queens", "Bronxor", "Brooklyn"]}}, {"_id": 0,"restaurant Id": 1, "name":1, "borough":1, "cuisine":1});
//     db.restaurants.find({"borough": {$nin: ["Staten Island", "Queens", "Bronxor", "Brooklyn"]}}, {"_id": 0,"restaurant Id": 1, "name":1, "borough":1, "cuisine":1}).count();


// 20. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which achieved a score which is not more than 10.
//     db.restaurants.find({"grades.score":{$lt : 10}},{"_id":0, "restaurant_id":1,"name":1, "borough": 1, "cuisine":1});
//     db.restaurants.find({"grades.score":{$lt : 10}},{"_id":0, "restaurant_id":1,"name":1, "borough": 1, "cuisine":1}).count();


// 21. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which prepared dish except 'American' and 'Chinees' or restaurant's name begins with letter 'Wil'.
//     db.restaurants.find({$or: [{"name": /^Wil/}, {"$and": [{"cuisine": "American"},{"cuisine": "Chinese"}]}]},{"_id":0, "restaurant_id":1,"name":1, "borough": 1, "cuisine":1});
//     db.restaurants.find({$or: [{"name": /^Wil/}, {"$and": [{"cuisine": "American"},{"cuisine": "Chinese"}]}]},{"_id":0, "restaurant_id":1,"name":1, "borough": 1, "cuisine":1}).count();



// 22. Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants which achieved a grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z" among many of survey dates..
//     db.restaurants.find({$and:[{"grades.score": 11},{"grades.grade": "A"},{"grades.date": ISODate("2014-08-11T00:00:00Z")}]},{"_id":1,"restaurant_id":1, "name":1, "grades":1});

// 23. Write a MongoDB query to find the restaurant Id, name and grades for those restaurants where the 2nd element of grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z".
//     db.restaurants.find({"grades.1.date": ISODate("2014-08-11T00:00:00Z"), "grades.1.grade": "A" , "grades.1.score": 9},{"restaurant_id":1,"_id":0,"name":1,"grades":1});


// 24. Write a MongoDB query to find the restaurant Id, name, address and geographical location for those restaurants where 2nd element of coord array contains a value which is more than 42 and upto 52..
//     db.restaurants.find({"address.coord.1":{$gt:42,$lt:52}},{"restaurant_id":1,"_id":0,"name":1,"address":1,"coord":1});
//     db.restaurants.find({$and: [{"address.coord.1":{$gt:42}},{"address.coord.1":{$lt:52}}]},{"restaurant_id":1,"_id":0,"name":1,"address":1,"coord":1});


// 25. Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.
//     db.restaurants.find({},{}).sort({"name":1})

// 26. Write a MongoDB query to arrange the name of the restaurants in descending along with all the columns.
//     db.restaurants.find({},{}).sort({"name":-1})



// 27. Write a MongoDB query to arranged the name of the cuisine in ascending order and for that same cuisine borough should be in descending order.
//     db.restaurants.find({},{}).sort({"cuisine":1,"borough":-1});



// 28. Write a MongoDB query to know whether all the addresses contains the street or not.

// 29. Write a MongoDB query which will select all documents in the restaurants collection where the coord field value is Double.

// 30. Write a MongoDB query which will select the restaurant Id, name and grades for those restaurants which returns 0 as a remainder after dividing the score by 7.
