import { BN } from "bn.js";
import { StreamflowSolana, Types, getNumberFromBN } from "@streamflow/stream";

async function main() {
    const solanaClient = new StreamflowSolana.SolanaStreamClient("https://api.mainnet-beta.solana.com");

    const stream = await solanaClient.getOne({
        id: "#ADD_YOUR_STREAM_ID_HERE",
    });
    const withdrawn = stream.withdrawnAmount; // bn amount withdrawn already
    console.log(getNumberFromBN(withdrawn, 9));
    const remaining = stream.remaining(9); // amount of remaining funds
    console.log(remaining)
}

main().catch(console.error);
