document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('popup-button').addEventListener('click',(e) => {
        
        e.preventDefault();
        let data = {
            time:"1",
            memo:"My First Hedera Transaction",
            contentid:'test1',
            redirect:'{"nonPayingAccount": "/nomicropaymentreceived.html"}',
            recipientlist:'[{"tinybars": "444", "to":"0.0.1107"}]',
            type:'article'
        }

        window.hash.triggerCryptoTransfer(data, (err, res) => {
            console.log("Callback::Error:", err)
            console.log("Callback::Response:", res)
        });  

    });

    document.getElementById('contract-button').addEventListener('click',(e) => {
        e.preventDefault();
        
        let data = {
            contractid:"0.0.15372",
            memo:"My First Hedera Transaction",
            params:'[7]',
            amount:0,
            abi:`[{"constant":false,"inputs":[{"name":"_status","type":"uint256"}],"name":"setNewStatus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]`
        }

        window.hash.triggerSmartContract(data)
        .then(res => console.log('Promise:::Resolve::', res))
        .catch(err => console.log("Promise::Error::", err))

    })

    document.getElementById('account-button').addEventListener('click',(e) => {
        e.preventDefault();

        window.hash.triggerCheckBalance()
        .then(res => console.log('Promise:::Resolve::', res))
        .catch(err => console.log("Promise::Error::", err))
    })

});