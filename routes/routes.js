import express from "express";

const router = express.Router();

router.get("/", async function (req, res) {
  res.json({
    success: true,
    message: "Here are your tasks",
  });
});
var reqData;
router.post("/quote", async function (req, res) {
  reqData = req.body;
  const quote = await ageQuote(reqData);
  // const breed = await breedCalculator(quote);
  res.json({ success: true, payload: quote });
});

async function ageQuote(reqData) {
  if (reqData.pet.age === 1) {
    console.log("IT'S A ONE!");
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

  // async function breedCalculator(quote) {
  //   // console.log(ageQuote)
  //   if (
  //     reqData.pet.breed === "Husky" ||
  //     reqData.pet.breed === "Husky".toLowerCase() ||
  //     reqData.pet.breed === "Labrador" ||
  //     reqData.pet.breed === "Labrador".toLowerCase() ||
  //     reqData.pet.breed === "German Shepherd" ||
  //     reqData.pet.breed === "German Shepherd".toLowerCase()
  //   ) {
  //     let breedDiscount = ageQuote * 0.9;
  //     return breedDiscount;
  //   }
  // }
}
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
