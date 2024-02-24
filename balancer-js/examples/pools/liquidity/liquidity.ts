/**
 * How to get the liquidity of a pool
 *
 * Run this example:
 * yarn example ./examples/pools/liquidity/liquidity.ts
 */
import { BalancerSDK } from '@balancer-labs/sdk';

const sdk = new BalancerSDK({
  network: 1,
  rpcUrl: 'https://rpc.ankr.com/eth',
});

const { pools } = sdk;

(() => {
  [
    '0xa13a9247ea42d743238089903570127dda72fe4400000000000000000000035d',
    '0x2f4eb100552ef93840d5adc30560e5513dfffacb000000000000000000000334',
    '0xc065798f227b49c150bcdc6cdc43149a12c4d75700020000000000000000010b',
  ].forEach(async (poolId) => {
    const pool = await pools.find(poolId);
    if (pool) {
      const liquidity = await pools.liquidity(pool);
      const bptPrice = await pools.bptPrice(pool);
      console.table([
        {
          pool: pool.name,
          totalShares: pool.totalShares,
          liquidity,
          bptPrice,
        },
      ]);
    }
  });
})();
