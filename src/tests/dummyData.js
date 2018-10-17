import moment from 'moment';

const expenses = [
    {   
        id: '1',
        description: 'Bought Gas',
        amount: 2000,
        note: 'Getting expensive',
        createdAt: moment(0).valueOf()
    },
    {
        id: '2',
        description: 'Electricity',
        amount: 3500,
        note: 'October month',
        createdAt: moment(0).add(3, 'days').valueOf()
    },
    {   
        id: '3',
        description: 'Phone Bill',
        amount: 100,
        note: 'YOLO',
        createdAt: moment(0).add(5, 'days').valueOf()
    }
]

export default expenses;