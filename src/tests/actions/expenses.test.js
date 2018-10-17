import { addExpense, removeExpense, editExpense, 
        startAddExpense, startSetExpenses, setExpenses, 
        startRemoveExpense, startEditExpense } from '../../actions/expenses'
import dummyData from '../dummyData';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

beforeEach((done) => {
    const expensesData = {};
    dummyData.forEach(({ id, description, note, amount, createdAt }) => {
      expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref('expenses').set(expensesData).then(() => done());
  });


describe("Contains all Expenses Actions", () => {
    
    test('text expense action ADD expense', () => {
        const val = addExpense(dummyData[1]);
        expect(val).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                ...dummyData[1]
            }
        });
    })
    
    test('text expense action ADD expense without data', () => {
        const val = addExpense({});
        expect(val).toEqual({
            type: 'ADD_EXPENSE',
            expense:  {}
        });
    })

    test('text expense action START ADD expense', (done) => {
        const store = mockStore({})
        store.dispatch(startAddExpense(dummyData[1])).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense:  {
                    ...dummyData[1],
                    id: expect.any(String)
                }
            });
            done();
        })
    })
    
    test('text expense action REMOVE expense', () => {
        const val = removeExpense({id: 1});
        expect(val).toEqual({
            type: 'REMOVE_EXPENSE',
            id: 1
        });
    })

    test('text expense action START REMOVE expense', (done) => {
        
        const store = mockStore({})
        const id = dummyData[1].id;
        store.dispatch(startRemoveExpense({ id })).then(() => {
            const actions = store.getActions();
                expect(actions[0]).toEqual({
                    type: 'REMOVE_EXPENSE',
                    id: dummyData[1].id
                });
            return database.ref(`expenses/${id}`).once('value');
        })
        .then((value) => {
            expect(value.val()).toBeFalsy();
            done();
        })
    })
    
    test('text expense action EDIT expense', () => {
        const val = editExpense(2, dummyData[2]);
        expect(val).toEqual({
            type: 'EDIT_EXPENSE',
            id: 2,
            updates: {
                ...dummyData[2]
            }
        });
    })
    
    test('test expense action EDIT expense without data', () => {
        const val = editExpense(2, undefined);
        expect(val).toEqual({
            type: 'EDIT_EXPENSE',
            id: 2,
            updates: {}
        });
    })

    test('test expense action START EDIT expense', (done) => {
        const id = dummyData[2].id;
        const updates= {
            description: 'updated desc'
        }
        const store = mockStore({});
        store.dispatch(startEditExpense(id, updates)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'EDIT_EXPENSE',
                id,
                updates
            })
            return database.ref(`expenses/${id}`).once('value')
        })
        .then(updatedData => {
            expect(updatedData.val().description).toBe('updated desc');
            done();
        })
    })

    test('test START Set expenses from DB', (done) => {

            const store = mockStore({})
            store.dispatch(startSetExpenses()).then(() => {
                const actions = store.getActions();
                expect(actions[0]).toEqual({
                    type: 'SET_EXPENSES',
                    expenses: dummyData 
                });
                done();
            })  
     })

     test('test Set expenses from DB', () => {
        const val = setExpenses(dummyData[2]);
        expect(val).toEqual({
            type: 'SET_EXPENSES',
            expenses: dummyData[2]
        });  
     })
})


