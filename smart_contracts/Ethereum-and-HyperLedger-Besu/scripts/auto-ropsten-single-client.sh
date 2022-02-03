#!/bin/bash

TIMEFORMAT=%R


for i in {1..1000}
do

      { time node client-ropsten-transaction.js ; } 2>> report/ropsten/report-ropsten.txt
      

done
echo "Fim !"

exit
