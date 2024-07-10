import mongoose from "mongoose";

const dbUserName = "kec";
const dbpassword = encodeURIComponent("kec1234");
const dbHost = "cluster0.orjro45.mongodb.net";
const dbName = "kec-crud-NETFIX";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://acharyaprashant16:theblitheguy12@cluster0.orjro45.mongodb.net/kec-crud-NETFIX?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("DB connection established...");
  } catch (error) {
    console.log("DB connection failed ....");
    console.log(error.message);
  }
};
export default connectDB;
