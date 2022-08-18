import type {
  BalancerNetworkConfig,
  BalancerDataRepositories,
  Pool,
  PoolModel,
} from '@/types';
import { PoolTypeConcerns } from './pool-type-concerns';
import { PoolApr } from './apr/apr';
import { Liquidity } from '../liquidity/liquidity.module';

/**
 * Controller / use-case layer for interacting with pools data.
 */
export class Pools {
  constructor(
    private networkConfig: BalancerNetworkConfig,
    private repositories: BalancerDataRepositories
  ) {}

  static wrap(
    data: Pool,
    networkConfig: BalancerNetworkConfig,
    repositories: BalancerDataRepositories
  ): PoolModel {
    const methods = PoolTypeConcerns.from(data.poolType);
    return {
      ...data,
      liquidity: async function () {
        const liquidityService = new Liquidity(
          repositories.pools,
          repositories.tokenPrices
        );

        return liquidityService.getLiquidity(this);
      },
      // Different pool types have different input parameters. weighted / stable / linear..
      buildJoin: async (joiner, tokensIn, amountsIn, slippage) =>
        methods.join.buildJoin({
          joiner,
          pool: data,
          tokensIn,
          amountsIn,
          slippage,
          wrappedNativeAsset: networkConfig.addresses.tokens.wrappedNativeAsset,
        }),
      fetchApr: async function () {
        const aprService = new PoolApr(
          this,
          repositories.tokenPrices,
          repositories.tokenMeta,
          repositories.pools,
          repositories.yesterdaysPools,
          repositories.liquidityGauges,
          repositories.feeDistributor,
          repositories.feeCollector,
          repositories.tokenYields
        );

        const apr = await aprService.apr();
        return (this.apr = apr);
      },
      // TODO: spotPrice fails, because it needs a subgraphType,
      // either we refetch or it needs a type transformation from SDK internal to SOR (subgraph)
      // spotPrice: async (tokenIn: string, tokenOut: string) =>
      //   methods.spotPriceCalculator.calcPoolSpotPrice(tokenIn, tokenOut, data),
    };
  }

  async find(id: string): Promise<PoolModel | undefined> {
    const data = await this.repositories.pools.find(id);
    if (!data) return;

    return Pools.wrap(data, this.networkConfig, this.repositories);
  }

  async findBy(param: string, value: string): Promise<PoolModel | undefined> {
    if (param == 'id') {
      return this.find(value);
    } else if (param == 'address') {
      const data = await this.repositories.pools.findBy('address', value);
      if (!data) return;

      return Pools.wrap(data, this.networkConfig, this.repositories);
    } else {
      throw `search by ${param} not implemented`;
    }
  }

  async all(): Promise<PoolModel[]> {
    const list = await this.repositories.pools.all();
    if (!list) return [];

    return list.map((data) =>
      Pools.wrap(data, this.networkConfig, this.repositories)
    );
  }

  async where(filter: (pool: Pool) => boolean): Promise<PoolModel[]> {
    const list = await this.repositories.pools.where(filter);
    if (!list) return [];

    return list.map((data) =>
      Pools.wrap(data, this.networkConfig, this.repositories)
    );
  }
}
