const fs = require("fs")

var noteData;

fs.readFile("./db/db.json", "utf8", function(err, data) {
    if (err) throw err;
    noteData = JSON.parse(data);
})


module.exports = function(app) {
    // console.log('app')
    app.get("/api/notes", function(req, res) {
        // console.log('in get')
        // console.log(noteData)
        res.json(noteData)
    });


    app.post("/api/notes", function(req, res) {
        var newNote = req.body;
        noteData.push(newNote);
        console.log(noteData);
        res.json(noteData);
    })
}
// // ===============================================================================
// // LOAD DATA
// // We are linking our routes to a series of "data" sources.
// // These data sources hold arrays of information on table-data, waitinglist, etc.
// // ===============================================================================
// const fs = require("fs");
// const util = require('util');
// let notes;

// var noteData = require("../db/db");

// // fs.readFile('./db/db.json', "utf8", (err, data) => {
// //     console.log(data)
// //     data = JSON.parse(data)
// //     if (err) throw err;
// //     notes = data
// //     console.log(notes)
// // });

// // ===============================================================================
// // ROUTING
// // ===============================================================================

// module.exports = function(app) {
//   // API GET Requests
//   // Below code handles when users "visit" a page.
//   // In each of the below cases when a user visits a link
//   // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
//   // ---------------------------------------------------------------------------

//   app.get("/api/notes", function(req, res) {
//     res.json(noteData.noteArray);
//   });



//   // API POST Requests
//   // Below code handles when a user submits a form and thus submits data to the server.
//   // In each of the below cases, when a user submits form data (a JSON object)
//   // ...the JSON is pushed to the appropriate JavaScript array
//   // (ex. User fills out a reservation request... this data is then sent to the server...
//   // Then the server saves the data to the tableData array)
//   // ---------------------------------------------------------------------------
 
 
//                 // HANNA HERE PLS HELP :'(
//                   app.post("/api/notes", function(req, res) {
//                         var newTable = req.body;
                        
                       
//                           noteData.push(newTable);
//                           res.json(true)
                        
                        
//                       })
 
// //   app.post("/api/notes", function(req, res) {
// //     var newNote = req.body;
// //     let datas = JSON.stringify(newNote)
    
// //     // fs.readFile('./db/db.json', function (err, data) {
// //     //     var json = JSON.parse(data)
// //     //     if (err) throw err;
// //     //     json.push(datas);
    
// //     //     fs.writeFile("./db/db.json", JSON.stringify(json))
  
    
// //     fs.appendFile('./db/db.js', datas, (err) => {
// //         if (err) throw err;
// //         console.log("confirms this is workin")
// //         res.json(true)
// //     // }) // i dont think this works but try it out
     
// //      })
// //       })




//     //  var tableData = require("../data/tableData"); TODO figure out how to connect to push


//   // ---------------------------------------------------------------------------
//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!

//   app.post("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   });
// };
