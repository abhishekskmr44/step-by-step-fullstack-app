const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    Heading: {type:String, require:true},
    Note:{type:String, require:true},
    Tag:{type:Number, require:true}


})

const NoteModel = mongoose.model("note",noteSchema)


module.exports = {
    NoteModel
}