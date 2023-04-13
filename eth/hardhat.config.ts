import {join} from 'path';
import {config as dotenvConfig} from 'dotenv';
dotenvConfig({path: join(__dirname, '.env')});

import {HardhatUserConfig} from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

const {INFURA_API_KEY, SEPOLIA_PRIVATE_KEY} = process.env;

const config: HardhatUserConfig = {
  solidity: '0.8.18',
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY as string],
    },
  },
};

export default config;
