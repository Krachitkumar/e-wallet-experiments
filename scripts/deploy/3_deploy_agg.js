const hre = require("hardhat");

async function main() {
    const MessageRelayer = await hre.ethers.getContractFactory("MessageRelayer");
    const messageRelayer = await MessageRelayer.deploy();
    await messageRelayer.deployed();
    console.log("MessageRelayer deployed to:", messageRelayer.address);

    const AssetBridge = await hre.ethers.getContractFactory("AssetBridge");
    const assetBridge = await AssetBridge.deploy();
    await assetBridge.deployed();
    console.log("AssetBridge deployed to:", assetBridge.address);
}

// Execute the deployment script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });