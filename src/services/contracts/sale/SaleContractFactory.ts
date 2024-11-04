/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.96.1
*/

import type {
  Account,
  DeployContractOptions,
  DeployContractResult,
  Provider,
} from "fuels";
import { Contract, ContractFactory, decompressBytecode } from "fuels";

import { SaleContract, SaleContractInterface } from "./SaleContract";

const bytecode = decompressBytecode(
  "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",
);

export class SaleContractFactory extends ContractFactory {
  static readonly bytecode = bytecode;

  constructor(accountOrProvider: Account | Provider) {
    super(
      bytecode,
      SaleContract.abi as unknown as SaleContractInterface,
      accountOrProvider,
    );
  }

  override deploy<TContract extends Contract = Contract>(
    deployOptions?: DeployContractOptions,
  ): Promise<DeployContractResult<TContract>> {
    return super.deploy({
      storageSlots: SaleContract.storageSlots,
      ...deployOptions,
    });
  }

  static async deploy(
    wallet: Account,
    options: DeployContractOptions = {},
  ): Promise<DeployContractResult<SaleContract>> {
    const factory = new SaleContractFactory(wallet);
    return factory.deploy(options);
  }
}