export const changeText = (text='') => ({
    type: 'CHANGE_TEXT_FILTER',
    text
});

export const changeSortBy = (sortBy='date') => ({
    type: 'CHANGE_SORT_BY_FILTER',
    sortBy
});


export const changeStartDate = (startDate) => ({
    type: 'CHANGE_START_DATE',
    startDate
});

export const changeEndDate = (endDate) => ({
    type: 'CHANGE_END_DATE',
    endDate
});
