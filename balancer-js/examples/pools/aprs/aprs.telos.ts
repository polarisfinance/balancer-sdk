/**
 * Display APRs for pool ids hardcoded under `const ids`
 *
 * Run command
 * yarn example ./examples/pools/aprs/aprs.arbitrum.ts
 */
import { BalancerSDK, Pool } from '@balancer-labs/sdk';

const sdk = new BalancerSDK({
  network: 40,
  rpcUrl: 'https://mainnet.telos.net/evm',
});

const { pools } = sdk;

const main = async () => {
  const id =
    '0x2621c0c2559a0d04a208f85e9720402ca5fdc779000200000000000000000008';
  const pool = (await pools.find(id)) as Pool;
  const apr = await pools.apr(pool);
  console.log(pool.id, apr);

  // const list = (
  //   await pools.where(
  //     (pool) =>
  //       pool.poolType != 'Element' &&
  //       pool.poolType != 'AaveLinear' &&
  //       pool.poolType != 'LiquidityBootstrapping'
  //   )
  // )
  //   .sort((a, b) => parseFloat(b.totalLiquidity) - parseFloat(a.totalLiquidity))
  //   .slice(0, 30)

  // list.forEach(async (pool) => {
  //   try {
  //     const apr = await pools.apr(pool)
  //     console.log(pool.id, apr)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // });
};

main();
