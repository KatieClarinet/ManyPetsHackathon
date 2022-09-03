import express from "express";
const router = express.Router();

//change index to be number of pets
var index = 0;
router.get("/", async function (req, res) {
    res.json({
        success: true,
        message: "Here are your tasks",
    });
});

router.post("/quote", async function (req, res) {
    let reqData = req.body;
    //pet1
    let quote = await ageQuote(reqData, index);
    let breed = await breedCalculator(reqData, quote, index);
    let postcode = await postcodeCalculator(reqData, breed);
    let multiPets = await checkMultiPets(reqData, index);
    //pet2
    let quote1 = await ageQuote(reqData, index);
    let breed1 = await breedCalculator(reqData, quote, index);
    //pet3
    let quote2 = await ageQuote(reqData, index);
    let breed2 = await breedCalculator(reqData, quote, index);
    console.log(`multipets ${multiPets}`);
    res.json({
        success: true,
        Pet1: {
            AgeBasedQuote: quote,
            IncBreedDiscount: breed,
            IncPostcodeCost: postcode,
        },
        Pet2: { AgeBasedQuote: quote1, IncBreedDiscount: breed1 },
        Pet3: { AgeBasedQuote: quote2, IncBreedDiscount: breed2 },
    });
});

async function ageQuote(reqData, index) {
    console.log(`ageQuote line 40 index: ${index}`);
    console.log(`ageQuote line 41 pet age: ${reqData.pets[index].age}`)
    if (reqData.pets[index].age <= 1) {
        return reqData.baseprice * 1.05;
    }
    if (reqData.pets[index].age === 2) {
        return reqData.baseprice * 1.1;
    }
    if (reqData.pets[index].age === 3) {
        return reqData.baseprice * 1.15;
    }
    if (reqData.pets[index].age === 4) {
        return reqData.baseprice * 1.2;
    }
    if (reqData.pets[index].age === 5) {
        return reqData.baseprice * 1.25;
    }
    if (reqData.pets[index].age === 6) {
        return reqData.baseprice * 1.35;
    }
    if (reqData.pets[index].age === 7) {
        return reqData.baseprice * 1.45;
    }
    if (reqData.pets[index].age === 8) {
        return reqData.baseprice * 1.55;
    }
    if (reqData.pets[index].age === 9) {
        return reqData.baseprice * 1.65;
    } else {
        return reqData.baseprice * 1.75;
    }
}
//calculate 10% discount for certain breeds
async function breedCalculator(reqData, quote) {
  console.log(`breedCalculator line 74 index: ${index}`);
  console.log(`breedCalculator line 74 pet breed: ${reqData.pets[index].breed}`)
    if (
        reqData.pets[index].breed.toLowerCase() === "husky" ||
        reqData.pets[index].breed.toLowerCase() === "labrador" ||
        reqData.pets[index].breed.toLowerCase() === "german shepherd"
    ) {
        return quote * 0.9;
    } else {
        return quote;
    }
}
//calculate 15% increase for certain areas
async function postcodeCalculator(reqData, breed) {
    if (
        reqData.postcode.toLowerCase().includes("bs4") ||
        reqData.postcode.toLowerCase().includes("sw3") ||
        reqData.postcode.toLowerCase().includes("m12")
    ) {
        return breed * 1.15;
    } else {
        return breed;
    }
}

// console.log(`index line 80 ${index}`);
//need to check here if there are more pets in same object
//and if so, to increase the index then start the loop again
//but if not...stop
//if reqData.pets[index++] != null then loop back over?
//check if the reqData array contains another index?
async function checkMultiPets(reqData, index) {
    console.log(`checkMultiPets line 106 Pets array length: ${reqData.pets.length}`);
    if (reqData.pets.length > index) {
        index = index + 1;
        console.log(`index line 109 ${index}`);
        ageQuote(reqData, index);
    } else {
        console.log(`number of pets = ${index} -1`);
    }
}

export default router;
