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



