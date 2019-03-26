#!/usr/bin/env node

RPC_URL = 'http://localhost:8545'

fs = require('fs')
Web3 = require("web3")
web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL))

accounts = []

function getAndCreateAccount(key) {
    if (!(key in accounts)) {
        accounts[key] = web3.eth.accounts.create()
    }
    return accounts[key]
}

function getAddress(key) {
    return getAndCreateAccount(key)['address']
}

function getPrivateKey(key) {
    return getAndCreateAccount(key)['privateKey']
}

connectionConfig = {
    "develop": {
        "web3": RPC_URL,
        "deployKey": getPrivateKey('admin')
    }
}

demoConfig = 
{
    "topAdminPrivateKey": getPrivateKey('admin'),
    "flow": [
        {
            "type": "CREATE_ACCOUNT",
            "data": {
                "firstName": "John",
                "surname": "Doe",
                "organization": "UserAdmin Organization",
                "street": "Main Street",
                "number": "1",
                "zip": "01234",
                "city": "Anytown",
                "country": "USA",
                "state": "Anystate",
                "address": "0x71c31ff1faa17b1cb5189fd845e0cca650d215d3",
                "privateKey": "0xbfb423a193614c6712efd02951289192c20d70b3fc8a8b7cdee73603fcead486",
                "rights": 1
            }
        },
        {
            "type": "CREATE_ACCOUNT",
            "data": {
                "firstName": "John",
                "surname": "Doe Two",
                "organization": "AssetAdmin Organization",
                "street": "Main Street",
                "number": "2",
                "zip": "01234",
                "city": "Anytown",
                "country": "USA",
                "state": "Anystate",
                "address": "0xcea1c413a570654fa85e78f7c17b755563fec5a5",
                "privateKey": "0x5c0b28bff67916a879953c50b25c73827ae0b777a2ad13abba2e4b67f843294e",
                "rights": 2
            }
        },
        {
            "type": "CREATE_ACCOUNT",
            "data": {
                "firstName": "John",
                "surname": "Doe Three",
                "organization": "AgreementAdmin Organization",
                "street": "Main Street",
                "number": "3",
                "zip": "01234",
                "city": "Anytown",
                "country": "USA",
                "state": "Anystate",
                "address": "0x583b3e16a27f3db4bdc4c1a5452eeed14619c8da",
                "privateKey": "0x37b3b1d577f61fac7afc161a12669361a7f308ad42c7b093dc10ff1781bb618d",
                "rights": 4
            }
        },
        {
            "type": "CREATE_ACCOUNT",
            "data": {
                "firstName": "John",
                "surname": "Doe Four",
                "organization": "AssetManager Organization",
                "street": "Main Street",
                "number": "4",
                "zip": "01234",
                "city": "Anytown",
                "country": "USA",
                "state": "Anystate",
                "address": getAddress("Doe Four"),
                "privateKey": getPrivateKey("Doe Four"),
                "rights": 24
            }
        },
        {
            "type": "CREATE_ACCOUNT",
            "data": {
                "firstName": "John",
                "surname": "Doe Five",
                "organization": "AssetManager Second Organization",
                "street": "Main Street",
                "number": "5",
                "zip": "01234",
                "city": "Anytown",
                "country": "USA",
                "state": "Anystate",
                "address": getAddress("Doe Five"),
                "privateKey": getPrivateKey("Doe Five"),
                "rights": 24
            }
        },
        {
            "type": "CREATE_ACCOUNT",
            "data": {
                "firstName": "John",
                "surname": "Doe Six",
                "organization": "Trader Organization",
                "street": "Main Street",
                "number": "6",
                "zip": "01234",
                "city": "Anytown",
                "country": "USA",
                "state": "Anystate",
                "address": getAddress("Doe Six"),
                "privateKey": getPrivateKey("Doe Six"),
                "rights": 16
            }
        },
        {
            "type": "CREATE_ACCOUNT",
            "data": {
                "firstName": "John",
                "surname": "Doe Seven",
                "organization": "Matcher Organization",
                "street": "Main Street",
                "number": "7",
                "zip": "01234",
                "city": "Anytown",
                "country": "USA",
                "state": "Anystate",
                "address": getAddress("Matcher"),
                "privateKey": getPrivateKey("Matcher"),
                "rights": 63
            }
        },
        {
            "type": "CREATE_PRODUCING_ASSET",
            "data": {
                "smartMeter": getAddress("Smart Meter Producing Four"),
                "smartMeterPK": getPrivateKey("Smart Meter Producing Four"),
                "owner": getAddress("Doe Four"),
                "matcher": getAddress("Matcher"),
                "operationalSince": 1514764800,
                "capacityWh": 10000,
                "lastSmartMeterReadWh": 0,
                "active": true,
                "lastSmartMeterReadFileHash": "",
                "country": "USA",
                "region": "AnyState",
                "zip": "01234",
                "city": "Anytown",
                "street": "Main Street",
                "houseNumber": "8",
                "gpsLatitude": "0",
                "gpsLongitude": "0",
                "assetType": "Wind",
                "certificatesCreatedForWh": 0,
                "lastSmartMeterCO2OffsetRead": 0,
                "complianceRegistry": "none",
                "otherGreenAttributes": "N.A.",
                "typeOfPublicSupport": "N.A",
                "maxOwnerChanges": 3
            }
        },
        {
            "type": "CREATE_PRODUCING_ASSET",
            "data": {
                "smartMeter": "0x84a2c086ffa013d06285cdd303556ec9be5a1ff7",
                "smartMeterPK": "a05ddf7fe8302d117b516c0e401468a30c39a3e467ad3720381cf89500f0854b",
                "owner": getAddress("Doe Five"),
                "matcher": getAddress("Matcher"),
                "operationalSince": 1483228800,
                "capacityWh": 10,
                "lastSmartMeterReadWh": 0,
                "active": true,
                "lastSmartMeterReadFileHash": "",
                "country": "USA",
                "region": "AnyState",
                "zip": "01234",
                "city": "Anytown",
                "street": "Main Street",
                "houseNumber": "9",
                "gpsLatitude": "0",
                "gpsLongitude": "0",
                "assetType": "Solar",
                "certificatesCreatedForWh": 0,
                "lastSmartMeterCO2OffsetRead": 0,
                "complianceRegistry": "IREC",
                "otherGreenAttributes": "N.A.",
                "typeOfPublicSupport": "N.A",
                "maxOwnerChanges": 3
            }
        },
        {
            "type": "CREATE_PRODUCING_ASSET",
            "data": {
                "smartMeter": "0x00f4af465162c05843ea38d203d37f7aad2e2c17",
                "smartMeterPK": "09f08bc14bfdaf427fdd0eb676db21a86fa908a25870158345e4f847b5ada35e",
                "owner": getAddress("Doe Four"),
                "matcher": getAddress("Matcher"),
                "operationalSince": 1514764800,
                "capacityWh": 10000,
                "lastSmartMeterReadWh": 0,
                "active": true,
                "lastSmartMeterReadFileHash": "",
                "country": "USA",
                "region": "AnyState",
                "zip": "01234",
                "city": "Anytown",
                "street": "Main Street",
                "houseNumber": "10",
                "gpsLatitude": "0",
                "gpsLongitude": "0",
                "assetType": "BiomassGas",
                "certificatesCreatedForWh": 0,
                "lastSmartMeterCO2OffsetRead": 0,
                "complianceRegistry": "TIGR",
                "otherGreenAttributes": "N.A.",
                "typeOfPublicSupport": "N.A",
                "maxOwnerChanges": 3
            }
        },
        {
            "type": "CREATE_CONSUMING_ASSET",
            "data": {
                "smartMeter": "0x1112ec367b20d2bffd40ee11523c3d36d61adf1b",
                "smartMeterPK": "50764e302e4ed8ce624003deca642c03ce06934fe77585175c5576723f084d4c",
                "owner": getAddress("Doe Four"),
                "matcher": getAddress("Matcher"),
                "operationalSince": 1529971200,
                "capacityWh": 5000,
                "lastSmartMeterReadWh": 0,
                "active": true,
                "lastSmartMeterReadFileHash": "",
                "country": "USA",
                "region": "AnyState",
                "zip": "01234",
                "city": "Anytown",
                "street": "Main Street",
                "houseNumber": "11",
                "gpsLatitude": "0",
                "gpsLongitude": "0",
                "maxCapacitySet": true,
                "certificatesUsedForWh": 0
            }
        },
        {
            "type": "SLEEP",
            "data": 2000
        },
        {
            "type": "INITIALIZE_CERTIFICATES",
            "data": {
                "assetId": 0,
                "assetOwner": getAddress("Doe Four"),
                "assetOwnerPK": getPrivateKey("Doe Four")
            }
        },
        {
            "type": "INITIALIZE_CERTIFICATES",
            "data": {
                "assetId": 1,
                "assetOwner": getAddress("Doe Five"),
                "assetOwnerPK": getPrivateKey("Doe Five")
            }
        },
        {
            "type": "INITIALIZE_CERTIFICATES",
            "data": {
                "assetId": 2,
                "assetOwner": getAddress("Doe Four"),
                "assetOwnerPK": getPrivateKey("Doe Four")
            }
        },
        {
            "type": "SAVE_SMARTMETER_READ_PRODUCING",
            "data": {
                "assetId": 0,
                "meterreading": 10,
                "smartMeter": getAddress("Smart Meter Producing Four"),
                "smartMeterPK": getPrivateKey("Smart Meter Producing Four"),
                "filehash": "newMeterRead"
            }
        },
        {
            "type": "SAVE_SMARTMETER_READ_CONSUMING",
            "data": {
                "assetId": 0,
                "meterreading": 10,
                "smartMeter": "0x1112ec367b20d2bffd40ee11523c3d36d61adf1b",
                "smartMeterPK": "0x50764e302e4ed8ce624003deca642c03ce06934fe77585175c5576723f084d4c",
                "filehash": "newMeterRead"
            }
        },
        {
            "type": "TRANSFER_CERTIFICATE",
            "data": {
                "certId": 0,
                "assetOwner": getAddress("Doe Four"),
                "assetOwnerPK": getPrivateKey("Doe Four"),
                "addressTo": getAddress("Doe Six")
            }
        },
        {
            "type": "SAVE_SMARTMETER_READ_PRODUCING",
            "data": {
                "assetId": 0,
                "meterreading": 15,
                "smartMeter": getAddress("Smart Meter Producing Four"),
                "smartMeterPK": getPrivateKey("Smart Meter Producing Four"),
                "filehash": "newMeterRead"
            }
        },
        {
            "type": "SPLIT_CERTIFICATE",
            "data": {
                "certId":1,
                "assetOwner": getAddress("Doe Four"),
                "assetOwnerPK": getPrivateKey("Doe Four"),
                "splitValue": 3
            }
        },
        {
            "type": "SAVE_SMARTMETER_READ_PRODUCING",
            "data": {
                "assetId": 0,
                "meterreading": 20,
                "smartMeter": getAddress("Smart Meter Producing Four"),
                "smartMeterPK": getPrivateKey("Smart Meter Producing Four"),
                "filehash": "newMeterRead"
            }
        },
        {
            "type": "SET_ERC20_CERTIFICATE",
            "data": {
                "certId":4,
                "assetOwner": getAddress("Doe Four"),
                "assetOwnerPK": getPrivateKey("Doe Four"),
                "price": 1000,
                "testAccount": getAddress("Doe Six")
            }
        },
        {
            "type": "BUY_CERTIFICATE",
            "data": {
                "certId": 4,
                "price": 1000,
                "buyer": getAddress("Doe Six"),
                "buyerPK": getPrivateKey("Doe Six"),
                "assetOwner": getAddress("Doe Four")
            }
        },
        {
            "type": "SAVE_SMARTMETER_READ_PRODUCING",
            "data": {
                "assetId": 1,
                "meterreading": 5,
                "smartMeter": "0x84a2c086ffa013d06285cdd303556ec9be5a1ff7",
                "smartMeterPK": "0xa05ddf7fe8302d117b516c0e401468a30c39a3e467ad3720381cf89500f0854b",
                "filehash": "newMeterRead"
            }
        },
        {
            "type": "CREATE_DEMAND",
            "data": {
                "trader": getAddress("Doe Six"),
                "traderPK": getPrivateKey("Doe Six"),
                "timeframe": "hourly",
                "pricePerCertifiedWh": 10,
                "currency": "Ether",
                "producingAsset": 0,
                "consumingAsset": 0,
                "country": "string",
                "region": "string",
                "assettype": "BiomassGas",
                "minCO2Offset": 10,
                "otherGreenAttributes": "string",
                "typeOfPublicSupport": "string",
                "targetWhPerPeriod": 10,
                "registryCompliance": "EEC"
            }
        },
        {
            "type": "CREATE_SUPPLY",
            "data": {
                "assetId": 1,
                "assetOwner": getAddress("Doe Five"),
                "assetOwnerPK": getPrivateKey("Doe Five"),
                "price": 10,
                "currency": "USD",
                "availableWh": 10,
                "timeframe": "hourly"
            }
        },
        {
            "type": "MAKE_AGREEMENT",
            "data": {
              "creator": getAddress("Doe Six"),
              "creatorPK": getPrivateKey("Doe Six"),
              "startTime": -1,
              "endTime": 3600,
              "price": 10,
              "currency": "USD",
              "timeframe": "hourly",
              "period": 10,
              "currentWh": 0,
              "currentPeriod": 0,
              "demandId": 0,
              "supplyId": 0,
              "allowedMatcher": getAddress("Matcher")
            }
        },
        {
            "type": "APPROVE_AGREEMENT",
            "data": {
                "agreementId": 0,
                "agree": getAddress("Doe Five"),
                "agreePK": getPrivateKey("Doe Five")
            }
        },
        {
            "type": "SAVE_SMARTMETER_READ_PRODUCING",
            "data": {
                "assetId": 1,
                "meterreading": 200,
                "smartMeter": "0x84a2c086ffa013d06285cdd303556ec9be5a1ff7",
                "smartMeterPK": "0xa05ddf7fe8302d117b516c0e401468a30c39a3e467ad3720381cf89500f0854b",
                "filehash": "newMeterRead"
            }
        }
    ]
}

fs.writeFile('connection-config.json', JSON.stringify(connectionConfig, null, 4), function(err){})
fs.writeFile('config/demo-config.json', JSON.stringify(demoConfig, null, 4), function(err){})
