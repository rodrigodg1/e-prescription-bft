#!/bin/bash

TIMEFORMAT=%R


for i in {1..1000}
do

      { time node ropsten-transaction.js ; } 2>> report/ropsten/report-ropsten.txt
      # time node teste.js >> report-ropsten.txt

done
echo "Fim !"

exit
