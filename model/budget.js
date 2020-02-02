const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const budgetSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        name: {
            type: String,

        },
        amount: {
            type: Number,
        }
    }
);


const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;
