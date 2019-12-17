let hash = {};

window.onload = function() {
  window.hash = hash;
  var accessKey = "";

  hash.setAccessKey = (_accessKey = "974d4207-51e0-3d73-8e20-4d5952078c47") => {
    accessKey = _accessKey;
  };

  const APIGetRequest = url => {
    const xhr = new this.XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.setRequestHeader("X-API-KEY", accessKey);

    return new Promise((resolve, reject) => {
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          resolve(xhr.response);
        } else if (xhr.status != 200) {
          reject(xhr.statusText);
        }
      };

      xhr.send();
    });
  };

  const formatParams = params => {
    if (params !== null && Object.keys(params).length !== 0) {
      return (
        "/?" +
        Object.keys(params)
          .map(function(key) {
            return key + "=" + encodeURIComponent(params[key]);
          })
          .join("&")
      );
    }
    return "";
  };

  const getUrl = (url, params = null) => {
    return `https://cors-anywhere.herokuapp.com/https://api.dragonglass.me/hedera/api/${url}${formatParams(
      params
    )}`;
  };

  hash.searchAccounts = (params = null) => {
    return APIGetRequest(getUrl(`accounts`, params));
  };

  hash.accountBalanceAsOf = (accountId, asOfInEpoch) => {
    return APIGetRequest(
      getUrl(`accounts/${accountId}/balances/${asOfInEpoch}`)
    );
  };

  hash.accountFiles = (accountId, params = null) => {
    return APIGetRequest(getUrl(`accouts/${accountId}`, params));
  };

  hash.accountBalanceHistory = (accountId, params = null) => {
    return APIGetRequest(
      getUrl(`accounts/${accountId}/intervalBalances`, params)
    );
  };

  hash.accountTxs = (accountId, params = null) => {
    return APIGetRequest(getUrl(`accounts/${accountId}/transactions`, params));
  };

  hash.accountTransfers = (accountId, params = null) => {
    return APIGetRequest(getUrl(`accounts/${accountId}/transfers`, params));
  };

  hash.searchTxs = (params = {}) => {
    return APIGetRequest(getUrl(`transactions`, params));
  };

  hash.searchTxId = txId => {
    return APIGetRequest(getUrl(`transactions/${txId}`));
  };

  hash.txObjJson = (params = {}) => {
    return APIGetRequest(getUrl(`transactions/raw`, params));
  };
};
