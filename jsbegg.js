//We are here to create a variable to hold our NFT's

const digitalAssets = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT (_owner, _eyeShade, _topWear, _accessory) {

    const digitalAsset = {
        "owner": _owner,
        "eyeShade": _eyeShade,
        "topWear": _topWear,
        "accessory": _accessory
    }
    digitalAssets.push(digitalAsset);
    console.log("Minted: "+ _owner);
}

// Lets create a "loop" that will pass through al the elements of an "array" of digital assets
// and we try to print their metadata by using console.log()
function listNFTs () {
    for(i=0; i<digitalAssets.length; i++){
        console.log("\nID: \t\t " +(i+1));
        console.log("Name: \t\t "+digitalAssets[i].owner);
        console.log("\nEye Color: \t "+digitalAssets[i].eyeShade);
        console.log("\nShirt Type: "+digitalAssets[i].topWear);
        console.log("\nBling: \t "+digitalAssets[i].accessory);
    }
}

//Here we are to print the total number of digital assets
function getTotalSupply() {
    console.log("\n"+digitalAssets.length);
}

// Let's Start calling our function
mintNFT("Lavish", "Black", "Footbal Jercy", "Classical Watch");
mintNFT("Nikhil", "Brown", "Shirts", "Locktet");
mintNFT("Jasanpreet", "Grey", "OnePiece", "Silver Braclet");
mintNFT("Vipula", "Black", "Crop top", "Hand Band");
mintNFT("Rahul Sain", "Green", "T-Shirt", "Kada");
listNFTs();
getTotalSupply();
