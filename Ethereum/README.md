# e-prescription-Ethereum

  
  
**Installation**

 to execute smart contracts methods in using Ethereum Platform:

    npm install

**Client Code**

    cd scripts/

Edit:  `client-ropsten-transaction.js`
  

1. Insert the RPC (*check your testnet address*);

2. Insert the private key (*if you are using metamask, export the private key and paste in client code*);

3. Insert your account address;
4. Insert you smart-contract address;


To automate transactions, run the scripts (inside scripts directory):


**Single Client Bash:**

    chmod +x ./auto-ropsten-single-client.sh

**Run:**

    ./auto-ropsten-single-client.sh

It is possible to run the client directly:

    node client-ropsten-transaction.js

