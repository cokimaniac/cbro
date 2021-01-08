const response = require("../../network/response");
//
const store = require("./store");

const getDebtors = async (req, res, next) => {
  let users = await store.listDebtors(req.user);
  response.success(req, res, next, 200, users);
}

const createDebtor = async (req, res, next) => {
  try {
    let debtor = await store.createDebtor(req.body, req.user);
    response.success(req, res, next, 201, debtor, `Debtor created -> id: ${debtor._id}`);
  } catch(err) {
    response.failed(req, res, next, 500, "Could not create the debtor", "[error] Creating debtor failed.");
  }
}

const listDebtorAmmounts = async (req, res, next) => {
  try {
    let ammounts = await store.listDebtorAmmounts(req.params.debtorID);
    response.success(req, res, next, 200, ammounts);
  } catch(err) {
    response.failed(req, res, next, 404, "No ammounts registered");
  }
}

const addDebtorAmmount = async (req, res, next) => {
  try {
    let ammount = await store.addDebtorAmmount(req.params.debtorID, req.body, req.user);
    response.success(req, res, next, 201, ammount, "Ammount added");
  } catch(err) {
    response.failed(req, res, next, 500, "Coul not add the debtor ammount", "[error] Adding debtor ammount");
  }
}

module.exports = {
  list: getDebtors,
  create: createDebtor,
  addAmmount: addDebtorAmmount,
  listAmmounts: listDebtorAmmounts,
}