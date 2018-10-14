import { changeText, changeSortBy, changeStartDate, changeEndDate } from '../../actions/filters';
import moment from 'moment';

test('testing for change text actions', () => {
    const text = 'Test String';
    const val = changeText(text);
    expect(val).toEqual({
        type: 'CHANGE_TEXT_FILTER',
        text
    });
})

test('testing for change sort by to date actions', () => {
    const val = changeSortBy('date');
    expect(val).toEqual({
        type: 'CHANGE_SORT_BY_FILTER',
        sortBy: 'date'
    });
})

test('testing for change sort by to amount actions', () => {
    const val = changeSortBy('amount');
    expect(val).toEqual({
        type: 'CHANGE_SORT_BY_FILTER',
        sortBy: 'amount'
    });
})

test('testing for change start date actions', () => {
    const val = changeStartDate(moment(0));
    expect(val).toEqual({
        type: 'CHANGE_START_DATE',
        startDate: moment(0)
    });
})

test('testing for change end date actions', () => {
    const val = changeEndDate(moment(0));
    expect(val).toEqual({
        type: 'CHANGE_END_DATE',
        endDate: moment(0)
    });
})