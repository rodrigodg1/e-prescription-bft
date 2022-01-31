# e-prescription-bft


Inside smart-contract directory:

    npm install

**Inside client code:**

 1. Insert the RPC (*check your testnet address*);
 2. Insert the private key (*if you are using metamask, export the private key and paste in client code*);
 3. Insert your account address;

to automate transactions, run the scripts (inside scripts directory):
**Execution permission:**

    chmod +x ./auto-besu-mult-clients.sh
    chmod +x ./auto-besu-single-client.sh
    chmod +x ./auto-ropsten-single-client.sh
**Run:**

    ./auto-besu-mult-clients.sh
or

    ./auto-besu-single-client.sh

or

    ./auto-ropsten-single-client.sh



it is possible to run the client directly:

    node  client-ropsten-transaction.js
   or

     node  client-besu-transaction.js

