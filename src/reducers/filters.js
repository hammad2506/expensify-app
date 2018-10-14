import moment from 'moment';

const FiltersDefaultState = {
    text: '',
    sortBy: 'date',  //also amount 
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

const FiltersReducer = (state = FiltersDefaultState, action) => {
    switch(action.type){
        case 'CHANGE_TEXT_FILTER':
            return {...state, text: action.text}
        case 'CHANGE_SORT_BY_FILTER':
            return {...state, sortBy: action.sortBy}
        case 'CHANGE_START_DATE':
            return {...state, startDate: action.startDate}
        case 'CHANGE_END_DATE':
            return {...state, endDate: action.endDate}
        default:
            return state;
    }
}

export default FiltersReducer;