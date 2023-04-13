import type {SignerWithAddress} from '@nomiclabs/hardhat-ethers/signers';
import {expect} from 'chai';
import {ethers} from 'hardhat';

import {Lottery} from '../typechain-types';

describe('Lottery', () => {
  let accounts: SignerWithAddress[];
  let lottery: Lottery;

  const enterPlayers = async () => {
    const proOne = lottery
      .connect(accounts[1])
      .enter({value: ethers.utils.parseEther('1')});
    const proTwo = lottery
      .connect(accounts[1])
      .enter({value: ethers.utils.parseEther('2')});

    await Promise.all([proOne, proTwo]);
  };

  beforeEach(async () => {
    accounts = await ethers.getSigners();

    const lotteryFactory = await ethers.getContractFactory('Lottery');
    lottery = await lotteryFactory.deploy();
  });

  it('deploys a contract.', async () => {
    expect(lottery).not.eq(undefined);
  });

  it('does not let players with less than 0.1 ether enter.', async () => {
    try {
      await lottery
        .connect(accounts[1])
        .enter({value: ethers.utils.parseEther('0.0001')});
    } catch (err) {
      return;
    }

    throw new Error('Should not have reached this line.');
  });

  it('successfuly enters a player with more than 0.1 ether.', async () => {
    await lottery
      .connect(accounts[1])
      .enter({value: ethers.utils.parseEther('1')});
  });

  it('adds to the contract balance after players enter.', async () => {
    await enterPlayers();

    const balance = await lottery.provider.getBalance(lottery.address);
    expect(balance).eq(ethers.utils.parseEther('3'));
  });

  it('adds to players list anfter players enter.', async () => {
    await enterPlayers();

    const players = await lottery.getPlayers();
    expect(players.length).eq(2);
  });

  it('does not let anyone except the manager pick a winner.', async () => {
    try {
      await lottery.connect(accounts[1]).pickWinner();
    } catch (err) {
      return;
    }

    throw new Error('Should not have reached this line.');
  });

  it('does not the manger pick a winner if there is no players yet.', async () => {
    try {
      await lottery.pickWinner();
    } catch (err) {
      return;
    }

    throw new Error('Should not have reached this line.');
  });

  it('successfuly picks a winner.', async () => {
    await enterPlayers();

    const balanceBefore = await lottery.provider.getBalance(lottery.address);
    expect(balanceBefore).eq(ethers.utils.parseEther('3'));

    await lottery.pickWinner();

    const balanceAfter = await lottery.provider.getBalance(lottery.address);
    expect(balanceAfter).eq(ethers.utils.parseEther('0'));
  });
});
