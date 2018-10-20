import React from 'react';
import { connect } from 'react-redux';
import { changeText, changeSortBy, changeStartDate, changeEndDate } from '../actions/filters';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';


export class FiltersList extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            focusedInput: null
        }
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.changeStartDate(startDate);
        this.props.changeEndDate(endDate);
    };

    onTextChange = (e) => {
        const text = e.target.value;
        this.props.changeText(text);
    }

    onSortByChange = (e) => {
        const value = e.target.value;
        if(value === 'date' || value === 'amount'){
            this.props.changeSortBy(value);
        }
    }


    render() {
        return(
            <div className='content-container'>
                <div className='input-group'>
                    <div className='input-group__item'>
                        <input className='text-input' type="text" value={this.props.filters.text} 
                        onChange={this.onTextChange} placeholder='Enter search text here'/>
                    </div>
                    <div className='input-group__item'>
                        <select className='select' value={this.props.filters.sortBy} 
                        onChange={this.onSortByChange}>
                        <option value='date'>Date</option>
                        <option value='amount'>Amount</option>
                        </select>
                    </div>
                    <div>
                        <DateRangePicker 
                                startDate={this.props.filters.startDate}
                                endDate={this.props.filters.endDate}
                                isOutsideRange={() => false}
                                onDatesChange={this.onDatesChange}
                                focusedInput={this.state.focusedInput}
                                onFocusChange={focusedInput => this.setState({ focusedInput })}
                                numberOfMonths={1}
                                showClearDates={true}
                            />
                    </div>
                </div>
             </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    changeText : (text) => dispatch(changeText(text)),
    changeSortBy : (value) => dispatch(changeSortBy(value)),
    changeStartDate : (startDate) => dispatch(changeStartDate(startDate)),
    changeEndDate : (endDate) => dispatch(changeEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(FiltersList);