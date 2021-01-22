const mongoose = require("mongoose");

const { Schema } = mongoose;

let ammountSchema = new Schema({
  money: {
    type: Number,
    required: true
  },
  paid: {
    type: Boolean,
  },
  debtPeriod: {
    type: Number,
    required: true
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
    required: true,
  },
  email: {
    type: String
  },
  phoneNumber: {
    type:String,
    required: true
  },
  ammounts: [ammountSchema]
}, { timestamps: true });

module.exports = {
  Debtor: mongoose.model("Debtor", debtorSchema),
  Ammount: mongoose.model("Ammount", ammountSchema)
}