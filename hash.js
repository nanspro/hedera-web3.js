let hash = {};

window.onload = function() {
  window.hash = hash;

  const getUrl = (url, params = null) => {
    if (params === null) {
      return `https://api.dragonglass.me/hedera/api/${url}`;
    } else {
      return `https://api.dragonglass.me/hedera/api/${url}?${params}`;
    }
  };

  hash.searchAccounts = data => {
    const Http = new this.XMLHttpRequest();
    Http.open("GET", getUrl("accounts"), true);
    Http.setRequestHeader("X-API-KEY", "974d4207-51e0-3d73-8e20-4d5952078c47");

    Http.onreadystatechange = function() {
      if (Http.readyState == 4 && Http.status == 200) {
        console.log(Http.responseText);
      }
    };

    Http.send();

    // return new Promise((resolve, reject) => {
    //   Http.onreadystatechange = function() {
    //     if (Http.readyState == 4 && Http.status == 200) {
    //       resolve(Http.response);
    //     } else if (Http.readyState == 4) {
    //       reject(Http.response);
    //     }
    //   };

    //   Http.send(null);
    // });
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
