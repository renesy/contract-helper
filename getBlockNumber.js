#!/usr/bin/env node

Web3 = require("web3")
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
web3.eth.getBlockNumber().then(function(result) { console.log(result) })
