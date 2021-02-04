const response = require("../../network/response");
//
const store = require("./store");

const getDebtors = async (req, res, next) => {
  let users = await store.listDebtors(req.user);
  response.success(req, res, next, 200, users);
}

const getDebtor = async (req, res, next) => {
  try {
    let debtor = await store.retrieveDebtor(req.params.debtorID);
    response.success(req, res, next, 200, debtor);
  } catch (err) {
    response.failed(req, res, next, 404, "Could not find debtor", "[error] Debtor is not registered");
  }
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
    response.failed(req, res, next, 500, "Could not add the debtor ammount", "[error] Adding debtor ammount");
  }
}

const getDebtorAmmount = async (req, res, next) => {
  try {
    let ammount = await store.retrieveDebtorAmmount(req.params.debtorID, req.params.ammountID);
    response.success(req, res, next, 200, ammount);
  } catch (err) {
    response.failed(req, res, next, 404, "Could not find this debtor ammount", "[error] Debtor ammount is not registerd");
  }
}

const modifyDebtorAmmount = async (req, res, next) => {
  try {
    let ammount = await store.updateDebtorAmmount(req.params);
    response.success(req, res, next, 200, ammount);
  } catch (err) {
    response.failed(req, res, next, 500, "Could not modify this debtor ammount", "[error] Debtor ammount is not modified");
  }
}

module.exports = {
  list: getDebtors,
  create: createDebtor,
  retrieve: getDebtor,
  
  addAmmount: addDebtorAmmount,
  listAmmounts: listDebtorAmmounts,
  retrieveAmmount: getDebtorAmmount,
  updateAmmount: modifyDebtorAmmount,
}