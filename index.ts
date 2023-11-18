// import { Web3AuthModalPack, Web3AuthConfig } from '@safe-global/auth-kit'
// import { CHAIN_NAMESPACES, WALLET_ADAPTERS } from '@web3auth/base';
// import { Web3AuthOptions } from '@web3auth/modal'
// import { OpenloginAdapter } from '@web3auth/openlogin-adapter'
// import { ethers } from 'ethers';
// import { EthersAdapter } from '@safe-global/protocol-kit'
// import dotenv from 'dotenv'


// dotenv.config()


// //Using Auth Kit:

// const rpcTarget = process.env.SEPOLIA_URL;

// // https://web3auth.io/docs/sdk/pnp/web/modal/initialize#arguments
// const options: Web3AuthOptions = {
//     clientId: process.env.REACT_APP_WEB3AUTH_CLIENT_ID || '', // https://dashboard.web3auth.io/
//     web3AuthNetwork: 'testnet',
//     chainConfig: {
//         chainNamespace: CHAIN_NAMESPACES.EIP155,
//         chainId: '0xAA36A7',
//         rpcTarget: rpcTarget
//     },
//     uiConfig: {
//         theme: 'dark',
//         loginMethodsOrder: ['google']
//     }
// }

// // https://web3auth.io/docs/sdk/pnp/web/modal/initialize#configuring-adapters
// const modalConfig = {
//     [WALLET_ADAPTERS.TORUS_EVM]: {
//         label: 'torus',
//         showOnModal: false
//     }
//     // [WALLET_ADAPTERS.METAMASK]: {
//     //     label: 'metamask',
//     //     showOnDesktop: true,
//     //     showOnMobile: false
//     // }
// }

// // https://web3auth.io/docs/sdk/pnp/web/modal/whitelabel#whitelabeling-while-modal-initialization
// const openloginAdapter = new OpenloginAdapter({
//     loginSettings: {
//         mfaLevel: 'mandatory'
//     },
//     adapterSettings: {
//         uxMode: 'popup',
//         whiteLabel: {
//             name: 'Safe'
//         }
//     }
// })

// const web3AuthConfig: Web3AuthConfig = {
//     txServiceUrl: 'https://safe-transaction-sepolia.safe.global'
// }

// // Instantiate and initialize the pack
// const web3AuthModalPack = new Web3AuthModalPack(web3AuthConfig)
// await web3AuthModalPack.init({ options, adapters: [openloginAdapter], modalConfig })



// const provider = new ethers.providers.Web3Provider(web3AuthModalPack.getProvider() as ethers.providers.ExternalProvider)
// const signer = provider.getSigner()

// const ethAdapter = new EthersAdapter({
//     ethers,
//     signerOrProvider: signer || provider
// })