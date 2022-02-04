
## Data

  

 - `cpu-usage.csv` and `memory-evaluation.csv` data was extracted from docker stats command:
 ```console
 sudo docker stats 6be9c194c235 e37fec9a0e7c 70f6ec2f77e7 c99f057e83fb 
 ```
 We used a shell script to save the data in file:
 
  ```console
 cd scripts/
 chmod +x docker-cpu-usage.sh
 ./docker-cpu-usage.sh
 ```
 
- For visualization in real time, we also used Grafana to monitor the validator nodes.

- `transactions.csv` data was extracted from time command in shell script.   Time refers to the time required for a client to submit a transaction and have it included in a block (commit).
