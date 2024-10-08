import mongoose from "mongoose";
/* import User from "./models/user.js"; */

const boardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  projectIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
  ],
  users: [
    {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

export default mongoose.model("Board", boardSchema);
