#!/bin/bash

while true; do

                        #validators container ID
    sudo docker stats 7ef45cccfea8 --format "table {{.Name}}\t{{.CPUPerc}}\t{{.MemUsage}}" --no-stream >> cpu_time_containers.txt
    sleep 1

    
done