import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://ruhankb29_db_user:Vg6BEifLO83ArnPn@cluster0.s72fc5n.mongodb.net/?appName=Cluster0").then(()=>{
        console.log("MongoDB connected successfully");
    })
}