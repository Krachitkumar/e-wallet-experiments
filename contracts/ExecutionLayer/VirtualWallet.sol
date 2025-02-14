// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract VirtualWallet is ReentrancyGuard {
    mapping(address => mapping(address => uint256)) public balances;

    function deposit(address tokenAddress, uint256 amount) external nonReentrant {
        IERC20(tokenAddress).transferFrom(msg.sender, address(this), amount);
        balances[msg.sender][tokenAddress] += amount;
    }

    function withdraw(address tokenAddress, uint256 amount) external nonReentrant {
        require(balances[msg.sender][tokenAddress] >= amount, "Insufficient balance");
        balances[msg.sender][tokenAddress] -= amount;
        IERC20(tokenAddress).transfer(msg.sender, amount);
    }
}
