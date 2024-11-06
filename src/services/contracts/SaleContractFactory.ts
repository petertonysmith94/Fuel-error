/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.96.1
  Forc version: 0.66.4
  Fuel-Core version: 0.40.0
*/

import { Contract, ContractFactory, decompressBytecode } from "fuels";
import type { Provider, Account, DeployContractOptions, DeployContractResult } from "fuels";

import { SaleContract } from "./SaleContract";

const bytecode = decompressBytecode("H4sIAAAAAAAAA61WS2wTVxS94xpqQC2PxinuWJAhOGHCKi0Bpe1mRvZoYhIrj59IP8O4gqhB6iIyaVqpUuUFi1TtwiC1ZZklq2oc4sRZ1VJViWW6Y5lNK5CwGlVCCqISPffNOHYTQzeNFOXlvvu/5543+uYwzRHFSP0cmPGeNzTx/DnLSH8s6Rbtu1uy6KzfJE23iuQ3tYznVjNeNtBKY5RI2xkSdpLlg162Oqg/IjK2TtHUs42YfLYRn6PYgJ5d53sT96Z0qxZ8mTK7fJ/tTTtZlu7qpjo78TJi5XFPUawB2Ax4bkAqlpOxhB2HvXYC8hNdYu2PYg3hfgixHsDX+4i13o5VX2jFktn6QhcfB3SXfRw6Ct1Nb7x6VE5Wp0oSNoU9JM8NJ0oXcT7Xa0k3EJAL0zlNcnKNdYRZ6CXPIUqPJcvCSZZ9W5DMrk1Jd/kB4kJXxb2rzpwPzribat3pj8SOfLS/uSbORY5Xx1DPkLSNRGlC1dOQ2cAo5dhXBvmsBO0Yq0YrhuduxoQjGnJ8dQt2wszH1Vlmq8N+UwzC/nX8PSEnlxrKVyFuoWdftvzu7pH2Z5jT8kKr/i55/8F97MG8emzMM0c0b1E//N59id+/ovmdhF491Bvppvcw0jsOvTsv8fdrpHcEeDgJ3B7HPI8MOfHz8zmKAWtfnbGI5IXVTf2RtdP2m8h2BPNblO69bYwC+19zTagHOFRnC2ftDHZGZpfW/cfiQ/QmxT7133f15TfuixwPipiFYeYxQ3e1os5OBnOpbnTIg7Z8dX1b7hDPP5S7yw+Rl6lmPl4TqMmEDu9vH+a74D+mt5H71gty+SnKZbgjZngOc5npkMuOXGa75sLxcxwf+LlcG1W5XMqQZ1vASlBGntBjbK7NqDNjE3ewMdK5ZLjb57iHazPSrRW39T+qMS8Y5gdJ4GzXnPp0f72b/K1ofuhDfQuz7+uC0W/D+qsB8H9GOtFeOdiPbG2xvVdLnLvaK/TzPO54z1Ihn6wxn6TCOy0FnKU41puoBZj4DrUsoBbmOqUDfKTUvOyLZZknM+zjtYbfnJ3A/9zjVNjv2gb0ZkKblTF1DvmL9zqS1xNXLOaXeuJj4LGUi9Mg9kzPzaKmpTuo6QLL8Pci8r6EGTSUfzWre6Ida6VTzpiL5MGDtrwa6kDuXQ1GvcngXfDyeyIvrN58pjE/Rhowtxe5xdL5kbIoGNbgBJF55KalF2dJ5G9aV/KEt0JwP7f8Ztn3m8NF8Nkn4DDeraif90bbvVphzozk9UpbXq9Ar6On1URbb4nfCiXHblrSEQI1mYgz/W/erHbyJsdv8Sbbh9zs1kUHZwvsGuP2BTxNtyOe5ni8w+BZ1UOeKWzU3nDPI/kS91nJ0cfLbzjCGlBvxfJouKs7uYx+Cf0Hi+09qnMP1B7JT4Gzq/X7wN8p4O8d5l3mJNhlPLuihRwsmLNe4f9Reyzt8Lt96JhXqGBHKxrsjvWCO6JZHupS48/R29jfizcOHKpmDrt+ziNtYweamoEckN8IeZPVfn96mPc5IZ0KzyjkTxvxnEpM2bTf9MOwOzwfp9eYD3rQD/jfgznz3OHvpnpLEW8/ZLMt2ZVQxnqyJWtzSyUmwM3+NMV4L9W5qaU+J3r4PdGrPyTCbxw9u0i6u0HzkHGOPXnDQg9iHnoG3xrvlvoeeoLfp4LuwO5H6J7dIoKfgy0/t4gSLV8esO7lDfTKUGfGXXoi2RDYFd+GLBsof7fZpu3zYBefVssneNpovd/gQ2E2M+gtuJsxmV0G/+N7JLqH/72Rf+s//I92+N+27/Affkewf8SCTrRDwC2+AaMYo/9nDIUTnDt61M1/X4f/Yui/Qvo4el9AvyUw0OTvssBS58natjwte0kUTpNvMzZVTw3EY37jvWroTwTHLOpPjVbMvijmLsyEuM/QIL4jdGu2K0ZcYOf6Df+Lmetz059dvzE3fS382ibaV/4H6Kkc0YALAAA=");

export class SaleContractFactory extends ContractFactory {

  static readonly bytecode = bytecode;

  constructor(accountOrProvider: Account | Provider) {
    super(bytecode, SaleContract.abi, accountOrProvider);
  }

  override deploy<TContract extends Contract = Contract>(
    deployOptions?: DeployContractOptions
  ): Promise<DeployContractResult<TContract>> {
    return super.deploy({
      storageSlots: SaleContract.storageSlots,
      ...deployOptions,
    });
  }

  static async deploy (
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<DeployContractResult<SaleContract>> {
    const factory = new SaleContractFactory(wallet);
    return factory.deploy(options);
  }
}