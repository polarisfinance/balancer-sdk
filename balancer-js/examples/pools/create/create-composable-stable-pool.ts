/**
 * ComposableStable - Create and do an initial join.
 *
 * Run command:
 * yarn example ./examples/pools/create/create-composable-stable-pool.ts
 */
import { BalancerSDK, Network, PoolType } from '@balancer-labs/sdk';
import { parseFixed } from '@ethersproject/bignumber';
import { reset, setTokenBalance, approveToken } from 'examples/helpers';
import { Wallet } from '@ethersproject/wallet';

async function createAndInitJoinComposableStable() {
  const balancer = new BalancerSDK({
    network: Network.TELOS,
    rpcUrl: 'https://mainnet.telos.net/evm', // Using local fork for simulation
  });

  // Setup join parameters
  const signer = new Wallet('', balancer.provider);
  const ownerAddress = await signer.getAddress();
  const usdc = '0x8D97Cea50351Fb4329d591682b148D43a0C3611b';
  const usdt = '0x975Ed13fa16857E83e7C493C7741D556eaaD4A3f';
  const poolTokens = [usdc, usdt];
  const amountsIn = [
    parseFixed('1', 6).toString(),
    parseFixed('1', 6).toString(),
  ];
  console.log(amountsIn);

  // Prepare local fork for simulation
  await reset(balancer.provider, 17700000);
  await setTokenBalance(
    balancer.provider,
    ownerAddress,
    poolTokens[0],
    amountsIn[0],
    9
  );
  await setTokenBalance(
    balancer.provider,
    ownerAddress,
    poolTokens[1],
    amountsIn[1],
    2
  );
  await approveToken(
    poolTokens[0],
    balancer.contracts.vault.address,
    amountsIn[0],
    signer
  );
  await approveToken(
    poolTokens[1],
    balancer.contracts.vault.address,
    amountsIn[1],
    signer
  );

  const composableStablePoolFactory = balancer.pools.poolFactory.of(
    PoolType.ComposableStable
  );

  const poolParameters = {
    name: 'Polaris DEX UsdStablePool',
    symbol: 'UsdStablePool',
    tokenAddresses: poolTokens,
    amplificationParameter: '2000',
    rateProviders: [
      '0x0000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000',
    ],
    tokenRateCacheDurations: ['10000', '10000'],
    swapFeeEvm: parseFixed('3', 15).toString(),
    exemptFromYieldProtocolFeeFlag: false,
    owner: '0xBA1BA1ba1BA1bA1bA1Ba1BA1ba1BA1bA1ba1ba1B',
  };

  // Build the create transaction
  const createInfo = composableStablePoolFactory.create(poolParameters);
  console.log(poolParameters);

  // Sends the create transaction
  const createTransactionReceipt = await (
    await signer.sendTransaction(createInfo)
  ).wait();

  // Check logs of creation receipt to get new pool ID and address
  const { poolAddress, poolId } =
    await composableStablePoolFactory.getPoolAddressAndIdWithReceipt(
      balancer.provider,
      createTransactionReceipt
    );

  // Build initial pool join transaction
  const joinInfo = composableStablePoolFactory.buildInitJoin({
    joiner: ownerAddress,
    poolId,
    poolAddress,
    tokensIn: poolTokens,
    amountsIn,
  });

  // Sends the initial join transaction
  await signer.sendTransaction({ to: joinInfo.to, data: joinInfo.data });

  // Check that pool balances are as expected after join
  const tokens = await balancer.contracts.vault.getPoolTokens(poolId);
  console.log('Pool Tokens Addresses (Includes BPT): ' + tokens.tokens);
  console.log('Pool Tokens balances (Includes BPT): ' + tokens.balances);
  console.log('Pool ID: ' + poolId);
}

createAndInitJoinComposableStable();
