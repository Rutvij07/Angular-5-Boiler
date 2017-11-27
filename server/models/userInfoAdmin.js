const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userAdminSchema = new Schema ({
    username:String,
    password:Number
});

module.exports = mongoose.model('userAdminModel',userAdminSchema);