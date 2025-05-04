import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
    displayName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
}, { timestamps: true });
const User = mongoose.model("User", userSchema);
export default User;