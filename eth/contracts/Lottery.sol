// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Lottery {
  address public manager;
  uint public minimumAmount;
  address[] public players;

  modifier restricted() {
    require(msg.sender == manager, "Manager only.");
    _;
  }

  constructor() {
    manager = msg.sender;
    minimumAmount = 0.1 ether;
  }

  function generateRandom() private view returns(uint) {
    return uint(keccak256(abi.encodePacked(
      block.prevrandao,
      block.timestamp,
      players.length
    )));
  }

  function enter() external payable {
    require(msg.value >= minimumAmount, "Less than minimum amount.");

    players.push(msg.sender);
  }

  function getPlayers() external view returns(address[] memory) {
    return players;
  }

  function pickWinner() external restricted {
    require(players.length != 0, "No players yet.");

    uint index = generateRandom() % players.length;
    address payable winner = payable(players[index]);

    (bool success, ) = winner.call{ value: address(this).balance }("");
    require(success, "Transaction failed.");

    delete players;
  }
}