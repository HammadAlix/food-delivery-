import foodModel from "../models/foodModel.js";
import fs from "fs"

//add food item
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,

        category: req.body.category,
        image: image_filename,
    })
    try {
        await food.save();
        res.json({
            success: true,
            message: "Food item added successfully",
            food
        })
    } catch (error) {
        console.log(error)
        res.json({  
            success: false,
            message: "Failed to add food item",
            error
        })
    }
}

//all food list
const listfood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({
            success: true,
            data: foods
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Failed to fetch food items",
            error
        });
    }
}

//remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.params.id);
        fs.unlink(`uploads/${food.image}`, async (err) => {
            if (err) {
                console.error("Failed to delete image:", err);
            }
            await foodModel.findByIdAndDelete(req.params.id);
            res.json({
                success: true,
                message: "Food item removed successfully"
            });
        });
    } catch (error) {
        res.json({
            success: false,
            message: "Failed to remove food item",
            error
        });
    }
}

export { addFood, listfood ,removeFood};