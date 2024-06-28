import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

const collection_db_name = process.env.DB_ENV === "prod" ? "prod_tradelikebot_db" : "test_tradelikebot_db";

const userTaskSchema = new mongoose.Schema(
  {
    user_id: {
      type: String
    },
    task_id: {
      type: String
    }
  },
  {
    toJSON: { virtuals: true },
    collection: collection_db_name,
  }
);

userTaskSchema.plugin(toJSON);

const User_Task = mongoose.models.User_Task || mongoose.model("User_Task", userTaskSchema);

export default User_Task;
