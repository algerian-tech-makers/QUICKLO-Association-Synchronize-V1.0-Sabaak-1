import { connect } from "mongoose";

const uri = process.env.MONGO_URI


const connectDB = () => {
    connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
    console.log("connected to mongoDB")
}

export default connectDB