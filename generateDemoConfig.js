#!/usr/bin/env node

Web3 = require("web3")
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

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

topAdminPrivateKey = getPrivateKey('admin')

demoConfig = 
{
    "topAdminPrivateKey": topAdminPrivateKey,
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
                "address": getAddress(0),
                "privateKey": getPrivateKey(0),
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
                "address": getAddress(1),
                "privateKey": getPrivateKey(1),
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
                "address": getAddress(2),
                "privateKey": getPrivateKey(2),
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
                "address": getAddress(3),
                "privateKey": getPrivateKey(3),
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
                "address": getAddress(4),
                "privateKey": getPrivateKey(4),
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
                "address": getAddress(5),
                "privateKey": getPrivateKey(5),
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
                "address": getAddress('matcher'),
                "privateKey": getPrivateKey('matcher'),
                "rights": 63
            }
        },
        {
            "type": "CREATE_PRODUCING_ASSET",
            "data": {
                "smartMeter": getAddress('smartmeter'),
                "smartMeterPK": getPrivateKey('smartmeter'),
                "owner": getAddress(3),
                "matcher": getAddress('matcher'),
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
                "smartMeter": getAddress('smartmeter4'),
                "smartMeterPK": getPrivateKey('smartmeter4'),
                "owner": getAddress(4),
                "matcher": getAddress('matcher'),
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
                "smartMeter": getAddress('smartmeter3'),
                "smartMeterPK": getPrivateKey('smartmeter3'),
                "owner": getAddress(3),
                "matcher": getAddress('matcher'),
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
                "smartMeter": getAddress('smartmeter3consume'),
                "smartMeterPK": getPrivateKey('smartmeter3consume'),
                "owner": getAddress(3),
                "matcher": getAddress('matcher'),
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
                "assetOwner": getAddress(3),
                "assetOwnerPK": getPrivateKey(3)
            }
        },
        {
            "type": "INITIALIZE_CERTIFICATES",
            "data": {
                "assetId": 1,
                "assetOwner": getAddress(4),
                "assetOwnerPK": getPrivateKey(4)
            }
        },
        {
            "type": "INITIALIZE_CERTIFICATES",
            "data": {
                "assetId": 2,
                "assetOwner": getAddress(3),
                "assetOwnerPK": getPrivateKey(3)
            }
        },
        {
            "type": "SAVE_SMARTMETER_READ_PRODUCING",
            "data": {
                "assetId": 0,
                "meterreading": 10,
                "smartMeter": getAddress('smartmeter'),
                "smartMeterPK": getPrivateKey('smartmeter'),
                "filehash": "newMeterRead"
            }
        },
        {
            "type": "SAVE_SMARTMETER_READ_CONSUMING",
            "data": {
                "assetId": 0,
                "meterreading": 10,
                "smartMeter": getAddress('smartmeter3consume'),
                "smartMeterPK": getPrivateKey('smartmeter3consume'),
                "filehash": "newMeterRead"
            }
        },
        {
            "type": "TRANSFER_CERTIFICATE",
            "data": {
                "certId": 0,
                "assetOwner": getAddress(3),
                "assetOwnerPK": getPrivateKey(3),
                "addressTo": getAddress(5)
            }
        },
        {
            "type": "SAVE_SMARTMETER_READ_PRODUCING",
            "data": {
                "assetId": 0,
                "meterreading": 15,
                "smartMeter": getAddress('smartmeter'),
                "smartMeterPK": getPrivateKey('smartmeter'),
                "filehash": "newMeterRead"
            }
        },
        {
            "type": "SPLIT_CERTIFICATE",
            "data": {
                "certId":1,
                "assetOwner": getAddress(3),
                "assetOwnerPK": getPrivateKey(3),
                "splitValue": 3
            }
        },
        {
            "type": "SAVE_SMARTMETER_READ_PRODUCING",
            "data": {
                "assetId": 0,
                "meterreading": 20,
                "smartMeter": getAddress('smartmeter'),
                "smartMeterPK": getPrivateKey('smartmeter'),
                "filehash": "newMeterRead"
            }
        },
        {
            "type": "SET_ERC20_CERTIFICATE",
            "data": {
                "certId":4,
                "assetOwner": getAddress(3),
                "assetOwnerPK": getPrivateKey(3),
                "price": 1000,
                "testAccount": getAddress(5)
            }
        },
        {
            "type": "BUY_CERTIFICATE",
            "data": {
                "certId": 4,
                "price": 1000,
                "buyer": getAddress(5),
                "buyerPK": getPrivateKey(5),
                "assetOwner": getAddress(3)
            }
        },
        {
            "type": "SAVE_SMARTMETER_READ_PRODUCING",
            "data": {
                "assetId": 1,
                "meterreading": 5,
                "smartMeter": getAddress('smartmeter4'),
                "smartMeterPK": getPrivateKey('smartmeter4'),
                "filehash": "newMeterRead"
            }
        },
        {
            "type": "CREATE_DEMAND",
            "data": {
                "trader": getAddress(5),
                "traderPK": getPrivateKey(5),
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
                "assetOwner": getAddress(4),
                "assetOwnerPK": getPrivateKey(4),
                "price": 10,
                "currency": "USD",
                "availableWh": 10,
                "timeframe": "hourly"
            }
        },
        {
            "type": "MAKE_AGREEMENT",
            "data": {
              "creator": getAddress(5),
              "creatorPK": getPrivateKey(5),
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
              "allowedMatcher": getAddress('matcher')
            }
        },
        {
            "type": "APPROVE_AGREEMENT",
            "data": {
                "agreementId": 0,
                "agree": getAddress(4),
                "agreePK": getPrivateKey(4)
            }
        },
        {
            "type": "SAVE_SMARTMETER_READ_PRODUCING",
            "data": {
                "assetId": 1,
                "meterreading": 200,
                "smartMeter": getAddress('smartmeter4'),
                "smartMeterPK": getPrivateKey('smartmeter4'),
                "filehash": "newMeterRead"
            }
        }
    ]
}

console.log(JSON.stringify(demoConfig, null, 4))

