import api from "./api";

export const searchAccounts = params => {
  api
    .get("accounts", { params })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
};

export const accountBalanceAsOf = (accountId, asOfInEpoch) => {
  api
    .get(`accounts/${accountId}/balances/${asOfInEpoch}`)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
};

export const accountFiles = (accountId, params) => {
  api
    .get(`accounts/${accountId}/files`, { params })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
};

export const accountBalanceHistory = (accountId, params) => {
  api
    .get(`accounts/${accountId}/intervalBalances`, { params })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
};

export const accountTxs = (accountId, params) => {
  api
    .get(`accounts/${accountId}/transactions`, { params })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
};

export const accountTransfers = (accountId, params) => {
  api
    .get(`accounts/${accountId}/transfers`, { params })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
};
