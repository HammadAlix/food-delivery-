import fs from "fs"
import express from "express"

import multer from "multer"
import { addFood ,listfood,removeFood} from "../controllers/foodController.js";

const foodRouter=express.Router();

//image storage engine  


const Storage = multer.diskStorage({  
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload=multer({storage:Storage})
foodRouter.post("/add",upload.single("image"),addFood )
foodRouter.get("/list", listfood);
foodRouter.post("/remove/:id", removeFood);


export default foodRouter;