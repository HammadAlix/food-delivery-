import userModel from "../models/userModel.js";

// Add items to user cart
const addToCart = async (req, res) => {
  try {
    const userId = req.userId;
    const itemId = req.body.itemId;

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData || {};

    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added to cart" });

  } catch (error) {
    console.error("Add to cart error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Remove items from user cart
const removeFromCart = async (req, res) => {
  try {
    const userId = req.userId;
    const itemId = req.body.itemId;

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData || {};

    if (cartData[itemId] > 0) {
      cartData[itemId] -= 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Removed from cart" });

  } catch (error) {
    console.error("Remove from cart error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Fetch user cart data
const getCart = async (req, res) => {
  try {
    const userId = req.userId;

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData || {};
    res.json({ success: true, cartData });

  } catch (error) {
    console.error("Get cart error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export { addToCart, removeFromCart, getCart };
