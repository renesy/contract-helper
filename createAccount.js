#!/usr/bin/env node

Web3 = require("web3")
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
account = web3.eth.accounts.create()

address = account['address']
privateKey = account['privateKey']
console.log('address:', address, 'privateKey:', privateKey)
