import React ,{useState} from "react"; 
import "./ExpenseForm.css"
const ExpenseForm =(props)=>{

    const [enteredtitle,settitle]=useState('');
    const [enteredamount,setamount]=useState('');
    const [entereddate,setdate]=useState('');

    const titleChangeHandler=(event)=>{
        settitle(event.target.value);
    }
    const amountChangeHandler=(event)=>{
        setamount(event.target.value);
    }
    const dateChangeHandler=(event)=>{
        setdate(event.target.value);
    }
    const submitChangeHandler=(event)=>{
        event.preventDefault();
        const data ={
            title:enteredtitle,
            amount:parseInt(enteredamount),
            date:new Date(entereddate)
        };
      
         settitle('');
         setamount('');
         setdate('');
         props.onAddExpenses(data);
    }
    
return(
    <form onSubmit ={submitChangeHandler}>
        <div className="total_form">
        <div className="control_form">
            <label>Title</label>
            <input type="text" value={enteredtitle} onChange={titleChangeHandler}/>
        </div>
        <div className="control_form">
    <label>Amount</label>
    <input type="number" min= "0.01" step="0.01" value={enteredamount} onChange={amountChangeHandler}/>
</div>
<div className="control_form">
    <label>Date</label>
    <input type='date' min= "2019-01-01" max="2022-12-31" value={entereddate} onChange={dateChangeHandler}/>
</div>

</div>
<div>
<button type="submit">Add Expense</button>
<button type="button" onClick= {props.cancel}>Cancel</button>
</div>
</form>
);
}

export default ExpenseForm;