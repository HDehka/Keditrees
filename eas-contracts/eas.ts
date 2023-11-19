import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
import { SignerOrProvider } from "@ethereum-attestation-service/eas-sdk/dist/transaction";
import { ethers } from 'ethers';

const main = async () => {

  const EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"; // Sepolia v0.26 provided by EAS

  const eas = new EAS(EASContractAddress);
  const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_URL);
  const privateKey = process.env.OWNER_3_PRIVATE_KEY as string;
  const signer = new ethers.Wallet(privateKey, provider);

  eas.connect(signer as any as SignerOrProvider);

  // Initialize SchemaEncoder with the schema string
  const schemaEncoder = new SchemaEncoder("uint256 carbonCredits, uint64 issuanceDate, bytes32[] evidenceHash");
  const encodedData = schemaEncoder.encodeData([
    { name: "carbonCredits", value: 1, type: "uint256" },
    { name: "issuanceDate", value: 1, type: "uint64" },
    { name: "evidenceHash", value: 1, type: "bytes32[]" },
  ]);

  const schemaUID = "TO BE PASTED";

  const tx = await eas.attest({
    schema: schemaUID,
    data: {
      recipient: "0x0475Bd09c8dF8C759de6dD8ec5A7285818a680Fd", //sepolia wallet 
      expirationTime: 0,
      revocable: true,
      data: encodedData,
    },
  });

  const newAttestationUID = await tx.wait();

  console.log("New attestation UID:", newAttestationUID);
}