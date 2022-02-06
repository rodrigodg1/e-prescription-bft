#!/bin/bash

TIMEFORMAT=%R


for i in {1..1000}
do

      { time node client-besu-transaction.js ; } 2>> report/besu-time.txt 
      

done
echo "Fim !"

exit
