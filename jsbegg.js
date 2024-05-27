//We are here to create a variable to hold our NFT's
const miningNFTs = []
// this function will accept values as arguments, construct an
// NFT object using the provided arguments for its properties,
// and add it to the array declared above.
function createMiningNFT (_owner, _eyeShade, _topWear, _accessory) {

    const miningNFT = {
        "owner": _owner,
        "eyeShade": _eyeShade,
        "topWear": _topWear,
        "accessory": _accessory
    }
    miningNFTs.push(miningNFT);
    console.log("Minted: "+ _owner);
}

// Lets create a "loop" that will pass through al the elements of an "array" of digital assets
// and we try to print their metadata by using console.log()
function displayMiningNFTs () {
    for(i=0; i<miningNFTs.length; i++){
        console.log("\nID: \t\t " +(i+1));
        console.log("Name: \t\t "+miningNFTs[i].owner);
        console.log("\nEye Color: \t "+miningNFTs[i].eyeShade);
        console.log("\nShirt Type: "+miningNFTs[i].topWear);
        console.log("\nBling: \t "+miningNFTs[i].accessory);
    }
}

//Here we are to print the total number of digital assets
function totalMiningNFTs() {
    console.log("\n"+miningNFTs.length);
}

// Let's Start calling our function
createMiningNFT("Lavish", "Black", "Footbal Jercy", "Classical Watch");
createMiningNFT("Nikhil", "Brown", "Shirts", "Locktet");
createMiningNFT("Jasanpreet", "Grey", "OnePiece", "Silver Braclet");
createMiningNFT("Vipula", "Black", "Crop top", "Hand Band");
createMiningNFT("Rahul Sain", "Green", "T-Shirt", "Kada");
displayMiningNFTs();
totalMiningNFTs();
