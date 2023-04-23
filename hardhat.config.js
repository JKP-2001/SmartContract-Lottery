require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");
require("dotenv").config();

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
// const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	defaultNetwork: "hardhat",
	networks: {
		hardhat: {
			chainId: 31337,
			blockConfirmations: 1,
		},
		sepolia:{
			url: SEPOLIA_RPC_URL,
			accounts: [PRIVATE_KEY],
			chainId: 11155111,
			blockConfirmations:6,
		},
	},
	etherscan: {
		apiKey: {
			SEPOLIA: ETHERSCAN_API_KEY,
		},
	},
	gasReporter: {
		enabled: false,
		outputFile: "gas-report.txt",
		NodeColors: true,
		currency: "USD",
		// coinmarketcap: COINMARKETCAP_API_KEY,
		// token: "ETH",
	},
	solidity: {
		compilers: [
			{
				version: "0.8.18",
			},
			{
				version: "0.4.24",
			},
		],
	},
	namedAccounts: {
		deployer: {
			default: {
				default: 0,
			},
			player: {
				default: 1,
			},
		},
	},
	mocha: {
		timeout: 500000,
	},
};
