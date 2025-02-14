// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract ValidatorManager is Ownable {
    struct Validator {
        address addr;
        uint256 stake;
        uint256 activationEpoch;
        bool active;
    }

    Validator[] public validators;
    uint256 public constant MIN_STAKE = 1 ether;
    uint256 public constant STAKE_LOCK_DURATION = 1 weeks;

    function joinValidatorPool() external payable {
        require(msg.value >= MIN_STAKE, "Insufficient stake");
        validators.push(Validator({
            addr: msg.sender,
            stake: msg.value,
            activationEpoch: block.timestamp + STAKE_LOCK_DURATION,
            active: false
        }));
    }

    function activateValidator(uint256 index) external onlyOwner {
        require(block.timestamp >= validators[index].activationEpoch, "Lock period not ended");
        validators[index].active = true;
    }
}
