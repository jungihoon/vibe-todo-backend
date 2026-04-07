const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [
        true,
        "할일 제목은 필수입니다.",
      ],
      trim: true,
    },
    diff: {
      type: String,
      default: "Easy",
    },
    done: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model(
  "Todo",
  todoSchema,
);
