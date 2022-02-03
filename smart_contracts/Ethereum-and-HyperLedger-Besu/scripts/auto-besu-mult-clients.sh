#!/bin/bash


for i in {1..800}
do

   sleep 11
   
   #open 10 bash terminals
   for i in {1..10}
   do
      #echo $i
      node client-besu-transaction.js &
      
   done

   

done


echo "Fim !"

exit
