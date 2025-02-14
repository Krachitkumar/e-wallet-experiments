const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  
  // Deploy MaticToken
  const MaticToken = await ethers.getContractFactory("MaticToken");
  const token = await MaticToken.deploy(ethers.parseEther("1000000"));
  
  // Deploy VirtualWallet
  const VirtualWallet = await ethers.getContractFactory("VirtualWallet");
  const wallet = await VirtualWallet.deploy();

  console.log(`MaticToken deployed to: ${token.target}`);
  console.log(`VirtualWallet deployed to: ${wallet.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
