# e-prescription-bft

  
  
**Installation**
 to execute smart contracts methods in Hyperledger Besu network:

    cd smart_contracts/Ethereum-and-HyperLedger-Besu/
    npm install

**Client Code**

    cd smart_contracts/Ethereum-and-HyperLedger-Besu/scripts/
Edit: `client-besu-transaction.js` or `client-ropsten-transaction.js`
  

1. Insert the RPC (*check your testnet address*);

2. Insert the private key (*if you are using metamask, export the private key and paste in client code*);

3. Insert your account address;
4. Insert you smart-contract address;

  

To automate transactions, run the scripts (inside scripts directory):

**Execution permission:**

  
**Multiple Bash:**

    chmod +x ./auto-besu-mult-clients.sh

**Single Client Bash:**

    chmod +x ./auto-besu-single-client.sh

**Single Client Bash:**

    chmod +x ./auto-ropsten-single-client.sh

**Run:**

    ./auto-besu-mult-clients.sh

or

    ./auto-besu-single-client.sh

or

    ./auto-ropsten-single-client.sh

It is possible to run the client directly:

    node client-ropsten-transaction.js
or

    node client-besu-transaction.js
