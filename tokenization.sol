solidity
// contracts/Tokenization.sol
pragma solidity ^0.8.0;

contract Tokenization {
    string public name = "Asset Token";
    string public symbol = "ASTK";
    uint8 public decimals = 18;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    constructor(uint256 _initialSupply) {
        totalSupply = _initialSupply * 10 ** uint256(decimals);
        balanceOf[msg.sender] = totalSupply;
    }
}
