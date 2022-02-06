#!/bin/bash

TIMEFORMAT=%R


for i in {1..2000}
do

      node besu-block-time.js >> report/besu/report-besu-block-time.txt 
      sleep 4

done
echo "End !"

exit
