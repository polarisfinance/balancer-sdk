import { Network } from './network';
import { BalancerNetworkConfig } from '@/types';

export const balancerVault = '0x6985436a0E5247A3E1dc29cdA9e1D89C5b59e26b';

export const BALANCER_NETWORK_CONFIG: Record<Network, BalancerNetworkConfig> = {
  [Network.MAINNET]: {
    chainId: Network.MAINNET, //1
    addresses: {
      contracts: {
        vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        multicall: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
        lidoRelayer: '0xdcdbf71A870cc60C6F9B621E28a7D3Ffd6Dd4965',
      },
      tokens: {
        wrappedNativeAsset: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        lbpRaisingTokens: [
          '0x6B175474E89094C44Da98b954EedeAC495271d0F',
          '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
          '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        ],
        stETH: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
        wstETH: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
      },
    },
    urls: {
      subgraph:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2',
    },
    pools: {
      wETHwstETH: {
        id: '0x32296969ef14eb0c6d29669c550d4a0449130230000200000000000000000080',
        address: '0x32296969ef14eb0c6d29669c550d4a0449130230',
      },
    },
  },
  [Network.POLYGON]: {
    chainId: Network.POLYGON, //137
    addresses: {
      contracts: {
        vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        multicall: '0xa1B2b503959aedD81512C37e9dce48164ec6a94d',
      },
      tokens: {
        wrappedNativeAsset: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      },
    },
    urls: {
      subgraph:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-polygon-v2',
    },
    pools: {},
  },
  [Network.ARBITRUM]: {
    chainId: Network.ARBITRUM, //42161
    addresses: {
      contracts: {
        vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        multicall: '0x269ff446d9892c9e19082564df3f5e8741e190a1',
      },
      tokens: {
        wrappedNativeAsset: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      },
    },
    urls: {
      subgraph:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-arbitrum-v2',
    },
    pools: {},
  },
  [Network.KOVAN]: {
    chainId: Network.KOVAN, //42
    addresses: {
      contracts: {
        vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        multicall: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
      },
      tokens: {
        wrappedNativeAsset: '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
      },
    },
    urls: {
      subgraph:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-kovan-v2',
    },
    pools: {},
  },
  [Network.ROPSTEN]: {
    chainId: Network.ROPSTEN, //3
    addresses: {
      contracts: {
        vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        multicall: '0x53c43764255c17bd724f74c4ef150724ac50a3ed',
      },
      tokens: {
        wrappedNativeAsset: '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
      },
    },
    urls: {
      subgraph: '',
    },
    pools: {},
  },
  [Network.RINKEBY]: {
    chainId: Network.RINKEBY, //4
    addresses: {
      contracts: {
        vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        multicall: '0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821',
      },
      tokens: {
        wrappedNativeAsset: '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
      },
    },
    urls: {
      subgraph:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-rinkeby-v2',
    },
    pools: {},
  },
  [Network.GOERLI]: {
    chainId: Network.GOERLI, //5
    addresses: {
      contracts: {
        vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        multicall: '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e',
      },
      tokens: {
        wrappedNativeAsset: '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
      },
    },
    urls: {
      subgraph:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-goerli-v2',
    },
    pools: {},
  },
  [Network.AURORA]: {
    chainId: Network.AURORA, //1313161554
    addresses: {
      contracts: {
        vault: '0x6985436a0E5247A3E1dc29cdA9e1D89C5b59e26b',
        multicall: '0x04364F8908BDCB4cc7EA881d0DE869398BA849C9',
      },
      tokens: {
        wrappedNativeAsset: '0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
      },
    },
    urls: {
      subgraph:
        'https://api.thegraph.com/subgraphs/name/polarisfinance/polaris-dex',
    },
    pools: {},
  },
  [Network.AURORATEST]: {
    chainId: Network.AURORATEST, //1313161555
    addresses: {
      contracts: {
        vault: '0x3F39DDE7BF3e17Db8F7D56942B1A2C2880C2e622',
        multicall: '0x3a4773e600086A753862621A26a2E3274610da43',
      },
      tokens: {
        wrappedNativeAsset: '0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
      },
    },
    urls: {
      subgraph:
        'https://api.thegraph.com/subgraphs/name/polarisfinance/polaris-dex-testnet',
    },
    pools: {},
  },
};

export const networkAddresses = (
  chainId: number
): BalancerNetworkConfig['addresses'] =>
  BALANCER_NETWORK_CONFIG[chainId as Network].addresses;
