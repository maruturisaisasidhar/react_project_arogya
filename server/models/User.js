// server/models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Export the model as a default export
const User = mongoose.model("User", userSchema);
export default User;