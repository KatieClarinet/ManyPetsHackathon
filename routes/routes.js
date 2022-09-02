import express from "express";

const router = express.Router();

async function newQuote({ reqData }) {
  if (reqData.pet.age === 1) {
const year1 = reqData.baseprice * 1.05
return year1 }
if (reqData.pet.age === 2) {
  const year2 = reqData.baseprice * 1.10
  return year2 }
  if (reqData.pet.age === 3) {
    const year3 = reqData.baseprice * 1.15
    return year3 }
    if (reqData.pet.age === 4) {
      const year4 = reqData.baseprice * 1.2
      return year4 }
      if (reqData.pet.age === 5) {
        const year5 = reqData.baseprice * 1.25
        return year5 }
        if (reqData.pet.age === 6) {
          const year6 = reqData.baseprice * 1.35
          return year6 }
          if (reqData.pet.age === 7) {
            const year7 = reqData.baseprice * 1.45
            return year7 }
            if (reqData.pet.age === 8) {
              const year8 = reqData.baseprice * 1.55
              return year8 }
              if (reqData.pet.age === 9) {
                const year9 = reqData.baseprice * 1.65
                return year9 }
                else {
                  const year10Plus = reqData.baseprice * 1.75
                  return year10Plus }
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
//  if (reqData.pet.breed === "Husky" || reqData.pet.breed === "Husky".toLowerCase() || reqData.pet.breed === "Labrador" || reqData.pet.breed === "Labrador".toLowerCase() || reqData.pet.breed === "German Shepherd" || reqData.pet.breed === "German Shepherd".toLowerCase() ) {
//   let breedDiscount = ageQuote * 0.9
//   return breedDiscount
//  }

//  if (reqData.postcode.slice(0, 4) === BS4 ||reqData.postcode.slice(0, 4) === SW3 ||reqData.postcode.slice(0, 4) === M12) {
//    return 
//   res.json({ success: true, payload: "expensive postcode" });
//  }

// 10% discount for Husky, Labrador, German Shepherd
// 15% increase for postcodes

  console.log(reqData.baseprice);
}

router.get("/", async function (req, res) {
  res.json({
    success: true,
    message: "Here are your tasks",
  });
});

router.post("/quote", async function (req, res) {
  const reqData = req.body;
  const quote = await newQuote({ reqData });
  res.json({ success: true, payload: quote });
});
export default router;
