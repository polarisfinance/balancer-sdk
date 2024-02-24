/**
 * Display APRs for pool ids hardcoded under `const ids`
 *
 * Run command
 * yarn example ./examples/pools/aprs/aprs.arbitrum.ts
 */
import { BalancerSDK, Pool } from '@balancer-labs/sdk';

const sdk = new BalancerSDK({
  network: 1313161554,
  rpcUrl: 'https://mainnet.aurora.dev',
});

const { pools } = sdk;

const main = async () => {
  const id =
    '0x23a8a6e5d468e7acf4cc00bd575dbecf13bc7f78000100000000000000000015';
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
