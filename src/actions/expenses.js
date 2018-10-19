import database from '../firebase/firebase';

export const addExpense = (expense) => (
    {
    type: 'ADD_EXPENSE',
    expense
    }
);

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.user;
        const {description = '', amount = 0, note = '', createdAt = undefined} = expenseData;
        const expense = {description, amount, note, createdAt};
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

export const setExpenses = (expenses) => (
    {
        type: 'SET_EXPENSES',
        expenses
    }
);

export const startSetExpenses = () => { 
    return (dispatch, getState) => {
        const uid = getState().auth.user;
        return database.ref(`users/${uid}/expenses`).once('value').then((dataSnapshot) => {
            const expenses = [];
            dataSnapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            }); 
            dispatch(setExpenses(expenses));
        })
    }
}


export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({id}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.user;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense({id}));
        });
    }
}

export const editExpense = ( id, updates= {} ) => ({
    type: 'EDIT_EXPENSE',
    id, 
    updates
});

export const startEditExpense = ( id, updates= {} ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.user;
        return database.ref(`users/${uid}/expenses/${id}`).update({
            ...updates
        }).then(()=>{
            dispatch(editExpense(id, updates));
        });
    }
}
