const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "thisstar";


const travelSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    groupSize: {
      type: Number,
      required: true,
    },
    ageGroup: {
      type: Number,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    tokens: [
      {
          token: {
              type: String,
              required: true,
          }
      }
  ]
    
  });


  // token generate for travel 

 travelSchema.methods.generateAuthtoken = async function () {
     try {
         let traveltoken = jwt.sign({ _id: this._id }, SECRET_KEY, {
             expiresIn: "1d"
 
         }
         )
 
         this.tokens = this.tokens.concat({token:traveltoken});
         await this.save();
         return traveltoken;
 
     } catch (error) {
         res.status(400).json(error)
     }
 }
  






//   creating model
  
  const travel = new mongoose.model('travel', travelSchema);
  
  module.exports = travel;