const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const builderInfoSchema = new Schema ({
 _id: String,
 groupName:String,
 companyName:String,
 partner:String,
 companyAdd:String,
 gst:Number,
 pan:Number,
 tin:Number,
 email:String,
 website:String,
 companyPersonName:String,
 contactPersonName:String,
 userName:String,
 password:String
});

module.exports = mongoose.model('builderInfoModel',builderInfoSchema);