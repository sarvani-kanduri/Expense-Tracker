import ExpenseForm from "./ExpenseForm";
import react ,{useState} from "react";
import "./MainExpenseForm.css"
const MainExpenseForm=(props)=>{

     const[ viewform,setviewform]=useState(false);

    const formHandler =(selectedForm)=>{

        const expenseData ={
         id:Math.random().toString(),
         ...selectedForm
        };
        props.onExpenseData(expenseData);
        setviewform(false);
    }
    const formOpenHandler =()=>{
        setviewform(true);
    }
    const stopFormHandler=()=>{
        setviewform(false);
    }

    return(
        <div className="mainform">
        {viewform === false ? <button onClick={formOpenHandler}>Add More</button>
            :<ExpenseForm cancel={stopFormHandler} onAddExpenses={formHandler}/>
    }
        </div>


    );

}

export default MainExpenseForm;