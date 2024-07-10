import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://acharyaprashant16:theblitheguy12@cluster0.orjro45.mongodb.net/kec-foodmandu?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("DB connection established...");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
    process.exit();
  }
};

export default connectDB;
