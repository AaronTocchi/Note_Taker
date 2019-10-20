var $noteTitle = $(".note-title");
var $noteText = $(".note-textarea");
var $saveNoteBtn = $("#save-note");
var $newNoteBtn = $(".new-note");
var $noteList = $(".list-container .list-group");

// activeNote is used to keep track of the note in the textarea
var activeNote = {};

// A function for getting all notes from the db
var getNotes = function() {
  
};

// A function for saving a note to the db
var saveNote = function(note) {
    event.preventDefault();
    var newNote = {
      
      title: $(".note-title").val(),
       text: $( ".note-textarea").val()
    }
    $.post("/api/notes", newNote,
      function (note) {

      // If a table is available... tell user they are booked.
      // If a table is unavailable... tell user they on the waiting list.
        if (note) {
          alert("Great Plan!")
        }
      
      // Clear the form when submitting
      document.getElementsByTagName('form')[0].reset();
    });
};

// A function for deleting a note from the db
var deleteNote = function(title) {
  
};

// If there is an activeNote, display it, otherwise render empty inputs
var renderActiveNote = function() {
  
};

// Get the note data from the inputs, save it to the db and update the view
var handleNoteSave = function() {
    console.log("booop")
    saveNote();
    renderNoteList();
};

// Delete the clicked note
var handleNoteDelete = function(event) {
  
};

// Sets the activeNote and displays it
var handleNoteView = function() {
  
};

// Sets the activeNote to and empty object and allows the user to enter a new note
var handleNewNoteView = function() {
  
};

// If a note's title or text are empty, hide the save button
// Or else show it
var handleRenderSaveBtn = function() {
  
};

// Render's the list of note titles
var renderNoteList = function(notes) {
    // getAndRenderNotes();
    
};

// Gets notes from the db and renders them to the sidebar
var getAndRenderNotes = function() {
    $.get("/api/notes", function (data) {
        if (data) {
          for (i = 0; i < data.length; i++) {
            let table = $("<li>").attr({ "class": "list-group-item", "id": "note" + i });
            
            // let tableNum = $("<h2>").text("Table #" + i);
            let title = $("<h4>").attr({ "class": "list-group-item:first-child"}).text(data[i].title + " ");
            let deleteIcon = $("<i>").attr({"class": "fas fa-trash"});
            title.append(deleteIcon);
            table.append(title);
            $(".list-items").append(table);
          }
        }
      })
      
};

$saveNoteBtn.on("click", handleNoteSave);
$noteList.on("click", ".list-group-item", handleNoteView);
$newNoteBtn.on("click", handleNewNoteView);
$noteList.on("click", ".delete-note", handleNoteDelete);
$noteTitle.on("keyup", handleRenderSaveBtn);
$noteText.on("keyup", handleRenderSaveBtn);

// Gets and renders the initial list of notes
getAndRenderNotes();
console.log("hello world")