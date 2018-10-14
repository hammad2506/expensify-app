import moment from 'moment';

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate } = {}) => {
    
    return expenses.filter((expense) => {
            const momentCreatedAt = moment(expense.createdAt)
            const startDateTest = startDate ? moment(startDate).isSameOrBefore(momentCreatedAt, 'day') : true;
            const endDateTest =  endDate ? moment(endDate).isSameOrAfter(momentCreatedAt, 'day') : true;
            const textTest = expense.description.toLowerCase().includes(text.toLowerCase());
            return startDateTest && endDateTest && textTest;
    }).sort((a,b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        } else if(sortBy === 'amount'){
           return a.amount < b.amount ? 1 : -1
        }
    });
}

export default getVisibleExpenses;