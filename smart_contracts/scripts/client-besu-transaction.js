const path = require('path');
const fs = require('fs-extra');
const Tx = require('ethereumjs-tx');
const Web3 = require('web3');

 

// member1 details
const { tessera, besu } = require("./keys.js");
const host = besu.ethsignerProxy.url;
const accountAddress = besu.ethsignerProxy.accountAddress;

// abi and bytecode generated from simplestorage.sol:
// node scripts/compile.js
const contractJsonPath = path.resolve(__dirname, '../','contracts','Prescription.json');
const contractJson = JSON.parse(fs.readFileSync(contractJsonPath));
const contractAbi = contractJson.abi;
const contractBytecode = contractJson.evm.bytecode.object

// initialize the default constructor with a value `47 = 0x2F`; this value is appended to the bytecode
const contractConstructorInit = "000000000000000000000000000000000000000000000000000000000000002F";

async function getValueAtAddress(host, deployedContractAbi, deployedContractAddress){
  const web3 = new Web3(host);
  const contractInstance = new web3.eth.Contract(deployedContractAbi, deployedContractAddress);
  const res = await contractInstance.methods.get().call();
  console.log("Obtained value at deployed contract is: "+ res);
  return res
}

async function getAllPastEvents(host, deployedContractAbi, deployedContractAddress){
  const web3 = new Web3(host);
  const contractInstance = new web3.eth.Contract(deployedContractAbi, deployedContractAddress);
  const res = await contractInstance.getPastEvents("allEvents", {
    fromBlock: 0,
    toBlock: 'latest'
  })

  const amounts = res.map(x => {
    return x.returnValues._amount
  });

  const personal_info = res.map(y => {
    return y.returnValues._personal_info
  });
  const medication = res.map(z => {
    return z.returnValues._medication
  });
  const diagnosis = res.map(k => {
    return k.returnValues._diagnosis
  });




  console.log("Obtained all value events from deployed contract : [" + amounts + "]");
  console.log("Obtained all medication events from deployed contract : [" + medication + "]");
  console.log("Obtained all diagnosis events from deployed contract : [" + diagnosis + "]");


  return res
}

// You need to use the accountAddress details provided to Quorum to send/interact with contracts
async function setValueAtAddress(host, accountAddress, value,personal_info,medication,diagnosis, deployedContractAbi, deployedContractAddress){
  const web3 = new Web3(host);
  const contractInstance = new web3.eth.Contract(deployedContractAbi, deployedContractAddress);
  const res = await contractInstance.methods.set(value, personal_info,medication,diagnosis).send({from: accountAddress, gasPrice: "0x0", gasLimit: "0x24A22"});
  // verify the updated value
  // const readRes = await contractInstance.methods.get().call();
  // console.log("Obtained value at deployed contract is: "+ readRes);
  return res
}

async function createContract(host) {
  const web3 = new Web3(host);
  // make an account and sign the transaction with the account's private key; you can alternatively use an exsiting account
  const account = web3.eth.accounts.create();
  console.log(account);

  const rawTxOptions = {
    nonce: "0x00",
    from: account.address,
    to: null, //public tx
    value: "0x00",
    data: '0x'+contractBytecode+contractConstructorInit,
    gasPrice: "0x0", //ETH per unit of gas
    gasLimit: "0x2CA51" //max number of gas units the tx is allowed to use
  };
  console.log("Creating transaction...");
  const tx = new Tx(rawTxOptions);
  console.log("Signing transaction...");
  tx.sign(Buffer.from(account.privateKey.substring(2), "hex"));
  console.log("Sending transaction...");
  var serializedTx = tx.serialize();
  const pTx = await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex').toString("hex"));
  console.log("tx transactionHash: " + pTx.transactionHash);
  console.log("tx contractAddress: " + pTx.contractAddress);
  return pTx;
};

async function main(){
  let newValue = 1;
  let personal_info = "Patient Personal Info";
  let medication = "Medication x";
  let diagnosis = "Diagnosis Y";
  contract_addr = "0x4D2D24899c0B115a1fce8637FCa610Fe02f1909e";

    //console.log("Contract deployed at address: " + contract_addr);

    
    //console.log("Use the smart contracts 'get' function to read the contract's constructor initialized value .. " )
    //await getValueAtAddress(host, contractAbi, contract_addr);

    console.time('Execution Time'); 
    await setValueAtAddress(host, accountAddress, newValue,personal_info,medication,diagnosis, contractAbi, contract_addr);
    console.timeEnd('Execution Time');
    
    /*
    console.time('Execution Time');

    for (let index = 0; index <1000; index++) {
      console.time('Execution Time');

      //console.log(`Use the smart contracts 'set' function to update the prescription state ...` );
      await setValueAtAddress(host, accountAddress, newValue,personal_info,medication,diagnosis, contractAbi, contract_addr);


      console.timeEnd('Execution Time');
      
    }
    */
    
    
    //console.log("Verify the updated value that was set .. " )
    //await getValueAtAddress(host, contractAbi, contract_addr);
   // await getAllPastEvents(host, contractAbi, contract_addr);

}

if (require.main === module) {
  main();
}

module.exports = exports = main
