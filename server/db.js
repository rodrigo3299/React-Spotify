import mongoose from "mongoose";

export default async function conectDb() {
    mongoose.connect("mongodb+srv://rodrigo:12345@cluster0.7txhn.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection
}