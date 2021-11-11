import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    //const [userInput, setUserInput] = useState({
    //    enteredTitle: '',
    //    enteredAmount: '',
    //    enteredDate: ''
    //});

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    enteredTitle: event.target.value,
        //});
        //setUserInput((prevState) => {
        //    return {...prevState, eneteredTitle: event.target.value}
        //});
        /*
        여러 개의 state update를 동시에 한다면 유효하지 않은 또는
        부정확한 state 스냅샵에 의존할 수 있음.
        위와 같이 함수형 업데이트를 사용한다면 함수 내부의 스냅샷은
        항상 가장 최근의 state 스냅샷이 됨.
        가장 최근의 state 스냇샵을 사용하도록 보장하는 방법이 함수형 업데이트
        만약 state update가 이전의 state에 달려있는 상태라면 
        함수형 업데이트를 사용하는 것이 좋음
        */
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    enteredAmount: event.target.value,
        //});
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    enteredDate: event.target.value,
        //});
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;