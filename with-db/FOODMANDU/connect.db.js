import mongoose from 'mongoose';

const dbUserName = process.env.dbUserName;
const dbPassword = encodeURIComponent(process.env.dbPassword);
const dbHost = process.env.dbHost;
const dbName = process.env.dbName;
const dbOptions = process.env.dbOptions;

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUserName}:${dbPassword}@${dbHost}/${dbName}?${dbOptions}`
    );
    console.log('Connected to database');
  } catch (error) {
    console.log('Error connecting to database');
    console.log(error.message);
    process.exit(1); //1=> exit with error
  }
};

export default connectDB;
