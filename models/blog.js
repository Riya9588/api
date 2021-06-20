const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    heading: {type: String, required: true, unique: true},
    blog: {type: String, required: true, minLength: 6},
    userId:{type: Number, required:true, unique:true}
});

adminSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Blog', blogSchema);