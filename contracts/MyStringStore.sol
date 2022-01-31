pragma solidity ^0.8.0;

contract MyStringStore {
    string public myString = "Hello World";

    function set(string memory newValue) public {
        myString = newValue;
    }
}
