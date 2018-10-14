import { addExpense, removeExpense, editExpense } from '../../actions/expenses'
import moment from 'moment';
import dummyData from '../dummyData';

describe("Contains all Expenses Actions", () => {
    test('text expense action ADD expense', () => {
        const val = addExpense(dummyData[1]);
        expect(val).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                ...dummyData[1],
                id: expect.anything('String')
            }
        });
    })
    
    test('text expense action ADD expense without data', () => {
        const val = addExpense({});
        expect(val).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                ...{
                    description: '',
                    amount: 0,
                    note: '',
                    createdAt: undefined
                },
                id: expect.anything('String')
            }
        });
    })
    
    test('text expense action REMOVE expense', () => {
        const val = removeExpense({id: 1});
        expect(val).toEqual({
            type: 'REMOVE_EXPENSE',
            id: 1
        });
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
    
    test('text expense action EDIT expense without data', () => {
        const val = editExpense(2, undefined);
        expect(val).toEqual({
            type: 'EDIT_EXPENSE',
            id: 2,
            updates: {}
        });
    })
})


