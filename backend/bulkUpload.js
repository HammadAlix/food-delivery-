import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import path from "path";

// Paste your food_list array here (from assets.js), but update image paths to match backend assets folder
const food_list = [
  {
    name: "Greek salad",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1200,
    category: "Salad",
    image: "food_1.png"
  },
  {
    name: "Veg salad",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1800,
    category: "Salad",
    image: "food_2.png"
  },
  {
    name: "Clover Salad",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1600,
    category: "Salad",
    image: "food_3.png"
  },
  {
    name: "Chicken Salad",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 2400,
    category: "Salad",
    image: "food_4.png"
  },
  {
    name: "Lasagna Rolls",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1400,
    category: "Rolls",
    image: "food_5.png"
  },
  {
    name: "Peri Peri Rolls",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1200,
    category: "Rolls",
    image: "food_6.png"
  },
  {
    name: "Chicken Rolls",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 2000,
    category: "Rolls",
    image: "food_7.png"
  },
  {
    name: "Veg Rolls",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1500,
    category: "Rolls",
    image: "food_8.png"
  },
  {
    name: "Ripple Ice Cream",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1400,
    category: "Deserts",
    image: "food_9.png"
  },
  {
    name: "Fruit Ice Cream",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 2200,
    category: "Deserts",
    image: "food_10.png"
  },
  {
    name: "Jar Ice Cream",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1000,
    category: "Deserts",
    image: "food_11.png"
  },
  {
    name: "Vanilla Ice Cream",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1200,
    category: "Deserts",
    image: "food_12.png"
  },
  {
    name: "Chicken Sandwich",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1200,
    category: "Sandwich",
    image: "food_13.png"
  },
  {
    name: "Vegan Sandwich",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1800,
    category: "Sandwich",
    image: "food_14.png"
  },
  {
    name: "Grilled Sandwich",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1600,
    category: "Sandwich",
    image: "food_15.png"
  },
  {
    name: "Bread Sandwich",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 2400,
    category: "Sandwich",
    image: "food_16.png"
  },
  {
    name: "Cup Cake",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1400,
    category: "Cake",
    image: "food_17.png"
  },
  {
    name: "Vegan Cake",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1200,
    category: "Cake",
    image: "food_18.png"
  },
  {
    name: "Butterscotch Cake",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 2000,
    category: "Cake",
    image: "food_19.png"
  },
  {
    name: "Sliced Cake",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1500,
    category: "Cake",
    image: "food_20.png"
  },
  {
    name: "Garlic Mushroom",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1400,
    category: "Pure Veg",
    image: "food_21.png"
  },
  {
    name: "Fried Cauliflower",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 2200,
    category: "Pure Veg",
    image: "food_22.png"
  },
  {
    name: "Mix Veg Pulao",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 2000,
    category: "Pure Veg",
    image: "food_23.png"
  },
  {
    name: "Rice Zucchini",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1200,
    category: "Pure Veg",
    image: "food_24.png"
  },
  {
    name: "Cheese Pasta",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1200,
    category: "Pasta",
    image: "food_25.png"
  },
  {
    name: "Tomato Pasta",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1800,
    category: "Pasta",
    image: "food_26.png"
  },
  {
    name: "Creamy Pasta",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1600,
    category: "Pasta",
    image: "food_27.png"
  },
  {
    name: "Chicken Pasta",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 2400,
    category: "Pasta",
    image: "food_28.png"
  },
  {
    name: "Buttter Noodles",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1400,
    category: "Noodles",
    image: "food_29.png"
  },
  {
    name: "Veg Noodles",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1200,
    category: "Noodles",
    image: "food_30.png"
  },
  {
    name: "Somen Noodles",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 2000,
    category: "Noodles",
    image: "food_31.png"
  },
  {
    name: "Cooked Noodles",
    description: "Food provides essential nutrients for overall health and well-being",
    price: 1700,
    category: "Noodles",
    image: "food_32.png"
  }
];


const uploadFood = async (item) => {
  const form = new FormData();
  form.append("name", item.name);
  form.append("description", item.description);
  form.append("price", item.price);
  form.append("category", item.category);
  form.append("image", fs.createReadStream("C:/Users/PMLS/Downloads/food/food/frontend/src/assets/" + item.image));

  try {
    const res = await axios.post(
      "http://localhost:4000/api/food/add",
      form,
      { headers: form.getHeaders() }
    );
    console.log(`Uploaded: ${item.name} (${item.image})`);
  } catch (err) {
    console.error(`Failed: ${item.name} (${item.image})`, err.response?.data || err.message);
  }
};

const run = async () => {
  for (const item of food_list) {
    await uploadFood(item);
  }
  console.log("Bulk upload complete!");
};

run();