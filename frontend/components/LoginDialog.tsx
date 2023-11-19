import Logo from '@/app/assets/logo.png'
import earth from '@/app/assets/login-earth.png'
import chains, {
  gnosisChain,
  goerliChain,
  initialChain,
  mainnetChain,
  mumbaiChain,
  polygonChain,
} from '@/constants/chain'
import CloseIcon from '@mui/icons-material/Close'
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  makeStyles,
} from '@mui/material'
import { Web3AuthModalPack } from '@safe-global/auth-kit'
import { CHAIN_NAMESPACES, WALLET_ADAPTERS } from '@web3auth/base'
import { Web3AuthOptions } from '@web3auth/modal'
import { OpenloginAdapter } from '@web3auth/openlogin-adapter'
import { ethers } from 'ethers'
import Image from 'next/image'
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { UserContext } from '@/contexts/UserContext'
import { useRouter } from 'next/navigation'

const getChain = (chainId?: string) => {
  const chain = chains.find((chain) => chain.id === chainId)

  return chain
}

const initialState = {
  isAuthenticated: false,
  loginWeb3Auth: () => {},
  logoutWeb3Auth: () => {},
  relayTransaction: async () => {},
  setChainId: () => {},
  setSafeSelected: () => {},
  onRampWithStripe: async () => {},
  safes: [],
  chainId: initialChain.id,
  isRelayerLoading: true,
  openStripeWidget: async () => {},
  closeStripeWidget: async () => {},
  startMoneriumFlow: async () => {},
  closeMoneriumFlow: () => {},
}

function LoginDialog({ handleClose }: { handleClose: () => void }) {
  const userContext = useContext(UserContext)
  const router = useRouter()
  const [ownerAddress, setOwnerAddress] = useState<string>('')
  const [safes, setSafes] = useState<string[]>([])
  const [chainId, setChainId] = useState<string>(() => {
    // if (isMoneriumRedirect()) {
    //   return '0x5'
    // }

    return initialChain.id
  })
  const [safeSelected, setSafeSelected] = useState<string>('')
  const [web3Provider, setWeb3Provider] =
    useState<ethers.providers.Web3Provider>()
  const [web3AuthModalPack, setWeb3AuthModalPack] =
    useState<Web3AuthModalPack>()

  const chain = getChain(chainId) || initialChain

  useEffect(() => {
    userContext.setUser(ownerAddress)
    if (ownerAddress && ownerAddress !== '') {
      handleClose()
      router.push('/dashboard')
    }
  }, [ownerAddress])

  useEffect(() => {
    setOwnerAddress('')
    setSafes([])
    setChainId(chain.id)
    setWeb3Provider(undefined)
    setSafeSelected('')
  }, [chain])

  useEffect(() => {
    ;(async () => {
      const options: Web3AuthOptions = {
        clientId:
          process.env.REACT_APP_WEB3AUTH_CLIENT_ID ||
          'BJmQ1AD-phWfQMMUSxzohRau55w8U2nlc5iEm9_C8eIogqCztnUQpl3w8YRsPdvzikKlQQiIob4rtnDhFDAlsXQ',
        web3AuthNetwork: 'testnet',
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: chain.id,
          rpcTarget: chain.rpcUrl,
        },
        uiConfig: {
          appName: 'KediTrees',
          theme: 'dark',
          loginMethodsOrder: ['google', 'facebook'],
          appLogo:
            'https://drive.google.com/file/d/1Sv8SxV6P8zUzuSGEO1QEqjO3WZvL3hxi/view?usp=sharing',
        },
      }

      const modalConfig = {
        [WALLET_ADAPTERS.TORUS_EVM]: {
          label: 'torus',
          showOnModal: false,
        },
        [WALLET_ADAPTERS.METAMASK]: {
          label: 'metamask',
          showOnDesktop: true,
          showOnMobile: false,
        },
      }

      const openloginAdapter = new OpenloginAdapter({
        loginSettings: {
          mfaLevel: 'mandatory',
        },
        adapterSettings: {
          uxMode: 'popup',
          whiteLabel: {
            name: 'Safe',
          },
        },
      })

      const web3AuthModalPack = new Web3AuthModalPack({
        txServiceUrl: chain.transactionServiceUrl,
      })

      await web3AuthModalPack.init({
        options,
        adapters: [openloginAdapter],
        modalConfig,
      })

      setWeb3AuthModalPack(web3AuthModalPack)
    })()
  }, [chain])

  const loginWeb3Auth = useCallback(async () => {
    if (!web3AuthModalPack) return

    try {
      const { safes, eoa } = await web3AuthModalPack.signIn()
      const provider =
        web3AuthModalPack.getProvider() as ethers.providers.ExternalProvider

      // we set react state with the provided values: owner (eoa address), chain, safes owned & web3 provider
      setChainId(chain.id)
      setOwnerAddress(eoa)
      setSafes(safes || [])
      setWeb3Provider(new ethers.providers.Web3Provider(provider))
    } catch (error) {
      console.log('error: ', error)
    }
  }, [chain, web3AuthModalPack])

  const handleChainChange = (e: SelectChangeEvent) => {
    const newChain = chains.find((chain) => chain.label == e.target.value)

    if (newChain) {
      setChainId(newChain.id)
    }
  }

  return (
    <div className="w-max flex flex-row bg-tertiary">
      <div className="w-1/2">
        <Image
          width={1500}
          height={1500}
          alt="Join The Community"
          src={earth}
        />
      </div>
      <div className="w-1/2">
        <div className="flex flex-col justify-center items-center">
          <IconButton
            edge="start"
            color="info"
            onClick={handleClose}
            aria-label="close">
            <CloseIcon />
          </IconButton>
        </div>
        <div className="mx-10">
          <div className="group-3">
            <div className="group-4">
              <div className="text-5xl my-10 text-white">Log in</div>
              <div className="my-10">
                <p className="p text-white">
                  If you don’t have an account register
                </p>
                <p className="text-white">
                  <span className="span">You can </span>
                  <span className="text-wrapper-3">Register here!</span>
                </p>
              </div>
            </div>
            <div className="w-auto mr-3">
              <div className="w-1/2">
                <FormControl fullWidth>
                  <InputLabel className="text-white">Chain</InputLabel>
                  <Select
                    sx={{
                      color: 'white',
                      '.MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(228, 219, 233, 0.25)',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(228, 219, 233, 0.25)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(228, 219, 233, 0.25)',
                      },
                      '.MuiSvgIcon-root ': {
                        fill: 'white !important',
                      },
                    }}
                    value={chain.label}
                    label="Chain"
                    onChange={handleChainChange}>
                    <MenuItem value={gnosisChain.label}>
                      {gnosisChain.label}
                    </MenuItem>
                    <MenuItem value={goerliChain.label}>
                      {goerliChain.label}
                    </MenuItem>
                    <MenuItem value={mainnetChain.label}>
                      {mainnetChain.label}
                    </MenuItem>
                    <MenuItem value={polygonChain.label}>
                      {polygonChain.label}
                    </MenuItem>
                    <MenuItem value={mumbaiChain.label}>
                      {mumbaiChain.label}
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="w-auto my-3">
                <Button
                  className="bg-secondary w-1/2 border-2 border-black"
                  variant="contained"
                  onClick={loginWeb3Auth}>
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginDialog
