// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract AssetBridge {
    mapping(uint256 => bool) public processedNonces;
    
    event BridgeInitiated(
        address indexed sender,
        uint256 amount,
        uint256 destChainId,
        uint256 nonce
    );

    function bridgeAssets(
        address tokenAddress,
        uint256 amount,
        uint256 destChainId,
        uint256 nonce
    ) external {
        require(!processedNonces[nonce], "Transfer already processed");
        
        IERC20(tokenAddress).transferFrom(msg.sender, address(this), amount);
        processedNonces[nonce] = true;

        emit BridgeInitiated(msg.sender, amount, destChainId, nonce);
    }
}
