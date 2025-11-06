import mongoose from 'mongoose';

const { Schema, models, model } = mongoose;

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 7,
        },
        username: {
            type: String,
            required: true,
            trim: true,
        },
        role: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const User = models.User || model('User', UserSchema);
export default User;
