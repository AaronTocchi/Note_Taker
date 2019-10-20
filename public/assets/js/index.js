var $noteTitle = $(".note-title");
var $noteText = $(".note-textarea");
var $saveNoteBtn = $("#save-note");
var $newNoteBtn = $("#new-note");
var $noteList = $(".list-container .list-group");

// activeNote is used to keep track of the note in the textarea
var activeNote = {};

// A function for getting all notes from the db
var getNotes = function() {
  
};

// A function for saving a note to the db
var saveNote = function(note) {
    event.preventDefault();
   $.post("/api/notes", note,
      function (data) {

      // If a table is available... tell user they are booked.
      // If a table is unavailable... tell user they on the waiting list.
        if (data) {
            $noteTitle.val('');
            $noteText.val('');
          renderNoteList(note);
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
    if (activeNote) {
        $noteTitle.val(activeNote.title);
        $noteText.val(activeNote.text);
    }
};

// Get the note data from the inputs, save it to the db and update the view
var handleNoteSave = function() {
    console.log("booop")
    // saveNote();
    // renderNoteList();
    activeNote = { 
        title: $noteTitle.val(), 
        text: $noteText.val()
    };

    saveNote(activeNote);
    $('.fa-save').attr('style', 'display:none');
};

// Delete the clicked note
var handleNoteDelete = function(event) {
  
};

// Sets the activeNote and displays it
var handleNoteView = function() {
  
};

// Sets the activeNote to and empty object and allows the user to enter a new note
var handleNewNoteView = function() {
   console.log("goodbye");
    activeNote = {};
    renderActiveNote();
    $('.fa-save').attr('style', 'display:none');
};

// If a note's title or text are empty, hide the save button
// Or else show it
var handleRenderSaveBtn = function() {
    if ($noteTitle.val() === '' || $noteText.val() === '') {
        $('.fa-save').attr('style', 'display:none');
    } else {
        $('.fa-save').attr('style', 'display:inline-block');
    };
};

// Render's the list of note titles
var renderNoteList = function(note) {
    let noteItem = $("<li>").attr({ "class": "list-group-item"});
            let title = $("<h4>").attr({ "class": "list-group-item:first-child"}).text(note.title + " ");
            let deleteIcon = $("<i>").attr({"class": "fas fa-trash"});
            title.append(deleteIcon);
            noteItem.append(title);
            $(".list-items").prepend(noteItem);
};

// Gets notes from the db and renders them to the sidebar
var getAndRenderNotes = function() {
    // using map as to not double print array each time 
    $.get('/api/notes', function(data) {
     data.map(note => renderNoteList(note));
    });
      
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