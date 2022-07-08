import { useEffect, useState } from 'react';
import { validateAmount } from './../../validation/input-validator';

function ReportSavedMoney() {
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [enteredAmountValidation, setEnteredAmountValidation] = useState(null);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
      if (enteredAmountValidation != null) {
        setFormIsValid(false);
      } else {
        setFormIsValid(true);
      }
    }, [enteredAmountValidation]);

    const amountValidationResult = enteredNameTouched ? validateAmount(enteredAmount) : null;
    if (amountValidationResult !== enteredAmountValidation) {
      setEnteredAmountValidation(amountValidationResult);
    }

    const enteredAmountHandler = (event) => {
        const amount = event.target.value;
        setEnteredAmount(amount);
        setEnteredNameTouched(true);
    }

    const amountInputBlurHandler = (event) => {
      const amountValidationResult = validateAmount(enteredAmount);
    }

    const formSubmitHandler = (event) => {
      event.preventDefault();

      if (enteredAmountValidation) {
        return;
      }

      console.log(enteredAmount);
      resetForm();
    }

    const resetForm = () => {
      setEnteredAmount(0);
      setEnteredNameTouched(false);
    }

    const amountInputClasses = enteredAmountValidation ? 'form-control invalid' : 'form-control';

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={amountInputClasses}>
                <label htmlFor='saved-amount'>Amount</label>
                <input
                  value={enteredAmount}
                  type='number'
                  id='saved-amount'
                  onBlur={amountInputBlurHandler}
                  onChange={enteredAmountHandler} />
                  {enteredAmountValidation && <p className="error-text">{enteredAmountValidation}</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
  );
}

export default ReportSavedMoney;
