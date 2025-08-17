// mongodb+srv://<db_username>:<db_password>@cluster0.o2ecils.mongodb.net/?
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin:admin@cluster0.o2ecils.mongodb.net/food-del", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Failed:", error.message);
    process.exit(1); // Optional: Exit the process on connection failure
  }
};
