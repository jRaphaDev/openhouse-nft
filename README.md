# Smart Contract Sample Generate NFT
This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

# Etherscan verification
To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Goerli.

## Deploy Smart Contract
```shell
hardhat run scripts/deploy.js
```

## Execute Contract and Create a NFT
```shell
hardhat run scripts/mint-nft.js
```

