import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: '' },
    role: { type: String, default: 'user' },
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('user', userSchema)

export default User