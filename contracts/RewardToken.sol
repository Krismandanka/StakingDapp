// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RewardToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("RewardToken", "RWT") {
        _mint(msg.sender, initialSupply * 10 ** 18);
    }
}

// 0x895775ea739e66d72ea877eda7666b6b77ed6de2
// 0xe56a4ae71b513b865b96a37a66732fbea0163b16
