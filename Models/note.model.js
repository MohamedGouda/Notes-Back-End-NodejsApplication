exports.Note = class Note{
    constructor(noteId , title , content , createdBy , createdTime){
        this.noteId = noteId;
        this.title = title;
        this.content = content;
        this.createdBy = createdBy;
        this.createdTime = createdTime;
    }
}