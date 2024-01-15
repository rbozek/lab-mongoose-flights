import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
    required: true,
  },  
  airport: {
    type: String,
    default: 'DEN', // should set as default value but doesn't work?
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    required: true,
  },
  flightNo: {
    type: Number,
    required: true,
    min: 11,
    max: 9998,
  },
  departs: {
    type: Date,
    default: function() {
      // return (new Date().getFullYear() + 1)
      // console.log((new Date().getFullYear() + 1));
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
      // must return Date object, not just value
      console.log(oneYearFromNow + 'test One Year From now!');
      return oneYearFromNow;
    },
    min: 2001,
    required: true,
  },
},{ 
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}