#!/bin/bash

TIMEFORMAT=%R


for i in {1..1000}
do

      { time node besu-transaction.js ; } 2>> report-besu-one-hour.txt 
      # time node teste.js >> report-ropsten.txt

done
echo "Fim !"

exit
