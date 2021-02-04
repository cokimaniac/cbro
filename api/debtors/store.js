const User = require("../users/model");
const { Debtor, Ammount } = require("./model");

const listDebtors = async (currentUser) => {
  let debtors = await User.findOne({ _id: currentUser._id }).populate("debtors")
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

const retrieveDebtor = async (debtorId) => {
  let debtor = await Debtor.findOne({ _id: debtorId });
  return debtor;
}

const listDebtorAmmounts = async (debtorID) => {
  let debtor = await Debtor.findOne({ _id: debtorID }).populate("ammounts");
  return debtor.ammounts;
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

const retrieveDebtorAmmount = async (debtorID, ammountID) => {
  let debtor = await Debtor.findOne({ _id: debtorID });
  let ammount = debtor.ammounts.filter(item => item._id == ammountID);
  return ammount[0];
}

const updateDebtorAmmount = async (params) => {
  let ammount = Ammount({ _id: params.ammountID });
  ammount.paid = params.paid;
  ammount.save();
  return ammount;
}

module.exports = {
  listDebtors, createDebtor, retrieveDebtor,
  listDebtorAmmounts, addDebtorAmmount, retrieveDebtorAmmount, updateDebtorAmmount,
}