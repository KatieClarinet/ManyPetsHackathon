import express from "express";
const router = express.Router();

// var quoteNum = 0;

router.post("/quote", async function (req, res) {
    let reqData = req.body;
    let pets = reqData.pets;
    let postcode = reqData.postcode;

    let totalPets = 0;
    let basePrice = 10;
    let totalPrice = 0;
    let priceIncrease = 0;
    //age and breed calculate
    pets.forEach((age) => {
        let discountBreed1 = "husky";
        let discountBreed2 = "labrador";
        let discountBreed3 = "german shepherd";

        if (age.age <= 1) {
            let ageQuote1 = basePrice * 1.05;
            totalPets++;
            console.log(`Age1 quote: ${ageQuote1}`);
            if (
                age.breed.toLowerCase() === discountBreed1 ||
                age.breed.toLowerCase() === discountBreed2 ||
                age.breed.toLowerCase() === discountBreed3
            ) {
                ageQuote1 *= 0.9;
                totalPrice += ageQuote1;
                console.log(`Age1 quote with breed discount: ${ageQuote1}`);
            } else {
                totalPrice += ageQuote1;
                console.log(`Age1 total without breed discount: ${totalPrice}`);
            }
        } else if (age.age === 2) {
            let ageQuote2 = basePrice * 1.05;
            totalPets++;
            console.log(`Age2 quote: ${ageQuote2}`);
            if (
                age.breed.toLowerCase() === discountBreed1 ||
                age.breed.toLowerCase() === discountBreed2 ||
                age.breed.toLowerCase() === discountBreed3
            ) {
                ageQuote2 *= 0.9;
                totalPrice += ageQuote2;
                console.log(`Age2 quote with breed discount: ${ageQuote2}`);
            } else {
                totalPrice += ageQuote2;
                console.log(`Age2 total without breed discount: ${totalPrice}`);
            }
        } else if (age.age === 3) {
            let ageQuote3 = basePrice * 1.15;
            totalPets++;
            console.log(`Age3 quote: ${ageQuote3}`);
            if (
                age.breed.toLowerCase() === discountBreed1 ||
                age.breed.toLowerCase() === discountBreed2 ||
                age.breed.toLowerCase() === discountBreed3
            ) {
                ageQuote3 *= 0.9;
                totalPrice += ageQuote3;
                console.log(`Age3 quote with breed discount: ${ageQuote3}`);
            } else {
                totalPrice += ageQuote3;
                console.log(`Age3 total without breed discount: ${totalPrice}`);
            }
        } else if (age.age === 4) {
            let ageQuote4 = basePrice * 1.2;
            totalPets++;
            console.log(`Age4 quote: ${ageQuote4}`);
            if (
                age.breed.toLowerCase() === discountBreed1 ||
                age.breed.toLowerCase() === discountBreed2 ||
                age.breed.toLowerCase() === discountBreed3
            ) {
                ageQuote4 *= 0.9;
                totalPrice += ageQuote4;
                console.log(`Age4 quote with breed discount: ${ageQuote4}`);
            } else {
                totalPrice += ageQuote4;
                console.log(`Age4 total without breed discount: ${totalPrice}`);
            }
        } else if (age.age === 5) {
            let ageQuote5 = basePrice * 1.25;
            totalPets++;
            console.log(`Age5 quote: ${ageQuote5}`);
            if (
                age.breed.toLowerCase() === discountBreed1 ||
                age.breed.toLowerCase() === discountBreed2 ||
                age.breed.toLowerCase() === discountBreed3
            ) {
                ageQuote5 *= 0.9;
                totalPrice += ageQuote5;
                console.log(`Age5 quote with breed discount: ${ageQuote5}`);
            } else {
                totalPrice += ageQuote5;
                console.log(`Age5 total without breed discount: ${totalPrice}`);
            }
        } else if (age.age === 6) {
            let ageQuote6 = basePrice * 1.35;
            totalPets++;
            console.log(`Age6 quote: ${ageQuote6}`);
            if (
                age.breed.toLowerCase() === discountBreed1 ||
                age.breed.toLowerCase() === discountBreed2 ||
                age.breed.toLowerCase() === discountBreed3
            ) {
                ageQuote6 *= 0.9;
                totalPrice += ageQuote6;
                console.log(
                    `ageQuote6 quote with breed discount: ${ageQuote6}`
                );
            } else {
                totalPrice += ageQuote6;
                console.log(
                    `ageQuote6 total without breed discount: ${totalPrice}`
                );
            }
        } else if (age.age === 7) {
            let ageQuote7 = basePrice * 1.45;
            totalPets++;
            console.log(`Age7 quote: ${ageQuote7}`);
            if (
                age.breed.toLowerCase() === discountBreed1 ||
                age.breed.toLowerCase() === discountBreed2 ||
                age.breed.toLowerCase() === discountBreed3
            ) {
                ageQuote7 *= 0.9;
                totalPrice += ageQuote7;
                console.log(`Age7 quote with breed discount: ${ageQuote7}`);
            } else {
                totalPrice += ageQuote7;
                console.log(
                    `ageQuote7 total without breed discount: ${totalPrice}`
                );
            }
        } else if (age.age === 8) {
            let ageQuote8 = basePrice * 1.55;
            totalPets++;
            console.log(`ageQuote8 quote: ${ageQuote8}`);
            if (
                age.breed.toLowerCase() === discountBreed1 ||
                age.breed.toLowerCase() === discountBreed2 ||
                age.breed.toLowerCase() === discountBreed3
            ) {
                ageQuote8 *= 0.9;
                totalPrice += ageQuote8;
                console.log(`Age8 quote with breed discount: ${ageQuote8}`);
            } else {
                totalPrice += ageQuote8;
                console.log(
                    `ageQuote8 total without breed discount: ${totalPrice}`
                );
            }
        } else if (age.age === 9) {
            let ageQuote9 = basePrice * 1.65;
            totalPets++;
            console.log(`ageQuote9 quote: ${ageQuote9}`);
            if (
                age.breed.toLowerCase() === discountBreed1 ||
                age.breed.toLowerCase() === discountBreed2 ||
                age.breed.toLowerCase() === discountBreed3
            ) {
                ageQuote9 *= 0.9;
                totalPrice += ageQuote9;
                console.log(`Age9 quote with breed discount: ${ageQuote9}`);
            } else {
                totalPrice += ageQuote9;
                console.log(
                    `ageQuote9 total without breed discount: ${totalPrice}`
                );
            }
        } else {
            let ageQuote10 = basePrice * 1.75;
            totalPets++;
            console.log(`ageQuote9 quote: ${ageQuote10}`);
            if (
                age.breed.toLowerCase() === discountBreed1 ||
                age.breed.toLowerCase() === discountBreed2 ||
                age.breed.toLowerCase() === discountBreed3
            ) {
                ageQuote10 *= 0.9;
                totalPrice += ageQuote10;
                console.log(`Age10 quote with breed discount: ${ageQuote10}`);
            } else {
                totalPrice += ageQuote10;
                console.log(
                    `ageQuote10 total without breed discount: ${totalPrice}`
                );
            }
        }
        console.log(`Num of pets: ${totalPets} and total price: ${totalPrice}`);
        postcodeInc(totalPrice);
    });

    async function postcodeInc(totalPrice) {
        // console.log(`Line 200 total price: ${totalPrice}`);
        if (
            postcode.toLowerCase().includes("bs4") ||
            postcode.toLowerCase().includes("sw3") ||
            postcode.toLowerCase().includes("m12")
        ) {
            console.log(`Increased Price: ${totalPrice * 1.15}`);
            priceIncrease = (totalPrice * 1.15)
           return priceIncrease;
        } 
    }

    async function multiPetDiscount(totalPrice, priceIncrease, totalPets) {
        //work out if there is a higher price due to postcode
        if (priceIncrease > totalPrice) {

            if (totalPets > 1) {
                let discount = totalPets * 10;
                console.log(`discount: ${discount}`);
                let difference = 100 - discount;
                console.log(`difference: ${difference}`);
                let percentage = difference / 100;
                console.log(`percentage: ${percentage}`);
                let appliedDiscount = priceIncrease * percentage;
                console.log(`before discount: ${priceIncrease}`);
                console.log(`appliedDiscount: ${appliedDiscount}`);
                return appliedDiscount;
            } else {

                if (totalPets > 1) {
                    let discount = totalPets * 10;
                    console.log(`discount: ${discount}`);
                    let difference = 100 - discount;
                    console.log(`difference: ${difference}`);
                    let percentage = difference / 100;
                    console.log(`percentage: ${percentage}`);
                    let appliedDiscount = totalPrice * percentage;
                    console.log(`before discount: ${totalPrice}`);
                    console.log(`appliedDiscount: ${appliedDiscount}`);
                    return appliedDiscount;
                }
        }
    }
}

    res.json({
        success: true,
        Quote: totalPrice,
        Postcode15: await postcodeInc(totalPrice),
        MultiPet10: await multiPetDiscount(totalPrice, priceIncrease, totalPets),
        Number_of_pets: totalPets,
    });
});

export default router;
