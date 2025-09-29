import mongoose from "mongoose"

export const ConnectDB=async()=>{
    await mongoose.connect("mongodb+srv://Nextjscrud:z45UHlfQ7A9TxSf1@cluster0.bmepgxw.mongodb.net/todo-app")
    console.log("DB connected")
}