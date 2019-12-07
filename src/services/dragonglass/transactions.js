import api from "./api";

export const searchTxs = params => {
  api
    .get("transactions", { params })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
};

export const searchTxId = txId => {
  api
    .get(`transactions/${txId}`)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
};

export const txObjJson = params => {
  api
    .get("transactions/raw", { params })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
};
