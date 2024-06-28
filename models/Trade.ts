import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

const collection_db_name = process.env.DB_ENV === "prod" ? "prod_tradelikebot_db" : "test_tradelikebot_db";

const tradeSchema = new mongoose.Schema(
  {
    user_id: {
      type: String
    },
    api_key: {
      type: String,
      required: true,
      private: true
    },
    api_secret: {
      type: String,
      required: true,
      private: true
    },
    ticker: {
        type: String,
        required: true,
        trim: true,
    },
    quantity: {
        type: Number
    },
    timeframe: {
        type: String,
        required: true,
        trim: true,
    },
    take_profit_price: {
        type: Number
    },
    price: {
        type: Number
    },
    order_status: {
        type: String,
        required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    collection: collection_db_name,
  }
);

tradeSchema.plugin(toJSON);

const Trade = mongoose.models.Trade || mongoose.model("Trade", tradeSchema);

export default Trade;
