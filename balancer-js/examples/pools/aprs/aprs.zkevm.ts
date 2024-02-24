/**
 * Display APRs
 *
 * Run command:
 * yarn example ./examples/pools/aprs/aprs.zkevm.ts
 */
import { BalancerSDK } from '@balancer-labs/sdk';

const sdk = new BalancerSDK({
  network: 1101,
  rpcUrl: 'https://zkevm-rpc.com',
});

const { pools } = sdk;

const main = async () => {
  const pool = await pools.find(
    '0x1d0a8a31cdb04efac3153237526fb15cc65a252000000000000000000000000f'
  );

  if (pool) {
    const apr = await pools.apr(pool);
    console.log(pool.id, apr);
  }
};

main();
