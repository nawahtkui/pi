import { ethers } from "ethers";
import NawahNFTAbi from "./NawahAnimeNFT.json";

const NFT_ADDRESS = process.env.REACT_APP_NFT_ADDRESS;
export function getNFTContract(signerOrProvider) {
  return new ethers.Contract(NFT_ADDRESS, NawahNFTAbi, signerOrProvider);
}
