#!/bin/bash


RPC="http://localhost:26657"
CHAIN_ID="testing"

NODE="--node $RPC"

export TXFLAG="${NODE} --chain-id ${CHAIN_ID} --gas-prices 0.025ucosm --gas auto --gas-adjustment 1.3"

export KEYRING="--keyring-backend test --keyring-dir $HOME/.wasmd_keys"


CONTRACT=wasm14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9s0phg4d





TRANSACTION='{"create_prescription":{"personal_info":"Personal Information","medication":"Medication x","diagnosis":"Diagnosis  y"}}'

sleep 5

while :
do
    
    wasmd tx wasm execute $CONTRACT "$TRANSACTION" --amount 1ucosm --from validator $KEYRING $TXFLAG -y
    block_query=$(wasmd query block $NODE)

    echo $block_query | jq '.block.header.height' >> block_time.txt
    echo $block_query | jq '.block.header.time' >> block_time.txt
    echo $block_query | jq '.block.data.txs[0]' >> block_time.txt

    echo " " >> block_time.txt


    sleep 5





done