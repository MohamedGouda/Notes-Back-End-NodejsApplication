var generator = require("../Utilizations/generator");
var memory = require('../Utilizations/Memory.storage')
var noteModel = require('../Models/note.model');

exports.getAllNotes = function(req , res){
    var values= memory.getValues(memory.store);

    return res.status(200).send(JSON.stringify(values));
}

exports.saveNote = function(req , res){

    var id = generator.generate();

    if(!req.body.title || !req.body.content)
       return  res.status(500).send({error:"some required data are not avialable"});

    var Note = new noteModel.Note(id, req.body.title , req.body.content , req.body.createdBy , req.body.createdTime) ;

    memory.store.setItem(id , Note);


    return res.status(200).send("Note created Successfully");
}

exports.editNote = function(req , res){

    if(!req.body.title || !req.body.content || !req.body.id)
      return  res.status(500).send({error:"some required data are not avialable"});

    var Note = new noteModel.Note(req.body.id  , req.body.title , req.body.content , "Me" , new Date());
    memory.store.setItem(req.body.id , Note);
    return res.status(200).send("Note Updated Successfully");


}

exports.deleteNote = function(req , res){
    if(!req.body.id)
    return  res.status(500).send({error:"some required data are not avialable"});

    memory.store.removeItem(req.body.id);

    return res.status(200).send("Note Deleted Successfully");
}