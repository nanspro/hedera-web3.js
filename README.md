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
$ export ACCESS_KEY = '<YOUR_ACCESS_KEY>'
# Run index.js to see all transactions of a sample account '0.0.27992'

$ yarn

$ yarn start
```

Our api exports many methods such as:
* `accountBalanceHistory`
* `searchAccounts`
* `searchTxs`

You can edit `index.js` to import whatever api you require and then test it.


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



