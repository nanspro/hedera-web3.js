let hash = {};

window.onload = function() {
  window.hash = hash;
  var accessKey = "";

  hash.setAccessKey = (_accessKey = "974d4207-51e0-3d73-8e20-4d5952078c47") => {
    accessKey = _accessKey;
  };

  const APIGetRequest = url => {
    const xhr = new this.XMLHttpRequest();

    xhr.open("GET", getUrl(url), true);
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

  const getUrl = (url, params = null) => {
    if (params === null) {
      return `https://cors-anywhere.herokuapp.com/https://api.dragonglass.me/hedera/api/${url}`;
    } else {
      return `https://cors-anywhere.herokuapp.com/https://api.dragonglass.me/hedera/api/${url}?${params}`;
    }
  };

  const formatParams = params => {
    if (params !== null && params !== {}) {
      return (
        "?" +
        Object.keys(params)
          .map(function(key) {
            return key + "=" + encodeURIComponent(params[key]);
          })
          .join("&")
      );
    }
    return "";
  };

  hash.searchAccounts = (params = {}) => {
    return APIGetRequest(`searchAccounts/${formatParams(params)}`);
  };

  hash.accountBalanceAsOf = data => {};

  hash.accountFiles = data => {};

  hash.accountBalanceHistory = data => {};

  hash.accountTxs = data => {};

  hash.accountTransfers = data => {};

  hash.searchTxs = data => {};

  hash.searchTxId = data => {};

  hash.txObjJson = data => {};
};
