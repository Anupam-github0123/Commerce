import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const dbConnect = async ()=>{
    try {
        const dbInstance = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
        console.log(`DB INSTANCE dbInstance.connection.host`);
    } catch (error) {
        console.log("DB connect to failed");
    }
}
export{dbConnect}