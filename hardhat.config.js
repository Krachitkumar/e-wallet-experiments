require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    mumbai: {
      url: process.env.POLYGON_MUMBAI_RPC,
      accounts: [process.env.DEPLOYER_KEY],
      gasPrice: 30_000_000_000
    },
    polygon: {
      url: process.env.POLYGON_MAINNET_RPC,
      accounts: [process.env.DEPLOYER_KEY],
      gasPrice: 50_000_000_000
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  }
};
