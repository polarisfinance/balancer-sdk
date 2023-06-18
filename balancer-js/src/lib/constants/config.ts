import { Network } from './network';
import { BalancerNetworkConfig } from '@/types';

export const balancerVault = '0x6985436a0E5247A3E1dc29cdA9e1D89C5b59e26b';

// Info fetched using npm package slot20
export const BPT_SLOT = 0;
export const BPT_DECIMALS = 18;

export const BALANCER_NETWORK_CONFIG: Record<Network, BalancerNetworkConfig> = {
  [Network.MAINNET]: {
    chainId: Network.MAINNET, //1
    addresses: {
      //Mainnet deployment addresses: https://docs.balancer.fi/reference/contracts/deployment-addresses/mainnet.html
      contracts: {
        vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        multicall: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
        balancerHelpers: '0x5aDDCCa35b7A0D07C74063c48700C8590E87864E',
        balancerMinterAddress: '0x239e55F427D44C3cc793f49bFB507ebe76638a2b',
        lidoRelayer: '0xdcdbf71A870cc60C6F9B621E28a7D3Ffd6Dd4965',
        relayerV3: '0x886A3Ec7bcC508B8795990B60Fa21f85F9dB7948',
        relayerV4: '0x2536dfeeCB7A0397CF98eDaDA8486254533b1aFA',
        relayerV5: '0xfeA793Aa415061C483D2390414275AD314B3F621',
        gaugeController: '0xc128468b7ce63ea702c1f104d55a2566b13d3abd',
        feeDistributor: '0xD3cf852898b21fc233251427c2DC93d3d604F3BB',
        protocolFeePercentagesProvider:
          '0x97207B095e4D5C9a6e4cfbfcd2C3358E03B90c4A',
        veBal: '0xC128a9954e6c874eA3d62ce62B468bA073093F25',
        veBalProxy: '0x6f5a2eE11E7a772AeB5114A20d0D7c0ff61EB8A0',
        weightedPoolFactory: '0x897888115ada5773e02aa29f775430bfb5f34c51',
        composableStablePoolFactory:
          '0xdba127fBc23fb20F5929C546af220A991b5C6e01',
        erc4626LinearPoolFactory: '0x67A25ca2350Ebf4a0C475cA74C257C94a373b828',
        aaveLinearPoolFactory: '0xb9f8ab3ed3f3acba64bc6cd2dca74b7f38fd7b88',
        eulerLinearPoolFactory: '0x5f43fba61f63fa6bff101a0a0458cea917f6b347',
        gearboxLinearPoolFactory: '0x2ebe41e1aa44d61c206a94474932dadc7d3fd9e3',
        yearnLinearPoolFactory: '0x8b7854708c0c54f9d7d1ff351d4f84e6de0e134c',
      },
      tokens: {
        wrappedNativeAsset: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
        lbpRaisingTokens: [
          '0x6b175474e89094c44da98b954eedeac495271d0f', // DAI
          '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
          '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH
        ],
        stETH: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
        wstETH: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
        bal: '0xba100000625a3754423978a60c9317c58a424e3d',
        veBal: '0xC128a9954e6c874eA3d62ce62B468bA073093F25',
        bbaUsd: '0x7b50775383d3d6f0215a8f290f2c9e2eebbeceb2',
      },
    },
    urls: {
      subgraph:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-v2',
      gaugesSubgraph:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-gauges',
      blockNumberSubgraph:
        'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks',
    },
    pools: {
      wETHwstETH: {
        id: '0x32296969ef14eb0c6d29669c550d4a0449130230000200000000000000000080',
        address: '0x32296969ef14eb0c6d29669c550d4a0449130230',
      },
    },
    poolsToIgnore: [
      '0xbd482ffb3e6e50dc1c437557c3bea2b68f3683ee', // a pool made by an external dev who was playing with a novel rate provider mechanism in production.
      '0x0afbd58beca09545e4fb67772faf3858e610bcd0',
      '0x2ff1a9dbdacd55297452cfd8a4d94724bc22a5f7',
      '0xbc0f2372008005471874e426e86ccfae7b4de79d',
      '0xdba274b4d04097b90a72b62467d828cefd708037',
      '0xf22ff21e17157340575158ad7394e068048dd98b',
      '0xf71d0774b214c4cf51e33eb3d30ef98132e4dbaa',
    ],
    sorConnectingTokens: [
      {
        symbol: 'wEth',
        address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      },
      {
        symbol: 'wstEth',
        address: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
      },
      {
        symbol: 'DOLA',
        address: '0x865377367054516e17014CcdED1e7d814EDC9ce4',
      },
    ],
  },
  [Network.POLYGON]: {
    chainId: Network.POLYGON, //137
    addresses: {
      //Polygon deployment addresses: https://docs.balancer.fi/reference/contracts/deployment-addresses/polygon.html
      contracts: {
        vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        multicall: '0xa1B2b503959aedD81512C37e9dce48164ec6a94d',
        gaugeClaimHelper: '0xaeb406b0e430bf5ea2dc0b9fe62e4e53f74b3a33',
        relayerV3: '0xcf6a66E32dCa0e26AcC3426b851FD8aCbF12Dac7',
        relayerV4: '0x28A224d9d398a1eBB7BA69BCA515898966Bb1B6b',
        relayerV5: '0xd18d5D377eb23362e54Fa496597d7E962d56C554',
        balancerHelpers: '0x239e55F427D44C3cc793f49bFB507ebe76638a2b',
        weightedPoolFactory: '0xfc8a407bba312ac761d8bfe04ce1201904842b76',
        composableStablePoolFactory:
          '0x85a80afee867adf27b50bdb7b76da70f1e853062',
        erc4626LinearPoolFactory: '0xa3b9515a9c557455bc53f7a535a85219b59e8b2e',
        aaveLinearPoolFactory: '0xf23b4db826dba14c0e857029dff076b1c0264843',
        yearnLinearPoolFactory: '0x7396f99b48e7436b152427bfa3dd6aa8c7c6d05b',
      },
      tokens: {
        bal: '0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3',
        wrappedNativeAsset: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
        lbpRaisingTokens: [
          '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063', // DAI
          '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', // USDC
          '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', // WMATIC
        ],
      },
    },
    urls: {
      subgraph:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-polygon-prune-v2',
      gaugesSubgraph:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-gauges-polygon',
      blockNumberSubgraph:
        'https://api.thegraph.com/subgraphs/name/ianlapham/polygon-blocks',
    },
    pools: {},
    poolsToIgnore: [
      '0x600bd01b6526611079e12e1ff93aba7a3e34226f', // This pool has rateProviders with incorrect scaling
      '0xc31a37105b94ab4efca1954a14f059af11fcd9bb', // Stable pool with Convergence issues
    ],
    sorConnectingTokens: [
      {
        symbol: 'weth',
        address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      },
      {
        symbol: 'bbrz2',
        address: '0xe22483774bd8611be2ad2f4194078dac9159f4ba',
      }, // Joins Stables<>BRZ via https://app.balancer.fi/#/polygon/pool/0x4a0b73f0d13ff6d43e304a174697e3d5cfd310a400020000000000000000091c
    ],
  },
  [Network.ARBITRUM]: {
    chainId: Network.ARBITRUM, //42161
    //Arbitrum deployment addresses: https://docs.balancer.fi/reference/contracts/deployment-addresses/arbitrum.html
    addresses: {
      contracts: {
        vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        multicall: '0x269ff446d9892c9e19082564df3f5e8741e190a1',
        gaugeClaimHelper: '0xa0dabebaad1b243bbb243f933013d560819eb66f',
        relayerV3: '0x42E49B48573c725ee32d2579060Ed06894f97002',
        relayerV4: '0x5bf3B7c14b10f16939d63Bd679264A1Aa951B4D5',
        relayerV5: '0x598ce0f1ab64B27256759ef99d883EE51138b9bd',
        balancerHelpers: '0x77d46184d22CA6a3726a2F500c776767b6A3d6Ab',
        weightedPoolFactory: '0xc7e5ed1054a24ef31d827e6f86caa58b3bc168d7',
        composableStablePoolFactory:
          '0x85a80afee867adf27b50bdb7b76da70f1e853062',
        erc4626LinearPoolFactory: '0xa3b9515a9c557455bc53f7a535a85219b59e8b2e',
        aaveLinearPoolFactory: '0xf23b4db826dba14c0e857029dff076b1c0264843',
        yearnLinearPoolFactory: '0xd8b6b96c88ad626eb6209c4876e3b14f45f8803a',
      },
      tokens: {
        bal: '0x040d1edc9569d4bab2d15287dc5a4f10f56a56b8',
        wrappedNativeAsset: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
        lbpRaisingTokens: [
          '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1', // DAI
          '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8', // USDC
          '0x82af49447d8a07e3bd95bd0d56f35241523fbab1', // WETH
        ],
      },
    },
    urls: {
      subgraph:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-arbitrum-v2',
      gaugesSubgraph:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-gauges-arbitrum',
      blockNumberSubgraph:
        'https://api.thegraph.com/subgraphs/name/ianlapham/arbitrum-one-blocks',
    },
    pools: {},
    sorConnectingTokens: [
      {
        symbol: 'weth',
        address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      },
    ],
  },
  [Network.KOVAN]: {
    chainId: Network.KOVAN, //42
    addresses: {
      contracts: {
        vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        multicall: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
        veBal: '0x16ba924752EF283C7946db8A122a6742AA35C1DC',
        veBalProxy: '0x98D0d0a65cBeCCaa647a5a95cf27Cf2f00E1231C',
        balancerHelpers: '0x94905e703fEAd7f0fD0eEe355D267eE909784e6d',
        weightedPoolFactory: '0x8df6EfEc5547e31B0eb7d1291B511FF8a2bf987c',
      },
      tokens: {
        wrappedNativeAsset: '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
      },
    },
    urls: {
      subgraph:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-kovan-v2',
      gaugesSubgraph:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-gauges',
    },
    pools: {},
  },
  [Network.ROPSTEN]: {
    chainId: Network.ROPSTEN, //3
    addresses: {
      contracts: {
        vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        multicall: '0x53c43764255c17bd724f74c4ef150724ac50a3ed',
        balancerHelpers: '',
      },
      tokens: {
        wrappedNativeAsset: '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
      },
    },
    urls: {
      subgraph: '',
      gaugesSubgraph:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-gauges',
    },
    pools: {},
  },
  [Network.RINKEBY]: {
    chainId: Network.RINKEBY, //4
    addresses: {
      contracts: {
        vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        multicall: '0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821',
        balancerHelpers: '0x5aDDCCa35b7A0D07C74063c48700C8590E87864E',
        weightedPoolFactory: '0x8df6EfEc5547e31B0eb7d1291B511FF8a2bf987c',
      },
      tokens: {
        wrappedNativeAsset: '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
      },
    },
    urls: {
      subgraph:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-rinkeby-v2',
      gaugesSubgraph:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-gauges',
    },
    pools: {},
  },
  [Network.GOERLI]: {
    chainId: Network.GOERLI, //5
    //Goerli deployment addresses: https://docs.balancer.fi/reference/contracts/deployment-addresses/goerli.html
    addresses: {
      contracts: {
        vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        multicall: '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e',
        relayerV3: '0x7b9B6f094DC2Bd1c12024b0D9CC63d6993Be1888',
        relayerV4: '0x00e695aA8000df01B8DC8401B4C34Fba5D56BBb2',
        relayerV5: '0x03F1ab8b19bcE21EB06C364aEc9e40322572a1e9',
        gaugeController: '0xBB1CE49b16d55A1f2c6e88102f32144C7334B116',
        veBal: '0x33A99Dcc4C85C014cf12626959111D5898bbCAbF',
        veBalProxy: '0xA1F107D1cD709514AE8A914eCB757E95f9cedB31',
        balancerHelpers: '0x5aDDCCa35b7A0D07C74063c48700C8590E87864E',
        feeDistributor: '0x7F91dcdE02F72b478Dc73cB21730cAcA907c8c44',
        weightedPoolFactory: '0x230a59f4d9adc147480f03b0d3fffecd56c3289a',
        composableStablePoolFactory:
          '0x85a80afee867adf27b50bdb7b76da70f1e853062',
        erc4626LinearPoolFactory: '0xba240c856498e2d7a70af4911aafae0d6b565a5b',
        aaveLinearPoolFactory: '0x76578ecf9a141296ec657847fb45b0585bcda3a6',
        eulerLinearPoolFactory: '0x813ee7a840ce909e7fea2117a44a90b8063bd4fd',
      },
      tokens: {
        bal: '0xfA8449189744799aD2AcE7e0EBAC8BB7575eff47',
        wrappedNativeAsset: '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
      },
    },
    urls: {
      subgraph:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-goerli-v2',
      gaugesSubgraph:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-gauges-goerli',
      blockNumberSubgraph:
        'https://api.thegraph.com/subgraphs/name/blocklytics/goerli-blocks',
    },
    pools: {},
    sorConnectingTokens: [
      {
        symbol: 'weth',
        address: '0xdFCeA9088c8A88A76FF74892C1457C17dfeef9C1',
      },
    ],
  },
  [Network.OPTIMISM]: {
    chainId: Network.OPTIMISM, //10
    // Optimism deployment addresses: https://docs.balancer.fi/reference/contracts/deployment-addresses/optimism.html
    addresses: {
      contracts: {
        vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        multicall: '0x2dc0e2aa608532da689e89e237df582b783e552c',
        relayerV3: '0x195CcCBE464EF9073d1f7A1ba1C9Bf0f56dfFFff',
        relayerV4: '0x1a58897Ab366082028ced3740900ecBD765Af738',
        relayerV5: '0x03F1ab8b19bcE21EB06C364aEc9e40322572a1e9',
        balancerHelpers: '0x8E9aa87E45e92bad84D5F8DD1bff34Fb92637dE9',
        weightedPoolFactory: '0x230a59f4d9adc147480f03b0d3fffecd56c3289a',
        composableStablePoolFactory:
          '0x85a80afee867adf27b50bdb7b76da70f1e853062',
        erc4626LinearPoolFactory: '0xa3b9515a9c557455bc53f7a535a85219b59e8b2e',
        aaveLinearPoolFactory: '0xf23b4db826dba14c0e857029dff076b1c0264843',
        yearnLinearPoolFactory: '0xd8b6b96c88ad626eb6209c4876e3b14f45f8803a',
      },
      tokens: {
        wrappedNativeAsset: '0x4200000000000000000000000000000000000006',
        lbpRaisingTokens: [
          '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1', // DAI
          '0x7f5c764cbc14f9669b88837ca1490cca17c31607', // USDC
          '0x4200000000000000000000000000000000000006', // WETH
        ],
      },
    },
    urls: {
      subgraph:
        'https://api.thegraph.com/subgraphs/name/beethovenxfi/beethovenx-optimism',
      gaugesSubgraph: '',
    },
    pools: {},
    sorConnectingTokens: [
      {
        symbol: 'weth',
        address: '0x4200000000000000000000000000000000000006',
      },
    ],
  },
  [Network.GNOSIS]: {
    chainId: Network.GNOSIS, //100
    // Gnosis deployment addresses: https://docs.balancer.fi/reference/contracts/deployment-addresses/gnosis.html
    addresses: {
      contracts: {
        vault: '0xBA12222222228d8Ba445958a75a0704d566BF2C8',
        multicall: '0xbb6fab6b627947dae0a75808250d8b2652952cb5',
        relayerV4: '0xeF606F58A4FD0fCcb066c6203d0994694d3eB2D3',
        relayerV5: '0x3536fD480CA495Ac91E698A703248A8915c137a3',
        balancerHelpers: '0x8E9aa87E45e92bad84D5F8DD1bff34Fb92637dE9',
        weightedPoolFactory: '0x6cad2ea22bfa7f4c14aae92e47f510cd5c509bc7',
        composableStablePoolFactory:
          '0x76578ecf9a141296ec657847fb45b0585bcda3a6',
        aaveLinearPoolFactory: '0x9da18982a33fd0c7051b19f0d7c76f2d5e7e017c',
      },
      tokens: {
        wrappedNativeAsset: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
      },
    },
    urls: {
      subgraph:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-gnosis-chain-v2',
      gaugesSubgraph:
        'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer-gauges-gnosis-chain',
    },
    pools: {},
    sorConnectingTokens: [
      {
        symbol: 'weth',
        address: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
      },
    ],
  },
  [Network.FANTOM]: {
    chainId: Network.FANTOM, //250
    //Fantom deployment addresses: https://docs.beets.fi/technicals/deployments
    addresses: {
      contracts: {
        vault: '0x20dd72Ed959b6147912C2e529F0a0C651c33c9ce',
        multicall: '0x66335d7ad8011f6aa3f48aadcb523b62b38ed961',
        gaugeClaimHelper: '0x0000000000000000000000000000000000000000', // no guages on fantom
        relayerV3: '0xC852F984CA3310AFc596adeB17EfcB0542646920',
        relayerV4: '0x419f7925b8c9e409b6ee8792242556fa210a7a09',
        balancerHelpers: '0xfE18C7C70b0a2c6541bEde0367124278BC345Dc8',
        weightedPoolFactory: '0x60467cb225092cE0c989361934311175f437Cf53',
        composableStablePoolFactory:
          '0x44814E3A603bb7F1198617995c5696C232F6e8Ed',
        yearnLinearPoolFactory: '0x1f73ae6ed391a2b1e84ff988a1bb5394b78a4a71',
      },
      tokens: {
        bal: '0xF24Bcf4d1e507740041C9cFd2DddB29585aDCe1e', //beets
        wrappedNativeAsset: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
        lbpRaisingTokens: [
          '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83', // WFTM
          '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75', // USDC
          '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E', // DAI
        ],
      },
    },
    urls: {
      subgraph:
        'https://api.thegraph.com/subgraphs/name/beethovenxfi/beethovenx-v2-fantom',
      gaugesSubgraph: '', // no guages on fantom
      blockNumberSubgraph:
        'https://api.thegraph.com/subgraphs/name/beethovenxfi/fantom-blocks',
    },
    pools: {},
    poolsToIgnore: [],
    sorConnectingTokens: [
      {
        symbol: 'wftm',
        address: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      },
    ],
  },
  [Network.AURORATEST]: {
    chainId: Network.AURORATEST, //1313161555
    addresses: {
      contracts: {
        vault: '0x5f084dcC622239e820626a05773775A44Af25E7c',
        multicall: '0x3a4773e600086A753862621A26a2E3274610da43',
        balancerHelpers: '0x129F2a54851a8ddC9B556ee9877Bb93eE55C17B0',
        balancerMinterAddress: '0x106F91F64aEf43156E0536cA41e0b56D50d570BD',
        relayerV5: '0x928DfA13E7d3cAaD340eb50E2F78f67cf0AB930F',
        gaugeController: '0xFbC105216A2e457849873B21b7a880DB54211F75',
        feeDistributor: '0xAb91a52809c5A91D21b2Be2B27fb4e9f1049e59F',
        protocolFeePercentagesProvider:
          '0x7CDe1bF0059f6C0ECA753bD5D94552e23Fd24Fe5',
        veBal: '0x86989e569bc9ccF08bd3Cf9840C47c07C55be4cA',
        veBalProxy: '0x78fb7c9E0626fA2312f80b918c9e9c264918399D',
        weightedPoolFactory: '0x517803476a7434ea83316384d7Af408DE90DB083',
        //composableStablePoolFactory:
        //  '0x85a80afee867adf27b50bdb7b76da70f1e853062',
      },
      tokens: {
        wrappedNativeAsset: '0x8886E7A8883e9A40b30Bd4E16e0e25C2C3f29Cd8',
        bal: '0xbADdAab20345a0E6607469949f069e8482f9AFC0',
        veBal: '0x86989e569bc9ccF08bd3Cf9840C47c07C55be4cA',
      },
    },
    urls: {
      subgraph:
        'https://graph.polarisfinance.io/subgraphs/name/polarisfinance/polaris-dex-testnet',
      gaugesSubgraph:
        'https://graph.polarisfinance.io/subgraphs/name/polarisfinance/gauges-testnet',
      blockNumberSubgraph:
        'https://graph.polarisfinance.io/subgraphs/name/polarisfinance/auroratestnet-blocks',
    },
    pools: {},
    poolsToIgnore: [],
    sorConnectingTokens: [],
  },
  [Network.AURORA]: {
    chainId: Network.AURORA, //1313161554
    addresses: {
      contracts: {
        vault: '0x6985436a0E5247A3E1dc29cdA9e1D89C5b59e26b',
        multicall: '0x04364F8908BDCB4cc7EA881d0DE869398BA849C9',
        balancerHelpers: '0x530D85776e560303D18094a366f127ff2F113526',
        balancerMinterAddress: '0xfc5803Ba89e46D37Bbac542B7449b4c1c0628587',
        relayerV5: '0x28965a81eF4Fc8d236047122C458918532A28CA8',
        gaugeController: '0x31eCA9385Fa44e0f8D83322F79937943216Df7c5',
        feeDistributor: '0xd30b72Ff398DE0fF24934fFdb49B28D738076302',
        protocolFeePercentagesProvider:
          '0xa07Fca3c96B55daF89E5e4C0887040B0C8a85219',
        veBal: '0xBe96730583b46140210efA92AC6039EF11247657',
        veBalProxy: '0xDA4765fE5AfAEac3A0582eDAF78E76b6C4cF9a7C',
        weightedPoolFactory: '0x98b5584A0c40F2c50CBa0Adb40E51A8caD79b9AC',
        composableStablePoolFactory:
          '0xA408376E84DedD19616e8Cd79753eb4B594acd85',
      },
      tokens: {
        wrappedNativeAsset: '0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
        bal: '0xeAf7665969f1DaA3726CEADa7c40Ab27B3245993',
        veBal: '0xBe96730583b46140210efA92AC6039EF11247657',
        bbaUsd: '0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
      },
    },
    urls: {
      subgraph:
        'https://api.thegraph.com/subgraphs/name/polarisfinance/polaris-dex-v2',
      gaugesSubgraph:
        'https://api.thegraph.com/subgraphs/name/polarisfinance/polaris-gauges',
      blockNumberSubgraph:
        'https://api.thegraph.com/subgraphs/name/polarisfinance/aurora-blocks',
    },
    pools: {},
    poolsToIgnore: [],
    sorConnectingTokens: [
      {
        symbol: 'usdc',
        address: '0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
      },
      {
        symbol: 'pNEAR',
        address: '0x990e50E781004EA75e2bA3A67eB69c0B1cD6e3A6',
      },
    ],
  },
};

export const networkAddresses = (
  chainId: number
): BalancerNetworkConfig['addresses'] =>
  BALANCER_NETWORK_CONFIG[chainId as Network].addresses;
