import express from "express";

const router = express.Router();

router.get("/", async function (req, res) {
  res.json({
    success: true,
    message: "Here are your tasks",
  });
});

router.post("/quote", async function (req, res) {
  let reqData = req.body;
  let quote = await ageQuote(reqData);
  console.log(`quote ${quote}`)
  let breed = await breedCalculator(reqData,quote);
  console.log(`breed ${breed}`)
  let postcode = await postcodeCalculator(reqData, breed);
  console.log(`postcode ${postcode}`)
  res.json({ success: true, AgeBasedQuote: quote, IncBreedDiscount: breed, IncPostcodeCost: postcode });
});

async function ageQuote(reqData) {
  if (reqData.pet.age === 1) {
    return reqData.baseprice * 1.05;
  }
  if (reqData.pet.age === 2) {
    return reqData.baseprice * 1.1;
  }
  if (reqData.pet.age === 3) {
    return reqData.baseprice * 1.15;
  }
  if (reqData.pet.age === 4) {
    return reqData.baseprice * 1.2;
  }
  if (reqData.pet.age === 5) {
    return reqData.baseprice * 1.25;
  }
  if (reqData.pet.age === 6) {
    return reqData.baseprice * 1.35;
  }
  if (reqData.pet.age === 7) {
    return reqData.baseprice * 1.45;
  }
  if (reqData.pet.age === 8) {
    return reqData.baseprice * 1.55;
  }
  if (reqData.pet.age === 9) {
    return reqData.baseprice * 1.65;
  } else {
    return reqData.baseprice * 1.75;
  }
}
 
  async function breedCalculator(reqData,quote) {
    
    //SEND FETCH REQ here to check breed 
    if (
      reqData.pet.breed.toLowerCase() === "husky" ||
      reqData.pet.breed.toLowerCase() === "labrador" ||
      reqData.pet.breed.toLowerCase() === "german shepherd" 
      ) {
        let breedDiscount = quote * 0.9;
        // console.log(`breedDiscount ${breedDiscount}`)
        return breedDiscount
      } else {
        // console.log(`breed line 65 ${reqData.pet.breed}`)
        return quote;
      }
  }

  async function postcodeCalculator(reqData, breed) {
    if (
      reqData.postcode.toLowerCase().includes("bs4") ||
      reqData.postcode.toLowerCase().includes("sw3") ||
      reqData.postcode.toLowerCase().includes("m12") 
    ) {
      let postcodeIncrease = breed * 1.15
      // console.log(`postcodeIncrease ${postcodeIncrease}`)
      return postcodeIncrease
    } else {
      // console.log(`postcode line 83${reqData.postcode}`)
      return breed;
    }
  }
// }
// let increase5 = reqData.pet.age * 0.05;
// let less5AgeQuote = reqData.baseprice + (reqData.baseprice * increase5);
//     return less5AgeQuote
//   }
//   else if (reqData.pet.age > 5 && reqData.pet.age <= 10) {
//     let increase10 = reqData.pet.age * 0.1;
//     let less10AgeQuote = reqData.baseprice + (reqData.baseprice * increase10);
//         return less10AgeQuote

// else {
//   let oldPets = reqData.baseprice * 1.75
//   return oldPets
// }

//  if (reqData.postcode.slice(0, 4) === BS4 ||reqData.postcode.slice(0, 4) === SW3 ||reqData.postcode.slice(0, 4) === M12) {
//    return
//   res.json({ success: true, payload: "expensive postcode" });
//  }

// 10% discount for Husky, Labrador, German Shepherd
// 15% increase for postcodes

export default router;
