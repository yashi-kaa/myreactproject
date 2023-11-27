// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Budget from './components/Budget';
// import RemainingBudget from './components/Remaining';
// import ExpenseTotal from './components/ExpenseTotal';
// import ExpenseList from './components/ExpenseList';
// import AddExpenseForm from './components/AddExpenseForm';
// import { AppProvider } from './context/AppContext';
// import './Imran.css'
// const Imran = () => {
// 	return (
//     <AppProvider>
//         <div className='container'>
//             <h1 className='mt-3'>Expense Ease</h1>
//             <div className='row mt-3'>
//               <div className='col-sm'>
//                   <Budget/>
//               </div>
//               <div className='col-sm'>
//                   <RemainingBudget/>
//               </div>
//               <div className='col-sm'>
//                   <ExpenseTotal/>
//               </div>
//             </div>
//             <h3 className='mt-3'>Expenses</h3>
//             <div className='row '>
//                 <div className='col-sm'>
//                   <ExpenseList/>
//                 </div>
//             </div>
//             <h3 className='mt-3'>Add Expense</h3>
//             <div className='row mt-3'>
//               <div className='col-sm'>
//                 <AddExpenseForm/>
//               </div>
//             </div>
//         </div>
//     </AppProvider>
//   )
// };

// export default Imran;


// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import RemainingBudget from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './context/AppContext';
import './Acc.css'

const Acc = () => {
  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3'>Expense Ease</h1>
        <div className='row mt-3'>
          <div className='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <RemainingBudget />
          </div>
          <div className='col-sm'>
            <ExpenseTotal />
          </div>
        </div>
        <h3 className='mt-3'>Expenses</h3>
        <div className='row '>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
        <h3 className='mt-3'>Add Expense</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default Acc;