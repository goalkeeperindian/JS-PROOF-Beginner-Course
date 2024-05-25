//We are here to create a variable to hold our NFT's
const digitalAssets = []
// this function will accept values as arguments, construct an
// NFT object using the provided arguments for its properties,
// and add it to the array declared above.
function createDigitalAsset (_owner, _eyeShade, _topWear, _accessory) {

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
function displayDigitalAssets () {
    for(i=0; i<digitalAssets.length; i++){
        console.log("\nID: \t\t " +(i+1));
        console.log("Name: \t\t "+digitalAssets[i].owner);
        console.log("\nEye Color: \t "+digitalAssets[i].eyeShade);
        console.log("\nShirt Type: "+digitalAssets[i].topWear);
        console.log("\nBling: \t "+digitalAssets[i].accessory);
    }
}

//Here we are to print the total number of digital assets
function totalDigitalAssets() {
    console.log("\n"+digitalAssets.length);
}

// Let's Start calling our function
createDigitalAsset("Lavish", "Black", "Footbal Jercy", "Classical Watch");
createDigitalAsset("Nikhil", "Brown", "Shirts", "Locktet");
createDigitalAsset("Jasanpreet", "Grey", "OnePiece", "Silver Braclet");
createDigitalAsset("Vipula", "Black", "Crop top", "Hand Band");
createDigitalAsset("Rahul Sain", "Green", "T-Shirt", "Kada");
displayDigitalAssets();
totalDigitalAssets();