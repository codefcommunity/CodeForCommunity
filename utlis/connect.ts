import mongoose from "mongoose"

const connectMongo = async () => {
    mongoose.connect(process.env.MONGO_URL!)
    const db = mongoose.connection
    return db
}
export default connectMongo