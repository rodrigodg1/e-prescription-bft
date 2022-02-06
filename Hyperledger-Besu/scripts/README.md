
  

## Scripts for evaluation



First, configure the network information on the client:
`client-besu-transaction.js`

To send only one transaction:

    node client-besu-transaction.js

you can run the script to send transactions automatically:

    ./auto-besu-single-client.sh

or run multiple terminals to send transactions:

    ./auto-besu-mult-clients.sh

to analyse CPU usage and memory allocation by validator container:
(check your container ID using `sudo docker ps`)

    ./docker-cpu-usage.sh


to query the block time:

    ./auto-besu-block-time.sh
