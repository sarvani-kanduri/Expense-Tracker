import React from "react"; 
import Card from "../UI/Card";
import "./ExpenseItems.css"
const ExpenseItems =(props)=>{
    const month = props.date.toLocaleString('en-US', {month:'long'})
    const day = props.date.toLocaleString('en-US', {day:'2-digit'})
    
    const deleteHandler=()=>{
        props.deleteItem(props.id);
    }

    
    return (
    <Card className="items">

<div className="date"> 
    <div className="expense__month"> {month}</div>
    <div className="expense__day"> {day}</div>
    </div>
    <div className="alining">
<h2 className="expense__title">{props.title}</h2>


<div className="expense__price">Rs. {props.amount}</div>
</div>
<button className="button" onClick={deleteHandler}>Remove</button>
    </Card>

    );

}
export default ExpenseItems;