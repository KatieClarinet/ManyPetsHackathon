import express from "express";

const router = express.Router();

async function newQuote({reqData}){
    console.log(reqData)
}


router.get("/", async function(req, res){
      res.json({
          success : true,
          message : "Here are your tasks" });
});

router.post("/quote", async function(req, res){
    const reqData = req.body;
    const quote = await newQuote({reqData});
    res.json({ success: true,
               payload: reqData});
})
export default router;