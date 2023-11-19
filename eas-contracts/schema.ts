import { EAS, SchemaEncoder, SchemaRegistry } from "@ethereum-attestation-service/eas-sdk";
import { ethers } from 'ethers';
import dotenv from 'dotenv';
import { SignerOrProvider } from "@ethereum-attestation-service/eas-sdk/dist/transaction";

dotenv.config();

//initialize the library

const main = async () => {

  const EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"; // Sepolia v0.26 provided by EAS

  // Initialize the sdk with the address of the EAS Schema contract address
  const eas = new EAS(EASContractAddress);

  //provider & signer
  const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_URL);
  const privateKey = process.env.OWNER_3_PRIVATE_KEY as string;
  const signer = new ethers.Wallet(privateKey, provider);

  eas.connect(provider as any as SignerOrProvider);

  //Registering a Schema
  const schemaRegistryContractAddress = "0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0"; //Sepolia, provided by EAS
  const schemaRegistry = new SchemaRegistry(schemaRegistryContractAddress);

  schemaRegistry.connect(signer as any as SignerOrProvider);

  const schema = "uint256 carbonCredits, uint64 issuanceDate, bytes32[] evidenceHash";
  const revocable = true;

  const transaction = await schemaRegistry.register({
    schema,
    revocable,
  });

  await transaction.wait();

  //Getting Schema Information

const schemaUID = "0xYourSchemaUID";

const schemaRecord = await schemaRegistry.getSchema({ uid: schemaUID });

console.log(schemaRecord);
}