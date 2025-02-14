// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MessageRelayer {
    event MessageSent(
        address indexed sender,
        uint256 indexed destChainId,
        bytes message
    );

    function sendMessage(uint256 destChainId, bytes calldata message) external payable {
        emit MessageSent(msg.sender, destChainId, message);
    }
}
