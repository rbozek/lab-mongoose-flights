import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const ticketSchema = new Schema({
  // 'regular expression' being assigned to match validator (more info in Lab Part 2 page)
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: {type: Number, min: 0}
},{
  timestamps:true
})

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
      const currentDate = new Date();
      currentDate.setFullYear(currentDate.getFullYear() + 1);
      return currentDate;
    },
    min: 2001,
    required: true,
  },
  tickets: [ticketSchema],
  meals: [{type: Schema.Types.ObjectId, ref: 'Meal'}]
},{ 
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}