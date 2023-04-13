import {join} from 'path';
import {writeFile} from 'fs/promises';
import {ethers} from 'hardhat';

(async () => {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying the lottery with the account: ', deployer.address);

  const deployerBalance = await deployer.getBalance();
  console.log('Account balance: ', deployerBalance.toString());

  const lotteryFactory = await ethers.getContractFactory('Lottery');
  const lottery = await lotteryFactory.deploy();
  console.log('Lottery address: ', lottery.address);

  await writeFile(
    join(__dirname, '../lottery-address.txt'),
    lottery.address,
    'utf-8'
  );
  console.log('Done.');
})();
