import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import dummyData from '../dummyData';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

beforeAll(()=>{
    database.ref().set({});
});



describe("Expenses Reducers Test Cases", function(){
    
    test('Expense reducer initialization', () => {
        const val = expensesReducer(undefined, {type: '@@INIT'});
        expect(val).toEqual([])
    })
    
    test('Add expense', () => {
        const newExpense = {
            id: '6',
            description: 'New Phone',
            amount: 79900,
            note: 'Finally Iphone X',
            createdAt: moment(0).add(2, 'days').valueOf()
        }
        const val = expensesReducer(dummyData, {type: 'ADD_EXPENSE', expense:newExpense})
        expect(val).toEqual(
            [...dummyData, newExpense]
        );
    })
    
    test('Edit expense with id match', () => {
        const updates = {
            id: '3',
            description: 'Phone Bill reduce',
            amount: 50,
            note: 'Got discount on Phone Bill',
            createdAt: moment(0).add(7, 'days').valueOf()
        }
        const val = expensesReducer(dummyData, {type: 'EDIT_EXPENSE', id:updates.id ,updates})
        expect(val).toEqual(
            [dummyData[0], dummyData[1], updates]
        );
    })
    
    test('Edit expense without id match', () => {
        const updates = {
            id: '4',
            description: 'Phone Bill reduce',
            amount: 50,
            note: 'Got discount on Phone Bill',
            createdAt: moment(0).add(7, 'days').valueOf()
        }
        const val = expensesReducer(dummyData, {type: 'EDIT_EXPENSE', id:updates.id ,updates})
        expect(val).toEqual(
            [...dummyData]
        );
    })
    
    
    test('Remove expense with id match', () => {
       const val = expensesReducer(dummyData, {type: 'REMOVE_EXPENSE', id:'2'})
        expect(val).toEqual(
            [dummyData[0], dummyData[2]]
        );
    })
    
    
    test('Remove expense with no id match', () => {
        const val = expensesReducer(dummyData, {type: 'REMOVE_EXPENSE', id:'4'})
         expect(val).toEqual(
             [...dummyData]
         );
     })

     test('Set expenses', () => {
        const expenses = [dummyData[0], dummyData[2]];
        const val = expensesReducer(dummyData, {
            type: 'SET_EXPENSES',
            expenses
        })
        expect(val).toEqual(expenses);
     });
})
