import moment from 'moment';
import selector from '../../selectors/getVisibleExpenses';
import dummyData from '../dummyData';

const filters = {
    text: "",
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}


test('Text filter with value', () => {
    const val = selector(dummyData, {...filters, text:"e"});
    expect(val).toEqual([dummyData[2], dummyData[1]])
})


test('Text filter empty', () => {
    const val = selector(dummyData, {...filters});
    expect(val).toEqual([dummyData[2], dummyData[1], dummyData[0]])
})

test('sortBy amount', () => {
    const val = selector(dummyData, {...filters, sortBy:'amount'});
    expect(val).toEqual([dummyData[1], dummyData[0], dummyData[2]])
})

test('startDate with no endDate', () => {
    const val = selector(dummyData, {...filters, startDate:moment(0).add(1, 'days').valueOf()});
    expect(val).toEqual([dummyData[2], dummyData[1]])
})

test('endDate with no startDate', () => {
    const val = selector(dummyData, {...filters, endDate:moment(0).add(1, 'days').valueOf()});
    expect(val).toEqual([dummyData[0]])
})

test('startDate and endDate defined 1', () => {
    const val = selector(dummyData, {...filters, 
        startDate:moment(0).add(2, 'days').valueOf(),
        endDate:moment(0).add(5, 'days').valueOf(),
    });
    expect(val).toEqual([dummyData[2], dummyData[1]])
})


test('startDate and endDate defined 2', () => {
    const val = selector(dummyData, {...filters, 
        startDate:moment(0).add(1, 'days').valueOf(),
        endDate:moment(0).add(4, 'days').valueOf(),
    });
    expect(val).toEqual([dummyData[1]])
})