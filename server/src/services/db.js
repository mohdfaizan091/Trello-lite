import mongoose from 'mongoose';

const connectDB = async () => {

    try { 
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log('DataBase connected successfully');
    } catch (error) {
        console.error(`MongoDB fail to connect -- ${error.message}`);
        process.exit(1); //immediate stop node server
    }
};

export default connectDB;