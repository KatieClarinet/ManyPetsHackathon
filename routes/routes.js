import express from "express";

const router = express.Router();

router.get("/", async function(req, res){
      res.json({
          success : true,
          message : "Here are your tasks" });
});

router.post("/user_table", async function(req, res){
    const reqData = req.body;
    const newTask = await postToTasks({reqData});
    res.json({ success: true,
               payload: newTask});
})
export default router;