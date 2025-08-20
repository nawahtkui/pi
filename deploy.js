const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  const name = "Nawah Anime NFT";
  const symbol = "NAWAH";
  const maxSupply = 5000;
  const priceWei = ethers.utils.parseEther("0.05");
  const maxPerWallet = 5;
  const royaltyReceiver = deployer.address;
  const royaltyFraction = 500;

  const NFT = await ethers.getContractFactory("NawahAnimeNFT");
  const nft = await NFT.deploy(name, symbol, maxSupply, priceWei, maxPerWallet, royaltyReceiver, royaltyFraction);
  await nft.deployed();

  console.log("NawahAnimeNFT deployed to:", nft.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
