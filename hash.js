let hash = {};

window.onload = function() {
  window.hash = hash;

  const getResponsePromise = (xhr) => {
    return new Promise((resolve, reject) => {
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          resolve(xhr.response);
        }
      };

      xhr.send();
    });
  }

  const getUrl = (url, params = null) => {
    if (params === null) {
      return `https://cors-anywhere.herokuapp.com/https://api.dragonglass.me/hedera/api/${url}`;
    } else {
      return `https://cors-anywhere.herokuapp.com/https://api.dragonglass.me/hedera/api/${url}?${params}`;
    }
  };

  hash.searchAccounts = data => {
    const xhr = new this.XMLHttpRequest();

    xhr.open("GET", getUrl("accounts"), true);
    xhr.setRequestHeader("X-API-KEY", "974d4207-51e0-3d73-8e20-4d5952078c47");
    return getResponsePromise(xhr);
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
