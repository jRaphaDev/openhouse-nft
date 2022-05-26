async function main() {
    const OpenHouseNFT = await ethers.getContractFactory("OpenHouseNFT")
  
    // Start deployment, returning a promise that resolves to a contract object
    const openhouseNFT = await OpenHouseNFT.deploy()
    await openhouseNFT.deployed()
    console.log("Contract deployed to address:", openhouseNFT.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })