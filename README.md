# hedera-web3.js

A library to make it easy for users to build web3 apps on top of hedera.

For more info checkout https://dailystamp.io/post/5df9a4c4a671e8434b0a612b

## Composer
Composer is a browser extension that provides support for developers on Hedera Hashgraph. This tool produces payment servers, retries, onboarding, verification, and platform analytics. Most importantly it allows you to **sign smart contract transactions**.

![](https://i.imgur.com/e57YBR0.png)

Composer empower creators to produce quality applications on the network.
Get composer for your browser from [here](https://chrome.google.com/webstore/detail/composer-for-hedera-hashg/hdjnnemgikeoehneddegfcmkljenlean)


## Dragonglass

Dragonglass is an service which fulfills the needs of dApp development teams. It provides developers the ability to build server less applications. Between the Hedera platform and DragonGlass, developers are able to execute transactions on Hedera and gain instant access to all their data on DragonGlass. It serves as an operational data store for dApps built on hedera (https://app.dragonglass.me)

**How to use dragonglass**
* First you need to create an account here https://app.dragonglass.me/hedera/home, once you do that go to your profile and generate an api key which will be used to call dragonglass apis
* Have a look at the apis provide by dragonglass here https://app.dragonglass.me/hedera/apiview
* Just call these apis to with appropriate params
_Note: Remember to add `"headers: {'X-API-KEY': 'YOUR_ACCESS_KEY'}"` to your api calls_


## Hedera-Web3.js

Hedera-Web3.js is an library which combines the functionality of both composer and dragonglass and provides a common interface to access both of them.
Just go ahead and clone https://github.com/nanspro/hedera-web3.js to get started

```bash
$ git clone https://github.com/nanspro/hedera-web3.js
$ cd hedera-web3.js
# Set env ACCESS_KEY
$ export ACCESS_TOKEN = '<YOUR_ACCESS_TOKEN>'
# Run index.js to see all transactions of a sample account '0.0.27992'

$ yarn

$ yarn start
```

### Account APIs

Following methods are exported for account related queries

* **accountBalanceHistory** : This api can be used to get account balance at any given time. {accountID} e.g 0.0.9838 (asOfInEpoch} in millisecond e.g. 1514764800000

* **searchAccounts** : This api can be used to search accounts based on provided query params The results are paginated and are sorted on consensusTime desc

* **accountTxs** : This api returns all transactions where the accountID was involved. Returns up to a maximum of 10000 accounts only. {accountID} e.g 0.0.9838

* **accountFiles** : This api returns list of files for the account. Returns up to a maximum of the last 10000 accounts only. {accountID} e.g 0.0.9838.

* **accountBalanceAsOf** : This api can be used to get account balance at any given time. {accountID} e.g 0.0.9838 (asOfInEpoch} in millisecond e.g. 1514764800000

* **accountTransfers** : This api returns all transfers to or from an accountID. Returns up to a maximum of 10000 accounts only. {accountID} e.g 0.0.9838


### Transaction APIs

Following methods are exported for querying txs

* **searchTxs** : This api can be used to search transactions based on provided query params The results are paginated and are sorted on consensusTime desc. Different query parameters would use AND operator to search. Same query params expecting multiple values will use OR operator. Fields expecting multiple parameters can be provided using comma seperated value. Returns up to a maximum of the last 10000 transaction only


* **searchTxId** : "transactionID" is provided as part of transaction response.
_Please note the transaction ID although generated from Hedera transaction ID is actually generated concatinating startDate and payerID_

* **txObjJson** : To get raw transaction as json object


### Contract APIs

Following methods are exported for querying contracts

* **contractBalanceAsOf** : This api can be used to get account balance at any given time. {contractID} e.g 0.0.24660 (asOfInEpoch} in millisecond e.g. 1514764800000

* **searchContracts** : This api can be used to search contracts based on provided query params The results are paginated and are sorted on consensusTime desc .

* **contractCallCount** : Returns the # of calls made to a contract. {contractID} e.g 0.0.24660

* **contractHistory** : This api returns account balance histogram for a given time.
_Please note that interval is a required field. Without it the api will return Bad Request. {contractID} e.g 0.0.24660_

You can edit `index.js` to import whatever api you require and then test it.

Examples:

```js
import { accountTxs, searchAccounts } from "./services/dragonglass/accounts";
import { searchContracts } from "./services/dragonglass/contracts";

accountTxs("0.0.27992");
searchAccounts("0.0.27992");
searchContracts("0.0.28503");
```

**_Note: To know what additional params you can pass to these apis checkout https://app.dragonglass.me/hedera/apiview_**


**Using it with composer**

Checkout from master to gh-pages which contains `hash.js`(composer with extra methods to implement dragonglass api calls)
```bash
$ git checkout gh-pages
```

Go to https://nanspro.github.io/hedera-web3.js/ where you can test this new enhanced composer.

Press Ctrl+Shift+I to use browser console, type
* hash.enable()
This will prompt your composer to connect to this website and you can see on the console the result
```js
account-connect-success
{message: "Acccounts now exposed"}
```

* hash.searchAccounts()
* hash.accountTransfers()
* hash.accountBalanceHistory()

Our new composer is now interacting with dragonglass apis too in the background to offer additional methods to query hedera blockchain.

![](https://i.imgur.com/MEsIt0N.jpg)



