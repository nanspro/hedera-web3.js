import api from "./api";

export const searchContracts = (params = {}) => {
  api
    .get("contracts", { params })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
};

export const contractBalanceAsOf = (contractId, asOfInEpoch) => {
    api
      .get(`contracts/${contractId}/balances/${asOfInEpoch}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
};

export const contractCallCount = (contractId, params = {}) => {
    api
      .get(`contracts/${contractId}/callCount`, { params })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
};

export const contractHistory = (contractId, params = {}) => {
    api
      .get(`contracts/${contractId}/intervalBalances`, { params })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
};