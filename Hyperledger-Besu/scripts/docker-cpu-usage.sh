#!/bin/bash

while true; do

                        #validators container ID
    sudo docker stats 6be9c194c235 e37fec9a0e7c 70f6ec2f77e7 c99f057e83fb --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}" --no-stream >> Hyperledger-Besu/scripts/report/besu/cpu_time_containers.txt
    sleep 1

    
done