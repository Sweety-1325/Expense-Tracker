import React,{useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm=(props)=>{
    const [enteredTitle, setenteredTitle] = useState('');
    const [enteredAmount, setenteredAmount] = useState('');
    const [enteredDate, setenteredDate] = useState('');
    /*const [userInput, setuserInput] = useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:''
    });*/
    //instead of using 3 states we can use a single use state by taking object as an input
    const titleChangeHandler=((event)=>{
        setenteredTitle(event.target.value);
        /*setuserInput({
            ...userInput,
            enteredTitle:event.target.value,
        })*/
        
    })
    const amountChangeHandler=((event)=>{
        setenteredAmount(event.target.value);
        /*setuserInput({
            // over here we are copying the data of the previous state to teh current state and the overwriting the corresponding value
            // as it we can't update the values individualy we need to updatwe all three together els ethe data will be lost
            // it's better the use multiple states
            ...userInput,
            enteredAmount:event.target.value,
        })*/
    })
    const dateChangeHandler=((event)=>{
        setenteredDate(event.target.value);
        /*setuserInput({
            ...userInput,
            enteredDate:event.target.value,
        })*/
    })
    const submitHandler=((event)=>{
        // this is to prevent the default behavior of the page to get reloaded whenever the submit button is clicked and we doo not want that so we are t=i=using theis javascript function to prevent it from getting reloaded
        event.preventDefault();
        const expensedata={
            title:enteredTitle,
            amount:+enteredAmount,
            date:new Date(enteredDate)
        };
        // console.log(expensedata);
        //child to parent communication
        props.onSaveExpenseData(expensedata);
        setenteredTitle('');
        setenteredAmount('');
        setenteredDate('');

    })
    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label >Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label >Amount</label>
                    {/* here value is using the concept of 2 way binding */}
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label >Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )

}
export default ExpenseForm;