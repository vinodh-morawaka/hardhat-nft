const { ethers, network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");

module.exports = async function ({ getNamedAccounts }) {
    const { deployer } = await getNamedAccounts();

    // Basic NFT
    const basicNft = await ethers.getContract("BasicNft", deployer);
    const basicMintTx = await basicNft.mintNft();
    basicMintTx.wait(1);
    console.log(`Basic NFT index 0 has tokenURI: ${await basicNft.tokenURI(0)}`);

    // Random IPFS NFT
    const randomIpfsNft = await ethers.getContract("RandomIpfsNft", deployer);
    const mintFee = await randomIpfsNft.getMintFee();
    const randomIpfsNftMintTx = await randomIpfsNft.requestNft({ value: mintFee.toString() });
    const randomIpfsNftMintTxReciept = await randomIpfsNftMintTx.wait(1);

    await new Promise(async (resolve, reject) => {
        setTimeout(() => reject("Timeout: 'NFTMinted' event did not fire"), 300000); // 5 minute timeout time
        randomIpfsNft.once("NftMinted", async () => {
            console.log(`Random IPFS NFT index 0 tokenURI: ${await randomIpfsNft.tokenURI(0)}`);
            resolve();
        });

        if (developmentChains.includes(network.name)) {
            const requestId = randomIpfsNftMintTxReciept.logs[1].args.requestId.toString();
            const vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock", deployer);
            await vrfCoordinatorV2Mock.fulfillRandomWords(requestId, randomIpfsNft.getAddress());
        }
    });

    //Dynamic SVG NFT
    const highValue = ethers.parseEther("4000"); // 4000 dollars
    const dynamicSvgNft = await ethers.getContract("DynamicSvgNft", deployer);
    const dynamicSvgNftMintTx = await dynamicSvgNft.mintNft(highValue);
    await dynamicSvgNftMintTx.wait(1);
    console.log(`Dynamic SVG NFT index 0 tokenURI: ${await dynamicSvgNft.tokenURI(0)}`);
};

module.exports.tags = ["all", "mint"];
