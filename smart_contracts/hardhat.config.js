//https://eth-sepolia.g.alchemy.com/v2/x7w8_UWU14BVf-sli14InlDfBsN9SBAu

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: '0.8.27',
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/x7w8_UWU14BVf-sli14InlDfBsN9SBAu",
      accounts: ['50a93019a09c4e56d7a4f7a625058e4c3092b55e25754e16a2ec31519dce81a4']
    }
  }
}