import mongoose from "mongoose";

export default async function conectDb() {
    mongoose.connect("mongodb+srv://rodrigo:12345@cluster0.mx80r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection
}