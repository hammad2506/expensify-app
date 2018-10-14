import filtersReducer from '../../reducers/filters'
import moment from 'moment';

const defaultState = {
    text: '',
    sortBy: 'date',  //also amount 
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

test('filters Reducer initialization',() => {
    const val = filtersReducer(undefined, { type: '@@INIT' })
    expect(val).toEqual(defaultState)
})

test('Change text filter',() => {
    const action = {
        type: 'CHANGE_TEXT_FILTER',
        text: 'rent'
    }
    const val = filtersReducer(undefined, action)
    expect(val).toEqual({...defaultState, text:'rent'})
})

test('Change Sort filter to date',() => {
    const action = {
        type: 'CHANGE_SORT_BY_FILTER',
        sortBy: 'date'
    }
    const val = filtersReducer(undefined, action)
    expect(val).toEqual({...defaultState, sortBy:'date'})
})

test('Change Sort filter to amount',() => {
    const action = {
        type: 'CHANGE_SORT_BY_FILTER',
        sortBy: 'amount'
    }
    const val = filtersReducer(undefined, action)
    expect(val).toEqual({...defaultState, sortBy:'amount'})
})

test('Change start date',() => {
    const action = {
        type: 'CHANGE_START_DATE',
        startDate: moment(0).add(2, 'days').valueOf()
    }
    const val = filtersReducer(undefined, action)
    expect(val).toEqual({...defaultState, startDate:action.startDate})
})


test('Change start date',() => {
    const action = {
        type: 'CHANGE_END_DATE',
        endDate: moment(0).add(7, 'days').valueOf()
    }
    const val = filtersReducer(undefined, action)
    expect(val).toEqual({...defaultState, endDate:action.endDate})
})