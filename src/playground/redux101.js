

//Actions
//Add

//Remove
//Edit

//Reducers
// Expenses


//Filters







//Store





store.subscribe(()=>{
    const expenses = store.getState().expenses;
    const filters = store.getState().filters;
    console.log(getVisibleExpenses(expenses, filters));
    
});



const willEdit = store.dispatch(addExpense({
    description: 'rent',
    amount: 1000,
    createdAt: 150
}));

const willRemove = store.dispatch(addExpense({
    description: 'internet bill',
    amount: 250,
    createdAt: 200
}));


store.dispatch(addExpense({
    description: 'internet bill',
    amount: 350,
    createdAt: 100
}));

store.dispatch(changeStartDate());

//store.dispatch(changeEndDate(0));


//store.dispatch(changeText('e'));


store.dispatch(changeSortBy('amount'));
//store.dispatch(removeExpense(willRemove));
//store.dispatch(editExpense(willEdit.id, {description: 'RentV2', amount: 56000}));
