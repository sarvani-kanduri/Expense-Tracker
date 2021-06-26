import "./ExpenseTotal.css";

const ExpenseTotal=(props)=>{
 return(
     <div className="total">
         <div>
         <h2>Total -    {props.totalamount} </h2>
         </div>
         
     </div>
 );
}
export default ExpenseTotal;