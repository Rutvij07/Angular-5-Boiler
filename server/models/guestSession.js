const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSessionSchema = new Schema({
    dateTime:  { type: Date, default: Date.now },
    momentTime: String,
    // ua: Object,
    basicInfo: {
      ageValue: Number,
      maritalValue: Number,
      dependantValue: Number,
      a1: Number,
      a2: Number,
      a3: Number
    },
    basicStatus: { type: Boolean, default: 0 },
    advInfo: {
      b1: Number,
      b2: Number,
      b3: Number,
      b4: Number,
      b5: Number,
      b6: Number,
      b7: Number,
      b8: Number
    }
});

module.exports = mongoose.model('guestSession', guestSessionSchema);
