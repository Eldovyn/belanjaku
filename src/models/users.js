const mongoose = require('mongoose');
const { Schema, model, models } = mongoose;

const RoleTypes = Object.freeze({
    ADMIN: 'admin',
    USER: 'user',
});

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
            enum: Object.values(RoleTypes),
            required: true,
            default: RoleTypes.USER,
        },
    },
    { timestamps: true }
);

UserSchema.index({ email: 1 }, { unique: true });

const User = models.User || model('User', UserSchema);
module.exports = { default: User, RoleTypes };
