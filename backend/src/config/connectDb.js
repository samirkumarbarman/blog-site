import mongoose from "mongoose";

export const connectDb = async () =>{
    try {
        const connectdb = await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log(`\n MOngoDB connected !! DB host:${connectdb.connection.host}`);
    } catch (error) {
        console.log("Mongodb connection error", error);
        process.exit(1);
    }
};