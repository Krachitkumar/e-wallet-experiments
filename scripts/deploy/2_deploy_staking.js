const hre = require("hardhat");

async function main() {
    // Deploy StakingContract
    const StakingContract = await hre.ethers.getContractFactory("StakingContract");
    const stakingContract = await StakingContract.deploy();
    await stakingContract.deployed();
    console.log("StakingContract deployed to:", stakingContract.address);

    // Deploy ValidatorManager
    const ValidatorManager = await hre.ethers.getContractFactory("ValidatorManager");
    const validatorManager = await ValidatorManager.deploy();
    await validatorManager.deployed();
    console.log("ValidatorManager deployed to:", validatorManager.address);

    // Save the addresses to a file or deployment artifacts
    const fs = require("fs");
    const deploymentsDir = `${__dirname}/../../deployments/polygon_mainnet/`;
    if (!fs.existsSync(deploymentsDir)){
        fs.mkdirSync(deploymentsDir, { recursive: true });
    }
    fs.writeFileSync(`${deploymentsDir}/staking_contracts.json`, JSON.stringify({
        StakingContract: stakingContract.address,
        ValidatorManager: validatorManager.address
    }, null, 2));
}

// Execute the deployment script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });