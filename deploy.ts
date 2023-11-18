import { ethers } from 'ethers';
import { EthersAdapter } from '@safe-global/protocol-kit'
import dotenv from 'dotenv'
import SafeApiKit from '@safe-global/api-kit'
import { SafeAccountConfig } from '@safe-global/protocol-kit'
import { SafeFactory } from '@safe-global/protocol-kit'

dotenv.config()

    ; (async () => {

        // https://chainlist.org/?search=goerli&testnets=true
        // const RPC_URL = 'https://eth-sepolia.public.blastapi.io'
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


        //send ethers to Safe: 

        // const safeAddress = safeSdk.getAddress()

        // const safeAmount = ethers.utils.parseUnits('0.01', 'ether').toHexString()

        // const transactionParameters = {
        //     to: safeAddress,
        //     value: safeAmount
        // }

        // const tx = await signer.sendTransaction(transactionParameters)

        // console.log('Fundraising.')
        // console.log(`Deposit Transaction: https://sepolia.etherscan.io/tx/${tx.hash}`)


        // Create a Safe transaction with the provided parameters

        // const destination = '0xdC4B924b566c380E5e090150b176e42D58ec172a'
        // const amount = ethers.utils.parseUnits('0.005', 'ether').toString()

        // const safeTransactionData: SafeTransactionDataPartial = {
        //     to: destination,
        //     data: '0x',
        //     value: amount
        // }
        // // Create a Safe transaction with the provided parameters
        // const safeTransactionCreated = await safeSdkOwner.createTransaction({ safeTransactionData })

        // // Propose the transaction

        // // Deterministic hash based on transaction parameters
        // const safeTxHash = await safeSdkOwner.getTransactionHash(safeTransactionCreated)

        // // Sign transaction to verify that the transaction is coming from owner 1
        // const senderSignature = await safeSdkOwner.signTransactionHash(safeTxHash)

        // await safeService.proposeTransaction({
        //     safeAddress,
        //     safeTransactionData: safeTransactionCreated.data,
        //     safeTxHash,
        //     senderAddress: await signer.getAddress(),
        //     senderSignature: senderSignature.data,
        // })

        // // Get pending transactions

        // const pendingTransactions = await safeService.getPendingTransactions(safeAddress).results

        // // Execute the transaction

        // const executedTransaction = await safeService.getTransaction(safeTxHash)
        // const executeTxResponse = await safeSdkOwner.executeTransaction(executedTransaction)
        // const receipt = await executeTxResponse.transactionResponse?.wait()

        // console.log('Transaction executed:')
        // console.log(`https://goerli.etherscan.io/tx/${receipt.transactionHash}`)

        // //confirm the transaction

        // const afterBalance = await safeSdkOwners.getBalance()

        // console.log(`The final balance of the Safe: ${ethers.utils.formatUnits(afterBalance, 'ether')} ETH`)


    })();