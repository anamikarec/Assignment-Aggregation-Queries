
const app=require("express")();
const mongoose  = require("mongoose");

//Schema
const ExpensesSchema= new mongoose.Schema({
    type: {type: String, required: true},
    dateOfExpense : {type : Date, required: true},
    reimbursed : {type: Boolean, required: true},
    reimbursed_date : {type: Date, required: true},
})

//Models
const Expenses= mongoose.model("Expenses",ExpensesSchema);

module.exports=Expenses;