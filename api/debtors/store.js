const User = require("../users/model");
const { Debtor, Ammount } = require("./model");

const listDebtors = async (currentUser) => {
  let debtors = await User.findOne({ _id: currentUser._id })
  .populate("debtors");
  return debtors.debtors;
}

const createDebtor = async (body, currentUser) => {
  let user = await User.findOne({ _id: currentUser._id });
  let debtor = await new Debtor({
    fullName: body.fullName,
    email: body.email,
    phoneNumber: body.phoneNumber
  });
  debtor.save();
  user.debtors.push(debtor);
  user.save();
  return debtor;
}

const listDebtorAmmounts = async (debtorID) => {
  let debtor = await Debtor.findOne({ _id: debtorID });
  let ammounts = debtor.ammounts;
  return ammounts;
}

const addDebtorAmmount = async (debtorID, body, currentUser) => {

  let debtor = await Debtor.findOne({ _id: debtorID });
  
  let debtDate = new Date();
  let debtPaymentDate = new Date(debtDate);

  let ammount = new Ammount({
    money: body.money,
    debtPeriod: body.debtPeriod,
    debtDate: debtDate,
    debtPaymentDate: debtPaymentDate.setMonth(debtDate.getMonth() + body.debtPeriod)
  });
  debtor.ammounts.push(ammount);
  debtor.save();
  return ammount;
}

module.exports = {
  listDebtors, createDebtor,
  listDebtorAmmounts, addDebtorAmmount,

}