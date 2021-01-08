const mongoose = require("mongoose");

const { Schema } = mongoose;

let ammountSchema = new Schema({
  money: {
    type: Number,
    require: true
  },
  debtPeriod: {
    type: Number,
    require: true
  },
  debtDate: {
    type: Date
  },
  debtPaymentDate: {
    type: Date
  }
}, { timestamps: true });

let debtorSchema = new Schema({
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String
  },
  phoneNumber: {
    type:String,
    require: true
  },
  ammounts: [ammountSchema]
}, { timestamps: true });

module.exports = {
  Debtor: mongoose.model("Debtor", debtorSchema),
  Ammount: mongoose.model("Ammount", ammountSchema)
}