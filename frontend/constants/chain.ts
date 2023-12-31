import Chain from '@/models/chain'

export const gnosisChain: Chain = {
  id: '0x64',
  token: 'xDai',
  shortName: 'gno',
  label: 'Gnosis Chain',
  rpcUrl: 'https://rpc.gnosischain.com',
  blockExplorerUrl: 'https://gnosisscan.io',
  color: '#3e6957',
  transactionServiceUrl: 'https://safe-transaction-gnosis-chain.safe.global',
  isStripePaymentsEnabled: false,
  isMoneriumPaymentsEnabled: false,
}

export const goerliChain: Chain = {
  id: '0x5',
  token: 'gETH',
  label: 'Görli',
  shortName: 'gor',
  rpcUrl: 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  blockExplorerUrl: 'https://goerli.etherscan.io',
  color: '#fbc02d',
  transactionServiceUrl: 'https://safe-transaction-goerli.safe.global',
  isStripePaymentsEnabled: false,
  isMoneriumPaymentsEnabled: true,
}

export const mainnetChain: Chain = {
  id: '0x1',
  token: 'ETH',
  label: 'Ethereum',
  shortName: 'eth',
  rpcUrl: 'https://cloudflare-eth.com',
  blockExplorerUrl: 'https://etherscan.io',
  color: '#DDDDDD',
  transactionServiceUrl: 'https://safe-transaction-mainnet.safe.global',
  isStripePaymentsEnabled: false,
  isMoneriumPaymentsEnabled: false,
}

export const polygonChain: Chain = {
  id: '0x89',
  token: 'matic',
  shortName: 'matic',
  label: 'Polygon',
  rpcUrl: 'https://polygon-rpc.com',
  blockExplorerUrl: 'https://polygonscan.com',
  color: '#8248E5',
  transactionServiceUrl: 'https://safe-transaction-polygon.safe.global',
  isStripePaymentsEnabled: false,
  isMoneriumPaymentsEnabled: false,
}

export const mumbaiChain: Chain = {
  id: '0x13881',
  token: 'matic',
  shortName: 'matic',
  label: 'Mumbai',
  rpcUrl: 'https://rpc-mumbai.maticvigil.com/',
  blockExplorerUrl: 'https://mumbai.polygonscan.com',
  color: '#8248E5',
  isStripePaymentsEnabled: true,
  isMoneriumPaymentsEnabled: false,
  faucetUrl: 'https://mumbaifaucet.com/',
}

export const lineaChain: Chain = {
  id: '0xe708',
  token: 'ETH',
  shortName: 'eth',
  label: 'Linea',
  rpcUrl: 'https://linea.blockpi.network/v1/rpc/public',
  blockExplorerUrl: 'https://lineascan.build',
  color: '#0xe708',
  isStripePaymentsEnabled: true,
  isMoneriumPaymentsEnabled: false,
  faucetUrl: 'https://mumbaifaucet.com/',
}

export const scrollChain: Chain = {
  id: '0x826b0',
  token: 'ETH',
  shortName: 'eth',
  label: 'Scroll',
  rpcUrl: 'https://rpc.scroll.io',
  blockExplorerUrl: 'https://scrollscan.com',
  color: '#0xe708',
  isStripePaymentsEnabled: true,
  isMoneriumPaymentsEnabled: false,
  faucetUrl: 'https://mumbaifaucet.com/',
}

const chains: Chain[] = [
  gnosisChain,
  goerliChain,
  mainnetChain,
  mumbaiChain,
  polygonChain,
]

export const initialChain = mumbaiChain

export default chains
