import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

const collection_db_name = process.env.DB_ENV === "prod" ? "prod_tradelikebot_db" : "test_tradelikebot_db";

const leadSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      private: true,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    collection: collection_db_name,
  }
);

// add plugin that converts mongoose to json
leadSchema.plugin(toJSON);

export default mongoose.models.Lead || mongoose.model("Lead", leadSchema);
