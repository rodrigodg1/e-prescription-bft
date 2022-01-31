const Web3 = require('web3');
const Tx = require('ethereumjs-tx');
const provider = new Web3.providers.HttpProvider("<RPC server>"); //RPC server Address
const web3 = new Web3(provider);

const account1 = '<paste your account address>'; // Your account address 1
//const account2 = '' // Your account address 2
web3.eth.defaultAccount = account1;

const privateKey1 = Buffer.from('<paste your private key>', 'hex');

//const abi = [{"constant":false,"inputs":[{"name":"_greeting","type":"string"}],"name":"greet","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getGreeting","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}];

const abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "initVal",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "stored",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "_diagnosis",
        "type": "string"
      }
    ],
    "name": "stored_diagnosis",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "_medication",
        "type": "string"
      }
    ],
    "name": "stored_medication",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "_personal_info",
        "type": "string"
      }
    ],
    "name": "stored_personal_info",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "diagnosis",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "get",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "retVal",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "personal_info",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "medication",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "diagnosis",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "medication",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "personal_info",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "x",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_personal_info",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_medication",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_diagnosis",
        "type": "string"
      }
    ],
    "name": "set",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "storedData",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

const contract_Address = "0x37abafa9418641dfFCA1f995a0AFD493364BF2ee";

const contract = new web3.eth.Contract(abi, contract_Address);

//contract method data
const myData = contract.methods.set(1,"Patient Personal Info", "Medication x", "Diagnosis Y").encodeABI();




function main (){

  web3.eth.getTransactionCount(account1, (err, txCount) => {
    // Build the transaction
      const txObject = {
        nonce:    web3.utils.toHex(txCount),
        to:       contract_Address,
        value:    web3.utils.toHex(web3.utils.toWei('0', 'ether')),
        gasLimit: web3.utils.toHex(2100000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('6', 'gwei')),
        data: myData  
      }
        // Sign the transaction
        const tx = new Tx(txObject);
        tx.sign(privateKey1);
    
        const serializedTx = tx.serialize();
        const raw = '0x' + serializedTx.toString('hex');
    
        // Broadcast the transaction
    
        const transaction = web3.eth.sendSignedTransaction(raw, (err, tx) => {
            console.log(tx)
        });
    
    
    
    });
    
}




if (require.main === module) {
  main();
}

module.exports = exports = main
