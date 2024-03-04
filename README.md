# Hardhat NFT

This is a sample NFT project that has 3 different kinds of NFTs,
1. A Basic NFT
2. IPFS Hosted NFT - Uses randomness to generate a unique NFT
3. SVG NFT (Hosted 100% on-chain) - Uses price feeds to be dynamic

## Built With
* Hardhat
* Chainlink VRF and Price Feeds
* Openzeppelin

## Getting Started
### Prerequisites
* Install Yarn

    ```shell
    corepack enable
    ```

### Installation
1. Get you Sepolia RPC URL at https://www.alchemy.com/
2. Get your API keys on [Etherscan](https://etherscan.io/), [Coinmarketcap](https://coinmarketcap.com/api/) and [Pinata](https://www.pinata.cloud/)
3. Clone the repo

    ```shell
    git clone https://github.com/vinodh-morawaka/hardhat-nft.git
    ```
4. Install Yarn packages

    ```shell
    yarn install
    ```
5. Enter your API keys and your wallet's private key in `.env` file

    ```yaml
    SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR-API-KEY
    PRIVATE_KEY=YOUR-WALLET'S PRIVATE KEY
    ETHERSCAN_API_KEY=YOUR-ETHERSCAN-API-KEY
    COINMARKETCAP_API_KEY=YOUR-COINMARKETCAP-API-KEY
    PINATA_API_KEY=YOUR-PINATA-API-KEY
    PINATA_API_SECRET=YOUR-PINATA-API-SECRET
    ```

## Usage
You can run tests by running:

```shell
yarn test
```

### Method 1 - By using the scripts
1. Run the scripts in the deploy folder by running the following:
    If you want to run on a local network,

    ```shell
    yarn hardhat deploy
    ```
    If you want to run on a testnet (Sepolia),

    ```shell
    yarn hardhat deploy --network sepolia --tags main
    yarn hardhat deploy --tags mint --network sepolia
    ```

### Method 2 - By using the Etherscan Block Explorer
1. Visit the Sepolia testnet etherscan block explorer
2. Copy and paste the following contract addresses,
    - 0x2D53E782F86772f936DE56e0198767F84CcC7fAd (BasicNft)
    - 0x60D830828935ceD6aaddCFEe7b82Bb5a3C58270D (RandomIpfsNft)
    - 0xdFCFE26a6aCa7CBB8b12f108f600C78226Dbc029 (DynamicSvgNft)
3. Go to the Write Contract Section under Contract
4. Connect your wallet
5. Interact with the contract/s