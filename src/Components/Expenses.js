import React,{useState}from "react"; 
import Card from "../UI/Card";
import ExpenseItems from "./ExpenseItems";
import  "./Expenses.css";
import ExpenseFilter from "./FormExpense/ExpenseFilters/ExpenseFilter";
import ExpenseTotal from "../Total/ExpenseTotal";
const Expenses =(props)=>{
  

 const[fitleredMonth,setFilteredMonth]=useState('6');
 
 const filterHandler =(selectedMonth)=>{
    setFilteredMonth(selectedMonth);
   
 }
 
const filterMonth= props.expenses.filter
 ((exp) =>(exp.date.getMonth().toString() === fitleredMonth));
 let total=0;
 for (const expen of filterMonth) {
       
       total += expen.amount;
 }
console.log(total);
 
 
    return(
        <Card className="expenses">
          <ExpenseFilter selected={fitleredMonth} onSaveFilter={filterHandler}/>
          {filterMonth.length === 0 ? <p className="nodetails">No Details</p> : filterMonth.map((expense) => 
            <ExpenseItems
             key={expense.id}
             id={expense.id}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date} 
            deleteItem={props.onDelete}
           />)}
           <ExpenseTotal  totalamount={total}/>
     </Card>
     
    );
}
export default Expenses;