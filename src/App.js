import Expenses from "./Components/Expenses";
import MainExpenseForm from "./Components/FormExpense/MainExpenseForm";
import React,{useState} from "react";

const Dummy_Expenses =[
    {id:"0",
      title:"Vegetables",
    amount:200,
  date:new Date(2021, 6,14)},
  {id:"1",
    title:"medicines",
    amount:1000,
  date:new Date(2021, 6,13)},
  {id:"2",
    title:"fruits",
    amount:200,
  date:new Date(2021, 3,10)},
  {id:"1993",
  title:"snacks",
amount:200,
date:new Date(2021, 4,14)},
  ];


function App() {
  const[expenses,setexpenses]=useState(Dummy_Expenses);
  
  const expenseDataHandler =(enteredData)=>{
    setexpenses( (prevexpenses) =>{
    return[enteredData,...prevexpenses];
    });
  }
    const deleteItemHandler = (specifiedId) =>{
      setexpenses ( (prevexpenses) =>{
     return( prevexpenses.filter( expe => expe.id !== specifiedId))
    
      });
     
    }

  
  return (
    <div>
      
          <MainExpenseForm onExpenseData={expenseDataHandler} />
        <Expenses  expenses ={expenses} onDelete ={deleteItemHandler} />
       
    </div>
  );
}

export default App;
