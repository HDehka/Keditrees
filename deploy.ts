import { ethers } from 'ethers';
import { EthersAdapter } from '@safe-global/protocol-kit'
import dotenv from 'dotenv'
import SafeApiKit from '@safe-global/api-kit'
import { SafeAccountConfig } from '@safe-global/protocol-kit'
import { SafeFactory } from '@safe-global/protocol-kit'

dotenv.config()

    ; (async () => {

        const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_URL)

        // Initialize signers
        const deployer = new ethers.Wallet(process.env.OWNER_1_PRIVATE_KEY!, provider)
        const owner = ethers.Wallet.createRandom(provider)
        // const owner = new ethers.Wallet(process.env.OWNER_2_PRIVATE_KEY!, provider)
        // const owner3Signer = new ethers.Wallet(process.env.OWNER_3_PRIVATE_KEY!, provider)

        const ethAdapter = new EthersAdapter({
            ethers,
            signerOrProvider: deployer
        })

        //initialize the api kit
        const txServiceUrl = 'https://safe-transaction-sepolia.safe.global'
        const safeService = new SafeApiKit({ txServiceUrl, ethAdapter })

        //initialize the protocole kit 

        const safeFactory = await SafeFactory.create({ ethAdapter })

        //deploy a safe

        const safeAccountConfig: SafeAccountConfig = {
            owners: [
                await owner.getAddress()
            ],
            threshold: 1
        }

        const safeSdkOwner = await safeFactory.deploySafe({ safeAccountConfig })

        const safeAddress = await safeSdkOwner.getAddress()

        console.log('Your Safe has been deployed:')
        console.log(`https://sepolia.etherscan.io/address/${safeAddress}`)
        console.log(`https://app.safe.global/gor:${safeAddress}`)

    })();