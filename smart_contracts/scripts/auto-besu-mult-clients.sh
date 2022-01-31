#!/bin/bash


for i in {1..800}
do

   sleep 11

   for i in {1..10}
   do
      #echo $i
      node besu-transaction.js &
      
   done

   

done


echo "Fim !"

exit
