import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
    user_id: {
        type: String,
        required: true,
        unique: true,
    },

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    picture: {
        type: String,
    },
    emailVerified: {
        type: Boolean,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    lastOnline: {
        type: Date,
        default: new Date()
    },
    xp: {
        type: Number,
        default: 0
    },
    level: {
        type: Number,
        default: 0
    },
    bio: {
        type: String,
        default: ""
    },
    location: {
        type: String,
        default: ""
    },
    website: {
        type: String,
        default: ""
    },
    github: {
        type: String,
        default: ""
    },
    twitter: {
        type: String,
        default: ""
    },
    linkedin: {
        type: String,
        default: ""
    },
    youtube: {
        type: String,
        default: ""
    },
    status: {
        type: String,
        default: "I am a new Developer"
    }
});

const UserSchema = models.User || model("User", userSchema);

export default UserSchema;